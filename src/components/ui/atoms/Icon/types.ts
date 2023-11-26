import { IconMap } from './iconMap';

export type IconName = keyof typeof IconMap;

export type Props = {
  iconName: IconName;
  width?: number;
  height?: number;
  testID?: string;
};
