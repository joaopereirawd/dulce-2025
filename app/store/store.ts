import { create } from 'zustand'

type State = {
    scrollingValue: number,
}

type Action = {
    updateScrollValue: (scrollingValue: State['scrollingValue']) => void;
}

export const useStore = create<State & Action>((set) => ({
    scrollingValue: 0,
    updateScrollValue: (payload) => set(() => ({ scrollingValue: payload })),
}))
