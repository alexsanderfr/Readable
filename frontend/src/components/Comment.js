import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'

class Comment extends Component {
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
                    <MdThumbUp className='like-icons' />
                    <MdThumbDown className='like-icons' />
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