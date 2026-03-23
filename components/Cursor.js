'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px'
        cursorRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = followerX + 'px'
        followerRef.current.style.top = followerY + 'px'
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMove)
    animate()

    const interactives = document.querySelectorAll('a, button')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)'
        if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
      })
      el.addEventListener('mouseleave', () => {
        if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      })
    })

    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
