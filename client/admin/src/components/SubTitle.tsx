const SubTitle = (props) => {
    const {setCont} = props;
    const increment = () => {
        setCont
    }
return (
    <>
        <h2>Hola La paz</h2>
        <button onClick={increment}></button>
    </>);
}
export default SubTitle;