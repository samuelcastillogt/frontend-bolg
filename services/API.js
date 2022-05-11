import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDSSeuU8iHnoN3ucTzTFhfn6GylKIqasL0",
  authDomain: "escuela-32bef.firebaseapp.com",
  databaseURL: "https://escuela-32bef.firebaseio.com",
  projectId: "escuela-32bef",
  storageBucket: "escuela-32bef.appspot.com",
  messagingSenderId: "913904034443",
  appId: "1:913904034443:web:822c99f3fdd229fddbea8e",
  measurementId: "G-K2VS202KHJ"
  }
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
const blog = collection(db,"blog")
const podcast = collection(db,"podcast")
class API  {
    async index(){
    const peticion =  await getDocs(blog)
    const { docs } = peticion
    const entradas = docs.map(entrada =>({ entrada: entrada.id, titulo: entrada.data().titulo, imgDes: entrada.data().imgDes}))
    return entradas
    }
    async entrada(id){
      const docRef = doc(db, "blog", id)
    const data = await getDoc(docRef)
    if (data.exists()) {
      console.log("Document data:", data.data());
      return data.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    // const  entrada  = data.data()
    // let peticion = await blog.where("categoria", "==", entrada.categoria).get()
    // const { docs } = peticion
    //  const entradas = docs.map(entrada =>({ datos: entrada.data()}))
    // const resultado = {datos: entrada, relaciondas: entradas}
    // return resultado
    }
    async categoria(id){
        const peticion =  await blog.where("categoria", "==", id).get()
        const { docs } = peticion
        const entradas = docs.map(entrada =>({ categoria: id, datos: entrada.data()}))
        return entradas
    }
    async allPodcasts(){
      const peticion =  await getDocs(podcast)
      const { docs } = peticion
      const entradas = docs.map(entrada =>({ entrada: entrada.id, titulo: entrada.data().titulo, img: entrada.data().img}))
      return entradas
      }
      async podcast(id){
        const docRef = doc(db, "podcast", id)
      const data = await getDoc(docRef)
      if (data.exists()) {
        console.log("Document data:", data.data());
        return data.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
}
module.exports= API