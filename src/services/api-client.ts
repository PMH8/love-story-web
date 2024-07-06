import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9c7ef9212281473397b125db5177a34c'
    }
})