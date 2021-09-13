import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="item-card__divider" />;
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
    <article className="item-card col col-12 col-md-6 col-lg-4">
      <header className="item-card__header">
        <img className="item-card__img" src={img} alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
      </header>
      <h2 className="item-card__title">{title}</h2>
      <Divider />
      <p className="item-card__description">{shortDescription}</p>
      <Divider />
      <footer className="item-card__footer">
        <div className="item-card__voting-controls">
          <IconButton aria-label="up vote product" handleClick={onUpVote}>
            <ThumbUp />
          </IconButton>
          <p className="item-card__vote-count">{upVotes.currentValue}</p>
          <IconButton aria-label="down vote product" handleClick={onDownVote}>
            <ThumbDown />
          </IconButton>
          <p className="item-card__vote-count">{downVotes.currentValue}</p>
        </div>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </footer>
    </article>
  );
}

export default ItemCard;
