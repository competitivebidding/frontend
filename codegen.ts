import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://competitivebiddingapi.onrender.com/graphql',
  documents: 'src/**/!(*.d).{ts,tsx}',
  generates: {
    './src/shared/lib/types/__generated-types__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    },
  },
  ignoreNoDocuments: true,

};

export default config;
