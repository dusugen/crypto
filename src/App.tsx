import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CoinTable from "./components/CoinTable/CoinTable";
import { request, useResource } from "react-request-hook";
import { IDataProps, IPagination, TFilters } from "./types";
import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/shared/Loader/Loader";
import config from "../src/config.json";
import { Route, Routes } from "react-router-dom";
import CoinPage from "./components/CoinTable/components/CoinPage/CoinPage";

const webSocket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2&api_key=${config.apiToken}`
);

const App: React.FC = React.memo(() => {
  const [data, getData] = useResource(() =>
    request<IDataProps>({
      url: `/top/totaltoptiervolfull?${searchParams}`,
      method: "get",
    })
  );

  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    limit: 10,
    count: 0,
  });

  const onPagination = useCallback(
    (value: Partial<IPagination>) => {
      setPagination({ ...pagination, ...value });
    },
    [pagination]
  );

  const [filters, setFilters] = useState<TFilters>({
    currency: "USD",
    rating: "desc",
  });

  const onFiltering = useCallback(
    (params: Partial<TFilters>) => {
      setFilters({ ...filters, ...params });
    },
    [filters]
  );

  useEffect(() => {
    if (!data.data) {
      return;
    }

    setPagination((pagination) => ({
      ...pagination,
      count: data.data?.MetaData.Count ?? 0,
    }));
  }, [data]);

  const searchParams = new URLSearchParams({
    limit: String(pagination.limit),
    page: String(pagination.page - 1),
    tsym: filters.currency,
    ascending: String(filters.rating === "desc"),
  }).toString();

  useEffect(() => {
    getData();
  }, [
    filters.currency,
    filters.rating,
    pagination.page,
    pagination.limit,
    getData,
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = useCallback(
    (value: boolean): void => {
      setSidebarOpen(value);
    },
    [setSidebarOpen]
  );
  return (
    <Container maxWidth="xl">
      <Header
        sidebar={isSidebarOpen}
        handleSidebar={handleSidebar}
        resetPagination={onPagination}
      />
      <Sidebar
        sidebar={isSidebarOpen}
        handleSidebar={handleSidebar}
        filters={filters}
        onFiltering={onFiltering}
      />
      {data.isLoading ? (
        <Loader />
      ) : data?.data ? (
        <Routes>
          <Route
            path="/"
            element={
              <CoinTable
                data={data.data}
                isLoading={data.isLoading}
                pagination={pagination}
                onPagination={onPagination}
              />
            }
          />
          <Route path="/:name" element={<CoinPage />} />
        </Routes>
      ) : null}
    </Container>
  );
});

export default App;
