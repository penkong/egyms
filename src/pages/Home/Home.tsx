import React, { useCallback, useEffect } from 'react'

// ---

import { HomeStyled } from './Home.styled'

// ---

const url = process.env.REACT_APP_RAND

export const Home = () => {

  const getRandomUsers = useCallback(async () => {
    const res = await fetch(url!+ '?seed=foober&page=0&results=5');
    const data = await res.json()
    console.log(data);
  }, [])

  useEffect(()=> {

    getRandomUsers().catch(e => console.log(e))


  }, [])


  return (
    <HomeStyled>Home</HomeStyled>
  )
}
