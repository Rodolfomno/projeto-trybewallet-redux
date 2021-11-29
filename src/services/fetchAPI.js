const URL = 'https://economia.awesomeapi.com.br/json/all';

export async function getCurrencyAPI() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export async function generateCurrenciesAPI() {
  const allCurrencies = await getCurrencyAPI();
  const allKeysCurrencies = Object.keys(allCurrencies);
  const filteredCurrencies = allKeysCurrencies.filter((currency) => {
    if (currency !== 'USDT') { return currency; } return false;
  });
  return filteredCurrencies;
}
