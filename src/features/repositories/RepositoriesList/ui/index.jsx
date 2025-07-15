import React from "react";
import SafeList from "@shared/helpers/SafeList";
import { Box } from "@mui/material";
import RepoCard from "@features/repositories/RepositoryCard/ui";

const ReposList = ({ items, isLoading, error }) => (
  <Box sx={{ p: 2 }}>
    <SafeList
      data={items}
      isLoading={isLoading}
      error={error}
      renderItem={(repo) => <RepoCard repo={repo} />}
      keyExtractor={(repo) => repo.id}
    />
  </Box>
);

export default ReposList;
