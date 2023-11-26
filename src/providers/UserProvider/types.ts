import { PropsWithChildren } from 'react';

import {
  FetchUserGetParams,
  CreateUserPostBody,
  UpdateUserPutBody,
  FetchUserGetResponse,
} from '../../api';

export type CurrentUser = FetchUserGetResponse;

export type UserProviderContextType = {
  currentUser: FetchUserGetResponse | undefined;
  createUser: (body: CreateUserPostBody) => void;
  updateUser: (body: UpdateUserPutBody) => void;
  fetchUser: (params: FetchUserGetParams) => void;
};

export type Props = PropsWithChildren;
