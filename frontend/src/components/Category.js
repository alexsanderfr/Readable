import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from "./Post"

class Category extends Component {
    render() {
        const posts = this.props.postIds
        return (
            <div>
                <ul className="list-group">
                    {Object.values(posts).map((value) => (
                        <li key={value}  className="list-group-item">
                            <Post id={value} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ posts }, props) {
    const { category } = props.match.params
  
    return {
      postIds: Object.keys(Object.values(posts).filter((post) => (post.category === category)))
            .sort((a, b) => posts[b].timestamp - posts[a].timestamp),
    }
  }
  
  export default connect(mapStateToProps)(Category)