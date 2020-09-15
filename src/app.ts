import express from "express";
import bodyParser from "body-parser";

import {
  mainController, productGetAll, orderCancel, orderGetHistory,
  orderGetOne, orderMake, productGetOne, userGetProfile, userRegister, userLogin
} from "./controllers";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set route for your controller here
app.get("/", mainController.index);

// Product
app.get("/products", productGetAll.handler);
app.get("/product/:productId", productGetOne.handler);

// User
app.get("/user", userGetProfile.handler);
app.post("/user/register", userRegister.handler);
app.get("/user/login", userLogin.handler);

// Order
app.get("/orders", orderGetHistory.handler);
app.get("/order/:orderId", orderGetOne.handler);
app.get("/order/:orderId/cancel", orderCancel.handler);
app.post("/order/make", orderMake.handler);

export default app;