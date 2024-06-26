import {
  __toESM,
  require_react
} from "./chunk-ATZAHYIB.js";

// node_modules/react-bootstrap/esm/NavbarContext.js
var React = __toESM(require_react());
var context = React.createContext(null);
context.displayName = "NavbarContext";
var NavbarContext_default = context;

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react2 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/@restart/hooks/esm/useMounted.js
var import_react3 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react3.useRef)(true);
  const isMounted = (0, import_react3.useRef)(() => mounted.current);
  (0, import_react3.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

export {
  useMounted,
  usePrevious,
  useIsomorphicEffect_default,
  NavbarContext_default
};
//# sourceMappingURL=chunk-RIDVAUJ6.js.map
