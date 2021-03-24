import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarListResponseModel extends ResponseModel{
    data:Car[]
}