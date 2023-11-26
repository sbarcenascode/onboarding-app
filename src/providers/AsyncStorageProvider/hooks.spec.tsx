import * as AsyncStorage from '@react-native-async-storage/async-storage';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useAsyncStorageContext } from './hook';

import { testWrappers } from '../../test';

describe('useAsyncStorageContext', () => {
  it('should fill all storage data at first render', async () => {
    const getAllKeysSpy = jest.spyOn(AsyncStorage, 'getAllKeys' as any);
    const multiGetSpy = jest.spyOn(AsyncStorage, 'multiGet' as any);

    renderHook(() => useAsyncStorageContext(), {
      wrapper: testWrappers,
    });

    waitFor(() => {
      expect(getAllKeysSpy).toBeCalled();
      expect(multiGetSpy).toBeCalled();
    });
  });
});
