function errorMiddleware(err, req, res, next) {
  console.log(err);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    stack: err.stack?.split("at"),
  });
}
export { errorMiddleware };
