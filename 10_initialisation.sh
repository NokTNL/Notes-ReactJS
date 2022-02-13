# Creating a new React App
- Install Node.js (that will include npm)
- Then go to where you want to create your master app fodler
- Then use 'Create-React-App' from `npx` to create a new React app template with the newest libraries downloaded:

> npx create-react-app <app-folder-name>

The created directory structure is like this:

app-folder-name
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js

`package.json`: listed what dependencies (libraries) are needed in this project
`node_modules`: this folder contains all the modules (libraries) downloaded as listed in `package.json`
--> if you upadted the dependencies in `package.json`, you can run this to update `node_modules` folder:

> npm install

`src`: files inside will create an example React app. The only important file is `index.js`.
- `index.js` will always be run FIRST. The remaining files in the `src` can be imported into `index.js`

To run the React app, at the top of the app folder, in the terminal type:
> npm start
- Then it will run `index.js`, transpile it into the JavaScript, and inject into `public/index.html`
  so that it will be run by the browser


# To copy current src files into a folder:
> shopt -s extglob
> cp -R !(+([0-9])* | temp ) temp # So not to copy anything starting with numbers or 'temp'

