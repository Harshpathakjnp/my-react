import VsjSubItem from "./VsjSubItem";
function VsjItem(props) {
    return <p className = 'vsj'>

        {/* <h2>Persons Pesonal Details !</h2>
        <h1>{props.name} </h1>
        <h2>{props.age}</h2>
        <h3>{props.address}</h3> */}
        <VsjSubItem message = "Harsh"></VsjSubItem>

    </p>;
}
export default VsjItem;