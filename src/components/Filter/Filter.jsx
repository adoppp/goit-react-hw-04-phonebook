import PropTypes from 'prop-types';
import { Component } from 'react';

export class Filter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  render() {
    const { filter, onFilter } = this.props;

    return (
      <label>
        Find contacts by name
        <input type="text" onChange={onFilter} value={filter} />
      </label>
    );
  }
}