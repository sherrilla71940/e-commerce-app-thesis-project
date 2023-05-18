import { create } from "zustand";

export type RenderProducts = {
  shouldReRender: boolean;
  setRerender: (value: boolean) => void;
};

export const renderProductsStore = create<RenderProducts>((set) => ({
  shouldReRender: false,
  setRerender: (value: boolean) => set({ shouldReRender: value }),
}));

// export type RenderCart = {
//   shouldReRender: boolean;
//   setRerender: (value: boolean) => void;
// };

// export const renderCartStore = create<RenderCart>((set) => ({
//   shouldReRender: false,
//   setRerender: (value: boolean) => set({ shouldReRender: value }),
// }));
