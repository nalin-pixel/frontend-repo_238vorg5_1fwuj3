import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">BS</div>
            <span className="text-lg font-semibold">BarberSuite</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#crm" className="hover:text-gray-900">AI CRM</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden sm:inline-flex px-4 py-2 rounded border text-sm hover:bg-gray-50">Open App</Link>
            <a href="#cta" className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700">Get Started</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">AI Copilot for Barbershops</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Bookings, clients, and outreach —
              <span className="text-indigo-600"> on autopilot</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              All-in-one scheduling and CRM platform that grows your shop. Prevent no‑shows, fill the calendar, and keep clients coming back.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Start free</a>
              <Link to="/test" className="px-5 py-3 rounded-lg border font-medium hover:bg-gray-50">Run system check</Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div>✓ No credit card</div>
              <div>✓ Cancel anytime</div>
              <div>✓ Works on any device</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200/50 to-blue-200/40 blur-2xl rounded-3xl" />
            <div className="relative bg-white border shadow-xl rounded-2xl p-4">
              <div className="h-6 w-24 rounded bg-gray-100" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="col-span-2 p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border">
                  <p className="text-xs text-gray-500">Today</p>
                  <p className="text-2xl font-semibold">18 bookings</p>
                  <p className="text-xs text-gray-500">98% capacity</p>
                </div>
                <div className="p-3 rounded-lg bg-white border">
                  <p className="text-xs text-gray-500">No‑shows</p>
                  <p className="text-xl font-semibold text-emerald-600">-42%</p>
                </div>
                <div className="p-3 rounded-lg bg-white border">
                  <p className="text-xs text-gray-500">Rebooked</p>
                  <p className="text-xl font-semibold text-indigo-600">+31%</p>
                </div>
                <div className="col-span-3 p-3 rounded-lg bg-white border">
                  <p className="text-xs text-gray-500">AI CRM</p>
                  <p className="text-sm">“Hey Marcus — it’s Fade Lab. It’s been a while. Want 20% off your next cut this week?”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Smart Scheduling', desc: 'Automated waitlists, double‑booking protection, and easy rescheduling.' },
            { title: 'Client CRM', desc: 'Profiles, tags, and activity timelines for every client.' },
            { title: 'AI Outreach', desc: 'Target overdue clients with on‑brand messages that convert.' },
            { title: 'Payments', desc: 'Deposits, no‑show fees, memberships and gift cards.' },
            { title: 'Multi‑location', desc: 'Roles & permissions for owners, managers, and staff.' },
            { title: 'Analytics', desc: 'Revenue, retention, and staff performance dashboards.' }
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-items-center font-bold mb-4">{i+1}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI CRM STRIP */}
      <section id="crm" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-blue-50" />
        <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Reach clients automatically</h2>
            <p className="mt-2 text-gray-600">Welcome series, no‑show follow‑ups, birthday offers, and “we miss you” nudges — written by AI, approved by you.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Personalized tone and templates</li>
              <li>SMS & email sending with attribution</li>
              <li>A/B tests and performance insights</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Example message</p>
            <div className="p-4 rounded-lg bg-gray-50 border text-sm">
              Hey Jordan — it’s Sharp & Clean. We’ve got openings this week. Book by Friday for 15% off your cut. Reply BOOK and I’ll lock it in.
            </div>
            <Link to="/" className="inline-block mt-4 text-indigo-700 hover:text-indigo-900 font-medium">Try it in the app →</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">Simple, transparent pricing</h2>
          <p className="mt-2 text-gray-600">Start free. Upgrade when you scale.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', perks: ['1 location', 'Basic scheduling', '100 CRM messages/mo']
          },{
            name: 'Pro', price: '$79', perks: ['3 locations', 'Deposits & no‑show fees', '2,500 messages/mo']
          },{
            name: 'Scale', price: 'Custom', perks: ['Unlimited locations', 'Advanced workflows', 'Premium support']
          }].map((p, i) => (
            <div key={i} className={`p-6 rounded-2xl border bg-white ${i===1 ? 'ring-2 ring-indigo-600' : ''}`}>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold">{p.price}<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.perks.map((perk, idx) => <li key={idx}>✓ {perk}</li>)}
              </ul>
              <a href="#cta" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded ${i===1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border hover:bg-gray-50'}`}>{i===1 ? 'Start Pro trial' : 'Get started'}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 to-blue-600" />
        <div className="max-w-6xl mx-auto px-4 py-16 text-white grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Fill your chairs this week</h2>
            <p className="mt-2 text-indigo-100">Spin up your shop, invite staff, and let the AI bring clients back. You can switch to the full app anytime.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="px-5 py-3 rounded-lg bg-white text-indigo-700 font-medium hover:bg-indigo-50 text-center">Open the app</Link>
            <a href="#pricing" className="px-5 py-3 rounded-lg border border-white/30 font-medium text-center hover:bg-white/10">See pricing</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-blue-600 text-white grid place-items-center text-xs font-bold">BS</div>
              <span className="font-semibold">BarberSuite</span>
            </div>
            <p className="mt-3 text-gray-500">Scheduling and CRM that keeps clients coming back.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-800 mb-2">Product</p>
              <ul className="space-y-1">
                <li><a href="#features" className="hover:text-gray-900">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><Link to="/test" className="hover:text-gray-900">System Check</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Company</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right text-gray-500">© {new Date().getFullYear()} BarberSuite</div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
