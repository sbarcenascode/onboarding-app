export type TestableComponent<T extends object = object> = T & {
  testID?: string;
};