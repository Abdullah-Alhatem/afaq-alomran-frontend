import { create } from 'zustand'

export const usePropertyCardStore = create((set) => ({
  favorites: {},

  toggleFavorite: (propertyId, isFavorite) =>
    set((state) => ({
      favorites: {
        ...state.favorites,
        [propertyId]: isFavorite,
      },
    })),

  getFavorite: (propertyId) => (state) => state.favorites[propertyId] || false,

  clearFavorites: () => set({ favorites: {} }),
}))
