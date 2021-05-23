//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

//using spotify api for authentication.
export const authEndPoint="http://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";

// account which is used to logged in for deveplment platform of spotify.
const clientId="17e6840f109c4bf4accdc579243260cd";

//scopes provided by the spotify api. you can not delete while using api of spotify.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];

//go to the url and search where is # and gets the access token.
export const getTokenFromUrl = () =>{ 
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
       var parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;
    },{});
}  
export const loginUrl= `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20"
)}&response_type=token&show_dialog=true`;