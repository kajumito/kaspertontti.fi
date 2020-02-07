import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import LogoAnimation from './loading/LogoAnimation'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  background: ${p => p.theme.palette.black};
  opacity: ${(p: {loading:boolean}) => (p.loading ? 1 : 0)};
  transition: all 0.5s ease-out;
`

const Loading = () => {
  const alreadyLoaded = typeof window !== 'undefined' && window.sessionStorage.getItem('signature-load')
  const [isLoading, setIsLoading] = useState(alreadyLoaded !== 'loaded')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false) 
      typeof window !== 'undefined' && window.sessionStorage.setItem('signature-load', 'loaded');
    }, 3500)
  })

  return (
    <Wrapper loading={isLoading}>
      <LogoAnimation />
    </Wrapper>
  )
}
export default Loading
