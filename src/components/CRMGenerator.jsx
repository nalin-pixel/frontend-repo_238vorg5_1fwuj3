import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CRMGenerator() {
  const [form, setForm] = useState({ client_name: '', shop_name: '', context: 'welcome' })
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const generate = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(`${baseUrl}/api/crm/generate-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setMessage(data)
    } catch (e) {
      setMessage({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8" id="crm">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">AI CRM Message Generator</h2>
        <form onSubmit={generate} className="grid md:grid-cols-4 gap-3">
          <input className="border rounded px-3 py-2" placeholder="Client name" value={form.client_name} onChange={(e)=>setForm({...form, client_name:e.target.value})} required />
          <input className="border rounded px-3 py-2" placeholder="Shop name" value={form.shop_name} onChange={(e)=>setForm({...form, shop_name:e.target.value})} required />
          <select className="border rounded px-3 py-2" value={form.context} onChange={(e)=>setForm({...form, context:e.target.value})}>
            <option value="welcome">Welcome</option>
            <option value="overdue">Overdue</option>
            <option value="no_show">No-show</option>
            <option value="birthday">Birthday</option>
          </select>
          <button disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50">{loading? 'Generating...' : 'Generate'}</button>
        </form>

        {message && (
          <div className="mt-4 p-4 bg-gray-50 rounded border">
            {message.error ? (
              <p className="text-red-600">{message.error}</p>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-2">Tone: {message.tone}</p>
                <p className="font-medium">{message.message}</p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default CRMGenerator
