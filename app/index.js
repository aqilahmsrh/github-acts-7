exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("AWS Lambda and S3 Bucket - Helloooooo How Are You")
  };
  return response;
}
