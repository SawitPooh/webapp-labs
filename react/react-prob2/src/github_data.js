 

export const  GitHubAvatar = ({person, size=50}) =>{
    return (
        <img
            src={person}
            alt={person}
            width={size}
            height={size}
        />
    );
}
export const GitHubRepoURL =({person}) => {
    return (<p><a href={person}>My GitHub repository</a></p>)
}