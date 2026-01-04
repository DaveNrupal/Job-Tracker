import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
  }
  .dashboard-page {
    width: min(92vw, 1200px);
    margin: 0 auto;
    padding: 2.5rem 0 4rem;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: 260px 1fr;
    }
    .dashboard-page {
      width: min(92vw, 1240px);
    }
  }
`
export default Wrapper
