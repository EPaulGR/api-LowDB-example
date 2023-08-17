import { getConnection } from '../database.js';

export const getUser = (req, res) => {
  const user = getConnection().data.users.find(user => user._id === req.params.id);
  if(!user) return res.sendStatus(404);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const db = getConnection();
  const userFound = db.data.users.find(user => user._id === req.params.id);
  console.log(req.body, );
  if(!userFound) return res.sendStatus(404);

  userFound.balance = req.body.balance
  userFound.age = req.body.age
  userFound.eyeColor = req.body.eyeColor
  userFound.name.first = req.body.name.first
  userFound.name.last = req.body.name.last
  userFound.company = req.body.company
  userFound.email = req.body.email
  userFound.password = req.body.password
  userFound.phone = req.body.phone
  userFound.address = req.body.address

  db.data.users.map(user => user.id === req.params.id ? userFound : user);
  await db.write();
  res.send(userFound);
};
