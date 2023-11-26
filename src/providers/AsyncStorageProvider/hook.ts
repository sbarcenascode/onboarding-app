import { useContext } from 'react';

import { AsyncStorageContext } from './context';

export const useAsyncStorageContext = () => {
  return useContext(AsyncStorageContext);
};
