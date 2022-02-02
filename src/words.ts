const defaultMessage = ' Using word of the day instead.'

export function getDayNumber() {
  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return day
}
export function getWordOfTheDay(day: number) {
  return answers[day]
}

// copied from Wordle source
const answers = [  'abode',
  'about',
  'above',
  'adapt',
  'added',
  'adept',
  'adopt',
  'adorn',
  'adult',
  'aesir',
  'after',
  'again',
  'agate',
  'agile',
  'aging',
  'agree',
  'aided',
  'alarm',
  'alder',
  'alert',
  'alien',
  'alive',
  'allow',
  'aloft',
  'alone',
  'along',
  'alter',
  'amber',
  'among',
  'anvil',
  'apart',
  'apply',
  'aquan',
  'areas',
  'arise',
  'armed',
  'armor',
  'array',
  'arrow',
  'ashes',
  'aside',
  'asked',
  'auran',
  'avert',
  'avoid',
  'awake',
  'award',
  'aware',
  'azers',
  'badly',
  'balls',
  'balor',
  'bands',
  'barbs',
  'bards',
  'based',
  'basic',
  'basis',
  'bathe',
  'beads',
  'beams',
  'beans',
  'beard',
  'bears',
  'beast',
  'beats',
  'begin',
  'behir',
  'being',
  'below',
  'berry',
  'binds',
  'birth',
  'black',
  'blade',
  'bland',
  'blank',
  'blast',
  'bleed',
  'blend',
  'bless',
  'blind',
  'blink',
  'block',
  'blood',
  'blows',
  'blunt',
  'bolts',
  'bonds',
  'bones',
  'bonus',
  'booms',
  'boots',
  'borne',
  'bound',
  'brace',
  'brand',
  'brass',
  'break',
  'brief',
  'bring',
  'broad',
  'brook',
  'broom',
  'brown',
  'brunt',
  'brush',
  'brute',
  'build',
  'burns',
  'burnt',
  'burst',
  'buyer',
  'cable',
  'calls',
  'camel',
  'cards',
  'carry',
  'carve',
  'cases',
  'casts',
  'catch',
  'cause',
  'caves',
  'cease',
  'cells',
  'chafe',
  'chain',
  'chalk',
  'chaos',
  'charm',
  'chart',
  'chasm',
  'check',
  'chest',
  'chief',
  'child',
  'chill',
  'chime',
  'choke',
  'chomp',
  'chose',
  'chunk',
  'chuul',
  'claim',
  'clash',
  'class',
  'claws',
  'clean',
  'clear',
  'click',
  'climb',
  'cling',
  'cloak',
  'clone',
  'close',
  'cloth',
  'cloud',
  'clubs',
  'clues',
  'clump',
  'coach',
  'coast',
  'coats',
  'cobra',
  'coins',
  'color',
  'comes',
  'comic',
  'cones',
  'coral',
  'costs',
  'could',
  'count',
  'cover',
  'covet',
  'crack',
  'craft',
  'crank',
  'crash',
  'crawl',
  'creep',
  'crook',
  'crops',
  'cross',
  'crowd',
  'crown',
  'crude',
  'crush',
  'cubes',
  'cubic',
  'cured',
  'cures',
  'curse',
  'cycle',
  'daily',
  'dance',
  'dared',
  'darts',
  'deals',
  'dealt',
  'death',
  'decay',
  'decks',
  'deeds',
  'deems',
  'deity',
  'delve',
  'demon',
  'dense',
  'depth',
  'devil',
  'dimly',
  'djinn',
  'dodge',
  'dogma',
  'doing',
  'doors',
  'doses',
  'douse',
  'draft',
  'drain',
  'drawn',
  'draws',
  'dread',
  'dream',
  'dried',
  'dries',
  'drink',
  'drive',
  'drops',
  'druid',
  'drunk',
  'dryad',
  'dusty',
  'dwarf',
  'dwell',
  'dying',
  'eager',
  'eagle',
  'early',
  'earth',
  'eater',
  'ebony',
  'edged',
  'edges',
  'eight',
  'elect',
  'elven',
  'elves',
  'emits',
  'empty',
  'ended',
  'enemy',
  'enjoy',
  'enter',
  'entry',
  'equal',
  'equip',
  'erase',
  'erect',
  'erupt',
  'ether',
  'ettin',
  'event',
  'every',
  'evoke',
  'exact',
  'exert',
  'exist',
  'extra',
  'exude',
  'faces',
  'facts',
  'faded',
  'fades',
  'fails',
  'faint',
  'faith',
  'falls',
  'false',
  'fates',
  'favor',
  'fears',
  'feast',
  'feats',
  'feeds',
  'feels',
  'feral',
  'fetch',
  'fetid',
  'fever',
  'fewer',
  'field',
  'fiend',
  'fiery',
  'fifty',
  'fight',
  'fills',
  'filth',
  'final',
  'finds',
  'finer',
  'fires',
  'first',
  'fixed',
  'fixes',
  'flail',
  'flame',
  'flare',
  'flash',
  'flask',
  'flaws',
  'flesh',
  'flies',
  'flint',
  'flock',
  'flood',
  'floor',
  'flour',
  'flows',
  'fluid',
  'flung',
  'flute',
  'focus',
  'foils',
  'folds',
  'foods',
  'foray',
  'force',
  'forge',
  'forgo',
  'forms',
  'forth',
  'found',
  'foyer',
  'frame',
  'freed',
  'frees',
  'fresh',
  'front',
  'frost',
  'fruit',
  'fuels',
  'fully',
  'fumes',
  'funds',
  'fungi',
  'funny',
  'fuzzy',
  'gains',
  'games',
  'gangs',
  'gases',
  'gauze',
  'geese',
  'ghast',
  'ghost',
  'ghoul',
  'giant',
  'gifts',
  'gills',
  'given',
  'gives',
  'glare',
  'glass',
  'gleam',
  'globe',
  'glory',
  'glyph',
  'gnoll',
  'gnome',
  'goads',
  'goals',
  'goats',
  'godly',
  'going',
  'golem',
  'goods',
  'grabs',
  'grant',
  'grasp',
  'grass',
  'grave',
  'great',
  'greek',
  'green',
  'grick',
  'grief',
  'grips',
  'group',
  'grove',
  'grown',
  'grows',
  'guano',
  'guard',
  'guide',
  'guild',
  'gully',
  'gusts',
  'hafts',
  'halve',
  'hands',
  'handy',
  'hangs',
  'harms',
  'harpy',
  'harsh',
  'haste',
  'hatch',
  'haunt',
  'hawks',
  'heads',
  'heard',
  'hears',
  'heart',
  'heavy',
  'hedge',
  'heels',
  'heirs',
  'hells',
  'helps',
  'herbs',
  'hides',
  'hills',
  'hired',
  'hoist',
  'holds',
  'holes',
  'holly',
  'homes',
  'honed',
  'honey',
  'honor',
  'hooks',
  'horde',
  'horns',
  'horse',
  'hound',
  'hours',
  'house',
  'hover',
  'human',
  'hunts',
  'hurls',
  'hurry',
  'hydra',
  'hyena',
  'ideal',
  'ignan',
  'image',
  'imbue',
  'inert',
  'inner',
  'issue',
  'items',
  'ivory',
  'jelly',
  'jewel',
  'joker',
  'judge',
  'jumps',
  'keeps',
  'keyed',
  'kinds',
  'kings',
  'knack',
  'knock',
  'knots',
  'known',
  'knows',
  'labor',
  'laced',
  'lacks',
  'laden',
  'lairs',
  'lakes',
  'lamia',
  'lance',
  'lands',
  'large',
  'lasts',
  'latch',
  'later',
  'layer',
  'leads',
  'leaks',
  'leaky',
  'leaps',
  'learn',
  'least',
  'leave',
  'legal',
  'level',
  'lever',
  'lifts',
  'light',
  'limit',
  'linen',
  'lines',
  'links',
  'lions',
  'lists',
  'lives',
  'loath',
  'local',
  'locks',
  'logic',
  'looks',
  'looms',
  'loose',
  'lords',
  'loses',
  'loved',
  'lover',
  'lower',
  'lowly',
  'loyal',
  'lucky',
  'lunar',
  'lurks',
  'lying',
  'mages',
  'magic',
  'magma',
  'major',
  'makes',
  'manta',
  'march',
  'marks',
  'match',
  'mated',
  'meals',
  'means',
  'meant',
  'meets',
  'melds',
  'melee',
  'melts',
  'mercy',
  'merge',
  'metal',
  'midst',
  'might',
  'miles',
  'milky',
  'mimic',
  'minds',
  'minor',
  'minus',
  'mirth',
  'mists',
  'misty',
  'mixed',
  'model',
  'modes',
  'money',
  'monks',
  'month',
  'moral',
  'motes',
  'mound',
  'mount',
  'mouth',
  'moved',
  'moves',
  'mucus',
  'muddy',
  'mummy',
  'music',
  'nagas',
  'named',
  'nasal',
  'nasty',
  'needs',
  'never',
  'newly',
  'nexus',
  'nicer',
  'night',
  'noble',
  'noise',
  'norse',
  'noted',
  'notes',
  'oaths',
  'obeys',
  'occur',
  'ocean',
  'ochre',
  'offal',
  'offer',
  'often',
  'ogres',
  'older',
  'omens',
  'oozes',
  'opens',
  'order',
  'other',
  'othur',
  'ounce',
  'outer',
  'overt',
  'ovoid',
  'owner',
  'packs',
  'pages',
  'paint',
  'panel',
  'paper',
  'parts',
  'party',
  'patch',
  'paths',
  'peace',
  'peaks',
  'pearl',
  'phase',
  'piece',
  'piety',
  'pinch',
  'pints',
  'pipes',
  'pitch',
  'piton',
  'place',
  'plain',
  'plane',
  'plant',
  'plate',
  'plays',
  'poems',
  'point',
  'polar',
  'posed',
  'pouch',
  'pound',
  'pours',
  'power',
  'press',
  'preys',
  'price',
  'pried',
  'print',
  'prior',
  'prism',
  'prize',
  'probe',
  'prone',
  'proof',
  'props',
  'prove',
  'proxy',
  'pulls',
  'purse',
  'quaff',
  'queen',
  'quest',
  'quick',
  'quill',
  'quite',
  'quote',
  'races',
  'raged',
  'rages',
  'raise',
  'range',
  'ranks',
  'rarer',
  'rates',
  'raven',
  'reach',
  'react',
  'reads',
  'ready',
  'realm',
  'reels',
  'refer',
  'relic',
  'reply',
  'reset',
  'rests',
  'rider',
  'right',
  'rings',
  'rises',
  'risky',
  'rites',
  'rival',
  'roams',
  'roars',
  'robes',
  'rocks',
  'rocky',
  'rogue',
  'roles',
  'rolls',
  'rooms',
  'roper',
  'rough',
  'round',
  'route',
  'rowed',
  'royal',
  'ruins',
  'ruler',
  'rules',
  'runes',
  'rusts',
  'rusty',
  'sages',
  'sails',
  'satyr',
  'saves',
  'scale',
  'scare',
  'scope',
  'score',
  'scout',
  'scrap',
  'seals',
  'sears',
  'sects',
  'seeds',
  'seeks',
  'seems',
  'seize',
  'sends',
  'sense',
  'serum',
  'serve',
  'seven',
  'sewer',
  'shake',
  'shank',
  'shape',
  'shard',
  'share',
  'shark',
  'sharp',
  'shawm',
  'sheds',
  'sheen',
  'sheep',
  'sheer',
  'sheet',
  'shelf',
  'shell',
  'shift',
  'ships',
  'shirt',
  'shock',
  'shoes',
  'shoot',
  'short',
  'shove',
  'shown',
  'shows',
  'shrub',
  'sides',
  'siege',
  'sight',
  'sigil',
  'signs',
  'since',
  'sings',
  'sinks',
  'sites',
  'sixth',
  'sixty',
  'sizes',
  'skill',
  'skull',
  'skunk',
  'slain',
  'slams',
  'sleep',
  'sleet',
  'slick',
  'slime',
  'slimy',
  'sling',
  'slink',
  'slits',
  'slots',
  'slows',
  'slums',
  'small',
  'smart',
  'smash',
  'smear',
  'smell',
  'smite',
  'smoke',
  'snake',
  'snaps',
  'snare',
  'sneak',
  'snowy',
  'snuff',
  'solar',
  'solid',
  'solve',
  'songs',
  'sorts',
  'souls',
  'sound',
  'space',
  'spans',
  'spare',
  'spawn',
  'speak',
  'spear',
  'speed',
  'spell',
  'spend',
  'spent',
  'spies',
  'spike',
  'spill',
  'spins',
  'spits',
  'spore',
  'spray',
  'sprig',
  'staff',
  'stage',
  'stake',
  'stamp',
  'stand',
  'stars',
  'start',
  'state',
  'stays',
  'steam',
  'steed',
  'steel',
  'steep',
  'steer',
  'stein',
  'steps',
  'stick',
  'still',
  'sting',
  'stomp',
  'stone',
  'stops',
  'store',
  'storm',
  'story',
  'stout',
  'strap',
  'strip',
  'stuck',
  'study',
  'stuff',
  'stunt',
  'style',
  'suite',
  'suits',
  'surge',
  'swamp',
  'swarm',
  'swear',
  'sweep',
  'sweet',
  'swims',
  'sword',
  'sworn',
  'table',
  'taken',
  'takes',
  'taper',
  'tarts',
  'tasks',
  'taste',
  'taxes',
  'teach',
  'tears',
  'teems',
  'teens',
  'teeth',
  'tells',
  'tends',
  'tenth',
  'terms',
  'tests',
  'texts',
  'their',
  'there',
  'these',
  'thick',
  'thief',
  'thing',
  'think',
  'third',
  'thorn',
  'those',
  'three',
  'throw',
  'thugs',
  'tiger',
  'tight',
  'times',
  'toads',
  'token',
  'tomes',
  'tools',
  'topaz',
  'torch',
  'total',
  'totem',
  'touch',
  'tough',
  'tower',
  'towns',
  'toxic',
  'trace',
  'track',
  'trade',
  'train',
  'trait',
  'traps',
  'treat',
  'trees',
  'tribe',
  'trick',
  'tried',
  'tries',
  'trips',
  'troll',
  'truly',
  'trunk',
  'trust',
  'truth',
  'tubes',
  'turns',
  'tusks',
  'tweak',
  'twice',
  'twist',
  'types',
  'umara',
  'umber',
  'under',
  'unlit',
  'until',
  'upper',
  'usage',
  'using',
  'usual',
  'utter',
  'vague',
  'value',
  'vanir',
  'venom',
  'vials',
  'vigil',
  'vigor',
  'vines',
  'vital',
  'vivid',
  'voice',
  'vrock',
  'waged',
  'wagon',
  'waits',
  'wakes',
  'walks',
  'walls',
  'wants',
  'wards',
  'wasps',
  'watch',
  'water',
  'waved',
  'waves',
  'wears',
  'weave',
  'weeds',
  'weeks',
  'weigh',
  'weird',
  'whale',
  'wheat',
  'wheel',
  'whelm',
  'where',
  'which',
  'while',
  'whims',
  'white',
  'whole',
  'whose',
  'width',
  'wield',
  'wight',
  'winds',
  'wings',
  'winks',
  'wisps',
  'wispy',
  'witch',
  'woman',
  'women',
  'woods',
  'words',
  'worgs',
  'works',
  'world',
  'worry',
  'worst',
  'worth',
  'would',
  'wound',
  'write',
  'wrong',
  'wrote',
  'years',
  'yield',
  'young',
  'yours',
  'yucca',
]

export const allWords = [...answers]
