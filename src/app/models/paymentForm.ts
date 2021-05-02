export interface PaymentForm{
    token:string,
    checkoutFormContent:string,
    tokenExpireTime:number,
    paymentPageUrl:string,
    status:string,
    errorCode:string,
    errorMessage:string,
    errorGroup:string,
    locale:string,
    systemTime:number,
    conversationId:string
}