import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0
    };
  }

  handleClick = () => {
    if (this.state.pageCount === 4) {
      this.setState({pageCount: 0});
    } else if (this.state.pageCount === 3) {
      this.setState({pageCount: 4});
    } else if (this.state.pageCount === 2) {
      this.setState({pageCount: 3});
    } else if (this.state.pageCount === 1) {
      this.setState({pageCount: 2});
    } else if (this.state.pageCount === 0) {
      this.setState({pageCount: 1});
    } 
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let consoleLog = null;

    if (this.state.pageCount === 4) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
      consoleLog = "Page Count 4";

    } else if (this.state.pageCount === 3) {
      currentlyVisibleState = <p>Have you spent 15 minutes going through the problem documenting every step?</p>;
      buttonText = "Yes!";
      consoleLog = "Page Count 3";

    } else if (this.state.pageCount === 2) {
      currentlyVisibleState = <p>Have you asked another pair for help?</p>;
      buttonText = "Yes!";
      consoleLog = "Page Count 2";

    } else if (this.state.pageCount === 1) {
      currentlyVisibleState = <p>Have you gone through all the steps in the Learn How to Program debugging lesson?</p>;
      buttonText = "Yes!";
      consoleLog = "Page Count 1";

    } else if (this.state.pageCount === 0) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
      consoleLog = "Page Count 0";
    };

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        {console.log({consoleLog})}
      </React.Fragment>
    );
  }
}

export default TicketControl;


// METHOD FOR TOGGLING BOOLEAN STATE

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => ({
//       formVisibleOnPage: !prevState.formVisibleOnPage
//     }));
//   }

//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null; // new code
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewTicketForm />;
//       buttonText = "Return to Ticket List"; // new code
//     } else {
//       currentlyVisibleState = <TicketList />;
//       buttonText = "Add Ticket"; // new code
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
//       </React.Fragment>
//     );
//   }
// }