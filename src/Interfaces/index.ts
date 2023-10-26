export interface IRepos {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    language: string;
}

export interface IUser {
    avatar_url: string;
    bio: string;
    followers: number;
    location: string;
    login: string;
    name: string;
    public_repos: number;
    id: number;
    following: number;
    repos_url: string;
}
