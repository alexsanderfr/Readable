import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'
import { handleVoteComment } from '../actions/comments'

class Comment extends Component {

    onClickLike = (e) => {
        e.preventDefault()
        const { comment, dispatch } = this.props
        dispatch(handleVoteComment(comment.id, "upVote"))
        comment.voteScore = comment.voteScore + 1;
    }

    onClickDislike = (e) => {
        e.preventDefault()
        const { comment, dispatch } = this.props
        dispatch(handleVoteComment(comment.id, "downVote"))
        comment.voteScore = comment.voteScore - 1;
    }


    render() {
        const comment = this.props.comment
        return (
            comment === undefined ? <div></div> : <div className="container">
                <div className="content">
                    <h5>{`Posted by ${comment.author} at ${formatTimestamp(comment.timestamp)}`}</h5>
                    <h5>{comment.body}</h5>
                </div>
                <div className="vote-buttons" align="center">
                    <h4>{`${comment.voteScore} votes`}</h4>
                    <MdThumbUp className='like-icons' onClick={this.onClickLike} />
                    <MdThumbDown className='like-icons' onClick={this.onClickDislike} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ comments }, props) {
    const comment_id = props.id
    const comment = objectToArray(comments).filter((comment) => comment.id === comment_id)[0]
    return {
        comment: comment
    }
}

export default connect(mapStateToProps)(Comment)