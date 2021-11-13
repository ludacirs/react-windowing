import React from "react";
import styled from "styled-components";
import FeedContainer from "./components/FeedContainer";

const AppBlock = styled.div`
  padding: 12px;
`;

function App() {
  return (
    <AppBlock className="App">
      <FeedContainer />
    </AppBlock>
  );
}

export default App;
