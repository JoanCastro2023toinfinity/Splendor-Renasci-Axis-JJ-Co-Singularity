import React, { useState } from 'react';
import { Play, Copy, Check, ShieldCheck, HeartPulse, Send, AlertTriangle, ArrowRight, Zap, Target, BookOpen, Globe, Activity, Stethoscope, Search } from 'lucide-react';

export const AutonomousRunbook: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  // Interactive Diagnostic Triangulation Simulator State
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  // Proof of Value Cases: 5 Complaints + 2 Declining Metrics = Root Cause Isolated
  const forensicCases = [
    {
      title: 'Caso A: Portfolio Asset B2B SaaS / Services (Mid-Market Post-Acquisition)',
      industry: 'B2B Professional Services / Tech-Enabled ($12M ARR)',
      fiveComplaints: [
        '1. “Nadie más puede armar la propuesta final excepto Carlos (VP Ops) o se cae el cliente.”',
        '2. “El equipo comercial jura que vendió una cosa, pero delivery entrega algo incompleto.”',
        '3. “Los clientes tardan 45 días en ver su primer entregable (prometido en 14 días).”',
        '4. “Soporte dice que el producto está roto; producto dice que soporte no sabe usarlo.”',
        '5. “Para aprobar un descuento o un ajuste menor de SLA, todo se frena 6 días esperando al CEO.”'
      ],
      twoMetricsInFreefall: [
        { metric: 'Net Dollar Retention (NDR)', value: 'Bajó de 108% a 84% en 3 trimestres' },
        { metric: 'Gross Margin en Delivery', value: 'Se comprimió del 54% al 38% por retrabajos no facturables' }
      ],
      isolatedRootCause: 'Dependencia Invertida de Héroe en Validación Técnica + Falta de Frontera Modular en la Oferta.',
      action72h: 'Desarmar el cuello de botella de Carlos. Extraer su criterio implícito a una Matriz de Aprobación Paramétrica (M-013). Escindir la propuesta en 3 módulos fijos no renegociables (JJ Modular Framework). Retirar al CEO de los SLAs de rutina con el Protocolo de Latencia (M-014).'
    },
    {
      title: 'Caso B: Boutique de Talent as a Service / Staffing (50 Cuentas Activas)',
      industry: 'Nearshore Staffing / Talent Agency ($4M Facturación)',
      fiveComplaints: [
        '1. “Los clientes nos piden rebaja de horas cada 90 días comparándonos con freelancers de Upwork.”',
        '2. “El cliente se queja de que el talento remoto no toma iniciativa y espera instrucciones para todo.”',
        '3. “Si el account manager estrella se va, se lleva 4 cuentas con él a su propia agencia.”',
        '4. “Tardamos 3 semanas en reemplazar a un agente que renuncia, y el cliente congela pagos.”',
        '5. “El cliente culpa a nuestra agencia por sus propias demoras internas de producto.”'
      ],
      twoMetricsInFreefall: [
        { metric: 'Client Churn Mensual', value: 'Subió al 6.8% mensual (LTV destruido a < 9 meses)' },
        { metric: 'EBITDA Operativo', value: 'Comprimido a 11% por regateo de horas y costos de recontratación' }
      ],
      isolatedRootCause: 'Comoditización por venta de HH (Horas Hombre) en vez de Capacidad Gestionada con SLA + Ausencia de la Matriz de Reparto Radical.',
      action72h: 'Reempaquetar los contratos a unidades fijas ($300/sem contra costo de $150 con meta de 80 tickets/día x 5 min). Aplicar la Matriz de Distribución de Capital Radical (M-007) para blindar a closers y vertical managers con participación retenida. Activar el Protocolo de Dependencia Invertida en el contrato.'
    },
    {
      title: 'Caso C: Empresa Familiar Tradicional / Carve-Out Industrial (Turnaround)',
      industry: 'Distribución & Logística Especializada ($25M Ventas)',
      fiveComplaints: [
        '1. “Todo el conocimiento de proveedores clave está en la libreta física del fundador anterior.”',
        '2. “Los pedidos urgentes de clientes VIP se despachan por WhatsApp sin orden formal en ERP.”',
        '3. “El almacén despacha con 18% de error pero nadie sabe quién autorizó el cambio de SKU.”',
        '4. “El sindicato o los jefes de turno amenazan con frenar si se implementa control de tiempos.”',
        '5. “Las reuniones semanales duran 3 horas y nunca se ejecutan las minutas acordadas.”'
      ],
      twoMetricsInFreefall: [
        { metric: 'On-Time In-Full Delivery (OTIF)', value: 'Se desplomó de 92% a 71% generando multas contractuales' },
        { metric: 'Working Capital / Ciclo de Caja', value: 'Pasó de 38 días a 74 días (quema de liquidez)' }
      ],
      isolatedRootCause: 'Poder Fiduciario Secuestrado por Vínculos Informales y Cero Memoria Transmisible (Deuda de IP).',
      action72h: 'Activar Singularity con negociación Ackerman 2026 para negociar la transición definitiva del fundador anterior sin fricción legal. Mapear la cadena de intervención física con el Círculo de la § Resolución (Paso 1: honestidad radical, Paso 6: documentación forense de despachos). Sustituir WhatsApp por célula modular con buffer de contingencia.'
    }
  ];

  const dmScriptsES = [
    {
      target: 'Operating Partners / Private Equity & Turnaround',
      recipient: 'Operating Partner, Portfolio Operations Director o Managing Director',
      subject: 'Sistemas post-adquisición: auditoría forense sin dependencia de héroes',
      body: `Hola [Nombre],

Te escribo de operador a operador. Hace un tiempo me retiré del día a día, pero pasé años llevando al límite arquitecturas en reestructuraciones de portafolio hasta entender con bisturí dónde se rompen: la trampa de las dependencias invertidas invisibles, donde dos personas indispensables tienen al EBITDA secuestrado mientras la gerencia finge que la empresa corre por procesos.

No creo en auditorías de 6 meses de consultoras tradicionales que cobran $250k para entregar un deck de diapositivas. Cuando un activo sangra, no necesitas 50 entrevistas: solo necesitas las 5 quejas más recurrentes del terreno (data cualitativa real) y las 2 métricas en caída libre (la hemorragia operativa). Esa triangulación aísla de inmediato la causa raíz y cuál articulación sistémica falló.

De ese estrés sinteticé un sistema abierto y auto-ejecutable:

1. Divergence Audit (4 Lentes): Aísla en 72 horas la brecha real entre la narrativa gerencial y la fricción del suelo.
2. Axis Breakpoint Scanner: Desplaza la intervención de post-crisis a pre-breakpoint antes de que queme caja.
3. Singularity & Protocolo Ackerman 2026: Negociación de alta tensión y minado de cisnes negros para renegociar pasivos o transiciones de socios sin litigio.

No vendo consultoría, no cobro por horas ni agendo llamadas de exploración. Es propiedad intelectual abierta y documentada para que camine sola; cualquier analista u operador tuyo en portafolio puede levantarla y ejecutarla mañana mismo:
[LINK_A_TU_APP]

Ojalá te ahorre un par de dolores de cabeza en alguna integración de portafolio.

Un abrazo,
[Tu Nombre]`,
    },
    {
      target: 'Boutiques de Talent as a Service / Staffing / Nearshore',
      recipient: 'Founder, Managing Partner o VP of Operations',
      subject: 'Arquitectura abierta: desacoplar TaaS de la venta por horas (sin pitch)',
      body: `Hola [Nombre],

Te escribo de operador a operador. Hace un tiempo me retiré de la línea de fuego del día a día, pero pasé años llevando al límite modelos de staffing y talento remoto hasta entender dónde se rompen: la trampa de vender horas, el regateo contra Upwork y la rotación cuando el cliente espera que el talento adivine su negocio.

De ese estrés documenté un sistema completo que llamamos Splendor TaaS & Divergence Audit. No es teoría de LinkedIn; es la matemática exacta para empaquetar talento como unidades de capacidad gestionada (desacopladas de horas, con márgenes >50%), una matriz de distribución de capital que blinda la fuga del equipo y un protocolo para devolverle la responsabilidad del criterio al cliente.

No vendo consultoría ni busco clientes ni agendo llamadas. Es propiedad intelectual abierta y traccionable que documenté para que ruede sola.

Si tienes 5 minutos y te sirve para el delivery o la estrategia de [Empresa], aquí puedes ver el framework completo y las matrices de diagnóstico:
[LINK_A_TU_APP]

Un saludo,
[Tu Nombre]`,
    },
    {
      target: 'Mensaje Directo Corto (WhatsApp / X / InMail rápido)',
      recipient: 'Founders y Operadores ocupados',
      subject: 'Para leer en 60 segundos',
      body: `Hola [Nombre]. Vi lo que están construyendo en [Empresa]. 

Habiéndome retirado de la trinchera operativa, empaqueté en un sistema abierto todo lo que aprendí destrozando y reconstruyendo arquitecturas de TaaS y M&A hasta dejarlas caminando solas (sin depender de fundadores ni consultores de $50k/mes).

Es 100% abierto y auto-ejecutable, con las 20 matrices de decisión, la matemática de capacidad y el protocolo de divergencia: [LINK_A_TU_APP]

Cero pitch, cero llamadas de venta. Échale un ojo si estás rediseñando capacidad o destrabando cuellos de botella operativos.`,
    }
  ];

  const dmScriptsEN = [
    {
      target: 'Operating Partners / Private Equity & Turnaround',
      recipient: 'Operating Partner, Portfolio Operations Director, or Managing Director',
      subject: 'Post-acquisition operating systems: zero-consultant forensic turnaround',
      body: `Hi [Name],

Writing to you operator to operator. I’ve stepped back from day-to-day trenches, but spent years stress-testing architectures in portfolio turnarounds until discovering exactly where mid-market companies break: the trap of invisible inverted dependencies, where two indispensable legacy employees hold the entire EBITDA hostage while leadership pretends everything is running on standard operating procedures.

I don't believe in 6-month consulting audits that charge $250k just to deliver a slide deck. When a portfolio asset is bleeding, you don't need endless interviews: you only need the 5 most recurring ground-level complaints (raw qualitative reality) and the 2 declining metrics (the operational hemorrhage). That triangulation immediately exposes the root cause and which system joint broke down.

Out of that stress, I synthesized an open, self-standing framework:

1. Divergence Audit (4 Lenses): Isolates the real delta between management narrative and ground-floor friction in 72 hours.
2. Axis Breakpoint Scanner: Shifts intervention from post-crisis cleanup to pre-breakpoint stabilization before burning cash.
3. Singularity & Ackerman 2026 Protocol: High-stakes negotiation and Black Swan mining to renegotiate liabilities or transition legacy founders without litigation.

I do not offer consulting services, hourly advisory, or discovery calls. This is battle-tested, open intellectual property documented to run autonomously so your own portfolio operators or analysts can pick it up and execute it tomorrow:
[LINK_TO_APP]

Hope it saves you a couple of operational headaches on your next integration.

Best,
[Your Name]`,
    },
    {
      target: 'Talent as a Service / Staffing Boutiques',
      recipient: 'Founder, Managing Partner, or VP of Operations',
      subject: 'Open architecture: decoupling TaaS from hourly billing (no sales pitch)',
      body: `Hi [Name],

Reaching out operator to operator. Having stepped back from the operational line of fire, I spent years pushing remote staffing models to their absolute limit until understanding where they systematically break: the hourly commodity trap, Upwork pricing pressure, and customer churn when clients expect remote talent to guess their internal context.

From that friction, I documented an operating architecture called Splendor TaaS & Divergence Audit. It’s not LinkedIn theory—it is the exact unit economics to package talent into managed capacity units (decoupled from hours, with >50% gross margins), a radical capital distribution matrix that prevents team leakage, and an inverted dependency protocol that holds the client accountable for their own strategy.

I don't sell consulting, I don't book calls, and I don't take on clients. This is open, operational intellectual property built to stand on its own.

If you have 5 minutes and it helps the delivery or margins at [Company], you can explore the complete framework and diagnostic matrices here:
[LINK_TO_APP]

Best regards,
[Your Name]`,
    },
    {
      target: 'Short Direct Message (WhatsApp / X / Quick InMail)',
      recipient: 'Busy Founders & Senior Operators',
      subject: '60-second read',
      body: `Hi [Name]. Impressive work on what you're building at [Company].

Having stepped back from day-to-day operations, I distilled into an open system everything learned from breaking and rebuilding TaaS and M&A architectures until they ran independently (zero founder dependency, zero $50k/mo consultants).

It’s 100% open and self-executable, including 20 decision matrices, capacity unit economics, and the divergence protocol: [LINK_TO_APP]

Zero pitch, zero sales calls. Take a look whenever you're restructuring capacity or unblocking operational bottlenecks.`,
    }
  ];

  const currentScripts = lang === 'ES' ? dmScriptsES : dmScriptsEN;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Zero-Intervention Mandate */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/40 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                Aviso de Soberanía Operativa • Cero Consultoría
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Instrucción para Quien Recibe esta Herramienta
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-300 bg-amber-950/80 px-3 py-1.5 rounded-lg border border-amber-800/50">
            100% Autónomo • Sin Intervención del Autor
          </span>
        </div>

        <div className="space-y-3 text-sm text-slate-200 leading-relaxed">
          <p className="bg-slate-950/80 p-4 rounded-lg border border-slate-800">
            <strong className="text-amber-300 font-mono block mb-1">DECLARACIÓN INVIOLABLE DEL AUTOR:</strong>
            Si estás viendo esta aplicación, el autor <strong>NO</strong> está disponible para agendar llamadas de exploración, no ofrece horas de consultoría y no dicta clases magistrales sobre cómo usarla. La propiedad intelectual fue destilada precisamente para que sea <strong>autopoyética</strong>: contiene su propia matemática, sus diagnósticos, sus matrices y sus límites de delegación. 
            <span className="text-emerald-400 block mt-1 font-mono">
              Si tu equipo tiene el calibre adecuado, pueden tomar los frameworks y ejecutarlos mañana mismo.
            </span>
          </p>
        </div>
      </div>

      {/* Proof of Value Engine: 5 Complaints + 2 Declining Metrics = Root Cause Isolated */}
      <div className="bg-slate-900 border border-teal-500/30 rounded-xl p-6 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">Proof of Value Quirúrgico</span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Triangulación Forense: 5 Quejas del Terreno + 2 Métricas en Caída
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800">
            Sin auditorías de 10 meses • Causa Raíz en 10 Minutos
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Las consultoras tradicionales cobran cientos de miles de dólares por pedir 40 Excels y tardar meses. Un operador con instinto calibrado no necesita eso: toma las <strong className="text-white">5 quejas más repetitivas del día a día (data cualitativa viva)</strong> y las <strong className="text-white">2 métricas en caída libre</strong>, y con eso aísla exactamente la articulación rota:
        </p>

        {/* Case selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {forensicCases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCase(idx)}
              className={`p-3 rounded-lg border text-left text-xs transition-all ${
                selectedCase === idx
                  ? 'bg-teal-950/80 border-teal-500 text-white font-semibold shadow-sm'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono block text-teal-400">{c.industry}</span>
              <span className="block mt-0.5 truncate">{c.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Case Detail Display */}
        {(() => {
          const current = forensicCases[selectedCase];
          return (
            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                <h4 className="text-sm font-bold text-white font-mono">{current.title}</h4>
                <span className="text-xs font-mono text-slate-400">{current.industry}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 5 Ground Complaints */}
                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                    <AlertTriangle className="w-4 h-4" /> Las 5 Quejas Repetitivas (Data Cualitativa)
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {current.fiveComplaints.map((q, i) => (
                      <li key={i} className="bg-slate-950/60 p-2 rounded border border-slate-800/60 leading-relaxed font-mono">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2 Metrics in Freefall */}
                <div className="space-y-3 flex flex-col justify-between">
                  <div className="bg-slate-900/80 p-4 rounded-lg border border-rose-900/40 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                      <Activity className="w-4 h-4" /> Las 2 Métricas en Caída Libre (La Hemorragia)
                    </div>
                    <div className="space-y-2">
                      {current.twoMetricsInFreefall.map((m, i) => (
                        <div key={i} className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-between gap-2 text-xs">
                          <span className="font-mono text-white font-bold">{m.metric}</span>
                          <span className="font-mono text-rose-400 font-semibold text-right">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Isolated Root Cause */}
                  <div className="bg-teal-950/50 p-4 rounded-lg border border-teal-800/50 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-teal-400 font-bold block">
                      Causa Raíz Aislada por Triangulación Forense:
                    </span>
                    <p className="text-xs font-mono font-bold text-white leading-snug">
                      {current.isolatedRootCause}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Plan in 72h */}
              <div className="bg-emerald-950/40 p-3.5 rounded-lg border border-emerald-900/40 text-xs font-mono text-emerald-200">
                <strong className="text-emerald-400 block mb-1">Prescripción de Intervención en 72 Horas:</strong>
                {current.action72h}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Language Toggle & DM Scripts Vault */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-sky-400" />
              Scripts de Contacto Directo (Cero Fricción • Par a Par)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Copias listas para enviar a Operating Partners de Private Equity y Founders de TaaS:
            </p>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800 self-start sm:self-center">
            <Globe className="w-4 h-4 text-slate-400 ml-1.5" />
            <button
              onClick={() => setLang('ES')}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                lang === 'ES' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Español
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                lang === 'EN' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              English (Operating Partners)
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {currentScripts.map((script, idx) => (
            <div key={idx} className="bg-slate-950 p-4 sm:p-5 rounded-lg border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/60">
                    {script.target}
                  </span>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    Destinatario: <strong className="text-slate-200">{script.recipient}</strong>
                  </span>
                </div>
                <button
                  onClick={() => copyText(script.body, idx)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition-all"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">{lang === 'EN' ? 'Copied!' : '¡Copiado!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === 'EN' ? 'Copy Message' : 'Copiar Mensaje'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400">
                <span>{lang === 'EN' ? 'Subject line: ' : 'Asunto sugerido: '}</span>
                <strong className="text-white font-sans">{script.subject}</strong>
              </div>

              <div className="bg-slate-900/90 p-4 rounded border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {script.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hoja de Ruta de Autoejecución en 3 Días */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Hoja de Ruta de Autoejecución: De 0 a Producción en 72 Horas
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Cómo consumirlo sin preguntar nada</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">DÍA 01 • DIAGNÓSTICO</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <h4 className="text-sm font-bold text-white">Ejecutar el Divergence Audit</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Abre la pestaña <strong className="text-teal-300">Divergence Audit</strong>. Pasa a tu cliente o a tu propia empresa por las 4 Lentes (Mercado, Capacidad, Sistema, Decisión). Identifica dónde se separa lo que dicen de lo que hacen.
            </p>
            <div className="pt-2 text-[11px] font-mono text-amber-300/90 border-t border-slate-900">
              Output: Una página con la ruptura real y el costo semanal del "burnt" oculto.
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-400 font-bold">DÍA 02 • ARQUITECTURA</span>
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            </div>
            <h4 className="text-sm font-bold text-white">Elegir la Unidad de Capacidad</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Si eres <strong className="text-emerald-300">TaaS</strong>: Ve a <strong className="text-emerald-300">Splendor</strong> y fija la oferta en $300/sem contra costo de $150 con SLA de tickets.
              <br />
              Si estás en <strong className="text-sky-300">M&A</strong>: Ve a <strong className="text-sky-300">JJ Modular</strong> y corta departamentos fijos convirtiéndolos en células.
            </p>
            <div className="pt-2 text-[11px] font-mono text-sky-300/90 border-t border-slate-900">
              Output: Unidad económica fija desacoplada de horas.
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-bold">DÍA 03 • NEGOCIACIÓN & BLINDAJE</span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>
            <h4 className="text-sm font-bold text-white">Aplicar Ackerman & Dependencia Invertida</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Usa la pestaña <strong className="text-amber-300">Singularity</strong> para cerrar con la secuencia 65-85-95-100%. Usa el <strong className="text-teal-300">Protocolo de Dependencia Invertida</strong> para dejar claro que tú no eres su empleado.
            </p>
            <div className="pt-2 text-[11px] font-mono text-amber-300/90 border-t border-slate-900">
              Output: Contrato cerrado con límites y sin dependencia de héroes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
