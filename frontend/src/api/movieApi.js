import axios from 'axios';



export const getMovie = async()=>{
    const {data} = await axios.get('http://localhost:5000/movie/get')
     return data
}
