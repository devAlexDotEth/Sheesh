import React from 'react';
import styled from '@emotion/styled';

interface MediaQueryProps {
  above?: number;
  below?: number;
  children: React.ReactNode;
}

const MediaQueryContainer = styled.div<MediaQueryProps>`
  display: none;

  ${(props) =>
    props.above &&
    `@media (min-width: ${props.above}px) {
      display: block;
    `}

  ${(props) =>
    props.below &&
    `@media (max-width: ${props.below}px) {
      display: block;
    `}
`;

const Responsive: React.FC<MediaQueryProps> = ({ above, below, children }) => {
  return <MediaQueryContainer above={above} below={below}>{children}</MediaQueryContainer>;
};

export default Responsive;