import React, { useEffect, useState } from "react"
import ReactHtmlParser from 'react-html-parser';
import {Helmet} from "react-helmet"
import API from "../../services/API"
const api = new API
export const getServerSideProps = async(context)=>{
    const id = context.query.id
    const data = await api.entrada(id)
     return {
         props:{
             state: data
         }
     }
 }
const details = ({state}) => {
    
    
    if(!state){
        return <h1>Cargando</h1>
        
    }else{
        return (
            <React.Fragment>
                 <Helmet>
            <title>{state.titulo}</title>
            <meta name="description" content={state.metadesc} />
            <meta name="keywords" content={state.metadesc}/>
            </Helmet>
            <div className="main container">
                <h1>{state.titulo}</h1>
                { ReactHtmlParser (state.cuerpo) }
            </div>
            </React.Fragment>
        )
};
}
export default details;