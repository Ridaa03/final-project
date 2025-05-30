import axios from "axios"
const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});
//http get method

export const getCountryData =()=>{
    return api.get("/all?feilds=name,population,region,capital,flags");
}