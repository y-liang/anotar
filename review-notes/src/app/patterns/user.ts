export interface User {
   id: string,
   name: { first: string, middle: string, last: string; },
   pic: string,
   role: string,

   records: string[];
}
