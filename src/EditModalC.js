import React from 'react';

export default class EditModal extends React.Component {
  render() {
    return(
      <div id={this.props.id} className="modal">
        <div className="modal-content">
            <h4 className="center">Edit Recipe</h4>
          <div className="row">
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <input id="recipeName" type="text" className="validate"/>
              <label htmlFor="recipeName">Name: {this.props.data.name}</label>
            </form>
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="recipeIngredients"
                className="materialize-textarea validate"></textarea>
              <label htmlFor="recipeIngredients">Ingredients: {this.props.data.ingredients}</label>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
            Cancel</a>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
            Save</a>
        </div>
      </div>
    );
  }
}
