import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const InfiniteScrolling = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const picturesApiUrl = 'https://jsonplaceholder.typicode.com';

  const getPictures = (page) => {
    setLoading(true);
    axios.get(`${picturesApiUrl}/photos?_page=${page}&_limit=5`)
         .then(res => {
           setPictures([...pictures, ...res.data]);
           setLoading(false);
         })
  }
  useEffect(() => {
    getPictures(page);
    // eslint-disable-next-line
  }, [page]);
  const handleScroll = () => {
    const top = scrollRef.current.scrollTop;
    const clientHeight = scrollRef.current.clientHeight;
    const height = scrollRef.current.scrollHeight;
    if(top + clientHeight >= height) {
      const lastPicture = pictures[pictures.length - 1];
      const currentPage = lastPicture.albumId;
      getPictures(currentPage);
      setPage(currentPage);
    }
  }
  const loadingCSS = { height: "20px", margin: "5px" };
  // To change the loading icon behavior
  const loadingTextCSS = { display: loading ? "block" : "none" };

  return (
    <div>
      <div ref={scrollRef} onScroll={handleScroll} style={{overflowY:"auto", height: "472px"}}>
        {pictures.map(user => (
          <div key={user.id}>
            <img src={user.url} alt={user.id} height="100px" width="200px"/>
          </div>))}
      </div>
      <div style={loadingCSS}>
        <span style={loadingTextCSS}>Loading...</span>
      </div>
    </div>
  )
}

export default InfiniteScrolling;