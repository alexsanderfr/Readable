import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'


class NewComment extends Component {
    state = {
        body: '',
        author: ''
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
        const { parentId, dispatch } = this.props

        let comment = {}
        const uuidv4 = require('uuid/v4')
        comment.id = uuidv4()
        comment.author = author
        comment.timestamp = Date.now();
        comment.body = body
        comment.parentId = parentId
        dispatch(handleAddComment(comment))

        this.setState(() => ({
            body: '',
            author: ''
        }))
    }

    render() {
        const { body, author } = this.state

        return (
            <div>
                <h3 align='center'>Compose new Comment</h3>
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

function mapStateToProps(state, props) {
}

export default connect(mapStateToProps)(NewComment)