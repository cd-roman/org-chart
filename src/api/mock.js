// api/mock.js
import MockAdapter from "axios-mock-adapter";
import apiService from "./apiService";
import initialData from "../initialData.json";

const mock = new MockAdapter(apiService);

// Mocking a GET request to '/data'
mock.onGet("/data").reply(200, initialData);
