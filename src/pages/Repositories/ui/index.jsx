import React from "react";
import RepositoriesList from "@features/repositories/RepositoriesList/ui";
import { RepositoriesSearch } from "@features/repositories/RepositoriesSearch/ui";
import useRepositories from "@features/repositories/model/hooks/useFetchReposQuery";
import { Pagination } from "@widgets/pagination/ui";

function RepositoriesPage() {
  const { ...queryMetaData } = useRepositories();
  return (
    <div>
      <RepositoriesSearch {...queryMetaData} />
      <RepositoriesList {...queryMetaData} />
      <Pagination {...queryMetaData}/>
    </div>
  );
}

export default RepositoriesPage;
