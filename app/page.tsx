export default function Home() {
  return (
    <main style={{fontFamily:"Arial",textAlign:"center"}}>

      <h1>FIRST RIDE SKATING ACADEMY</h1>
      <p>Professional skating training for beginners and champions.</p>

      <h2>About Us</h2>
      <p>
        First Ride Skating Academy provides professional roller skating training
        for kids and adults with certified coaches.
      </p>

      <h2>Our Trainer</h2>
      <p>Coach Rohan – National Level Skating Trainer</p>

      <h2>Gallery</h2>
      <img src="/gallery1.jpg" width="250"/>
      <img src="/gallery2.jpg" width="250"/>

      <h2>Register for Training</h2>

      <form action="/api/register" method="POST">

        <input name="name" placeholder="Student Name" required/><br/><br/>
        <input name="age" placeholder="Age" required/><br/><br/>
        <input name="phone" placeholder="Phone Number" required/><br/><br/>

        <button type="submit">Register</button>

      </form>

      <h2>Contact Us</h2>
      <h2>Follow Us</h2>

<a href="https://instagram.com/first_ride_skating_academy" target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
       width="40"
       alt="Instagram"/>
</a>
      <p>📞 +91 8374691285</p>
      <p>📍 Hyderabad, India</p>
     <p> 📧 firstsakting@gmail.com</p>
      <p> </p>
    </main>
  )
}
