import { useEffect, useRef } from "react";


const RefFrom = () => {

    const nameRaf = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() =>{
        nameRaf.current.focus()
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRaf.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRaf} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefFrom;