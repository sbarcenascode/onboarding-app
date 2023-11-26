import { createUseStyle } from '../../hooks';

export const useStyle = createUseStyle((theme) => ({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: { flex: 1 },
  flex: { flex: 1 },
  formikWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: { marginBottom: theme.spacings.l },
}));
