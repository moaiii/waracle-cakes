// @flow
// NODE MODULES

import * as React from "react";

// TYPES

import type { Cake as CakeType} from '../../../lib/types/cake.type';

type Props = {
  data: CakeType,
  handleClick: Function
};

type State = {
  animateClass: string
};

// COMPONENT
export default class Cake extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      animateClass: ""
    };
  }

  // LIFECYCLE METHODS

  /**
   * Author note:
   * 
   * Example of animation in react, once the component mounts 
   * we add a class modifier and let css animate the cake comp.
   * See cake.scss for the animation. 
   */
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({
        animateClass: "--animate"
      })
    }, 50);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: any)
    : void {}

  render(): React.Element<"div"> {
    // DEBUG
    
    if( process.env.REACT_APP_RENDER_DEBUG === "true" ) {
      console.log("rendering", this) }

    // VARIABLES

    const { data, handleClick } = this.props;

    const { animateClass } = this.state;

    // PRIVATE COMPONENTS 

    let _image: React.Element<'img'> 
      = <img 
          className={`img`} // $FlowFixMe
          src={`${ data.imageUrl }`}
          alt={`Cake-${ data.name }`} />

    // FINAL RENDERED JSX

    return (
      <div className={ `Cake ${ animateClass }` } 
        onClick={ () => handleClick( data.id ) }>
        <h3 className={`name`}>{ data.name }</h3>
        <div className="Cake__img-container">
          {_image}
        </div>
      </div>
    );
  }
}