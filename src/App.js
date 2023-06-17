import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllTweets from "./components/AllTweets";
import { useState } from "react";

function App() {
  const [allTweets, setallTweets] = useState([]);

  async function getTweets() {
    let data = await fetch(
      "https://apex.oracle.com/pls/apex/vishesh24/tweets/get"
    );
    let convertedData = await data.json();
    setallTweets(convertedData.items);
  }

  return (
    <>
      <Header />
      <AllTweets allTweets={allTweets} />

      <button onClick={getTweets}>Get Tweets</button>
    </>
  );
}

export default App;
