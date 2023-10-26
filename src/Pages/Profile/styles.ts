import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { IRepos } from "../../Interfaces";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #113543;
`;

export const Header = styled.View`
    background-color: yellow;
    padding: 5px;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
`;

export const ContainerDetails = styled.View`
    flex: 1;
    margin: 0 15px;
`;

export const AvatarUrl = styled.Image`
    height: 110px;
    width: 110px;
    border-radius: 80px;
    margin: 5px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ContainerNumbers = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0;
`;

export const BoxNumbers = styled.View`
    align-items: center;
`;

export const Text = styled.Text``;

export const Numbers = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const ContainerLocation = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconLocation = styled(Ionicons)`
    margin-right: 4px;
    font-size: 22px;
`;

export const Location = styled.Text`
    font-size: 17px;
`;

export const Bio = styled.Text`
    font-size: 15px;
    margin: 10px 3px 3px;
`;

export const ListRepositories = styled(
    FlatList as new (props: FlatListProps<IRepos>) => FlatList<IRepos>,
).attrs({
    contentContainerStyle: {
        paddingVertical: 20,
    },
    showsVerticalScrollIndicator: false,
})``;
