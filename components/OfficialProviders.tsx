export default function OfficialProviders() {
  const providers = [
    {
      name: 'FMG',
      description: 'Specialist equine insurer covering equestrian, farm, and recreational horses. Dedicated Specialist Equine team offering tailored cover for horse owners.',
      url: 'https://www.fmg.co.nz/what-we-cover/fmg-policy-wordings/animals/horses',
      phone: '0800 366 466',
      directOnly: true,
    },
    {
      name: 'NZB Insurance',
      description: 'Specialist bloodstock insurer with 30+ years experience. Backed by AXA XL and Lloyd\'s London. Covers thoroughbreds, standardbreds, racehorses, stallions, broodmares, foals, and sport horses.',
      url: 'https://www.nzb.co.nz/insurance',
      phone: '+64 9 298 0055',
      directOnly: false,
    },
    {
      name: 'Gallagher',
      description: '40+ years bloodstock experience covering all breeds and types. Mortality, surgical, transit, stallion infertility, and loss of use cover. Backed by Lloyd\'s of London.',
      url: 'https://www.ajg.co.nz/industries/bloodstock/',
      phone: '0800 276 624',
      directOnly: false,
    },
    {
      name: 'Aon NZ',
      description: 'Global insurance broker with specialist rural and agribusiness expertise. Access to international markets for complex or high-value equine risks.',
      url: 'https://www.aon.co.nz',
      phone: '0800 266 276',
      directOnly: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Verified Providers
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Official provider websites</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The following insurers and brokers offer cover in this area. Links go directly to their official websites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 shadow-sm p-6 flex flex-col transition-all hover:shadow-md"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{p.name}</h3>

              {p.directOnly && (
                <p className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-1 mb-3">
                  Direct insurer — contact FMG directly, no broker access
                </p>
              )}

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{p.description}</p>

              <p className="text-xs text-gray-400 mb-4">
                <span className="font-medium text-gray-500">Phone:</span> {p.phone}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer external"
                className="mt-auto inline-block text-center text-sm font-semibold text-white px-4 py-2 rounded-xl transition-colors"
                style={{ backgroundColor: '#2c4a2e' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4a7c59'; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2c4a2e'; }}
              >
                Visit website ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          Cover4You is not affiliated with, endorsed by, or acting as agent for any insurer listed. Some insurers deal with customers directly only.
        </p>
      </div>
    </section>
  );
}
