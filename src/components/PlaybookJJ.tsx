import React, { useState } from 'react';
import { JJ_COMPANY_PLAYBOOK } from '../data/playbooksData';
import { GitBranch, Box, HelpCircle, Check, Play, Search, AlertCircle, ArrowRight, Activity } from 'lucide-react';

export const PlaybookJJ: React.FC = () => {
  // Hypothesis Builder State
  const [problem, setProblem] = useState<string>('Saturación en atención y pérdida de clientes');
  const [symptoms, setSymptoms] = useState<string>('Tiempo de respuesta > 4 horas y reviews negativas');
  const [burnt, setBurnt] = useState<string>('$4,000 USD/mes en horas extras y churn');
  const [gain, setGain] = useState<string>('$12,000 USD/mes en retención y satisfacción NPS > 85');

  const [activeTab, setActiveTab] = useState<'meta-framework' | 'services' | 'bootstrap'>('meta-framework');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Playbook de Ejecución 02</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{JJ_COMPANY_PLAYBOOK.name}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
            <span>Modelo:</span>
            <strong className="text-indigo-400">Capacidad Empresarial Modular</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Tesis Operativa</h3>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
              {JJ_COMPANY_PLAYBOOK.thesis}
            </p>
            <div className="mt-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Cadena de Tracción Modular:</span>
              <p className="text-xs font-mono font-semibold text-indigo-300 mt-1 bg-indigo-950/40 px-3 py-2 rounded border border-indigo-800/40">
                {JJ_COMPANY_PLAYBOOK.tractionChain}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Dolor de Mercado & Solución</h3>
            <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="text-slate-400">
                <strong className="text-slate-200">Dolor:</strong> {JJ_COMPANY_PLAYBOOK.marketPain}
              </p>
              <p className="text-slate-300 border-t border-slate-800 pt-2">
                <strong className="text-indigo-400">Solución:</strong> {JJ_COMPANY_PLAYBOOK.valueProposition}
              </p>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex gap-2 mt-6 border-t border-slate-800 pt-4">
          <button
            onClick={() => setActiveTab('meta-framework')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeTab === 'meta-framework'
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Meta-Framework JJ (7 Fases)
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeTab === 'services'
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Servicios Productizados
          </button>
          <button
            onClick={() => setActiveTab('bootstrap')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeTab === 'bootstrap'
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Bootstrap & Delegación
          </button>
        </div>
      </div>

      {activeTab === 'meta-framework' && (
        <div className="space-y-6">
          {/* Diagnostic 8 Questions */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-indigo-400" />
              1. Fase de Diagnóstico: Las 8 Preguntas de Síntomas & Burnt Oculto
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Para entender cualquier problema operativo antes de diseñar la solución, el operador debe contestar estrictamente estas 8 preguntas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(JJ_COMPANY_PLAYBOOK.metaFrameworkProcess[0] as any).questions.map((q: string, idx: number) => (
                <div key={idx} className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-200 font-medium leading-snug">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Hypothesis Builder */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Box className="w-5 h-5 text-indigo-400" />
              2. La Fórmula de la Hipótesis Operativa (Adaptación UX Design)
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Fórmula canónica: <code className="text-indigo-300 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">[Problema] que se muestra en [Síntomas] cuesta [Burnt] y en caso de liberarse ese proceso [genera ganancia].</code>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">1. [Problema detectado]:</label>
                <input
                  type="text"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">2. [Síntomas observables]:</label>
                <input
                  type="text"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">3. [Burnt / Desperdicio y costo oculto]:</label>
                <input
                  type="text"
                  value={burnt}
                  onChange={(e) => setBurnt(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">4. [Ganancia / Valor liberado]:</label>
                <input
                  type="text"
                  value={gain}
                  onChange={(e) => setGain(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-4 bg-indigo-950/40 border border-indigo-800/40 p-3.5 rounded-lg">
              <span className="text-[11px] font-mono uppercase text-indigo-400 font-semibold block mb-1">Resultado de la Hipótesis Estructurada:</span>
              <p className="text-xs sm:text-sm text-slate-100 font-mono leading-relaxed">
                “El problema de <span className="text-amber-300 font-bold underline">{problem}</span> que se muestra en <span className="text-amber-300 font-bold underline">{symptoms}</span> cuesta <span className="text-rose-400 font-bold underline">{burnt}</span> y en caso de liberarse ese proceso generará <span className="text-emerald-400 font-bold underline">{gain}</span>.”
              </p>
            </div>
          </div>

          {/* Testing Bombing & Brian Tracy Layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-rose-400" />
                4. Bombardeo de Testing (Validación de Acción)
              </h4>
              <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-rose-400">
                  Pregunta Inviolable: “¿En el momento de que esta idea entra en contacto con la capacidad de acción, dónde se rompe?”
                </p>
                <p className="text-slate-400">
                  Idear es lindo, pero debe ser hecho para ser implementable. Supera la teoría de consultoras como McKinsey al confrontar la física del terreno.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                5. Capa Iterativa (Técnica de Brian Tracy)
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="bg-slate-950 p-2 rounded border border-slate-800">• Responder de 7 a 20 formas distintas a cada punto de quiebre.</li>
                <li className="bg-slate-950 p-2 rounded border border-slate-800">• Cruzar con lo que ya funciona actualmente en el sistema.</li>
                <li className="bg-slate-950 p-2 rounded border border-slate-800">• Cruzar con los otros puntos de quiebre del ecosistema.</li>
                <li className="bg-slate-950 p-2 rounded border border-slate-800">• Reutilizar arquitectura cruzada con expertos de nicho y modelos de IA profundos.</li>
              </ul>
            </div>
          </div>

          {/* Prioritization Matrix & Z Axis */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="text-base font-bold text-white">7. Matriz de Priorización de Escalamiento en 4 Cuadrantes</h3>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800/40">
                + Eje Z Temporal / Circunstancial
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3.5 rounded-lg border border-rose-900/40">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase">Cuadrante 1</span>
                <h5 className="text-sm font-bold text-white mt-1">Importante y Urgente</h5>
                <p className="text-xs text-slate-400 mt-1">Rupturas activas que queman recursos o amenazan la continuidad inmediata.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-lg border border-emerald-900/40">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Cuadrante 2</span>
                <h5 className="text-sm font-bold text-white mt-1">Fundacional (Elemental & Progresivo)</h5>
                <p className="text-xs text-slate-400 mt-1">Arquitectura de procesos, IP, SOPs y sistemas que garantizan la escala sin depender de héroes.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-lg border border-amber-900/40">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Cuadrante 3</span>
                <h5 className="text-sm font-bold text-white mt-1">Urgente y Transicional</h5>
                <p className="text-xs text-slate-400 mt-1">Parches tácticos temporales con fecha de caducidad explícita para no crear deuda técnica.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Cuadrante 4</span>
                <h5 className="text-sm font-bold text-white mt-1">Bajo Impacto pero Alto Consumo de Recursos</h5>
                <p className="text-xs text-slate-400 mt-1">Tareas parásitas y burocracias contextuales candidatas a eliminación inmediata.</p>
              </div>
            </div>

            <div className="mt-4 bg-amber-950/30 border border-amber-900/40 p-3 rounded-lg text-xs text-amber-300/90 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Auditoría Forense del Eje Z:</strong> El concepto del "Eje Z" está confirmado documentalmente para calibrar variables temporales (2026-2030) y circunstanciales, pero carece de fórmula paramétrica formal en los archivos históricos. No agregar fórmulas ficticias; evaluar cualitativamente.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Box className="w-5 h-5 text-indigo-400" />
            Catálogo de Servicios Productizados Modulares
          </h3>
          <p className="text-xs text-slate-400">
            Cada uno opera como una unidad económica autónoma que el cliente puede contratar por separado:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JJ_COMPANY_PLAYBOOK.resourcesUnderManagement.map((srv, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <span className="w-6 h-6 rounded bg-indigo-900/50 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white">{srv.split('(')[0]}</h4>
                <p className="text-xs text-slate-400">
                  {srv.includes('(') ? srv.split('(')[1].replace(')', '') : 'Función modular de negocio'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'bootstrap' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-indigo-400" />
              Ciclo Bootstrap de Validación Modular
            </h3>
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-indigo-300 leading-relaxed">
              {JJ_COMPANY_PLAYBOOK.bootstrapCycle}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              El cliente nunca compra una "transformación civilizatoria". Entra por una brecha puntual que le genera dolor hoy. Una vez resuelta y medida, se estandariza y se ofrece la siguiente función modular.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-emerald-400" />
              Separación Quirúrgica en Delegación
            </h3>
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed">
              {JJ_COMPANY_PLAYBOOK.delegationModel}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Para que la empresa funcione sin ti, el vendedor no debe ser el diagnosticador, ni el diagnosticador el que ejecuta el servicio, ni el ejecutor el que audita el QA. Cada rol tiene su frontera nítida.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
