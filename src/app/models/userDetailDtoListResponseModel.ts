import { ResponseModel } from "./responseModel";
import { UserDetailDto } from "./userDetailDto";

export interface UserDetailDtoListResponseModel extends ResponseModel{
    data:UserDetailDto[]
}