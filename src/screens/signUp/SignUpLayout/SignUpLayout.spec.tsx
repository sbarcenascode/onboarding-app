import { SignUpLayout } from './SignUpLayout';

import { render } from '../../../test';

const SIGNUP_LAYOUT_TEST_ID = 'SIGNUP_LAYOUT_TEST_ID';

describe('SignUpLayout', () => {
  it('should render', async () => {
    const { getByTestId } = render(
      <SignUpLayout title={'title'} testID={SIGNUP_LAYOUT_TEST_ID} />,
    );

    const component = getByTestId(SIGNUP_LAYOUT_TEST_ID);

    expect(component).toBeDefined();
  });
});
