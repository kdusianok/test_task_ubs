import Index from "pages/Index/Index";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

function createObjectURL(object: any) {
  return window.URL
    ? window.URL.createObjectURL(object)
    : window.webkitURL.createObjectURL(object);
}

export default function App() {
  const [query, setQuery] = useState("");

  const onSearch = useCallback(() => {
    console.log("onSearch");
  }, []);

  const song = useRef<any>(null);

  useEffect(() => {
    fetch("https://freesound.org/apiv2/sounds/14854/download/", {
      method: "GET",
      headers: {
        Authorization: "Bearer V30us4VQP1SVoJpLY3Ex5jHXiy8cdx"
      }
    }).then(async (result) => {
      if (song?.current) {
        song.current.src = createObjectURL(await result.blob());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
