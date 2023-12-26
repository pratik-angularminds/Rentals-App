import {reducerType} from './ReducerType';

var sessionState: any = {
  isFirstTime: true,
  isLogin: false,
  userToken: '',
  deviceToken: '123',
  userData: null,
};

var localState: any = {
  showLoader: false,
  weeklyAvailability: {},
  specialAvailability: [],
};

/* export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case reducerType.increase:
      return { ...state, sum: action.data };
      break;
    case reducerType.decrease:
      return { ...state, sum: action.data };
    default:
      return { ...state };
      break;
  }
} */
export function sessionReducer(state: any = sessionState, action: any) {
  switch (action.type) {
    case reducerType.walkThroughState:
      return {...state, isFirstTime: action.data};
    case reducerType.isLoginState:
      return {...state, isLogin: action.data};
    case reducerType.userToken:
      return {...state, userToken: action.data};
    case reducerType.deviceToken:
      return {...state, deviceToken: action.data};
    case reducerType.userData:
      return {...state, userData: action.data};
    default:
      return {...state};
  }
}

export function localReducer(state: any = localState, action: any) {
  switch (action.type) {
    case reducerType.showLoader:
      return {...state, showLoader: action.data};
    default:
      return {...state};
  }
}
