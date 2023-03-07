import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
  }
};

const goBack = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(CommonActions.goBack());
  }
};

const pop = (screenCount?: number) => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.pop(screenCount));
  }
};

const popToTop = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

const push = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
};

const replace = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

const reset = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
};

export const RouteService = {
  navigationRef,
  navigate,
  goBack,
  pop,
  popToTop,
  push,
  reset,
  replace,
};
