import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchRepositoryByNameQuery } from '@features/repositories/model/api';
import {
  Box,
  Typography,
  Link,
  Chip,
  Stack,
  Button
} from '@mui/material';
import {Loader} from "@shared/ui/molecules/Loader";

const RepositoryDetailsPage = () => {
  const { owner, repo } = useParams();

  const navigate = useNavigate();
  const { data, isLoading, error } = useFetchRepositoryByNameQuery({ owner, repo });

  if (isLoading) return <Box p={4}><Loader/></Box>;
  if (error) return <Box p={4}><Typography color="error">Error: {error.message}</Typography></Box>;

  return (
    <Box p={4}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h4" gutterBottom>{data.full_name}</Typography>

      <Typography variant="body1" gutterBottom>{data.description}</Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        <Chip label={`⭐ Stars: ${data.stargazers_count}`} />
        <Chip label={`🍴 Forks: ${data.forks_count}`} />
        <Chip label={`👁 Watchers: ${data.watchers_count}`} />
        {data.language && <Chip label={`💻 Language: ${data.language}`} />}
        {data.license?.name && <Chip label={`📜 License: ${data.license.name}`} />}
        <Chip label={`🕒 Updated: ${new Date(data.updated_at).toLocaleString()}`} />
      </Stack>

      <Typography variant="subtitle1">Owner:</Typography>
      <Link href={data.owner.html_url} target="_blank">
        {data.owner.login}
      </Link>

      <Typography mt={3} variant="subtitle1">Clone URLs:</Typography>
      <Typography variant="body2">HTTPS: <code>{data.clone_url}</code></Typography>
      <Typography variant="body2">SSH: <code>{data.ssh_url}</code></Typography>

      <Box mt={3}>
        <Link href={data.html_url} target="_blank" rel="noopener" underline="hover">
          View on GitHub →
        </Link>
      </Box>
    </Box>
  );
};

export default RepositoryDetailsPage;