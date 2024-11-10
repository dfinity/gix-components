export function parseColor(color) {
  let r,
    g,
    b,
    a = 1; // Default alpha to 1 (opaque)

  // Remove the hash if it exists
  if (color.startsWith("#")) {
    color = color.slice(1);
  }

  if (color.length === 6) {
    // RRGGBB
    r = parseInt(color.slice(0, 2), 16);
    g = parseInt(color.slice(2, 4), 16);
    b = parseInt(color.slice(4, 6), 16);
  } else if (color.length === 8) {
    // RRGGBBAA
    r = parseInt(color.slice(0, 2), 16);
    g = parseInt(color.slice(2, 4), 16);
    b = parseInt(color.slice(4, 6), 16);
    a = parseInt(color.slice(6, 8), 16) / 255;
  } else if (color.includes(",")) {
    // RGB(A) format: "R, G, B" or "R, G, B, A"
    const parts = color.split(",").map((part) => parseInt(part.trim()));
    [r, g, b] = parts;
    if (parts.length === 4) a = parts[3] / 255; // Normalize alpha if provided
  } else {
    throw new Error("Invalid color format");
  }

  return { r, g, b, a };
}

export function colorDifference(color1, color2) {
  const rgbDistance = Math.sqrt(
    Math.pow(color2.r - color1.r, 2) +
      Math.pow(color2.g - color1.g, 2) +
      Math.pow(color2.b - color1.b, 2),
  );

  // Max distance is sqrt(3 * 255^2), the greatest possible difference between two colors
  const maxRgbDistance = Math.sqrt(3 * Math.pow(255, 2));
  const colorDifference = rgbDistance / maxRgbDistance;

  const alphaDifference = Math.abs(color1.a - color2.a);

  return [colorDifference, alphaDifference];
}

export function compareColors(colorStr1, colorStr2) {
  const color1 = parseColor(colorStr1);
  const color2 = parseColor(colorStr2);

  return colorDifference(color1, color2);
}

export function toHex(color) {
  // Check if the input is already in hex format
  if (!color.includes(",")) {
    return color;
  }

  // If input is in "77, 121, 255" format, split and convert to hex
  const rgb = color.split(",").map((x) => parseInt(x.trim(), 10));

  // Ensure we have exactly three RGB values and each is between 0 and 255
  if (
    rgb.length !== 3 ||
    rgb.some((value) => isNaN(value) || value < 0 || value > 255)
  ) {
    throw new Error(
      "Invalid RGB format. Expected format 'R, G, B' with values between 0 and 255.",
    );
  }

  // Convert RGB values to hex and concatenate
  return (
    rgb.map((x) => x.toString(16).padStart(2, "0")).join("") + ` [${color}]`
  );
}
