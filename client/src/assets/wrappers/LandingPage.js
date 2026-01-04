import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  /* // If using logo.svg
  .logo {
    width: 400px;
    height: 240px;
    fill: none;
    padding: 8px 16px 0px 0px;
  } 
  */
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -2rem;
    padding: 2rem 0 4rem;
    row-gap: 2.5rem;
  }
  h1 {
    font-weight: 700;
    font-size: clamp(2.6rem, 4vw, 3.6rem);
    span {
      color: var(--primary-600);
    }
  }
  p {
    color: var(--grey-600);
    font-size: 1.05rem;
  }
  .main-img {
    display: none;
    filter: drop-shadow(0 18px 30px rgba(16, 21, 27, 0.2));
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper
