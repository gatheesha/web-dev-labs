import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseEffectDemo from './UseEffectDemo.jsx'
import UseEffectDemo2 from './UseEffectDemo2.jsx'
import UseRefDemo from './UseRefDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectDemo />
    <UseEffectDemo2 />
    <hr />
    <UseRefDemo />
  </StrictMode>,
)
