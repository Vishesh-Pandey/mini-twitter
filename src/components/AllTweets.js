import React from "react";

function AllTweets({ allTweets, loading, getTweets }) {
  const likeTweet = async (tweet) => {
    getTweets();
    await fetch(
      `https://apex.oracle.com/pls/apex/vishesh24/tweets/like?tweet=${tweet}`,
      {
        method: "POST",
      }
    );
    getTweets();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-2 text-center">
          {loading ? (
            <div className="py-5">
              <div
                class="spinner-border text-primary text-center"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {allTweets.map((tweet) => {
        return (
          <div className="row my-1">
            <div className="col-md-6 offset-md-2 border border-2 rounded bg-secondary bg-opacity-25">
              <p>Date : {tweet.datetime}</p>
              <h4>{tweet.tweet}</h4>
              <button
                onClick={() => {
                  likeTweet(tweet.tweet);
                }}
                className="btn btn-outline-dark border-0"
              >
                <i class="bi bi-heart-fill"></i> {tweet.likes}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllTweets;
