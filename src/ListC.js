import React from 'react';
import Recipe from './RecipeC.js';
import NewModal from './NewModalC.js';

let exampleRecipe = {
  recipes: [
    {
      name: 'Success',
      ingredients: ['Trust Yourself', 'Break The Rules', 'Don´t Be Afraid To Fail', 'Don´t Listen To The Nay-Sayers','Work Your Butt Off', 'Give Back']
    },
    {
      name: 'Goodlife',
      ingredients: ['Health', 'Wealth', 'Love', 'Happiness']
    },
    {
      name: 'Happiness',
      ingredients: ['Moms Spaghetti', 'Whole crowd', 'goes so loud', '8mile']
    }
  ]
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.localStoreKey = "state_recipeBox";
    let loadedState = this.loadLocalStore();
    this.state = loadedState === null
      ? {list: exampleRecipe}
      : {list: loadedState};
  }
  loadLocalStore() {
    if(typeof(Storage) === "undefined") {
      return null;
    }
    let stateJSON = localStorage.getItem(this.localStoreKey);
    if(stateJSON === null) {
      return null;
    }
    console.warn(stateJSON);
    return JSON.parse(stateJSON);
  }
  saveLocalStore() {
    if(typeof(Storage) === "undefined") {
      return;
    }
    localStorage.setItem(this.localStoreKey, JSON.stringify(this.state));
  }
  addRecipe(recipe) {
    this.setState({
      list: {
        recipes:
        this.state.list.recipes.concat([recipe])
      }
    }, this.saveLocalStore.bind(this));
  }
  deleteRecipe(key) {
    this.setState({
      list: {
        recipes: this.state.list.recipes.filter((item, idx) => {
          return idx !== key;
        })
      }
    }, this.saveLocalStore.bind(this));
  }
  changeRecipe(index, recipe) {
    this.setState({
      list: {
        recipes: this.state.list.recipes.map((item, idx) => {
          if(idx === index){
            return recipe;
          } else {
            return item;
          }
        })
      }
    }, this.saveLocalStore.bind(this));
  }

  render () {
    return (
      <div className = 'container'>
        <NewModal id="newmodal" add={this.addRecipe.bind(this)}/>
        <ul className="collapsible popout" data-collapsible="expandable">
          {this.state.list.recipes.map((recipe,ind) => {
            return (
              <Recipe key={ind}
                index={ind}
                data={recipe}
                delete={this.deleteRecipe.bind(this)}
                change={this.changeRecipe.bind(this)}
              />)
            })
          }
        </ul>
        <div className="fixed-action-btn">
          <a className="btn btn-floating btn-large waves-effect waves- red waves-green"
            onClick={()=> {$("#newmodal").openModal()}}>
            <i className="large material-icons">
              playlist_add
            </i>
          </a>
        </div>
      </div>
    );
  }
}
