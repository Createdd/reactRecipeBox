import React from 'react';
import Recipe from './RecipeC.js';

export default class NewModal extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="modal">
        <div className="modal-content">
            <h4 className="center">New recipe</h4>
          <div className="row">
            <form className="col s12">
              <input id="recipeName" type="text"/>
              <label htmlFor="recipeName">Name of the recipe</label>
            </form>
            <form className="col s12">
              <textarea id="recipeIngredients"
                className="materialize-textarea"
                defaultValue="">
              </textarea>
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
