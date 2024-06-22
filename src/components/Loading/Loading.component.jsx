import React from 'react';
import './Loading.styles.scss';  // Make sure this import is correct

export const Loading = ({ src }) => {
    const imageUrl = `/images/users/${src}.png`;  // Renamed 'src' to 'imageUrl'

    return (
        <div className="spinner">
            <div className="lock"></div>
            <img src={imageUrl} alt="" className="picture" /> 
        </div>
    );
};
