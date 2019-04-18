import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { objectToArray } from '../utils/helpers'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: 'react',
        toHome: false
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

    handleChangeCategory = (e) => {
        const category = e.target.value

        this.setState(() => ({
            category: category
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { title, body, author, category } = this.state
        const { dispatch } = this.props

        let post = {}
        const uuidv4 = require('uuid/v4')
        post.id = uuidv4()
        post.author = author
        post.timestamp = Date.now();
        post.title = title
        post.body = body
        post.category = category
        console.log(post)
        dispatch(handleAddPost(post))

        this.setState(() => ({
            title: '',
            body: '',
            author: '',
            toHome: true
        }))
    }

    render() {
        const { title, body, author, category, toHome } = this.state
        const categories = this.props.categories

        if (toHome === true) {
            return <Redirect to='/' />
        }


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
                    <select name="category" className='category-form' form="category-form" value={category} onChange={this.handleChangeCategory}>
                        {objectToArray(categories).map((value) => (
                            <option key={value.name}>{value.name}</option>
                        ))}
                    </select>
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

function mapStateToProps({ categories }) {
    return {
        categories: categories
    }
}

export default connect(mapStateToProps)(NewPost)