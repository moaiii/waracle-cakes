// @flow
// NODE MODULES
import * as React from "react";

// SUB COMPONENTS 
import CreateNewCakeForm from '../../components/form/CreateNewCakeForm';

// TYPES
type Props = {
  newCakeStatus: {
    pending: boolean,
    complete: boolean,
    error: boolean
  } 
};

type State = {
  animateClass: string
};

// COMPONENT
export default class CreateNewCake extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  // LIFECYCLE METHODS

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  /**
   * Author note:
   * 
   * Reset the redux store when leaving the page
   */

  componentWillUnmount() {
    this.props.resetNewCakeStatus();
  }

  // PRIVATE CLASS FUNCTIONS 

  _handleNewCakeSubmit = ( body ) => {
    this.props.submitNewCake( body )
  }

  _navigateBack = () => {
    this.props.history.goBack();
  }

  render(): React.Element<"div"> {

    // VARIABLES
    const { newCakeStatus } = this.props;
    
    const { animateClass } = this.state;

    // SUB COMPONENTS 

    let _form: React.Element<'form'>
      = !newCakeStatus.pending && !newCakeStatus.complete && !newCakeStatus.error
        ? <CreateNewCakeForm handleNewCakeSubmit={this._handleNewCakeSubmit} />
        : null;

    let _pendingMessage: React.Element<'p'>
      = newCakeStatus.pending && !newCakeStatus.complete 
        ? <p>Creating your new cake...</p> : null;

    let _successMessage: React.Element<'div'>
      = !newCakeStatus.pending && newCakeStatus.complete 
        ? <div>
            <p>Yay! Your cake is complete!</p>
            <button onClick={() => this._navigateBack()}> Back to cake list </button>
          </div> 
        : null;

    let _errorMessage: React.Element<'p'>
      = newCakeStatus.error
        ? <p>Oops, there was a problems creating your cake :(</p> : null;

    let _feedback: React.Element<'div'>
      = <div>
          { _pendingMessage }
          { _successMessage }
          { _errorMessage }
        </div>

    // FINAL RENDERED JSX

    return (
      <div className={`CreateNewCake ${ animateClass }`}>
        <h2>Create a new cake</h2>
        { _feedback }
        { _form }
      </div>
    );
  }
}