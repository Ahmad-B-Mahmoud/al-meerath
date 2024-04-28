// Notifications Dialog:
export const notification = (set) => ({
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
