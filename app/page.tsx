"use client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useEffect } from "react";
import { immer } from "zustand/middleware/immer";

interface IBearState {
  bears: number;
  addABear: () => void;
}

const useBearStore = create<IBearState>()(
  immer(
    persist(
      (set) => ({
        bears: 0,
        addABear: () => set((state) => void (state.bears += 1))
      }),
      {
        name: "food-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        skipHydration: true
      }
    )
  )
);

export default function Home() {
  const bearStore = useBearStore();
  useEffect(() => void useBearStore.persist.rehydrate(), []);
  return (
    <main>
      <div className="bg-orange-200 text-2xl">hello world</div>
      <div>{bearStore.bears}</div>
      <div>
        <button onClick={bearStore.addABear}>click</button>
      </div>
    </main>
  );
}
