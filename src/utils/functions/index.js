export const formaDate = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString();
}

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);


