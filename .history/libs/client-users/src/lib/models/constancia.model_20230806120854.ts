export interface Constancia {

  uuid?:        string;
  descripcion?: string;
}


export interface UsersCollectionResponse {
  items_page?: number;
  items: Constancia[];
  ok?: boolean;
}
