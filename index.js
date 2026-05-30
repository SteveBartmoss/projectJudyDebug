import { Judy } from "./judy/judy.js";

const user = { name: "Alice", age: 25, role: "Admin" }
const numbers = [1,2,3]
const listUsers = [
    { name: "Alice", age: 25, role: "Admin" },
    { name: "Alice", age: 25, role: "Admin" },
    { name: "Alice", age: 25, role: "Admin" },
]

const handlerCli = new Judy()

handlerCli.inspect(user)
handlerCli.inspect(numbers)
handlerCli.inspect(listUsers)