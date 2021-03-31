import { PageConfig, PagesConfig } from 'case-web-app-core/build/types/pagesConfig';

const defaultRoutes = {
  auth: '/home',
  unauth: '/welcome',
  studyPage: '/home',
  surveyPage: '/surveys'
};

const landingPage: PageConfig = {
  path: '/welcome',
  pageKey: 'landing',
  hideWhen: 'auth',
  rows: [
    {
      key: 'content',
      className: 'py-3',
      columns: [
        {
          key: 'videoCol',
          className: 'col-12 col-lg-8',
          items: [
            {
              itemKey: 'video',
              className: 'w-100 h-100 text-light justify-content-center text-center d-flex align-items-center',
              config: {
                type: 'video',
                posterUrlKey: 'poster',
                fallbackTextKey: 'fallbackText',
                videoSources: [
                  { type: 'video/mp4', urlKey: 'mp4' },
                ]
              }
            }
          ]
        },
        {
          key: 'aboutCardCol',
          className: 'col-12 col-lg-4 mt-3 mt-lg-0',
          items: [
            {
              itemKey: 'aboutCard',
              className: 'h-100',
              config: {
                type: 'imageCard',
                showActionBtn: true,
                action: {
                  type: 'navigate',
                  value: '/about',
                },
                imageSrc: '/images/about.jpg',
              }
            }
          ]
        },
        {
          key: 'cardResultsCol',
          className: 'col-12 col-md-6 col-lg-4 mt-3',
          items: [{
            itemKey: 'currentResultCard',
            className: 'h-100',
            config: {
              type: 'imageCard',
              showActionBtn: true,
              action: {
                type: 'navigate',
                value: '/results',
              },
              imageSrc: '/images/results.jpg',
            }
          }]
        },
        {
          key: 'cardSignupCol',
          className: 'col-12 col-md-6 col-lg-4 mt-3',
          items: [{
            itemKey: 'signupCard',
            className: 'h-100',
            config: {
              type: 'imageCard',
              showActionBtn: true,
              action: {
                type: 'openDialog',
                value: 'signup',
              },
              imageSrc: '/images/participate.jpg',
            }
          }]
        },
        {
          key: 'loginCardCol',
          className: 'col-12 col-lg-4 mb-lg-0 mt-3',
          items: [{
            itemKey: 'loginCard',
            className: 'h-100',
            config: {
              type: 'loginCard',
              showInfoText: false
            }
          }]
        },
      ]
    }
  ]
}

const surveysPage: PageConfig = {
  path: '/home',
  hideWhen: 'unauth',
  pageKey: 'home',
  rows: [
    {
      key: 'main',
      className: 'py-3 min-vh-60',
      columns: [
        {
          key: 'surveyCol',
          className: 'col-12 col-lg-6 offset-lg-1',
          items: [{
            itemKey: 'surveyList',
            className: '',
            config: {
              type: 'surveyList'
            }
          }]
        },
        {
          key: 'sideCol',
          className: 'col-12 col-md-10 col-lg-4 pt-3 pt-lg-0',
          items: [
            {
              itemKey: 'references',
              config: {
                type: 'linkList',
                links: [
                  {
                    linkKey: 'resultsLink',
                    type: 'internal',
                    value: '/results'
                  },
                  {
                    linkKey: 'aboutLink',
                    type: 'internal',
                    value: '/about'
                  },
                  {
                    linkKey: 'faqLink',
                    type: 'internal',
                    value: '/faq'
                  },
                ]
              }
            },
            {
              itemKey: 'settingsReferences',
              config: {
                type: 'linkList',
                links: [
                  {
                    linkKey: 'profileSettings',
                    type: 'dialog',
                    value: 'manageProfiles'
                  },
                  {
                    linkKey: 'communicationSettings',
                    type: 'dialog',
                    value: 'changeNotifications'
                  },
                  {
                    linkKey: 'languageSettings',
                    type: 'dialog',
                    value: 'changeLanguage'
                  }
                ]
              }
            },
            {
              itemKey: 'supportReferences',
              config: {
                type: 'linkList',
                links: [
                  {
                    linkKey: 'supportLink',
                    type: 'external',
                    value: 'https://www.uhasselt.be/UH/Onze-fondsen/56179-Onze-fondsen/Fonds-infectieradar'
                  }
                ]
              }
            }
          ]
        }
      ]
    }]
}

const settingsPage: PageConfig = {
  path: '/settings',
  hideWhen: 'unauth',
  pageKey: 'settings',
  rows: [
    {
      key: 'mainRow',
      className: 'mt-3',
      columns: [
        {
          key: 'settingsCol',
          className: 'col-12 col-md-10 col-lg-6 offset-lg-1 offset-0',
          items: [{
            itemKey: 'account',
            config: {
              type: 'accountSettings',
              allowProfileSettings: true
            }
          },
          {
            itemKey: 'communication',
            config: {
              type: 'communicationSettings',
              hideLanguageSelector: false
            }
          },
          {
            itemKey: "deletion",
            className: "",
            config: {
              type: "deleteAccount"
            }
          }]
        },
        {
          key: 'helpCol',
          className: 'col-12 col-md-10 col-lg-4 pt-3 pt-lg-0',
          items: [
            {
              itemKey: 'references',
              config: {
                type: 'linkList',
                links: [
                  {
                    linkKey: 'faqLink',
                    type: 'internal',
                    value: '/faq'
                  },
                  {
                    linkKey: 'privacyStatementLink',
                    type: 'internal',
                    value: '/privacy'
                  },
                  {
                    linkKey: 'contactLink',
                    type: 'internal',
                    value: '/contact'
                  }
                ]
              }
            },
            {
              itemKey: 'systemInfo',
              config: {
                type: 'systemInfo',
                showBrowserInfo: true
              }
            }
          ]
        }
      ]
    }
  ]
}

const resultsPage: PageConfig = {
  path: '/results',
  pageKey: 'results',
  rows: [
    {
      key: 'contentRow',
      className: 'my-3 min-vh-60',
      columns: [
        {
          key: 'contentCol',
          className: 'col-12 col-lg-8',
          items: [
            {
              itemKey: 'results',
              config: {
                type: 'markdown',
                markdownUrl: 'markdowns/results-0.md',
                flavor: 'chart-renderer',
              }
            }
          ]
        }
      ]
    }
  ]
}

const faqPage: PageConfig = {
  path: '/faq',
  pageKey: 'faq',
  rows: [{
    'key': 'content',
    'fullWidth': false,
    'className': 'my-3',
    'columns': [
      {
        'key': 'mainCol',
        'className': 'col-12 col-lg-8',
        'items': [
          {
            'itemKey': 'topFaq',
            'className': '',
            'config': {
              'type': 'simpleCard',
              'variant': 'h2'
            }
          },
          {
            'itemKey': 'faq',
            'className': '',
            'config': {
              'type': 'accordionList',
              'accordionCtrlsKey': 'accordionControls'
            }
          }
        ]
      },
      {
        'key': 'cardSignupCol',
        'className': 'col-12 col-lg-4 mt-3 mt-lg-0',
        'items': [
          {
            'itemKey': 'signupCard',
            hideWhen: 'auth',
            'className': '',
            'config': {
              'type': 'imageCard',
              'action': {
                'type': 'openDialog',
                'value': 'signup'
              },
              'imageSrc': '/images/participate.jpg',
              'showActionBtn': true
            }
          }
        ]
      }
    ]
  }]
}

const aboutPage: PageConfig = {
  path: '/about',
  pageKey: 'about',
  rows: [{
    key: 'teaserImage',
    fullWidth: true,
    columns: [{
      key: 'ti',
      className: 'p-0',
      items: [{
        itemKey: 'topImage',
        config: {
          type: 'teaserImage',
          image: {
            url: '/images/about2.jpg',
            backgroundPosition: '50% 43%',
            height: 420,
          }
        }
      }]
    }]
  }, {
    key: 'content',
    fullWidth: false,
    className: 'my-3',
    columns: [
      {
        key: 'mainCol',
        className: 'col-12 col-lg-8',
        items: [{
          itemKey: 'aboutPolicy',
          config: {
            type: 'markdown',
            markdownUrl: '/markdowns/about.md'
          }
        },
        {
          "itemKey": "video",
          "className": "w-100 text-white justify-content-center text-center d-flex align-items-center",
          "config": {
            "type": "video",
            "posterUrlKey": "poster",
            "fallbackTextKey": "fallbackText",
            "videoSources": [
              {
                "urlKey": "mp4",
                "type": "video/mp4"
              }
            ]
          }
        }]
      },
      {
        key: 'cardSignupCol',
        className: 'col-12 col-lg-4 mt-3 mt-lg-0',
        items: [
          {
            'itemKey': 'signupCard',
            hideWhen: 'auth',
            'className': '',
            'config': {
              'type': 'imageCard',
              'action': {
                'type': 'openDialog',
                'value': 'signup'
              },
              'imageSrc': '/images/participate.jpg',
              'showActionBtn': true
            }
          },
          {
            'itemKey': 'surveyCard',
            hideWhen: 'unauth',
            'className': '',
            'config': {
              'type': 'imageCard',
              'action': {
                'type': 'navigate',
                'value': '/home'
              },
              'imageSrc': '/images/questionnaire.jpg',
              'showActionBtn': true
            }
          },
          {
            'itemKey': 'logoCredits',
            'className': '',
            'config': {
              'type': 'logoCredits',
              'useTitle': true,
              'className': 'mb-2',
              'images': [
                {
                  'key': 'uantwerpen',
                  'altKey': 'uantwerpenLogo',
                  'url': 'images/uantwerpen.png',
                  'width': 260
                },
                {
                  'key': 'epipose',
                  'altKey': 'epiposeLogo',
                  'url': 'images/epipose.jpg',
                  'className': '',
                  'width': 260
                },
                {
                  'key': 'uhasselt',
                  'altKey': 'hasseltLogo',
                  'url': 'images/uhasselt.jpg',
                  'width': 260
                }
              ]
            }
          }
        ]
      },
    ]
  }]
}

const privacyPage: PageConfig = {
  path: '/privacy',
  pageKey: 'privacy',
  rows: [{
    key: 'content',
    className: 'my-3 min-vh-60',
    columns: [{
      key: 'pCol',
      className: 'col-12 col-sm-10 col-md-8',
      items: [
        {
          itemKey: 'privacyPolicy',
          className: '',
          config: {
            type: 'markdown',
            markdownUrl: '/markdowns/privacy.md'
          }
        }
      ]
    }]
  }]
}

const accessibilityPage: PageConfig = {
  path: '/accessibility',
  pageKey: 'accessibility',
  rows: [{
    key: 'content',
    className: 'my-3 min-vh-60',
    columns: [{
      key: 'pCol',
      className: 'col-12 col-sm-10 col-md-8',
      items: [
        {
          itemKey: 'accessibility',
          className: '',
          config: {
            type: 'markdown',
            markdownUrl: '/markdowns/accessibility.md'
          }
        }
      ]
    }]
  }]
}

const disclaimerPage: PageConfig = {
  path: '/disclaimer',
  pageKey: 'disclaimer',
  rows: [{
    key: 'content',
    className: 'my-3 min-vh-60',
    columns: [{
      key: 'pCol',
      className: 'col-12 col-sm-10 col-md-8',
      items: [
        {
          itemKey: 'disclaimer',
          className: '',
          config: {
            type: 'markdown',
            markdownUrl: '/markdowns/disclaimer.md'
          }
        }
      ]
    }]
  }]
}

const contactPage: PageConfig = {
  path: '/contact',
  pageKey: 'contact',
  rows: [{
    key: 'content',
    className: 'my-3 min-vh-60',
    columns: [{
      key: 'pCol',
      className: 'col-12 col-sm-10 col-md-8',
      items: [
        {
          itemKey: 'contact',
          className: '',
          config: {
            type: 'markdown',
            markdownUrl: '/markdowns/contact.md'
          }
        }
      ]
    }]
  }]
}

export const pagesConfig: PagesConfig = {
  defaultRoutes: defaultRoutes,
  pages: [
    landingPage,
    resultsPage,
    surveysPage,
    settingsPage,
    faqPage,
    aboutPage,
    contactPage,
    privacyPage,
    accessibilityPage,
    disclaimerPage
  ]
}
