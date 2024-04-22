// The Contact form Store Slice
export const contactForm = (set) => ({
  // For open & close the Form Dialog:
  contactForm: false,
  openContactForm: () => set(() => ({ contactForm: true })),
  closeContactForm: () => set(() => ({ contactForm: false })),

  // Form data:
  fullName: "",
  addFullName: (name) => set(() => ({ fullName: name })),
  email: "",
  addEmail: (mail) => set(() => ({ email: mail })),
  bodyText: "",
  addBodyText: (text) => set(() => ({ bodyText: text })),

  // Reset:
  resetContactFormData: () =>
    set(() => ({ fullName: "", email: "", bodyText: "" })),

  // Notifications Dialog:
  isNotificationDialogOpen: false,
  setIsNotificationDialogOpen: () =>
    set(() => ({ isNotificationDialogOpen: true })),

  notificationSeverity: "info",
  setNotificationSeverity: (value) =>
    set(() => ({ notificationSeverity: value })),

  notificationMessage: "",
  setNotificationMessage: (value) =>
    set(() => ({ notificationMessage: value })),

  resetNotificationDialog: () =>
    set(() => ({
      isNotificationDialogOpen: false,
      notificationSeverity: "info",
      notificationMessage: "",
    })),
});
