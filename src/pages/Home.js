import {
  Container,
  Typography,
  Autocomplete,
  TextField,
  Pagination,
  Stack,
} from "@mui/material";
import CardList from "../components/CardList";
import useFetch from "../hooks/useFetch";
import { CATEGORIES } from "../constants/categories";
import { useEffect, useState } from "react";
const Home = () => {
  const { apiData, loading, error } = useFetch();
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const filterData = (searchTerm) => {
    if (searchTerm === "" || searchTerm == null) {
      setData(apiData);
    } else {
      const filteredData = apiData.filter(
        (emoji) => emoji?.category === searchTerm
      );

      setData(filteredData);
    }
  };
  const handleChange = (event, value) => {
    setCurrentPage(value);
    const paginatedData = apiData.slice((value - 1) * 10, value * 10);
    setData(paginatedData);
  };
  useEffect(() => {
    const count = Math.floor(apiData?.length / 10);
    setPageCount(count);
    setData(apiData?.slice(0, 10));
  }, [apiData]);
  return (
    <Container>
      <Typography variant="h1" mb={2}>
        Emoji App
      </Typography>
      <Stack m={3}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            filterData(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          disablePortal
          id="category-search"
          options={CATEGORIES}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Enter Category" />
          )}
        />
      </Stack>
      <CardList data={data} loading={loading} error={error} />
      <Stack m={3}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};
export default Home;
