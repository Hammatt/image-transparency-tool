import React, { FC, useState } from 'react';
import ImageEditor from '../components/ImageEditor/ImageEditor';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import ImagePreview from '../components/ImagePreview/ImagePreview';

const HomePage:FC = () => {
    const [image, setImage] = useState<string | null>(null);

    return (
        <div>
            <ImagePicker imageCallback={(newImage) => setImage(newImage)} />
            { image === null 
            ? 
                null 
            : 
                <div>
                    <ImagePreview image={image} />
                    <ImageEditor image={image} imageEditCallback={(newImage) => setImage(newImage)}/>
                </div> 
            }
        </div>
    );
};

export default HomePage;
