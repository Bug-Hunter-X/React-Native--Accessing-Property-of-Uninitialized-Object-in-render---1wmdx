# React Native: Accessing Property of Uninitialized Object

This repository demonstrates a common React Native error: accessing a property of an object before it's initialized, often in the `render` method. This can lead to crashes or unexpected behavior.

## Problem

The `bug.js` file showcases this issue.  The component attempts to access `this.state.data.someProperty` before `this.state.data` is fully populated.  This causes the app to crash or render incorrectly.

## Solution

The `bugSolution.js` file provides a solution.  It incorporates conditional rendering to prevent attempting to access `someProperty` until `this.state.data` is available.  This also demonstrates optional chaining (?.) and nullish coalescing (??).

## How to run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`.