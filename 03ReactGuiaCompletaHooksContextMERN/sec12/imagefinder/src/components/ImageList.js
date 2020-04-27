import React from 'react';
import Image from './Image';

const ImageList = ({ images }) => {
    return (
        <div className="col-12 p-5 row">
            {
                images.map(item => (
                    <Image key={item.id}
                        image={item}/>
                ))  
            }
        </div>  
    );
}
export default ImageList;