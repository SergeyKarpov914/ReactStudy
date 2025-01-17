const config = {
  baseAddress: 'https://cliovox.ddns.net:4412/api/',
  };
  
  /*baseAddress: 'https://localhost:4412/api/',*/

  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  
  export { config };
  export { currencyFormatter };
  