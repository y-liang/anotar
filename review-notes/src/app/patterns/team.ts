export interface Team {
   id: string,
   name: string,
   attributes: string[],
   address: {
      zipcode: string,
      state: string,
      country: string,
   },
   roles: {
      user_0001?: string,
      user_0002?: string,
      user_0003?: string,
   },
   users: string[];

}

