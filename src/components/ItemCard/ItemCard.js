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
    <div>
      <article className="ItemCard col col-12 col-md-6 col-lg-4" />;
      <img src={img} className="ItemCard__image" alt={title} />;
      <FavoriteIconButton
        handleSetFavorite={onSetFavorite}
        isFavorite={isFavorite}
      />
      <h2 className="ItemCard__title">{title}</h2>
      <Divider />
      <p className="ItemCard__description">{shortDescription}</p>
      <Divider />
      <IconButton aria-label="up vote product" handleClick={onUpVote}>
        <ThumbDown />
        <p className="ItemCard__icon-txt">{downVotes.currentValue}</p>
      </IconButton>
      <IconButton aria-label="down vote product" handleClick={onDownVote}>
        <ThumbUp />
        <p>{upVotes.currentValue}</p>
      </IconButton>
      <Button onClick={onAddToCart}>Add to cart</Button>
    </div>
  );
}

export default ItemCard;
