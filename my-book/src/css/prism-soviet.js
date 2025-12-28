/**
 * Soviet-Era Robotics Code Theme
 * Dark theme with electric cyan and deep red accents
 */

const theme = {
  plain: {
    color: '#e8eaed',
    backgroundColor: '#141a21',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#5f6368',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#4caf50',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#9aa0a6',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#00e5ff',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#d32f2f',
        fontWeight: '600',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#00e5ff',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#00b8d4',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#d32f2f',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#18ffff',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};

export default theme;
