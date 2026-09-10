import React, { useState } from 'react';
import { DIVERGENCE_AUDIT_STRUCTURE } from '../data/playbooksData';
import { Compass, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, ArrowRight, Eye, AlertTriangle, Layers } from 'lucide-react';

export const DivergenceAuditHub: React.FC = () => {
  const [activeLens, setActiveLens] = useState<number>(0);
  const [invertedStep, setInvertedStep] = useState<number>(0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Executive Hero */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Oferta Unificada al Mercado</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{DIVERGENCE_AUDIT_STRUCTURE.name}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
            <span>Regla Comercial:</span>
            <strong className="text-teal-400">Un Solo Producto Front-End</strong>
          </div>
        </div>

        <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 space-y-2">
          <h3 className="text-xs font-mono text-teal-300 uppercase tracking-wider font-semibold">Tesis Comercial</h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {DIVERGENCE_AUDIT_STRUCTURE.thesis}
          </p>
          <div className="pt-2 border-t border-slate-800 flex items-start gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 whitespace-nowrap">Pregunta Madre del Audit:</span>
            <p className="text-xs sm:text-sm text-amber-300 font-mono italic">
              “{DIVERGENCE_AUDIT_STRUCTURE.coreQuestion}”
            </p>
          </div>
        </div>
      </div>

      {/* Las 4 Lentes Operativas (+ 2 de Soporte) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-5">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" />
              Las 4 Lentes del Divergence Audit (+ Lentes de Soporte)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Los proyectos (JJ, Splendor, Renasci, Axis, Singularity, Fractalis) dejan de ser empresas dispersas y actúan como instrumentos de diagnóstico:
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded">
            Lente Activa: {DIVERGENCE_AUDIT_STRUCTURE.theFourLenses[activeLens].instrument}
          </span>
        </div>

        {/* Lenses Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {DIVERGENCE_AUDIT_STRUCTURE.theFourLenses.map((lens, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLens(idx)}
              className={`p-3 rounded-lg border text-left transition-all ${
                activeLens === idx
                  ? 'bg-teal-950/80 border-teal-500 shadow-sm text-white'
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <span className="text-[10px] font-mono block uppercase opacity-75">{lens.domain}</span>
              <span className="text-xs font-bold font-mono truncate block mt-0.5">{lens.instrument}</span>
            </button>
          ))}
        </div>

        {/* Active Lens Detail Card */}
        {(() => {
          const current = DIVERGENCE_AUDIT_STRUCTURE.theFourLenses[activeLens];
          return (
            <div className="bg-slate-950 p-5 rounded-lg border border-teal-900/40 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-teal-500/20 text-teal-300 text-xs font-mono font-bold px-2 py-0.5 rounded border border-teal-500/40">
                    Capa: {current.domain}
                  </span>
                  <h4 className="text-base font-bold text-white font-mono">{current.instrument}</h4>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1 font-semibold">
                    Pregunta Guía de Diagnóstico:
                  </span>
                  <p className="text-sm font-mono text-slate-100 italic">
                    “{current.guidingQuestion}”
                  </p>
                </div>

                <div className="bg-slate-900/50 p-3.5 rounded border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                    Alcance de Auditoría:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.diagnosticScope}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Protocolo de Dependencia Invertida */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-5">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              Protocolo de Dependencia Invertida (La Llave del Retiro)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cómo romper el ciclo de heroísmo donde el fundador/auditor termina cargando la empresa del cliente:
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800/40">
            Regla de Veto
          </span>
        </div>

        {/* Contrast Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-950 p-4 rounded-lg border border-rose-900/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
              <XCircle className="w-4 h-4" /> Dependencia Normal (Trampa)
            </div>
            <p className="text-sm text-slate-200 font-mono bg-slate-900/60 p-3 rounded border border-slate-800 italic">
              {DIVERGENCE_AUDIT_STRUCTURE.invertedDependencyProtocol.normalDependency}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              El cliente traslada su ansiedad operativa al consultor, esperando que él "haga el milagro" y asuma la culpa.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
              <CheckCircle2 className="w-4 h-4" /> Dependencia Invertida (Soberanía)
            </div>
            <p className="text-sm text-emerald-300 font-mono bg-slate-900/60 p-3 rounded border border-slate-800 italic">
              {DIVERGENCE_AUDIT_STRUCTURE.invertedDependencyProtocol.invertedDependency}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              El auditor nombra la disfunción, la cuantifica en frío, y le devuelve la responsabilidad al dueño del sistema.
            </p>
          </div>
        </div>

        {/* The 3 Movements */}
        <div>
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Los 3 Movimientos Invariables del Audit:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DIVERGENCE_AUDIT_STRUCTURE.invertedDependencyProtocol.threeMovements.map((mov, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <span className="w-6 h-6 rounded-full bg-teal-950 text-teal-300 font-mono text-xs font-bold flex items-center justify-center border border-teal-800">
                  {idx + 1}
                </span>
                <h5 className="text-sm font-bold text-white">{mov.step}</h5>
                <p className="text-xs font-mono text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
                  {mov.statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Matriz de Responsabilidad del Operador (Qué SÍ vs Qué NO) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-teal-400" />
          Frontera Inviolable: Responsabilidades del Operador
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Responsibilities */}
          <div className="bg-slate-950 p-5 rounded-lg border border-emerald-900/40 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase pb-2 border-b border-slate-800">
              <CheckCircle2 className="w-4 h-4" /> Tu Responsabilidad Obligatoria (Qué SÍ hacer)
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {DIVERGENCE_AUDIT_STRUCTURE.operatorChecklist.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-900/50 p-2 rounded border border-slate-800/60">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vetoes */}
          <div className="bg-slate-950 p-5 rounded-lg border border-rose-900/40 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase pb-2 border-b border-slate-800">
              <XCircle className="w-4 h-4" /> Prohibiciones Estrictas (Qué NO hacer nunca)
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {DIVERGENCE_AUDIT_STRUCTURE.operatorChecklist.vetoes.map((veto, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-900/50 p-2 rounded border border-slate-800/60">
                  <span className="text-rose-400 font-bold shrink-0">✖</span>
                  <span>{veto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-slate-950 border border-slate-800 p-4 rounded-lg flex items-center justify-between flex-wrap gap-3">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">Veredicto Operativo:</span>
            <p className="text-xs text-slate-300 mt-0.5">
              Tu trabajo consiste en poner el espejo sobre la mesa, nombrar la realidad, y luego <strong className="text-amber-400">soltar</strong>.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded border border-emerald-800/40 font-semibold">
            Arquitectura Autopoyética
          </span>
        </div>
      </div>
    </div>
  );
};
