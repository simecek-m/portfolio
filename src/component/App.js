import React from "react";
import styled from "styled-components";

// components
import Content from "component/Content";
import Columns from "component/Columns";
import Logo from "component/Logo";
import ThemeSwitcher from "component/ThemeSwitcher";
import { ReactComponent as GithubIcon } from "assets/github.svg";
import { ReactComponent as AndroidIcon } from "assets/android.svg";
import { ReactComponent as BehanceIcon } from "assets/behance.svg";
import { ReactComponent as MessageIcon } from "assets/message.svg";
import IconLink from "component/IconLink";

const Links = styled.div`
  text-align: right;
  margin-top: 20px;
`;

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
          <Links>
            <IconLink to="https://github.com/simecek-m" Icon={GithubIcon} />
            <IconLink to="https://developers.google.com/profile/u/102844233468537553217" Icon={AndroidIcon} />
            <IconLink to="https://www.behance.net/Simecekme450" Icon={BehanceIcon} />
            <IconLink to="mailto: simecek.m@seznam.cz" Icon={MessageIcon} />
          </Links>
        </div>
        
      </Columns>
    </Content>
  );
}

export default App;
