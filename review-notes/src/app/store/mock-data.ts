import { Team } from "../patterns/team";
import { User } from "../patterns/user";
import { Record } from "../patterns/record";
import { Note } from "../patterns/note";


export const TEAM_DOC: Team = {
   id: "team_0002",
   name: "Reed Park Santa Monica",
   attributes: ["nonprofit", "outdoor fitness", "community park"],
   address: {
      zipcode: "90403",
      state: "California",
      country: "United States",
   },
   roles: {
      user_0001: "administrator",
      user_0002: "editor",
      user_0003: "editor",
   },
   users: ["user_0001", "user_0002", "user_0003", "user_0004"]

};

export const USER_DOC: User = {
   id: "user_0001",
   name: { first: "Pacific", middle: "Highway", last: "Coast" },
   pic: "url/to/profile/pic",
   role: "Editor",

   records: ["record_0001", "record_0002", "record_0003"]
};

export const RECORD_DOC: Record = {
   id: "record_0001",
   link: "url/to/doc/and/display/in/iframe",

   attributes: {
      public: true,
      status: "active",
      group: "local restaurants",
   },

   tags: ["restaurant listings", "elite campaign", "local partnership"],

   iteration: {
      iteration_001: "url/iteration1",
      iteration_002: "url/iteration2",
      iteration_003: "url/iteration3",
   },

   viewers: {
      viewer_001: {
         name: "simba",
         optional: false,
         link: "url/to/be/sent/to/viewer"
      },
      viewer_002: {
         name: "timon",
         optional: false,
         link: "url/to/be/sent/to/viewer"
      },
      viewer_003: {
         name: "rafiki",
         optional: false,
         link: "url/to/be/sent/to/viewer"
      },
      viewer_004: {
         name: "banzai",
         optional: false,
         link: "url/to/be/sent/to/viewer"
      }
   }

};

export const NOTE_DOC: Note = {
   id: "note_5678",
   link: "url/to/where/",

   viewer: "viewer_001",
   content: "can you change the font to be sans-serif?"

};



const FAKER_DATA = {
   "teamId": "123456",
   "teamName": "Pacific Coast Highway",
   "userId": "abc123",
   "userRole": "administrator",
   "firstName": "lantern",
   "lastName": "chili",
   "loginDate": "april 2020",
   "menus": [
      {
         "menuId": "active",
         "lists": [
            {
               "listId": "clouds",
               "items": [
                  {
                     "itemId": "cirrus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "stratus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "aerosols",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "anvil",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            },
            {
               "listId": "pasta",
               "items": [
                  {
                     "itemId": "linguine",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "elbow",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "shell",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "orzo",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },

               ]
            },
            {
               "listId": "bees",
               "items": [
                  {
                     "itemId": "honey bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",
                  },
                  {
                     "itemId": "carpenter bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "bumblebee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "hoverfly",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            }
         ]
      },
      {
         "menuId": "completed",
         "lists": [
            {
               "listId": "clouds",
               "items": [
                  {
                     "itemId": "cirrus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "stratus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "aerosols",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "anvil",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            },
            {
               "listId": "pasta",
               "items": [
                  {
                     "itemId": "linguine",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "elbow",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "shell",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "orzo",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },

               ]
            },
            {
               "listId": "bees",
               "items": [
                  {
                     "itemId": "honey bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",
                  },
                  {
                     "itemId": "carpenter bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "bumblebee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "hoverfly",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            }
         ]

      },
      {
         "menuId": "suspended",
         "lists": [
            {
               "listId": "clouds",
               "items": [
                  {
                     "itemId": "cirrus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "stratus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "aerosols",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "anvil",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            },
            {
               "listId": "pasta",
               "items": [
                  {
                     "itemId": "linguine",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "elbow",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "shell",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "orzo",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },

               ]
            },
            {
               "listId": "bees",
               "items": [
                  {
                     "itemId": "honey bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",
                  },
                  {
                     "itemId": "carpenter bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "bumblebee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "hoverfly",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            }
         ]

      },
      {
         "menuId": "deleted",
         "lists": [
            {
               "listId": "clouds",
               "items": [
                  {
                     "itemId": "cirrus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "stratus",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "aerosols",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "anvil",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            },
            {
               "listId": "pasta",
               "items": [
                  {
                     "itemId": "linguine",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "elbow",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "shell",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "orzo",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },

               ]
            },
            {
               "listId": "bees",
               "items": [
                  {
                     "itemId": "honey bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",
                  },
                  {
                     "itemId": "carpenter bee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "bumblebee",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  },
                  {
                     "itemId": "hoverfly",
                     "itemStatus": "unknown",
                     "itemDescription": "unknown",

                  }
               ]
            }
         ]

      }
   ]

};





/**
 * mock data for angular material
 */

const TEAMS_COL = [TEAM_DOC, TEAM_DOC];
const USERS_COL = [USER_DOC, USER_DOC];
const RECORDS_COL = [RECORD_DOC, RECORD_DOC];
const NOTES_COL = [NOTE_DOC, NOTE_DOC];

export const FLAT_DATA = [TEAMS_COL, USERS_COL, RECORDS_COL, NOTES_COL];

// const FLAT_DATA = {
//    teams: TEAMS_COL,
//    users: USERS_COL,
//    records: RECORDS_COL,
//    notes: NOTES_COL,
// };



/**
 * angular material tree nested
 * left part
 */

export interface RecordNode {
   id: string;
   name: string;
   descendants?: RecordNode[];
}



export const RECORD_DATA: RecordNode[] = [
   {
      id: 'record_status_01',
      name: 'active',
      descendants: [
         {
            id: 'record_group_01',
            name: 'schematic design',
            descendants: [
               {
                  id: 'record_001',
                  name: 'first floor plans'
               },
               {
                  id: 'record_002',
                  name: 'second floor plans'
               },
               {
                  id: 'record_003',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_02',
            name: 'design development',
            descendants: [
               {
                  id: 'record_004',
                  name: 'first floor plans'
               },
               {
                  id: 'record_005',
                  name: 'second floor plans'
               },
               {
                  id: 'record_006',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_03',
            name: 'construction document',
            descendants: [
               {
                  id: 'record_007',
                  name: 'first floor plans'
               },
               {
                  id: 'record_008',
                  name: 'second floor plans'
               },
               {
                  id: 'record_009',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_04',
            name: 'plan checks',
            descendants: [
               {
                  id: 'record_010',
                  name: 'first floor plans'
               },
               {
                  id: 'record_011',
                  name: 'second floor plans'
               },
               {
                  id: 'record_012',
                  name: 'third floor plans'
               }
            ]
         }
      ]
   },
   {
      id: 'record_status_02',
      name: 'upcoming',
      descendants: [
         {
            id: 'record_group_01',
            name: 'bidding',
            descendants: [
               {
                  id: 'record_001',
                  name: 'first floor plans'
               },
               {
                  id: 'record_002',
                  name: 'second floor plans'
               },
               {
                  id: 'record_003',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_02',
            name: 'construction administration',
            descendants: [
               {
                  id: 'record_004',
                  name: 'first floor plans'
               },
               {
                  id: 'record_005',
                  name: 'second floor plans'
               },
               {
                  id: 'record_006',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_03',
            name: 'construction document',
            descendants: [
               {
                  id: 'record_007',
                  name: 'first floor plans'
               },
               {
                  id: 'record_008',
                  name: 'second floor plans'
               },
               {
                  id: 'record_009',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_04',
            name: 'plan checks',
            descendants: [
               {
                  id: 'record_010',
                  name: 'first floor plans'
               },
               {
                  id: 'record_011',
                  name: 'second floor plans'
               },
               {
                  id: 'record_012',
                  name: 'third floor plans'
               }
            ]
         }
      ]
   },
   {
      id: 'record_status_03',
      name: 'pending',
      descendants: [
         {
            id: 'record_group_01',
            name: 'schematic design',
            descendants: [
               {
                  id: 'record_001',
                  name: 'first floor plans'
               },
               {
                  id: 'record_002',
                  name: 'second floor plans'
               },
               {
                  id: 'record_003',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_02',
            name: 'design development',
            descendants: [
               {
                  id: 'record_004',
                  name: 'first floor plans'
               },
               {
                  id: 'record_005',
                  name: 'second floor plans'
               },
               {
                  id: 'record_006',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_03',
            name: 'construction document',
            descendants: [
               {
                  id: 'record_007',
                  name: 'first floor plans'
               },
               {
                  id: 'record_008',
                  name: 'second floor plans'
               },
               {
                  id: 'record_009',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_04',
            name: 'plan checks',
            descendants: [
               {
                  id: 'record_010',
                  name: 'first floor plans'
               },
               {
                  id: 'record_011',
                  name: 'second floor plans'
               },
               {
                  id: 'record_012',
                  name: 'third floor plans'
               }
            ]
         }
      ]
   },
   {
      id: 'record_status_04',
      name: 'archive',
      descendants: [
         {
            id: 'record_group_01',
            name: 'schematic design',
            descendants: [
               {
                  id: 'record_001',
                  name: 'first floor plans'
               },
               {
                  id: 'record_002',
                  name: 'second floor plans'
               },
               {
                  id: 'record_003',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_02',
            name: 'design development',
            descendants: [
               {
                  id: 'record_004',
                  name: 'first floor plans'
               },
               {
                  id: 'record_005',
                  name: 'second floor plans'
               },
               {
                  id: 'record_006',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_03',
            name: 'construction document',
            descendants: [
               {
                  id: 'record_007',
                  name: 'first floor plans'
               },
               {
                  id: 'record_008',
                  name: 'second floor plans'
               },
               {
                  id: 'record_009',
                  name: 'third floor plans'
               }
            ]
         },
         {
            id: 'record_group_04',
            name: 'plan checks',
            descendants: [
               {
                  id: 'record_010',
                  name: 'first floor plans'
               },
               {
                  id: 'record_011',
                  name: 'second floor plans'
               },
               {
                  id: 'record_012',
                  name: 'third floor plans'
               }
            ]
         }
      ]
   }
];
