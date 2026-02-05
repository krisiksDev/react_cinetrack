import React, { createContext, useContext, useEffect, useState } from "react";
import type { Movie } from "../types/movie";

type HistoryContextValue = {
  history: Movie[];
  addToHistory: (movie: Movie) => void;
  removeFromHistory: (id: number) => void;
  toggleHistory: (movie: Movie) => void;
  clearHistory: () => void;
  isInHistory: (id: number) => boolean;
};

const HistoryContext = createContext<HistoryContextValue | undefined>(undefined);

const STORAGE_KEY = "cinetrack_history";

function readHistoryFromStorage(): Movie[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Movie[]) : [];
  } catch (err) {
    console.warn("[HistoryContext] Impossible de lire localStorage:", err);
    return [];
  }
}

function writeHistoryToStorage(history: Movie[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (err) {
    console.warn("[HistoryContext] Impossible d'écrire dans localStorage:", err);
  }
}

export const HistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<Movie[]>(() => readHistoryFromStorage());

  useEffect(() => {
    writeHistoryToStorage(history);
  }, [history]);

  const addToHistory = (movie: Movie) => {
    setHistory((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [movie, ...prev];
    });
  };

  const removeFromHistory = (id: number) => {
    setHistory((prev) => prev.filter((m) => m.id !== id));
  };

  const toggleHistory = (movie: Movie) => {
    setHistory((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      return exists
        ? prev.filter((m) => m.id !== movie.id)
        : [movie, ...prev];
    });
  };

  const clearHistory = () => setHistory([]);

  const isInHistory = (id: number) => history.some((m) => m.id === id);

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory,
        removeFromHistory,
        toggleHistory,
        clearHistory,
        isInHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const ctx = useContext(HistoryContext);
  if (!ctx) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return ctx;
};
