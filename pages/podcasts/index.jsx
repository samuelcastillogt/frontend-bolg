import React from 'react';
import { Helmet } from 'react-helmet';
import CardPodcast from '../../components/CardPodcast';
import PostsContiner from '../../components/PostsContiner';
import API from "../../services/API"
const api = new API
export const getServerSideProps = async(context)=>{
    const data = await api.allPodcasts()
    console.log(data)
     return {
         props:{
             state: data
         }
     }
 }
const index = ({state}) => {
    return (
        <React.Fragment>
             <Helmet>
             <title>Escucha gratis nuestros podcast</title>
             <meta name="description" content="Todos nuestros Podcast gratis!!! escuchalos con responsabilidad" />
             <meta name="keywords" content="podcast, guatemala, podcast guatemala, podcast, la cotorrisa, la corneta, territorio revival"/>
        </Helmet>
        <PostsContiner>
            {
                state.map(item => <CardPodcast title={item.titulo} img={item.img} key={item.titulo} url={item.entrada}/>)
            }
        </PostsContiner>
        </React.Fragment>
       
    );
};

export default index;