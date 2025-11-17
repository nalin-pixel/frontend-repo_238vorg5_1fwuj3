import { useEffect, useState } from 'react'
import Header from './components/Header'
import QuickCreate from './components/QuickCreate'
import CRMGenerator from './components/CRMGenerator'

function App() {
  const [shops, setShops] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const loadShops = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/shops`)
      const data = await res.json()
      setShops(data)
    } catch (e) {
      // ignore for initial load
    }
  }

  useEffect(() => {
    loadShops()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold">Welcome to BarberSuite</h2>
          <p className="text-gray-600 mt-2">Manage bookings, clients, and automated outreach with an AI copilot.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Active Shops</p>
              <p className="text-3xl font-semibold">{shops.length}</p>
            </div>
            <a href="/test" className="p-4 border rounded-lg hover:bg-gray-50">
              <p className="text-sm text-gray-500">System</p>
              <p className="text-lg font-medium text-blue-600">Run health check →</p>
            </a>
            <a href="/landing" className="p-4 border rounded-lg hover:bg-gray-50">
              <p className="text-sm text-gray-500">Marketing</p>
              <p className="text-lg font-medium text-indigo-600">View landing page →</p>
            </a>
          </div>
        </div>
      </section>

      <QuickCreate />
      <CRMGenerator />

      <footer className="text-center text-xs text-gray-500 py-10">© {new Date().getFullYear()} BarberSuite</footer>
    </div>
  )
}

export default App
