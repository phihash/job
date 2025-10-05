import { create } from "zustand";

export type ProfileState = {
  status: string;
  setStatus: (status: string) => void;
  event: "" | "退職のみ" | "引越しのみ" | "退職と引越し";
  setEvent: (event: "" | "退職のみ" | "引越しのみ" | "退職と引越し") => void;
};

const useProfileStore = create<ProfileState>((set) => ({
  status: "はじめる",
  setStatus: (status) => set({ status }),
  event: "",
  setEvent: (event) =>
    set({ event: event as "" | "退職のみ" | "引越しのみ" | "退職と引越し" }),
}));

export default useProfileStore;
