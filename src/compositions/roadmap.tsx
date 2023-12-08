import { FC } from 'react';
import styled from '@emotion/styled';
import Stack from '../components/stack';
import Grid from '../components/grid';
import PFP from '../assets/logo/logo.png';
import Card from '../components/card';
import Heading from '../components/heading';
import Body from '../components/body';
import Box from '../components/box';
import Responsive from '../components/responsive';

const Image = styled.img({
  width: '100%',
  height: '100%',
});

const Cards: FC = () => {
  return (
    <>
        <Card heading="Pre-Sale" description='Phase One'>
          <Body>Launch</Body>
          <Body>CoinMarketCap Listing</Body>
          <Body>CoinGecko Listings</Body>
          <Body>1000+ Holders</Body>
          <Body>Trending on Twitter</Body>
        </Card>

        <Card heading="Public Sale" description='Phase Two'>
          <Body>Token Gated Discord Group</Body>
          <Body>Governance contract for community to vote on protocol changes</Body>
          <Body>CEX Listings</Body>
          <Body>10,000+ Holders</Body>
        </Card>

        <Card heading="Token Staking" description='Phase Three'>
          <Body>Tier 1 Exchange Listings</Body>
          <Body>100,000+ Holders</Body>
          <Body>Tradable on Aura for all partner projects to list &amp; purchase their NFTs in $SHS</Body>
          <Body>NFT collection liquidity pools.</Body>
        </Card>
    </>
  );
}

const Roadmap: FC = () => {
  return (
    <Box localStyles={{padding: 'var(--scale-72) var(--scale-36)'}}>

      <Responsive below={1120}>
        <Stack 
          direction='VERTICAL' 
          space={'var(--scale-36)'}
          localStyles={{
            maxWidth: '75ch', 
            textAlign: 'center',
            margin: '0 auto var(--scale-48)'
        }}>
          
          <Heading level='2'>Roadmap</Heading>
          <Body size='M'>Deflationary through the PAYC ecosystem including but not limited to our ability to mint non dilutive NFTs into our ecosystem through our portal NFT staking contract. Paid in $SHS.</Body>
        </Stack>
      </Responsive>

      <Responsive above={1120}>
        <Stack 
          direction='VERTICAL' 
          space={'var(--scale-36)'}
          localStyles={{
            maxWidth: '75ch', 
            textAlign: 'center',
            margin: '0 auto var(--scale-48)'
        }}>
          
          <Heading level='1'>Roadmap</Heading>
          <Body size='L'>Deflationary through the PAYC ecosystem including but not limited to our ability to mint non dilutive NFTs into our ecosystem through our portal NFT staking contract. Paid in $SHS.</Body>
        </Stack>
      </Responsive>

      <Responsive below={1120}>
        <Stack direction='VERTICAL' space='var(--scale-48)' localStyles={{maxWidth: 500, margin: '0 auto'}}>
          <Cards />
        </Stack>
      </Responsive>

      <Responsive above={1120}>
        <Grid columns={3} gap='var(--scale-48)' localStyles={{maxWidth: 1400, margin: '0 auto'}}>
          <Cards />
        </Grid>
      </Responsive>

      <Stack 
        direction='VERTICAL'
        space={'var(--scale-24)'} 
        localStyles={{
          maxWidth: 300, 
          textAlign: 'center', 
          margin: 'var(--scale-72) auto var(--scale-72)',
          '@media (min-width: 1120px)' :{
            margin: '112px auto var(--scale-72)',
            maxWidth: 640,
          },
        }}>
        <Box 
          localStyles={{
            background: 'linear-gradient(171deg, rgba(172,172,172,1) 0%, rgba(214,214,214,1) 75%, rgba(184,184,184,1) 100%)',
            border: '4px solid #ccc',
            boxShadow: '0 24px 24px 0 rgb(0 0 0 / 24%)',
            width: 100, 
            height: 100, 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '100%',
            margin: '0 auto',
            }}>
          <Image src={PFP} alt="Sheesh Logo" />
        </Box>
        <Body size='S'>Sheesh Coin ERC20 token prioritizing decentralization and blockchain tech.</Body>
        <Body size='S'>Sheesh is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.</Body>
      </Stack>
    </Box>
  );
}

export default Roadmap;