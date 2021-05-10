import React from 'react';
import './style.scss';

export default function Preview(props) {

    return (
        <div className="contPreview">
            <div className="preview" 
            style={{ borderRadius: props.topLeft+"% "+props.topRight+"% "+props.bottomRight+"% "+props.bottomLeft+"%" }}></div>
        </div>
    )
}
