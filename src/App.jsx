import { useState } from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './app.css';
import { CouponContext } from './context/context.js';

import BetLayout from './components/Layout/BetLayout.jsx';

const queryClient = new QueryClient();


const App = () => {
  const [coupon, setCoupon] = useState([]);

  const updateCoupon = (bet, rate, rateIndex) => {
    const activeBetIndex = coupon?.findIndex((match) => match.id === bet.id);
    if (activeBetIndex === -1) {
      const { id, teamNames, mbs } = bet;
      const betTmp = { id, teamNames, mbs, rate, rateIndex };
      coupon.length ? setCoupon([...coupon, betTmp]) : setCoupon([betTmp]);

    } else {
      if (coupon[activeBetIndex].rate === rate) {
        setCoupon(coupon.toSpliced(activeBetIndex, 1));
      } else {
        const betTmp = coupon;
        betTmp[activeBetIndex].rate = rate;
        betTmp[activeBetIndex].rateIndex = rateIndex;
        setCoupon([...betTmp]);
      }

    }
  };

  const data = { coupon, updateCoupon };

  return (
    <QueryClientProvider client={queryClient}>
      <CouponContext.Provider value={data}>
        <BetLayout />
      </CouponContext.Provider>
    </QueryClientProvider>
  );
};

export default App;