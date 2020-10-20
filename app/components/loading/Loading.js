import React from "react";
import Loader from "react-loader-spinner";

export default function () {
  return (
    <Loader
      className="loading"
      type="Puff"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
}

// export default function({ text = 'Loading', speed = 300}) {
//   const [content, setContent] = useState(text);
//   const interval = useRef();

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setContent((content) => {
//         if(content === `${text}...`)return text;
//         else return content + '.';
//       })
//     }, speed);
//     return () => {
//       window.clearInterval(interval);
//     };
//   }, [text, speed]);

//   return (
//     <h1 className="loading-text" style={styles.content}>
//       {content}
//     </h1>
//   );
// };
