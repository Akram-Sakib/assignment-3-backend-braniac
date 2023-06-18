import { Schema, model } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';

const orderSchema = new Schema<IOrder>({
  cow: {
    type: Schema.Types.ObjectId,
    ref: 'Cow',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['for sale', 'sold out'],
    default: 'for sale',
  },
});

export const Order = model<IOrder, OrderModel>('Order', orderSchema);
