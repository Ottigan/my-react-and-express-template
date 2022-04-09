import { Component } from 'react';
import Test from 'components/Test';
import './styles.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.getServerResponse();
  }

  getServerResponse() {
    fetch(`${process.env.SERVER_API}/`)
      .then(((res) => res.json()))
      .then((res) => {
        const { data, status, message } = res;

        if (status === 'success') {
          this.setState({ text: data.message });
        } else {
          console.log(message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { text } = this.state;

    return (
      <main className="main-view">
        <div>
          <Test />
          <p>{text}</p>
        </div>
      </main>
    );
  }
}

export default Main;
