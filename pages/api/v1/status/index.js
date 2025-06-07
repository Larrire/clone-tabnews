function status(request, response) {
  response.status(200).send("Status do sistema");
}

export default status;
