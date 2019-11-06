import styled from "@emotion/styled";

const Web3StatusGeneric = styled.button`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  font-size: 0.9rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
`;

export default Web3StatusGeneric;
