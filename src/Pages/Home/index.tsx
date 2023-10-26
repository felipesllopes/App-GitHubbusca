import React, { useState } from "react";
import { Keyboard } from "react-native";
import { ContainerUser } from "../../Components/ContainerUser";
import { IUser } from "../../Interfaces";
import { api } from "../../services/api";
import {
    Container,
    Header,
    Logo,
    NotFound,
    SearchContainer,
    SearchIcon,
    SearchInput,
} from "./styles";

export const Home: React.FunctionComponent = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<IUser>({} as IUser);
    const [notFound, setNotFound] = useState("");

    const handleSearchUser = async () => {
        await api
            .get(name)
            .then(async item => {
                console.log(await item.data);
                setUser(await item.data);
                setName("");
            })
            .catch(() => {
                setNotFound("Nenhum usuário encontrado.");
                setUser({} as IUser);
            });
        Keyboard.dismiss();
    };

    return (
        <Container>
            <Header>
                <Logo
                    source={require("../../img/logo-GitHubbusca.png")}
                    resizeMode="contain"
                />
                <SearchContainer>
                    <SearchInput
                        placeholder="Buscar usuário"
                        value={name}
                        onChangeText={setName}
                    />
                    <SearchIcon
                        name="search"
                        onPress={handleSearchUser}
                        disabled={name == ""}
                    />
                </SearchContainer>
            </Header>

            {Object.keys(user).length !== 0 ? (
                <ContainerUser user={user} />
            ) : (
                <NotFound>{notFound}</NotFound>
            )}
        </Container>
    );
};
