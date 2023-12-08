import styled from '@emotion/styled';
import image from './assets/banner.jpeg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  background-image: linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('${image}');
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-attachment: fixed;
`

