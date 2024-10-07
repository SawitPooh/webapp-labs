import {users} from "./users.js"
import './App.css';
import { GitHubAvatar, GitHubURL } from "./get_data.js"

function App() {
  return (
    <div>
      <h2>Sample GitHub repositories</h2>
    <ol>
  <li><GitHubAvatar 
    imgURL={users[0].imgURL}
    alt={users[0].alt}
    />
   <GitHubURL 
   url={users[0].url}
   alt={users[0].alt}
   followers={users[0].followers}
   /></li>
  <li> <GitHubAvatar 
    imgURL={users[1].imgURL}
    alt={users[1].alt}
    />
   <GitHubURL 
   url={users[1].url}
   alt={users[1].alt}
   followers={users[1].followers}
   /></li>
  <li> <GitHubAvatar 
    imgURL={users[2].imgURL}
    alt={users[2].alt}
    />
   <GitHubURL 
   url={users[2].url}
   alt={users[2].alt}
   followers={users[2].followers}
   /> 
  </li>
</ol>  
   </div>
    
  );
}

export default App;
