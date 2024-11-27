// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Maincontent from './MainContent'
import Footer from './Footer'

const root = createRoot(document.getElementById('root'))
root.render(
  <Page />
  )

function Page() {
  return (
    <>
      <Header />
      <Maincontent />
      <Footer />
    </>
  )
}