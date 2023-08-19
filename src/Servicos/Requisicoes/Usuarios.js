import api from '../../Servicos/api';

export async function buscarUsuario(nomeUsuario) {
    try {
        const response = await api.get(`/users/${nomeUsuario}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }   
}