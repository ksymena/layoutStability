import React, { useState, useEffect } from "react";
import { Articles } from "./MoreArticles.styles";
import { SectionHeading } from "../Layout/Layout.styles";
import ArticlesCarousel from "./ArticlesCarousel";

const MoreArticles = () => {
  const [scrolledTo, setScrolledTo] = useState(0);
  const [visibleItems, setVisibleItems] = useState([0, 1]);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchMoreArticles = async () => {
      const res = await fetch("http://localhost:8039/get-more-articles?number=18");

      if (res && res.ok) {
        const articles = await res.json();
        setArticles(articles);
      }
    };

    fetchMoreArticles();
  }, []);

  const props = {
    articles,
    scrolledTo,
    setScrolledTo,
    visibleItems,
    setVisibleItems
  };
  return (
    <Articles>
      <SectionHeading>More articles {visibleItems.join(", ")}</SectionHeading>
      {articles && <ArticlesCarousel {...props} />}
    </Articles>
  );
};

export default MoreArticles;
