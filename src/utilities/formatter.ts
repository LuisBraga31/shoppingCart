const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style:"currency",
});

export function formatter( number: number) {
    return CURRENCY_FORMATTER.format(number);

}