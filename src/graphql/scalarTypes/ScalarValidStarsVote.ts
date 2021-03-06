import GraphQLScalarTypes from 'graphql-scalar-types';

// This scalar defines that a valid star vote is an integer between 0 and 5
export default GraphQLScalarTypes.number('ScalarValidStarsVote')
    .describe('A stars vote between 0 and 5')
    .min(0)
    .max(5)
    .precision(1)
    .create();
