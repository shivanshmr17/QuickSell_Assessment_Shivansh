import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className = "card_container flex-gap-10" style={{gap : '5px'}}>
        <div className = "card_heading flex-sb">
            <span style={{textTransform : "uppercase"}} className = 'color-grey'>{id}</span>
            <div className = "image_container relative" style = {{ width : "30px", height : "30px"}}>
                <img style = {{width : "100%", height : "100%",  borderRadius : "50%" }}  
                src = "https://i.pinimg.com/736x/31/34/4e/31344e39f626a451d197020a5beab60e.jpg"
                alt = "UserImage"/>
                <div className = "show_status"></div>
            </div>
        </div>
        <div className = "card_title" style = {{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className = "card_tags">
        <div className = "tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className = "tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;