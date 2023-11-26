import React from 'react';

import { Icon } from './Icon';

import { render } from '../../../../test';

const ICON_TEST_ID = 'ICON_TEST_ID';

describe('Icon', () => {
  it('should render', () => {
    const { findByTestId } = render(
      <Icon iconName="chevronLeft" testID={ICON_TEST_ID} />,
    );
    const component = findByTestId(ICON_TEST_ID);

    expect(component).toBeDefined();
  });
});
