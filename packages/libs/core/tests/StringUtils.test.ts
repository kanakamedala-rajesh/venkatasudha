import {
  camelCase,
  contains,
  crop,
  escapeHtml,
  escapeRegExp,
  escapeUnicode,
  hyphenate,
  lowerCase,
  lpad,
  normalizeLineBreaks,
  pascalCase,
  properCase,
  removeNonASCII,
  removeNonWord,
  removeNonWordExcludeSpace,
  repeat,
  replaceAccents,
  rpad,
  sentenceCase,
  slugify,
  stripHtmlTags,
  unCamelCase,
  underscore,
  unescapeHtml,
  unhyphenate,
  upperCase
} from '../src/utils/StringUtils';

describe('upper case test', () => {
  it('should work', () => {
    expect(upperCase('hello')).toEqual('HELLO');
  });
});

describe('lower case test', () => {
  it('should work', () => {
    expect(lowerCase('HELLO')).toEqual('hello');
  });
});

describe('camel case test', () => {
  it('should work with hyphens and accent chars', () => {
    expect(camelCase('hellõ-world')).toEqual('helloWorld');
  });
  it('should work with spaces', () => {
    expect(camelCase('hello world')).toEqual('helloWorld');
  });
  it('should work with period', () => {
    expect(camelCase('Hello.world')).toEqual('helloWorld');
  });
});

describe('uncamel case test', () => {
  it('should work', () => {
    expect(unCamelCase('helloRajeshHowAreYou')).toEqual(
      'hello rajesh how are you'
    );
  });

  it('should work with delimiter', () => {
    expect(unCamelCase('helloRajeshHowAreYou', '_')).toEqual(
      'hello_rajesh_how_are_you'
    );
  });
});

describe('proper case test', () => {
  it('should work', () => {
    expect(properCase('rajesh')).toEqual('Rajesh');
  });
});

describe('pascal case test', () => {
  it('should work with hyphens and accent chars', () => {
    expect(pascalCase('hellõ-world')).toEqual('HelloWorld');
  });
  it('should work with spaces', () => {
    expect(pascalCase('hello world')).toEqual('HelloWorld');
  });
  it('should work with period', () => {
    expect(pascalCase('Hello.world')).toEqual('HelloWorld');
  });
});

describe('sentence case test', () => {
  it('should work', () => {
    expect(sentenceCase('hello rajesh how are you!')).toEqual(
      'Hello rajesh how are you!'
    );
  });
});

describe('slugify case test', () => {
  it('should work', () => {
    expect(slugify('Hellõ-World Welcome', '+')).toEqual('helloworld+welcome');
  });
});

describe('hypenate test', () => {
  it('should work', () => {
    expect(hyphenate('Hellõ World Welcome')).toEqual('hello-world-welcome');
  });
});

describe('unhypenate test', () => {
  it('should work', () => {
    expect(unhyphenate('Hello-World')).toEqual('Hello World');
  });
});

describe('underscore test', () => {
  it('should work while converting to camel case', () => {
    expect(underscore('Hello World')).toEqual('hello_world');
  });
});

describe('remove nonword test', () => {
  it('should work', () => {
    expect(removeNonWord('Hello_World')).toEqual('HelloWorld');
  });
  it('should work with excluding space', () => {
    expect(removeNonWordExcludeSpace('Hello World_Rajesh')).toEqual(
      'Hello WorldRajesh'
    );
  });
});

describe('normalize linebreak test', () => {
  it('should work', () => {
    expect(normalizeLineBreaks('This\r\nis a\nmultiline\nstring.\r\n')).toEqual(
      `This
is a
multiline
string.
`
    );
  });
});

describe('replace accents test', () => {
  it('should work', () => {
    expect(replaceAccents('hèllõ wörld')).toEqual('hello world');
  });
});

describe('contains substring test', () => {
  it('should work', () => {
    expect(contains('Hello Rajesh', 'Rajesh')).toBeTruthy();
  });

  it('should fail when substring doesnt exist', () => {
    expect(contains('Hello Rajesh', 'Chaitu')).toBeFalsy();
  });
});

describe('crop test', () => {
  it('should work', () => {
    expect(crop('hello world', 5, '...')).toEqual('he...');
  });

  it('should work for full word trim', () => {
    expect(crop('hello world', 5, '...', true)).toEqual('...');
  });

  it('should work for full word trim', () => {
    expect(crop('hello world', 9, '...', true)).toEqual('hello...');
  });
});

describe('escape regular expression test', () => {
  it('should work', () => {
    expect(escapeRegExp(`*hello$world!**`)).toEqual('\\*hello\\$world!\\*\\*');
  });
});

describe('escape htmlElements test', () => {
  it('should work', () => {
    expect(escapeHtml('<html></html>')).toEqual('&lt;html&gt;&lt;/html&gt;');
  });

  it('should work with quote', () => {
    expect(escapeHtml(`'hello'`)).toEqual('&#39;hello&#39;');
  });
});

describe('unescape htmlElements test', () => {
  it('should work', () => {
    expect(unescapeHtml('&lt;html&gt;&lt;/html&gt;')).toEqual('<html></html>');
  });

  it('should work with quote', () => {
    expect(unescapeHtml('&#39;hello&#39;')).toEqual(`'hello'`);
  });
});

describe('escape unicode test', () => {
  it('should work without printing escape character', () => {
    expect(escapeUnicode('\u0041', false)).toEqual('A');
  });

  it('should work with printing escape character', () => {
    expect(escapeUnicode('\u0041', true)).toEqual('\\u0041');
  });
});

describe('strip html tags test', () => {
  it('should work', () => {
    expect(stripHtmlTags('<title>Rajesh</title>')).toEqual('Rajesh');
  });

  it('should work with self closing tags', () => {
    expect(stripHtmlTags('<br/>')).toEqual('');
  });
});

describe('remove non ASCII test', () => {
  it('should work', () => {
    // https://rbutterworth.nfshost.com/Tables/compose/
    expect(removeNonASCII('√2HĘŁŁÖ⅞')).toEqual('2H');
  });
});

describe('rpad test', () => {
  it('should work', () => {
    expect(rpad('hello world', 20, '-')).toEqual('hello world---------');
  });
});

describe('lpad test', () => {
  it('should work', () => {
    expect(lpad('hello world', 20, '-')).toEqual('---------hello world');
  });
});

describe('repeat string test', () => {
  it('should work', () => {
    expect(repeat('Rajesh', 2)).toEqual('RajeshRajesh');
  });
});
