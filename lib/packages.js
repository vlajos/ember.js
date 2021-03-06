module.exports = {
  'container':                  {trees: null,  requirements: []},
  'ember-metal':                {trees: null,  vendorRequirements: ['backburner']},
  'ember-metal-views':          {trees: null,  vendorRequirements: ['morph']},
  'ember-debug':                {trees: null,  requirements: ['ember-metal'], developmentOnly: true},
  'ember-runtime':              {trees: null,  vendorRequirements: ['rsvp'], requirements: ['container', 'ember-metal']},
  'ember-views':                {trees: null,  requirements: ['ember-runtime', 'ember-metal-views']},
  'ember-extension-support':    {trees: null,  requirements: ['ember-application']},
  'ember-testing':              {trees: null,  requirements: ['ember-application', 'ember-routing'], developmentOnly: true},
  'ember-handlebars-compiler':  {trees: null,  requirements: ['ember-views']},
  'ember-handlebars':           {trees: null,  requirements: ['ember-views', 'ember-handlebars-compiler'], hasTemplates: true},
  'ember-htmlbars':             {trees: null,  vendorRequirements: ['handlebars', 'simple-html-tokenizer', 'htmlbars-util', 'htmlbars-compiler', 'htmlbars-syntax', 'htmlbars-test-helpers'], requirements: ['ember-metal-views'], hasTemplates: true},
  'ember-routing':              {trees: null,  vendorRequirements: ['router', 'route-recognizer'],
                                               requirements: ['ember-runtime', 'ember-views']},
  'ember-routing-handlebars':   {trees: null,  requirements: ['ember-routing', 'ember-handlebars']},
  'ember-routing-htmlbars':     {trees: null,  requirements: ['ember-routing', 'ember-htmlbars']},
  'ember-routing-views':        {trees: null,  requirements: ['ember-routing']},
  'ember-application':          {trees: null,  vendorRequirements: ['dag-map'], requirements: ['ember-routing']},
  'ember':                      {trees: null,  requirements: ['ember-application']}
};
