import { Image } from './Image';

import { render } from '../../../../test';

const IMAGE_TEST_ID = 'IMAGE_TEST_ID';

describe('Image', () => {
  it('should render', () => {
    const { findByTestId } = render(
      <Image imageName={'dotedLine'} testID={IMAGE_TEST_ID} />,
    );
    const component = findByTestId(IMAGE_TEST_ID);

    expect(component).toBeDefined();
  });
});
