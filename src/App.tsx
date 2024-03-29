import { useState, useEffect } from "react";
import MenuHeader from "./components/menu-header";
import SiteNameHeader from "./components/site-name-header";
import NewsCard from "./components/news-card";
import LoadMoreButton from "./components/load-more-button";
import "./App.css";
import { Box } from "@mui/material";
import Footer from "./components/footer-comp";

function App() {
  const [ids, setIds] = useState<number[]>([]);
  const [api, setApi] = useState(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const [data, setData] = useState<any[] | null>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setIds(data))
      .catch((error) => console.error("Error fetching IDs:", error));
  }, [api]);
  console.log(ids);

  useEffect(() => {
    if (!ids.length) return; // Exit  if ids is empty

    // Fetch data for each id
    Promise.all(
      ids
        .slice(start, end)
        .map((id) =>
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          ).then((response) => response.json())
        )
    )
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [ids, start, end]);

  return (
    <>
      <SiteNameHeader />
      <MenuHeader setApi={setApi} setStart={setStart} setEnd={setEnd} />
      <Box p={2}>
        {data &&
          data.map((news: any) => <NewsCard key={news.id} news={news} />)}
        <LoadMoreButton ids={ids} end={end}  setEnd={setEnd} />
      </Box>
      <Footer/>
    </>
  );
}

export default App;
