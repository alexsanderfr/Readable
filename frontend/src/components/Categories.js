import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { objectToArray } from '../utils/helpers'

class Categories extends Component {
    render() {
        const categories = this.props.categories
        return (
            <div>
                <ul className="list-group">
                    {objectToArray(categories).map((value) => (
                        <li key={value.name} className="list-group-item">
                            <div>
                                <Link to={`/${value.name}`}>
                                    {value.name}
                                </Link>
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