import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Content({ children }) {
  return (
    <StyledContent>{children}</StyledContent>
  )
};

export default Content;
