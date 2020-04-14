import React from 'react';
import PropTypes from 'prop-types';

const New = ({ theNew }) => {
    const {urlToImage, url, title, description, source} = theNew;
    const img = urlToImage ?
                    <div className="card-image">
                        <img src={urlToImage} alt={title} />
                        <span className="card-title">{source.name}</span>
                    </div>
                :
                    null;

    return (
        <div className='col s12 m6 l4'>
            <div className="card">
                {img}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>                    
                </div>
                <div className="card-action">
                    <a href={url}
                        target='_blank'
                        res='noopener noreferrer'
                        className='waves-effect waves-light btn'>ver noticia completa</a>
                </div>
            </div>
        </div>
    );
}

New.protoTypes = {
    theNew: PropTypes.object.isRequired
}

export default New;