import Link from 'next/link'
import styled from '@emotion/styled'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;

  a {
    margin-right: 0.5em;
  }

  button {
    text-decoration: underline;
    padding: 0;
    font: inherit;
    border-style: none;
    cursor: pointer;
    color: rgb(0, 0, 238);
  }
`

const Layout = ({ title, children }) => (
  <Root>
    <Navigation>
      <span>
        Welcome, <strong>Guest</strong>
      </span>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <button>Logout</button>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </Navigation>
    <h1>{title}</h1>
    {children}
  </Root>
)

export default Layout
