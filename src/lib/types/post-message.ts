export type PostMessageRequest = "nnsQRCodeDecode";

export type PostMessageResponse = "nnsQRCodeValue";

export interface PostMessageDataQRCodeRequest {
  image: ImageData;
  width: number;
  height: number;
}

export interface PostMessageDataRequest {
  qrCode?: PostMessageDataQRCodeRequest;
}

export interface PostMessageDataResponse {
  qrCode?: string;
}

export interface PostMessage<
  T extends PostMessageDataResponse | PostMessageDataRequest
> {
  msg: PostMessageRequest | PostMessageResponse;
  data: T;
}
