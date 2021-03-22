import axios from '../axios-orders.js'

export default {
         loadCharacters ({ commit }) {
             axios
                 .get(`characters.json`)
                 .then(response => {
                   const fetchedChar =[];
                   for( let key in response.data){
                     fetchedChar.push({
                       ...response.data[key],
                       id:key
                     })
                   }
                   return fetchedChar
                 })
                 .then(characters => {
                   console.log(characters);
                 commit('SET_Characters', characters)
             })
         },
        


 }
