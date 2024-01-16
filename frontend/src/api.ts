import { Cherwood } from "./helpers/Cherwood"; 
import cherwoodData from "../src/data (4).json";

import { Option } from "./helpers/Options";
import options from "../src/options.json";

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getCherwood(): Promise<Cherwood[]> {
  return wait(500)
    .then(() => {
      const jsonData = cherwoodData as Cherwood[];
      return Promise.resolve(jsonData);
    });
} 

// export async function getCherwood(): Promise<Cherwood[]> {
//   const apiUrl = 'http://127.0.0.1:8000/api/products/';

//   return fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data from ${apiUrl}`);
//       }
//       return response.json();
//     })
//     .then((jsonData: Cherwood[]) => {
//       return Promise.resolve(jsonData);
//     })
//     .catch(error => {
//       console.error(error);
//       return Promise.reject(error);
//     });
// }

export async function getOptions(): Promise<Option[]> {
  return wait(500)
    .then(() => {
      const jsonData2 = options as Option[];
      return Promise.resolve(jsonData2);
    });
}