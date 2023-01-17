import React from "react";
import styled from "styled-components";
import pos from "../Images/aboutpos.jpg";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { ImPower } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";

const About = () => {
  return (
    <Container>
      <Up id="hero"></Up>
      <Sumary>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere
        officiis similique itaque excepturi incidunt sunt ea temporibus eos
        accusantium suscipit sit consequatur, dicta, magni, natus fugit repellat
        labore. Eos?
      </Sumary>
      <Down>
        <Wrapper>
          <Business>
            <span>pos</span>
            <Icon>
              <BsFillFilePostFill />
            </Icon>
          </Business>
          <Business>
            <span>momo top up</span>
            <Icon>
              <FaRegCreditCard />
            </Icon>
          </Business>
          <Business>
            <span>
              {" "}
              📺 tv <br /> subscription{" "}
            </span>
          </Business>
          <Business>
            <span>
              betting <br /> subscription
            </span>
            <Icon>
              <FcSportsMode />
            </Icon>
          </Business>
          <Business>
            <span>
              Pay <br /> Light Bills
            </span>
            <Icon>
              <ImPower />
            </Icon>
          </Business>
          <Business>
            <span>deposit </span>
            <Icon>
              <GiMoneyStack />
            </Icon>
          </Business>
          <Whatsapp href="https://wa.me/2348185340527">
            <span>More...</span>
          </Whatsapp>
        </Wrapper>
      </Down>
    </Container>
  );
};

export default About;

const Whatsapp = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 360ms;
  border: 1px solid #005eff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  :hover {
    box-shadow: #005eff 0px 1px 2px 0px, #005eff 0px 2px 6px 2px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Sumary = styled.div`
  margin-top: 30px;
  text-align: center;
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 26px;
  color: rgb(0, 0, 0, 0.6);

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Up = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${pos});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 320px) {
    ::after {
      content: "about us";
      position: absolute;
      z-index: 3;
      font-weight: bold;
      color: red;
      font-size: 80px;
      text-transform: capitalize;
    }
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  ::after {
    content: "about us";
    position: absolute;
    z-index: 3;
    font-weight: bold;
    color: white;
    font-size: 100px;
    text-transform: capitalize;

    @media screen and (max-width: 500px) {
      content: "about us";
      position: absolute;
      z-index: 3;
      font-weight: bold;
      color: white;
      text-align: center;
      font-size: 70px;
      text-transform: capitalize;
    }

    @media screen and (max-width: 320px) {
      content: "about us";
      position: absolute;
      z-index: 3;
      font-weight: bold;
      color: white;
      text-align: center;
      font-size: 80px;
      text-transform: capitalize;
    }
  }
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  border: 1px solid #005eff;
  margin-top: 30px;
  padding: 40px;
  border-radius: 5px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 30px;

  justify-content: space-around;
  span {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 24px;
    color: white;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005eff;
  font-size: 20px;
  margin-left: 20px;
`;

const Business = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 360ms;
  border: 1px solid #005eff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  :hover {
    box-shadow: #005eff 0px 1px 2px 0px, #005eff 0px 2px 6px 2px;
  }
`;
