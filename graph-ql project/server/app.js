// adding all the required dependencies
const express = require('express')
const {graphqlHTTP} = require('express-graphql')

// creating an express app
const app = express()

// main routug url i.e localhost:4000/graphql
// when the user hits this user show graphiql interface
app.use('/graphql', graphqlHTTP({
    //user interface where you can type query
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening for request on port 4000')
})