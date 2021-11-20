//inital state of the reducer
export const initialState={
        user:null,
        playlists:[],
        playing:false,
        item:null,
        //mae token null after developing
        // token:"BQC0VIDBtGGxn0aiaEOFZwjEorIJG2XcIy29Zhxs4ICEFct459…UQw_k4hO827rwtqbWOt86UijVn156Dx2q0nu_BYaMklPi5LJL"
};

const reducer=(state, action) =>{
console.log(action);


//action -> typr,[payload]
switch(action.type){
    case 'SET_USER':
    return{
      ...state,
      user:action.user
    }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
    case "SET_PLAYLISTS":
        return{

            ...state,
            playlists:action.playlists,
    }
    case "SET_DISCOVER_WEEKLY":
        return{
        ...state,
        discover_weekly:action.discover_weekly,
        } ;   
    default:
        return state; 
}
}
export default reducer;