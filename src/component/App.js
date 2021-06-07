import React from "react";
import styled from "styled-components";

// components
import Content from "component/Content";
import Columns from "component/Columns";
import Logo from "component/Logo";

const Title = styled.h1`
  font-size: 92px;
  font-weight: 900;
  margin: 0;
`;

const Subtitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

const Text = styled.div`
  font-size: 36px;
`;

function App() {
  return (
    <Content>
      <Columns>
        <Logo />
        <div>
          <Title>Hi</Title>
          <Subtitle>I'm Martin Šimeček</Subtitle>
          <Text>I love to make web / mobile apps</Text>
          <Text>Interested in UX / UI</Text>
        </div>
      </Columns>
    </Content>
  );
}

export default App;
