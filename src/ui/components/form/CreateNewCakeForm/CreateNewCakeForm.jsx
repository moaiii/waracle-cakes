// @flow
// NODE MODULES
import * as React from "react";

// TYPES
type Props = {
  handleNewCakeSubmit: Function
};

type State = {
  name: string,
  comment: string,
  imageUrl: string,
  yumFactor: number
};

// COMPONENT
export default class CreateNewCakeForm extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      errorMessage: '',
      name: '',
      comment: '',
      imageUrl: 'https://images.stockfreeimages.com/865/sfi/free_8655335.jpg',
      yumFactor: 0
    };
  }

  // CLASS FUNCTIONS
  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  _handleInputChange(e) {
    let target = e.target;
    let name = target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  _handleNewCakeSubmit = () => {
    let {
      errorMessage,
      name,
      comment,
      imageUrl,
      yumFactor
    } = this.state;

    /**
     * Author note:
     * 
     * As I have direct access to the user input in the state object
     * I feel its a good place to catch and handle any input errors, thus 
     * avoiding having to catch and handle response errors on the network for 
     * badly formatted POST requests.
     */

    if( !imageUrl.includes('http') ) {
      this.setState({ errorMessage: 'Image url must be valid http:// string' });

    } else if( name.length === 0 || comment.length === 0 ) {
      this.setState({ errorMessage: 'Please complete the input fields' });
    
    } else {
      this.props.handleNewCakeSubmit({
        name,
        comment,
        imageUrl,
        yumFactor
      });
    }
  }

  render(): React.Element<"div"> {

    // VARIABLES

    let { errorMessage } = this.state;

    let _form: React.Element<'form'>
      = <form>
          <label>
            Name: 
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={(e) => this._handleInputChange(e)} />
          </label>
          <label>
            Comment: 
            <input
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={(e) => this._handleInputChange(e)} />
          </label>
          <label>
            Image url: 
            <input
              name="imageUrl"
              type="text"
              value={this.state.image}
              onChange={(e) => this._handleInputChange(e)} />
          </label>
          <br />
          <label>
            Yum Factor:
            <input
              name="yumFactor"
              type="number"
              min="1" 
              max="5"
              value={this.state.yumFactor}
              onChange={(e) => this._handleInputChange(e)} />
          </label>
        </form>

    // FINAL RENDERED JSX
    return (
      <div className={`CreateNewCake`}>
        { _form }
        <p className={`CreateNewCake__error`}>{ errorMessage }</p>
        <button onClick={() => this._handleNewCakeSubmit()}>
          <p>Submit</p>
        </button>
      </div>
    );
  }
}