
import React, { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import MemoryCard from './components/MemoryCard.tsx';
import MemoryForm from './components/MemoryForm.tsx';
import { Memory } from './types.ts';

const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'Puncak Gunung Rinjani',
    description: 'Momen tak terlupakan melihat matahari terbit setelah perjalanan 8 jam yang melelahkan namun sepadan.',
    date: '2023-08-15',
    imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=1000',
    category: 'Travel'
  },
  {
    id: '2',
    title: 'Malam Pertama di Paris',
    description: 'Berjalan di sepanjang sungai Seine dengan cahaya lampu kota yang romantis menyinari wajah kita.',
    date: '2022-12-24',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000',
    category: 'Love'
  },
  {
    id: '3',
    title: 'Kelulusan Sarjana',
    description: 'Empat tahun perjuangan akhirnya membuahkan hasil. Orang tua tersenyum bangga di barisan depan.',
    date: '2021-06-10',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
    category: 'Milestone'
  }
];

const App: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>(INITIAL_MEMORIES);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleAddMemory = (newMemory: Omit<Memory, 'id'>) => {
    const memory = { ...newMemory, id: Date.now().toString() };
    setMemories([memory, ...memories]);
    setIsFormOpen(false);
  };

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      {/* Header */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-black rounded-full"></div>
          </div>
          <h1 className="font-serif text-2xl tracking-tighter">ETERNA</h1>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Koleksi</a>
          <a href="#" className="hover:text-white transition-colors">Timeline</a>
          <a href="#" className="hover:text-white transition-colors">Tentang</a>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest transition-all"
        >
          <Plus size={16} />
          <span>SIMPAN</span>
        </button>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 animate-fade-in">
            Digital Memory Sanctuary
          </span>
          <h2 className="font-serif text-5xl md:text-8xl mb-8 leading-tight tracking-tight animate-fade-in [animation-delay:200ms]">
            Setiap detik <br /> <span className="italic text-zinc-500">layak dikenang.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed animate-fade-in [animation-delay:400ms]">
            Simpan momen-momen paling berharga dalam hidup Anda di wadah yang elegan. 
            Abadikan setiap perjalanan emosional Anda dalam bentuk digital.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-900 pb-8">
          <div>
            <h3 className="font-serif text-3xl mb-2">Galeri Kenangan</h3>
            <p className="text-zinc-500 text-sm">Menampilkan {memories.length} momen abadi</p>
          </div>
          <div className="flex gap-2">
            {['Semua', 'Travel', 'Love', 'Milestone'].map(cat => (
              <button key={cat} className="text-[10px] uppercase tracking-widest px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((m) => (
            <MemoryCard key={m.id} memory={m} onClick={handleMemoryClick} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-20 py-20 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl mb-2">Eterna</h4>
            <p className="text-zinc-500 text-sm italic">"Time heals, but memories keep us alive."</p>
          </div>
          <div className="flex gap-8 text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Email</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 text-center text-zinc-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Eterna Vault. Dibuat dengan cinta dan nostalgia.
        </div>
      </footer>

      {/* Memory Detail Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in">
          <button 
            onClick={() => setSelectedMemory(null)}
            className="absolute top-10 right-10 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[80vh]">
              <img 
                src={selectedMemory.imageUrl} 
                alt={selectedMemory.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 block mb-4">
                  {new Date(selectedMemory.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">{selectedMemory.title}</h2>
                <div className="w-20 h-px bg-zinc-800 mb-6"></div>
                <p className="text-zinc-300 leading-relaxed text-xl">
                  {selectedMemory.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                  Kategori: {selectedMemory.category}
                </span>
              </div>

              <button 
                onClick={() => setSelectedMemory(null)}
                className="flex items-center gap-3 text-white text-xs uppercase tracking-widest font-semibold pt-10 group"
              >
                <span>KEMBALI KE KOLEKSI</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Forms */}
      <MemoryForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        onSubmit={handleAddMemory} 
      />
    </div>
  );
};

export default App;
