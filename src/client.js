import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    return (
      <div className='container grey-text center'>
        <h2>Build A Recipe Box</h2>
      </div>
    )
  }
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

ReactDOM.render(
  <Header />, document.getElementById('header')
);
ReactDOM.render(
    <Footer />, document.getElementById('footer')
);
