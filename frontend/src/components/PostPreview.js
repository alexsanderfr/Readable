import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { handleVotePost } from '../actions/posts';

class PostPreview extends Component {

    onClickLike = (e) => {
        e.preventDefault()
        const { post, dispatch } = this.props
        dispatch(handleVotePost(post.id, "upVote"))
        post.voteScore = post.voteScore + 1;
    }

    onClickDislike = (e) => {
        e.preventDefault()
        const { post, dispatch } = this.props
        dispatch(handleVotePost(post.id, "downVote"))
        post.voteScore = post.voteScore - 1;
    }
    
    render() {
        const post = this.props.post
        return (
            <div className="container">
                <div className="content">
                    <Link to={`/${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
                    <h5>{`Posted by ${post.author} at ${formatTimestamp(post.timestamp)} in ${post.category}`}</h5>
                    <h5>{`${post.commentCount} comments`}</h5>
                </div>
                <div className="vote-buttons" align="center">
                    <h4>{`${post.voteScore} votes`}</h4>
                    <MdThumbUp className='like-icons' onClick={this.onClickLike} />
                    <MdThumbDown className='like-icons' onClick={this.onClickDislike} />
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

export default connect(mapStateToProps)(PostPreview)