import React from "react";


function displayEmoji(minutes){

const emoji= minutes < 30 ? "☕" : "🍱";
const interval= minutes <30 ? 5: 10;

let emojis= "";

for (let i=0 ; i < minutes ; i+=interval) {
        emojis += emoji;
}
     return emojis;
}

function Article ({ id , title , date = "January 1, 1970" , preview , minutes }){
    const emojis =displayEmoji(minutes)
    
    return (
        <div>
            <article>
            <h3>{title}</h3>
            <small>{date} * {emojis} min read</small>
            <p>{preview}</p>
            </article>
        </div>
    )
}
export default Article;