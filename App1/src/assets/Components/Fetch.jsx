import { useEffect, useState } from "react";

function Fetch() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0, 10)); 
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Top 10 Quotes</h2>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default Fetch;
