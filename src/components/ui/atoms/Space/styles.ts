import { createUseStyle } from '../../../../hooks';

export const useStyle = createUseStyle((theme, props?: { height: number }) => ({
  container: {
    height: props?.height,
  },
}));
