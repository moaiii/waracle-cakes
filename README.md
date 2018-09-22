# WARACLE TECHNICAL TEST - CAKES APP

## LIVE LINK
- `http://moaiii-waracle-cakes-app.s3-website-eu-west-1.amazonaws.com`

## AUTHORS NOTES
To find my comments on the code enclosed, run find all on the string ` * Author note:`

## COOKIE CUTTER
- Ive added some of my shell code which produces basic code templates for this react app. 
- This has been pre made and developed over a number of months. They are basic shell scripts to skeleton out the laborious parts of module based application development with React. I have ambitions to expand this to utilise node streams for greater control. 
- They are added to my bash alias' and run as follows: 
- - react-init - initialises the app from the basic create-react-app configuration. Builds the basic folder structure
- -  react-cv [create view] - creates component pods in `src/ui/views` with .jsx, .action, .reducer, .middleware, .test, .type and index files within the pod. 
- Ultimately These get us up and running rapidly and keep the creative code going without having to get bogged down in re-typing the same file structure over and over. * inspired by Angular. 

## TO RUN
- build tool is node
- see package.jon for build scripts
- I have upload `.env.qa` and `.env.prod` to demonstrate using a build tool with multiple envionments
- run `npm run dev:qa` or `npm run dev:prod` to start the app process with different env configs 
- both config files are the same in this example, I simply wanted to show proper architecture

## The front end app is structured into the following main components

### DB
- The redux section of the application 
- Holds the `Store` reducers and `Middleware` router
- also has a `global` action/reducer which helps with things that dont relate to UI components. Like pre data, or getting and setting app config's.

### LIB
- Application and business logic shared by the entire app
- - `Api` - How we expect to communicate with any apis we want to connect to. Here we would hold the list of routes and expected return codes etc
- - `Auth` - here we would use house JWT or OAuth code for the app, most likely the router would be the main consumer of this
- - `Environment` - Setting debug options dependant on env set in the package.json
- - `Network` - DRY practise to reuse the logic for making async communications over the network
- - `Redux` - DRY practise to reuse logic for action creators/ network action creators and reducer state objects 
- - `Types` - Interfaces or models for objects. Cakes in this app
- - `Utils` - General pieces of business logic 

### ROUTER 
- Client side router. Wraps the app and switches view components
- routes and the corresponding route view component contained here. Important to keep global so as to not repeat all over app

### STYLESHEET
- Sass styling globals such as colors, mixins and mobile responsive sizes.
- All sass files in the ui (react) components are combined in `main.scss` and compiled into `main.css`
- The `main.css` file is imported at app instantiation, `/src/index.js`

### UI
- `Views` are essentially top level react components which are connected to the redux store. The are the pieces which work with the router. 
- The `Views` pass props from the `Store` down to child `Components`. However not exclusively - sometimes prop drilling becomes too cumbersome beyond 2/3 component levels. In this case we should connect sub components to the `Store` directly for convenience. React 16 now has a context api for this but I havent been able to use that sucessfully yet. 
- `Global` components stay consistent across views as the router changes paths. These are for example Navigations, Footers, Loading screens etc
- `Components` are built in a 'feature first' pod style - whereby all things that are related are grouped together so they can be easily shared. It is an example of utilising Reacts composition over inheritance ethos. I.e. A page 'has a' relationship with a certain component. If connected to the redux store they will have reducer, action and middleware files. The are grouped in 4 main sections...
- - `common` are things like buttons, 
- - `container` are structural pieces which simply renders its props. Things like modals, carousels, content sections etx
- - `custom` are one of a kind component pieces
- - `forms` are groups of inputs with a submit or cancel, rendered by a standard json list. All forms should be controlled by the state, all changes to the ui should only happen based on changes to React state, thus connected to the store. 

### ASSETS
- must be contained in the src folder when using create-react-app
- contains svg, img, videos, other content

### ENV FILES
- Holds global values such as api keys and application options, rendered into the app on compilation with Webpack
- Multiple files for multiple environments
- Nothing is in this file so its irelevant that I share publicly in this case. Though normally wpould be in gitignore

### DATA 
- `/db/global` requests inital data. In this case, getAllCakes. This is requested through an action fired on application init. This can be found in the route, `src/index.js`. 
- `Cake.jsx` view can get specific cakes, update cakes
- Cakes can be deleted from the `CakeDetail` component
- The requests are made through the App/Cake middleware functions. These essentially split a request from getting (submit) a resource then when a response comes from from the server it either dispatches a resolve or rejected action. This is an example of split a split messaging pattern. We can perform many different messaging patterns in the middleware such as filtering, copying, redirecting and expanding.

### TEST
- run `npm run test` to start the jest process.
- I have added test in the `CakeDetail` and `/db/global` reducers.
- I have tested the reducers as they are nice pure functions and the app is built in such a way that no ui changes can be made with changing the reducer. That makes it a good point to test. 

### DEPLOY
I have a file `deploy.sh` which will run the build command, and then sync the build folder to my s3 bucket.
This creates the live link. 