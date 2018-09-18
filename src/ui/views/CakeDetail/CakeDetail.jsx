// @flow
// NODE MODULES
import * as React from "react";

// TYPES
import type {Cake} from '../../../lib/type/cake.type';

type Props = {};

type State = {
  data?: ?Cake
};

// COMPONENT
export default class CakeDetail extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      idFromUrlParams: 0,
      data: {
        id: null,
        name: '',
        comment: '',
        imageUrl: '',
        yumFactor: 0
      }
    };
  }

  // LIFECYCLE FUNCTIONS 

  componentDidMount(): void {
    // get the cake id from the id param in the url 
    // could also be passed as props but for demonstration purposes ive gone
    // with a method of letting the component retrieve its own data from the store.
    this.setState({
      idFromUrlParams: new URL(window.location.href).hash.split('id=')[1]
    }, () => {
      this._getCakeDataFromStore();
    })
  }

  componentWillUnmount(): void {
    this.props.resetCakeDeleteStatus();
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return this.props.cakes.complete;
  };

  _getCakeDataFromStore = () => {
    let { idFromUrlParams } = this.state;

    let _cake = this.props.cakes.value
      .filter( cake => cake.id === idFromUrlParams)[0]

    /** 
     * Authors note: 
     * 
     * If I had more time I would improve the data flow.
     * This code below prevents us deep linking to a cake resulting in 
     * no data being shown. This would make the UI look broken. 
     * Which is a worst state to be in. 
     * 
     * We must first go through the list view to populate the cake array. 
     */
    if( !_cake ) {
      this._navigateBack();

    } else {
      this.setState({ data: _cake })
    }
  }

  _navigateBack = () => {
    this.props.history.goBack();
  }

  _deleteThisCake = () => {
    this.props.deleteThisCake( this.state.idFromUrlParams );
  }

  render(): React.Element<"div"> {

    // VARIABLES

    const { deleteStatus } = this.props;

    const { data } = this.state;

    // DYNAMIC STYLES 

    let _deleteStyle = {
      display: deleteStatus.complete && !deleteStatus.pending ? 'none' : ''
    }

    // FINAL RENDERED JSX

    let _nav: React.Element<'div'>
      = <div>
          <button 
            onClick={() => this._navigateBack()}>
            <h4>Back</h4>
          </button>
          <button 
            style={_deleteStyle}
            onClick={() => this._deleteThisCake()}>
            Delete this cake
          </button>
        </div>

    let _cakeDetails: React.Element<'div'>
      = !deleteStatus.pending && !deleteStatus.complete
        ? <div className={`CakeDetail__cake`}>
            <h1>{ data.name }</h1>
            <p>{ data.comment }</p>
          </div> : null;

    let _deletingMessage: React.Element<'div'>
      = deleteStatus.pending && !deleteStatus.complete
        ? <div>
          <p>Deleting the {data.name} cake....</p>
        </div> : null;

    let _deletedMessage: React.Element<'div'>
      = deleteStatus.complete && !deleteStatus.pending
        ? <div>
          <p>{data.name} cake deleted! </p>
        </div> : null;

    let _deleteError: React.Element<'div'>
      = deleteStatus.error
        ? <div>
            <p>Oops something went wrong while deleting the {data.name} cake :(</p>
          </div> : null;
        
    let _allContent: React.Element<'div'>
      = <div>
        {_cakeDetails}
        {_deletingMessage}
        {_deletedMessage}
        {_deleteError}
      </div>

    return (
      <div className={`CakeDetail`}>
        {_nav}
        {_allContent}
      </div>
    );
  }
}