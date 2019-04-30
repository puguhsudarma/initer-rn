# INITER RN
## Description
New project? it's great to have a new project, but a boring start, is init project. To have the same configuration, dependency, logic, etc. But fresh from the NPM or other package manager. Introducing __Initer RN__ a new way to start a project RN. Just copy the `init.sh` file to your root project directory, and fire it with `./init.sh` command. It's already there the `src` directory, to put all your code.

## How to ?
0. After init project with `react-native init yournameproject --template typescript`
1. copy `init.sh` to your root project directory
2. fire `./init.sh`command in your root project directory
3. copy and replace (merge) the rest of all file, except `init.sh` to your project directory.
4. copy and replace `script` object in `package.json` file
```
{
	"start": "node node_modules/react-native/local-cli/cli.js start",
	"build:ios": "react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios'",
	"bundle:ios": "react-native bundle --entry-file ./index.js --platform ios --bundle-output ios/main.jsbundle",
	"android-staging": "cd ./android && ./gradlew app:assembleDebug && ./gradlew installDebug && cd ..",
	"release-staging": "cd ./android && ./gradlew app:assembleRelease && cd ..",
	"pretty": "prettier --semi true --single-quote --trailing-comma all --tab-width 4 --write 'src/**/*.{ts,tsx}'",
	"precommit": "lint-staged",
	"watchman-fix": "echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p",
	"test": "jest"
}
```
5.  copy and paste below `script` object in `package.json`
```
"lint-staged": {
	"*.{ts,tsx}": [
		"yarn pretty",
		"git add"
	]
},
```
6. Link native dependency to iOS and Android
	1. React-Native-Navigation (https://wix.github.io/react-native-navigation/#/docs/Installing)
	2. @react-native-community/async-storage (https://github.com/react-native-community/react-native-async-storage/blob/master/docs/Linking.md) 
7. And that's it, you got common dependency, RNN, redux, jest and enzyme testing, and linting code.

## Note
This initer RN still in development, just for automate daily new project init, to reduce time init and focus to business logic.

## Author
***Reroet***