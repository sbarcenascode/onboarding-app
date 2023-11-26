import { act, fireEvent } from '@testing-library/react-native';

import { GoBack } from './GoBack';

import { ROUTES } from '../../../../navigation';
import { render } from '../../../../test';

const GO_BACK_TEST_ID = 'GO_BACK_TEST_ID';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn().mockImplementation(() => ({
    goBack: mockGoBack,
  })),
}));

describe('GoBack', () => {
  it('should render and navigate if go back is pressed', async () => {
    const { getByTestId } = render(<GoBack testID={GO_BACK_TEST_ID} />);

    const component = getByTestId(GO_BACK_TEST_ID);

    await act(() => fireEvent(component, 'press'));

    expect(component).toBeDefined();
    expect(mockGoBack).toHaveBeenCalled();
  });
});
