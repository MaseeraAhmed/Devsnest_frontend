import React from 'react';
import ReactImageZoom from 'react-image-zoom';

function MainImage({ src }) {
    const props = {
        width: 400,
        img: src.url,
        // scale: .5,
        offset:{
            "vertical": 50,
            "horizontal": 20
        },
        zoomStyle: `
        width: 100%;
        height: 70%;
        border: 3px solid red;
        z-index: 100;
        `,
        zoomLensStyle: `
        cursor: crosshair;
         opacity: 0.3;
         background-color: grey`,
    };
    return (
            <ReactImageZoom {...props}/>
    );
}

export default MainImage;