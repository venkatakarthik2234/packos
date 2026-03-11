const express = require("express")
const sql = require("mssql")
const app = express()

app.use(express.urlencoded({ extended: true }))

const config = {
    user: "stu",
    password: "password@123",
    server: "skatingserver.database.windows.net",
    database: "skatingacademydb",
    options: {
        encrypt: true
    }
}

app.post("/register", async (req, res) => {

    const { name, email, phone, age } = req.body

    try {

        await sql.connect(config)

        await sql.query`
        INSERT INTO Registration (name,email,phone,age)
        VALUES (${name},${email},${phone},${age})
        `

        res.send("Registration Successful!")

    } catch (err) {
        res.send("Database error")
    }

})

app.listen(3000, () => {
    console.log("Server running")
})
