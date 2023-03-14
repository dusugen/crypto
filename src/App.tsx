import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CoinTable from "./components/CoinTable/CoinTable";
import { request, useResource } from "react-request-hook";
import { IDataProps, IPagination } from "./types";
import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  const [data, getData] = useResource(() =>
    request<IDataProps>({
      url: `/data/top/mktcapfull?limit=10&tsym=USD`,
      method: "get",
    })
  );

  useEffect(() => {
    getData();
  }, []);

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
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = useCallback(
    (value: boolean): void => {
      setSidebarOpen(value);
    },
    [setSidebarOpen]
  );

  return (
    <Container maxWidth="xl">
      <Header handleSidebar={handleSidebar} />
      {data?.data ? (
        <CoinTable
          data={data.data}
          isLoading={data.isLoading}
          pagination={pagination}
          onPagination={onPagination}
        />
      ) : null}
      <Sidebar sidebar={isSidebarOpen} handleSidebar={handleSidebar} />
    </Container>
  );
};

export default App;
