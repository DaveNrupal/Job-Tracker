import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    .sidebar-container {
      background: var(--surface-1);
      border-right: 1px solid var(--borderColor);
      min-height: 100vh;
      height: 100%;
      width: 260px;
      margin-left: -260px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding: 1rem 0 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 0.75rem 1rem;
      margin: 0.15rem 1rem;
      border-radius: var(--borderRadius);
      gap: 0.75rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--primary-50);
      color: var(--grey-900);
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
  }
`
export default Wrapper
