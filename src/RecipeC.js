import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li>
        <div className="collapsible-header">
          <i className="material-icons">library_books</i>
          {this.props.data.name}
        </div>

        <div className="collapsible-body">

          <ul className="collection">
              {this.props.data.ingredients.map((ingredient,ind) => {
                return (<li className="collection-item" key={ind}><i className="material-icons">done</i>{ingredient}</li>)
              })}
          </ul>

          <div className="row">
            <div className="col s6 center">
              <a className="btn waves-effect orange waves-green">EDIT</a>
            </div>
            <div className="col s6 center">
              <a className="btn waves-effect red waves-green">DELETE</a>
            </div>
          </div>

        </div>
      </li>
    );
  }
}
