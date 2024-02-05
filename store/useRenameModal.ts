import { create } from "zustand";

const defaultValues = { id: "", title: "" };

type IRenameModal = {
  isOpen: boolean;
  onClose: () => void;
  initialValues: typeof defaultValues;
  onOpen: (id: string, title: string) => void;
};

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValues: { id, title },
    }),
  onClose: () =>
    set({
      isOpen: false,
    }),
  initialValues: defaultValues,
}));
