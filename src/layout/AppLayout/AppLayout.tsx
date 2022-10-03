import { FC } from 'react'
import { Link } from 'react-router-dom'

// ---

import { AppLayoutStyled } from './AppLayout.styled'

// ---

export const AppLayout: FC<any> = ({ children }) => {
  return (
    <AppLayoutStyled>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <section>{children}</section>
    </AppLayoutStyled>
  )
}
