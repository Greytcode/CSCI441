import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
//  ***Change the database name.
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fa-thumbs-up } from '@fortawesome/free-solid-svg-icons';


Meteor.startup(() =>  {

  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(() => {
    //const element = <FontAwesomeIcon icon={faThumbs-up}/>
    const allPostsInDB = UP_Collection_Access.find({}, {sort: {date: -1}}).fetch();
    let title = '441 Assignment 4';
    let moderator = 'Beth Wilson';

    ReactDOM.render(<App passedPropTitle = {title} passedPropModerator={moderator}
      passedPropAllPosts={allPostsInDB}/>, document.getElementById('content'));
  });
});
