import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends Component {
    render() {
        const categories = this.props.categories
        return (
            <div>
                <ul className="list-group">
                    {Object.values(categories).map((value) => (
                        <li key={value} className="list-group-item">
                            <div>
                                <Link to={`/${value.name}`} exact activeClassName='active'>
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