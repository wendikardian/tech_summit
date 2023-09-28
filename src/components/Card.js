import React from "react";
import card_image from "../images/card.webp";
import "./card.css";
import GreenButton from "./GreenButton";
import Rating from "./Rating";
// import Link
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  const { name, slug, price, rating, image, isReady } = props;
  return (
    <div className="card">
      <img src={image} className="card_image" alt="card image" />

      <div className="card_info">
        <h3>{name}</h3>
        <p className="price">Price: {price}</p>
        <Rating rating={rating} />
      </div>
      {isReady ? (
        <div className="card_footer">
          
            <GreenButton text="View More"

            link={`/courses${slug}`}
            // onClick={() => navigate(`/courses${slug}`)}
            />
       
        </div>
      ) : (
        <div className="card_footer">
          <GreenButton text="Not ready yet" 
          backgroundColor="red"
          />
        </div>
      )}
    </div>
  );
}

export default Card;
