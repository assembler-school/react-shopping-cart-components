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
      <img src={img} alt={title} />
      <FavoriteIconButton
        handleSetFavorite={onSetFavorite}
        isFavorite={isFavorite}
      />
      <h2>{title}</h2>
      <Divider />
      <p>{shortDescription}</p>
      <Divider />
      <footer className="ItemCard__footer">
        <div className="ItemCard__buttons">
          <IconButton aria-label="up vote product" handleClick={onUpVote}>
            <ThumbDown />
          </IconButton>
          <p>{downVotes.currentValue}</p>
          <IconButton aria-label="down vote product" handleClick={onDownVote}>
            <ThumbUp />
          </IconButton>
          <p>{upVotes.currentValue}</p>
        </div>
        <div className="ItemCard__add">
          <Button onClick={onAddToCart}>Add to Cart</Button>
        </div>
      </footer>
    </article>
  );
}

export default ItemCard;
