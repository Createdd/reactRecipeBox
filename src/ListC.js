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
    this.state = {
      example: exampleRecipe
    };
  }

  addRecipe(recipe) {
    this.setState({
      recipes:this.state.example.recipes.concat([recipe])
    })
  }

  render () {
    return (
      <div className = 'container'>
        <ul className="collapsible popout" data-collapsible="expandable">
          {this.state.example.recipes.map((recipe,ind) => {
            return (<Recipe key={ind} data={recipe} />)
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
        <NewModal id="newmodal" />
      </div>
    );
  }
}
