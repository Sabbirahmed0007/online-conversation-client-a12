import React from 'react';


const Taglist = ({tag}) => {
    const {tagName, color}= tag;
    // console.log(tagName);

    const tagStyle = {
        backgroundColor: color,
        color: '#fff',
        padding: '8px',
        margin: '4px',
        borderRadius: '4px',
    };




    return (
        <div className='font-semibold'>
            <h1 style={tagStyle}>{tagName}</h1>
        </div>
    );
};

export default Taglist;