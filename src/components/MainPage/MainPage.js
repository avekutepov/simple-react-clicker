import React, {useEffect, useState} from 'react';


const MainPage = () => {
    const [counter, setCounter] = useState(0);

    function incrementCounter(){
        setCounter(counter+1)
    }

    return (
        <div>
            <h1>{counter} $</h1>
            <button onClick={incrementCounter}>Click me</button>
        </div>
    );
};

export default MainPage;