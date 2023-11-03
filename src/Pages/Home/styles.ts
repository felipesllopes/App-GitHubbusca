import Feather from "@expo/vector-icons/Feather";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.Image`
    width: 126px;
    height: 180px;
    align-self: center;
    margin: 15px;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    border-width: 1.5px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray800};
    margin: 0 10px 10px;
    border-radius: 10px;
`;

export const SearchInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.white};
    flex: 1;
    font-size: 18px;
    height: 40px;
    padding: 0 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
`;

export const SearchIcon = styled(Feather)`
    font-size: 20px;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Loading = styled(ActivityIndicator).attrs({
    size: "large",
})`
    margin-top: 20%;
`;
