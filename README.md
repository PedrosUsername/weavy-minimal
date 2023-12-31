# WeavyMinimal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.<br />
This project uses the [@weavy/dropin-js](https://www.npmjs.com/package/@weavy/dropin-js) package on version 18.0.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Objectives

This little project was created to show how Weavy may behave differently on different browsers.

![app.components.png](/assets/README-images/app.component.png)

To see it for yourself, after configuring weavy with valid url and token, serving the app (ng serve), and running it on google chrome, wait 5 seconds and open the DevTools console to see weavy's `built`, `initialized` and `loaded` statuses.

You should see it printed as warnings like:
```
isBuilt: true
isInitialized: true
isLoaded: false
```

Now do the same thing on the Firefox web browser to see a different `isLoaded` result.

![app.components.png](/assets/README-images/weavy_fire_chome.png)
