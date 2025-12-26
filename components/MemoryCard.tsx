
import React from 'react';
import { Memory } from '../types';
import { Calendar, Tag } from 'lucide-react';

interface MemoryCardProps {
  memory: Memory;
  onClick: (memory: Memory) => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onClick }) => {
  return (
    <div 
      onClick={() => onClick(memory)}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img 
          src={memory.imageUrl} 
          alt={memory.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 bg-zinc-800/80 px-2 py-1 rounded">
            {memory.category}
          </span>
        </div>
        <h3 className="font-serif text-2xl text-white mb-1">{memory.title}</h3>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(memory.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
