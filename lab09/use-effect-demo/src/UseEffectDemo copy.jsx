import { useState, useEffect, useRef } from 'react'

export default function UseRefDemo() {
  const [name, setName] = useState('');
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div> Name is {name}, used to be {prevName.current} </div>
    </>
  )
}
