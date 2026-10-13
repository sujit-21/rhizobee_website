import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try {
      const stored = localStorage.getItem('rhizobee_admin_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('rhizobee_admin_token') || null;
  });

  const login = (authToken, adminData) => {
    setToken(authToken);
    setAdmin(adminData);
    localStorage.setItem('rhizobee_admin_token', authToken);
    localStorage.setItem('rhizobee_admin_user', JSON.stringify(adminData));
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    localStorage.removeItem('rhizobee_admin_token');
    localStorage.removeItem('rhizobee_admin_user');
  };

  // Check token validity on mount
  useEffect(() => {
    if (token) {
      fetch('/api/admin/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (!data.success) {
            logout();
          } else {
            setAdmin(data.admin);
            localStorage.setItem('rhizobee_admin_user', JSON.stringify(data.admin));
          }
        })
        .catch(() => {
          // keep local state if network temporarily unreachable
        });
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ admin, token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
