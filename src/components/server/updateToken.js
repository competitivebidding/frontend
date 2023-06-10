import { gql, useMutation } from '@apollo/client';

const REFRESH_TOKEN_MUTATION = gql`
  mutation GetNewTokens {
    getNewTokens {
      refreshToken
      accessToken
    }
  }
`;

const updateTokens = () => {
  const [refreshTokenMutation] = useMutation(REFRESH_TOKEN_MUTATION);

  const refreshToken = async () => {
    try {
      const { data } = await refreshTokenMutation();

      const { accessToken, refreshToken } = data.getNewTokens;

      // Обновите access токен и refresh токен в вашем хранилище
      // в соответствии с вашей реализацией хранения токенов.
      // Например:
      // updateTokens(accessToken, refreshToken);
    } catch (error) {
      // Обработайте ошибку, если не удалось обновить токены
    }
  }
};

export default updateTokens
