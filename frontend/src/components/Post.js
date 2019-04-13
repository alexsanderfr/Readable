import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
            post === undefined ? <div></div> : <div className="container">
                <div className="content">
                    <h3>{post.title}</h3>
                    <h5>{`Posted by ${post.author} at ${formatTimestamp(post.timestamp)} in ${post.category}`}</h5>
                    <h5>{`${post.commentCount} comments`}</h5>
                    <h5>{post.body}</h5>
                </div>
                <div className="vote-buttons" align="center">
                    <h4>{`${post.voteScore} votes`}</h4>
                    <MdThumbUp className='like-icons' />
                    <MdThumbDown className='like-icons' />
                </div>
            </div>

        )
    }
}

function mapStateToProps({ posts }, props) {
    const post_id = props.post_id
    const post = objectToArray(posts).filter((post) => post.id === post_id)[0]

    return {
        post: post
    }
}

export default connect(mapStateToProps)(Post)