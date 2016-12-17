import React from 'react';
import EditModal from './EditModalC.js';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.modalId = "modaledit" + this.stringHashCode(JSON.stringify(this.props.data));
  }
  stringHashCode(str) {
    let hash = 0,
      i,
      chr,
      len;
    if (str.length === 0)
      return hash;
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }
  handleDelete() {
    this.props.delete(this.props.index);
  }
  editIngredients(newIngredients){
    this.props.change(this.props.index, {
      name: this.props.data.name,
      ingredients: newIngredients
    })
  }
  render () {
    return (
      <li className="brown lighten-3">
        <div className="collapsible-header brown">
          <i className="material-icons">library_books</i>
          {this.props.data.name}
        </div>
        <div className="collapsible-body">
          <ul className="collection">
              {this.props.data.ingredients.map((ingredient,ind) => {
                return (
                  <li className="collection-item brown lighten-3" key={ind}>
                    <i className="material-icons">done</i>{ingredient}
                  </li>
                )
              })}
          </ul>
          <div className="row">
            <div className="col s2 offset-s7">
              <a className="btn waves-effect orange waves-green"
                onClick={() => {$("#" + this.modalId).openModal()}}>Edit</a>
            </div>
            <EditModal id={this.modalId} data={this.props.data}
              editIngredients={this.editIngredients.bind(this)}/>
            <div className="col s2">
              <a className="btn waves-effect red waves-green"
                onClick={this.handleDelete.bind(this)}>Delete</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
