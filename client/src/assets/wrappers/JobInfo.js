import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .icon {
    font-size: 1rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-500);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-700);
  }
`
export default Wrapper
