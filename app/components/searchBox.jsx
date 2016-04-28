import React, {Component} from 'react';

export class SearchBox extends Component {
  render() {
    return (
      <section>
        <input type="text"/>
        <button onClick={e => {
          e.preventDefault();
          if (this.props.onSearch) this.props.onSearch();
        }}>Search</button>
      </section>
    );
  }
}