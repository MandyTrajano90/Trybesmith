import bcrypt from 'bcryptjs'

const noUserBody = {
  username: '',
  password: 'hashedPassword',
};

const noPassBody = {
  username: 'Eddie',
  password: '',
};

const validLoginBody = {
  username: 'Dindão',
  password: 'dudu',
};

const invalidLoginBody = {
  username: 'Amanda',
  password: 'GHJK54',
};

const validUser = {
  username: 'Dindão',
  vocation: 'do Grau',
  level: 219,
  password: bcrypt.hashSync('dudu'),
};

const token = { token: 'uMt0keNqU4Lqu3R' }

export {
  noUserBody,
  noPassBody,
  validLoginBody,
  invalidLoginBody,
  validUser,
  token,
};