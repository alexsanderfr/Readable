import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown, MdDelete } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'
import { handleVoteComment, handleDisableComment } from '../actions/comments'
import { Link } from 'react-router-dom'
import { MdCreate } from 'react-icons/md'

class Comment extends Component {

    onClickLike = (e) => {
        e.preventDefault()
        const { comment, dispatch } = this.props
        dispatch(handleVoteComment(comment.id, "upVote"))
        comment.voteScore = comment.voteScore + 1
    }

    onClickDislike = (e) => {
        e.preventDefault()
        const { comment, dispatch } = this.props
        dispatch(handleVoteComment(comment.id, "downVote"))
        comment.voteScore = comment.voteScore - 1
    }

    onClickDelete = (e) => {
        e.preventDefault()
        const { comment, dispatch } = this.props
        dispatch(handleDisableComment(comment.id))
        comment.deleted = true
    }


    render() {
        const comment = this.props.comment

        if (comment.deleted) {
            return (
                <div></div>
            )
        }

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
                    <MdDelete className='like-icons' onClick={this.onClickDelete} />
                    <Link to={`${comment.parentId}/${comment.id}/edit`}>
                            <MdCreate className='like-icons' />
                        </Link>
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