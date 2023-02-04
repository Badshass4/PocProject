/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
// src: https://github.com/vanGalilea/react-native-testing

/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import { jest } from '@jest/globals';
import '@testing-library/jest-native/extend-expect';
import { cleanup } from '@testing-library/react-native';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'jsdom-global/register';
import * as luxon from 'luxon';
import nodeFetch from 'node-fetch';
import 'react-native-gesture-handler/jestSetup';
import { mswNodeMockServer } from './src/msw/node-server';

// Disable __DEV__ For tests
global.__DEV__ = false;

global.fetch = nodeFetch;
global.Headers = nodeFetch.Headers;
global.Request = nodeFetch.Request;

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });

// Silence console logs. Uncomment this if needed for local testing
console.error = () => null;
console.log = () => null;
console.debug = () => null;
console.warn = () => null;

jest.mock('react-native/Libraries/LogBox/LogBox');

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('@microsoft/applicationinsights-react-native', () => ({
  ReactNativePlugin: class ReactNativePlugin {
    trackEvent() {}
  },
}));

jest.mock('@microsoft/applicationinsights-web', () => ({
  ApplicationInsights: class ApplicationInsights {
    loadAppInsights() {}

    trackEvent() {}
  },
}));

// Fool Luxon into thinking today is the date as our fake data
luxon.Settings.defaultZone = 'utc';
const fakeToday = luxon.DateTime.fromISO('2022-06-02T00:00:00.000Z');
luxon.Settings.now = () => fakeToday.valueOf();

beforeAll(() => {
  mswNodeMockServer.listen({ onUnhandledRequest: 'warn' });
});

afterAll(() => {
  mswNodeMockServer.close();
});

afterEach(() => {
  mswNodeMockServer.resetHandlers();
  cleanup();
});
