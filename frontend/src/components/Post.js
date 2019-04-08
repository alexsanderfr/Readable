import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div>
                <h3>{post.title}</h3>
                <h5>{`Posted by ${post.author} at ${formatTimestamp(post.timestamp)} in ${post.category}`}</h5>
                <p>{post.body}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, { id }) {
    const post = posts[id]

    return {
        post: post
    }
}

export default connect(mapStateToProps)(Post)