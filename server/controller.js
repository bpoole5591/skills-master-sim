// Full CRUD with min/max queries

module.exports = {
  // Create - R - U - D
  createUsers: (req, res, next) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    db
      .createUser([email, password])
      .then(response => res.status(200).json(response[0]))
      .catch(console.log);
  },

  // C - Read - U - D
  getUsers: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getUsers()
      .then(response => res.status(200).json(response))
      .catch(console.log);
  },

  // C - R - Update - D
  updateUsers: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.body;
    db
      .updateUser([id, "Hidden"])
      .then(response => res.status(200).json(response))
      .catch(console.log);
  },

  // C - R - U - Delete
  deleteUsers: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.body;
    db
      .deleteUser([id])
      .then(response => res.status(200).json(response))
      .catch(console.log);
  },

  // min query
  getMin: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getMin()
      .then(response => res.status(200).json(response[0]))
      .catch(console.log);
  },

  // max query
  getMax: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getMax()
      .then(response => res.status(200).json(response[0]))
      .catch(console.log);
  }
};
