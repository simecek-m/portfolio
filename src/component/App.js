import React from "react";
import styled from "styled-components";

// components
import Content from "component/Content";
import Columns from "component/Columns";
import Logo from "component/Logo";
import ThemeSwitcher from "component/ThemeSwitcher";

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

const TopThemeSwitcher = styled(ThemeSwitcher)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function App() {
  return (
    <Content>
      <TopThemeSwitcher />
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
