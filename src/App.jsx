import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    doApiRequest();

    async function doApiRequest() {
      const quote = await fetchQuote();
      setQuote(quote);
    }
  }, []);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return { quote: data.content, author: data.author };
  };

  return (
    <div className="App">
      {quote && (
        <h1 style={{ fontSize: "34px" }}>
          <i>"{quote.quote}"</i>
        </h1>
      )}
      {quote && (
        <p style={{ fontSize: "25px" }} className="read-the-docs">
          - {quote.author}
        </p>
      )}
    </div>
  );
}

export default App;
