import React from 'react';


export default class NewModal extends React.Component {
  handleName(e){
    this.newName = e.target.value.trim();
  }
  handleIngredients(e){
    this.newIngredients = e.target.value.split(",").map(str => str.trim());
  }
  handleClearInput() {
    this.newName = '';
    this.newIngredients = '';
    $('#recipeName').val('');
    $('#recipeIngredients').val('');
  }
  handleSave() {
    if(this.handleName === undefined || this.handleIngredients === undefined) {
      return;
    }
    let newRecipe = {
      name: this.newName,
      ingredients: this.newIngredients
    }
    this.props.add(newRecipe);
    this.handleClearInput();
  }
  render() {
    return (
      <div id="newmodal" className="modal">
        <div className="modal-content">
            <h4 className="center">Add A New Recipe</h4>
          <div className="row">
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <input id="recipeName" type="text" className="validate"
                  onChange={this.handleName.bind(this)}/>
              <label htmlFor="recipeName">Name of the recipe</label>
            </form>
            <form className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="recipeIngredients"
                className="materialize-textarea validate"
                onChange={this.handleIngredients.bind(this)}></textarea>
              <label htmlFor="recipeIngredients">Ingredients (Seperate with commas)</label>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"
            onClick={this.handleClearInput.bind(this)}>
            Cancel</a>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"
            onClick={this.handleSave.bind(this)}>
            Save</a>
        </div>
      </div>
    )
  }
}
