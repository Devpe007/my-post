exports.errorMiddleware = (error, request, response, next) => {
  response.sendStatus(500).json({ error: 'Internal server error' });
};
