"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true);
  }, [])


  return (
    <div>
      {
        toggle
          ? <button onClick={() => { setToggle(!toggle); setTheme('light') }}><Sun /></button>
          : <button onClick={() => { setToggle(!toggle); setTheme('dark') }}><Moon /></button>
      }
    </div>
  )
}

export default ThemeSwitch