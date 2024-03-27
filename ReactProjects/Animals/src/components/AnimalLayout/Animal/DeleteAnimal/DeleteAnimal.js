import React from "react";
import DeleteImage from '../../../../images/delete.png';

const DeleteAnimal = (props) => {
    return (
        <figure class="image is-48x48">
          <img
            src={DeleteImage}
            alt="Delete"
          />
        </figure>
    );
}

export default DeleteAnimal;