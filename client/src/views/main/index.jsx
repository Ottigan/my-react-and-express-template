import { Component } from 'react';
import Default from 'components/Default';
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
    fetch(`${process.env.REACT_APP_SERVER_API}/`)
      .then(((res) => res.json()))
      .then((res) => {
        const { data, status, message } = res;

        if (status === 'success') {
          const { sampleResponse } = data;

          this.setState({ text: sampleResponse });
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
          <Default />
          <p>{text}</p>
        </div>
      </main>
    );
  }
}

export default Main;
