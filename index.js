exports.split = function (fullData, sizeLimit) {
  if (!fullData || !sizeLimit) throw "Invalid Arguments";
  let byteSize = Buffer.byteLength(JSON.stringify(fullData));
  let size = Math.ceil(byteToMb(byteSize));
  let elementsCount = Math.ceil(fullData.length / (size / sizeLimit));
  let split = new BatchArray(fullData, elementsCount).matrix;
  return split;
};

function byteToMb(byte) {
  return byte / 1024 ** 2;
}

class BatchArray {
  constructor(mainArray, divider) {
    const max = Math.ceil(mainArray.length / divider);
    this.mainMatrix = [];
    let i = max;
    while (i--) {
      let batched = mainArray.slice(0, divider);
      mainArray.splice(0, divider);
      this.mainMatrix.push(batched);
    }
  }

  get matrix() {
    return this.mainMatrix;
  }
}
