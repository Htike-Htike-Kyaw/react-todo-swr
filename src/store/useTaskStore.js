import { create } from "zustand";

const useTaskStore = create(()=>({
    tasks: [
        { id: 3, task: 'a Lorem ipsum dolor sit amet.', isDone: true },
        { id: 4, task: 'b Lorem ipsum dolor sit amet.', isDone: false },
        { id: 5, task: 'c Lorem ipsum dolor sit amet.', isDone: true },
        { id: 6, task: 'd Lorem ipsum dolor sit amet.', isDone: false }
    ],
}));