import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  min-height: 100vh;
  padding: 1.5rem;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 420px;
    border-top: 0;
    border-left: 4px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-700);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
