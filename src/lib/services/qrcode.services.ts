import type {
  PostMessage,
  PostMessageDataQRCodeRequest,
  PostMessageDataResponse,
} from "$lib/types/post-message";

export type QRCodeCallback = (data: PostMessageDataResponse) => void;

export interface InitQRCodeWorker {
  decodeQRCode: (params: {
    qrCode: PostMessageDataQRCodeRequest;
    options: StructuredSerializeOptions;
  }) => void;
  terminate: () => void;
}

export const initQRCodeWorker = async (
  qrCodeCallback: QRCodeCallback
): Promise<InitQRCodeWorker> => {
  const QRCodeWorker = await import("$lib/workers/qrcode.worker?worker");
  const qrCodeWorker: Worker = new QRCodeWorker.default();

  qrCodeWorker.onmessage = async ({
    data,
  }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
    const { msg } = data;

    switch (msg) {
      case "nnsQRCodeValue":
        qrCodeCallback?.(data.data);
        return;
    }
  };

  return {
    decodeQRCode: ({
      qrCode,
      options,
    }: {
      qrCode: PostMessageDataQRCodeRequest;
      options: StructuredSerializeOptions;
    }) => {
      qrCodeWorker.postMessage(
        {
          msg: "nnsQRCodeDecode",
          data: {
            qrCode,
          },
        },
        options
      );
    },
    terminate: () => qrCodeWorker.terminate(),
  };
};
