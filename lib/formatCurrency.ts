export function formatCurrency(
  amount: number,
  currency: string = "USD",
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: "symbol",
    useGrouping: true,
    currencySign: "standard",
    notation: "standard",
    compactDisplay: "short",
    locale: "en-US",
    currencySignPosition: "before",
    currencySpacing: {
      beforeCurrency: "",
      afterCurrency: "",
    },
    numberFormat: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      notation: "standard",
      signDisplay: "auto",
      useSignificantDigits: true,
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 5,
      localeMatcher: "best fit",
    }
    // Add more formatting options as needed
  })
}
