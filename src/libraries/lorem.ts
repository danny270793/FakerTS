import Arrays from './arrays';
import Numbers from './numbers';

export default class Lorem {
  private static readonly WORDS = [
    'ad', 'adipisicing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum',
    'commodo', 'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt',
    'do', 'dolor', 'dolore', 'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse',
    'est', 'et', 'eu', 'ex', 'excepteur', 'exercitation', 'fugiat', 'id',
    'in', 'incididunt', 'ipsum', 'irure', 'labore', 'laboris', 'laborum',
    'lorem', 'magna', 'minim', 'mollit', 'nisi', 'non', 'nostrud', 'nulla',
    'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis', 'reprehenderit',
    'sed', 'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit', 'veniam',
    'voluptate'
  ];

  private static readonly SUPPLEMENTAL = [
    'abbas', 'abduco', 'abeo', 'abscido', 'absconditus', 'absens', 'absorbeo',
    'absque', 'abstergo', 'absum', 'abundans', 'abutor', 'accedo', 'accendo',
    'acceptus', 'accipio', 'accommodo', 'accusator', 'acer', 'acerbitas',
    'acervus', 'acidus', 'acies', 'acquiro', 'acsi', 'adamo', 'adaugeo',
    'addo', 'adduco', 'ademptio', 'adeo', 'adeptio', 'adfectus', 'adfero',
    'adficio', 'adflicto', 'adhaero', 'adhuc', 'adicio', 'adimpleo', 'adinventitias',
    'adipiscor', 'adiuvo', 'administratio', 'admiratio', 'admitto', 'admoneo',
    'admoveo', 'adnuo', 'adopto', 'adorno', 'adstringo', 'adsuesco', 'adsum',
    'adulatio', 'adulescens', 'adultus', 'aduro', 'advenio', 'adversus',
    'advoco', 'aedificium', 'aeger', 'aegre', 'aegrotatio', 'aegrus', 'aeneus',
    'aequitas', 'aequus', 'aer', 'aestas', 'aestivus', 'aestus', 'aetas',
    'aeternus', 'ager', 'aggero', 'aggredior', 'agnitio', 'agnosco', 'ago',
    'ait', 'aiunt', 'alienus', 'alii', 'alioqui', 'aliquid', 'alius', 'allatus',
    'alo', 'alter', 'altus', 'alveus', 'amaritudo', 'ambitus', 'ambulo',
    'amicitia', 'amiculum', 'amissio', 'amita', 'amitto', 'amo', 'amor',
    'amoveo', 'amplexus', 'amplitudo', 'amplus', 'ancilla', 'angelus', 'angulus',
    'angustus', 'animadverto', 'animus', 'annus', 'anser', 'ante', 'antea',
    'antepono', 'antiquus', 'aperio', 'aperte', 'apostolus', 'apparatus',
    'appello', 'appono', 'appositus', 'approbo', 'apto', 'aptus', 'apud',
    'aqua', 'ara', 'aranea', 'arbitro', 'arbor', 'arbustum', 'arca', 'arceo',
    'arcesso', 'arcus', 'argentum', 'argumentum', 'arguo', 'arma', 'armarium',
    'armo', 'aro', 'ars', 'artificiose', 'artificiosus', 'arto', 'arx', 'ascisco',
    'ascit', 'asper', 'aspicio', 'asporto', 'assentator', 'astrum', 'atavus',
    'ater', 'atqui', 'atrocitas', 'atrox', 'attero', 'attollo', 'attonbitus',
    'auctor', 'auctus', 'audacia', 'audax', 'audentia', 'audeo', 'audio',
    'auditor', 'aufero', 'aureus', 'auris', 'aurum', 'aut', 'autem', 'autus',
    'auxilium', 'avaritia', 'avarus', 'aveho', 'averto', 'avoco', 'baiulus',
    'balbus', 'barba', 'bardus', 'basium', 'beatus', 'bellicus', 'bellum',
    'bene', 'beneficium', 'benevolentia', 'benigne', 'bestia', 'bibo',
    'bis', 'blandior', 'bonus', 'bos', 'brevis', 'cado', 'caecus', 'caelestis',
    'caelum', 'calamitas', 'calcar', 'calco', 'calculus', 'callide', 'campana',
    'candidus', 'canis', 'canonicus', 'canto', 'capillus', 'capio', 'capitulus',
    'capto', 'caput', 'carbo', 'carcer', 'careo', 'caries', 'cariosus', 'caritas',
    'carmen', 'carpo', 'carus', 'casso', 'caste', 'casus', 'catena', 'caterva',
    'cattus', 'cauda', 'causa', 'caute', 'caveo', 'cavus', 'cedo', 'celebrer',
    'celer', 'celeritas', 'celo', 'cena', 'cenaculum', 'ceno', 'censura',
    'centum', 'cerno', 'cernuus', 'certe', 'certo', 'certus', 'cervus', 'cetera',
    'charisma', 'chirographum', 'cibo', 'cibus', 'cicuta', 'cilicium', 'cimentarius',
    'ciminatio', 'cinis', 'circumvenio', 'cito', 'civis', 'civitas', 'clam',
    'clamo', 'claro', 'clarus', 'claudeo', 'claustrum', 'clementia', 'clibanus',
    'coadunatio', 'coaegresco', 'coepi', 'coerceo', 'cogito', 'cognatus',
    'cognomen', 'cogo', 'cohaero', 'cohibeo', 'cohors', 'collatus', 'colligo',
    'colloco', 'collum', 'colo', 'color', 'coma', 'combibo', 'comburo', 'comedo',
    'comes', 'cometes', 'comis', 'comitatus', 'commemoro', 'commodo', 'communis',
    'comparo', 'compello', 'complectus', 'compono', 'comprehendo', 'comptus',
    'conatus', 'concedo', 'concido', 'conculco', 'condico', 'conduco', 'confero',
    'confido', 'conforto', 'confugo', 'congregatio', 'conicio', 'coniecto',
    'conitor', 'coniuratio', 'conor', 'conqueror', 'conscendo', 'conservo',
    'considero', 'conspergo', 'constans', 'consuasor', 'contabesco', 'contego',
    'contigo', 'contra', 'conturbo', 'conventus', 'convoco', 'copia', 'copiose',
    'cornu', 'corona', 'corpus', 'correptius', 'corrigo', 'corroboro', 'corrumpo',
    'coruscus', 'cotidie', 'crapula', 'cras', 'crastinus', 'creator', 'creber',
    'crebro', 'credo', 'creo', 'creptio', 'crepusculum', 'cresco', 'creta',
    'cribro', 'crinis', 'cruciamentum', 'crudelis', 'cruentus', 'crur', 'crustulum',
    'crux', 'cubicularis', 'cubitum', 'cubo', 'cui', 'cuius', 'culpa', 'culpo',
    'cultellus', 'cultura', 'cum', 'cumque', 'cunabula', 'cunae', 'cunctatio',
    'cupiditas', 'cupio', 'cuppedia', 'cupressus', 'cur', 'cura', 'curatio',
    'curia', 'curiositas', 'curis', 'curo', 'curriculum', 'currus', 'cursim',
    'curso', 'cursus', 'curto', 'curtus', 'curvo', 'curvus', 'custodia', 'damnatio',
    'damno', 'dapifer', 'debeo', 'debilito', 'decens', 'decerno', 'decet',
    'decimus', 'decipio', 'decor', 'decretum', 'decumbo', 'dedecor', 'dedico',
    'deduco', 'defaeco', 'defendo', 'defero', 'defessus', 'defetiscor', 'deficio',
    'defigo', 'defleo', 'defluo', 'defungo', 'degenero', 'degero', 'degusto',
    'deinde', 'delectatio', 'delego', 'deleo', 'delibero', 'delicate', 'delinquo',
    'deludo', 'demens', 'demergo', 'demitto', 'demo', 'demonstro', 'demoror',
    'demulceo', 'demum', 'denego', 'denique', 'dens', 'denuncio', 'denuo',
    'deorsum', 'depereo', 'depono', 'depopulo', 'deporto', 'depraedo', 'deprecator',
    'deprimo', 'depromo', 'depulso', 'deputo', 'derelinquo', 'derideo', 'deripio',
    'desidero', 'desino', 'desipio', 'desolo', 'desparatus', 'despecto', 'despirmatio',
    'infit', 'inflammatio', 'paens', 'patior', 'patria', 'patrocinor', 'patruus',
    'pauci', 'paulatim', 'pauper', 'pax', 'peccatus', 'pecco', 'pecto', 'pectus',
    'pecunia', 'pecus', 'peior', 'pel', 'ocer', 'socius', 'sodalitas', 'sol',
    'solium', 'solitudo', 'sollers', 'sollicito', 'solum', 'solus', 'solutio',
    'solvo', 'somniculosus', 'somnus', 'sonitus', 'sono', 'sophismata', 'sopor',
    'sordeo', 'sortitus', 'spargo', 'speciosus', 'spectaculum', 'speculum',
    'sperno', 'spero', 'spes', 'spiculum', 'spiritus', 'spoliatio', 'sponte',
    'stabilis', 'statim', 'statua', 'stella', 'stillicidium', 'stipes', 'stips',
    'sto', 'strenuus', 'strues', 'studio', 'stultus', 'suadeo', 'suasoria',
    'sub', 'subito', 'subiungo', 'sublime', 'subnecto', 'subseco', 'substantia',
    'subvenio', 'succedo', 'succurro', 'sufficio', 'suffoco', 'suffragium',
    'suggero', 'sui', 'sulum', 'sum', 'summa', 'summisse', 'summopere', 'sumo',
    'sumptus', 'supellex', 'super', 'suppellex', 'supplanto', 'suppono', 'supra',
    'surculus', 'surgo', 'sursum', 'suscipio', 'suspendo', 'sustineo', 'suus',
    'synagoga', 'tabella', 'tabernus', 'tabesco', 'tabgo', 'tabula', 'taceo',
    'tactus', 'taedium', 'talio', 'talis', 'talus', 'tam', 'tamdiu', 'tamen',
    'tametsi', 'tamisium', 'tamquam', 'tandem', 'tantillus', 'tantum', 'tardus',
    'tego', 'temeritas', 'temperantia', 'templum', 'temptatio', 'tempus', 'tenax',
    'tendo', 'teneo', 'tener', 'tenuis', 'tenus', 'tepesco', 'tepidus', 'ter',
    'terebro', 'teres', 'terga', 'tergeo', 'tergiversatio', 'tergo', 'tergum',
    'termes', 'terminatio', 'tero', 'terra', 'terreo', 'territo', 'terror',
    'tersus', 'tertius', 'testimonium', 'texo', 'textilis', 'textus', 'thalassinus',
    'theatrum', 'theca', 'thema', 'theologus', 'thermae', 'thesaurus', 'thesis',
    'thorax', 'thymbra', 'thymum', 'tibi', 'timidus', 'timor', 'titulus', 'tolero',
    'tollo', 'tondeo', 'tonsor', 'torqueo', 'torrens', 'tot', 'totidem', 'toties',
    'totus', 'tracto', 'trado', 'traho', 'trans', 'tredecim', 'tremo', 'trepide',
    'tres', 'tribuo', 'tricesimus', 'triduana', 'triginta', 'tripudium', 'tristis',
    'triumphus', 'trucido', 'truculenter', 'tubineus', 'tui', 'tum', 'tumultus',
    'tunc', 'turba', 'turbo', 'turpe', 'turpis', 'tutamen', 'tutis', 'tyrannus',
    'uberrime', 'ubi', 'ulciscor', 'ullus', 'ulterius', 'ultio', 'ultra', 'umbra',
    'umerus', 'umquam', 'una', 'unde', 'undique', 'universe', 'unus', 'urbanus',
    'urbs', 'uredo', 'usitas', 'usque', 'ustilo', 'ustulo', 'usus', 'uter',
    'uterque', 'utilis', 'utique', 'utor', 'utpote', 'utrimque', 'utroque',
    'utrum', 'uxor', 'vaco', 'vacuus', 'vado', 'vae', 'valde', 'valens', 'valeo',
    'valetudo', 'validus', 'vallum', 'vapulus', 'varietas', 'varius', 'vehemens',
    'vel', 'velociter', 'velum', 'velut', 'venia', 'venio', 'ventito', 'ventosus',
    'ventus', 'venustas', 'ver', 'verbera', 'verbum', 'vere', 'verecundia',
    'vereor', 'vergo', 'veritas', 'vero', 'verso', 'versus', 'verto', 'verumtamen',
    'verus', 'vesco', 'vesica', 'vesper', 'vespillo', 'vester', 'vestigium',
    'vestrum', 'vetus', 'via', 'vicinus', 'vicissitudo', 'victoria', 'victus',
    'videlicet', 'video', 'viduata', 'viduo', 'vigilo', 'vigor', 'vilicus',
    'vilis', 'vilitas', 'villa', 'vinco', 'vinculum', 'vindico', 'vinitor',
    'vinum', 'vir', 'virga', 'virgo', 'viridis', 'viriliter', 'virtus', 'vis',
    'viscus', 'vita', 'vitiosus', 'vitium', 'vito', 'vivo', 'vix', 'vobis',
    'vociferor', 'voco', 'volaticus', 'volo', 'volubilis', 'voluntarius', 'volup',
    'volutabrum', 'volva', 'vomer', 'vomica', 'vomito', 'vorago', 'vorax', 'voro',
    'vos', 'votum', 'voveo', 'vox', 'vulariter', 'vulgaris', 'vulgivagus', 'vulgo',
    'vulgus', 'vulnero', 'vulnus', 'vulpes', 'vulticulus', 'vultuosus', 'xiphias'
  ];

  public static word(): string {
    return Arrays.randomItem(Lorem.WORDS);
  }

  public static words(count: number = 3): string[] {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Lorem.word());
    }
    return result;
  }

  public static sentence(wordCount?: number, range: number = 6): string {
    const count = wordCount ?? Numbers.between(4, 4 + range);
    const words = Lorem.words(count);
    
    // Capitalize first word
    words[0] = words[0]!.charAt(0).toUpperCase() + words[0]!.slice(1);
    
    return words.join(' ') + '.';
  }

  public static sentences(count: number = 3, separator: string = ' '): string {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Lorem.sentence());
    }
    return result.join(separator);
  }

  public static paragraph(sentenceCount?: number, range: number = 3): string {
    const count = sentenceCount ?? Numbers.between(3, 3 + range);
    return Lorem.sentences(count);
  }

  public static paragraphs(count: number = 3, separator: string = '\n\n'): string {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Lorem.paragraph());
    }
    return result.join(separator);
  }

  public static text(sentenceCount?: number): string {
    const count = sentenceCount ?? Numbers.between(5, 10);
    return Lorem.sentences(count);
  }

  public static lines(count: number = 3): string {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Lorem.sentence());
    }
    return result.join('\n');
  }

  public static slug(wordCount: number = 3): string {
    return Lorem.words(wordCount).join('-').toLowerCase();
  }

  public static supplemental(): string {
    return Arrays.randomItem(Lorem.SUPPLEMENTAL);
  }

  public static supplementalWords(count: number = 3): string[] {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Lorem.supplemental());
    }
    return result;
  }

  public static supplementalSentence(wordCount?: number, range: number = 6): string {
    const count = wordCount ?? Numbers.between(4, 4 + range);
    const words = Lorem.supplementalWords(count);
    
    // Capitalize first word
    words[0] = words[0]!.charAt(0).toUpperCase() + words[0]!.slice(1);
    
    return words.join(' ') + '.';
  }

  public static supplementalParagraph(sentenceCount?: number, range: number = 3): string {
    const count = sentenceCount ?? Numbers.between(3, 3 + range);
    const sentences: string[] = [];
    for (let i = 0; i < count; i++) {
      sentences.push(Lorem.supplementalSentence());
    }
    return sentences.join(' ');
  }
}

