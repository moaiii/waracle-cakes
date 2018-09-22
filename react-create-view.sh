#!/usr/bin/env bash

# name of view
echo $1

# the component imports of the view
echo $2
echo $3
echo $4
echo $5
echo $6
echo $7
echo $8
echo $9


# paths
directory='./src/ui/views/'$1
index='./src/ui/views/'$1'/index.js'
view='./src/ui/views/'$1'/'$1'.jsx'
styles='./src/ui/views/'$1'/'$1'.scss'
stylesmain='./src/stylesheet/main.scss'
reducer='./src/ui/views/'$1'/'$1'.reducer.js'
store='./src/db/store.js'
actions='./src/ui/views/'$1'/'$1'.action.js'
middleware='./src/ui/views/'$1'/'$1'.middleware.js'
test='./src/ui/views/'$1'/'$1'.test.js'
type='./src/ui/views/'$1'/'$1'.type.js'

# create folders and files
mkdir $directory
touch $index
touch $view
touch $styles
touch $reducer
touch $actions
touch $middleware
touch $test

# TYPE
echo '// @Flow' >> $type
echo '' >> $type
echo 'export type '$1' = {' >> $type
echo '  ' >> $type
echo '};' >> $type

# INDEX
echo 'import '$1' from "./'$1'.jsx";' >> $index
echo 'import * as actions from "./'$1'.action";' >> $index
echo '' >> $index
echo 'export default {' >> $index
echo '  '$1',' >> $index
echo '  actions' >> $index
echo '}' >> $index

# MIDDLEWARE
echo '// @flow' >> $middleware
echo 'import * as actions from "./'$1'.action";' >> $middleware
echo 'import type {Action} from "../../lib/redux";' >> $middleware
echo 'import {networkRequest} from "../../lib/network";' >> $middleware
echo '' >> $middleware
echo 'export default {' >> $middleware
echo '  "['$1'] '$1'__SUMBIT": async (store: Object, next: Function, ' >> $middleware
echo '    action: Action<string>) => {' >> $middleware
echo '' >> $middleware
echo '    }' >> $middleware
echo '}' >> $middleware


# STYLESHEET
echo '.'$1' {' >> $styles
echo '  // mobile first < 425px' >> $styles
echo '' >> $styles
echo '  &.--animate {}' >> $styles
echo '' >> $styles 
echo '  @media (min-width: 425px) {}' >> $styles
echo '' >> $styles
echo '  @media (min-width: 768px) {}' >> $styles
echo '' >> $styles 
echo '  @media (min-width: 1024px) {}' >> $styles
echo '' >> $styles 
echo '  @media (min-width: 1440px) {}' >> $styles
echo '}' >> $styles


# SASS include
echo '@import "../ui/views/'$1'/'$1'.scss";' >> $stylesmain


# TEST
echo 'import reducer from "./'$1'.reducer";' >> $test
echo 'import * as actions from "./'$1'.action";' >> $test
echo '' >> $test
echo 'describe("'$1'", () => {' >> $test
echo '  it("", () => {' >> $test
echo '    expect();' >> $test
echo '  })' >> $test
echo '})' >> $test


# REDUCER
echo '// @flow' >> $reducer
echo 'type State = {' >> $reducer
echo '  // +value: boolean ' >> $reducer
echo '};' >> $reducer
echo '' >> $reducer
echo 'type Action = {' >> $reducer
echo ' +type: string,' >> $reducer
echo ' +payload: Object' >> $reducer
echo '}' >> $reducer
echo '' >> $reducer
echo 'let initialState = {' >> $reducer
echo '  value: false' >> $reducer
echo '};' >> $reducer
echo '' >> $reducer
echo 'export default (state: State = initialState, action: Action): State => {' >> $reducer
echo '  switch (action.type) {' >> $reducer
echo '    case "['$1'] an_action": {' >> $reducer
echo '      return state;' >> $reducer
echo '    }' >> $reducer
echo '' >> $reducer
echo '    default: {' >> $reducer
echo '      return state;' >> $reducer
echo '    }' >> $reducer
echo '  }' >> $reducer
echo '};' >> $reducer


# STORE
echo 'import '$1'Reducer from "../ui/views/'$1'/'$1'.reducer.js"' > src/db/store_copy.txt
cat $store >> src/db/store_copy.txt
rm $store
mv src/db/store_copy.txt $store


# ACTION
echo '// @flow' >> $actions
echo 'import {actionCreator, networkActionCreator} from "../../../lib/redux";' >> $actions
echo 'import type {NetworkActionCreator, ActionCreator} from "../../../lib/redux";' >> $actions
echo '' >> $actions
echo 'export const defaultAction: NetworkActionCreator<any, void> ' >> $actions
echo '  = networkActionCreator("['$1'] DEFAULT_ACTION");' >> $actions


# VIEW
echo '// @flow' >> $view
echo '// NODE MODULES' >> $view
echo 'import * as React from "react";' >> $view
echo '' >> $view
echo '// REDUX' >> $view
echo 'import store from "../../../db/store";' >> $view
echo 'import { connect } from "react-redux";' >> $view
echo '' >> $view
echo '// COMPONENTS' >> $view
if [ $2 ] 
  then
    echo 'import '$2' from "../../components/'$2'/'$2'";' >> $view
  fi
if [ $3 ] 
  then
    echo 'import '$3' from "../../components/'$3'/'$3'";' >> $view
  fi
if [ $4 ] 
  then
    echo 'import '$4' from "../../components/'$4'/'$4'";' >> $view
  fi
if [ $5 ] 
  then
    echo 'import '$5' from "../../components/'$5'/'$5'";' >> $view
  fi
if [ $6 ] 
  then
    echo 'import '$6' from "../../components/'$6'/'$6'";' >> $view
  fi
if [ $7 ] 
  then
    echo 'import '$7' from "../../components/'$7'/'$7'";' >> $view
  fi 
if [ $8 ] 
  then
    echo 'import '$8' from "../../components/'$8'/'$8'";' >> $view
  fi
echo '// ........' >> $view
echo '' >> $view
echo '// ASSETS' >> $view
echo '// ........' >> $view
echo '' >> $view
echo '// UTILITIES' >> $view
echo '// ........' >> $view
echo '' >> $view
echo '// TYPES' >> $view
echo 'type Props = {};' >> $view
echo '' >> $view
echo 'type State = {' >> $view
echo '  animateClass: string' >> $view
echo '};' >> $view
echo '' >> $view
echo '// COMPONENT' >> $view
echo 'class '$1' extends React.Component<Props, State> {' >> $view
echo '  constructor() {' >> $view
echo '    super();' >> $view
echo '' >> $view
echo '    this.state = {' >> $view
echo '      animateClass: ""' >> $view
echo '    };' >> $view
echo '  }' >> $view
echo '' >> $view
echo '  // CLASS FUNCTIONS' >> $view
echo '  componentDidMount(): void {' >> $view
echo '    setTimeout(() => {' >> $view
echo '      this.setState({' >> $view
echo '        animateClass: "--animate"' >> $view
echo '      })' >> $view
echo '    }, 50);' >> $view
echo '  }' >> $view
echo '' >> $view
echo '  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {' >> $view
echo '    return true;' >> $view
echo '  };' >> $view
echo '' >> $view
echo '  componentDidUpdate(prevProps: Props, prevState: State, snapshot: any)' >> $view
echo '    : void {}' >> $view
echo '' >> $view
echo '  render(): React.Element<"div"> {' >> $view
echo '    // DEBUG' >> $view
echo '    if( process.env.REACT_APP_RENDER_DEBUG === "true" ) {' >> $view
echo '      console.log("rendering", this) }' >> $view
echo '' >> $view
echo '    // VARIABLES' >> $view
echo '    const {} = this.props;' >> $view
echo '    const { animateClass } = this.state;' >> $view
echo '' >> $view
echo '    // DYNAMIC STYLES AND CLASSES' >> $view
echo '    // ...' >> $view
echo '' >> $view
echo '    // PRIVATE COMPONENTS' >> $view
echo '    // ...' >> $view
echo '' >> $view
echo '    // FINAL RENDERED JSX' >> $view
echo '    return (' >> $view
echo '      <div className={`'$1' ${ animateClass }`}>' >> $view
echo '' >> $view
echo '      </div>' >> $view
echo '    );' >> $view
echo '  }' >> $view
echo '}' >> $view
echo '' >> $view
echo '// LISTEN TO REDUX' >> $view
echo 'const storeToProps = ( store: Object ): Object => {' >> $view
echo '  return {}' >> $view
echo '}' >> $view
echo '' >> $view
echo 'export default connect( storeToProps )( '$1' );' >> $view