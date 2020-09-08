export interface Record {
   id: string,
   link: string,

   attributes: {
      public: boolean,
      status: string,
      group: string,
   },

   tags: string[],

   iteration?: {
      iteration_001: string,
      iteration_002: string,
      iteration_003: string,
   },

   viewers: {
      viewer_001: {
         name: string,
         optional: boolean,
         link: string;
      },
      viewer_002: {
         name: string,
         optional: boolean,
         link: string;
      },
      viewer_003: {
         name: string,
         optional: boolean,
         link: string;
      },
      viewer_004: {
         name: string,
         optional: boolean,
         link: string;
      };
   };
}


