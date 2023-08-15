import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { EditarRepositorio } from '../../Servicos/Requisicoes/Repositorios';


export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);
    const idUsuario = route.params.item.postId;
    const id = route.params.item.id;

    async function salvar(){
        const result = await EditarRepositorio(id, nome, data, idUsuario);
        if (result === 'sucesso') {
            Alert.alert('Repositório editado com sucesso!');
            navigation.goBack();
        }else   {
            Alert.alert('Erro ao editar o repositório!');
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}>
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
