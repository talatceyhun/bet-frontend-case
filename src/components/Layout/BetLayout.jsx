import { useQuery } from '@tanstack/react-query';

import BetTable from '../Table/BetTable.jsx';
import Coupon from '../Coupon/Coupon.jsx';


function BetLayout() {

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    retry: 2,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    queryFn: () =>
      fetch('https://nesine-case-study.onrender.com/bets').then(async (res) => {
        const bets = await res.json();
        const mappingBets = bets.map((bet) => {
          const id = bet.C;
          const teamNames = bet.N;
          const matchSummary = `${bet.D} ${bet.DAY} ${bet.LN}`;
          const matchTeams = `${bet.C} ${bet.T} ${bet.N}`;
          const mbs = bet.OCG['1'].MBS;
          const comments = 'Yorumlar';
          const homeTeamWinRate = bet.OCG['1'].OC['0'].O;
          const equalityRate = bet.OCG['1'].OC['1'].O;
          const altRate = bet.OCG['5'].OC['25'].O;
          const ustRate = bet.OCG['5'].OC['26'].O;
          const oneToXRate = bet.OCG['2'].OC['3'].O;
          const oneToTwoRate = bet.OCG['2'].OC['4'].O;
          const xToTwoRate = bet.OCG['2'].OC['5'].O;
          return { id, teamNames, matchSummary, matchTeams, mbs, comments, homeTeamWinRate, equalityRate, altRate, ustRate, oneToXRate, oneToTwoRate, xToTwoRate };
        });
        return mappingBets;
      }),
  });

  if (isPending) return ('Loading...');

  if (error) return ('Error');

  return (
    <>
      <BetTable bets={data} />
      <Coupon />
    </>
  );
}

export default BetLayout;