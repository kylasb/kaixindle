import { CONFIG } from './config'

export const WORDS = [
'minji',
'yubin',
'twice',
'cruise',
'amity',
'bitin',
'ilytm'
'loona',
'strip',
'strap',
'sobad',
'hands',
'boobs',
'horny',
'julia',
'blush',
'gelid',
'short',
'pushy',
'dildo',
'thing',
'legos',
'dream',
'thigh',
'tamen',
'gushi',
'debut',
'flynn',
'gworl',
'yoshi',
'jiyoo',
'bubba',
'casey',
'izzie',
'gahmi',
'hooty',
'hyeon',
'urhot',
'plank',
'harry',
'bonks',
'stars',
'choke',
'hello',
'movie',
'stare',
'sumin',
'wdtfs',
'water',
'pleek',
'stayc',
'hword',
'slash',
'after',
'swift'
'milfs',
'royal',
'debut',
'candy',
'siren',
'thigh',
'fever',
'seori',
'aespa',
'woozi'
'letme',
'angel',
'youha',
'edily',
'suggi',
'roach',
'naega',
'efron',
'emcee',
'grill',
'gecko',
'leash',
'knees'
'stabs',
'epcot',
'tower',
'panda',
'pasta',
'brows'
'tease',
'bunso',
'thong',
'pizza',
'seuss'
'bunny'
'block',
'sleep',
'roses',
'onces',
'venus',
'crush',
'heart',
'minor',
'rides', 
'passe',
'stare',
'stole',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
