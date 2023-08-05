export interface Users {
  id?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

export interface UsersResponse {
  items_page?: number;
  items?: Users[];
  ok?: boolean;
}
