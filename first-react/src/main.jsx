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

const root = createRoot(document.getElementById('root'))
root.render(
  <Page />
  )

  
function Header() {
  return (
    <header>
      <img src='src/assets/react.svg' alt='logo' width={40}/>
    </header>
  )
}

function Maincontent(){
  return (
    <main>
      <h1>Why I am interested in React</h1>
      <ol>
        <li>It is a popular library</li>
        <li>It is easy to use</li>
        <li>It is a powerful library</li>
      </ol>
    </main>
  )
}

function Footer() {   
  return (
    <footer>
      &copy; 2024 Hossain development. All rights reserved.
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <Maincontent />
      <Footer />
    </>
  )
}