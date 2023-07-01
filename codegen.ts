import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://ec2-52-59-235-173.eu-central-1.compute.amazonaws.com:3000/graphql',
  documents: 'src/**/!(*.d).{ts,tsx}',
  generates: {
    './src/shared/lib/types/__generated-types__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
