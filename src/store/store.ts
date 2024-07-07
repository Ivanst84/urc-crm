import create from 'zustand';

interface Member {
    id: number;
    name: string;
    gender: string;
    age: number;
    email: string;
    phone: string | null;  // Cambiar esto    routeId: number | null;
  }
interface MemberStore {
  members: Member[];
  showForm: boolean;
  toggleForm: () => void;
  setMembers: (members: Member[]) => void;
}

export const useMemberStore = create<MemberStore>((set) => ({
  members: [],
  showForm: false,
  toggleForm: () => set((state) => ({ showForm: !state.showForm })),
  setMembers: (members) => set({ members }),
}));
