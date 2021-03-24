import { CarDetailDto } from "./carDetailDto";
import { ResponseModel } from "./responseModel";

export interface CarDetailDtoListResponseModel extends ResponseModel{
    data:CarDetailDto[]
}