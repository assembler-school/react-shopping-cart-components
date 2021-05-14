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
    <>
      <article className="ItemCard col col-12 col-md-6 col-lg-4">
        <img src={img} alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
        <h2>{title}</h2>
        <Divider />
        <div className="descContainer">
          <p>{shortDescription}</p>
        </div>
        <Divider />
        <div className="wrapper">
          <div className="iconContainer">
            <div className="iconWrapper">
              <IconButton aria-label="up vote product" handleClick={onUpVote}>
                <ThumbDown />
              </IconButton>
              <p>{upVotes.currentValue}</p>
            </div>
            <div className="iconWrapper">
              <IconButton
                aria-label="down vote product"
                handleClick={onDownVote}
              >
                <ThumbUp />
              </IconButton>
              <p>{downVotes.currentValue}</p>
            </div>
          </div>
          <Button onClick={onAddToCart}>Add to cart</Button>
        </div>
      </article>
    </>
  );
}

export default ItemCard;
