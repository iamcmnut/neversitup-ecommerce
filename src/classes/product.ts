export class Product {
  productId: number;
  productName: string;
  productBarcode: string;
  category: string;
  producer: string;
  price: number;
  productAvailable: boolean;
  thumbnail?: string

  constructor(productId: number, productName: string, category: string, producer: string, price: number,
    productAvailable: boolean, productBarcode?: string, thumbnail?: string) {

    this.productId = productId;
    this.productName = productName;
    this.category = category;
    this.producer = productName;
    this.price = price;
    this.productAvailable = productAvailable;
    this.productBarcode = productBarcode;
    this.thumbnail = thumbnail;
  }
}