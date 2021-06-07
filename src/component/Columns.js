import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

function Columns({ children }) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default Columns;
