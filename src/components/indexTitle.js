import React from "react"
import "../styles/indexTitle.css"

const titles = [
  "Problem Solver",
  "Team Player",
  "Coding Ninja",
  "Hard Worker",
  "'21 Grad"
];

class IndexTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      title: "Problem Solver"
    };
    const interval = setInterval(() => {
      this.changeTitle()
    }, 4000);
  }

  getRandomTitle() {
    var newTitle = this.state.title;
    while (newTitle === this.state.title) {
      newTitle = titles[Math.floor(Math.random() * (titles.length - 1))];
    }
    return newTitle;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async changeTitle() {
    this.setState({ opacity: 0 });
    await this.sleep(1000);
    const newTitle = this.getRandomTitle();
    this.setState({ title: newTitle });
    this.setState({ opacity: 1 })
  }

  render() {
    return (
      <h1 className="title">
        Software Developer
        <br />& <span style={{ opacity: this.state.opacity }}>{this.state.title}</span>
      </h1>
    )
  }
}

// const IndexTitle = () => {
//   const [title, setTitle] = useState("Problem Solver");
//   const [opacity, setOpacity] = useState(1);
//   function getRandomTitle() {
//     var newTitle = title;
//     while (newTitle === title) {
//       newTitle = titles[Math.floor(Math.random() * (titles.length - 1))];
//       console.log(
//         `title: ${title} \n newTitle: ${newTitle} \n newTitle === title: ${
//           newTitle === title
//         }`
//       )
//     }
//     return newTitle;
//   }
//   function sleep(ms) {
//     return new Promise(resolve => window.setTimeout(resolve, ms))
//   }
//   async function changeTitle() {
//     setOpacity(0);
//     await sleep(1000);
//     const newTitle = getRandomTitle();
//     setTitle(newTitle);
//     setOpacity(1);
//   }
//   useEffect(() => {
//     const interval = setInterval(() => {
//       changeTitle()
//     }, 4000)
//     return () => clearInterval(interval)
//   }, []);
//   return (
//     <h1 onClick={changeTitle} className="title">
//       Software Developer
//       <br />& <span style={{opacity: opacity}}>{title}</span>
//     </h1>
//   )
// };

export default IndexTitle