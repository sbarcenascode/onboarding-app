import React from 'react';

import { IconMap } from './iconMap';
import { Props } from './types';

export const Icon = (props: Props) => {
  const { iconName, testID, ...rest } = props;
  const IconComponent = IconMap[iconName];

  return <IconComponent {...rest} testID={testID} />;
};
