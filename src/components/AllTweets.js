import React from "react";
import Tweet from "./Tweet";

function AllTweets({ allTweets, loading, getTweets }) {
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
        return <Tweet tweet={tweet} />;
      })}
    </div>
  );
}

export default AllTweets;
