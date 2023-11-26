import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { UserProviderContext } from './context';
import { Props, CurrentUser } from './types';

import { env } from '../../utils';
import {
  CreateUserPostBody,
  CreateUserPostFailResponse,
  FetchUserGetFailResponse,
  FetchUserGetParams,
  UpdateUserPutBody,
  UpdateUserPutFailResponse,
  fetchUser as fetchUserApi,
  createUser as createUserApi,
  updateUser as updateUserApi,
} from '../../api';
import { useAsyncStorageContext } from '../AsyncStorageProvider';

export const UserProvider = ({ children }: Props) => {
  const {
    data: asyncStorageData,
    setItem: asyncStorageSetItem,
    isLoading: isLodingAsyncStorage,
  } = useAsyncStorageContext();

  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>(
    undefined,
  );

  const fetchUser = useCallback(
    async (data: FetchUserGetParams) => {
      try {
        const user = await fetchUserApi(data);

        asyncStorageSetItem('user', JSON.stringify(user));
        setCurrentUser(user);
      } catch (e: any) {
        const error = e as FetchUserGetFailResponse;

        console.error(error.error.message);
      }
    },
    [asyncStorageSetItem],
  );

  const createUser = useCallback(
    async (body: CreateUserPostBody) => {
      try {
        const response = await createUserApi(body);

        setCurrentUser(response as CurrentUser);
        asyncStorageSetItem('user', JSON.stringify(response));
        asyncStorageSetItem('hasCreatedOneUser', 'true');
        Alert.alert('Information', 'Form submitted');
      } catch (e: any) {
        const error = e as CreateUserPostFailResponse;

        console.error(error.error.message);
      }
    },
    [asyncStorageSetItem],
  );

  const updateUser = useCallback(
    async (body: UpdateUserPutBody) => {
      try {
        const response = await updateUserApi(body);

        setCurrentUser(response as any);
        asyncStorageSetItem('user', JSON.stringify(response));
        asyncStorageSetItem('hasCreatedOneUser', 'true');
        Alert.alert('Information', 'Form updated');
      } catch (e: any) {
        const error = e as UpdateUserPutFailResponse;

        console.error(error.error.message);
      }
    },
    [asyncStorageSetItem],
  );

  const retrieveStoredUser = useCallback(() => {
    if (isLodingAsyncStorage) return;

    if (asyncStorageData?.hasCreatedOneUser && env.USE_MOCK_API) {
      if (typeof asyncStorageData?.user === 'string') {
        const retrieved = JSON.parse(asyncStorageData?.user);

        setCurrentUser(retrieved);

        return;
      }
    }
    if (!env.USE_MOCK_API) {
      fetchUser({ id: '1' });

      return;
    }
  }, [
    asyncStorageData?.hasCreatedOneUser,
    asyncStorageData?.user,
    fetchUser,
    isLodingAsyncStorage,
  ]);

  useEffect(() => {
    retrieveStoredUser();
  }, [retrieveStoredUser]);

  return (
    <UserProviderContext.Provider
      value={{ createUser, currentUser, updateUser, fetchUser }}
    >
      {children}
    </UserProviderContext.Provider>
  );
};
