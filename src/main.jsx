import React from 'react';
import { createRoot } from 'react-dom';
import SearchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

// Use createRoot to create a root container
const root = createRoot(document.getElementById('root'));

// Render the Main component inside the root container
root.render(<Main />);