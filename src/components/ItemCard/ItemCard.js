import React from "react";
import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";
import "./ItemCard.scss";

function Divider() {
  return <hr className="textDivider" />;
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
      <div>
        <img src={img} alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
      </div>
      <h2>{title}</h2>
      <Divider />
      <p>{shortDescription}</p>
      <Divider />
      <div className="ProductFooter">
        <div className="ProductIcons">
          <div className="ProductIcon">
            <IconButton aria-label="up vote product" handleClick={onUpVote}>
              <ThumbDown />
            </IconButton>
            <p className="ProductDislikes">{downVotes.currentValue}</p>
          </div>
          <div className="ProductIcon">
            <IconButton aria-label="down vote product" handleClick={onDownVote}>
              <ThumbUp />
            </IconButton>
            <p className="ProductLikes">{upVotes.currentValue}</p>
          </div>
        </div>
        <div>
          <Button onClick={onAddToCart}>Add to cart</Button>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
