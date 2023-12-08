import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Box from './box';
import Heading from './heading';

export type Props = {
  background?: string;
  children?: ReactNode;
  wallet?: ReactNode;
  localStyles?: CSSObject;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const El = styled.div(({ localStyles }: Props) => ({
  background: 'rgb(0 0 0 / 40%)',
  display: 'grid', 
  gridTemplateColumns: '1fr auto', 
  minHeight: 86, 
  alignItems: 'center',
  padding: '0 var(--scale-24)',
  borderBottom: '1px solid #FFFFFF40',
  width: '100%',
  zIndex: 1,
  '@media (min-width: 1080px)' :{
    padding: '0 var(--scale-36)',
  },
  '@media (min-width: 1200px)' :{
    gridTemplateColumns: 'auto 1fr auto',
    padding: '0 var(--scale-48)',
  },
  ...(localStyles)
}));

const DesktopMenu = styled.div(({
  gap: 6,
  display: 'flex',
  justifyContent: 'end'
}));

const Navigation: FC<Props> = ({ children, wallet, localStyles, isMobileMenuOpen, toggleMobileMenu, ...props }) => {

  return (
    <>
      <El localStyles={localStyles} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} {...props}>
        <Box localStyles={{display: 'flex', alignItems: 'center', marginRight: 'var(--scale-36)'}}>
          <Heading level='4'>SHEESH!</Heading>
        </Box>
        <DesktopMenu>{children}</DesktopMenu>
      </El>
    </>
  );
}

export default Navigation;