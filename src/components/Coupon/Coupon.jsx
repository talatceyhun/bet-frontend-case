import { CouponContext, useContext } from '../../context/context';

function Coupon() {

  const { coupon } = useContext(CouponContext);
  const calculateRateSum = (coupon) => {
    if (!coupon.length) return 0;
    let rateSum = 1;
    coupon.forEach((item) => rateSum = rateSum * parseFloat(item.rate));
    return rateSum.toFixed(2);
  };

  return (
    <div className='fixed bottom-0 right-0 bg-slate-700 text-white font-normal text-lg w-[480px] py-6 pl-3 max-h-96 overflow-y-scroll'>
      {coupon.map((item) => <div className='mb-2' key={item.id}> {`${item.mbs} Kod: ${item.id} Maç: ${item.teamNames} `} <span className='font-bold'>Oran: {item.rate}</span> </div>)}
      <div className='font-xl font-bold'>Toplam Tutar: {calculateRateSum(coupon)} TL</div>
    </div>
  );
}

export default Coupon;