import styled from "styled-components";
import SvgIcon from "component/SvgIcon";
import { ReactComponent as OctoCatIcon } from "assets/octocat.svg";

const StyledLogo = styled.div`
  display: block;
  position: relative;
  margin: 0;
  margin: 0 50px;
`;

const LogoIcon = styled(SvgIcon)`
  position: relative;
  width: 400px;
  height: 400px;
  z-index: 10;
  left: 30px;
  bottom: 40px;
`;

const LogoBackground = styled.div`
  width: 350px;
  height: 350px;
  background-color: #08ED7B;
  position: absolute;
  transform: rotate(45deg);
  top: 0;
`;

function Logo({ Icon = OctoCatIcon }) {
  return (
    <StyledLogo>
      <LogoIcon Icon={Icon} color="red"/>
      <LogoBackground />
    </StyledLogo>
  )
};

export default Logo;