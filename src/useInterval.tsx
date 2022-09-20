import { useState, useEffect } from "react"

export const useIterval = (height: number): [number, (newValue: number) => void] => {
  const [state, setState] = useState(height);

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prev => (prev + 1) % 100);
    }, 100)
    return () => {
      clearInterval(timer)
    }
  });

  return [
    state,
    setState,
  ];
}
