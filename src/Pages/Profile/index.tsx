import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Repos } from "../../Components/Repos";
import { IRepos, IUser } from "../../Interfaces";
import {
    AvatarUrl,
    Bio,
    BoxNumbers,
    Container,
    ContainerDetails,
    ContainerHeader,
    ContainerLocation,
    ContainerNumbers,
    Header,
    IconLocation,
    ListRepositories,
    Loading,
    Location,
    Name,
    Numbers,
    Text,
} from "./styles";

export const Profile: React.FunctionComponent = () => {
    const route = useRoute();
    const user = route.params as IUser;
    const navigation = useNavigation();
    const [repositories, setRepositories] = useState<IRepos>({} as IRepos);

    useEffect(() => {
        (async () => {
            await axios
                .get(user.repos_url)
                .then(async item => {
                    setRepositories(item.data);
                })
                .catch(() => {
                    alert("Não há nenhum repositório.");
                });
        })();
        navigation.setOptions({ title: user.login ? user.login : "Usuário" });
    }, [user.login, user.repos_url, navigation]);

    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <AvatarUrl source={{ uri: user.avatar_url }} />
                    <ContainerDetails>
                        <Name>{user.name}</Name>
                        <ContainerNumbers>
                            <BoxNumbers>
                                <Text>Repositórios</Text>
                                <Numbers>{user.public_repos}</Numbers>
                            </BoxNumbers>
                            <BoxNumbers>
                                <Text>Seguidores</Text>
                                <Numbers>{user.followers}</Numbers>
                            </BoxNumbers>
                            <BoxNumbers>
                                <Text>Seguindo</Text>
                                <Numbers>{user.following}</Numbers>
                            </BoxNumbers>
                        </ContainerNumbers>
                        <ContainerLocation
                            style={{ display: user.location ? "flex" : "none" }}
                        >
                            <IconLocation name="location" />
                            <Location>{user.location}</Location>
                        </ContainerLocation>
                    </ContainerDetails>
                </ContainerHeader>
                <Bio>{user.bio}</Bio>
            </Header>

            <ListRepositories
                data={repositories}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Repos data={item} />}
                ListEmptyComponent={<Loading />}
            />
        </Container>
    );
};
