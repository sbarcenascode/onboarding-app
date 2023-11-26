import { AxiosResponse } from 'axios';

import { UpdateUserPutBody, UpdateUserPutResponse } from '../types';
import { env } from '../../utils';
import { axios } from '../axios';
import { getApiUrl } from '../utils';

export const updateUser = async (
  body: UpdateUserPutBody,
): Promise<UpdateUserPutResponse> => {
  const url = getApiUrl(`users/${body?.id}`);

  console.log(url);

  if (env.USE_MOCK_API) {
    console.log(body);

    return { ...body };
  }

  const { data } = await axios.put<
    any,
    AxiosResponse<UpdateUserPutResponse>,
    UpdateUserPutBody
  >(url, { ...body });

  return data;
};
