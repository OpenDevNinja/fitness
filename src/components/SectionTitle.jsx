import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  color = 'secondary' 
}) => {
  const textAlignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const titleColors = {
    secondary: 'text-secondary',
    primary: 'text-primary'
  }

  return (
    <div className={`${textAlignments[alignment]} mb-10`}>
      <h2 
        className={`
          text-3xl md:text-4xl font-bold mb-4 
          ${titleColors[color]}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-secondary-light max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['secondary', 'primary'])
}

export default SectionTitle