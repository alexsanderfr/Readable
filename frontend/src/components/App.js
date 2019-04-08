import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleReceivePosts } from '../actions/posts';
import { handleReceiveCategories } from '../actions/categories';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard'
import Categories from './Categories'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveCategories())
    this.props.dispatch(handleReceivePosts())
  }

  render() {

    return (
      <Router>
        <Fragment>
          <div className="App">
            <Nav />
            <Route path='/' exact component={Dashboard} />
            <Route path='/categories' exact component={Categories} />
          </div>
        </Fragment>
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