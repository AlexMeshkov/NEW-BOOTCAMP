// const axios = require('axios');
import axios from 'axios';
// const slugify = require('slugify');

// const{getData} = require('./modules/data.js')

// const axios = require('axios');

// axios.post('https://jsonplaceholder.typicode.com/users', {
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// })
//   .then(response => {
//     console.log('Data:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


  const getData = async(url)=>{
    try{
      const res = await axios.get(url);
      return(res.data);
    } catch (error){
      console.log(error);
    }
  };

  getData('https://jsonplaceholder.typicode.com/posts').then(a=> console.log(a));