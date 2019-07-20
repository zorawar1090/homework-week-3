import React from 'react'
import PropTypes from 'prop-types'

export default function ModelDetails(props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li>
          Name: {props.name}
        </li>
      </ul>
    </div>
  )
}



ModelDetails.propTypes = {
  name: PropTypes.string.isRequired,
}