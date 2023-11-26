import {RootNavigationParamLists} from './types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigationParamLists {}

    type RouteNames = keyof RootNavigationParamLists;
  }
}
