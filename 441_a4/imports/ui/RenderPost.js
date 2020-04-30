import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const homeIcon = <FontAwesomeIcon icon={faHome}/>
const element = <FontAwesomeIcon icon={faThumbsUp}/>
//testing: Home with "FontAwesomeIcon" element <FontAwesomeIcon icon={faHome} />
//testing: Home just with const homeIcon {homeIcon}
//testing:  <FontAwesomeIcon icon={faThumbsUp} />

export default class RenderPost extends React.Component{

  render(){
  return (
    <>

      <div key={this.props.post_prop_obj._id} className='singleItemStyle'>

              {this.props.post_prop_obj.post}
              <hr></hr>
        {/* below is a statement function */}
        <p className='singleItemStyle--italic'>
        {this.props.post_prop_obj.likes} thumbs up {' '}
        <button className='button' onClick={() => {  // anonymous arrow function
          UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
             {$inc: {likes: 1}})}}>{element}</button>
        {' ' /*single space before button hack*/}
        </p>
      </div>
    </>
  );
}
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
