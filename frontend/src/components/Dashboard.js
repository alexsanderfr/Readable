import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from "./Post"

class Dashboard extends Component {
    render() {
        const posts = this.props.postIds
        return (
            <div>
                {Object.values(posts).map((value) => (
                    <li key={value}>
                        <Post id={value} />
                    </li>
                ))}
            </div>
        )
    }
}


function mapStateToProps({ posts }) {
    return {
        postIds: Object.keys(posts)
        .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)