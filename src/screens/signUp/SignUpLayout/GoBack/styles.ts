import { createUseStyle } from '../../../../hooks';

export const useStyle = createUseStyle(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
}));
