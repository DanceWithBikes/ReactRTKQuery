import React from "react";
import {
  Card,
  Typography,
  Link,
  Chip,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import './index.less';
import {useNavigate} from "react-router-dom";

const RepoCard = React.memo(function RepoCard({ repo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repositories/${repo.owner.login}/${repo.name}`);
  };

  return (
    <Card
      onClick={handleClick}
      variant="outlined"
      className={'card'}
      sx={{ cursor: 'pointer' }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar
          src={repo.owner?.avatar_url}
          alt={repo.owner?.login}
          sx={{ width: 32, height: 32, mr: 1 }}
        />
        <Box>
          <Typography variant="subtitle2" noWrap>
            <Link
              href={repo.html_url}
              target="_blank"
              underline="hover"
              color="primary"
            >
              {repo.name} <OpenInNewIcon fontSize="inherit" />
            </Link>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {repo.owner?.login}
          </Typography>
        </Box>
      </Box>

      {repo.description && (
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          sx={{ mb: 1 }}
        >
          {repo.description}
        </Typography>
      )}

      <Stack direction="row" spacing={1} flexWrap="wrap" mt="auto">
        <Chip
          icon={<StarIcon fontSize="small" />}
          label={repo.stargazers_count}
          size="small"
        />
        {repo.language && (
          <Chip
            icon={<CodeIcon fontSize="small" />}
            label={repo.language}
            size="small"
          />
        )}
        <Chip
          icon={<AccessTimeIcon fontSize="small" />}
          label={new Date(repo.updated_at).toLocaleDateString()}
          size="small"
        />
      </Stack>
    </Card>
  );
});

export default RepoCard;
