import React, { FC, useState } from 'react';
import Jimp from 'jimp';

interface ImageEditorProps {
    image: string;
    imageEditCallback: (imageData: string) => void;
}

const ImageEditor:FC<ImageEditorProps> = (imageEditorProps: ImageEditorProps) => {
    const [loading, setLoading] = useState(false);

    async function makeBackgroundTransparent(imageSource: string) {
        setLoading(true);

        const image = await Jimp.read(imageSource);
        const newImage = await image
            .scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
                const isWhitePixel = (image.bitmap.data[idx + 0] === 255) && (image.bitmap.data[idx + 1] === 255) && (image.bitmap.data[idx + 2] === 255);
                if (isWhitePixel) {
                    image.bitmap.data[idx + 3] = 0; //this one is alpha
                }
            })
            .getBase64Async(Jimp.MIME_PNG);
        imageEditorProps.imageEditCallback(newImage);

        setLoading(false);
    };

    return (
        <div>
            <p>
                Currently all that this does is replace every white pixel (#FFFFFF) with alpha 0.
            </p>

            {
                loading 
                ? 
                    <p>loading...</p> 
                : 
                    <button onClick={async () => makeBackgroundTransparent(imageEditorProps.image)}>Make the Background Transparent</button>
            }
        </div>
    );
};

export default ImageEditor;
