import { create } from "zustand";
interface useSubribeModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useAuthModal = create<useSubribeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
