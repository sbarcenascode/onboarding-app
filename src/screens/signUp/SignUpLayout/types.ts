import { PropsWithChildren } from 'react';

import { TestableComponent } from '../../../types';

export type Props = TestableComponent<
  {
    showGoBack?: boolean;
    title: string;
  } & PropsWithChildren
>;
