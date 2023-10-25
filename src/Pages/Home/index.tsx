import React, { useState } from "react";
import { Keyboard } from "react-native";
import { ContainerUser } from "../../Components/ContainerUser";
import { api } from "../../services/api";
import {
    Container,
    Header,
    Logo,
    SearchContainer,
    SearchIcon,
    SearchInput,
} from "./styles";

export interface IUser {
    avatar_url: string;
    bio: string;
    followers: number;
    following: number;
    id: number;
    location: string;
    login: string;
    name: string;
    public_repos: number;
}

export const Home: React.FunctionComponent = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<IUser>({} as IUser);

    const handleSearchUser = async () => {
        await api
            .get(name)
            .then(async item => {
                console.log(await item.data);
                setUser(await item.data);
                setName("");
            })
            .catch(() => {
                alert("Nenhum usuário encontrado");
                console.log(user);
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
                    <SearchIcon name="search" onPress={handleSearchUser} />
                </SearchContainer>
            </Header>

            {user && <ContainerUser user={user} />}
        </Container>
    );
};
