import React from 'react';
import Recipe from './RecipeC.js';

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

  }

  render () {
    return (
      <div className = 'container'>
        <div className="fixed-action-btn" style={{
                    bottom: "45px",
                    right: "24px"
                }}>
                    <a className="btn waves-effect waves-light btn-floating btn-large red lighten-2" onClick={() => {
                        $("#addmodal").openModal();
                    }}>
                        <i className="large material-icons">add</i>
                    </a>
                </div>
        <ul className="collapsible popout" data-collapsible="expandable">
          {this.state.example.recipes.map((recipe,ind) => {
            return (<Recipe key={ind} data={recipe} />)
            })
          }
        </ul>
      </div>
    );
  }
}
