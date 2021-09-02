import  { useEffect, useState } from 'react'

const useMousePosition = () => {
    console.log('execute 1');
    let [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        console.log('execute 2');
        const updateMouse = e => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", updateMouse)
        
        return () => {
            console.log('execute 3');
            window.removeEventListener("mousemove", updateMouse);
        }
    })
    return position
}


export default useMousePosition