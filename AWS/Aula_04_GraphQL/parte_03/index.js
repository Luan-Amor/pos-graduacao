var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const dados = {
    temp_max: 33,
    temp_min: 3,
    temp_atual: 21,
    cidade: 'Brasilia',
    horario: new Date().getTime()
} 

var schema = buildSchema(`
    type ClimaTempo {
        temp_max: Int
        temp_min: Int
        temp_atual: Int
        cidade: String
        horario: String
    }

    type Query {
        getClima: ClimaTempo
    }
`);

var root = {
    getClima: () => {
        return dados;
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');