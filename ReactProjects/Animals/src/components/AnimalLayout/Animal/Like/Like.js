import React, {useState} from "react";
import LikeImage from '../../../../images/like.jpeg';
import "./Like.css";

const Like = () => {
  
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLikeCounterClick = () => {
    setLikeCounter(likeCounter + 1);
  }

    return (
      <a href="#" onClick={handleLikeCounterClick}>
        <figure class="image is-48x48">
          <img
            src={LikeImage}
            alt="Like"
          />
        </figure>
        <span>{likeCounter}</span>
      </a>
    );
}

export default Like;