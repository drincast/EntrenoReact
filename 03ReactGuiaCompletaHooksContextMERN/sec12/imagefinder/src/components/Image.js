import React from 'react';

const Image = ({ image }) => {
    const { largeImageURL, likes, previewURL, tags, views } = image
    return (
        <div className="col-12 col-sm-6 col-md-4 col-ld-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className='card-img-top' />

                <div className="card-body">
                    <p className="card text">{likes} Me gusta</p>
                    <p className="card text">{views} vistas</p>
                </div>

                <div className="card-footer">
                    <a href={previewURL}
                        target='_blank'
                        className='btn btn-primary btn-block'
                        rel="noopener noreferrer">
                            ver imagen
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Image;