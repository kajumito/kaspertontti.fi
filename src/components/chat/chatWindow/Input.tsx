import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { media } from '../../../styles/styleUtils'

import SendMailIcon from './input/sent-mail.inline.svg'

const Wrapper = styled.div`
  position: relative;
  border-top: ${(p: { active: boolean }) =>
    p.active ? '1px solid #333' : '1px solid #ddd'};
  background: #fff;
  border-radius: 0 0 10px 10px;
  flex-shrink: 0;
  padding: 20px;
  ${media.md`
    border-radius: 0;
  `}
`

const MessagingArea = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 5px;
`

const Input = styled.textarea.attrs({
  cols: 2,
})`
  width: 100%;
  border: 0;
  outline: 0;
  resize: none;
  font-size: 16px;
  margin-right: 20px;
  font-family: 'Roboto';
  background: transparent;
  z-index: 1;
`

const Helper = styled.p`
  position: absolute;
  margin: 0;
  top: ${(p: { active: boolean }) => (p.active ? '10px' : '35px')};
  font-size: ${(p: { active: boolean }) => (p.active ? '12px' : '16px')};
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.15s ease-out;
`

const Send = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background: #333333;
  :hover {
    background: #444444;
  }
  :active {
    background: #222222;
  }
`

const SendIcon = styled(SendMailIcon)`
  width: 18px;
  height: 18px;
`

const Provider = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  color: #333333;
  font-weight: 700;
`

interface IInputProps {
  sendMessage: void
}

export default ({ sendMessage }: IInputProps) => {
  const [message, setMessage] = useState('')
  const [active, setActive] = useState(false)
  const messageArea = useRef()

  const watchKeys = e => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  const submit = () => {
    if (message.trim() !== '') {
      messageArea.current.focus()
      setMessage('')
      sendMessage({
        user: true,
        content: message,
      })
    }
  }

  return (
    <Wrapper active={active}>
      <MessagingArea>
        <Helper active={active}>Lähetä viesti</Helper>
        <Input
          onKeyDown={e => watchKeys(e)}
          ref={messageArea}
          value={message}
          onChange={e => setMessage(e.target.value)}
          onBlur={() => message === '' && setActive(false)}
          onFocus={() => setActive(true)}
        />
        <Send onClick={() => submit()}>
          <SendIcon />
        </Send>
      </MessagingArea>
      <Provider>
        Service provided by <Link>me</Link>
      </Provider>
    </Wrapper>
  )
}
