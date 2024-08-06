export async function fetchHandler(url, options = {}) {
    try {
      const response = await fetch(url, options);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`);
      }

      const isJson = (response.headers.get('content-type')|| '').includes('application/json');
      const responseData = await (isJson ? response.json() : response.text());


      return [responseData, null]
  
      // const data = await response.json();
      // return [data, null]; // Return data in the first position, null in the second
    } catch (error) {
      console.warn(error);
      return [null, error]; // Return null in the first position, error in the second
    }
  }
  
  // Example usage:
  // (async () => {
  //   const [data, error] = await fetchHandler('https://jsonplaceholder.typicode.com/users');
  //   if (error) {
  //     console.warns('Fetch failed:', error);
  //   } else {
  //     console.log(data);
  //   }
  // })();
  
  
  
  
  
  
  
