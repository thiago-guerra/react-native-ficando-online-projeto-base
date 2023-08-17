import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import {ObterRepositoriosUsuario} from '../../Servicos/Requisicoes/Repositorios';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();
    useEffect(async () => {
        const resultado = await ObterRepositoriosUsuario(route.params.id);
        setRepo(resultado);
    }, [estaNaTela]);
    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', { postId : route.params.id } )}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {                    
                   return <TouchableOpacity style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}
                   >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                }}>
            </FlatList>
        </View>
    );
}
