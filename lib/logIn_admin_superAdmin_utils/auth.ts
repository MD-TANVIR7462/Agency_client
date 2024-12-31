// Auth utility functions
export function getUserFromStorage() {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  const user = getUserFromStorage();
  return !!user;
}

export function isSuperAdmin() {
  const user = getUserFromStorage();
  return user?.role === "super_admin";
}

export function getRole() {
  const user = getUserFromStorage();
  return user?.role || null;
}