import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditComment } from '../actions/comments'
import { Redirect } from 'react-router-dom'
import { objectToArray } from '../utils/helpers'

class EditComment extends Component {
    state = {
        body: '',
        author: '',
        toPost: false
    }

    handleChangeBody = (e) => {
        const body = e.target.value

        this.setState(() => ({
            body: body
        }))
    }

    handleChangeAuthor = (e) => {
        const author = e.target.value

        this.setState(() => ({
            author: author
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { body, author } = this.state
        const { dispatch } = this.props

        let comment = this.props.comment
        comment.author = author
        comment.body = body
        dispatch(handleEditComment(this.props.comment_id, comment))

        this.setState(() => ({
            body: '',
            author: '',
            toPost: true
        }))
    }

    render() {
        const { body, author, toPost } = this.state
        const { comment } = this.props

        if (toPost === true) {
            return <Redirect to={`/${this.props.category}/${this.props.post_id}`} />
        }

        if (comment !== undefined && body === '') {
            this.setState(() => ({
                author: comment.author,
                body: comment.body,
            }))
        }


        return (
            <div>
                <h3 align='center'>Edit Comment</h3>
                <form className='new-comment' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Type in the comment"
                        value={body}
                        onChange={this.handleChangeBody}
                        className='body-textarea'
                    />
                    <textarea
                        placeholder="Type in your name"
                        value={author}
                        onChange={this.handleChangeAuthor}
                        className='attribute-textarea'
                    />
                    <button
                        className='btn'
                        type='submit'
                        disabled={body === '' || author === ''}>
                        Submit
                </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({comments}, props) {
    const comment_id = props.comment_id
    const filteredArray = objectToArray(comments).filter((comment) => comment.id === comment_id)
    const comment = filteredArray === [] ? undefined : filteredArray[0]
    return {
        comment: comment,
    }
}

export default connect(mapStateToProps)(EditComment)