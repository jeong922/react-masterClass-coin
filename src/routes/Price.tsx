import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const PriceList = styled.div``;

const PriceChange = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.listbg};
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  border-radius: 10px;
  span {
    font-weight: 400;
    text-transform: uppercase;
  }
`;

interface IPriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceInfo>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        <Loader>"Loading chart"</Loader>
      ) : (
        <Container>
          <PriceList>
            <PriceChange>
              <span>market cap change 24h</span>
              <span>${data?.quotes.USD.market_cap_change_24h}</span>
            </PriceChange>
            <PriceChange>
              <span>percent change 1h</span>
              <span>${data?.quotes.USD.percent_change_1h}</span>
            </PriceChange>
            <PriceChange>
              <span>percent change 6h</span>
              <span>${data?.quotes.USD.percent_change_6h}</span>
            </PriceChange>
            <PriceChange>
              <span>percent change 12h</span>
              <span>${data?.quotes.USD.percent_change_12h}</span>
            </PriceChange>
            <PriceChange>
              <span>percent change 24h</span>
              <span>${data?.quotes.USD.percent_change_24h}</span>
            </PriceChange>
            <PriceChange>
              <span>percent change 7days</span>
              <span>${data?.quotes.USD.percent_change_7d}</span>
            </PriceChange>
          </PriceList>
        </Container>
      )}
    </div>
  );
}

export default Price;
