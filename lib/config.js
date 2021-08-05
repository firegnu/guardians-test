import orientation from '../lib/orientation';

export default {
  // @if orientation=='por'
  width: orientation.por.width,
  height: orientation.por.height,
  // @endif

  // @if orientation=='lnd'
  width: orientation.lnd.width,
  height: orientation.lnd.height,
  // @endif
  style: {
    default: Object.freeze({
      font: 'Riffic',
      fontSize: '16px',
      fill: '#FFFFFF'
    }),
    titleRed: Object.freeze({
      font: 'Peace Sans',
      fontSize: '20px',
      fill: '#f15f4e',
      align: 'center'
    }),
    bestScore: Object.freeze({
      font: 'Riffic',
      fontSize: '70px',
      fill: '#ffffff'
    }),
    titleLilac: Object.freeze({
      font: 'Riffic',
      fontSize: '43px',
      fill: '#7e2bba'
    }),
    subtitle: Object.freeze({
      font: 'Peace Sans',
      fontSize: '17px',
      fill: '#FFFFFF'
    }),
    subtitleRiffic: Object.freeze({
      font: 'Riffic',
      fontSize: '16px',
      fill: '#FFFFFF'
    }),
    subtitleOpenSans: Object.freeze({
      font: 'Open Sans',
      fontSize: '14px',
      fill: '#FFFFFF',
      fontWeight: '900'
    }),
    subtitleDefault: Object.freeze({
      font: 'Riffic',
      fontSize: '14px',
      fill: '#FFFFFF',
      fontWeight: '800'
    }),
    subtitleYellow: Object.freeze({
      font: 'Riffic',
      fontSize: '20px',
      fill: '#f1c929'
    }),
    detail: Object.freeze({
      font: 'Riffic',
      fontSize: '50px',
      fill: '#FFFFFF'
    }),
    defaultCenter: Object.freeze({
      font: 'Riffic',
      fontSize: '16px',
      fill: '#FFFFFF',
      align: 'center'
    }),
    text: Object.freeze({
      font: 'Riffic',
      fontSize: '17px',
      fill: '#FFFFFF'
    }),
    levelCoompleted: Object.freeze({
      font: 'Peace Sans',
      fontSize: '22px',
      fill: '#ffaf25',
      align: 'center'
    }),
    feedBack: Object.freeze({
      font: 'Peace Sans',
      fontSize: '30px',
      fill: '#af3333',
      align: 'center'
    }),
    titlePurple: Object.freeze({
      font: 'Peace Sans',
      fontSize: '43px',
      fill: '#7e2bba',
      align: 'center'
    })
  },
  data: {
    sound: 'sound',
    vibration: 'vibration',
    score: 'score',
    level: 'level'
  },
  scenarios: {
    streets: 'streets',
    office: 'office',
    coffeeShop: 'coffeeShop',
    cassino: 'cassino'
  },
  cups: {
    plastic: 'cup-plastic',
    coffee: 'cup-coffee',
    fancy: 'cup-fancy',
    mug: 'cup-mug'
  },
  select: {
    plastic: 'plastic',
    coffee: 'coffee',
    fancy: 'fancy',
    mug: 'mug'
  },
  eggs: {
    white: 'white',
    suit: 'suit',
    dino: 'dino'
  },
  image: {
    bgHowToPlay: 'bgHowToPlay',
    eggSore: 'eggSore',
    ctnScore: 'ctnScore',
    focus: 'focus',
    on: 'on',
    off: 'off',
    arrows: 'arrows',
    logoCrazyEggs: 'logoCrazyEggs',
    button: 'button',
    logokaios: 'logokaios',
    dialog: 'dialog'
  }
};
