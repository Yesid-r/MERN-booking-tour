import React from "react";
import "../styles/tour-details.css";
import { useParams } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Form,
    ListGroup,
    FormFloating,
} from "react-bootstrap";
import tourData from "../assets/data/tours";
import CalculateAvgRating from "../utils/avgRating";

const TourDetails = () => {
    const { id } = useParams();
    const tour = tourData.find((tour) => tour.id === id);
    console.log(`id del tour: ${tour.id}`);

    //destructure properites from tour
    const {
        photo,
        title,
        desc,
        price,
        address,
        reviews,
        city,
        distance,
        maxGroupSize,
    } = tour;
    const { totalRating, avgRating } = CalculateAvgRating(reviews);

    console.log(`id: ${id} titulo: ${title}`);
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="tour__content">
                            <img src={photo} alt=""></img>
                            <div className="tour__info">
                                <h2>{title}</h2>
                                <div className="d-flex  align-items-center gap-5">
                                    <span className="tour__rating d-flex align-items-center gap-1">
                                        <i
                                            class="ri-star-fill"
                                            style={{ color: "var(--secondary-color)" }}
                                        ></i>
                                        {avgRating === 0 ? null : avgRating}
                                        {totalRating === 0 ? (
                                            "Not rated"
                                        ) : (
                                            <span>({reviews.length})</span>
                                        )}
                                    </span>
                                    <span>
                                        <i class="ri-map-pin-fill"></i> {address}
                                    </span>
                                </div>
                                <div className="tour__extra-details">
                                <span>
                                        <i class="ri-map-pin-fill "></i> {city}
                                    </span>                                   
                                    <span><i class="ri-money-dollar-circle-line"></i> {price} per person</span>
                                    <span><i class="ri-group-line"></i> {maxGroupSize}</span>
                                </div>
                                <div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                                {/**======================Reviews star====================*/}
                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews ?.length} )</h4>
                                        <Form>
                                            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                                <span>1 <i class="ri-star-s-fill"></i></span>
                                                <span>2 <i class="ri-star-s-fill"></i></span> 
                                                <span>3 <i class="ri-star-s-fill"></i></span>
                                                <span>4 <i class="ri-star-s-fill"></i></span>
                                                <span>5 <i class="ri-star-s-fill"></i></span>
                                            </div>
                                            <div className="review__input">
                                                <input type="text" placeholder="share your thoughts"></input>
                                                <button className="btn primary__btn text-white" type="submit">Submit </button>
                                            </div>
                                        </Form>                                </div>
                                {/**======================Reviews  end====================*/}
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TourDetails;
