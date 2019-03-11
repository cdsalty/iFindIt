import React, { Component } from 'react';

function Poster(props){
   const title = props.title+ " movie poster"
    return (
        <div className="poster">
            <img src={props.imagePath} alt={title} />
        </div>
    )
}

export default Poster;