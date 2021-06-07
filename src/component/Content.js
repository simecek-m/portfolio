import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Content({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default Content;
