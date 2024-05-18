import axios from "axios";

const useCarroApi = () => {
    
    const getAllCar = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cars`);
            return response.data;
        }   catch (error) {
            throw new Error(error.message);
        }
    };

    const fetchCarro = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/cars/${id}`);
            return response.data;
        }   catch (error) {
            throw new Error(error.message);
        }
    };

    const updateCarroApi = async (carro) => {
        try {
            await axios.put(`http://localhost:5000/cars/${carro.id}`, carro);
        }   catch (error) {
            throw new Error(error.message);
        }
    };

    const deleteCarroApi = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cars/${id}`);
        }   catch (error) {
            throw new Error(error.message);
        }
    };

    return { getAllCar, fetchCarro, updateCarroApi, deleteCarroApi };

};

export default useCarroApi;
