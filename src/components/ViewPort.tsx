import React from "react";
import styled from "styled-components";
import Item from "./Item";
import useFetch from "../hooks/useFetch";

const ViewPortBlock = styled.div``;

export interface MockData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

const ViewPort = () => {
  const [data] = useFetch<MockData>("MOCK_DATA.json");

  return (
    <ViewPortBlock>
      {data.map((props, index) => (
        <Item key={props.id} id={index} />
      ))}
    </ViewPortBlock>
  );
};

export default ViewPort;
