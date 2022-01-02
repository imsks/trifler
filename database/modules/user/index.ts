import { indexDB, AddUserModel } from 'database';
import { getRanddomID } from 'utils';

// Create A User in IndexDB
const createUser = async () => {
  return new Promise((resolve, reject) => {
    const userJoinedData: AddUserModel = {
      id: getRanddomID(),
      joinedOn: new Date(Date.now()),
      isStartedUsingApp: true,
    };

    indexDB.users
      .add(userJoinedData)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Check if user exists
const isUserExist = async () => {
  return new Promise((resolve, reject) => {
    indexDB.users
      .count()
      .then((count: number) => {
        if (count == 0) resolve(false);

        resolve(true);
      })
      .catch((error) =>
        reject({ errorStack: error, message: 'Something went wrong' }),
      );
  });
};

export { createUser, isUserExist };
