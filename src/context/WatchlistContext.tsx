import React, { createContext, useContext, useEffect, useState } from "react";
import type { Movie } from "../types/movie";

type WatchlistContextType = {
  watchlist: Movie[];
  addToWatchlist: (m: Movie) => void;
  removeFromWatchlist: (id: number) => void;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

export const useWatchlist = () => {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be used within WatchlistProvider");
  return ctx;
};

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    try {
      const raw = localStorage.getItem("watchlist");
      return raw ? (JSON.parse(raw) as Movie[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    } catch {}
  }, [watchlist]);

  const addToWatchlist = (m: Movie) => {
    setWatchlist((prev) => {
      if (prev.find((p) => p.id === m.id)) return prev;
      return [...prev, m];
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;