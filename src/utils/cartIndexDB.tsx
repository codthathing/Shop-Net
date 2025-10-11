export const initializeDatabase = () => {
  const request = indexedDB.open("User Database", 1);
  let db;

  request.onsuccess = (event: Event) => {
    db = (event.target as IDBOpenDBRequest).result;
    console.log("Database has successfully been opened.");
  };

  request.onerror = (event: Event) => {
    console.error("Error opening database:", (event.target as IDBOpenDBRequest).error);
  }

  return db;
};
