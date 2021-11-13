import React, { useEffect, useState } from "react";
import { MockData } from "../components/FeedContainer";

type UseScrollType = (data: MockData[]) => {
  offset: number;
  height: number;
  feeds: any[];
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
};

const ITEM_HEIGHT = 112;
const PER_PAGE = 15;

const useScroll: UseScrollType = (data: MockData[]) => {
  const [scroll, setScroll] = useState({
    top: 0,
    offset: 0,
    height: 0,
  });

  const [feeds, setFeeds] = useState<MockData[]>([]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    setScroll({ ...scroll, top: target.scrollTop });
  };

  useEffect(() => {
    setScroll({ ...scroll, height: data.length * ITEM_HEIGHT });
  }, [data]);

  useEffect(() => {
    if (scroll.top + 600 >= scroll.height) {
      //todo: 마지막 노드일때
      // setData([...data, ...(await useFetch<MockData>(data[data.length-1]])));
    }
    const startIndex = Math.floor(scroll.top / ITEM_HEIGHT);
    setFeeds(data.slice(startIndex, startIndex + PER_PAGE));
    setScroll({
      ...scroll,
      offset: startIndex * ITEM_HEIGHT - ITEM_HEIGHT * 3,
    });
  }, [scroll.top]);

  return { feeds, offset: scroll.offset, height: scroll.height, handleScroll };
};

export default useScroll;
