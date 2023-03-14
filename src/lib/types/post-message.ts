export type PostMessageRequest =
    | "nnsQRCodeDecode";

export type PostMessageResponse =
    | "nnsQRCodeValue";

export interface PostMessageDataRequest {
    image: ImageData;
    width: number;
    height: number;
}

export interface PostMessageDataResponse {
    value: string;
}

export interface PostMessage<
    T extends PostMessageDataResponse | PostMessageDataRequest
> {
    msg: PostMessageRequest | PostMessageResponse;
    data: T;
}