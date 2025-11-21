import React, { useState, useEffect } from "react";
import "../../Styles/QuotesApp.css";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
        headers: {
          "X-Api-Key": "PcIjmZdPd/WtrnRyZAl9oQ==igkJYKTYNhMmnBCA",  // <- replace with your API key
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      // `data` is an array; pick the first quote
      const quoteObj = data[0];
      setQuote(quoteObj.quote);
      setAuthor(quoteObj.author);
    } catch (err) {
      console.error(err);
      setError("Could not fetch quote. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="QuoteApp-wrapper">
      {/* <h2 className="QuoteApp-title">Random Math Quote</h2> */}

      {loading ? (
        <p className="QuoteApp-loading">Loading...</p>
      ) : error ? (
        <p className="QuoteApp-error">{error}</p>
      ) : (
        <div className="QuoteApp-quote">
          <p className="QuoteApp-text">"{quote}"</p>
          <p className="QuoteApp-author">— {author}</p>
        </div>
      )}

      <button className="QuoteApp-btn" onClick={fetchQuote}>
        Get Another Quote
      </button>
    </div>
  );
}
