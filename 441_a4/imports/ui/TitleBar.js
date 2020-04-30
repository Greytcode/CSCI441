import React from 'react';
import PropTypes from 'prop-types';


export default class TitleBar extends React.Component{ // jsx requires uppercase when working with components
  // by default react components only need to define one method and it is not the constructor
  // it is a render method - this returns the jsx that is returned to the screen
  renderModerator() {
    if(this.props.moderator) {
      return <p className='singleItemStyle--italic'>by: {this.props.moderator}</p>
    } else {
      return <p className = 'singleItemStyle--italic'> nothing is unknown</p>
    }
  }

  render(){
    return (
      <div className='wrapper'>
      <div className='title-bar'>
        <h1>{this.props.title}</h1>
        {this.renderModerator()}
      </div>
      </div>
    );
  }
};
TitleBar.propTypes = {  //this equals an object
  title: PropTypes.string.isRequired,  //throws warnings in browser when not string
  //useful if you didn't create the component and if you are trying to use it wrong
  moderator: PropTypes.string,
};
TitleBar.defaultProps = {
  title: `Default title`,
};
//the render() in combination with client/main.js is now making a real world
//we can also set default values for prop and set the type a prop should be
//Google react type checking propTypes
//https://reactjs.org/docs/typechecking-with-proptypes.html
//to use prop-types we need to update our npm
//meteor npm install prop-types --save
