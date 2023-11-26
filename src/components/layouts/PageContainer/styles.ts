import { createUseStyle } from '../../../hooks';

export const useStyle = createUseStyle((theme) => ({
  container: {
    padding: theme.spacings.xl,
    flex: 1,
  },
}));
