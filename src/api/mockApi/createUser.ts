import { AxiosResponse } from 'axios';

import { CreateUserPostBody, CreateUserPostResponse } from '../types';
import { env } from '../../utils';
import { axios } from '../axios';
import { getApiUrl } from '../utils';

export const createUser = async (
  body: CreateUserPostBody,
): Promise<CreateUserPostResponse> => {
  const url = getApiUrl('users/save');

  if (env.USE_MOCK_API) {
    console.log(body);

    return { ...body };
  }

  const { data } = await axios.post<
    any,
    AxiosResponse<CreateUserPostResponse>,
    CreateUserPostBody
  >(url, { ...body });

  return data;
};
