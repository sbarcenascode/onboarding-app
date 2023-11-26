import { createUseStyle } from '../../hooks';

export const useStyle = createUseStyle((theme) => ({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: theme.colors['blue-100'],
  },
  container: { flex: 1 },
  flex: { flex: 1 },
  header: { marginBottom: theme.spacings['3xl'] },
  body: { flex: 1 },
  bottom: { width: '100%' },
}));
