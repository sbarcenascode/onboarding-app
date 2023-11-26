import { useContext } from 'react';

import { UserProviderContext } from './context';

export const useUserProvider = () => {
  return useContext(UserProviderContext);
};
