import { Routes, Route } from 'react-router-dom'

// ---

import { AppLayout } from './layout'
import { Home, About } from './pages'

// ---

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppLayout>
  )
}
