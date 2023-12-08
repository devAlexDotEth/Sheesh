import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Box from './box';
import PFP from '../assets/pfp/placeholder.png';
import Heading from './heading';
import Body from './body';
import Stack from './stack';
import Responsive from './responsive';

type Props = {
  heading?: string;
  description?: string;
  pfp?: string;
  children?: ReactNode;
  localStyles?: CSSObject;
}

const El = styled(Box)(({ localStyles }: Props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--scale-8) var(--scale-24)',
  height: '100vh',
  width: '100%',
  minHeight: 500,
  textAlign: 'center',
  '@media (min-width: 1500px)' :{
    padding: '224px 224px 224px 224px',
  },
  ...(localStyles)
}));


const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: 'var(--scale-24)',
});

const HeadingGroup = styled.div({
  display: 'flex',
  width: 'auto', 
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 'var(--scale-12)',
});

const ButtonGroup = styled.div({
  display: 'flex',
  width: 'auto', 
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--scale-12)',
});

const Image = styled.img({
  width: '100%',
  height: '100%',
});

const Banner: FC<Props> = ({ localStyles, pfp = PFP, children, heading = "Title", description = "Description", ...props }) => {
  return (
    <El localStyles={localStyles} {...props}>
      <Content>
        <Box 
          localStyles={{
            background: 'linear-gradient(171deg, rgba(172,172,172,1) 0%, rgba(214,214,214,1) 75%, rgba(184,184,184,1) 100%)',
            border: '4px solid #ccc',
            boxShadow: '0 24px 24px 0 rgb(0 0 0 / 24%)',
            width: 150, 
            height: 150, 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '100%',
            margin: '0 auto',
            }}>
          <Image src={pfp} alt={heading} />
        </Box>
        <HeadingGroup>
          <Responsive below={1375}>
              <Stack direction='VERTICAL' space={'var(--scale-16)'} localStyles={{alignItems: 'center', marginBottom: 24}}>
                <Heading level="2">{heading}</Heading>
                <Body size='L' localStyles={{maxWidth: '32ch'}}>{description}</Body>
              </Stack>
            </Responsive>
            <Responsive above={1375}>
              <Stack direction='VERTICAL' space={'var(--scale-16)'} localStyles={{alignItems: 'center', marginBottom: 24}}>
                <Heading level="1">{heading}</Heading>
                <Body size='XL' localStyles={{maxWidth: '32ch'}}>{description}</Body>
              </Stack>
            </Responsive>
          <ButtonGroup>
            {children}
          </ButtonGroup>
        </HeadingGroup>
      </Content>
    </El>
  );
}

export default Banner;