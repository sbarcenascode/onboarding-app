import { USE_MOCK_API, API_URL } from '@env';

export const env = {
  API_URL: API_URL,
  USE_MOCK_API: USE_MOCK_API === 'true',
};
