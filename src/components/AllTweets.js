import React from "react";

function AllTweets({ allTweets }) {
  return (
    <div className="container">
      {allTweets.map((tweet) => {
        return (
          <div className="row my-1">
            <div className="col-6 offset-2 border border-2 rounded bg-secondary bg-opacity-25">
              <p>{tweet.datetime}</p>
              <h4>{tweet.tweet}</h4>
              <button className="btn btn-outline-dark border-0">
                <i class="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllTweets;
