/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      newProduct: {},
    };
  },
  created: function () {
    this.loadProducts();
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log("First: ", response.data);

        this.products = response.data;
      });
    },
    createProduct: function () {
      axios.post("http://localhost:3000/products", this.newProduct).then((response) => {
        console.log("Created product");
      });
    },
  },
});
