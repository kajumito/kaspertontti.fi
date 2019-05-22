import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import LogoAnimation from './loading/LogoAnimation'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.palette.black};
  z-index: 2;
  opacity: ${p => (p.loading ? 1 : 0)};
  visibility: ${p => !p.loading && 'hidden'};
  transition: all 0.25s ease-out;
`

const Loading = () => {
  // This is temporary because ReactDOMServer doesn't yet support Suspense
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3500)
  })

  return (
    <Wrapper loading={isLoading}>
      <LogoAnimation />
    </Wrapper>
  )
}
export default Loading