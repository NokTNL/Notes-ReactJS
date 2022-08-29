- `create-react-app` has installed all packages you need to do testing in react. This includes:

  - `@testing-library/jest-dom` <-- assertion library (deciding what passes tests or not)
  - `@testing-library/react` <-- rendering library
  - `@testing-library/user-event` <-- For firing user events, e.g. clicking a button

- You may need to include a `jsconfig.json` (or `tsconfig.json`, same) to enable auto-completion for jest-dom, beacause VS Code does not know you are inject jest as a global object. See https://humanwhocodes.com/snippets/2019/05/jest-globals-intellisense-visual-studio-code/

- You will need `src/setupTests.js` now to inject `jest-dom` in test files, so don't delete it!
