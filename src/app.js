import { getAll } from "./services/products.service";
import "./styles/main.scss";

const app = document.querySelector("#app");

const url = process.env.URL;

const productsService = getAll(url);
let products = [];

productsService.then(({ records }) => {
    products = records;
    products.forEach(product => {
        let html = `<li>${product.fields.Name}</li>`
        app.append(html);
    });
});
