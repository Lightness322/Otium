import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { fetchGames } from "../../store/gamesReducers/ActionCreatorsGames";
import { gamesSlice } from "../../store/gamesReducers/GamesSlice";

import { gameGenres } from "../../data/gameGenres";
import { gamesOrders } from "../../data/gamesOrders";

import { IFiltersFormData } from "../../types/IFiltersFormData";

interface useSetFiltersArguments {
  inView: boolean;
  yearsValue: number[];
  ratingValue: number[];
  isShowFilters: boolean;
}

export function useGamesFilters({
  inView,
  yearsValue,
  ratingValue,
  isShowFilters,
}: useSetFiltersArguments) {
  const [searchParams, setSearchParams] = useSearchParams();

  const refCurrentPage = useRef(1);

  const { games } = useAppSelector((state) => state.gamesReducer);

  const dispatch = useAppDispatch();

  const keyword = searchParams.get("keyword");
  const genreId = searchParams.get("genreId");
  const ratingFrom = searchParams.get("ratingFrom");
  const ratingTo = searchParams.get("ratingTo");
  const yearFrom = searchParams.get("yearFrom");
  const yearTo = searchParams.get("yearTo");
  const order = searchParams.get("order");

  useEffect(() => {
    if ((searchParams.size !== 0 && refCurrentPage.current === 1) || inView) {
      if (games.length < 10 && refCurrentPage.current !== 1) {
        dispatch(gamesSlice.actions.gamesSetTotalPages(1));
      } else {
        dispatch(
          fetchGames({
            keyword,
            genreId,
            page: refCurrentPage.current.toString(),
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            order,
          }),
        );
        refCurrentPage.current += 1;
      }
    }
  }, [
    dispatch,
    games.length,
    genreId,
    inView,
    keyword,
    order,
    ratingFrom,
    ratingTo,
    searchParams.size,
    yearFrom,
    yearTo,
  ]);

  function onSubmit(data: IFiltersFormData) {
    const genreId = gameGenres
      .filter((genreObj) => genreObj.genre === data.genre)
      .at(0)?.id;

    const order = gamesOrders
      .filter((orderObj) => orderObj.name === data.order)
      .at(0)?.value;

    dispatch(gamesSlice.actions.gamesSetCurrentPage(1));

    data.keyword
      ? searchParams.set("keyword", data.keyword)
      : searchParams.set("keyword", "");
    searchParams.set("order", order!);

    if (isShowFilters) {
      searchParams.set("genreId", genreId!.toString());
      searchParams.set("ratingFrom", ratingValue.at(0)!.toString());
      searchParams.set("ratingTo", ratingValue.at(1)!.toString());
      searchParams.set("yearFrom", yearsValue.at(0)!.toString());
      searchParams.set("yearTo", yearsValue.at(1)!.toString());
    } else {
      searchParams.delete("genreId");
      searchParams.delete("ratingFrom");
      searchParams.delete("ratingTo");
      searchParams.delete("yearFrom");
      searchParams.delete("yearTo");
    }

    setSearchParams(searchParams);

    refCurrentPage.current = 1;
  }

  return { onSubmit };
}
