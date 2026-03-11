export default function Home() {
  return (
    <main style={{textAlign:"center",marginTop:"100px"}}>
      <h1>First Ride Skating Academy</h1>
      <p>Welcome to our professional skating training academy.</p>

      <h2>Register Now</h2>

      <form>
        <input placeholder="Student Name" style={{display:"block",margin:"10px auto"}} />
        <input placeholder="Age" style={{display:"block",margin:"10px auto"}} />
        <input placeholder="Phone Number" style={{display:"block",margin:"10px auto"}} />
        <button style={{padding:"10px 20px"}}>Register</button>
      </form>
    </main>
  );
}
