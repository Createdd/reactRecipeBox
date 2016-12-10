import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <h1>Build A Recipe Box</h1>
        <h2>written by Daniel Deutsch</h2>
        <h4>A Free Code Camp Challenge</h4>
      </div>
    )
  }
}


ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
