import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import ScrollContainer from "./ScrollContainer";
import useScroll from "../hooks/useScroll";
import ViewPort from "./ViewPort";

const FeedContainerBlock = styled.div`
  width: 600px;
  height: 600px;
  overflow-y: auto;
  border: 1px black solid;
`;

export interface MockData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

const FeedContainer = () => {
  const [data] = useFetch<MockData>("MOCK_DATA.json");
  const { handleScroll, offset, height, feeds } = useScroll(data);

  return (
    <FeedContainerBlock onScroll={handleScroll}>
      <ScrollContainer height={height}>
        <ViewPort offset={offset} data={feeds} />
      </ScrollContainer>
    </FeedContainerBlock>
  );
};

export default FeedContainer;
