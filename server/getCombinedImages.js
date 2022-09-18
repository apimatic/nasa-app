//STEP 1: Copy the entire code sample from the Portal here

const getCombinedImages = async (date) => {
  //STEP 2: Move the try-catch statement from the code sample copied in STEP 1 here
};

// STEP 3: copy the following lines to convert the stream into a base64 encoded string
// const base64Img = await streamToString(result);
//     return base64Img;

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
  });
}

export default getCombinedImages;
