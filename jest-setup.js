import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

// jest.setup.js

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
