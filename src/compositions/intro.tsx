import { FC } from 'react';
import Banner from '../components/banner';
import Telegram from '../assets/svg/telegram.svg';
import PFP from '../assets/logo/logo.png';
import X from '../assets/svg/x.svg';
import Dextools from '../assets/svg/dextools.svg';
import Etherscan from '../assets/svg/etherscan.svg';
import Uniswap from '../assets/svg/uniswap.svg';
import Button from '../components/button';
import Anchor from '../components/anchor';
import styled from '@emotion/styled';
import Grid from '../components/grid';
import Stack from '../components/stack';

const ImageWrapper = styled.div({
  width: 48,
  height: 48,
});

const Image = styled.img({
  width: '100%',
  height: '100%',
});

const Intro: FC = () => {
  return (
    <Banner pfp={PFP} heading='Sheesh Coin' description='An ERC20 token prioritizing decentralization &amp; blockchain tech.'>
      <Stack direction='VERTICAL' space={'var(--scale-48)'} localStyles={{alignItems: 'center'}}>
        <Grid columns={5} gap="var(--scale-24)">
          <Anchor href='http://t.me/ssheesherc20' target='_blank'>
            <ImageWrapper><Image src={Telegram} alt="Telegram"/></ImageWrapper>
          </Anchor>
          <Anchor href='https://twitter.com/sheesherc20' target='_blank'>
            <ImageWrapper><Image src={X} alt="X"/></ImageWrapper>
          </Anchor>
          <Anchor href='https://www.dextools.io/app/en/ether/pair-explorer/0xbb4f3ad7a2cf75d8effc4f6d7bd21d95f06165ca' target='_blank'>
            <ImageWrapper><Image src={Dextools} alt="Dextools"/></ImageWrapper>
          </Anchor>
          <Anchor href='https://app.uniswap.org/#/tokens/ethereum/0xbb4f3ad7a2cf75d8effc4f6d7bd21d95f06165ca' target='_blank'>
            <ImageWrapper><Image src={Uniswap} alt="Uniswap"/></ImageWrapper>
          </Anchor>
          <Anchor href='https://etherscan.io/address/0xbB4f3aD7a2cf75d8EfFc4f6D7BD21d95F06165ca' target='_blank'>
            <ImageWrapper><Image src={Etherscan} alt="Etherscan"/></ImageWrapper>
          </Anchor>
        </Grid>
        <Button size='L' variant="PRIMARY" as="a" href='https://app.uniswap.org/#/tokens/ethereum/0xbb4f3ad7a2cf75d8effc4f6d7bd21d95f06165ca' target="_blank">Swap Now</Button>
      </Stack>
    </Banner>
  );
}


export default Intro;


