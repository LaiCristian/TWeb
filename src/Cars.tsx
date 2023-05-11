import {Link} from "react-router-dom";
export function Cars() {
    return(
        <div className="start_img2">
            <div className="container_cars">
                <Link to="/cars/bmw" className="card_car1">
                    <div className="hover_card">Bmw</div>
                </Link>
                <Link to="/cars/audi" className="card_car2">
                    <div className="hover_card">Audi</div>
                </Link>
                <Link to="/cars/mercedes" className="card_car3">
                    <div className="hover_card">Mercedes</div>
                </Link>
            </div>
        </div>
    );
}