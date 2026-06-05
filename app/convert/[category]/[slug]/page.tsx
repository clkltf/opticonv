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
    title: `Convert 1 ${fromName} to ${toName} | OptiConv`,
    description: `Free instant calculation tool for 1 ${fromName} to ${toName}. Find exact conversion rates, mathematical logic, and multi-unit dashboards.`,
  };
}

export default async function SeoPage({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  
  const cat = categories[category];
  if (!cat || !cat.units[from] || !cat.units[to]) {
    return <div className="p-10 text-center text-gray-500">Conversion mismatch error.</div>;
  }

  const fromName = cat.units[from].name.en;
  const toName = cat.units[to].name.en;
  const defaultResult = convert(1, from, to, category);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <Link href="/" className="text-xl font-black text-blue-600">OptiConv</Link>
      </nav>

      <div className="max-w-2xl mx-auto mt-12 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{cat.name.en} Metric Conversion</span>
        <h1 className="text-3xl font-black text-gray-900 mt-1 mb-6">How much is 1 {fromName} in {toName}?</h1>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl text-center mb-6 shadow">
          <div className="text-sm font-medium opacity-80">1 {fromName} =</div>
          <div className="text-4xl font-black mt-1 font-mono">{defaultResult.toLocaleString('en', { maximumFractionDigits: 6 })} {toName}</div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            ← Open Complete Multi-Language Dashboard & Tables
          </Link>
        </div>
      </div>
    </div>
  );
}
