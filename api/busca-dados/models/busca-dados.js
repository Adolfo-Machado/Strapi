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
          console.log("teste beforeCreate" , data);
          if (data) {

            let year = Number(data.Data.substr(0, 4));
            let month = Number(data.Data.substr(5, 2)) - 1;
            let day = Number(data.Data.substr(8, 2));
            console.log("year: ", year, "month: ", month, "day: ", day);
            let formattedDate = new Date();
            formattedDate.setUTCFullYear(year, month, day);
            console.log('formattedDate', formattedDate);

            model.name = data.Nome;
            // model.date = formattedDate;
            // model.date = data.Data;
            model.slug = slugify(data.Nome, {lower: true}).concat('-',model.ExtID);
            console.log('model após gravar', model);
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
