import React from 'react';
import { ActiveTab } from '../types/playbook';
import { ShieldAlert, BookOpen, Layers, GitBranch, Target, Compass, Grid3X3, RotateCw, AlertTriangle, UserCheck, Send } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview' as ActiveTab, label: 'Gobernanza & Criterio', icon: ShieldAlert },
    { id: 'autonomous-runbook' as ActiveTab, label: 'Autoejecución & DMs', icon: Send },
    { id: 'divergence-audit' as ActiveTab, label: 'Divergence Audit (Hub)', icon: Compass },
    { id: 'splendor' as ActiveTab, label: 'Splendor TaaS', icon: Layers },
    { id: 'jj-company' as ActiveTab, label: 'JJ Company', icon: GitBranch },
    { id: 'renasci' as ActiveTab, label: 'Renasci & Axis', icon: Target },
    { id: 'singularity' as ActiveTab, label: 'Singularity Negoc.', icon: BookOpen },
    { id: 'matrices' as ActiveTab, label: '20 Matrices', icon: Grid3X3 },
    { id: 'circle-resolution' as ActiveTab, label: 'Círculo § Resolución', icon: RotateCw },
    { id: 'forensic-audit' as ActiveTab, label: 'Pureza IP / Vacíos', icon: AlertTriangle },
  ];

  return (
    <header className="bg-slate-950 text-slate-100 border-b border-slate-800 sticky top-0 z-40 shadow-xl backdrop-blur-md bg-opacity-95">
      {/* Top Protocol Strip */}
      <div className="bg-emerald-950/80 border-b border-emerald-800/40 px-4 py-1.5 text-xs text-emerald-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold tracking-wider uppercase">Protocolo de Operación Autónoma</span>
          <span className="text-emerald-500">•</span>
          <span className="text-emerald-200/90 font-mono">Diseñado para Operador Externo sin Dependencia del Fundador</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-emerald-400/90">
          <span className="bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-700/50">Pureza IP: Estricta</span>
          <span className="hidden sm:inline text-emerald-300">Cero data inventada en vacíos</span>
        </div>
      </div>

      {/* Main Title Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-slate-800 text-slate-300 text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded font-mono font-medium border border-slate-700">
                Master Operating Playbook
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-emerald-400 text-xs font-mono font-medium flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Transferencia de Criterio Activa
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Playbook Maestro de Tracción de Mercado
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 max-w-3xl">
              Splendor Talent as a Service • JJ Company • Renasci • Singularity Negotiations — Gobernados mediante Divergence Audit y las 20 Matrices Transversales.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
            <div className="text-right">
              <p className="text-[11px] font-mono text-slate-400">Regla de Veto Inviolable</p>
              <p className="text-xs font-semibold text-amber-400">Ninguna solución crea dependencia crítica</p>
            </div>
            <div className="w-9 h-9 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 border border-emerald-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
