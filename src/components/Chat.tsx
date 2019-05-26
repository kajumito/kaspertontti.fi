import React, { useState } from 'react'
import styled from 'styled-components'

import ChatWindow from './chat/ChatWindow'

import { media } from '../styles/styleUtils'

import Icon from './chat/speech-bubble.inline.svg'

const Wrapper = styled.div``

const ChatButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 100px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.12), 1px 2px 3px rgba(0, 0, 0, 0.24);
  visibility: ${(p: { isOpen: boolean }) => (p.isOpen ? 'hidden' : 'visible')};
  opacity: ${(p: { isOpen: boolean }) => (p.isOpen ? 0 : 1)};
  transition: all 0.1s ease-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :active {
    background: rgba(255, 255, 255, 0.05);
  }
  ${media.md`
    right: 50px;
    height: 48px;
    width: 48px;
  `}
  ${media.sm`
    right: 25px;
  `}
`

const ChatIcon = styled(Icon)`
  width: 36px;
  height: 36px;
  ${media.md`
    height: 24px;
    width: 24px;
  `}
`

export default (props: IChatProps) => {
  const [isChatOpen, setChatOpen] = useState(false)
  return (
    <Wrapper>
      <ChatButton isOpen={isChatOpen} onClick={() => setChatOpen(!isChatOpen)}>
        <ChatIcon />
      </ChatButton>
      <ChatWindow isOpen={isChatOpen} setChatHandler={setChatOpen} />
    </Wrapper>
  )
}
