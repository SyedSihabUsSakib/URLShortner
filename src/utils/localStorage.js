// Save data to localStorage
export const saveDataToLocalStorage = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  };
  
  // Retrieve data from localStorage
  export const retrieveDataFromLocalStorage = (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined; // Return undefined if data is not found
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
      return undefined;
    }
  };

