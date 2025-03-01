export interface ProductCardProps {
  id: number | string;
  brand: string;
  name: string;
  price: number;
  off_percent: number;
  sizes: number[];
  color: string;
  color_hex: string;
  image: any;
  count: number;
  sold: number;
  rating: number;
}

export interface Service {
  title: string;
  bgShadow: string;
  bgColor: string;
  logo: string;
}
