import { useNavigation } from "@react-navigation/native";
import React from "react";
import { IUser } from "../../Pages/Home";
import {
    Container,
    ContainerInformation,
    Icon,
    Information,
    UserAvatarUrl,
    UserBio,
    UserLogin,
    UserName,
    VerticalContainer,
} from "./styled";

interface ScreenNavigationProp {
    navigate: (screen: string, params?: IUser) => void;
}

export interface Props {
    user: IUser;
}

export const ContainerUser: React.FunctionComponent<Props> = ({ user }) => {
    const { navigate } = useNavigation<ScreenNavigationProp>();

    const handleNavigation = (user: IUser) => {
        navigate("Profile", user);
    };

    return (
        <Container activeOpacity={0.8} onPress={() => handleNavigation(user)}>
            <UserAvatarUrl source={{ uri: user.avatar_url }} />
            <ContainerInformation>
                <VerticalContainer>
                    <UserName>{user.name}</UserName>
                    <UserLogin>{user.login}</UserLogin>
                </VerticalContainer>
                <UserBio>{user.bio}</UserBio>
                <VerticalContainer>
                    <Icon name="map-marker" />
                    <Information>{user.location} - </Information>
                    <Icon name="save" />
                    <Information>{user.public_repos} - </Information>
                    <Icon name="user" />
                    <Information>{user.followers}</Information>
                </VerticalContainer>
            </ContainerInformation>
        </Container>
    );
};
