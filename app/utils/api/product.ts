import axiosInstance from '../axios';

export const productAPI = {
  getProducts: (params?: { 
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
  }) => 
    axiosInstance.get('/products', { params }),
  getProductById: (id: number) => 
    axiosInstance.get(`/products/${id}`),
  createProduct: (data: any) => 
    axiosInstance.post('/products', data),
  updateProduct: (id: number, data: any) => 
    axiosInstance.put(`/products/${id}`, data),
  deleteProduct: (id: number) => 
    axiosInstance.delete(`/products/${id}`),
}; 