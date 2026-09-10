import React from 'react';
import { ActiveTab } from '../types/playbook';
import { FOUNDATIONAL_PRINCIPLES } from '../data/playbooksData';
import { Shield, Layers, GitBranch, Target, BookOpen, Compass, ArrowRight, Activity, CheckCircle2, UserCheck, Flame } from 'lucide-react';

interface OverviewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Overview: React.FC<OverviewProps> = ({ setActiveTab }) => {
  const entityCards = [
    {
      id: 'splendor' as ActiveTab,
      name: 'Splendor TaaS',
      role: 'Capacidad & Última Milla',
      motto: 'Convierte talento operativo en capacidad empresarial gestionable.',
      metric: 'Agente ~$150 / Cliente ~$300 sem / 30h / 80 tkt/día',
      color: 'emerald',
      icon: Layers,
    },
    {
      id: 'jj-company' as ActiveTab,
      name: 'JJ Company',
      role: 'Máquina Empresarial Modular',
      motto: 'Construye y opera capacidades comercializables por función.',
      metric: 'InStaff • Customer Service • Remote Assistant • UX2ROI',
      color: 'indigo',
      icon: GitBranch,
    },
    {
      id: 'renasci' as ActiveTab,
      name: 'Renasci & Axis',
      role: 'Chief of Scalability & Breakpoints',
      motto: 'Convierte complejidad organizacional en escalabilidad pre-crisis.',
      metric: 'Retainers $12K - $38K+ / Bootstrap 9 meses / Triggers',
      color: 'sky',
      icon: Target,
    },
    {
      id: 'singularity' as ActiveTab,
      name: 'Singularity Negotiations',
      role: 'Negociación Humanista & High-Stakes',
      motto: 'Convierte problemas desconocidos en nuevas categorías de valor.',
      metric: 'High-Stakes Confidant • Contacto Sensitivo • Ackerman 2026',
      color: 'amber',
      icon: BookOpen,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono border border-emerald-800/50">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Transferencia Completa de Criterio para Operador Externo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Arquitectura de Tracción sin Dependencia de Héroes
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Este playbook contiene la propiedad intelectual destilada para que alguien totalmente distinto al fundador ejecute con máxima precisión la tracción de mercado de <strong className="text-white">Splendor</strong>, <strong className="text-white">JJ Company</strong>, <strong className="text-white">Renasci</strong> y <strong className="text-white">Singularity Negotiations</strong>.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('autonomous-runbook')}
              className="bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Ver Scripts DMs & Runbook 72h</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveTab('divergence-audit')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Ejecutar Divergence Audit</span>
            </button>
            <button
              onClick={() => setActiveTab('matrices')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg border border-slate-700 flex items-center gap-2 transition-all"
            >
              <span>Ver las 20 Matrices Transversales</span>
            </button>
          </div>
        </div>
      </div>

      {/* Foundational Rules / Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FOUNDATIONAL_PRINCIPLES.map((principle, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Principio Invariable 0{idx + 1}</span>
            </div>
            <h4 className="text-sm font-bold text-white">{principle.title}</h4>
            <p className="text-xs text-slate-400 italic">“{principle.subtitle}”</p>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed bg-slate-950/60 p-2.5 rounded border border-slate-800">
              {principle.rule}
            </p>
          </div>
        ))}
      </div>

      {/* The 4 Core Playbook Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Los 4 Instrumentos de Tracción del Ecosistema
          </h3>
          <span className="text-xs font-mono text-slate-400">Selecciona para entrar al playbook detallado</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-xl cursor-pointer transition-all hover:translate-y-[-2px] shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400">{card.role}</span>
                        <h4 className="text-base font-bold text-white">{card.name}</h4>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {card.motto}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Métricas Documentadas:</span>
                  <span className="text-slate-200 truncate ml-2 font-medium">{card.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Unified Architecture Map */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white">La Arquitectura Profunda que Une Todos los Proyectos</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Splendor, JJ Company, Renasci, Axis, Singularity y Fractalis no son seis ideas desconectadas: son posiciones complementarias en este flujo:
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/40">
            Cadena Causal Unificada
          </span>
        </div>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400/90 text-center leading-relaxed overflow-x-auto whitespace-pre">
{`MARKET ──► MARKET GAP ──► LAST MILE ──► DECONSTRUCTION
    │
    ▼
RESOURCE / SYSTEM MAP ──► INTERACTION MODEL ──► DECISION MODEL
    │
    ▼
SOLUTION MODEL ──► BOOTSTRAP / MVP ──► STRESS TESTING
    │
    ▼
BREAKPOINT ──► [SURVIVE / RECONVERT] o [FAIL / LEARN]
    │
    ▼
KNOWLEDGE ──► IP ──► FRAMEWORK ──► REPLICATION ──► LICENSING`}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">JJ Company</span>
            <span className="text-[11px] text-slate-400">Construye & opera</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">Splendor</span>
            <span className="text-[11px] text-slate-400">Capacidad operativa</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">Renasci</span>
            <span className="text-[11px] text-slate-400">Escalabilidad de sistema</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">Axis</span>
            <span className="text-[11px] text-slate-400">Reconvierte breakpoints</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">Singularity</span>
            <span className="text-[11px] text-slate-400">Nuevas categorías</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
            <span className="font-bold text-white block">Fractalis</span>
            <span className="text-[11px] text-slate-400">Custodia el criterio</span>
          </div>
        </div>
      </div>
    </div>
  );
};
