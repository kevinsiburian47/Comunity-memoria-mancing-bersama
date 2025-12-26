
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MemoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const MemoryForm: React.FC<MemoryFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Travel',
    imageUrl: `https://picsum.photos/seed/${Math.random()}/800/1000`
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-xl p-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-3xl text-white">Abadikan Kenangan</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Judul Kenangan</label>
            <input 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors"
              placeholder="Contoh: Sunset di Pantai Kuta"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Deskripsi Singkat</label>
            <textarea 
              required
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors resize-none"
              placeholder="Ceritakan sedikit tentang momen ini..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Tanggal</label>
              <input 
                type="date"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Kategori</label>
              <select 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Travel">Travel</option>
                <option value="Family">Keluarga</option>
                <option value="Love">Cinta</option>
                <option value="Milestone">Pencapaian</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-white text-black font-semibold py-4 rounded-lg mt-4 hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm"
          >
            Simpan Kenangan
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemoryForm;
