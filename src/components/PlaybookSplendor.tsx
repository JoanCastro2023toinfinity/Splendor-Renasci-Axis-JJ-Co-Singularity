import React, { useState } from 'react';
import { SPLENDOR_PLAYBOOK } from '../data/playbooksData';
import { Layers, DollarSign, Users, CheckCircle2, AlertOctagon, HelpCircle, Shield, ArrowRight, RefreshCw, Calculator } from 'lucide-react';

export const PlaybookSplendor: React.FC = () => {
  const [weeklyClientPrice, setWeeklyClientPrice] = useState<number>(300);
  const [weeklyAgentCost, setWeeklyAgentCost] = useState<number>(150);
  const [activeStep, setActiveStep] = useState<number>(1);

  // Financial calculations
  const monthlyRevenue = weeklyClientPrice * 4;
  const monthlyCost = weeklyAgentCost * 4;
  const grossMargin = monthlyRevenue - monthlyCost;
  const grossMarginPercent = monthlyRevenue > 0 ? Math.round((grossMargin / monthlyRevenue) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero / Executive Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Playbook de Ejecución 01</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{SPLENDOR_PLAYBOOK.name}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
            <span>Unidad Económica:</span>
            <strong className="text-emerald-400">Capacidad Operacional</strong>
          </div>
        </div>

        {/* Tesis & Traction Chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Tesis Operativa Central</h3>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
              {SPLENDOR_PLAYBOOK.thesis}
            </p>
            <div className="mt-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Cadena de Tracción:</span>
              <p className="text-xs font-mono font-semibold text-emerald-400 mt-1 bg-emerald-950/40 px-3 py-2 rounded border border-emerald-800/40">
                {SPLENDOR_PLAYBOOK.tractionChain}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Propuesta de Valor Irremplazable</h3>
            <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-2 text-sm text-slate-200">
              <p className="text-xs text-amber-300/90 font-mono">
                ✖ NO VENDER: “Un empleado remoto barato”.
              </p>
              <p className="text-xs text-emerald-400 font-mono font-medium">
                ✔ VENDER: “Capacidad operacional flexible, medible y gestionada”.
              </p>
              <p className="text-xs text-slate-400 pt-1">
                El valor está en convertir una necesidad variable del cliente en una capacidad operativa predecible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dolor de Mercado y Verticales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            Dolor de Mercado Observable
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {SPLENDOR_PLAYBOOK.marketPain.map((pain, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded border border-slate-800/80">
                <span className="text-rose-400 font-bold">•</span>
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Verticales & Servicios de Capacidad
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {SPLENDOR_PLAYBOOK.disruptionAndVerticals.map((vert, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-950/50 px-3 py-2 rounded text-xs text-slate-200 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{vert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Triangulación Financiera y Simulador de Célula */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Modelo Financiero por Triangulación Operativa</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Lógica: {SPLENDOR_PLAYBOOK.triangulationFinancials.logic}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Parámetros Documentados */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Estructura Base Documentada</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Costo Agente (Colombia):</span>
                <span className="font-mono text-slate-200 font-semibold">{SPLENDOR_PLAYBOOK.triangulationFinancials.agentCost}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Precio Cliente Semanal:</span>
                <span className="font-mono text-emerald-400 font-semibold">{SPLENDOR_PLAYBOOK.triangulationFinancials.clientPrice}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Dedicación:</span>
                <span className="font-mono text-slate-200">{SPLENDOR_PLAYBOOK.triangulationFinancials.hoursPerWeek}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">KPI Operacional:</span>
                <span className="font-mono text-emerald-300 text-right">{SPLENDOR_PLAYBOOK.triangulationFinancials.operationalKpi}</span>
              </div>
            </div>

            <div className="bg-emerald-950/40 p-3 rounded border border-emerald-800/30 text-xs text-emerald-300/90 leading-relaxed">
              <strong className="block text-emerald-400 font-mono mb-1">Pregunta Clave de Triangulación:</strong>
              {SPLENDOR_PLAYBOOK.triangulationFinancials.keyQuestion}
            </div>
          </div>

          {/* Simulador Interactivo */}
          <div className="lg:col-span-2 bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Simulador de Capacidad & Margen Semanal</h4>
                <button
                  onClick={() => { setWeeklyClientPrice(300); setWeeklyAgentCost(150); }}
                  className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 font-mono"
                >
                  <RefreshCw className="w-3 h-3" /> Reset a Valores Base
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Precio Cobrado al Cliente ($USD/semana):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="200"
                      max="800"
                      step="25"
                      value={weeklyClientPrice}
                      onChange={(e) => setWeeklyClientPrice(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <span className="font-mono text-sm text-emerald-400 font-bold min-w-[70px] text-right">
                      ${weeklyClientPrice}/s
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Costo Neto del Talento ($USD/semana):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="100"
                      max="400"
                      step="25"
                      value={weeklyAgentCost}
                      onChange={(e) => setWeeklyAgentCost(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <span className="font-mono text-sm text-slate-200 font-bold min-w-[70px] text-right">
                      ${weeklyAgentCost}/s
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics display */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 mt-4 text-center">
              <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                <p className="text-[11px] text-slate-400 font-mono">Facturación Mensual</p>
                <p className="text-base font-bold text-white font-mono mt-0.5">${monthlyRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                <p className="text-[11px] text-slate-400 font-mono">Costo Operativo</p>
                <p className="text-base font-bold text-slate-300 font-mono mt-0.5">${monthlyCost.toLocaleString()}</p>
              </div>
              <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                <p className="text-[11px] text-emerald-400 font-mono">Margen Bruto</p>
                <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                  ${grossMargin.toLocaleString()} <span className="text-xs font-normal">({grossMarginPercent}%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matriz de Distribución Radical de Capital (Splendor) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              Matriz de Distribución Radical de Capital (Splendor M-007)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Regla matemática estricta para la dispersión de cada dólar facturado en la célula (Base mensual: ${(weeklyClientPrice * 4).toLocaleString()} USD).
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
            Total 100% Asignado
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {SPLENDOR_PLAYBOOK.capitalDistribution.map((item, idx) => {
            const amount = Math.round((monthlyRevenue * item.percentage) / 100);
            return (
              <div key={idx} className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">{item.destination}</span>
                    <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      {item.percentage}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.governanceFunction}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Monto estimado:</span>
                  <span className="font-bold text-slate-200">${amount.toLocaleString()} USD/mes</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secuencia de Tracción de 10 Pasos */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-6">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Secuencia de Tracción Operacional de 10 Pasos
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Protocolo de avance lineal de una cuenta Splendor: desde el primer lead hasta la retención y expansión de la célula.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded">
            Paso Activo: #{activeStep} de 10
          </span>
        </div>

        {/* Stepper Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-3 mb-6">
          {SPLENDOR_PLAYBOOK.tenStepsTraction.map((s) => (
            <button
              key={s.stepNumber}
              onClick={() => setActiveStep(s.stepNumber)}
              className={`flex-1 min-w-[75px] py-2 px-1 text-center rounded text-xs font-mono transition-all border ${
                activeStep === s.stepNumber
                  ? 'bg-emerald-600 text-white border-emerald-400 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="text-[10px] opacity-75">PASO {s.stepNumber}</div>
              <div className="truncate text-[11px] mt-0.5">{s.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        {(() => {
          const current = SPLENDOR_PLAYBOOK.tenStepsTraction.find(s => s.stepNumber === activeStep) || SPLENDOR_PLAYBOOK.tenStepsTraction[0];
          return (
            <div className="bg-slate-950 rounded-xl p-5 border border-emerald-900/40 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center">
                    {current.stepNumber}
                  </span>
                  <h4 className="text-lg font-bold text-white">{current.title}</h4>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                  Entregable: {current.outputArtifact}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase">Descripción Operativa:</span>
                  <p className="text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800">
                    {current.description}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase">Acción Requerida del Operador:</span>
                  <p className="text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800">
                    {current.actionRequired}
                  </p>
                </div>
              </div>

              {current.pitfallOrBreakpoint && (
                <div className="bg-rose-950/30 border border-rose-900/50 p-3 rounded-lg flex items-start gap-2.5 text-xs text-rose-300">
                  <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-400">Punto de Quiebre / Trampa a Evitar: </span>
                    {current.pitfallOrBreakpoint}
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <button
                  disabled={activeStep <= 1}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-3 py-1.5 rounded bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Paso Anterior
                </button>
                <button
                  disabled={activeStep >= 10}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-3 py-1.5 rounded bg-emerald-600 text-xs text-white hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  Siguiente Paso →
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Proceso Cold -> Closing & Reglas de Delegación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cold to Closing */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-emerald-400" />
            Flujo de Adquisición Cold → Closing
          </h3>
          <p className="text-xs text-slate-400">
            Secuencia estandarizada de ventas para evitar dependencia del fundador:
          </p>
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 leading-relaxed">
            {SPLENDOR_PLAYBOOK.coldToClosingSequence}
          </div>
          <div className="bg-slate-950/60 p-3 rounded text-xs text-slate-300 space-y-2 border border-slate-800">
            <div className="font-semibold text-white">Equipo Mínimo de la Célula de Adquisición:</div>
            <p className="text-slate-400">
              • Acquisition / Closer • Recruiter • Talento Operativo • Operations • Account/Client Management • Arquitectura / Estrategia
            </p>
          </div>
        </div>

        {/* Delegación & Límites */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            Límites de Delegación & Regla de Oro
          </h3>
          
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
              <span className="font-mono text-slate-400 block mb-1">El Cliente Conserva:</span>
              <p className="text-slate-200">{SPLENDOR_PLAYBOOK.delegationRule.clientKeeps}</p>
            </div>
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
              <span className="font-mono text-emerald-400 block mb-1">Splendor Conserva:</span>
              <p className="text-slate-200">{SPLENDOR_PLAYBOOK.delegationRule.splendorKeeps}</p>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-rose-950/30 p-2.5 rounded border border-rose-900/50 text-rose-300">
              <strong className="text-rose-400">PROHIBIDO PROMETER:</strong> {SPLENDOR_PLAYBOOK.operatorBoundaries.forbiddenToPromise}
            </div>
            <div className="bg-emerald-950/30 p-2.5 rounded border border-emerald-900/50 text-emerald-300">
              <strong className="text-emerald-400">OBLIGATORIO PROMETER:</strong> {SPLENDOR_PLAYBOOK.operatorBoundaries.mandatoryToPromise}
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400">
            <strong className="text-slate-300 font-mono block mb-1">Principio de Reutilización:</strong>
            {SPLENDOR_PLAYBOOK.operatorBoundaries.reuseRule}
          </div>
        </div>
      </div>
    </div>
  );
};
