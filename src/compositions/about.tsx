import { FC } from 'react';
import Stack from '../components/stack';
import Heading from '../components/heading';
import Body from '../components/body';
import Grid from '../components/grid';
import Responsive from '../components/responsive';

const ContentMobile: FC = () => {
  return (
    <>
      <Stack direction='VERTICAL' space={'var(--scale-36)'} 
        localStyles={{
          maxWidth: '52ch',
          margin: '0 auto',
          marginBottom: 'var(--scale-24)',
          '@media (min-width: 1120px)' :{
            maxWidth: 'auto',
          },
        }}>
        <Heading level='2'>ABOUT</Heading>
        <Body size='M'>Sheesh Coin is an Erc20 token focused on building a bridge between the Defi and NFT communities in entirety.</Body>
        <Body size='M'>Empower decentralization and opportunity to all communities involved.</Body>
      </Stack>
      <Stack direction='VERTICAL' space={'var(--scale-48)'}>
        <Heading level='2'>TOKENOMICS</Heading>
        <Stack direction="VERTICAL" space={'var(--scale-8)'}>
          <Heading level='5'>Total Supply</Heading>
          <Heading level='3'>420,000,000,000</Heading>
        </Stack>
        <Stack direction='HORIZONTAL' space={'var(--scale-8)'}>
          <Stack direction="VERTICAL" space={'var(--scale-8)'}>
            <Heading level='5'>Ticker</Heading>
            <Heading level='3'>$SHS</Heading>
          </Stack>
          <Stack direction="VERTICAL" space={'var(--scale-8)'}>
            <Heading level='5'>Tax</Heading>
            <Heading level='3'>0%</Heading>
          </Stack>
        </Stack>
        <Stack direction="VERTICAL" space={'var(--scale-4)'} localStyles={{marginTop: 'var(--scale-24)', marginBottom: 'var(--scale-24)'}}>
          <Heading level='6'>Contract</Heading>
          <Body size='M' localStyles={{wordBreak: 'break-word', maxWidth: 270, margin: '0 auto'}}>0xbB4f3aD7a2cf75d8EfFc4f6D7BD21d95F06165ca</Body>
        </Stack>
        <Stack direction="VERTICAL" space={'var(--scale-4)'}>
          <Heading level='6' localStyles={{marginBottom: 'var(--scale-12)'}}>Distribution</Heading>
          <Body size='M'>Pre-Sale • 29%</Body>
          <Body size='M'>Public • 24%</Body>
          <Body size='M'>Team • 9%</Body>
          <Body size='M'>Marketing • 4%</Body>
          <Body size='M'>CEX Reserve • 9%</Body>
          <Body size='M'>Staking Rewards • 20%</Body>
          <Body size='M'>PAYC DAO • 5%</Body>
        </Stack>
      </Stack>
    </>
  );
}

const ContentDesktop: FC = () => {
  return (
    <>
      <Stack direction='VERTICAL' space={'var(--scale-36)'} 
        localStyles={{
          maxWidth: '52ch',
        }}>
        <Heading level='1'>ABOUT</Heading>
        <Body size='L'>Sheesh Coin is an Erc20 token focused on building a bridge between the Defi and NFT communities in entirety.</Body>
        <Body size='L'>Empower decentralization and opportunity to all communities involved.</Body>
      </Stack>
      <Stack direction='VERTICAL' space={'var(--scale-36)'}>
        <Heading level='1'>TOKENOMICS</Heading>
        <Stack direction="VERTICAL" space={'var(--scale-8)'}>
          <Heading level='5'>Total Supply</Heading>
          <Heading level='2'>420,000,000,000</Heading>
        </Stack>
        <Stack direction='HORIZONTAL' space={'var(--scale-72)'}>
          <Stack direction="VERTICAL" space={'var(--scale-8)'} localStyles={{width: 'auto'}}>
            <Heading level='5'>Ticker</Heading>
            <Heading level='2'>$SHS</Heading>
          </Stack>
          <Stack direction="VERTICAL" space={'var(--scale-8)'} localStyles={{width: 'auto'}}>
            <Heading level='5'>Tax</Heading>
            <Heading level='2'>0%</Heading>
          </Stack>
        </Stack>
        <Stack direction="VERTICAL" space={'var(--scale-4)'} localStyles={{marginTop: 'var(--scale-24)', marginBottom: 'var(--scale-24)'}}>
          <Heading level='6'>Contract</Heading>
          <Body size='L' localStyles={{wordBreak: 'break-word'}}>0xbB4f3aD7a2cf75d8EfFc4f6D7BD21d95F06165ca</Body>
        </Stack>
        <Stack direction="VERTICAL" space={'var(--scale-4)'}>
          <Heading level='6' localStyles={{marginBottom: 'var(--scale-12)'}}>Distribution</Heading>
          <Body size='M'>Pre-Sale • 29%</Body>
          <Body size='M'>Public • 24%</Body>
          <Body size='M'>Team • 9%</Body>
          <Body size='M'>Marketing • 4%</Body>
          <Body size='M'>CEX Reserve • 9%</Body>
          <Body size='M'>Staking Rewards • 20%</Body>
          <Body size='M'>PAYC DAO • 5%</Body>
        </Stack>
      </Stack>
    </>
  );
}


const About: FC = () => {
  return (
    <>
      <Responsive below={1120}>
        <Stack 
          direction='VERTICAL' 
          space={'var(--scale-72)'} 
          localStyles={{
            textAlign: 'center', 
            borderRadius: 24, 
            padding: 'var(--scale-60) var(--scale-48) var(--scale-72)', 
            background: 'rgb(0 0 0 / 60%)', 
            minHeight: '100vh', 
            justifyContent: 'center'
          }}>
            <ContentMobile />
        </Stack>
      </Responsive>

      <Responsive above={1120}>
        <Stack 
          direction='VERTICAL' 
          localStyles={{
            padding: 'var(--scale-60)', 
            background: 'rgb(0 0 0 / 60%)', 
            minHeight: '100vh', 
            justifyContent: 'center',
            '@media (min-width: 1250px)' :{
              padding: 96, 
            },
          }}>
        <Grid columns={2} gap='112px' localStyles={{        
          maxWidth: 1200,
          margin: '0 auto var(--scale-48)',
          gridTemplateColumns: '1fr auto'
        }}>
          <ContentDesktop />
        </Grid>
        </Stack>
      </Responsive>
    </>
  );
  }


export default About;