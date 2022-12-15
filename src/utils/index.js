const hexToRgbA = (hex) => {
  hex = hex.replace("#", "");

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b, 500);
};

const getSpeed = (frameRate) => {
  if (frameRate < 30) {
    return "Crawl";
  }

  if (frameRate < 40) {
    return "Peel";
  }

  if (frameRate < 50) {
    return "Cruise";
  }

  if (frameRate <= 60) {
    return "Rapid";
  }

  return "Mach";
};

export const getBranchLength = (branchLength) => {
  if (branchLength < 8) {
    return "Short";
  }

  if (branchLength < 10) {
    return "Medium";
  }

  if (branchLength <= 12) {
    return "Long";
  }

  return "Uber";
};
export { hexToRgbA, getSpeed };
