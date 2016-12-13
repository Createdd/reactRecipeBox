import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Recipe from './FooterC.js';

let exampleRecipe = {
  recipes: [
    {
      name: 'Success',
      ingedients: ['Trust Yourself', 'Break The Rules', 'Don´t Be Afraid To Fail', 'Don´t Listen To The Nay-Sayers','Work Your Butt Off', 'Give Back']
    },
    {
      name: 'More success',
      ingedients: ['Trust Yourself', 'Break The Rules', 'Don´t Be Afraid To Fail', 'Don´t Listen To The Nay-Sayers','Work Your Butt Off', 'Give Back']
    }
  ]
}



class Recipes extends React.Component {
  render () {
    return (
      <div className = 'container'>
        <ul className="collapsible popout" data-collapsible="accordion">
            {
              this.state.recipes.map((recipe, ind) => {
                return (
                  <Recipe key = {ind}
                    index = {ind}
                    data = {recipe}
                    delete = {this.addRecipe.bind(this)}
                    change = {this.changeRecipe.bind(this)}
                  />
                )
              })
            }
        </ul>
      </div>
    );
  }
}



class Main extends React.Component {
  render () {
    return (
      <div className="container">
        <Recipes />
      </div>
    );
  }
}


ReactDOM.render(
  <Header />, document.getElementById('header')
);
ReactDOM.render(
    <Footer />, document.getElementById('footer')
);
ReactDOM.render(
    <Main />, document.getElementById('main')
);
