var App = React.createClass({
  componentDidMount: function() {
    $.get(someURL, successCallback.bind(this),failureCallback.bind(this));
  },
  render: function() {
    return (
      <div></div>
    )
  }
});