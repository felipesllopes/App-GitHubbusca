import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #113543;
`;

export const Header = styled.View`
    background-color: orange;
`;

export const Logo = styled.Image`
    width: 126px;
    height: 180px;
    align-self: center;
    margin: 10px;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    border-width: 1.5px;
    align-items: center;
    background-color: #999;
    margin: 10px;
    border-radius: 10px;
`;

export const SearchInput = styled.TextInput`
    background-color: #fff;
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
`;
