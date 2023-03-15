import type {
  PostMessage,
  PostMessageDataRequest,
} from "$lib/types/post-message";
import jsQR from "jsqr";

let lastScanTimestamp = performance.now();

const maxScansPerSecond = 25;
const minimumTimeBetweenScans = 1000 / maxScansPerSecond;

/**
 * Debounce to avoid jsQR memory overflow
 */
const debounceDecodeQRCode = (data: PostMessageDataRequest) => {
  const timeSinceLastScan = performance.now() - lastScanTimestamp;

  if (timeSinceLastScan < minimumTimeBetweenScans) {
    return;
  }

  decodeQRCode(data);
  lastScanTimestamp = performance.now();
};

onmessage = ({ data }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
  const { msg, data: imageData } = data;

  switch (msg) {
    case "nnsQRCodeDecode":
      debounceDecodeQRCode(imageData);
      return;
    case "nnsQRCodeClose":
      self.close();
      return;
  }
};

const decodeQRCode = ({
  image: { data },
  width,
  height,
}: PostMessageDataRequest) => {
  const result = jsQR(data, width, height, {
    inversionAttempts: "dontInvert",
  });

  if (result === undefined || result == null || result.data === "") {
    return;
  }

  postMessage({
    msg: "nnsQRCodeValue",
    data: {
      value: result.data,
    },
  });
};
