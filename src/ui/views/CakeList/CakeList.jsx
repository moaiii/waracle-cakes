// @flow
// NODE MODULES

import * as React from "react";

// IMPORT COMPONENTS

import Cake from '../../components/custom/Cake';

// TYPES

import type { Cake as CakeType } from '../../../lib/types/cake.type';

type Props = {
  cakes: Array<CakeType>
};

type State = {
  animateClass: string
};

// COMPONENT

export default class CakeList extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  // LIFECYCLE METHODS 

  /**
   * Author note:
   * 
   * When deleteing a cake I would have removed it from the store cake array 
   * however we run the risk of our data becoming out of sync with the server DB. 
   * Therefore I have chosen to hit the getAllCakes endpoint each time the list 
   * view is called.
   * 
   * This might not be of great concern on some other apps and keeping our local 
   * copy of the cakes array would suffice. But this is simply the choice I have 
   * made and is debateable which is better given its a demo app. 
   */

  componentDidMount(): void {
    this.props.getAllCakes();
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  // CLASS FUNCTIONS

  _handleCakeClick = ( id: number ) => { //console.log(id)
    this.props.history.push( `/cake/?id=${ id }` );
  }

  _handleCreateNewCake = () => {
    this.props.history.push('/create-new-cake');
  }

  render(): React.Element<"div"> {

    // VARIABLES

    const { cakes } = this.props;

    // PRIVATE COMPONENTS

    let _cakeList: Array<Cake>
      = cakes.complete 
        ? cakes.value.map( (cake, i) => 
          <Cake 
            key={`${i}-cake`}
            data={ cake } 
            handleClick={ this._handleCakeClick } /> )
        : null;

    let _createNewCake: React.Element<'div'>
      = <div>
          <button onClick={() => this._handleCreateNewCake()}>
            <h3>Create a new cake</h3>
          </button>
        </div>

    // FINAL RENDERED JSX

    return (
      <div className={`CakeList`}>
        <h1>Warcle Cake Application</h1>
        { _createNewCake }
        { _cakeList }
      </div>
    );
  }
}