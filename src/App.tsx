import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import Dashboard from '@/pages/Dashboard'
import Visitors from '@/pages/Visitors'
import Companies from '@/pages/Companies'
import Workflows from '@/pages/Workflows'
import Scripts from '@/pages/Scripts'

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/scripts" element={<Scripts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
