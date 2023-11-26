import { createUseStyle } from '../../../hooks';

export const useStyle = createUseStyle((theme) => ({
  container: { flex: 1 },
  header: {
    alignItems: 'center',
    marginTop: theme.spacings['3xl'],
  },
  avatarIconWrapper: {
    marginBottom: theme.spacings['l'],
    width: 66,
    height: 66,
  },
  flex: { flexGrow: 1 },
  body: { flex: 1, marginTop: theme.spacings['2xl'] },
  bottom: {},
}));
