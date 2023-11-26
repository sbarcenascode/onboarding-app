type AsyncStorageItem = string | undefined;

export type AsyncStorageData = {
  user: AsyncStorageItem;
  hasCreatedOneUser: AsyncStorageItem;
  storedForm: AsyncStorageItem;
};

export type AsyncStorageDataKey = keyof AsyncStorageData;

export type AsyncStorageContextType = {
  isLoading: boolean;
  data: AsyncStorageData;
  setItem: (key: AsyncStorageDataKey, value: string) => void;
  getItem: (key: AsyncStorageDataKey) => Promise<AsyncStorageItem | null>;
  removeItem: (key: AsyncStorageDataKey) => void;
};
