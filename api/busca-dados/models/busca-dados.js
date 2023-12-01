'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify');
const axios = require('axios');

module.exports = {
  lifecycles: {
    async beforeCreate(model) {
      // console.log("model", model);
      await axios.get(`http://localhost:5000/api/data/${model.ExtID}`)
        .then((res) => {
          const { data } = res;
          // console.log("teste beforeCreate" , data);
          if (data) {
            model.name = data.Nome;
            model.date = data.Data;
            model.slug = slugify(data.Nome, {lower: true}).concat('-',model.ExtID);
          }
        }
      );
    },

    async beforeUpdate(params, model) {
      // console.log("params update", params);
      // console.log("model update", model);
      await axios.get(`http://localhost:5000/api/data/${model.ExtID}`)
        .then((res) => {
          const { data } = res;
          // console.log("teste beforeUpdate" , data);
          if (data) {
            model.name = data.Nome;
            model.date = data.Data;
            model.slug = slugify(data.Nome, {lower: true}).concat('-',model.ExtID);
          }
        }
      );
    },
  },
};
