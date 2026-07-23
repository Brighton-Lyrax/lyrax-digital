export default function LeadForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Lead form submitted') }}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Name</label>
          <input required className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <input required type="email" className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500" placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-2">Company</label>
        <input className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500" placeholder="Company name" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Budget</label>
          <select className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white">
            <option>Under $5,000</option>
            <option>$5,000 - $15,000</option>
            <option>$15,000+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Timeline</label>
          <select className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white">
            <option>ASAP</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-2">Project brief</label>
        <textarea required rows="5" className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500" placeholder="Describe the outcome, constraints, and success criteria..." />
      </div>
      <button type="submit" className="px-6 py-3 rounded bg-gold-500 text-royal-950 font-semibold">Send brief</button>
    </form>
  )
}
