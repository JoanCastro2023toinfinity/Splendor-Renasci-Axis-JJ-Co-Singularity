import React, { useState } from 'react';
import { FORENSIC_GAPS_REGISTRY } from '../data/forensicGapsData';
import { AlertTriangle, CheckCircle2, FileQuestion, ShieldAlert, Filter, Search } from 'lucide-react';

export const ForensicAuditView: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'CONFIRMADO' | 'HUECO_IDENTIFICADO' | 'A_RECONSTRUIR_DOCUMENTALMENTE'>('ALL');
  const [search, setSearchSearch] = useState<string>('');

  const filtered = FORENSIC_GAPS_REGISTRY.filter((item) => {
    const matchesFilter = filter === 'ALL' || item.status === filter;
    const matchesSearch =
      item.entityOrArea.toLowerCase().includes(search.toLowerCase()) ||
      item.element.toLowerCase().includes(search.toLowerCase()) ||
      item.ruleOrWarning.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Auditoría de Rigor & Pureza IP</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Registro Forense de Vacíos y Datos Confirmados</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-800/40">
            Regla de Oro: Cero Datos Inventados
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Para garantizar que cualquier persona totalmente distinta a ti pueda operar el sistema sin desvirtuar la IP, este registro separa con bisturí lo que está <strong className="text-emerald-400">100% confirmado en la IP Core</strong> de los <strong className="text-amber-400">huecos identificados</strong> que no deben llenarse con especulaciones.
        </p>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en el registro forense..."
              value={search}
              onChange={(e) => setSearchSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                filter === 'ALL' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Todos ({FORENSIC_GAPS_REGISTRY.length})
            </button>
            <button
              onClick={() => setFilter('CONFIRMADO')}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                filter === 'CONFIRMADO' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Confirmados
            </button>
            <button
              onClick={() => setFilter('HUECO_IDENTIFICADO')}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                filter === 'HUECO_IDENTIFICADO' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Huecos Identificados
            </button>
            <button
              onClick={() => setFilter('A_RECONSTRUIR_DOCUMENTALMENTE')}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                filter === 'A_RECONSTRUIR_DOCUMENTALMENTE' ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              A Reconstruir
            </button>
          </div>
        </div>
      </div>

      {/* Registry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isConfirmed = item.status === 'CONFIRMADO';
          const isGap = item.status === 'HUECO_IDENTIFICADO';
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all space-y-3 ${
                isConfirmed
                  ? 'bg-slate-900 border-emerald-900/60'
                  : isGap
                  ? 'bg-slate-900 border-amber-900/60'
                  : 'bg-slate-900 border-sky-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {item.id} • {item.entityOrArea}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${
                    isConfirmed
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      : isGap
                      ? 'bg-amber-950 text-amber-300 border-amber-800'
                      : 'bg-sky-950 text-sky-300 border-sky-800'
                  }`}
                >
                  {item.status.replace(/_/g, ' ')}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white leading-snug">{item.element}</h4>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/70 p-3 rounded border border-slate-800/80">
                {item.ruleOrWarning}
              </p>

              <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <span>Fuente Forense:</span>
                <span className="text-slate-400 truncate">{item.documentedSource}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
