# The Rick and Morty API

### Setup
-global dependencies version
  ```
  node  v12.22.3
  npm  8.3.0
  yarn  1.22.10
  Redux DevTools  2.17.0
  ```
-install dependencies after clone the repo
  ```
  yarn
  ```
-run it locally
```
yarn start
  ```
  
-run it locally using production build
```
yarn start:prod
  ```
then open a link that appear in terminal such as `https://0.0.0.0:8080/`
  
-run unit test
```
yarn test
  ```
  
-update Snapshot for unit test
```
yarn test:update
  ```
  
---

 
### A top-level directory layout
    .
    ├── ...
    ├── src                      # Source files
    │   ├── client               # routes config files and the components that render by it (pages)
    │   ├── components           # folder with root component and root configration for other component
    │   ├── ex: profile-listing  # other components that used in our app
    │   ├── services             # files where we handle REST API
    │   └── index                # entry point for webpack (where we start the application bundling process)
    │ 
    ├── webpack               
    │   ├── webpack.common       # common webpack configuration for staging and production environment 
    │   ├── webpack.prod         # webpack configuration for production environment 
    │   └── webpack.staging      # webpack configuration for staging environment 
    │ 
    ├── package                  # Test files (alternatively `spec` or `tests`)
    ├── webpack.dev              # webpack configuration for development environment 
    ├── otherConfiguration       # configuration files (like linting, testing and ts configuration)
    └── ...


---


### tool used for development
- React 
- Redux
- react-router
- Jest
- React testing-library
- styled-components (JS-in-CSS)
- Webpack

---

### Redux overview
Store state:
```js
{
       profileListing: {
         page: 1,
         profiles: [],
         isFetching: false
       }

}

```

Actions:

```
FETCH_INFO >>> to fetch profiles data by calling ListingPageService
```


---
### components and async data flow diagram:

![image](https://user-images.githubusercontent.com/47742500/159404218-9e0024f3-9ec5-4039-9f31-65ceb5004458.png)


---

### UI overview
Desktop:

loader while fetching data:

![image](https://user-images.githubusercontent.com/47742500/159393977-8de6642b-cb33-45a7-a933-d6c1e830f769.png)

<img width="1663" alt="image" src="https://user-images.githubusercontent.com/47742500/159392980-c3280af3-80ae-443b-82fa-b6e8749909fd.png">

Tablet:

![image](https://user-images.githubusercontent.com/47742500/159394045-e09ac319-6094-45ca-b078-9061b94a90a7.png)
![image](https://user-images.githubusercontent.com/47742500/159394098-f1c19e8a-d5cf-4b32-8ab0-2d06a00e710d.png)

Phone:

![image](https://user-images.githubusercontent.com/47742500/159394180-119c9916-7467-468d-9887-15965d6bab9b.png)
![image](https://user-images.githubusercontent.com/47742500/159394221-8bd64881-1ceb-4ae3-bbf9-758ac7b79049.png)

friendly message when we have no data our the API have an issue:

![image](https://user-images.githubusercontent.com/47742500/159394598-b3b7c4a8-c035-4251-89fa-7b849eae84a5.png)

performance, Best Practices and Accessibility test using Lighthouse tool:

![image](https://user-images.githubusercontent.com/47742500/159398730-4e9f015a-4179-451f-bf22-5be212995d12.png)


---

Looking forward to your feadback 😊
