import React from "react";
import styled from "styled-components";
import { MockData } from "./FeedContainer";

const ItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  border: 1px solid olivedrab;
  border-radius: 8px;
  margin: 10px;
`;

interface ItemProps {
  id: MockData["id"];
}

const Item = ({ id }: ItemProps) => {
  return (
    <ItemBlock>
      <div> id: {id}피드</div>
    </ItemBlock>
  );
};

export default React.memo(Item);
