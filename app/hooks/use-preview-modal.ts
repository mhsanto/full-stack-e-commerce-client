import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStoreProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStoreProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));
export default usePreviewModal;