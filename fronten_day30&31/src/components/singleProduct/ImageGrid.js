import React from 'react';
import { Grid } from "@material-ui/core";

function ImageGrid({ images, onSelect, selectedImage }) {
    return (
        <Grid container direction={"column"}>
            {images.length !== 0 &&
            images.map((image, index) => (

                    <img
                        key={index}
                        src={image.url}
                        width={100}
                        style={{
                            border: index === selectedImage ? '3px solid yellow' : "2px solid #eee",
                            cursor: 'pointer'
                        }}
                        alt={'image21'}
                        onClick={() => onSelect(index)}
                    />
                )
            )}
        </Grid>
    );
}

export default ImageGrid;