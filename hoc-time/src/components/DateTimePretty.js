import React from "react";
import DateTime from './DateTime';

const DateTimePretty = wrapComponent(DateTime);

function wrapComponent(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: props.date, convertDate: '' };
    }

    componentDidMount() {
      const { date } = this.state;
      const a = new Date(); 
      const b = new Date(date); 
      const d = a - b;

      const oneDay = 1000 * 60 * 60 * 24;
      const diffInDays = parseInt(d / oneDay);

      if (diffInDays > 0) {
        this.setState({
          convertDate: `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`,
        });
      } else {
        const oneHour = 1000 * 60 * 60;
        const diffHours = parseInt(d / oneHour);

        if (diffHours > 0) {
          this.setState({
            convertDate: `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`,
          });
        } else {
          const oneMinute = 1000 * 60;
          const diffMinutes = parseInt(d / oneMinute);

          this.setState({
            convertDate: `${diffMinutes} minute${
              diffMinutes > 1 ? 's' : ''
            } ago`,
          });
        }
      }
    }

    render() {
      return <Component date={this.state.convertDate} />;
    }
  };
}

export default DateTimePretty;