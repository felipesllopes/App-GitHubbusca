import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 5px;
    padding: 3px 10px 10px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.gray800};
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
`;

export const Text = styled.Text``;
