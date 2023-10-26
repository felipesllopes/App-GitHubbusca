import FontAwesome from "@expo/vector-icons/FontAwesome";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 10px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.gray800};
    flex-direction: row;
    padding: 10px;
`;

export const ContainerInformation = styled.View`
    margin: 0 10px;
    width: 80%;
`;

export const UserAvatarUrl = styled.Image`
    height: 55px;
    width: 55px;
    border-radius: 40px;
`;

export const VerticalContainer = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const UserName = styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 19px;
    margin-right: 5px;
`;

export const UserLogin = styled.Text`
    font-size: 17px;
`;

export const UserBio = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray800};
    margin: 10px 0;
`;

export const Information = styled.Text``;

export const Icon = styled(FontAwesome)`
    margin-right: 3px;
    font-size: 18px;
`;
