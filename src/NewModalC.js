import React from 'react';
import Recipe from './RecipeC.js';

export default class NewModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="newmodal" className="modal">
        <div className="modal-content">
            <h4 className="center">Add A New Recipe</h4>
          <div className="row">
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <input id="recipeName" type="text" className="validate"/>
              <label htmlFor="recipeName">Name of the recipe</label>
            </form>
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="recipeIngredients"
                className="materialize-textarea validate"></textarea>
              <label htmlFor="recipeIngredients">Ingredients (Seperate with commas)</label>
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
    )
  }
}
