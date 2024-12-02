import { create } from 'zustand'

type State = {
    scrollingValue: number,
    data: Array<any>
}

type Action = {
    updateScrollValue: (scrollingValue: State['scrollingValue']) => void;
    updateData: (data: State['data']) => void;
}

export const useStore = create<State & Action>((set) => ({
    scrollingValue: 0,
    data: [],
    updateScrollValue: (payload) => set(() => ({ scrollingValue: payload })),
    updateData: (payload) => set(() => ({ data: payload })),

}))
