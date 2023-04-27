import Card from "./Card";
import Title from "./Title";

function Menu() {
    return (
        <div className="bg-primary">
          <Title/>
          <div className="d-flex">
            <Card/>
            <Card/>
            <Card/>
          </div>

        </div>
    );
}

export default Menu;