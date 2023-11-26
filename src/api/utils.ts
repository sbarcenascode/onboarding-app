import { env } from '../utils';

export const getApiUrl = (fragment: string) => {
  return `${env.API_URL}/${fragment}`;
};
