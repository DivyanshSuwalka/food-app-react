import { sum } from "../sum";
test("Check sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});





























/**
 * Different type of testing:
 *  - manual testing
 *  - Automation testing:
 *      - selenium testing
 *
 * - E2E testing - covers entire user journey
 *
 * - unit testing
 * - integration testing
 *
 *
 * Steps to set up testing environment:
 * - npm install --save-dev @testing-library/react @testing-library/dom
 * - npm i -D jest
 * - configure jest (npx jest --init) (to make a jest.config.js file)
 * - installed jest-environment-jsdom
 * - create 1st test file (inside components __tests__ and inside it sum.test.js)   (SyntaxError: Cannot use import statement outside a module)
 * - jest babel configuration: (npm install --save-dev babel-jest @babel/core @babel/preset-env)  (https://jestjs.io/docs/getting-started#using-babel)
 * -
 *
 */
