const axios = require('axios');


const getData = async(url)=>{
    try{
      const res = await axios.get(url);
      return(res.data);
    } catch (error){
      console.log(error);
    }
  };

  module.export ={
    getData,
    
  }