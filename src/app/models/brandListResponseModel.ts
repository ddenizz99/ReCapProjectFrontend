import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandListResponseModel extends ResponseModel{
    data:Brand[]
}