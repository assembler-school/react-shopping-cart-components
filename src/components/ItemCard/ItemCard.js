import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
 return <hr className="ItemCard__divider" />;
 }

function ItemCard({
  id,
  img,
  title,
  shortDescription,
  isFavorite,
  upVotes,
  downVotes,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
}) {
   function onDownVote() {
    handleDownVote(id);
   }
   function onUpVote() {
    handleUpVote(id);
   }
   function onSetFavorite() {
    handleSetFavorite(id);
   }
   function onAddToCart() {
    handleAddToCart(id);
   }

  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-4">

    <header>
      <div className = "Itemcard__img_container">
        <img src={img} className="Itemcard__img" />
          <FavoriteIconButton
            handleSetFavorite={onSetFavorite}
            isFavorite={isFavorite}  
        />
      </div>
      <h2 className="Itemcard__title">{title}</h2>
    </header>

    <Divider /> 

    <p className="Itemcard__shortDescription">{shortDescription}</p>

    <Divider />

    <div className="Itemcard__icons">

      <IconButton aria-label="up vote product" handleClick={onUpVote}

       <ThumbDown />

      </IconButton>

    </div>
    
 
  
  
  
  
  
  
  
  ) ;
}

export default ItemCard;
