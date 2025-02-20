import axiosInstance from '../axios';

export const userAPI = {
  getProfile: () => 
    axiosInstance.get('/user/profile'),
  updateProfile: (data: any) => 
    axiosInstance.put('/user/profile', data),
}; 