import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostListing from "./PostListing"
import { objectToArray } from '../utils/helpers'

class PostList extends Component {

    state = {
        sortBy: 'score'
    }

    sortByScore = (e) => {
        e.preventDefault()
        const { sortBy } = this.state;
        this.setState(() => ({ sortBy: sortBy === 'score' ? 'date' : 'score' }))
    }

    render() {
        const posts = this.props.posts;
        const { sortBy } = this.state;

        return (
            <div>
                <div className='btn-container' align='right'>
                    <button className="btn btn-primary" onClick={this.sortByScore}>Sort by {sortBy === 'score' ? 'date' : 'score'}</button>
                </div>
                <ul className="list-group">
                    {posts.map((post) => (
                        <li key={post.id} className="list-group-item">
                            <PostListing id={post.id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ posts }, props) {
    const { category } = props.match.params
    return {
        posts: category === undefined ? objectToArray(posts) : objectToArray(posts).filter((post) => (post.category === category))
    }
}

export default connect(mapStateToProps)(PostList)