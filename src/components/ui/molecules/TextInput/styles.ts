import { createUseStyle } from '../../../../hooks';

export const useStyle = createUseStyle((theme) => ({
  container: {
    paddingHorizontal: theme.spacings['m-plus'],
    paddingVertical: theme.spacings.m,
    borderWidth: theme.borderWidths.thin,
    borderColor: theme.colors['disable-elements'],
    borderRadius: theme.radii.m,
  },
  focused: {
    borderColor: theme.colors['blue-100'],
  },
  textInput: { padding: 0, height: 23 },
  errorWrapper: { paddingLeft: theme.spacings.s, marginTop: theme.spacings.xs },
}));
