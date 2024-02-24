import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  question: {
    label: "What is your name?",
    type: "text",
    required: true,
    value: "",
    comment: ""
  },
  incrementCount: () => set((state) => ({ counter: state.counter + 1 })),
  decrementCount: () => set((state) => ({ counter: state.counter - 1 })),
  setQuestion: (updatedKey) =>
    set((state) => ({
      question: { ...state.question, ...updatedKey }
    }))
}));
