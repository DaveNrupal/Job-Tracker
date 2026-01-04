import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--surface-1);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  border: 1px solid var(--borderColor);
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--borderColor);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
    box-shadow: var(--shadow-2);
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-600);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fff1d6;
    color: #c9781c;
  }
  .interview {
    background: #e2f3ff;
    color: #2b6c9c;
  }
  .declined {
    color: #a3262a;
    background: #ffe7e6;
  }
  .content {
    padding: 1.25rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.65rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    height: 30px;
    width: fit-content;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-2);
  }
  &:hover .actions {
    visibility: visible;
  }
`

export default Wrapper
