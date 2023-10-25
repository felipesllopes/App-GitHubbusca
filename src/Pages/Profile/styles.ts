import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #113543;
`;

export const Header = styled.View`
    background-color: yellow;
    padding: 5px;
`;

export const Box1 = styled.View`
    flex-direction: row;
`;

export const Box = styled.View`
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

export const BoxContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0;
`;

export const BoxInfo = styled.View`
    align-items: center;
`;

export const Icon = styled(Ionicons)`
    font-size: 22px;
`;

export const Numbers = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const BoxLocation = styled.View`
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
