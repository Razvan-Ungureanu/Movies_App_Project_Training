import { useEffect, useState } from "react";

// Functia pe care o primeste UseState se executa o singura data la primul render
export default function useWatchlist(storageKey = "watchlist") {
  const [watchlistIds, setWatchlistIds] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
    // Aici pur si simplu dupa JSON.parse ramane in watchlist: [1, 2, 3]
  });

  //De fiecare data cand se schimba watchlistIds, salveaza noua valoare in localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(watchlistIds));
    } catch {

    }
  }, [storageKey, watchlistIds]);

  //Verific daca exista id-ul in array
  const isInWatchlist = (id) => watchlistIds.includes(id);

  const add = (id) => {
    setWatchlistIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const remove = (id) => {
    setWatchlistIds((prev) => prev.filter((x) => x !== id));
  };

  //Daca exista id-ul, il elimina, daca nu exista, il adauga
  const toggle = (id) => {
    setWatchlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return { watchlistIds, isInWatchlist, add, remove, toggle };
}