# web-client
The web-interface for the participants of the Infectieradar Belgium survey platform


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Setup
1. Create `.env.local` and add
```
REACT_APP_API_BASE_URL=<your backend - PARTICIPANT-API SERVICE address>
REACT_APP_DEFAULT_INSTANCE=<instace ID used by the application>

REACT_APP_USE_RECAPTCHA=true

# optionally disable signup functionality
REACT_APP_DISABLE_SIGNUP=true

# CSP Header sources
REACT_APP_CSP_DEFAULT_SRC="'self'"
REACT_APP_CSP_MEDIA_SRC="https://www.rovid.nl"
REACT_APP_CSP_IMG_SRC="'self' https://www.rovid.nl data:"
REACT_APP_CSP_STYLE_SRC="'unsafe-inline' 'self'"
REACT_APP_CSP_SCRIPT_SRC="https://www.gstatic.com/ https://www.google.com/ 'self' 'unsafe-eval'"
REACT_APP_CSP_CHILD_SRC="https://www.google.com/"
REACT_APP_CSP_CONNECT_URLS="<all urls which must be allowed in CSP connect-src, including PARTICIPANT-API SERVICE address, separated by spaces>"
```

The option "unsafe-eval" in script-src, is needed for Vega plot rendering.

## Results Page
The result's page is a container to display different subpages. The list of subpages needs to be defined through the file
`content/<language>/results.json`
for each translation.

Example content for the `results.json`:

``` json
{
  "defaultRoute": "week43",
  "pages": [
    {
      "linkName": "Results for Week 43",
      "route": "week43",
      "markdown": "content/nl/results/week43.md"
    },
    {
      "linkName": "Results for Week 42",
      "route": "week42",
      "markdown": "content/nl/results/week42.md"
    }
  ]
}
```

`defaultRoute` controls which subpage will be displayed by default (typically when the results page is opened). Route name will be appended at the end of the url for the results page container, so there is no need to write the full url here.

`pages` is the list of available sub-pages. To add a new page, three an object with three attributes needs to be added to the list:

- `linkName`: text that will be displayed in the link (navigation right bottom) - ideally a short human readable text / title of the page.
- `route`: selector that will be used in the url to navigate to the page.
- `markdown`: path where the markdown definition for the page can be found.

### Markdown for the results page

Content for the subpages of the result container is defined through markdown files.
Beside the typical markdown structures, e.g., headings, paragraphs and lists, the following content type is supported:
- **vega**: To display a figure defined by vega specification.
- **mapchart:<url-to-map-json>**: map based visualisation.
- **images**: Images from URL and with caption.

Example markdown content:
```markdown
This is a [link](https://www.rivm.nl/infectie-radar/resultaten) pointing to an external page's url.

## Example title
You can add vega spec files like this:

[vega]: content/nl/results/week42-map.json

Images with titles:

![Alternative text for accesibility](content/nl/results/week42-symptomen.png "Caption of the image")
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
