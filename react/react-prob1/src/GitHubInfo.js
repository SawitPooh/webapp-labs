function GitHubAvatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/119642304?v=4"
      alt="Sawit Janpan"
    />
  );
}
function GitHubRepoURL() {
  return (<p><a href="https://api.github.com/users/SawitPooh/repos">My GitHub repository</a></p>)
}
export default function GitHubInfo() {
  return (<section>
    <h1>My GitHub Information</h1>
    <GitHubAvatar />
    <GitHubRepoURL />
  </section>
  )
}

