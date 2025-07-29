import { createSignal } from "solid-js/types/server/reactive.js";

function Login(){

    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    function onSubmit(e: Event){
        e.preventDefault()

    }

    return(
        <form>
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

            <button onClick={onSubmit} >Login</button>
            <p>Don't have an account? <a href="" >Signup</a></p>
        </form>
    )
};

export default Login;