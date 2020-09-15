import { OrderItem } from ".";

export class Order {
  orderId: number;
  userId: number;
  createdDate: Date;
  updatedDate: Date;
  shipmentStatus: string;
  paymentStatus: string;
  items: OrderItem[];
}