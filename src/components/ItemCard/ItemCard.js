import React from "react";

import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";
import FavoriteIconButton from "../FavoriteIconButton";

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
    <>
      <article className="ItemCard col col-12 col-md-6 col-lg-4">
        <header>
          <div className="ItemCard__img-container">
            <img src={img} className="ItemCard__image" alt={title} />
            <FavoriteIconButton
              handleSetFavorite={onSetFavorite}
              isFavorite={isFavorite}
            />
          </div>
        </header>
        <h2>{title}</h2>
        <div className="ItemCard__content">
          <Divider />
          <p>{shortDescription}</p>
          <Divider />
          <div className="ItemCard__actions">
            <div className="ItemCard__votes">
              <IconButton aria-label="up vote product" handleClick={onUpVote}>
                <ThumbUp />
              </IconButton>
              <p>{upVotes.currentValue}</p>
              <IconButton
                aria-label="down vote product"
                handleClick={onDownVote}
              >
                <ThumbDown />
              </IconButton>
              <p>{downVotes.currentValue}</p>
            </div>
            <Button onClick={onAddToCart}>Add to cart</Button>
          </div>
        </div>
      </article>
    </>
  );
}

export default ItemCard;
