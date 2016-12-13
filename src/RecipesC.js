import React from 'react';
import Recipe from './RecipeC.js';

export default class Recipes extends React.Component {
  render () {
    return (
      <div className = 'container'>
        <ul className="collapsible popout" data-collapsible="accordion">
          <Recipe key />
        </ul>
      </div>
    );
  }
}
