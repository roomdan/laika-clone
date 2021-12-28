import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingLayout() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={4} precision={0.5} />
    </Stack>
  );
}