import type {
  PostMessage,
  PostMessageDataRequest,
} from "$lib/types/post-message";
import jsQR from "jsqr";

onmessage = ({ data }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
  const { msg, data: imageData } = data;

  switch (msg) {
    case "nnsQRCodeDecode":
      decodeQRCode(imageData);
      return;
  }
};

const decodeQRCode = ({
  image: { data },
  width,
  height,
}: PostMessageDataRequest) => {
  const result = jsQR(data, width, height);

  if (result === undefined || result == null) {
    return;
  }

  postMessage({
    msg: "nnsQRCodeValue",
    data: {
      value: result.data,
    },
  });
};
