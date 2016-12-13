import React from 'react';

export default class Recipes extends React.Component {
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
