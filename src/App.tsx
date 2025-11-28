import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import Dashboard from '@/pages/Dashboard'
import Visitors from '@/pages/Visitors'
import Companies from '@/pages/Companies'
import Workflows from '@/pages/Workflows'
import Scripts from '@/pages/Scripts'
import Login from '@/app/login/page'
import Signup from '@/app/signup/page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
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
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
