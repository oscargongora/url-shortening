import React, { useState, useEffect } from "react";

const ShortenForm = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const _urls = sessionStorage.getItem("urls");
    if (_urls) setUrls(JSON.parse(_urls));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("urls", JSON.stringify(urls));
  }, [urls]);

  const addUrl = (newUrl) => {
    setUrls(urls.concat([newUrl]));
  };

  const setCopiedUrl = (urlCode) => {
    const _url = urls.find((u) => u.code === urlCode);

    if (_url !== undefined) {
      navigator.clipboard
        .writeText(_url.full_short_link)
        .then(() => {
          const _urls = urls.map((u) =>
            u.code === urlCode ? { ...u, copied: true } : u
          );
          setUrls(_urls);
        })
        .catch((err) => {
          alert("an error ocurred");
        });
    }
  };

  const handleUrlInputChange = (ev) => {
    setUrl(ev.target.value);
  };

  const handleShortUrl = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const resData = await res.json();
    if (resData.ok) {
      addUrl({ ...resData.result, copied: false });
    } else {
    }
  };

  return (
    <div id="short-section">
      <div id="short-form">
        <input
          placeholder="Shorten a link here..."
          type="text"
          onChange={handleUrlInputChange}
        />
        <button onClick={handleShortUrl}>Shorten It!</button>
      </div>
      <div className="recents-shorts">
        {urls.map((urlShort) => (
          <div
            key={urlShort.code}
            className={`shorted ${urlShort.copied ? "copied" : "no-copied"}`}
          >
            <div className="header">
              <h5>{urlShort.original_link}</h5>
            </div>
            <div className="body">
              <a target="_blank" href={urlShort.full_short_link}>
                {urlShort.full_short_link}
              </a>
              <button
                className={urlShort.copied ? "copied" : "no-copied"}
                onClick={() => setCopiedUrl(urlShort.code)}
              >
                {urlShort.copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortenForm;
