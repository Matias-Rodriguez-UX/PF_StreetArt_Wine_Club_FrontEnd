import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//import { reviewProduct, getReviews } from "../../../actions";

export default function Reviews() {


  const dispatch = useDispatch(); 
  

  const [input, setInput] = useState({
    review: '',
    rating: 0,
    email: '',
});

function handleChange(e) { 
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
}

// useEffect(() => {
//   dispatch(getReviews());
// }, [dispatch])


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reviewProduct(input))
    //alert()
    setInput({
      review: "",
      rating: 0,
      email: "",
    });
};



  

  return (
    <div>
      <h2 class="text-left" style={{ flex: 1 }}> Product Reviews </h2>
      <p>Average Rating: </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              Comment:
              <input
                type="text"
                name="review"
                value={input.review}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, marginLeft: "1em" }}>
              Rating:
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={input.rating}
                onChange={handleChange}
              />
            </div>
         </label>
          <button style={{ backgroundColor: "yellow" }} type="submit">
            Submit
          </button>
        </div>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "1em" }}>{error}</p>
      )}

      <div>
       
            <p>Comment: {input.review}</p>
          </div>
  
    </div>
  );
}











