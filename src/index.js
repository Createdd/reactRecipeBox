import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';

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


class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="container grey-text center'">
          <div className="col s6">
            <h5>A Free Code Camp Challenge</h5>
            <h4>written by <strong>Daniel Deutsch</strong></h4>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <a href='https://github.com/DDCreationStudios' target='_blank'>Github / </a>
            <a href='https://www.freecodecamp.com/ddcreationstudios' target='_blank'>FreeCodeCamp / </a>
            <a href='http://codepen.io/ddcreationstudios/' target='_blank'>CodePen / </a>
            <a href='https://www.linkedin.com/in/daniel-deutsch-b95611127' target='_blank'>LinkedIn / </a>
            <a href='http://ddcreationstudios.at/' target='_blank'>Site</a>
          </div>
        </div>
      </div>
    );
  }
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

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li>
        <div className="collapsible-header">
          <i className="material-icons">view_list</i>{this.props.data.name}</div>
        <div className="collapsible-body">
          <ul className="collection">
            {this.props.data.ingredients.map((ingredient, idx) => {
              return (
                <li className="collection-item" key={idx}>{ingredient}</li>
              )
            })}
          </ul>
          <div className="row">
            <div className="col s6 center">
              <a className="waves-effect waves-light btn" onClick={() => {
                $("#" + this.editModalId).openModal();
              }}>EDIT</a>
              <EditModal id={this.editModalId} recipe={this.props.data} editIngredients={this.editIngredients.bind(this)}/>
            </div>
            <div className="col s6 center">
              <a className="waves-effect red waves-light btn" onClick={this.handleDelete.bind(this)}>DELETE</a>
            </div>
          </div>
        </div>
      </li>
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
