import React, { useState } from 'react';
import { ActiveTab } from './types/playbook';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { PlaybookSplendor } from './components/PlaybookSplendor';
import { PlaybookJJ } from './components/PlaybookJJ';
import { PlaybookRenasci } from './components/PlaybookRenasci';
import { PlaybookSingularity } from './components/PlaybookSingularity';
import { DivergenceAuditHub } from './components/DivergenceAuditHub';
import { TransversalMatrices } from './components/TransversalMatrices';
import { ResolutionCircle } from './components/ResolutionCircle';
import { ForensicAuditView } from './components/ForensicAuditView';
import { AutonomousRunbook } from './components/AutonomousRunbook';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Application Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'overview' && <Overview setActiveTab={setActiveTab} />}
        {activeTab === 'autonomous-runbook' && <AutonomousRunbook />}
        {activeTab === 'splendor' && <PlaybookSplendor />}
        {activeTab === 'jj-company' && <PlaybookJJ />}
        {activeTab === 'renasci' && <PlaybookRenasci />}
        {activeTab === 'singularity' && <PlaybookSingularity />}
        {activeTab === 'divergence-audit' && <DivergenceAuditHub />}
        {activeTab === 'matrices' && <TransversalMatrices />}
        {activeTab === 'circle-resolution' && <ResolutionCircle />}
        {activeTab === 'forensic-audit' && <ForensicAuditView />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono">
            IP Core & Ecosistema de Gobernanza • <span className="text-emerald-400 font-semibold">Cero datos inventados en los vacíos</span>
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('forensic-audit')}
              className="hover:text-amber-400 transition-colors"
            >
              Registro de Vacíos
            </button>
            <button
              onClick={() => setActiveTab('circle-resolution')}
              className="hover:text-emerald-400 transition-colors"
            >
              Círculo de la § Resolución
            </button>
            <button
              onClick={() => setActiveTab('divergence-audit')}
              className="hover:text-teal-400 transition-colors"
            >
              Divergence Audit
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
