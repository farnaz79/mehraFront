import React, { useState } from 'react';
import '../styles/App.css'
import next from '../assets/image/arrow/Next.svg'
import prv from '../assets/image/arrow/previews.svg'


const Slider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevImage = () => {
        const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNextImage = () => {
        const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="slider-container">
            <div style={{position:"relative"}}>
                {images.map((image, index) => (
                    <img

                        key={index}
                        className={`slide ${index === currentImageIndex ? 'active' : ''} mainSliderImage`}
                        src={image}
                        alt={`Slide ${index}`}
                    />
                ))}

                    <img
                        className={'arrowPrv'}
                        src={prv}
                        alt="slidPic"
                        onClick={goToPrevImage}
                    />
                    <img
                        className={'arrowNext'}
                        src={next}
                        alt="slidPic"
                        onClick={goToNextImage}
                    />

            </div>
        </div>
    );
};

export default Slider;