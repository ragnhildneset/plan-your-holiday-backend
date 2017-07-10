import { Types } from 'mongoose';

export default {
  model: 'User',
  data: [
    {
      username: "Ragnhild Neset",
      loginid: "rags",
      password: "password",
      email: "rag@mail.com",
      birthday: new Date(99, 5, 24)
    }]
};
