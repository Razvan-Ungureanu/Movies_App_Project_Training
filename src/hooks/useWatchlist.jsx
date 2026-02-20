import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../watchlistSlice";

export default function useWatchlist() {
    const dispatch = useDispatch();
    const watchlistIds = useSelector((state) => state.watchlist.watchlistIds);

    const isInWatchlist = (id) => watchlistIds.includes(id);

    return {
        watchlistIds,
        isInWatchlist,
        toggle: (id) => dispatch(toggle(id)),
    };
}