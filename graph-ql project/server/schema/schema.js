const graphql = require('graphql')

//Importing specific libraries from graphql
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = graphql

//Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentaion for user...',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})