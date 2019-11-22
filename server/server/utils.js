const jwt = require('jsonwebtoken');
// Used to sign the JWTs issued for the users
const APP_SECRET = 'Gr4phQL4';

// Helper function called in resolvers which require authentication
const getUserId = (context) => {
    const Auth = context.request.get('Authorization');

    if (Auth) {
        const token = Auth.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);

        return userId;
    } else {
        throw new Error('Not authenticated!');
    }
}

module.exports = {
    APP_SECRET,
    getUserId
}