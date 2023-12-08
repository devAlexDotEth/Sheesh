import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Box from './box';
import Heading from './heading';
import Body from './body';

type ElProps = {
  heading?: string;
  pfp?: string;
  description?: string;
  children?: ReactNode;
  localStyles?: CSSObject;
}

type Props = {
  heading?: string;
  pfp?: string;
  description?: string;
  children?: ReactNode;
  localStyles?: CSSObject;
}

const El = styled(Box)(({ localStyles }: ElProps) => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  background: 'rgb(0 0 0 / 50%)',
  width: '100%',
  borderRadius: 'var(--scale-8)',
  overflow: 'hidden',
  ...(localStyles)
}));


const Content = styled.div(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));


const Inner = styled.div(() => ({
  display: 'flex',
  width: '100%', 
  flexDirection: 'column',
  gap: 'var(--scale-12)',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 'var(--scale-36) var(--scale-48)',
  alignItems: 'center',
}));

const HeadingGroup = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--scale-4)',
  alignItems: 'center',
  textAlign: 'center',
}));

const ButtonGroup = styled.div(() => ({
  width: '100%',
  gap: 'var(--scale-12)',
  display: 'grid',
  marginTop: 'var(--scale-12)',
  gridTemplateColumns: '1fr',
}));

const Card: FC<Props> = ({ localStyles, description = "Collection Size • 6969", children, heading = "Title", ...props }) => {
  return (
    <El localStyles={localStyles} {...props}>
      <Content>
        <Inner>
          <HeadingGroup>
            <Heading level="4">{heading}</Heading>
            <Body size='M' localStyles={{background: '#00ac46', marginTop: 12, fontWeight: 'bold', padding: 'var(--scale-4) var(--scale-12)', borderRadius: 24}}>{description}</Body>
          </HeadingGroup>
          <ButtonGroup>
            {children}
          </ButtonGroup>
        </Inner>
      </Content>
    </El>
  );
}

export default Card;