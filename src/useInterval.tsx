import { useState, useEffect } from "react"

export const useIterval = (height: string) => {
  const [state, setState] = useState(height)
  useEffect(() => {
    const timer = setInterval(() => {
      setState(JSON.stringify(JSON.parse(state) + 1))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return {
    state,
    setState,
  }
}
