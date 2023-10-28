import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import { ContainerUser } from "../../Components/ContainerUser";
import { IUser } from "../../Interfaces";
import { api } from "../../services/api";
import {
    Container,
    Header,
    Loading,
    Logo,
    SearchContainer,
    SearchIcon,
    SearchInput,
} from "./styles";

export const Home: React.FunctionComponent = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<IUser>({} as IUser);
    const [loading, setLoading] = useState(false);
    const [initial, setInitial] = useState(true);

    const handleSearchUser = async () => {
        setInitial(false);
        setLoading(true);
        await api
            .get(name)
            .then(async item => {
                setUser(await item.data);
                setName("");
            })
            .catch(() => {
                setUser({} as IUser);
            });
        Keyboard.dismiss();
        setLoading(false);
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
                        placeholder="Digite o login do usuário"
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

            {loading ? (
                <Loading />
            ) : initial ? (
                <View />
            ) : (
                <ContainerUser user={user} />
            )}
        </Container>
    );
};
