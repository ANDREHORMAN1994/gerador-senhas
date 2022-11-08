// const { nanoid } = require('nanoid');
import { nanoid } from 'nanoid';

const createPassword = () => {
  const id = nanoid();
  return id;
};

console.log(createPassword());

// module.exports = createPassword;
export default createPassword;
