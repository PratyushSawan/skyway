import React from 'react'
import SimplePage from '../layouts/simplePage'

const PhotoGallery = () => {
    return (
        <SimplePage
            title={'Photo Gallery'}
            image={require('../assets/images/carlous-img2.jpg')}
        >
            <h1>Photo GAllery</h1>
            <p>The page will be updated soon</p>
        </SimplePage>
    )
}

export default PhotoGallery
