import { create } from "zustand";

interface IUser {
  email: string;
  phone_number?: string;
  company_name?: string;
}

interface IAuthState {
  user: IUser | undefined | null;
  setUser: (user: IUser) => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  user: undefined,
  setUser: (user) => set((state) => ({ ...state, user })),
}));

export default useAuthStore;
