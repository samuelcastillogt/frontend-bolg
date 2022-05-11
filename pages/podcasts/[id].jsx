import React, { useEffect, useState } from "react"
import API from "../../services/API"
import {AiFillPlayCircle , AiFillPauseCircle} from "react-icons/ai"
const api = new API
export const getServerSideProps = async(context)=>{
    const id = context.query.id
    const data = await api.podcast(id)
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
            <div className="repro">
                <img src={state.img}/>
               
               <div className="control" onClick={()=>{
                   const audio = document.getElementById("audio")
                   const play = document.getElementById("play")
                   const pausa = document.getElementById("pausa")
                   if(audio.paused){
                       audio.play()
                        play.classList.add("hidden")
                        pausa.classList.remove("hidden")
                   }else{
                    audio.pause()
                    play.classList.remove("hidden")
                        pausa.classList.add("hidden")
                   }   
               }}><h2>{state.titulo}</h2>
                   <div className="botonera">
                       <AiFillPlayCircle id="play"/> 
                        <AiFillPauseCircle id= "pausa" className="hidden"/>
                   </div>
                  
               </div>
               
               <audio  id="audio"> 
               <source src={state.audio}/>
               </audio>
               
            </div>
            <div className=" main container">
                   {state.desc}
               </div>
            </React.Fragment>
        )
};
}
export default details;