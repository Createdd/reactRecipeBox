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
            <div className="col s2 offset-s7">
              <a className="btn waves-effect orange waves-green">Edit</a>
            </div>
            <div className="col s2">
              <a className="btn waves-effect red waves-green">Delete</a>
            </div>
          </div>

        </div>
      </li>
    );
  }
}
