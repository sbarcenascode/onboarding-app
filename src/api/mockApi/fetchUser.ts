import { FetchUserGetParams, FetchUserGetResponse } from '../types';
import { env } from '../../utils';
import { axios } from '../axios';
import { getApiUrl } from '../utils';

export const fetchUser = async ({
  id,
}: FetchUserGetParams): Promise<FetchUserGetResponse> => {
  const url = getApiUrl(`users/${id}`);

  console.log(url);
  if (env.USE_MOCK_API) {
    return {
      id: '1',
      email: 'test@test.com',
      first_name: 'react test',
      last_name: 'native test',
      phone: '3127126417',
    };
  }

  const { data } = await axios.get<FetchUserGetResponse>(url);

  return data;
};
