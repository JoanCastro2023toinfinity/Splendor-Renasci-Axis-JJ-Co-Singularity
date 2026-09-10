import React, { useState } from 'react';
import { TRANSVERSAL_MATRICES } from '../data/matricesData';
import { TransversalMatrix } from '../types/playbook';
import { Grid3X3, Search, Copy, Check, User, Sparkles, GraduationCap, ArrowRight, Tag } from 'lucide-react';

export const TransversalMatrices: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeAdaptation, setActiveAdaptation] = useState<'operator' | 'child' | 'harvard'>('operator');
  const [copied, setCopied] = useState<boolean>(false);

  // Extract unique categories
  const allCategories = Array.from(
    new Set(TRANSVERSAL_MATRICES.flatMap((m) => m.categories))
  );

  // Filter matrices
  const filteredMatrices = TRANSVERSAL_MATRICES.filter((m) => {
    const matchesSearch =
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.simplifiedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.mechanism.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || m.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const currentMatrix: TransversalMatrix =
    TRANSVERSAL_MATRICES.find((m) => m.id === selectedId) || TRANSVERSAL_MATRICES[0];

  const copyToClipboard = () => {
    let text = `# ${currentMatrix.code}: ${currentMatrix.title}\n`;
    text += `Nombre simplificado: ${currentMatrix.simplifiedName}\n`;
    text += `Mecanismo: ${currentMatrix.mechanism}\n\n`;
    text += `Eje Vertical: ${currentMatrix.verticalAxis}\n`;
    text += `Eje Horizontal: ${currentMatrix.horizontalAxis}\n\n`;
    text += `| ${currentMatrix.headers.join(' | ')} |\n`;
    text += `| ${currentMatrix.headers.map(() => '---').join(' | ')} |\n`;
    currentMatrix.rows.forEach((r) => {
      text += `| ${r.label} | ${r.cells.join(' | ')} |\n`;
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Grid3X3 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Catálogo Transversal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Las 20 Matrices del Ecosistema</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            20 Cuadros con Preguntas Diagnósticas
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre, código (M-001...) o mecanismo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-mono"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-teal-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Todas (20)
            </button>
            {allCategories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Selector List + Active Matrix Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Selector List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
          {filteredMatrices.map((m) => {
            const isSelected = selectedId === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-teal-500 ring-1 ring-teal-500/40 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800/60">
                    {m.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">#{m.id}</span>
                </div>
                <h4 className="text-xs font-bold text-white mt-1.5 line-clamp-1">{m.title}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{m.simplifiedName}</p>
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  {m.categories.slice(0, 2).map((c, i) => (
                    <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Matrix Detail & Interactive Table */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          {/* Matrix Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                  {currentMatrix.code}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Nombre Simplificado: <strong className="text-slate-200">{currentMatrix.simplifiedName}</strong>
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">{currentMatrix.title}</h3>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-all border border-slate-700 self-start sm:self-center"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? '¡Copiado a portapapeles!' : 'Copiar Tabla'}</span>
            </button>
          </div>

          {/* Mechanism & Axes */}
          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="font-mono uppercase text-slate-400 font-bold block mb-1">Mecanismo de Uso en 1 Frase:</span>
              <p className="text-slate-200 leading-relaxed">{currentMatrix.mechanism}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-teal-400 block font-bold">Eje Vertical (Filas):</span>
                <span className="text-slate-300 text-xs">{currentMatrix.verticalAxis}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-teal-400 block font-bold">Eje Horizontal (Columnas):</span>
                <span className="text-slate-300 text-xs">{currentMatrix.horizontalAxis}</span>
              </div>
            </div>
          </div>

          {/* The Complete Table with Cell Questions */}
          <div className="overflow-x-auto rounded-lg border border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-teal-400 font-mono">
                  {currentMatrix.headers.map((h, i) => (
                    <th key={i} className="p-3 font-semibold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                {currentMatrix.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-3 font-mono font-bold text-white bg-slate-950/80 whitespace-nowrap border-r border-slate-800">
                      {row.label}
                    </td>
                    {row.cells.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 text-slate-300 leading-relaxed">
                        {cell.startsWith('¿') ? (
                          <span className="text-amber-300/90 font-mono italic">{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Adaptations Lens: Operator vs 7yo Child vs Harvard/Oxford */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Lente de Comprensión & Aplicación Adaptada:
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveAdaptation('operator')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeAdaptation === 'operator'
                      ? 'bg-teal-600 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3 h-3" /> Para el Operador
                </button>
                <button
                  onClick={() => setActiveAdaptation('child')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeAdaptation === 'child'
                      ? 'bg-teal-600 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3" /> Para Niño (7 Años)
                </button>
                <button
                  onClick={() => setActiveAdaptation('harvard')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeAdaptation === 'harvard'
                      ? 'bg-teal-600 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3 h-3" /> Advisor Harvard
                </button>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded border border-slate-800">
              {activeAdaptation === 'operator' && (
                <div>
                  <strong className="text-teal-400 font-mono block mb-1">Enfoque de Ejecución (Operador / Bogotá):</strong>
                  {currentMatrix.adaptations.forOperator}
                </div>
              )}
              {activeAdaptation === 'child' && (
                <div>
                  <strong className="text-amber-400 font-mono block mb-1">Cuento Mágico (El Niño en África):</strong>
                  {currentMatrix.adaptations.forChild7yo}
                </div>
              )}
              {activeAdaptation === 'harvard' && (
                <div>
                  <strong className="text-sky-400 font-mono block mb-1">Academic Rigor (Harvard / Oxford Advisor):</strong>
                  {currentMatrix.adaptations.forHarvardAdvisor}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
