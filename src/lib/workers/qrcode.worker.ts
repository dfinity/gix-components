import type {
  PostMessage,
  PostMessageDataQRCodeRequest,
  PostMessageDataRequest,
} from "$lib/types/post-message";
import jsQR from "jsqr";

let lastScanTimestamp = performance.now();

const maxScansPerSecond = 25;
const minimumTimeBetweenScans = 1000 / maxScansPerSecond;

/**
 * Debounce to avoid jsQR memory overflow
 */
const debounceDecodeQRCode = (data: PostMessageDataQRCodeRequest) => {
  const timeSinceLastScan = performance.now() - lastScanTimestamp;

  if (timeSinceLastScan < minimumTimeBetweenScans) {
    return;
  }

  decodeQRCode(data);
  lastScanTimestamp = performance.now();
};

onmessage = ({ data }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
  const { msg, data: qrCodeData } = data;

  switch (msg) {
    case "nnsQRCodeDecode":
      debounceDecodeQRCode(qrCodeData.qrCode!);
      return;
  }
};

const decodeQRCode = ({
  image: { data },
  width,
  height,
}: PostMessageDataQRCodeRequest) => {
  const result = jsQR(data, width, height, {
    inversionAttempts: "dontInvert",
  });

  if (result === undefined || result == null || result.data === "") {
    return;
  }

  postMessage({
    msg: "nnsQRCodeValue",
    data: {
      qrCode: result.data,
    },
  });
};
