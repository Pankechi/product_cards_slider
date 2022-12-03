import { createStore } from 'vuex'
import axios from 'axios'

export default createStore(
  {
    state: {
      products: [ ]
    },


    mutations: {
      fetchProductList(state, product_list) {
        state.products = product_list;
      }
    },


    actions: {
     async getProducts({ commit }) {

        const product_list = [];

        try {
         await axios.get('https://rangeweb.ru/test/products/')
          .then(response => response.data.forEach(
            element => {
              const product = {
                id: element.id.toString(),
                url: element.url,
                article: element.article.toString(),
                category: element.category,
                title: element.title,
                image: element.image,
                price: {
                  current: element.prices.rrc.price,
                  old: element.prices.rrc.old_price,
                  currency: element.prices.rrc.currency,
                },
                opt: {
                  current: element.prices.opt.price,
                  old: element.prices.opt.old_price,
                  currency: element.prices.opt.currency,
                },
                stickers: element.stickers.map(el => el.type),
                rating: element.rating
              };
              product_list.push(product)
            }
          ))
        } catch (err) {
          console.log(err)
        }

        commit('fetchProductList', product_list)
      } 
    },


    getters: {

    }

  }
)