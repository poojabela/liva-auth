import { useState, useEffect } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Input = () => {

 const [longUrl, setLongUrl] = useState('');
 const [shortUrl, setShortUrl] = useState('');
 const auth = getAuth();
 const router = useRouter();

 const onSubmit = async (e) => {
  e.preventDefault();
  const res = await axios(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
  setShortUrl(res.data.result.full_short_link);
  console.log(res)
 }

 const logout = () => {
    const auth = getAuth();
  signOut(auth).then(() => {
   console.log('sign-out')
   router.push('/')
  });
 }

 const onAuthStateChangedHandler = (authState) => {
  if(!authState){
    console.log('not logged-in')
    router.push('/')
  }
  else{
    console.log('welcome back')
  }
 }

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(onAuthStateChangedHandler);

  return () => {    
    unsubscribe();
  }
 }, [])

    return ( 
        <div className="input">
        <form>
            <input 
            type="text"
            id="input-url"
            placeholder="Enter the url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            />
            <button onClick={onSubmit}>Click</button>
      </form> 
      <h4>{shortUrl}</h4>
      <button className='logout' onClick={logout}>Log-out</button>
        </div>
     );
}
 
export default Input;