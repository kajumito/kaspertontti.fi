import React, { useRef, useReducer, useEffect } from 'react'
import { post } from 'axios'
import styled from 'styled-components'

import Input from './chatWindow/Input'
import Header from './chatWindow/Header'

import { media } from '../../styles/styleUtils'

const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: ${(p: { isOpen: boolean }) => (p.isOpen ? '50px' : '-20px')};
  height: 80vh;
  width: 400px;
  visibility: ${(p: { isOpen: boolean }) => (p.isOpen ? 'visible' : 'hidden')};
  opacity: ${(p: { isOpen: boolean }) => (p.isOpen ? 1 : 0)};
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 1;
  ${media.md`
    right:0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    border-radius: 0;
  `}
`

const Scrollable = styled.div`
  overflow-y: auto;
  background: #fff;
  flex-grow: 1;
  padding-top: 20px;
`

const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const MessageContainer = styled.div`
  position: relative;
  padding: 7px 10px;
  background: blue;
  border-radius: 10px;
  width: fit-content;
  margin: ${(p: { user: boolean }) =>
    p.user ? '0 20px 10px 40px' : '0 40px 10px 20px'};
  align-self: ${(p: { user: boolean }) => p.user && 'flex-end'};
  background: ${(p: { user: boolean }) => (p.user ? '#333333;' : '#f3f3f3')};
  color: ${(p: { user: boolean }) => (p.user ? '#fff' : '#000')};
  float: ${(p: { user: boolean }) => p.user && 'right'};
  :after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    ${(p: { user: boolean }) => (p.user ? 'right: -10px' : 'left: -10px')};
    top: 0px;
    bottom: auto;
    border: 10px solid;
    border-color: ${(p: { user: boolean }) =>
      p.user
        ? '#333333 transparent transparent transparent;'
        : '#f3f3f3 transparent transparent transparent;'};
  }
`

const Message = styled.p`
  margin: 0;
`

const From = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  color: #333333;
  font-weight: 700;
`

const Loading = styled.div`
  padding: 7px 10px;
`

const Dot = styled.span`
  transition: all 500ms ease;
  background: #333333;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 10px;
  animation: wave 2s ease infinite;
  :nth-child(1) {
    animation-delay: 0;
    margin-right: 5px;
  }
  :nth-child(2) {
    animation-delay: 100ms;
    margin-right: 5px;
  }
  :nth-child(3) {
    animation-delay: 200ms;
  }

  @keyframes wave {
    40% {
      transform: translate(0, 0);
      background: #333333;
    }
    10% {
      transform: translate(0, -7px);
      background-color: #555555;
    }
  }
`

interface IChatProps {
  isOpen: boolean
  setChatHandler: any
}

const initialState = {
  isLoading: false,
  messages: [
    {
      user: false,
      content:
        "Hello, I'm Kasper's assistant! You can ask me stuff about Kasper.",
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        isLoading: action.isLoading,
        messages: [...state.messages, action.message],
      }
    default:
      throw new Error()
  }
}

export default ({ isOpen, setChatHandler }: IChatProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const messageArea = useRef()

  // Scroll down when new messages
  useEffect(() => {
    messageArea.current.scrollTop = messageArea.current.scrollHeight
  }, [state.messages])

  const sendMessage = message => {
    dispatch({
      type: 'ADD_MESSAGE',
      isLoading: true,
      message,
    })
    post('https://servant-f6apqsariq-uc.a.run.app/chat', message).then(res => {
      dispatch({
        type: 'ADD_MESSAGE',
        isLoading: false,
        message: res.data,
      })
    })
  }

  return (
    <Wrapper isOpen={isOpen}>
      <Header setChatHandler={setChatHandler} />
      <Scrollable ref={messageArea}>
        <ChatContainer>
          {state.messages.map(message => (
            <MessageContainer user={message.user}>
              {message.user === false && <From>Toby</From>}
              <Message>{message.content}</Message>
            </MessageContainer>
          ))}
          {state.isLoading && (
            <MessageContainer user={false}>
              <Loading>
                <Dot />
                <Dot />
                <Dot />
              </Loading>
            </MessageContainer>
          )}
        </ChatContainer>
      </Scrollable>
      <Input sendMessage={sendMessage} />
    </Wrapper>
  )
}
