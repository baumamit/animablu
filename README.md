# animablu
Anima Blu website for Francesco Canale
Created by Amit Baum as part of the stage at Kilobit Torino
------------------------------------------

This website is built with TypeScript on the node.js environment and the React library
Pre-requisits to install:
Visual Studio Code
Check Node.js version:
npm -v
Check Git version:
git --version

------------------------------------------
CONNECT GITHUB
------------------------------------------

------ Setup VScode workstation on your PC / MacOS:
git config user.email "youremail@example.com"
git config user.name "Your Name"

------ Create a GitHub project:
On GitHub.com, create a new repository.

------ Clone your GitHub project to Visual Studio Code
Inside the main branch code of the new repository, click on the "Code" button and coppy the Clone HTTPS URL of your project:
https://github.com/your-user-name/new-project-name.git
The following command creates a new folder where you run it, and clones the GitHub project inside it:
git clone URL_of_your_new_project_from_github


------------------------------------------
CREATE AND CONFIGURE A NEW REACT PROJECT
------------------------------------------
------ Create a React App package inside the root folder:
npx create-react-app new-project-name

------ Create a tsconfig.json file inside the root folder:
tsc --init

Now you can configure and customize TypeScript compilation options.
Modify the tsconfig.json file for the latest React version:
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    // "jsx": "react-jsx", /* For the latest React version, without preserving the jsx code on buildup */
    "jsx": "preserve" /* Use "jsx": "preserve" when you want the JSX code to remain intact for further processing by a build tool or bundler. */
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
  },
  "include": ["src"]
}

------------------------------------------
PULL AND RUN COLLABORATIVE PROJECT
------------------------------------------
------ Pull the GitHub project to Visual Studio Code:
git pull

------ Install or update all the node modules used by the project:
npm install

------ Run the React app on localhost:3000 :
npm start

------------------------------------------
WORK WITH TYPESCRIPT
------------------------------------------
------ Install TypeScript globally with the latest stable version:
npm install -g -D typescript
On MacOS use this command instead:
sudo npm install -g -D typescript
Note that if permoission is requested what you type is invisible yet you can just type and press ENTER.
Check the installed version:
tsc -v

------ Change extensions from JS to React:
index.js --> index.tsx

------ Specify the type of each parameter:
For example:

document.getElementById('root') --> document.getElementById('root') as HTMLElement

import logo from './logo.svg' --> import { ReactComponent as Logo } from './logo.svg'
  or create a file named custom.d.ts in your src folder with the following content:
    declare module '*.svg' {
      const content: string;
      export default content;
    }

------------------------------------------
INSTALL USEFULL PACKAGES
------------------------------------------
------ Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
------ Initialize Tailwind CSS:
npx tailwindcss init -p

The official documentation:
https://tailwindcss.com/docs/guides/create-react-app

In the Visual Studio Code extentions section, search and install:
Tailwind CSS IntelliSense

------ Install React Icons if you would like to import ready icons
npm install react-icons
------ Install TypeScript types for React Icons
npm install --save-dev @types/react-icons

------ Install React Tooltip for showing popping text on hover
npm install react-tooltip
------ Install TypeScript types for React Tooltip
npm install --save-dev @types/react-tooltip

More info on the official website:
https://react-tooltip.com/docs/getting-started

------ Install React Router DOM for handling routing in single-page applications (not used in this app)
npm install react-router-dom



------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
