import React, { useState } from "react";

function Tweet({ tweet }) {
  const [like, setLike] = useState(0);
  const [loading, setLoading] = useState(false);

  const likeTweet = async (tweet) => {
    setLoading(true);
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/vishesh24/tweets/like?tweet=${tweet}`,
      {
        method: "POST",
      }
    );

    if (response.status === 200) {
      setLike(like + 1);
    }
    setLoading(false);
  };

  const reportTweet = async () => {
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/vishesh24/tweets/report?tweet=${tweet.tweet}`,
      { method: "POST" }
    );
    if (response.status === 200) {
      alert("tweet reported!");
    } else {
      alert("tweet not reported!");
    }
  };

  return (
    <div className="row my-1">
      <div className="col-md-6 offset-md-2 border border-2 rounded bg-secondary bg-opacity-25 position-relative">
        <p>Date : {tweet.datetime}</p>
        <h4>{tweet.tweet}</h4>
        {loading ? (
          <button className="btn btn-outline-dark border-0 ">
            <div
              className="spinner-border spinner-border-sm text-secondary me-1"
              role="status"
            ></div>
            {tweet.likes + like}
          </button>
        ) : (
          <button
            onClick={() => {
              likeTweet(tweet.tweet);
            }}
            className="btn btn-outline-dark border-0 "
          >
            <i class="bi bi-heart-fill"></i> {tweet.likes + like}
          </button>
        )}
        <div className="position-absolute top-0 end-0">
          <button
            className="btn btn-outline-secondary border-0 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button onClick={reportTweet} className="dropdown-item">
                Report
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
