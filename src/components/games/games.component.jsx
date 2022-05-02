import React from "react";
import { Carousel } from "react-bootstrap";
import "./games.styles.css";

function Games() {
  return (
    <div className="games-wrapper">
      <div className="games-container">
        <Carousel fade>
          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-one.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Red Light, Green Light.</h3>
              <p>
                Red Light, Green Light Game is held every 5 minutes. Players
                first need to purchase an entrance ticket at the game lobby and
                then wait there with other players for the next game. The player
                needs to arrive at the destination from the starting point to
                win the game without being spotted moving. Otherwise, he will be
                kicked out immediately. All winners share the ticket revenue.
                Meanwhile, all players are eligible to get the native token of
                Survival Game.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-two.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Dalgona Candy</h3>
              <p>
                Players need to take out the shape from the candy by long
                pressing the screen during the game time. Each long press
                operation will generate a pressing value, and when the value
                reaches the red line may crack the candy. Three cracks during
                the game time, the candy will be completely broken. Players will
                be ranked according to their completion time, and the points are
                related to the rank and completion.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-three.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Tug of War</h3>
              <p>
                The game is a team game, and players need to team up for
                confrontation. The losing side will eliminate all members, and
                the winning side will be ranked according to the number of
                points.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-four.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Marbles</h3>
              <p>
                Players need to win all marbles of their opponents in the
                limited time. Players are not allowed to give up halfway once
                they start the game, or they will be killed by the Red Man.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-five.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Glass Bridge</h3>
              <p>
                Players need to arrive at the destination as soon as possible
                during the limited game time. The players who don’t arrive at
                the destination would be killed by the Red Man. Pay attention
                that the glass would splinter.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="games-carousel-block">
            <div className="image-background">
              <img
                className="d-block"
                src="./images/main-rule-six.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="games-carousel-caption">
              <h3>Survival Game</h3>
              <p>
                There is no partner,but only you. Players need to do the best to
                live till the end during the limited game time. And the
                survivors win.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Games;
