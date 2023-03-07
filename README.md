### Built With
* [React Native@0.73.8](https://reactnative.dev/blog/2022/06/21/version-069)
* [Typescript](https://www.typescriptlang.org/)
* [React Navigation](https://reactnavigation.org/)
* [Firebase](https://rnfirebase.io/)

### Commits format

Commitlint is used to check if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(stepper): update button actions
```

```
feat(passenger): add comment section
```

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test