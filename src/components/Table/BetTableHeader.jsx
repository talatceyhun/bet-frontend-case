function BetTableHeader() {
  return (
    <tr className='sticky top-0 bg-gray-500 h-8'>
      <th style={{ width: window.innerWidth * (8 / 38) }}></th>
      <th style={{ width: window.innerWidth * (2 / 38) }}>Yorumlar</th>
      <th style={{ width: window.innerWidth * (1 / 38) }}></th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 1 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> x </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 2 </th>
      <th style={{ width: window.innerWidth * (1 / 38) }}> Alt </th>
      <th style={{ width: window.innerWidth * (1 / 38) }}> Üst </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> H1 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 1 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> X </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 2 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> H2 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 1-X </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> 1-2 </th>
      <th style={{ width: window.innerWidth * (2 / 38) }}> X-2 </th>
      <th style={{ width: window.innerWidth * (1 / 38) }}> Var </th>
      <th style={{ width: window.innerWidth * (1 / 38) }}> Yok </th>
      <th style={{ width: window.innerWidth * (1 / 38) }}> +99 </th>
    </tr >
  );
}

export default BetTableHeader;