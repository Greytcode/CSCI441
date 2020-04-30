import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';



export default class AddPosts extends React.Component{ // jsx requires uppercase when working with components
  // by default react components only need to define one method and it is not the constructor
  // it is a render method - this returns the jsx that is returned to the screen
  processFormData(event) {
    event.preventDefault()
    let newPost = event.target.formInputNameAttribute.value;
    if (newPost){
      event.target.formInputNameAttribute.value = ''; // clear input box
      UP_Collection_Access.insert({
        post: newPost,
        date: new Date(),
        thumbs: 0,
      });

    };
  }

  render(){
    return (
      <div className = 'singleItemStyle'>
        <form onSubmit={this.processFormData}>

            <input type='text' name='formInputNameAttribute' placeholder='Post Name'/>
            <button>Add Post</button>
          </form>
      </div>
    );
  }
};
