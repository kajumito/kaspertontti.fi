import React from 'react'
import styled from 'styled-components'

const Logo = styled.svg`
  width: 300px;
  display: flex;
  margin: auto;
  fill: white;
  stroke: white;
  use {
    stroke-dasharray: 1550;
    stroke-dashoffset: 1550;
    fill-opacity: 0;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    animation-name: DrawLine, FadeStroke, FillIn;
    animation-duration: 3s, 0.75s, 0.75s;
    animation-delay: 0s, 2.5s, 2.5s;
  }
  @keyframes DrawLine {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes FadeStroke {
    to {
      stroke-opacity: 0;
    }
  }

  @keyframes FillIn {
    from {
      fill-opacity: 0;
    }
    to {
      fill-opacity: 1;
    }
  }
`

const LogoAnimation = () => {
  return (
    <Logo className="Animate-Path" viewBox="0 0 612 792" xmlSpace="preserve">
      <use className="Animate-Draw" xlinkHref="#Mark" />
      <defs>
        <path
          id="Mark"
          d="M551.73,275.44c-9-2.33-10.27-3.5-114.88-7h0c-98.7-5.83-245,18.2-249.7,19.2a.49.49,0,0,1-.24,0c-25.6-8.36-50,9.89-51.48,11.05a.44.44,0,0,1-.17.08c-10.82,3.12-16.84,2.45-19,2-.48-.11-3-1.94-3.1-2.59-.87-7.6,15.19-31.39,17.09-35.54,2.13-4.66-.43-18.64-4.7-15.14-4.8,3.93-23.29,38.32-30,48.42-.15.23-.51.27-.69.45-1.79,1.81-7.8,1.89-9.48,7a11.1,11.1,0,0,0,1.71,9.9c.43.58-7.26,16.31-8.11,13.4,6.83-63.49,6.4-104.27,5.55-119.41-.57-10.07-5.1-14.47-8.07-16.3-2.71-1.66-5.93.26-6.75,4.16a30.92,30.92,0,0,0,0,9.91,12.58,12.58,0,0,0,2.18,5.84c10.27,13.91-1.94,115.59-5.28,130.94-2.67,12.28,4.73,14,7.16,14,.46,0,.79.59.68,1.19-.49,2.66-2,9.44,2,12.15,5,3.43,6.39,2.35,20.1-9.75.41-.36,1-.06,1.08.58,9.3,49.47,19,62.65,30,58.13a.51.51,0,0,0,.16-.09c28.83-22,55.55-76.77,61.32-111.72a.81.81,0,0,1,.58-.73C250.13,294,315.9,278.36,447.1,281.26,578.64,284.18,551.73,275.44,551.73,275.44Zm-436.82,44a7.66,7.66,0,0,1-1.93,2.49.93.93,0,0,1-.88.24c-.9-.28-3.25-.15-5.6,7.17-.29.4-.78-.29-1.06-.77a1.26,1.26,0,0,1-.13-.86c.46-2.19,2.78-11.41,9.1-9.65A1,1,0,0,1,114.91,319.42Zm7.18,81.84c-5.29-7.22-17.81-30-17.18-51a4.59,4.59,0,0,1,1.24-3.13c4.36-4.31,19.92-20,24-28a3.78,3.78,0,0,1,1.64-1.73c9.2-4.59,18-4.88,43.88-10.18.82-.16,1.54.8,1.41,1.91-1.9,16.15-22.24,61.06-51.08,91.38C125.05,401.46,123,402.42,122.09,401.26Z"
        />
      </defs>
    </Logo>
  )
}
export default LogoAnimation
