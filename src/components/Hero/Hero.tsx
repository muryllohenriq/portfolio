import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Developer", 
            "Designer", 
            "Creator"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div></div>
  )
}