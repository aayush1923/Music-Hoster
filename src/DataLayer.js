//this is the stateProvider (context Api used for deep digging in to the desired layer without having to pass the props to each layer)
import React,{createContext,useContext,useReducer} from 'react';


export const DataLayerContext=createContext();
 export const DataLayer=({initialState,reducer,children}) =>(
     <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
         {children}
     </DataLayerContext.Provider>
 )  
 export const useDataLayerValue=()=>useContext(DataLayerContext)