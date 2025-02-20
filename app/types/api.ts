export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  // ... properti lainnya
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  // ... properti lainnya
} 