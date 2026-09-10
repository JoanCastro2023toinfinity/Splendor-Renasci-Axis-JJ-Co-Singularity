import React, { useState } from 'react';
import { RENASCI_AXIS_PLAYBOOK } from '../data/playbooksData';
import { Target, Clock, ShieldCheck, DollarSign, Layers, Radio, Cpu, ArrowRight } from 'lucide-react';

export const PlaybookRenasci: React.FC = () => {
  const [selectedRetainer, setSelectedRetainer] = useState<number>(1);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Playbook de Ejecución 03</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{RENASCI_AXIS_PLAYBOOK.name}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
            <span>Rol:</span>
            <strong className="text-sky-400">Chief of Scalability Externo</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Tesis Operativa Central</h3>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
              {RENASCI_AXIS_PLAYBOOK.thesis}
            </p>
            <div className="mt-3 bg-sky-950/40 p-3 rounded border border-sky-800/40">
              <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block font-bold">Fórmula de Flujo Causal:</span>
              <p className="text-xs font-mono font-semibold text-white mt-0.5">
                Resource → Interaction → Decision → Scalability
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">El Dolor Específico de Escalamiento</h3>
            <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-200">
              <p className="text-slate-300 leading-relaxed">
                {RENASCI_AXIS_PLAYBOOK.marketPain}
              </p>
              <p className="text-xs font-mono text-sky-400 pt-1 border-t border-slate-800/80">
                Principio: El arquitecto conserva criterio; la organización ejecuta.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cadena Transversal de Renasci & Axis */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-white">Cadena de Intervención & Inteligencia Reutilizable</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Output: <strong className="text-emerald-400">Resultado + IP Reutilizable</strong>
          </span>
        </div>

        <p className="text-xs text-slate-400 mb-3">
          Esta secuencia es una de las arquitecturas más importantes de la IP porque no solo resuelve la crisis del cliente, sino que captura conocimiento para alimentar los frameworks:
        </p>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-sky-300 leading-relaxed overflow-x-auto">
          {RENASCI_AXIS_PLAYBOOK.tractionChain}
        </div>
      </div>

      {/* Retainers Financieros y Triangulación */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              Retainers Documentados & Pricing por Triangulación
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Fórmula: <code className="text-emerald-400 font-mono">{RENASCI_AXIS_PLAYBOOK.financialModel.triangulation}</code>
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded">
            Desacoplado de horas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RENASCI_AXIS_PLAYBOOK.financialModel.documentedRetainers.map((r, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRetainer(idx)}
              className={`cursor-pointer p-4 rounded-lg border transition-all ${
                selectedRetainer === idx
                  ? 'bg-slate-950 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">Perfil de Cliente</span>
              <h4 className="text-sm font-bold text-white mt-0.5">{r.tier}</h4>
              <p className="text-lg font-mono font-black text-emerald-400 my-2">{r.retainer}</p>
              <p className="text-xs text-slate-400 leading-snug">{r.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma Bootstrap de 9 Meses (1/2 + 1/2 + 1 + 6 + 1) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-white">Cronograma Bootstrap de Intervención (9 Meses)</h3>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/50 px-2.5 py-0.5 rounded border border-amber-800/40">
            Regla: Demostrar mecanismo causal antes de escalar
          </span>
        </div>

        <div className="space-y-3">
          {RENASCI_AXIS_PLAYBOOK.bootstrapTimeline.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sky-950 text-sky-300 font-mono text-xs font-bold flex items-center justify-center border border-sky-800">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.phase}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.detail}</p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-slate-800 whitespace-nowrap self-start sm:self-center">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Entregables y Estructura Legal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            Entregables Oficiales de la Intervención
          </h3>
          <p className="text-xs text-slate-400">
            Cada etapa produce un activo tangible utilizable, no meras reuniones:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RENASCI_AXIS_PLAYBOOK.deliverables.map((deliv, idx) => (
              <div key={idx} className="bg-slate-950 p-2.5 rounded text-xs text-slate-200 border border-slate-800 flex items-center gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Separación Legal & Estructura Fiduciaria
          </h3>
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2 text-xs text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-white font-mono block mb-1">Arquitectura Multijurisdiccional:</strong>
              {RENASCI_AXIS_PLAYBOOK.legalJurisdictions}
            </p>
            <p className="text-amber-300/90 pt-1 border-t border-slate-800">
              <strong className="font-mono">Principio Central:</strong> “{RENASCI_AXIS_PLAYBOOK.foundationalCriterion}”
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded border border-slate-800 text-xs text-slate-400">
            <strong className="text-slate-300 font-mono block mb-1">Axis Breakpoint Scanner:</strong>
            Mover la intervención del sistema de <code className="text-sky-300">post-crisis</code> hacia <code className="text-emerald-400">pre-breakpoint</code>.
          </div>
        </div>
      </div>
    </div>
  );
};
