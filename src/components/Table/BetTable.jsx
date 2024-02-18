import { TableVirtuoso } from 'react-virtuoso';
import BetTableHeader from './BetTableHeader.jsx';
import BetTableRow from './BetTableRow.jsx';


function BetTable({ bets }) {

  return (
    <TableVirtuoso
      useWindowScroll
      data={bets}
      fixedHeaderContent={() => (
        <BetTableHeader />
      )}
      itemContent={(index) => (
        <BetTableRow className=' hover:bg-slate-800' key={bets[index].id} bet={bets[index]} />
      )}
    />
  );
}

export default BetTable;