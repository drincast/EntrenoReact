import React from 'react';

const InfoArtist = ({ infoArtist }) => {
    console.log(infoArtist);
    if(Object.keys(infoArtist).length === 0)
        return null;

    const { strArtistThumb, strGenre, strBiographyES } = infoArtist;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artistica
            </div>

            <div className="card-body">
                <img src={strArtistThumb} alt="logo artista" />
                <p className="card text">{strGenre}</p>
                <h2 className="card-text">Biografía</h2>
                <p className="card text">{strBiographyES}</p>
            </div>
        </div>
    );
}
export default InfoArtist;