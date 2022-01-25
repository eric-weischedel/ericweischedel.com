import React from "react"

const titles = [
  "Problem Solver",
  "Team Player",
  // "Coding Ninja",
  "Hard Worker",
  "'21 Grad",
  "Nice Guy",
  // "Coffee Drinker",
  "Tea Drinker",
  "Yogi",
  "Spartan Racer",
  // "Foodie",
  "The Office Fan",
];

class IndexTitle extends React.Component {
  constructor(props) {
    super(props);

    const interval = setInterval(() => {
      this.changeTitle()
    }, 4000);

    this.state = {
      opacity: 1,
      title: "Problem Solver",
      interval
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getRandomTitle() {
    var newTitle = this.state.title;
    while (newTitle === this.state.title) {
      newTitle = titles[Math.floor(Math.random() * (titles.length))];
    }
    return newTitle;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async changeTitle() {
    this.setState({ opacity: 0 });
    await this.sleep(500);
    const newTitle = this.getRandomTitle();
    this.setState({ title: newTitle });
    this.setState({ opacity: 1 })
  }

  render() {
    return (
      <h1 className="title">
        Software Engineer
        <br />& <span style={{ opacity: this.state.opacity }}>{this.state.title}</span>
      </h1>
    )
  }
}

export default IndexTitle