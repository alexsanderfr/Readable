import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleReceivePosts } from '../actions/posts';
import { handleReceiveCategories } from '../actions/categories';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveCategories())
    this.props.dispatch(handleReceivePosts())
  }

  render() {
    const posts = this.props.content
    Object.entries(posts).map(([key, value]) => ( console.log(value)))
    return (
      <div className="App">
        <ul className='dashboard-list'>
          {Object.entries(posts).map(([key, value]) => (
            <li key={value.id}>
              {value.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    content: posts
  }
}


export default connect(mapStateToProps)(App)