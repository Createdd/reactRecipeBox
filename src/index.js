import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Recipe from './RecipeC.js';
import List from './ListC.js';

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


class Main extends React.Component {
  render () {
    return (
      <div className="container">
        <List />
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
