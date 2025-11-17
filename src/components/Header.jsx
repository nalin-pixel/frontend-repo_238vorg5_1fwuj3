import React from 'react'

function Header() {
  return (
    <header className="w-full py-6 border-b bg-white/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">BS</div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">BarberSuite</h1>
            <p className="text-xs text-gray-500">AI-powered scheduling and CRM</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#shops" className="hover:text-gray-900">Shops</a>
          <a href="#clients" className="hover:text-gray-900">Clients</a>
          <a href="#appointments" className="hover:text-gray-900">Appointments</a>
          <a href="#crm" className="hover:text-gray-900">CRM</a>
          <a href="/test" className="text-blue-600 hover:text-blue-700">System Check</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
