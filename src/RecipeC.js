import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li>
        <div className="collapsible-header">
          <i className="material-icons">view_list</i>A NAME</div>
        <div className="collapsible-body">
          <ul className="collection">

            <li className="collection-item">Ingrediants</li>

          </ul>
          <div className="row">
            <div className="col s6 center">
              <a className="waves-effect waves-light btn">EDIT</a>
            </div>
            <div className="col s6 center">
              <a className="waves-effect red waves-light btn">DELETE</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
