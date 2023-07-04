export type AuthContextProviderType = {
  children: React.ReactNode;
};

export type AuthContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};
