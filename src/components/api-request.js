import { Box } from "@mui/material";
import * as React from "react";

export default function ApiRequest() {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("none");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  React.useEffect(() => {
    setStatus("loading");
    window
      .fetch("https://rickandmortypi.com/api/character/?page=1")
      .then((res) => res.json())
      .then(
        (res) => {
          setResponse(res.results);
          setStatus("success");
        },
        (error) => {
          setError(error);
          setStatus("error");
        }
      );
  }, []);

  return (
    <Box
      compoent="div"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : isSuccess ? (
        <ul>
          {response?.length
            ? response.map((c) => {
                return <li key={c.id}>{c.name}</li>;
              })
            : null}
        </ul>
      ) : null}
    </Box>
  );
}
