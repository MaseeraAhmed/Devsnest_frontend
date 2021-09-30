import PropTypes from 'prop-types'
import React from 'react'

const Helmet = props => {

    document.title = 'RTT - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
