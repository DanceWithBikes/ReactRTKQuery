import React from "react";
import { Loader } from "@shared/ui/molecules/Loader";

export default function SafeList({
  data,
  isLoading = false,
  error = null,
  loadingFallback = <Loader />,
  emptyFallback = <p>No data found.</p>,
  errorFallback, // можно передать кастомную ошибку или строку
  renderItem,
  keyExtractor = (item, index) => index,
  as: Wrapper = "div", // кастомный тег-обёртка (ul, div и т.д.)
}) {
  if (isLoading) return loadingFallback;

  if (error) return errorFallback || <p>Error: {error.toString()}</p>;

  if (!Array.isArray(data) || data.length === 0) return emptyFallback;

  return (
    <Wrapper>
      {data.map((item, index) => (
        <React.Fragment key={keyExtractor(item, index)}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}
