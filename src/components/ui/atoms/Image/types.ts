import { imageMap } from './imageMap';

import { TestableComponent } from '../../../../types';

export type ImageName = keyof typeof imageMap;

export type Props = TestableComponent<{
  imageName: ImageName;
  width?: number;
  height?: number;
}>;
