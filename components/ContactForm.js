export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Contact form submitted') }}>
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
        <label className="block text-sm text-gray-300 mb-2">Project type</label>
        <select className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white">
          <option>Business website</option>
          <option>Web app / portal</option>
          <option>AI / automation</option>
          <option>E-commerce</option>
          <option>Brand / identity</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-2">Message</label>
        <textarea required rows="5" className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500" placeholder="Share your challenge, timeline, and outcomes..." />
      </div>
      <button type="submit" className="px-6 py-3 rounded bg-gold-500 text-royal-950 font-semibold">Send</button>
    </form>
  )
}
