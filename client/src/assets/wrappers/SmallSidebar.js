import styled from 'styled-components'

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(22, 34, 48, 0.55);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--surface-1);
    border: 1px solid var(--borderColor);
    width: min(92vw, 420px);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 3.5rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 0.75rem 1rem;
    border-radius: var(--borderRadius);
    gap: 0.75rem;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
    background: var(--primary-50);
  }
  .nav-link:hover .icon {
    color: var(--primary-600);
  }
  .icon {
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
    background: var(--primary-100);
  }
  .active .icon {
    color: var(--primary-700);
  }
`
export default Wrapper
