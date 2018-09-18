The front end app is structured into main components

# DB
- The redux section of the application 
- Holds the `Store` reducers and `Middleware` router

# LIB
- Application and business logic shared by the entire app
- - `Api` - How we expect to communicate with any apis we want to connect to. Here we would hold the list of routes and expected return codes etc
- - `Auth` - here we would use house JWT or OAuth code for the app, most likely the router would be the main consumer of this
- - `Environment` - Setting debug options dependant on env set in the package.json
- - `Network` - DRY practise to reuse the logic for making async communications over the network
- - `Redux` - DRY practise to reuse logic for action creators/ network action creators and reducer state objects 
- - `Types` - Interfaces or models for objects. Cakes in this app
- - `Utils` - General pieces of business logic 

# ROUTER 
- Client side router. Wraps the app and switches view components
- routes and the corresponding route view component contained here. Important to keep global so as to not repeat all over app

# STYLESHEET
- Sass styling globals such as colors, mixins and mobile responsive sizes.
- All sass files in the ui (react) components are combined in `main.scss` and compiled into `main.css`
- The `main.css` file is imported at app instantiation, `index.js`

# UI
- `Views` are essentially top level react components which are connected to the redux store. 
- The `Views` pass props from the `Store` down to child `Components`. However not exclusively - sometimes prop drilling becomes too cumbersome beyond 2/3 component levels. In this case we should connect sub components to the `Store` directly. 
- `Global` components stay consistent across views as the router changes paths. These are for example Navigations, Footers, Loading screens etc
- `Components` are built in a 'feature first' pod style - whereby all things that are related are grouped together so they can be easily shared. If connected to the redux store they will have reducer, action and middleware files. The are grouped in 4 main sections...
- - `common` are things like buttons, 
- - `container` are structural pieces which simply renders its props. Things like modals, carousels, content sections etx
- - `custom` are one of a kind component pieces
- - `forms` are groups of inputs with a submit or cancel, rendered by a standard json list. All forms should be controlled by the state, all changes to the ui should only happen based on changes to React state, thus connected to the store. 

# ASSETS
- must be contained in the src folder when using create-react-app
- contains svg, img, videos, other content

# ENV FILES
- Holds global values such as api keys and application options on compilation
- Is not commited to the github repo
- Multiple files for multiple environments