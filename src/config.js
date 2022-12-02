
export const config  = {
    api_url : 'http://localhost:8000/api',
    headers : { headers: "Authorization: Bearer " + localStorage.getItem('__token') },
}
  
  export default {
      config ,
  }
  