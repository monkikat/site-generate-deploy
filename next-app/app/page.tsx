"use client";

import { useState } from "react";

const ideaToGenerate = "Basic portfolio website with black and grey theme";

export default function Home() {
  const [result, setResults] = useState<object>();

  async function handleOnClick() {
    const results = await fetch('/api/scraper', {
      method: 'POST',
      body: JSON.stringify({
        siteUrl: 'https://v0.dev'
      })
    }).then(r => r.json())
    setResults(results)
  }

  return (
    <div>
      <button className="cursor-pointer" onClick={handleOnClick}>Scrape</button>
      {result && (
        <div className="grid">
          <pre className="bg-zinc-200 text-left py-4 px-5 rounded overflow-x-scroll">
            <code>{JSON.stringify(result, undefined, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
