import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function CustomIcon({ color }) {
    return (
        <div className={`fs-2 icon d-flex justify-content-center align-items-center`}>
            <div style={{ backgroundColor: color }} className='line me-3'></div>
            <span style={{ color: color }} aria-label="star icon">
                <FontAwesomeIcon icon={faStar} />
            </span>
            <div style={{ backgroundColor: color }} className='line ms-3'></div>
        </div>
    );
}

// Add propTypes for props validation
CustomIcon.propTypes = {
    color: PropTypes.string.isRequired // Ensures 'color' prop is a string and required
};
