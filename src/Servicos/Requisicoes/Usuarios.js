import api from '../../Servicos/api';

export async function buscarUsuario(nomeUsuario) {
    try {
        const response = await api.get(`users?login=${nomeUsuario}`);
        return response.data[0];
    } catch (error) {
        console.log(error);
        return {};
    }   
}