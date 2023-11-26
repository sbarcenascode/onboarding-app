import { createUseStyle } from '../../../hooks';

export const useStyle = createUseStyle((theme) => ({
  container: {
    alignItems: 'center',
    marginTop: theme.spacings['2xl'],
  },
  dottedIconWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    height: 80,
  },
}));
