import { useEffect } from "react";
function Home(){
  useEffect(() => {
  fetch("http://localhost:5000/user")
    .then(res => res.json())
    .then(data => {
      console.log("API response:", data);
      console.log("Count:", data.length);
    })
    .catch(err => console.error(err));
}, []);
    return(
        <div>
            <h1>This is Home Page</h1>
            <p>This is the Home components</p>
        </div>
    );
}

export default Home