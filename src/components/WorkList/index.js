import React from "react";
import * as Styled from "./styled";
import { StaticImage } from "gatsby-plugin-image";
import Pill from "../Pill";

const WorkList = () => {
  return (
    <>
      <Styled.SectionTitle>My Projects</Styled.SectionTitle>
      <Styled.StyledLink
        to="https://github.com/nisalrenuja/dictionary-app"
        className="vice"
      >
        <Styled.ImageWrapper>
          <StaticImage
            src="../../images/work_list/vice.png"
            alt="VICE"
            placeholder="none"
            layout="constrained"
            quality="90"
          />
        </Styled.ImageWrapper>
        <div>
          <Styled.Title>My Dictionary</Styled.Title>
          <Styled.Dek>
            web application to search English words and their meanings.
          </Styled.Dek>
          <Pill>React</Pill>
          <Pill>Tailwind CSS</Pill>
        </div>
      </Styled.StyledLink>
      <Styled.Masonry>
        <Styled.MasonryColumn>
          <Styled.StyledLink
            to="https://github.com/nisalrenuja/weather-app"
            className="cover"
          >
            {/* <Styled.ImageWrapper>
                            <StaticImage
                                src="../../images/work_list/cover.png"
                                alt="Cover"
                                placeholder="none"
                                layout="constrained"
                                quality="90"
                            />
                        </Styled.ImageWrapper> */}
            <div>
              <Styled.Title>Weather App</Styled.Title>
              <Styled.Dek>
                web application to check the weather in a particular city or
                country.
              </Styled.Dek>
              <Pill>React</Pill>
              <Pill>Tailwind CSS</Pill>
            </div>
          </Styled.StyledLink>
        </Styled.MasonryColumn>
        <Styled.MasonryColumn>
          <Styled.StyledLink
            to="https://github.com/nisalrenuja"
            className="karma"
          >
            {/* <Styled.ImageWrapper>
                            <StaticImage
                                src="../../images/work_list/karma.png"
                                alt="Karma Go"
                                placeholder="none"
                                layout="constrained"
                                quality="90"
                            />
                        </Styled.ImageWrapper> */}
            <div>
              <Styled.Title>Karma</Styled.Title>
              <Styled.Dek>
                Simpler, friendlier Internet for everyone.
              </Styled.Dek>
              <Pill>2016</Pill>
            </div>
          </Styled.StyledLink>
          <Styled.StyledLink to="https://github.com/nisalrenuja">
            <div>
              <Styled.Title>Etsy</Styled.Title>
              <Styled.Dek>People Power.</Styled.Dek>
              <Pill>2013–2015</Pill>
            </div>
          </Styled.StyledLink>
        </Styled.MasonryColumn>
      </Styled.Masonry>
    </>
  );
};

export default WorkList;