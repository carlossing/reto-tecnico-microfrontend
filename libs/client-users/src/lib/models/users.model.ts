export interface User {
  id?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

export interface UsersCollectionResponse {
  items_page?: number;
  items: User[];
  ok?: boolean;
}
