import { createContext } from 'react';

import { UserProviderContextType } from './types';

export const UserProviderContext = createContext<UserProviderContextType>({
  currentUser: {},
} as UserProviderContextType);
