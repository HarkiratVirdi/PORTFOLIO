import styled from "styled-components";

export const Loader = styled.div`
  background: #000;
  z-index: 999;
  top: 0;
  opacity: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  overflow: hidden;
  display: inline-block;
  padding: 1rem;
`;

export const NameDiv = styled.div`
  font-size: 2.5rem;
  color: #fff;
  will-change: transform;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Slider = styled.div`
  background-color: #fff;
  will-change: transform;
  transform-origin: center;
  z-index: 1000;
  position: absolute;
  top: 0;
  display: block;
  transform: scaleY(0);
  width: 100%;
  height: 100%;
  left: 0;
`;
