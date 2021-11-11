// taken from React docs

import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(e) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // log to Sentry, etc
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    // if there is an error click here to go to the home page
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an erorr. <Link to="/">Click here</Link> to go back
          to the home Page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
