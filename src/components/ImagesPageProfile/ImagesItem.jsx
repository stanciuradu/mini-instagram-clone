import React from 'react';
import '../ImagesPageProfile/ImagesItem.scss';

function ImagesItem(props) {
    const{image}=props;
    return (
        <div className='col-4'>
            <img src={image} alt="" />
        </div>
    );
}

export default ImagesItem;
