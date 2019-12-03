/** Add a changeHandler() method to an instance.
 * 
 * @param {Component} instance
 * The object whose state must be updated
 * 
 * @sample How to use
 * @begincode
 * class MyComp extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     changeHandler(this);
 *   }
 *   render() {
 *     return <>
 *       <SomeInput
 *         value={this.state.fieldName}
 *         onChange={this.changeHandler("fieldName")} />
 *       <Checkbox
 *         checked={this.state.checkField}
 *         onChange={this.changeCheckboxHandler("checkField")} />
 *     </>;
 *   }
 * }
 * @endcode
 */
export default instance => {
  instance.changeHandler = fieldName => event => {
    instance.setState({[fieldName]: event.target.value});
  };
  instance.changeCheckboxHandler = fieldName => event => {
    instance.setState({[fieldName]: event.target.checked});
  };
};
