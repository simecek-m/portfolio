import styled from "styled-components";
import SvgIcon from "./SvgIcon";
import { useTheme } from "theme/ThemeProvider";

import { ReactComponent as Night } from "assets/night.svg";
import { ReactComponent as Day } from "assets/day.svg";

const Knob = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25em;
  transition: .5s ease all;
  position: absolute;
  top: 10px;
`;

const NightIcon = styled(SvgIcon)`
  position: absolute;
  left: 10px;
  width: 30px;
  top: 10px;
  fill: white;
  transition: .3s ease all;
`;

const DayIcon = styled(SvgIcon)`
  position: absolute;
  right: 10px;
  width: 30px;
  top: 10px;
  transition: .3s ease all;
  fill: black;
`;

const Wrapper = styled.div`
  width: 90px;
  height: 50px;
  background-color: ${props => props.isDarkTheme ? "black" : "#F5F5F5"};
  border-radius: 25em;
  cursor: pointer;
  position: relative;
  transition: 1s ease all;

  ${Knob} {
    z-index: 10;
    left: ${props => props.isDarkTheme ? "50px" : "10px"};
    background-color: ${ props => props.isDarkTheme ? "white" : "#08ED7B"}
  }

  ${DayIcon} {
    opacity: ${props => props.isDarkTheme ? "0" : "100"};
  }

  ${NightIcon} {
    opacity: ${props => props.isDarkTheme ? "100" : "0"};
  }
`;



function ThemeSwitcher({ className }) {
  const { theme, switchTheme } = useTheme();
  return(
    <Wrapper className={className} isDarkTheme={theme === "dark"} onClick={switchTheme}>
      <NightIcon Icon={Night} />
      <Knob />
      <DayIcon Icon={Day} />
    </Wrapper>
  )
};

export default ThemeSwitcher;
