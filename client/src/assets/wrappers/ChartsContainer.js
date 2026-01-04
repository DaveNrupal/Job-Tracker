import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 3rem;
  text-align: center;
  button {
    background: var(--primary-50);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    padding: 0.35rem 0.75rem;
    text-transform: capitalize;
    color: var(--primary-700);
    font-size: 1.05rem;
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover {
    background: var(--primary-200);
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`

export default Wrapper
