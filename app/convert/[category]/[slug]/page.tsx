import { categories, convert } from '../../../../lib/units';
import Link from 'next/link';

export async function generateMetadata({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  const cat = categories[category];
  if (!cat || !cat.units[from] || !cat.units[to]) return { title: 'Unit Converter' };
  return {
    title: `Convert 1 ${cat.units[from].name.en} to ${cat.units[to].name.en} | OptiConv`,
    description: `Instant metrics calculation for ${cat.units[from].name.en} to ${cat.units[to].name.en}.`,
  };
}

export default async function SeoPage({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  const cat = categories[category];
  
  if (!cat || !cat.units[from] || !cat.units[to]) {
    return <div className="p-10 text-center text-gray-500">Conversion mismatch error.</div>;
  }

  const defaultResult = convert(1, from, to, category);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <Link href="/" className="text-xl font-black text-blue-600">OptiConv</Link>
      </nav>

      <div className="max-w-2xl mx-auto mt-12 p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{cat.name.en} Ratio</span>
        <h1 className="text-2xl font-black text-gray-900 mt-2 mb-6">How much is 1 {cat.units[from].name.en} in {cat.units[to].name.en}?</h1>
        
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-mono text-center text-lg font-bold text-gray-900">
          1 {cat.units[from].name.en} = {defaultResult.toLocaleString('en', { maximumFractionDigits: 6 })} {cat.units[to].name.en}
        </div>

        <div className="border-t border-gray-100 mt-6 pt-6 text-center">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            &larr; Open Complete Dashboard & Tables
          </Link>
        </div>
      </div>
    </div>
  );
}
