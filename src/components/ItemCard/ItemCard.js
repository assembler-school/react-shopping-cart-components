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
        <div className="ItemCard__image-wrapper">
          <img
            src="https://skyhighshoes.co.uk/images/thumbs/0040150_pleaser-usa-pleaser-flamingo-891-rose-gold-metallic-polyurethane-pu-rose-gold-chrome-8-inch-20-cm-heel-4-inch-10-cm-platform-ankle-strap-sandal-shoes_360.jpeg"
            className="ItemCard__image"
            alt={title}
          />
          <FavoriteIconButton
            handleSetFavorite={onSetFavorite}
            isFavorite={isFavorite}
          />
        </div>
        <h2 className="ItemCard__title">Pleasers</h2>
      </header>
      <Divider />
      <p className="ItemCard__description">High heels for pole dancers.</p>
      <Divider />
      <footer className="ItemCard__meta">
        <div className="ItemCard__icons">
          <div className="ItemCard__icon-row">
            <IconButton aria-label="up vote product" handleClick={onUpVote}>
              <ThumbDown />
            </IconButton>
            <p className="ItemCard__icon-txt">{downVotes.currentValue}</p>
          </div>
          <div className="ItemCard__icon-row">
            <IconButton aria-label="down vote product" handleClick={onDownVote}>
              <ThumbUp />
            </IconButton>
            <p className="ItemCard__icon-txt">{upVotes.currentValue}</p>
          </div>
        </div>
        <div className="ItemCard__icon-row">
          <Button onClick={onAddToCart}>Add to cart</Button>
        </div>
      </footer>
    </article>
  );
}

export default ItemCard;
