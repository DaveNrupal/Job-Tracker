import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--surface-1);
  border-radius: var(--borderRadius);
  border: 1px solid var(--borderColor);
  box-shadow: var(--shadow-1);
  border-bottom: 4px solid ${(props) => props.color};
  transition: var(--transition);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 44px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-2);
  }
`

export default Wrapper
