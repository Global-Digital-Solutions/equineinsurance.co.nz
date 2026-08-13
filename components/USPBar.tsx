const usps = [
  { icon: '🐴', title: 'Specialist Info', desc: 'Horse insurance guides and resources' },
  { icon: '🔍', title: 'Independent', desc: 'Not owned by any insurer or broker' },
  { icon: '🇳🇿', title: 'NZ Based', desc: 'Local equine expertise' },
  { icon: '🛡️', title: 'NZ Owned', desc: 'Cover4You, a NZ business' },
]

export default function USPBar() {
  return (
    <div className="bg-brand-dark border-y border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {usps.map((u) => (
            <div key={u.title} className="flex items-center gap-3">
              <span className="text-2xl flex-shrink-0">{u.icon}</span>
              <div>
                <p className="text-white text-sm font-bold">{u.title}</p>
                <p className="text-green-300 text-xs">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
