language: node_js
node_js: node
cache:
  directories:
    - node_modules
script:
  - npm test
env:
  - CI=true

before_deploy:
  - npm install netlify-cli -g
  - npm run build

deploy:
  provider: script
  script: netlify deploy -s $NETLIFY_SITE_ID -t $NETLIFY_ACCESS_TOKEN -p --dir ./public
  skip_cleanup: true
  on:
    branch: master
