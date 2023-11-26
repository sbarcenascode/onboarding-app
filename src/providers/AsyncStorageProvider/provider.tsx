import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageContext } from './context';
import { AsyncStorageData, AsyncStorageDataKey } from './types';

export function AsyncStorageProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState({} as AsyncStorageData);
  const [isLoading, setIsLoading] = useState(true);

  const setItem = useCallback(
    async (key: AsyncStorageDataKey, value: string) => {
      await AsyncStorage.setItem(key, value);

      setData((currentData) => ({ ...currentData, [key]: value }));
    },
    [],
  );

  const getItem = useCallback(
    async (key: AsyncStorageDataKey) => {
      if (data?.[key]) {
        return data?.[key];
      }

      return await AsyncStorage.getItem(key);
    },
    [data],
  );

  const removeItem = useCallback(
    async (key: AsyncStorageDataKey) => {
      await AsyncStorage.removeItem(key);

      const updatedData = { ...data };

      delete updatedData?.[key];

      setData(updatedData);
    },
    [data],
  );

  const loadItems = useCallback(async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    setData({ ...Object.fromEntries(result) } as AsyncStorageData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <AsyncStorageContext.Provider
      value={{ data, isLoading, setItem, getItem, removeItem }}
    >
      {children}
    </AsyncStorageContext.Provider>
  );
}
