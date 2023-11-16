import "./App.css";
import Header from "./components/Header";
import AllTweets from "./components/AllTweets";
import { useEffect, useState } from "react";

function App() {
  const [allTweets, setallTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTweets() {
    setLoading(true);
    let data = await fetch(
      "https://apex.oracle.com/pls/apex/vishesh24/tweets/get"
    );
    let convertedData = await data.json();
    setallTweets(convertedData.items);
    setLoading(false);
  }

  async function postTweet(tweet) {
    console.log("posting....");
    console.log(tweet);
    let currentTime = new Date().toISOString().slice(0, 10);
    console.log(currentTime);
    await fetch(
      `https://apex.oracle.com/pls/apex/vishesh24/tweets/post?tweet=${tweet}&datetime=${currentTime}&likes=0&reports=0`,
      { method: "POST" }
    );
    getTweets();
  }

  function sortTweetsByLikes() {
    let sortedArray = [...allTweets];
    sortedArray.sort((a, b) => b.likes - a.likes);
    setallTweets(sortedArray);
  }

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <Header postTweet={postTweet} sortTweetsByLikes={sortTweetsByLikes} />
      <AllTweets
        allTweets={allTweets}
        loading={loading}
        getTweets={getTweets}
      />
    </>
  );
}

export default App;
