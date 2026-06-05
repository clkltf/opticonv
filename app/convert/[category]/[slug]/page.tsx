import { categories, convert } from '../../../../lib/units';
import Link from 'next/link';

export async function generateMetadata({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  const cat = categories[category];
  
  if (!cat || !cat.units[from] || !cat.units[to]) return { title: 'Unit Converter' };

  const fromName = cat.units[from].name.en;
  const toName = cat.units[to].name.en;

  return {
    title: `Convert ${fromName} to ${toName} | OptiConv`,
    description: `Free online instant conversion for ${fromName} to ${toName}. Check the live formula, calculations, and conversion tables.`,
  };
}

export default async function SeoPage({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  
  const cat = categories[category];
  if (!cat || !cat.units[from] || !cat.units[to]) {
    return <div className="p-10 text-center">Conversion not found.</div>;
  }

  const fromName = cat.units[from].name.en;
  const toName = cat.units[to].name.en;
  
  const defaultResult = convert(1, from, to, category);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <Link href="/" className="text-2xl font-black text-blue-600">OptiConv</Link>
      </nav>

      <div className="max-w-2xl mx-auto mt-12 p-6 bg-white border border-gray-200 rounded-3xl shadow-md">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{cat.name.en} Transformation</span>
        <h1 className="text-3xl font-black text-gray-900 mt-1 mb-6">Convert 1 {fromName} to {toName}</h1>
        
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl text-center mb-6 shadow-md">
          <div className="text-sm font-medium opacity-80">1 {fromName} equals</div>
          <div className="text-4xl font-black mt-1 font-mono">{defaultResult.toFixed(4)} {toName}</div>
        </div>

        <div className="border-t border-gray-100 pt-4 text-center">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            ← Go to main dashboard for more dynamic options
          </Link>
        </div>
      </div>
    </div>
  );
}
