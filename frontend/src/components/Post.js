import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'
import { handleReceiveCommentsByParent } from '../actions/comments';
import Comment from './Comment'

class Post extends Component {

    componentDidMount() {
        this.props.dispatch(handleReceiveCommentsByParent(this.props.post_id))
    }

    render() {
        const post = this.props.post
        const comments = this.props.comments;
        console.log(comments)
        return (
            post === undefined ? <div></div> : <div>
                <div className="container">
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
                <div>
                    {comments === undefined ? <div></div> : comments.map((comment) => (
                        <li key={comment.id} className="list-group-item">
                            <Comment id={comment.id} />
                        </li>
                    ))}
                </div>
            </div>

        )
    }
}

function mapStateToProps({ posts, comments }, props) {
    const post_id = props.post_id
    const post = objectToArray(posts).filter((post) => post.id === post_id)[0]
    return {
        post: post,
        comments: objectToArray(comments)
    }
}

export default connect(mapStateToProps)(Post)