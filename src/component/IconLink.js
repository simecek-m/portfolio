import styled from "styled-components";
import SvgIcon from "./SvgIcon";

const StyledIcon = styled(SvgIcon)`
  height: 100%;
  width: 100%;
  fill: var(--color-text);
  transition: .3s ease all;
`;

const Link = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 10px 20px 0 0;
  :hover {
    ${StyledIcon} {
      fill: var(--color-primary)
    }
  }
`;

function IconLink({ to="/", Icon }) {
  return(
    <Link href={to} target="_blank" rel="noreferrer" >
     <StyledIcon Icon={Icon} />
    </Link>
  )
};

export default IconLink;