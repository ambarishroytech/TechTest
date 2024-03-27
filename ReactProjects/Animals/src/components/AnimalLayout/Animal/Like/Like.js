import React from "react";
import LikeImage from '../../../../images/like.jpeg';
import "./Like.css";

const Like = () => {
    return (
        <figure class="image is-48x48">
          <img
            src={LikeImage}
            alt="Like"
          />
        </figure>
    );
}

export default Like;