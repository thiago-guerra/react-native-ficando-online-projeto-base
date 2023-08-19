import api from "../api";

export async function ObterRepositoriosUsuario(login) {
    try {
        const response = await api.get(`users/${login}/repos`);
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

export async function CriarRepo(idUsuario, nome, data) {
    try {
        await api.post(`repos`, { name: nome, data: data, postId: idUsuario });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function DeletarRepositorio(id) {
    try {
        await api.delete(`repos/${id}`);
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}