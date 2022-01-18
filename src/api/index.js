import axios from 'axios'

export const wheatherApi = async (data)=>{
  let res = {}
    try {
        var options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {q: data, days: '3'},
            headers: {
              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
              'x-rapidapi-key': '48039e44b3mshdbcda9c9ad617b9p13c079jsn3d03d85e5ad1'
            }
          };
          res = await axios.request(options)
          return res;
    }catch(e){
        throw new Error(e)
    }
}