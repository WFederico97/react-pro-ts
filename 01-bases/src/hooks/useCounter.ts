import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5);

  //!useRef es un hook de react, que hace seleccionable de manera especifica un componente generico que vaya a ser reutilizado en todo el codigo
  const counterElement = useRef<HTMLHeadingElement>(null); //! hago que useRef tome como generico HTMLHeadingElement , así Ts sabe que siempre counterElement va a ser de tipo <HTMLHeadingElement>

  const tl = useRef(gsap.timeline()); //*Declaramos el timeline de gsap a través de un ref

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    //!El useLayoutEffect tiene la misma funcionalidad que el useEffect a diferencia de que se dispara cuando el DOM y sus mutaciones ya fueron creadas

    if (!counterElement.current) return;
    //*Manera correcta de declarar la animacion de gsap

    //*Utilizamos el metodo .to() como hicimos abajo.
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.5,
        ease: "ease.out",
      })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();

    //*el método .to()a recibe un selector del componente que quiere animar y la configuracion de la animacion que queremos, a traves de un objeto.
    // gsap.to(counterElement.current, { y: -10, duration: 0.5, ease: "ease.out" }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    // }); //!No es lo recomendable hacerlo asi
    //!El .then es para agregarle otra animacion a continuacion
  });

  useEffect(() => {
    if (counter < maxCount) return;
    tl.current.play(0)
    
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};
