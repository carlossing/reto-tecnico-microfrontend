export interface User {
  id?: string;
  username?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
}

export interface UsersCollectionResponse {
  items_page?: number;
  items: User[];
  ok?: boolean;
}

export interface UserEntityResponse {
  id?: string,
  message?: string,
  ok?: boolean,
}
