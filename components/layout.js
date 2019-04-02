import Link from 'next/link'
import styled from '@emotion/styled'
import { logoutUser } from '../lib/auth'

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

const Layout = ({ title, children, auth }) => {
  const { user = {} } = auth || {}

  return (
    <Root>
      <Navigation>
        <span>
          Welcome,{' '}
          <strong>
            {user.name ? user.name : 'Guest'}
          </strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {user.email ? (
            <React.Fragment>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button type="button" onClick={logoutUser}>Logout</button>
            </React.Fragment>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </Navigation>
      <h1>{title}</h1>
      {children}
    </Root>
  )
}

export default Layout
