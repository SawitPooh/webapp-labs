import {GitHubAvatar,GitHubRepoURL } from "./github_data.js"
import './App.css';

function App() {
  const userInfo ={
    url: "https://github.com/SawitPooh",
    avatar_url: "https://avatars.githubusercontent.com/u/119642304?v=4",
    alt:"Sawit Janpan"
 }
  return (
   <div className='App' >
    <h1 className='App-header'>{userInfo.alt}</h1>
    <GitHubAvatar 
    size={250} 
    person={userInfo.avatar_url}
    />
    < GitHubRepoURL
    person={userInfo.url}
     />
   </div>
  )
}

export default App;
