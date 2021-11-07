# SEDNA Technical Test

## Introduction
Brief: Create an application in which users can add up to 5 tags to a list of films.  
Tags should be removable, but not editable, and should be persisted across browser sessions.  

See a deployed version here: [https://samwaters.github.io/sedna/](https://samwaters.github.io/sedna/)

## Project Structure
The project is built on React, using Styled Components for the UI, and the source is written in Typescript.  
Data is managed in Redux, and processed using Sagas. It is also synced into localstorage.  

The application's entrypoint is `index.tsx`, which sets up all of the providers (such as Redux) and then renders the application.  
The start of the application's rendered structure is in `app.tsx` (rendered by `index.tsx`), which renders the UI components.

### Configs
The application loads different configs depending on which mode it is built in (see Building below).  
Different API endpoints can be configured for dev and prod mode in these configs.

### Folder Structure
The source of the application is in the `src` folder, with the following structure:
* `actions` - action creators for redux actions
* `components` - React components for the UI
* `config` - The application configurations
* `reducers` - Reducers for Redux state
* `sagas` - Sagas for processing Redux actions
* `selectors` - Selectors for retrieving data from the Redux store

## Building
### Dependencies
Install  the required dependencies with `yarn`
### Building
To build the application, run `yarn build` - this will compile the application and put the resulting bundles in `dist`

## Running
By default, the application will run in PROD mode, which will minify the bundle and remove source maps.  
To change this, set `NODE_ENV` appropriately:
* `export NODE_ENV=development` for dev mode
* `export NODE_ENV=production` for prod mode

The application can be started, in the mode specified above, using `yarn start`, which will run `webpack-dev-server` and launch the application on [http://localhost:9002](http://localhost:9002)

## Further Improvements
* Server side rendering
* Lazy loading
* Splitting UI components out into separate files rather than cluttering the main component
* Better mobile support
