#!/usr/bin/env bash

echo 'Initialising the Create React App...'

npm i --save react react-dom react-redux react-router-dom redux redux-logger

# name of project
echo $1

# Remove whats there
rm -r src

### UI STRUCTURE
#<Router>
#  <Global.Navigation>
#  <Global.LoadingSpinner>
#  <View>
#     <Component 1/>
#     <Component 2/>
#     <Component 3/>
#     <Component n/>
#  </View>
#</Router>

# App 
src="./src/"
mkdir $src

# Top level entry point for the app 
index="./src/index.js"

# ASSETS 
assets="./src/assets"
mkdir $assets

svg="./src/assets/svg"
mkdir $svg

img="./src/assets/img"
mkdir $img

# UI 
ui="./src/ui"
mkdir $ui

global="./src/ui/global"
mkdir $global

views="./src/ui/views"
mkdir $views

components="./src/ui/components"
mkdir $components

container="./src/ui/components/container"
mkdir $container

custom="./src/ui/components/custom"
mkdir $custom

forms="./src/ui/components/forms"
mkdir $forms

common="./src/ui/components/common"
mkdir $common

# Library with open shared code/ logic

lib="./src/lib"
mkdir $lib

utils="./src/lib/utils"
mkdir $utils

types="./src/lib/types"
mkdir $types

redux="./src/lib/redux"
mkdir $redux

network="./src/lib/network"
mkdir $network

environment="./src/lib/environment"
mkdir $environment

auth="./src/lib/auth"
mkdir $auth

api="./src/lib/api"
endpoints="./src/lib/api/endpoints.json"
mkdir $api
touch $endpoints

# Client side router for SPA

router="./src/router"
mkdir $router

routerIndex="./src/router/index.js"
touch $routerIndex

routes="./src/router/routes.json"
touch $routes

# Client DB

db="./src/db"
mkdir $db

middleware="./src/db/middleware.js"
touch $middleware

store="./src/db/store.js"
touch $store

# Stylesheets 

stylesheet="./src/stylesheet"
mkdir $stylesheet

stylesmain="./src/stylesheet/main.scss"
touch $stylesmain

stylesmaincss="./src/stylesheet/main.css"
touch $stylesmaincss


# INDEX
echo 'import React from "react";' >> $index
echo 'import ReactDOM from "react-dom";' >> $index
echo 'import {Provider} from "react-redux";' >> $index
echo 'import store from "./db/store";' >> $index
echo 'import router from "./router";' >> $index
echo 'import "./stylesheet/main.css";' >> $index
echo '' >> $index
echo 'ReactDOM.render(<Provider store={store}>{router}</Provider>,' >> $index
echo '  document.getElementById("root"));' >> $index


# ROUTER 
echo 'import React from "react";' >> $router
echo 'import { HashRouter as Router, Route } from "react-router-dom";' >> $router
echo '' >> $router
echo '// routes' >> $router
if [ $3 ] 
  then
    echo 'import {'$3'} from "./views/'$3'/'$3'";' >> $router
  fi
if [ $5 ] 
  then
    echo 'import {'$5'} from "./views/'$5'/'$5'";' >> $router
  fi
if [ $7 ] 
  then
    echo 'import {'$7'} from "./views/'$7'/'$7'";' >> $router
  fi
if [ $9 ] 
  then
    echo 'import {'$9'} from "./views/'$9'/'$9'";' >> $router
  fi
if [ ${11} ] 
  then
    echo 'import {'${11}'} from "./views/'${11}'/'${11}'";' >> $router
  fi
if [ ${13} ] 
  then
    echo 'import {'${13}'} from "./views/'${13}'/'${13}'";' >> $router
  fi
if [ ${15} ] 
  then
    echo 'import {'${15}'} from "./views/'${15}'/'${15}'";' >> $router
  fi
if [ ${17} ] 
  then
    echo 'import {'${17}'} from "./views/'${17}'/'${17}'";' >> $router
  fi
if [ ${19} ] 
  then
    echo 'import {'${19}'} from "./views/'${19}'/'${19}'";' >> $router
  fi
if [ ${21} ] 
  then
    echo 'import {'${21}'} from "./views/'${21}'/'${21}'";' >> $router
  fi
echo '' >> $router
echo 'export default(' >> $router
echo '  <Router basename="/">' >> $router
echo '    <div className="Router__container">' >> $router
if [ $2 ] 
  then
    echo '      <Route exact path="'$2'" component={'$3'}/>' >> $router
  fi
if [ $4 ] 
  then
    echo '      <Route exact path="'$4'" component={'$5'}/>' >> $router
  fi
if [ $6 ] 
  then
    echo '      <Route exact path="'$6'" component={'$7'}/>' >> $router
  fi
if [ $8 ] 
  then
    echo '      <Route exact path="'$8'" component={'$9'}/>' >> $router
  fi
if [ "${10}" ] 
  then
    echo '      <Route exact path="'${10}'" component={'${11}'}/>' >> $router
  fi
if [ "${12}" ] 
  then
    echo '      <Route exact path="'${12}'" component={'${13}'}/>' >> $router
  fi
if [ "${14}" ] 
  then
    echo '      <Route exact path="'${14}'" component={'${15}'}/>' >> $router
  fi
if [ "${16}" ] 
  then
    echo '      <Route exact path="'${16}'" component={'${17}'}/>' >> $router
  fi
if [ "${18}" ] 
  then
    echo '      <Route exact path="'${18}'" component={'${19}'}/>' >> $router
  fi
if [ "${20}" ] 
  then
    echo '      <Route exact path="'${20}'" component={'${21}'}/>' >> $router
  fi
echo '    </div>' >> $router
echo '  </Router>' >> $router
echo ')' >> $router


# STORE
echo '' >> $store
echo '// redux' >> $store
echo 'import { createStore, applyMiddleware } from "redux";' >> $store
echo 'import { createLogger } from "redux-logger";' >> $store
echo 'import { combineReducers } from "redux"' >> $store
echo '' >> $store
echo '// middlewares' >> $store
echo '// ...' >> $store
echo '' >> $store
echo 'const customMiddleWare = store => next => action => {}' >> $store
echo '' >> $store
echo '// Combine Reducers' >> $store
echo 'let reducers = combineReducers({' >> $store
echo '' >> $store
echo '});' >> $store
echo '' >> $store
echo 'const logger = createLogger({' >> $store
echo '  collapsed: true, diff: true' >> $store
echo '});' >> $store
echo '' >> $store
echo 'let store = createStore(' >> $store
echo '  reducers,' >> $store
echo '  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),' >> $store
echo '  applyMiddleware(customMiddleWare, logger)' >> $store
echo ');' >> $store
echo '' >> $store
echo 'export default store;' >> $store


# STYLESMAIN
echo '* {' >> $stylesmain
echo '  margin: 0;' >> $stylesmain
echo '  padding: 0;' >> $stylesmain
echo '  box-sizing: border-box;' >> $stylesmain
echo '}' >> $stylesmain
echo '' >> $stylesmain
echo 'button, a {' >> $stylesmain
echo '  &:hover {' >> $stylesmain
echo '    cursor: pointer;' >> $stylesmain
echo '  }' >> $stylesmain
echo '}' >> $stylesmain
echo '' >> $stylesmain
echo 'body {' >> $stylesmain
echo '  filter: saturate(1.1);' >> $stylesmain
echo '}' >> $stylesmain
echo '' >> $stylesmain
echo '@mixin laptop-large {' >> $stylesmain
echo '  @media (min-width: 1024px) {' >> $stylesmain
echo '    @content;' >> $stylesmain
echo '  }' >> $stylesmain
echo '}' >> $stylesmain
echo '' >> $stylesmain
echo '@mixin laptop {' >> $stylesmain
echo '  @media (min-width: 768px) {' >> $stylesmain
echo '    @content;' >> $stylesmain
echo '  }' >> $stylesmain
echo '}' >> $stylesmain
echo '' >> $stylesmain
echo '@mixin tablet {' >> $stylesmain
echo '  @media (min-width: 425px) {' >> $stylesmain
echo '    @content;' >> $stylesmain
echo '  }' >> $stylesmain
echo '}' >> $stylesmain


#MIDDLEWARE
echo '// import Example from "./views/Example/Example.middleware";' >> $middleware
echo '' >> $middleware
echo 'const middlewares = {' >> $middleware
echo '//  ...Example,' >> $middleware
echo '};' >> $middleware
echo '' >> $middleware
echo 'export default (store, next, action) => {' >> $middleware
echo '' >> $middleware
echo '  let middleware = middlewares[action.type];' >> $middleware
echo '' >> $middleware
echo '  if (middleware) {' >> $middleware
echo '    middleware(store, next, action);' >> $middleware
echo '  }' >> $middleware
echo '' >> $middleware
echo '  next(action);' >> $middleware
echo '}' >> $middleware