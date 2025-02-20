import axiosInstance from '../axios';

export const authAPI = {
  login: (data: { email: string; password: string }) => 
    axiosInstance.post('/auth/login', data),
  register: (data: { email: string; password: string; name: string }) => 
    axiosInstance.post('/auth/register', data),
  logout: () => 
    axiosInstance.post('/auth/logout'),
}; 