import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function ItemCard({id, img, title, 
  shortDescription, isFavorite, upVotes,downVotes,
   handleDownVote,  handleUpVote, handleSetFavorite,  handleAddToCart}) 
   {
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

  return <>
  <article className="ItemCard col col-12 col-md-6 col-lg-4" />
  <img></img>
  </>;
}

export default ItemCard;
 