import React from "react";
import { Container, FollowersNumber } from "./styles";

interface Props {
    followers: number;
}

export const Followers: React.FunctionComponent<Props> = ({ followers }) => {
    return (
        <Container>
            {followers > 999 && followers < 999999 ? (
                <FollowersNumber>
                    {Math.floor(followers / 1000)}K
                </FollowersNumber>
            ) : followers > 999999 ? (
                <FollowersNumber>
                    {Math.floor(followers / 1000000)}M
                </FollowersNumber>
            ) : (
                <FollowersNumber>{followers}</FollowersNumber>
            )}
        </Container>
    );
};
