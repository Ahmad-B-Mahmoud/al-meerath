// The Step One -- Gender Slice

export const gender = (set) => ({
  gender: "male",
  setGender: (value) => set({ gender: value }),
  resetGender: () => set({ gender: "male" }),
});
