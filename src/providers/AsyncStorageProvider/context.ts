import { createContext } from 'react';

import { AsyncStorageContextType } from './types';

export const AsyncStorageContext = createContext<AsyncStorageContextType>({
  data: {},
  isLoading: false,
} as AsyncStorageContextType);
