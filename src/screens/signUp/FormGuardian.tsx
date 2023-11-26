import { useEffect } from 'react';

import { FormGuardianType } from './types';

import { useAsyncStorageContext } from '../../providers/AsyncStorageProvider';

export const FormGuardian = ({ values }: FormGuardianType) => {
  const { setItem } = useAsyncStorageContext();

  useEffect(() => {
    setItem('storedForm', JSON.stringify(values));
  }, [setItem, values]);

  return null;
};
