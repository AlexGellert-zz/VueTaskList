import * as express from "express";
import * as pgp from "pg-promise";
import * as cors from "cors";

const app = express();
const db = pgp()({
   host: "localhost",   
   port: 5432,
   database: "VueDB",
   user: "postgres",
   password: "nova"
});

app.use(cors());

app.get('/', async (req, res) => {
   let data = await db.any('SELECT * FROM "VueTable"');
   res.send(data);
})

app.listen(9000, () => {
   console.log("Server has started http://localhost:9000");
});
