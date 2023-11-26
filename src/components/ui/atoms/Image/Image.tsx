import React, { useMemo } from 'react';
import { Image as RNImage } from 'react-native';

import { Props } from './types';
import { imageMap } from './imageMap';

export const Image = ({ imageName, testID, ...rest }: Props) => {
  const imageSource = useMemo(() => {
    return imageMap[imageName];
  }, [imageName]);

  return (
    <RNImage testID={testID} alt="imageName" source={imageSource} {...rest} />
  );
};
