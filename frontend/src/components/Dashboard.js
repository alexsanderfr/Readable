import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from "./Post"

class Dashboard extends Component {
    render() {
        const posts = this.props.postIds
        return (
            <div>
                <ul className="list-group">
                    {Object.values(posts).map((value) => (
                        <li key={value}  className="list-group-item">
                            <Post id={value} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ posts }) {
    return {
        postIds: Object.keys(posts)
            .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)