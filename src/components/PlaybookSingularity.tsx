import React, { useState } from 'react';
import { SINGULARITY_PLAYBOOK } from '../data/playbooksData';
import { BookOpen, UserCheck, Shield, HelpCircle, Footprints, FileText, CheckCircle2, AlertTriangle, Crosshair } from 'lucide-react';

export const PlaybookSingularity: React.FC = () => {
  // Black Swan Scoring Simulator State
  const [selectedLayers, setSelectedLayers] = useState<number[]>([1, 2]);
  const [ackermanTarget, setAckermanTarget] = useState<number>(100000);

  const toggleLayer = (layerIdx: number) => {
    if (selectedLayers.includes(layerIdx)) {
      setSelectedLayers(selectedLayers.filter(l => l !== layerIdx));
    } else {
      setSelectedLayers([...selectedLayers, layerIdx]);
    }
  };

  // Calculate score
  const totalBlackSwanScore = selectedLayers.reduce((acc, curr) => {
    if (curr === 0 || curr === 1) return acc + 2; // layers 1-2: 2 pts
    if (curr === 2) return acc + 3; // layer 3: 3 pts
    return acc + 5; // layers 4-5: 5 pts
  }, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Playbook de Ejecución 04</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{SINGULARITY_PLAYBOOK.name}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
            <span>Rol de Mesa:</span>
            <strong className="text-amber-400">High-Stakes Confidant</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Tesis Operativa</h3>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
              {SINGULARITY_PLAYBOOK.thesis}
            </p>
            <div className="mt-3 bg-amber-950/40 p-3 rounded border border-amber-800/40">
              <span className="text-[11px] font-mono text-amber-300 uppercase tracking-wider block font-bold">Cadena de Generación de Categoría:</span>
              <p className="text-xs font-mono font-semibold text-white mt-0.5 leading-snug">
                {SINGULARITY_PLAYBOOK.tractionChain}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Test de Veto & Admisión (3 Preguntas)</h3>
            <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-200">
              {SINGULARITY_PLAYBOOK.admissionCriteriaVeto.threeQuestionsTest.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-900/80 p-2 rounded border border-slate-800">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-mono">{q}</span>
                </div>
              ))}
              <p className="text-[11px] text-rose-300 pt-1">
                ✖ Si el cliente solo busca commodity o manipulación, NO se aplica Singularity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prospección en Frío Sensitiva: 5 Formas (<$200) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Footprints className="w-5 h-5 text-amber-400" />
              {SINGULARITY_PLAYBOOK.coldContactFramework.name}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {SINGULARITY_PLAYBOOK.coldContactFramework.description}
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
            Costo &lt; $200 USD
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
          {SINGULARITY_PLAYBOOK.coldContactFramework.fiveWays.map((item) => (
            <div key={item.number} className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-amber-950 text-amber-300 font-mono text-xs font-bold flex items-center justify-center border border-amber-800 mb-2">
                  #{item.number}
                </span>
                <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">{item.context}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-950/30 border border-amber-900/50 p-3.5 rounded-lg text-xs font-mono text-amber-200">
          <strong className="text-amber-400 block mb-0.5">Hook A Canónico:</strong>
          {SINGULARITY_PLAYBOOK.coldContactFramework.hookAExample}
        </div>
      </div>

      {/* Flujo Completo de Contacto a Cierre (6 Fases) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Secuencia de Negociación Humanista (De Contacto a Cierre)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SINGULARITY_PLAYBOOK.fullContactToCloseSequence.map((step) => (
            <div key={step.step} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-slate-400">FASE 0{step.step}</span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              </div>
              <h4 className="text-sm font-bold text-white">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cosmovisión Black Swan (5 Capas de Minado + Scoring) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Crosshair className="w-5 h-5 text-amber-400" />
              Cosmovisión Black Swan: Las 5 Capas de Minado & Score
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Minar hasta obtener "That's Right". Meta de profundidad: 12-15+ puntos para asegurar cierre sostenible.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-xs">
            <span>Score Actual:</span>
            <span className={`font-bold ${totalBlackSwanScore >= 12 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {totalBlackSwanScore} / 17 pts
            </span>
            <span className="text-[10px] text-slate-400">
              {totalBlackSwanScore >= 12 ? '✓ Listo para Cierre' : '• Requiere Profundizar'}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {SINGULARITY_PLAYBOOK.blackSwanCosmology.map((layer, idx) => {
            const isSelected = selectedLayers.includes(idx);
            return (
              <div
                key={layer.layer}
                onClick={() => toggleLayer(idx)}
                className={`cursor-pointer p-3.5 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-slate-950 border-amber-500/60 shadow-sm'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold border ${
                    isSelected ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-400 border-slate-700'
                  }`}>
                    {layer.layer}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">{layer.name}</h4>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded">
                        +{layer.score}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 italic">“{layer.question}”</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    isSelected
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                      : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    {isSelected ? 'Cisne Revelado [✓]' : 'Pendiente minar'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Regateo Ackerman 2026 & Matriz de 4 Cuadrantes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ackerman 2026 */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Sistema de Regateo Ackerman Modificado 2026
            </h3>
            <span className="text-[11px] font-mono text-slate-400">Escalones decrecientes</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {SINGULARITY_PLAYBOOK.ackermanModel2026.steps.map((s, idx) => (
              <div key={idx} className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-amber-400 font-bold">{s.step}</span>
                  <span className="text-slate-300">{s.detail}</span>
                </div>
                <span className="font-mono text-white font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap">
                  {s.target}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block mb-1 font-mono">Regla Inviolable:</span>
            No te regales, eres premium. Terminar con una cifra no redonda (ej. $103,420 en lugar de $100,000) más un sweetener no monetario para generar la sensación de victoria en la otra parte.
          </div>
        </div>

        {/* Mapa de 4 Cuadrantes (One-Sheet) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              Mapa Visual de Gestión Rápida (4 Cuadrantes)
            </h3>
            <span className="text-[11px] font-mono text-slate-400">One-Sheet de Mesa</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SINGULARITY_PLAYBOOK.fourQuadrantsOneSheet.map((q, idx) => (
              <div key={idx} className="bg-slate-950 p-3 rounded border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">{q.quadrant}: {q.title}</span>
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">{q.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block mb-1 font-mono">Contra-Táctica 48 Leyes:</span>
            Pre-mortem 5 minutos antes: “Si la contraparte quisiera manipularme con juegos de poder, ¿qué ley usaría?” (ej. Ley 15 Aplastar → contrarrestar con pregunta de justicia mutua).
          </div>
        </div>
      </div>
    </div>
  );
};
