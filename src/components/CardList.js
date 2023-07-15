import { useEffect } from "react";

import EmojiCard from "./EmojiCard";
import LoadingSkelton from "./LoadingSkelton";
import { useState } from "react";
import { Grid } from "@mui/material";
const CardList = ({ data, loading, error }) => {
  if (loading) {
    return <LoadingSkelton />;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {data?.length > 0 &&
        data?.map(({ name, category, group, htmlCode, unicode }, index) => {
          return (
            <Grid key={index} item lg={4}>
              <EmojiCard
                name={name}
                category={category}
                group={group}
                htmlCode={htmlCode}
                unicode={unicode}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
export default CardList;
