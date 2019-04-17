import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../utils/helpers'
import { MdThumbUp, MdThumbDown, MdDelete } from 'react-icons/md'
import { objectToArray } from '../utils/helpers'
import { handleReceiveCommentsByParent } from '../actions/comments';
import Comment from './Comment'
import { handleVotePost, handleDisablePost } from '../actions/posts';
import { Redirect } from 'react-router-dom'


class Post extends Component {

    state = {
        toHome: false
    }

    componentDidMount() {
        this.props.dispatch(handleReceiveCommentsByParent(this.props.post_id))
    }

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

    onClickDelete = (e) => {
        e.preventDefault()
        const { post, dispatch } = this.props
        dispatch(handleDisablePost(post.id))
        post.deleted = true
        this.setState(() => ({
            toHome: true
        }))
    }

    render() {
        const post = this.props.post
        const comments = this.props.comments

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            post === undefined ? <div><h1 className="error">404 post not found</h1></div> : <div>
                <div className="container">
                    <div className="content">
                        <h3>{post.title}</h3>
                        <h5>{`Posted by ${post.author} at ${formatTimestamp(post.timestamp)} in ${post.category}`}</h5>
                        <h5>{`${post.commentCount} comments`}</h5>
                        <h5>{post.body}</h5>
                    </div>
                    <div className="vote-buttons" align="center">
                        <h4>{`${post.voteScore} votes`}</h4>
                        <MdThumbUp className='like-icons' onClick={this.onClickLike} />
                        <MdThumbDown className='like-icons' onClick={this.onClickDislike} />
                        <MdDelete className='like-icons' onClick={this.onClickDelete} />
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
    const filteredArray = objectToArray(posts).filter((post) => post.id === post_id)
    const post = filteredArray === [] ? undefined : filteredArray[0]
    return {
        post: post,
        comments: objectToArray(comments).filter((comment) => comment.parentId === post_id)
    }
}

export default connect(mapStateToProps)(Post)