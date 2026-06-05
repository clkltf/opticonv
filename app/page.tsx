'use client';
import { useState } from 'react';

const units: any = {
  m: { name: 'Meters', ratio: 1 },
  km: { name: 'Kilometers', ratio: 0.001 },
  cm: { name: 'Centimeters', ratio: 100 },
  inch: { name: 'Inches', ratio: 39.37 },
  feet: { name: 'Feet', ratio: 3.28 }
};

export default function Home() {
  const [val, setVal] = useState(1);
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('inch');

  const result = (val / units[from].ratio) * units[to].ratio;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-black text-blue-900 mb-6 text-center">OptiConv</h1>
        
        <input 
          type="number" 
          className="w-full p-4 mb-4 border-2 border-gray-200 rounded-xl text-lg font-bold"
          value={val} 
          onChange={(e) => setVal(Number(e.target.value))} 
        />

        <div className="grid grid-cols-2 gap-4 mb-6">
          <select className="p-3 border rounded-lg" value={from} onChange={(e) => setFrom(e.target.value)}>
            {Object.keys(units).map((k) => <option key={k} value={k}>{units[k].name}</option>)}
          </select>
          <select className="p-3 border rounded-lg" value={to} onChange={(e) => setTo(e.target.value)}>
            {Object.keys(units).map((k) => <option key={k} value={k}>{units[k].name}</option>)}
          </select>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
          <p className="text-sm opacity-80">Result</p>
          <p className="text-4xl font-bold">{result.toFixed(4)}</p>
        </div>
      </div>
    </main>
  );
}
