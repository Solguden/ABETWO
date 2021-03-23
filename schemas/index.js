const { SchemaComposer } = require( 'graphql-compose');

const schemaComposer = new SchemaComposer();
const { RoomQuery, RoomMutation } = require ('./rooms');

schemaComposer.Query.addFields({
    ...RoomQuery
});

schemaComposer.Mutation.addFields({
    ...RoomMutation
});

module.exports = schemaComposer.buildSchema();