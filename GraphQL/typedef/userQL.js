const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserQL = new GraphQLObjectType({
    name: "UserSchema",
    fields: () => ({
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

module.exports = UserQL;
