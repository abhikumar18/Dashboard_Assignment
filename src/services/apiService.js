import axios from 'axios';

const apiClient = axios.create({
    baseURL : "https://reqres.in/api",
    headers : {
        'Content-Type' : 'application/json',
    },
});

export default apiClient;

export const login = async (email,password) => {
    try {
        const response = await apiClient.post('/login',{email,password});
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Login Failed');
    }
}

export const register = async (email,password) => {
    try {
        const response = await apiClient.post('/register',{email,password});
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Registration Failed');
    }
};

export const fetchUsers = async () => {
    try {
        const response = await apiClient.get('/users');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
}