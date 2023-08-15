import api from "../api";

export async function ObterRepositoriosUsuario(id) {
    try {
        const response = await api.get(`repos?postId=${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function EditarRepositorio(id, nome, data, idUsuario) {
    try {
        await api.put(`repos/${id}`, { name: nome, data: data, postId: idUsuario });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}