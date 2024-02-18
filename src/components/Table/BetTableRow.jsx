import { CouponContext, useContext } from '../../context/context';

const tableCells = [{ objectKey: 'matchSummary' },
  { objectKey: 'comments' },
  { objectKey: 'mbs' },
  { objectKey: 'homeTeamWinRate', isClick: true },
  { objectKey: 'equalityRate', isClick: true },
  {},
  { objectKey: 'altRate', isClick: true },
  { objectKey: 'ustRate', isClick: true },
  {},
  {},
  {},
  {},
  {},
  { objectKey: 'oneToXRate', isClick: true },
  { objectKey: 'oneToTwoRate', isClick: true },
  { objectKey: 'xToTwoRate', isClick: true },
  {},
  {},
  {},
];

function BetTableRow({ bet }) {
  const { coupon, updateCoupon } = useContext(CouponContext);
  return (
    <>
      {tableCells.map((cell, index) => {
        if (index === 0) return (<td key={index}>{bet[cell.objectKey]} <br /> {bet.matchTeams}  </td>);
        return cell.isClick ?
          (<td className={coupon.find((item) => item.id === bet.id)?.rateIndex === index ? 'bg-yellow-400 cursor-pointer' : 'cursor-pointer'} key={index} onClick={(e) => updateCoupon(bet, e.target.innerText, index)}>{bet[cell.objectKey] ? bet[cell.objectKey] : ''}</td>)
          :
          (<td key={index}>{bet[cell.objectKey] ? bet[cell.objectKey] : ''}</td>);

      })}
    </>
  );
}

export default BetTableRow;