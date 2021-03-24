import { Color } from "./color";
import { ResponseModel } from "./responseModel";

export interface ColorListResponseModel extends ResponseModel{
    data:Color[]
}