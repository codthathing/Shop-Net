export type ProductDetailsType = {
  producerName: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  percentageOff: number;
};

export type GeneralProductType = ProductDetailsType & {
  id: number;
  productImages: { id: number; image: string }[];
};

export type CartProductType = {
  id: number;
  productImage: string;
  productName: string;
  productPrice: number;
  productCartCount: number;
}