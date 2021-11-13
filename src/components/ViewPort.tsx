import React from "react";
import styled from "styled-components";
import { MockData } from "./FeedContainer";
import Item from "./Item";

const ViewPortBlock = styled.div<Partial<ViewPortProps>>`
  transform: translateY(${(props) => props.offset}px);
  position: absolute;
  border: solid 1px blue;
`;

interface ViewPortProps {
  data: MockData[];
  offset: number;
}

const ViewPort = ({ data, offset }: ViewPortProps) => {
  return (
    <ViewPortBlock offset={offset}>
      {data.map((item) => (
        <Item key={item.id} id={item.id} />
      ))}
    </ViewPortBlock>
  );
};

export default ViewPort;
