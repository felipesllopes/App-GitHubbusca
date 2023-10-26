import React from "react";
import { Alert, Linking } from "react-native";
import { IRepos } from "../../Interfaces";
import { Container, Name, Text } from "./styles";

interface UserProps {
    data: IRepos;
}

export const Repos: React.FunctionComponent<UserProps> = ({ data }) => {
    const created = data.created_at.slice(0, 10);
    const updated = data.updated_at.slice(0, 10);

    const handleNavigate = () => {
        Alert.alert(
            "Abrir repositório",
            "Deseja abrir o repositório " + data.name + "?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Abrir",
                    onPress: click,
                },
            ],
        );
    };

    const click = async () => {
        const supported = await Linking.canOpenURL(data.html_url);

        if (supported) {
            await Linking.openURL(data.html_url);
        } else {
            alert("Erro ao abrir repositório");
        }
    };

    return (
        <Container activeOpacity={0.8} onPress={handleNavigate}>
            <Name>{data.name}</Name>
            <Text>Criado em: {created}</Text>
            <Text>Atualizado em: {updated}</Text>
            <Text style={{ display: data.description ? "flex" : "none" }}>
                Descrição: {data.description}
            </Text>
            <Text>Linguagem: {data.language}</Text>
        </Container>
    );
};
