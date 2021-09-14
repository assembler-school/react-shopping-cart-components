import React from "react";

import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";
import FavoriteIconButton from "../FavoriteIconButton";

import "./ItemCard.scss";

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
    <>
      <div className="ItemCard">
        <img src={img} className="ItemCard__image" alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
        <div className="ItemCard__content">
          <h2>{title}</h2>
          <hr />
          <p>{shortDescription}</p>
          <hr />
          <div className="actions">
            <div className="votes">
              <IconButton aria-label="up vote product" handleClick={onUpVote}>
                <ThumbUp />
                <p>{upVotes.currentValue}</p>
              </IconButton>
              <IconButton
                aria-label="down vote product"
                handleClick={onDownVote}
              >
                <ThumbDown />
                <p>{downVotes.currentValue}</p>
              </IconButton>
            </div>
            <Button onClick={onAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
