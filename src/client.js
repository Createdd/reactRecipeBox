import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    return (
      <div className='container white-text center'>
        <h2>Build A Recipe Box</h2>
        <h5>written by <strong>Daniel Deutsch</strong></h5>
          <a href='https://github.com/DDCreationStudios' target='_blank'>Github / </a>
          <a href='https://www.freecodecamp.com/ddcreationstudios' target='_blank'>FreeCodeCamp / </a>
          <a href='http://codepen.io/ddcreationstudios/' target='_blank'>CodePen / </a>
          <a href='https://www.linkedin.com/in/daniel-deutsch-b95611127' target='_blank'>LinkedIn / </a>
          <a href='http://ddcreationstudios.at/' target='_blank'>Site</a>
        <h6>A Free Code Camp Challenge</h6>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
