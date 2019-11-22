const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../src/generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Subscription = require('./resolvers/Subscription');
const Vote = require('./resolvers/Vote');

//https://github.com/catalinpit/GraphQL-UM
//https://www.howtographql.com/graphql-js/6-authentication/
//https://developer.okta.com/blog/2019/05/29/build-crud-nodejs-graphql

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
};

const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
});

server.start(() => console.log(`The server runs on localhost:4000!`));