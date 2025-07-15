import { useFetchRepositoriesQuery } from "@features/repositories/model/api";
import { useState } from "react";
import {usePageParam} from "@shared/hooks/usePageParams";

const normalizeOutput = (queryMetaData) => {
  return {
    ...queryMetaData,
    totalCount: queryMetaData.data?.total_count,
    items: queryMetaData.data?.items ?? [],
    isLoading: queryMetaData.isLoading || queryMetaData.isFetching,
    error: queryMetaData.error?.message ?? null,
  };
};

export default function useRepositories() {
  const {page, setPage, query, setSubmittedQuery } = usePageParam();

  const queryMetaData = useFetchRepositoriesQuery({
    query,
    page,
    perPage: 3,
  });

  return {
    page,
    setPage,
    query,
    setSubmittedQuery,
    ...normalizeOutput(queryMetaData),
  };
}
