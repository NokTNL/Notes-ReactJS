- `create-react-app` has installed all packages you need to do testing in react. This includes:

  - `@testing-library/jest-dom` <-- assertion library (deciding what passes tests or not)
  - `@testing-library/react` <-- rendering library
  - `@testing-library/user-event` <-- For firing user events, e.g. clicking a button

- You may need to include a `jsconfig.json` (or `tsconfig.json`, same) to enable auto-completion for jest-dom, beacause VS Code does not know you are inject jest as a global object. See https://humanwhocodes.com/snippets/2019/05/jest-globals-intellisense-visual-studio-code/

- You will need `src/setupTests.js` now to inject `jest-dom` in test files, so don't delete it!

# Liniting

- You may want to warn for bad testing practices. There are ESLint plugins for RTL and jest-dom, respectively
- Since CRA has `eslint` installed as a peer depenedency already, just install the two plugins:
  - `npm install --save-dev eslint-plugin-jest-dom`
  - `npm install --save-dev eslint-plugin-testing-library`
- Then add the following in `"eslintConfig"` property in `package.json` (or in a seperate `.eslintrc.json`, only one file will be used): (https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats)

```
{
  "eslintConfig": {
    "plugins": [
      "jest-dom",
      "testing-library"
    ],
    "extends": [
      "react-app",
      "react-app/jest",
      "plugin:testing-library/react",
      "plugin:jest-dom/recommended"
    ]
  },
}
```

- You can also add the `"rules"` property to fine-tune the rules you want to enable/disable
