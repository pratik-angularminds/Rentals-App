import {reducerType} from './ReducerType';

export function setFirstTime(value: boolean) {
  return {
    type: reducerType.walkThroughState,
    data: value,
  };
}

export function setLogin(value: boolean) {
  return {
    type: reducerType.isLoginState,
    data: value,
  };
}

export function toggleLoader(value: boolean) {
  return {
    type: reducerType.showLoader,
    data: value,
  };
}

export function clearUserData() {
  return {
    type: reducerType.userData,
    data: null,
  };
}

export function setUserData(value: object) {
  return {
    type: reducerType.userData,
    data: value,
  };
}

export function setUserToken(value: string) {
  return {
    type: reducerType.userToken,
    data: value,
  };
}