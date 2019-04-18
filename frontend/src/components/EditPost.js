import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/posts'
import { objectToArray } from '../utils/helpers'
import { Redirect } from 'react-router-dom'

class EditPost extends Component {
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

        let post = this.props.post
        post.id = this.props.post_id
        post.author = author
        post.title = title
        post.body = body
        post.category = category
        dispatch(handleEditPost(this.props.post.id, post))

        this.setState(() => ({
            title: '',
            body: '',
            author: '',
            toHome: true
        }))
    }

    render() {
        const { title, body, author, category, toHome } = this.state
        const post = this.props.post
        const categories = this.props.categories

        if (toHome === true) {
            return <Redirect to={`/`} />
        }

        if (post !== undefined && title === '') {
            this.setState(() => ({
                title: post.title,
                author: post.author,
                body: post.body,
                category: post.category
            }))
        }


        return (post === undefined ? <div><h1 className="error">404 post not found</h1></div> :
            <div>
                <h3 align='center'>Edit Post</h3>
                <form className='new-post' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Type in the post title"
                        value={title}
                        onChange={this.handleChangeTitle}
                        className='attribute-textarea'
                    />
                    <select name="category" className='category-form' 
                    form="category-form" value={category} onChange={this.handleChangeCategory}>
                        {objectToArray(categories).map((value) => (
                            <option key={value.name}>{value.name}</option>
                        ))}
                    </select>
                    <textarea
                        placeholder="Type in the post"
                        value={body}
                        onChange={this.handleChangeBody}
                        className='body-textarea' />
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

function mapStateToProps({ categories, posts }, props) {
    const post_id = props.post_id
    const filteredArray = objectToArray(posts).filter((post) => post.id === post_id)
    const post = filteredArray === [] ? undefined : filteredArray[0]
    return {
        post: post,
        categories: categories,
    }
}

export default connect(mapStateToProps)(EditPost)