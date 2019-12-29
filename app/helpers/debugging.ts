/* eslint-disable no-undef */
export const consoleInDebugModeOnly = (...params) => {
  if (__DEV__) {
    console.log(...params);
  }
};
