import React, { useEffect } from "react";
import { request, useResource } from "react-request-hook";
import { ICoinData } from "../../../../types";
import CoinData from "./components/CoinData";
import Loader from "../../../shared/Loader/Loader";

const CoinPage = () => {
  const currentCoin = document.location.pathname.replace("/", "");

  const [coinData, getCoinData] = useResource(() =>
    request<ICoinData>({
      url: `/pricemultifull?fsyms=${currentCoin}&tsyms=USD,EUR,GBP`,
      method: "get",
    })
  );

  useEffect(() => {
    getCoinData();
  }, [getCoinData]);

  return (
    <div>
      {coinData.isLoading ? (
        <Loader />
      ) : coinData.data ? (
        <CoinData data={coinData.data} coinName={currentCoin} />
      ) : null}
    </div>
  );
};

export default CoinPage;
