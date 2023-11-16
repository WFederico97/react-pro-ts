import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
const MAX_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null); //! hago que useRef tome como generico HTMLHeadingElement , así Ts sabe que siempre counterElement va a ser de tipo <HTMLHeadingElement>

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    //*Manera correcta de declarar la animacion de gsap

    const tl = gsap.timeline() //*Declaramos el timeline

    //*Utilizamos el metodo .to() como hicimos abajo.
    tl.to(counterElement.current, { y: -10, duration: 0.5, ease: "ease.out" })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })

    //*el método .to()a recibe un selector del componente que quiere animar y la configuracion de la animacion que queremos, a traves de un objeto.
    // gsap.to(counterElement.current, { y: -10, duration: 0.5, ease: "ease.out" }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    // }); //!No es lo recomendable hacerlo asi
    //!El .then es para agregarle otra animacion a continuacion
    
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
