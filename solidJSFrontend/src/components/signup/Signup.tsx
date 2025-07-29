import { createSignal } from "solid-js/types/server/reactive.js";

function Signup(){

    const [firstName, setFirstName] = createSignal("");
    const [lastName, setLastName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    function onSubmit(e: Event){
        e.preventDefault();
    }

    return(
        <form>
            <input
            type="text"
            placeholder="First name"
            value={firstName()}
            onInput={(e) => setFirstName(e.currentTarget.value)}
            />:

            <input
            type="text"
            placeholder="Last Name"
            value={lastName()}
            onInput={(e)=> setLastName(e.currentTarget.value)}
            />

            <input
            type="email"
            placeholder="Email"
            value={email()}
            onInput={(e)=> setEmail(e.currentTarget.value)}
            />

            <input
            type="password"
            placeholder="Password"
            value={password()}
            onInput={(e)=> setPassword(e.currentTarget.value)}
            />

            <button onClick={onSubmit}>Submit</button>
            <p>Already have an account? <a href="">Login</a></p>
        </form>
    )
};

export default Signup;