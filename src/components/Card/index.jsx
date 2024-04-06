import React from "react";

function Card(props){
    const { text, backgroundColor,title, color, border, borderRadius, width, height, src } =
    props;

    return(
        <>
            <img src={src} height={height} width={width}/>
            <h1>{title}</h1>
            <p width={width}>{text}</p>
        </>
    );
}

export default Card;