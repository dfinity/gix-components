import type {
  PostMessage, PostMessageDataRequest,
  PostMessageDataResponse,
} from "$lib/types/post-message";

export type QRCodeCallback = (data: PostMessageDataResponse) => void;

export interface InitQRCodeWorker {
  decodeQRCode: (data: PostMessageDataRequest) => void;
}

export const initQRCodeWorker = async (qrCodeCallback: QRCodeCallback): Promise<InitQRCodeWorker> => {
  const QRCodeWorker = await import("$lib/workers/qrcode.worker?worker");
  const qrCodeWorker: Worker = new QRCodeWorker.default();

  qrCodeWorker.onmessage = async ({
    data,
  }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
    const { msg } = data;

    switch (msg) {
      case "nnsQRCodeValue":
        console.log("RESULT", data.data);
        qrCodeCallback?.(data.data);
        return;
    }
  };

  return {
    decodeQRCode: (data: PostMessageDataRequest) => {
      qrCodeWorker.postMessage({
        msg: "nnsQRCodeDecode",
        data,
      });
    },
  };
};
