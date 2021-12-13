import { indexDB, User } from 'database';
import { getRanddomID } from 'utils';

// Create A User in IndexDB
const createUser = async () => {
  return new Promise((resolve, reject) => {
    const userJoinedData: User = {
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
        reject(error);
      });
  });
};

const isUserExist = async () => {
  return new Promise((resolve, reject) => {
    indexDB.users
      .count()
      .then((count: number) => {
        if (count == 0) resolve(false);

        resolve(true);
      })
      .catch((error) => reject(error));
  });
};

export { createUser, isUserExist };
