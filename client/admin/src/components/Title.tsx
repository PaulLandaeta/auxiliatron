const Title = (props) => {
    // Destructura objetos
    const { description, color } = props;
    // const description = props.description;
    // const color = props.color;
    return (<h1 style={{color: color }}> {description}</h1>);
}
export default Title;