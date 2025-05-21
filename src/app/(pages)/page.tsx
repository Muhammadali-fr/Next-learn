"use client"
import { useState } from "react";

export default function Home() {
    const [images, setImages] = useState([]);

    const handleChangeImage = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file, 
            url: URL.createObjectURL(file),
        }));
        setImages(newImages);
    }   

    return (
        <div>
            <input
                type="file"
                multiple
                accept='image/'
                className='my-5'
                onChange={handleChangeImage}
            />

            {
                images.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt="image" />
                    </div>
                ))
            }
        </div>
    );
}
