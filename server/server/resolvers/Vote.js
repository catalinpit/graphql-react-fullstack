const link = (root, args, context) => {
    return context.prisma.vote({ id: root.id }).link();
};

const user = (root, args, context) => {
    return context.prisma.vote({ id: root.id }).user();
};

module.exports = {
    link,
    user,
};