
export interface Memory {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: 'Travel' | 'Family' | 'Love' | 'Milestone';
}

export interface Reflection {
  content: string;
  mood: string;
}
