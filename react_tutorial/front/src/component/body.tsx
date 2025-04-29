import {JSX} from "react";

function Image({src, alt}: {src: string; alt: string}): JSX.Element {
  return <img src={src} alt={alt} />;
}
function Hobbies(): JSX.Element {
  const hobbies = ["reading", "sports", "music"];
  return (
    <>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export function Body({name, age}: {name: string; age: number}): JSX.Element {
  return (
    <>
      <div>
        I'm {name}, {age} years old
      </div>
      <Image src="./sample.svg" alt="sample" />
      <Hobbies />
    </>
  );
}
