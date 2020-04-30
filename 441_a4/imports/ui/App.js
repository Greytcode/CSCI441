import React from 'react';
import TitleBar from './TitleBar.js';  //new as of topic 20
import AddPosts from './AddPosts.js';
import PostList from './PostList.js';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar title={this.props.passedPropTitle}
        moderator={this.props.passedPropModerator} />
        <div className='wrapper'>
            <AddPosts />
            <PostList passed_posts={this.props.passedPropAllPosts}/>
        </div>
          <Footer title={this.props.passedPropTitle}/>
      </>
    )
  }

};
//require title and posts`
App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
};
