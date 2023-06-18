import React, { useState } from "react";

function Header({ postTweet }) {
  const [tweet, setTweet] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 border-end">
          <i class="bi bi-twitter h1 text-primary"></i>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12 py-2">
              <h4>Home</h4>
            </div>
            <div className="col-12">
              <div className="row border border-2 border-start-0 border-end-0 py-2">
                <div className="col-2">
                  <i class="bi bi-person-circle h1"></i>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <input
                    value={tweet}
                    onChange={(event) => {
                      setTweet(event.target.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="Whats happening?"
                  />
                </div>
                <div className="col-2 d-flex align-items-center">
                  <button
                    onClick={() => {
                      postTweet(tweet);
                      setTweet("");
                    }}
                    className="btn btn-primary w-100"
                  >
                    Tweet{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 border-start">
          <div className="row">
            <div className="col-12 py-2">
              <input
                type="text"
                className="form-control bg-secondary bg-opacity-25"
                placeholder="Search Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
