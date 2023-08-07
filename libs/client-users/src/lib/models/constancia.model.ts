export interface Constancia {
  uuid?: string;
  descripcion?: string;
  content: string;
  created_at?: string;
}

export interface ConstanciaCollectionResponse {
  items_page?: number;
  items: Constancia[];
  ok?: boolean;
}
