exports.successResponse = (res, data) => {
  res.status(200).json(data);
};

exports.successCreate = (res) => {
  res.status(201).json({ msg: "Data Created" });
};

exports.notFoundError = (res) => {
  res.status(404).json({ error: "Data Not Found" });
};

exports.serverError = (res, error) => {
  res.status(500).json(error);
};
