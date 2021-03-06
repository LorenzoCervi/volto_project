const IframeSchema = {
  title: 'Embed external content',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'url',
        'align',
        'privacy_statement',
        'privacy_cookie_key',
        'enabled',
      ],
    },
  ],

  properties: {
    url: {
      title: 'Embed URL',
    },
    privacy_statement: {
      title: 'Privacy statement',
      description: 'Short notification text',
      widget: 'text',
    },
    privacy_cookie_key: {
      title: 'Privacy cookie key',
      description: 'Identifies similar external content',
    },
    enabled: {
      title: 'Use privacy screen?',
      description: 'Enable/disable the privacy protection',
      type: 'boolean',
    },
  },

  required: ['url'],
};

export default IframeSchema;

