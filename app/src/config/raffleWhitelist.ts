import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
//  ['DaCbuiX3JFurJ5ZvvT4v4XhMapNJH2bgAc2bdXrBKH8G', { name: 'TheSuperSOL #14' }],
//  ['BqtSZWca7bCz1hPSnf2AV6gepaGYbpUGW1tAMCfweEeF', { name: 'TheSuperSOL #1' }],
//  ['SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3', { name: 'TheSuperSOL #17' }],
//  ['8pw3gjNJNc6fJAGwUeLY8ktmEp8A2cJy4hHVYUnSPEgD', { name: 'The 97 Universe #2' }],
//  ['BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3', { name: 'The 97 Universe #91' }],
//  ['dZ1V9awzQNVRAxDURkivGX98D49nnoV3BcC16aiRCHV', { name: 'TheSuperSOL Token' }],
//  ['DuXQXfkASwRTXRRsspRnQSyBBj1zdRiErUwh7aM4rJKY', { name: 'TheSuperSOL Token #2' }],
//  ['Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM', { name: '$1000 TSOS' }],
//  ['D75CkLPGdmyCmqi7isBPpQ4E2HExEfZGsjHar8MdjMSX', { name: 'TheSuperSOL TICKET' }],
//  ['G8MYUG2VDnuJKHu1icVjHWcoNDMLpACdjCu4uveyAFw7', { name: ' Reveal TheSuperSOL 3 NFT ' }],


  [
    'D75CkLPGdmyCmqi7isBPpQ4E2HExEfZGsjHar8MdjMSX',
    {
      name: 'Vandal #1805',
      overviewImageUri: 'https://storage.googleapis.com/vc-metadata.appspot.com/images/1805.png',
      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    'dZ1V9awzQNVRAxDURkivGX98D49nnoV3BcC16aiRCHV',
    {
      name: 'DeGod #9560',
      overviewImageUri: 'https://metadata.degods.com/g/9559-dead.png',
      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    '8pw3gjNJNc6fJAGwUeLY8ktmEp8A2cJy4hHVYUnSPEgD',
    {
      name: 'Okay Bear #4965',
      overviewImageUri: 'https://bafybeie6axzmpeqswiugsuim2d7d3mptwgviwnt5o6k5wuyxfkd357sk24.ipfs.nftstorage.link/4964.png?ext=png',
      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    'BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3',
    {
      name: 'Blocksmith Labs #391',
      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    'DuXQXfkASwRTXRRsspRnQSyBBj1zdRiErUwh7aM4rJKY',
    {
      name: 'Rakkudo #5146',
      overviewImageUri: 'https://bafybeih7d4w3wbpeataqv4cictt7z3r6rzmopy4e3pib2hfzfae7r3rv3e.ipfs.nftstorage.link/5145.png?ext=png',
      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    'Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM',
    {
      name: '1000 $TSOS',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'G8MYUG2VDnuJKHu1icVjHWcoNDMLpACdjCu4uveyAFw7',
    {
      name: 'Reveal TheSuperSOL 3 NFT',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'DaCbuiX3JFurJ5ZvvT4v4XhMapNJH2bgAc2bdXrBKH8G',
    {
      name: 'TheSuperSOL #14',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'BqtSZWca7bCz1hPSnf2AV6gepaGYbpUGW1tAMCfweEeF',
    {
      name: 'TheSuperSOL #1',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3',
    {
      name: 'TheSuperSOL #17',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM',
    {
      name: '1000 $TSOS',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
//  [
//    'SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3',
//    {
//      name: 'TheSuperSOL #17',
//      overviewImageUri: '/resources/001-mainnet-launch.gif',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3',
    {
      name: 'The 97 Universe #91',
      overviewImageUri: 'https://tn72w7g3egypmkcfhdf3qbbuvo4yhhnznx5wc3vlhn4remod57va.arweave.net/m3-rfNshsPYoRTjLuAQ0q7mDnblt-2Fuqzt5EjHD7-o?ext=png',
    },
  ],
  [
    '2QjkshNu3mrcCnriekTpppa3PFwnAR9Yf7v5vc54m2Yh',
    {
      name: 'First SOL raffle',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    '8aEm1MoDqkYT5vCB21jC6aMMcMbdQJgmHpyBbtHDfUjU',
    {
      name: 'Anti Artist Club',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],
  [
    '2ziwAj4awgvNyn8ywwjkBRkBsmv259u9vVyEdrGYTb54',
    {
      name: 'More SOL',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    'EgHys3WPcM5WRpKqVHs1REfK6Npzq9sJ7dZPFPzQy2xG',
    {
      name: 'Triple SOL',
      overviewImageUri: '/resources/solana-logo-x3.gif',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
