#!/bin/sh

echo "Sit tight, will tweak your project a bit.";

# dependency installation general
echo "Will install all general dependency";
yarn add react-native-navigation react-redux redux redux-logger redux-persist reselect rxjs redux-logic lodash @react-native-community/async-storage axios react-native-config
yarn add --dev @types/react-redux @types/lodash @types/redux-logger redux-logic-test

# setup jest and enzyme
echo "Will install jest and enzyme";
yarn add react-dom
yarn add --dev jest enzyme enzyme-adapter-react-16 enzyme-to-json ts-jest @types/jest @types/enzyme @types/enzyme-adapter-react-16

# setup linting
echo "Will install linting";
yarn add --dev husky lint-staged prettier tslint tslint-config-prettier tslint-plugin-prettier tslint-react

# create directory structure
# mkdir -v src/
# mkdir -v src/actions/ src/actions/__test__/
# mkdir -v src/assets/ src/assets/images/
# mkdir -v src/constants/
# mkdir -v src/libs/ src/libs/__test__/
# mkdir -v src/logics/ src/logics/__test__/
# mkdir -v src/modules/ src/modules/_globals/ src/modules/_globals/__test__/
# mkdir -v src/reducers/ src/reducers/__test__/
# mkdir -v src/types/

# create file blank init
# touch src/index.ts
# touch src/configs/configureStore.ts src/configs/navigationControl.ts src/configs/registerScreens.ts

# touch src/constants/api.ts src/constants/index.ts
# echo "export {};" >> src/constants/index.ts

# touch src/libs/index.ts
# echo "export {};" >> src/libs/index.ts

# touch src/logics/index.ts
# echo "export default [];" >> src/logics/index.ts

# touch src/modules/_globals/index.ts
# echo "export {};" >> src/modules/_globals/index.ts

# touch src/reducers/index.ts

# remove app.tsx and re write index.js
rm -drvf __tests__/
rm -v App.tsx
rm -v index.js
touch index.js
echo "import index from './src';" >> index.js

echo "Done, now your project have, dependency general, jest, enzyme for testing, and linting";

echo "
    copy this to your package.json -> replace script: {}
    ==============================================
    {
        \"start\": \"node node_modules/react-native/local-cli/cli.js start\",
        \"run-android:staging\": \"ENVFILE=.env.staging react-native run-android\",
        \"run-android:production\": \"ENVFILE=.env.production react-native run-android\",
        \"release-staging:staging\": \"cd ./android && ENVFILE=.env.staging ./gradlew app:assembleRelease && cd ..\",
        \"release-staging:production\": \"cd ./android && ENVFILE=.env.production ./gradlew app:assembleRelease && cd ..\",
        \"pretty\": \"prettier --semi true --single-quote --trailing-comma all --tab-width 4 --write 'src/**/*.{ts,tsx}'\",
        \"precommit\": \"lint-staged\",
        \"watchman-fix\": \"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\",
        \"test\": \"jest\"
    }
";

echo "
    copy this to your package.json just add below script level
    =====================================================

    \"lint-staged\": {
        \"*.{ts,tsx}\": [
            \"yarn pretty\",
            \"git add\"
        ]
    },

";

echo "Copy the rest of file, to your project root"

echo "Link
    React-Native-Navigation (https://wix.github.io/react-native-navigation/#/docs/Installing)
    @react-native-community/async-storage (https://github.com/react-native-community/react-native-async-storage/blob/master/docs/Linking.md) to your android/iOS native
    React Native Config (https://github.com/luggit/react-native-config)
";

echo "insert .env.staging and .env.production to your gitignore";

echo "Have fun, with your project"

rm -v init.sh