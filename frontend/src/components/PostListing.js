import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'

class PostListing extends Component {
    render() {
        const post = this.props.post
        return (
            <div className="container">
                <div className="content">
                    <h3>{post.title}</h3>
                    <h5>{`Posted by ${post.author} at ${formatTimestamp(post.timestamp)} in ${post.category}`}</h5>
                    <h5>{`${post.commentCount} comments`}</h5>
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

function mapStateToProps({ posts }, { id }) {
    const post = objectToArray(posts).filter((post) => post.id === id)[0]

    return {
        post: post
    }
}

export default connect(mapStateToProps)(PostListing)