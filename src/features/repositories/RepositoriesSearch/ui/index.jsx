import React, { useState } from "react";
import './index.less';
import { Box, Button, TextField } from "@mui/material";

export const RepositoriesSearch = ({ query, setSubmittedQuery }) => {
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(input);
  };

  const handleOnChange = (e) => setInput(e.target.value);

  return (
    <form
      onSubmit={handleSubmit}
      className={'form'}
    >
      <Box className={'inputWrapper'}>
        <TextField
          fullWidth
          label="Search GitHub Repos"
          variant="outlined"
          value={input}
          required
          onChange={handleOnChange}
        />
        <Button sx={{ mt: 2 }} variant="contained" type="submit">
          Search
        </Button>
      </Box>
    </form>
  );
};
