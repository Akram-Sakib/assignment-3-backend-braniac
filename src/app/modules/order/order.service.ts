import mongoose from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const cowOrder = async (data: IOrder): Promise<IOrder | null | undefined> => {
  const session = await mongoose.startSession();
  try {
    // Simulate the transaction process
    const { cow, buyer } = data;
    session.startTransaction();
    const updatedCow = await Order.findByIdAndUpdate(
      cow,
      { status: 'sold out' },
      { new: true, session }
    );

    if (!updatedCow) {
      throw new ApiError(400, "Failed to update cow's status");
    }
    const order = new Order({ cow, buyer });
    await order.save({ session });
    await session.commitTransaction();
    session.endSession();

    return order;
  } catch (error) {
    session.abortTransaction();
    session.endSession();
  }
};

// const getSingleCow = async (id: string): Promise<IOrder | null> => {
//   const result = await Cow.findById(id);
//   return result;
// };

export const OrderService = {
  cowOrder,
  //   getSingleCow,
};
