import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {
    render() {
        const categories = this.props.categories
        return (
            <div>
                <ul className="list-group">
                {Object.values(categories).map((value) => (
                    <li key={value} className="list-group-item">
                        <div>
                            <h3>{value.name}</h3>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ categories }) {
    return {
        categories: categories
    }
}

export default connect(mapStateToProps)(Categories)