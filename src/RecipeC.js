import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li>
        <div className="collapsible-header">
          <i className="material-icons">view_list</i>{this.props.data.name}</div>
        <div className="collapsible-body">
          <ul className="collection">
            {this.props.data.ingredients.map((ingredient, idx) => {
              return (
                <li className="collection-item" key={idx}>{ingredient}</li>
              )
            })}
          </ul>
          <div className="row">
            <div className="col s6 center">
              <a className="waves-effect waves-light btn" onClick={() => {
                $("#" + this.editModalId).openModal();
              }}>EDIT</a>
              <EditModal id={this.editModalId} recipe={this.props.data} editIngredients={this.editIngredients.bind(this)}/>
            </div>
            <div className="col s6 center">
              <a className="waves-effect red waves-light btn" onClick={this.handleDelete.bind(this)}>DELETE</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
