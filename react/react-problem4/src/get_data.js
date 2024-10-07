export function GitHubAvatar({imgURL,alt, size=150
}){
    return(
      <img
    src={imgURL}
    alt={alt}
    width={size}
    height={size}/>
    ); 
  }
 export  function GitHubURL({url,alt,followers})  {
    if (followers){
        return(<p><a href={url}>{alt} ({followers} followers)</a></p>)
           } else {
           return <p><a href={url}>{alt}</a></p>
           }
  }
