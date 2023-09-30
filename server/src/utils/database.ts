import sqlite3 from 'sqlite3';

export const openConnection = () => {
  let db = new sqlite3.Database('./database.db');
  return db;
};

export const dbQuery = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }).finally(() => {
    db.close();
  });
};
