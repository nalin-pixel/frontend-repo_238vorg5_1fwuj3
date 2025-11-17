import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function QuickCreate() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const [shop, setShop] = useState({ name: '', phone: '' })
  const [client, setClient] = useState({ name: '', phone: '', shop_id: '' })

  const createShop = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/shops`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shop)
      })
      const data = await res.json()
      setResult({ type: 'shop', data })
      setClient((c) => ({ ...c, shop_id: data.id }))
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  const createClient = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const payload = { ...client }
      const res = await fetch(`${baseUrl}/api/clients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setResult({ type: 'client', data })
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8" id="shops">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Create a Shop</h2>
        <form onSubmit={createShop} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Shop name" value={shop.name} onChange={(e)=>setShop({...shop, name:e.target.value})} required />
          <input className="w-full border rounded px-3 py-2" placeholder="Phone (optional)" value={shop.phone} onChange={(e)=>setShop({...shop, phone:e.target.value})} />
          <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">{loading? 'Creating...' : 'Create Shop'}</button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow p-6" id="clients">
        <h2 className="text-xl font-semibold mb-4">Add a Client</h2>
        <form onSubmit={createClient} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Client name" value={client.name} onChange={(e)=>setClient({...client, name:e.target.value})} required />
          <input className="w-full border rounded px-3 py-2" placeholder="Phone (optional)" value={client.phone} onChange={(e)=>setClient({...client, phone:e.target.value})} />
          <input className="w-full border rounded px-3 py-2" placeholder="Shop ID" value={client.shop_id} onChange={(e)=>setClient({...client, shop_id:e.target.value})} required />
          <button disabled={loading} className="bg-emerald-600 text-white px-4 py-2 rounded disabled:opacity-50">{loading? 'Adding...' : 'Add Client'}</button>
        </form>
      </div>

      {result && (
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Result</h3>
          <pre className="text-sm bg-gray-50 p-3 rounded overflow-auto">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </section>
  )
}

export default QuickCreate
