import { act, fireEvent } from '@testing-library/react-native';

import { OnboardingScreen } from './OnboardingScreen';

import { render } from '../../test';
import { ROUTES } from '../../navigation';

const ONBOARDING_TEST_ID = 'ONBOARDING_TEST_ID';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn().mockImplementation(() => ({
    navigate: mockNavigate,
  })),
}));
describe('OnboardingScreen', () => {
  it('should render and navigate', async () => {
    const { getByTestId } = render(
      <OnboardingScreen testID={ONBOARDING_TEST_ID} />,
    );

    const element = getByTestId(ONBOARDING_TEST_ID);

    const button = getByTestId(`${ONBOARDING_TEST_ID}_button`);

    await act(() => fireEvent(button, 'press'));

    expect(element).toBeDefined();

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.SIGN_UP_STACK, {
      screen: ROUTES.SIGN_UP_STEP_ONE_SCREEN,
      params: {},
    });
  });
});
