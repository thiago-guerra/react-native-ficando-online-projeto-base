import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { CriarRepo } from '../../Servicos/Requisicoes/Repositorios';
export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const idUsuario = route.params.postId;

    async function criar() {
        const result = await CriarRepo(idUsuario, nome, data);
        if (result == 'sucesso') {
            alert('Repositório criado com sucesso!'); 
            Alert.alert('Repositório criado com sucesso!');
            navigation.goBack();  
        }else   {
            alert('Erro ao criar repositório!');
            Alert.alert('Erro ao criar repositório!');
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
            <TouchableOpacity style={estilos.botao}
                onPress={criar}
            >
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
