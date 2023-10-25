import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { IUser } from "../Home";
import {
    AvatarUrl,
    Bio,
    Box,
    Box1,
    BoxContainer,
    BoxInfo,
    BoxLocation,
    Container,
    Header,
    Icon,
    IconLocation,
    Location,
    Name,
    Numbers,
} from "./styles";

export const Profile: React.FunctionComponent = () => {
    const route = useRoute();
    const user = route.params as IUser;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: user.login ? user.login : "Usuário" });
    });

    return (
        <Container>
            <Header>
                <Box1>
                    <AvatarUrl source={{ uri: user.avatar_url }} />
                    <Box>
                        <Name>{user.name}</Name>
                        <BoxContainer>
                            <BoxInfo>
                                <Icon name="earth" />
                                <Numbers>{user.public_repos}</Numbers>
                            </BoxInfo>
                            <BoxInfo>
                                <Icon name="people" />
                                <Numbers>{user.followers}</Numbers>
                            </BoxInfo>
                            <BoxInfo>
                                <Icon name="people" />
                                <Numbers>{user.following}</Numbers>
                            </BoxInfo>
                        </BoxContainer>
                        <BoxLocation>
                            <IconLocation name="location" />
                            <Location>{user.location}</Location>
                        </BoxLocation>
                    </Box>
                </Box1>
                <Bio>{user.bio}</Bio>
            </Header>
        </Container>
    );
};
