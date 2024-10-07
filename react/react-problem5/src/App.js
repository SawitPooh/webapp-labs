import { users } from "./users.js";
import './App.css';
import { GitHubAvatar, GitHubURL } from "./get_data.js";

function App() {
  const get_users = users.filter(user => user.followers >= 10000);
  return (
    <div>
      <h2>Sample GitHub Repositories</h2>
      <ol>
        {get_users.map((user, index) => (
          <li key={index}>
            <GitHubAvatar
              imgURL={user.imgURL}  
              alt={user.alt}       
            />
            <GitHubURL
              url={user.url}       
              alt={user.alt}       
              followers={user.followers} 
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;