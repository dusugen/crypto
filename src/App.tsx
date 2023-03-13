import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CoinTable from "./components/CoinTable/CoinTable";
import { request, Request, useResource } from "react-request-hook";
import { IDataProps } from "./types";
import { Container } from "@mui/material";
import SearchSidebar from "./components/SearchSidebar";

function App() {
  const [data, getData] = useResource(() =>
    request<IDataProps>({
      url: `/data/top/mktcapfull?limit=10&tsym=USD`,
      method: "get",
    })
  );

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = useCallback(
    (value: boolean): void => {
      setSidebarOpen(value);
    },
    [setSidebarOpen]
  );

  useEffect(() => {
    try {
      getData();
    } catch {
      alert("Error");
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Header handleSidebar={handleSidebar} />
      {data?.data ? (
        <CoinTable data={data.data} isLoading={data.isLoading} />
      ) : null}
      <SearchSidebar sidebar={isSidebarOpen} handleSidebar={handleSidebar} />
    </Container>
  );
}

export default App;
