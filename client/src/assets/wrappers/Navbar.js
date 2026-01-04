import styled from 'styled-components'

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--borderColor);
  .logo {
    display: flex;
    align-items: center;
    height: var(--logo-height);
    width: auto;
  }
  .nav-center {
    display: flex;
    width: min(92vw, 1240px);
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-600);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-1);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--surface-1);
    border: 1px solid var(--borderColor);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
    font-weight: 700;
    letter-spacing: 0;
  }
  @media (min-width: 992px) {
    .nav-center {
      width: min(92vw, 1240px);
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`
export default Wrapper
