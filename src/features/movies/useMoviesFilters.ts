import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";

import { fetchMovies } from "../../store/moviesReducers/ActionCreatorsMovies";
import { moviesSlice } from "../../store/moviesReducers/MoviesSlice";

import { movieGenres } from "../../data/movieGenres";
import { movieCountries } from "../../data/movieCountries";
import { movieTypes } from "../../data/movieTypes";
import { movieOrders } from "../../data/movieOrders";

import { IFiltersFormData } from "../../types/IFiltersFormData";

interface useSetFiltersArguments {
  inView: boolean;
  isShortMoviesIncluded: boolean;
  ratingValue: number[];
  yearsValue: number[];
  isShowFilters: boolean;
}

export function useMoviesFilters({
  inView,
  ratingValue,
  yearsValue,
  isShortMoviesIncluded,
  isShowFilters,
}: useSetFiltersArguments) {
  const [searchParams, setSearchParams] = useSearchParams();

  const refCurrentPage = useRef(1);

  const dispatch = useAppDispatch();

  const keyword = searchParams.get("keyword");
  const genreId = searchParams.get("genreId");
  const countryId = searchParams.get("countryId");
  const ratingFrom = searchParams.get("ratingFrom");
  const ratingTo = searchParams.get("ratingTo");
  const yearFrom = searchParams.get("yearFrom");
  const yearTo = searchParams.get("yearTo");
  const type = searchParams.get("type");
  const order = searchParams.get("order");

  useEffect(() => {
    if ((searchParams.size !== 0 && refCurrentPage.current === 1) || inView) {
      dispatch(
        fetchMovies({
          keyword,
          genreId,
          countryId,
          page: refCurrentPage.current.toString(),
          ratingFrom,
          ratingTo,
          yearFrom,
          yearTo,
          type,
          order,
          isShortMoviesIncluded,
        }),
      );
      refCurrentPage.current += 1;
    }
  }, [
    countryId,
    dispatch,
    genreId,
    inView,
    keyword,
    order,
    ratingFrom,
    ratingTo,
    searchParams.size,
    type,
    yearFrom,
    yearTo,
    isShortMoviesIncluded,
  ]);

  function onSubmit(data: IFiltersFormData) {
    const genreId = movieGenres
      .filter((genreObj) => genreObj.genre === data.genre)
      .at(0)?.id;

    const countryId = movieCountries
      .filter((countryObj) => countryObj.country === data.country)
      .at(0)?.id;

    const typeValue = movieTypes
      .filter((typeObj) => typeObj.name === data.type)
      .at(0)?.value;

    const order = movieOrders
      .filter((orderObj) => orderObj.name === data.order)
      .at(0)?.value;

    dispatch(moviesSlice.actions.moviesSetCurrentPage(1));

    data.keyword
      ? searchParams.set("keyword", data.keyword)
      : searchParams.set("keyword", "");
    searchParams.set("shortFilms", isShortMoviesIncluded.toString());
    searchParams.set("order", order!);

    if (isShowFilters) {
      searchParams.set("genreId", genreId!.toString());
      searchParams.set("countryId", countryId!.toString());
      searchParams.set("ratingFrom", ratingValue.at(0)!.toString());
      searchParams.set("ratingTo", ratingValue.at(1)!.toString());
      searchParams.set("yearFrom", yearsValue.at(0)!.toString());
      searchParams.set("yearTo", yearsValue.at(1)!.toString());
      searchParams.set("type", typeValue!);
    } else {
      searchParams.delete("genreId");
      searchParams.delete("countryId");
      searchParams.delete("ratingFrom");
      searchParams.delete("ratingTo");
      searchParams.delete("yearFrom");
      searchParams.delete("yearTo");
      searchParams.delete("type");
    }

    setSearchParams(searchParams);
    refCurrentPage.current = 1;
  }

  return { onSubmit };
}
