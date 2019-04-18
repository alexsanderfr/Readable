import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleReceivePosts } from '../actions/posts';
import { handleReceiveCategories } from '../actions/categories';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import PostList from './PostList'
import Categories from './Categories'
import Post from './Post'
import NewPost from './NewPost'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveCategories())
    this.props.dispatch(handleReceivePosts())
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={PostList} />
            <Route exact path='/new' component={NewPost} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/:category' component={PostList} />
            <Route exact
              path="/:category/:post_id"
              render={({ match }) =>
                <Post
                  post_id={match.params.post_id}
                  categoryUrl={match.params.category}
                />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    content: posts
  }
}


export default connect(mapStateToProps)(App)