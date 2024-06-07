// Return Brand persian name
export const brandConvertor = (brand: string) => {
  switch (brand) {
    case "Nike":
      return "نایکی";
    case "Adidas":
      return "آدیداس";
    case "Zara":
      return "زارا";
    case "Bershka":
      return "برشکا";
  }
};

// Return Sort items persian name
export const sortingNameConvertor = (sort: string) => {
  switch (sort) {
    case "newest":
      return "جدیدترین";
    case "selling":
      return "پرفروش‌ترین";
    case "price_des":
      return "ارزان‌ترین";
    case "price_asc":
      return "گران‌ترین";
  }
};

// Get colors of shoes
export const getUniqueHexColors = (products: any) => {
  let hexColors = [];
  products.forEach((obj) => {
    if (obj.color_hex) {
      hexColors.push(obj.color_hex);
    }
  });
  let uniqueHexColors = [...new Set(hexColors)];
  return uniqueHexColors;
};

// Get highest and lowest prices
export const getHighestAndLowestPrice = (products: any) => {
  let prices = products.map((product) => product.price);

  let highestPrice = Math.max(...prices);
  let lowestPrice = Math.min(...prices);

  return { highestPrice, lowestPrice };
};
