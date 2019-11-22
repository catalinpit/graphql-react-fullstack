const { APP_SECRET, getUserId } = require('../utils.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signup = async (root, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({...args, password});
    const token = await jwt.sign({userId: user.id}, APP_SECRET);

    return {
        token,
        user
    }
};

const login = async (root, args, context) => {
    const user = await context.prisma.user({ email: args.email });
    const valid = await bcrypt.compare(args.password, user.password);

    if (!valid) {
        throw new Error("Invalid credentials!");
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
        token, 
        user
    }
};

const post = async (root, args, context) => {
    const userId = getUserId(context);
    
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } }
    });
};

const vote = async (root, args, context) => {
    const userId = getUserId(context);

    const linkExists = await context.prisma.$exists.vote({ 
        user: { id: userId },
        link: { id: args.linkId },
    });

    if (linkExists) {
        throw new Error(`Already voted for link ${args.linkId}!`);
    }

    return context.prisma.createVote({
        user: { connect: { id: userId } },
        link: { connect: { id: args.linkId } },
    });
};

module.exports = {
    signup,
    login,
    post,
    vote,
};