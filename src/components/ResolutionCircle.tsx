import React, { useState } from 'react';
import { RotateCw, CheckCircle2, ChevronRight, Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface Step {
  step: number;
  name: string;
  actionQuestion: string;
  purpose: string;
  operatorPrompt: string;
}

const CIRCLE_STEPS: Step[] = [
  {
    step: 1,
    name: 'Circunstancia Actual',
    actionQuestion: '¿Acepto la verdad desnuda del entorno sin juicio ni autoengaño?',
    purpose: 'Honestidad radical con la realidad física del sistema.',
    operatorPrompt: 'Mira los números reales, el agotamiento del equipo y los reclamos sin maquillar con narrativa corporativa.',
  },
  {
    step: 2,
    name: 'Definición del Desafío',
    actionQuestion: '¿Nombro con exactitud al “monstruo” o la ruptura que enfrentamos?',
    purpose: 'Claridad de intención y foco de intervención.',
    operatorPrompt: 'No digas "falta comunicación". Di "hay una latencia de 4 días en aprobación que quema 20 horas de trabajo".',
  },
  {
    step: 3,
    name: 'Selección de Matriz',
    actionQuestion: '¿Elijo la herramienta o matriz del ecosistema adecuada para esta fricción?',
    purpose: 'Aplicación rigurosa del criterio antes de improvisar.',
    operatorPrompt: '¿Es un problema de capacidad (Splendor)? ¿De modelo modular (JJ)? ¿De escalabilidad (Renasci)? ¿O de negociación (Singularity)?',
  },
  {
    step: 4,
    name: 'Resultado Esperado',
    actionQuestion: '¿Defino el Bienestar Mínimo Viable (BMV) con métricas medibles?',
    purpose: 'Esperanza basada en datos verificables, no en fantasía.',
    operatorPrompt: 'Define la meta cruda: "reducir tickets acumulados a < 10 y darle 1 día libre a la semana al líder".',
  },
  {
    step: 5,
    name: 'Prueba (Ejecución)',
    actionQuestion: '¿Doy el salto al vacío y despliego la solución mínima en el terreno?',
    purpose: 'Valentía operativa en la acción real.',
    operatorPrompt: 'Prueba la hipótesis en un microcosmos acotado durante 72 horas sin pedir permiso burocrático.',
  },
  {
    step: 6,
    name: 'Documentar',
    actionQuestion: '¿Registro con frialdad forense exactamente qué ocurrió y qué se rompió?',
    purpose: 'Construcción de memoria colectiva e IP transmisible.',
    operatorPrompt: 'Escribe el log: qué funcionó, qué falló, tiempos exactos y costos reales incurridos.',
  },
  {
    step: 7,
    name: 'Revisar',
    actionQuestion: '¿Comparo los resultados contra la § Formula (Tiempo, Energía, IP, Resultado)?',
    purpose: 'Discernimiento y calibración objetiva.',
    operatorPrompt: '¿Ahorramos tiempo (t)? ¿Liberamos energía (E)? ¿Generamos conocimiento (K)? ¿Aumentó el EBITDA o la paz (R)?',
  },
  {
    step: 8,
    name: 'Aprender',
    actionQuestion: '¿Extraigo la “pepita de oro” y el aprendizaje profundo de la experiencia?',
    purpose: 'Sabiduría sistémica acumulativa.',
    operatorPrompt: '¿Qué principio o heurística descubrimos que antes no estaba escrita en el manual?',
  },
  {
    step: 9,
    name: 'Mejorar',
    actionQuestion: '¿Ajusto la arquitectura para hacerla 1% más humana y 1% más eficiente?',
    purpose: 'Evolución consciente continua.',
    operatorPrompt: 'Ajusta el SOP: elimina un paso redundante y asegura que nadie tenga que hacer heroísmo.',
  },
  {
    step: 10,
    name: 'Iterar',
    actionQuestion: '¿Vuelvo a iniciar el ciclo pero desde una plataforma de comprensión más alta?',
    purpose: 'Legado infinito sin dependencia de héroes.',
    operatorPrompt: 'El ciclo se reinicia, pero ahora el sistema es más robusto y autónomo. El operador puede retirarse en paz.',
  },
];

export const ResolutionCircle: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  const toggleStep = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const active = CIRCLE_STEPS.find((s) => s.step === currentStep) || CIRCLE_STEPS[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <RotateCw className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Framework de Transcendencia • Llave Maestra
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                El Círculo de la § Resolución (El Algoritmo de la Dignidad)
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-800/50">
            10 Etapas Autopoyéticas
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Este círculo es el sistema operativo que permite que cualquier persona (un domiciliario, un sucesor, un restaurante de 3 personas o un holding) convierta cualquier dolor o ruptura en un activo de bienestar y aprendizaje sin depender de héroes.
        </p>
      </div>

      {/* Interactive Step Track */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Step Buttons List */}
        <div className="lg:col-span-5 space-y-2">
          {CIRCLE_STEPS.map((s) => {
            const isCurrent = currentStep === s.step;
            const isCompleted = completedSteps.includes(s.step);
            return (
              <div
                key={s.step}
                onClick={() => setCurrentStep(s.step)}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  isCurrent
                    ? 'bg-emerald-950/70 border-emerald-500 shadow-md ring-1 ring-emerald-500/40'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(s.step);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isCompleted
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {isCompleted ? '✓' : s.step}
                  </button>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{s.name}</h4>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{s.purpose}</span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 ${isCurrent ? 'text-emerald-400' : 'text-slate-600'}`} />
              </div>
            );
          })}
        </div>

        {/* Active Step Workspace */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center border border-emerald-500/40">
                  {active.step}
                </span>
                <h3 className="text-lg font-bold text-white">{active.name}</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                Paso {active.step} de 10
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                  Pregunta de Acción que Activa el Paso:
                </span>
                <p className="text-sm font-mono text-amber-200 italic leading-relaxed">
                  “{active.actionQuestion}”
                </p>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                  Propósito de Vida y Criterio:
                </span>
                <p className="text-xs sm:text-sm text-slate-200">{active.purpose}</p>
              </div>

              <div className="bg-emerald-950/30 p-4 rounded-lg border border-emerald-900/40 space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold block">
                  Instrucción Práctica para el Operador:
                </span>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">{active.operatorPrompt}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => toggleStep(active.step)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                completedSteps.includes(active.step)
                  ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{completedSteps.includes(active.step) ? 'Completado' : 'Marcar como Completado'}</span>
            </button>

            <div className="flex gap-2">
              <button
                disabled={currentStep <= 1}
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-3 py-1.5 rounded bg-slate-800 text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Anterior
              </button>
              <button
                disabled={currentStep >= 10}
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="px-3 py-1.5 rounded bg-emerald-600 text-xs text-white hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Peace & Autopoiesis Manifesto */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-800/40 rounded-xl p-6 text-center space-y-2">
        <HeartHandshake className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
        <h4 className="text-base font-bold text-white">El Sistema Camina Solo</h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          “Este círculo convierte cualquier dolor en bienestar. Ya no necesitas héroes. El sistema camina solo. Si el fundador no está, el operador ejecuta las 10 etapas y la organización preserva su integridad y su verdad.”
        </p>
      </div>
    </div>
  );
};
