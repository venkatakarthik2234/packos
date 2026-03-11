import sql from "mssql"

export async function POST(req: Request) {

  const formData = await req.formData()

  const name = formData.get("name")
  const age = formData.get("age")
  const phone = formData.get("phone")

  const config = {
    user: "YOUR_DB_USER",
    password: "YOUR_DB_PASSWORD",
    server: "YOUR_DB_SERVER",
    database: "YOUR_DB_NAME",
    options: {
      encrypt: true
    }
  }

  await sql.connect(config)

  await sql.query`
    INSERT INTO Students (Name,Age,Phone)
    VALUES (${name},${age},${phone})
  `

  return new Response("Registration successful")
}
