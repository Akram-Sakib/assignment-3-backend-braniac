import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import { OrderService } from './order.service';

const cowOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cow: IOrder = req.body;

    const result = await OrderService.cowOrder(cow);

    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Ordered successfully!',
      data: result,
    });
  }
);

// const getSingleCow = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await CowService.getSingleCow(id);

//   sendResponse<IOrder>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Cow retrieved successfully !',
//     data: result,
//   });
// });


export const OrderController = {
  cowOrder,
//   getSingleCow,
};
