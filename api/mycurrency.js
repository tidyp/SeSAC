const calculateExchange = async () => {
  const amount = document.getElementById("amout").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  console.log(amount, fromCurrency, toCurrency);

  const res = await fetch(
    `https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=${fromCurrency}&u4=${toCurrency}&u8=down&u2=${amount}`
  );
  const data = await res.json();
  console.log(data);

  // const inputAmount = +data.country[0].value.replace(",", "");
  // const convertAmount = +data.country[0].value.replace(",", "");
  const inputAmount = +data.country[0].value.replace(/,/g, "");
  const convertAmount = +data.country[1].value.replace(/,/g, "");

  const exchangeRate = convertAmount / inputAmount;

  document.getElementById("result").innerHTML = `
  <p>환율: 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}</p>
  <p>환전된 금액: ${convertAmount} ${toCurrency}</p>
  `;
};
