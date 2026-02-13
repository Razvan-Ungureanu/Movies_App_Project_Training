import { useEffect, useState } from "react";

export default function useWatchlist(storageKey = "watchlist") {
  const [watchlistIds, setWatchlistIds] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(watchlistIds));
    } catch {
      // ignore
    }
  }, [storageKey, watchlistIds]);

  const isInWatchlist = (id) => watchlistIds.includes(id);

  const add = (id) => {
    setWatchlistIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const remove = (id) => {
    setWatchlistIds((prev) => prev.filter((x) => x !== id));
  };

  const toggle = (id) => {
    setWatchlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return { watchlistIds, isInWatchlist, add, remove, toggle };
}