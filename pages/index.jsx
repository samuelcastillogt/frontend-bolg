import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Post from '../components/Post';
import PostsContiner from '../components/PostsContiner';
import API from "../services/API"
const api = new API
export const getServerSideProps = async(context)=>{
    const data = await api.index()
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
            <title>La posada de los Muertos: El mejor Podcast que vas a escuchar</title>
            <meta name="description" content="Informacion curiosa, interesante y a veces inutil." />
            <meta name="keywords" content="podcast, guatemala, podcast guatemala, podcast, la cotorrisa, la corneta, territorio revival"/>
            </Helmet>
            <Banner />
            <PostsContiner>
                {
                    state.map(item => <Post imgDesc={item.imgDes} title={item.titulo} link={item.entrada}/>)
                }
            </PostsContiner>
            <h1>Hola</h1>
            <button>click</button>
            
        </React.Fragment>
    );
};

export default index;
