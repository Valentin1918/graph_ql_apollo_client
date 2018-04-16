// this executable schema is not the same as needed json for graphql.schema.json

import { HttpLink } from 'apollo-link-http';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

export const makeSchema = async () => {
  const link = new HttpLink({ uri: 'http://localhost:4000/graphql', fetch });
  return makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link
  });
};
