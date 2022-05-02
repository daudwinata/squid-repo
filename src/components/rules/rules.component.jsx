import React from "react";
import { Carousel } from "react-bootstrap";
import "./rules.styles.css";

function Rules() {
  return (
    <div className="rules-container">
      <Carousel fade>
        <Carousel.Item className="rules-carousel-block">
          <Carousel.Caption className="rules-carousel-caption">
            <h3>Participate-to-Earn</h3>
            <p>All players can obtain the native tokens of the platform.</p>
          </Carousel.Caption>
          <div className="image-background">
            <img
              className="d-block"
              src="./images/main-rule-one.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item className="rules-carousel-block">
          <Carousel.Caption className="rules-carousel-caption">
            <h3>Play-to-Earn</h3>
            <p>
              Ladder mining rewards are distributed according to players’ points
              in the daily, weekly, and monthly games.
            </p>
          </Carousel.Caption>

          <div className="image-background">
            <img
              className="d-block"
              src="./images/main-rule-two.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="rules-carousel-block">
          <Carousel.Caption className="rules-carousel-caption">
            <h3>Tug of War</h3>
            <p>
              The game is a team game, and players need to team up for
              confrontation. The losing side will eliminate all members, and the
              winning side will be ranked according to the number of points.
            </p>
          </Carousel.Caption>
          <div className="image-background">
            <img
              className="d-block"
              src="./images/main-rule-three.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="rules-carousel-block">
          <Carousel.Caption className="rules-carousel-caption">
            <h3>Marbles</h3>
            <p>
              Players need to win all marbles of their opponents in the limited
              time. Players are not allowed to give up halfway once they start
              the game, or they will be killed by the Red Man.
            </p>
          </Carousel.Caption>
          <div className="image-background">
            <img
              className="d-block"
              src="./images/main-rule-four.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="rules-carousel-block">
          <Carousel.Caption className="rules-carousel-caption">
            <h3>Glass Bridge</h3>
            <p>
              Players need to arrive at the destination as soon as possible
              during the limited game time. The players who don’t arrive at the
              destination would be killed by the Red Man. Pay attention that the
              glass would splinter.
            </p>
          </Carousel.Caption>
          <div className="image-background">
            <img
              className="d-block"
              src="./images/main-rule-five.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Rules;
