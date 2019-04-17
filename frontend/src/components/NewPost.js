import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'


class Post extends Component {
    state = {
        title: '',
        body: '',
        author: ''
    }

    handleChangeTitle = (e) => {
        const title = e.target.value

        this.setState(() => ({
            title: title
        }))
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

        const { title, body, author } = this.state
        const { category, dispatch } = this.props

        let post = {}
        const uuidv4 = require('uuid/v4')
        post.id = uuidv4()
        post.author = author
        post.timestamp = Date.now();
        post.title = title
        post.body = body
        post.category = category === undefined ? "all" : category
        dispatch(handleAddPost(post))

        this.setState(() => ({
            title: '',
            body: '',
            author: ''
        }))
    }

    render() {
        const { title, body, author } = this.state

        return (
            <div>
                <h3 align='center'>Compose new Post</h3>
                <form className='new-post' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Type in the post title"
                        value={title}
                        onChange={this.handleChangeTitle}
                        className='attribute-textarea'
                    />
                    <textarea
                        placeholder="Type in the post"
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
                        disabled={body === '' || author === '' || title === ''}>
                        Submit
                </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
}

export default connect(mapStateToProps)(Post)