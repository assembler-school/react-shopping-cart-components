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
        <img src={img} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
      </header>
      <h2>{title}</h2>
      <Divider />
      <p>{shortDescription}</p>
      <Divider />
      <footer>
        <IconButton aria-label="up vote product" handleClick={onUpVote}>
          <ThumbUp />
          <p>{upVotes.currentValue}</p>
        </IconButton>
        <IconButton aria-label="down vote product" handleClick={onDownVote}>
          <ThumbDown />
          <p>{downVotes.currentValue}</p>
        </IconButton>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </footer>
    </article>
  );
}

export default ItemCard;
