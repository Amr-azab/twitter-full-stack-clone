import { create } from "zustand";

export const UserIdStore = create((set) => ({
  userProfile: {},
  setUser: (userProfile) =>
    set({
      userProfile: userProfile,
    }),
}));
