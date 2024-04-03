import Ye, { createContext as hr, useState as q, useContext as gr, useEffect as mr } from "react";
import { v4 as M } from "uuid";
var ee = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function yr() {
  if (We)
    return U;
  We = 1;
  var g = Ye, R = Symbol.for("react.element"), h = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, S = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(m, n, f) {
    var i, d = {}, y = null, k = null;
    f !== void 0 && (y = "" + f), n.key !== void 0 && (y = "" + n.key), n.ref !== void 0 && (k = n.ref);
    for (i in n)
      l.call(n, i) && !C.hasOwnProperty(i) && (d[i] = n[i]);
    if (m && m.defaultProps)
      for (i in n = m.defaultProps, n)
        d[i] === void 0 && (d[i] = n[i]);
    return { $$typeof: R, type: m, key: y, ref: k, props: d, _owner: S.current };
  }
  return U.Fragment = h, U.jsx = P, U.jsxs = P, U;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function xr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Ye, R = Symbol.for("react.element"), h = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), m = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), J = Symbol.iterator, G = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = J && e[J] || e[G];
      return typeof r == "function" ? r : null;
    }
    var A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        te("error", e, t);
      }
    }
    function te(e, r, t) {
      {
        var a = A.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var p = t.map(function(s) {
          return String(s);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var ne = !1, ae = !1, v = !1, x = !1, O = !1, j;
    j = Symbol.for("react.module.reference");
    function I(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === C || O || e === S || e === f || e === i || x || e === k || ne || ae || v || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === P || e.$$typeof === m || e.$$typeof === n || e.$$typeof === j || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case h:
          return "Portal";
        case C:
          return "Profiler";
        case S:
          return "StrictMode";
        case f:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return he(r) + ".Consumer";
          case P:
            var t = e;
            return he(t._context) + ".Provider";
          case n:
            return Me(e, e.render, "ForwardRef");
          case d:
            var a = e.displayName || null;
            return a !== null ? a : F(e.type) || "Memo";
          case y: {
            var c = e, p = c._payload, s = c._init;
            try {
              return F(s(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, L = 0, ge, me, ye, xe, be, _e, Re;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          ge = console.log, me = console.info, ye = console.warn, xe = console.error, be = console.group, _e = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function ze() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: ge
            }),
            info: B({}, e, {
              value: me
            }),
            warn: B({}, e, {
              value: ye
            }),
            error: B({}, e, {
              value: xe
            }),
            group: B({}, e, {
              value: be
            }),
            groupCollapsed: B({}, e, {
              value: _e
            }),
            groupEnd: B({}, e, {
              value: Re
            })
          });
        }
        L < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = A.ReactCurrentDispatcher, oe;
    function H(e, r, t) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            oe = a && a[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var le = !1, K;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      K = new qe();
    }
    function Te(e, r) {
      if (!e || le)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      le = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = ie.current, ie.current = null, Ue();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (N) {
              a = N;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (N) {
              a = N;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            a = N;
          }
          e();
        }
      } catch (N) {
        if (N && a && typeof N.stack == "string") {
          for (var o = N.stack.split(`
`), T = a.stack.split(`
`), b = o.length - 1, _ = T.length - 1; b >= 1 && _ >= 0 && o[b] !== T[_]; )
            _--;
          for (; b >= 1 && _ >= 0; b--, _--)
            if (o[b] !== T[_]) {
              if (b !== 1 || _ !== 1)
                do
                  if (b--, _--, _ < 0 || o[b] !== T[_]) {
                    var D = `
` + o[b].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, D), D;
                  }
                while (b >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        le = !1, ie.current = p, ze(), Error.prepareStackTrace = c;
      }
      var Y = e ? e.displayName || e.name : "", Be = Y ? H(Y) : "";
      return typeof e == "function" && K.set(e, Be), Be;
    }
    function Je(e, r, t) {
      return Te(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Ge(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case f:
          return H("Suspense");
        case i:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            return Je(e.render);
          case d:
            return X(e.type, r, t);
          case y: {
            var a = e, c = a._payload, p = a._init;
            try {
              return X(p(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, we = {}, Se = A.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    function He(e, r, t, a, c) {
      {
        var p = Function.call.bind(Z);
        for (var s in e)
          if (p(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var T = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              o = b;
            }
            o && !(o instanceof Error) && (Q(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), Q(null)), o instanceof Error && !(o.message in we) && (we[o.message] = !0, Q(c), E("Failed %s type: %s", t, o.message), Q(null));
          }
      }
    }
    var Ke = Array.isArray;
    function se(e) {
      return Ke(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ze(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Oe(e);
    }
    var V = A.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, De, ce;
    ce = {};
    function er(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = F(V.current.type);
        ce[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(V.current.type), e.ref), ce[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          De || (De = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, a, c, p, s) {
      var o = {
        $$typeof: R,
        type: e,
        key: r,
        ref: t,
        props: s,
        _owner: p
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function or(e, r, t, a, c) {
      {
        var p, s = {}, o = null, T = null;
        t !== void 0 && (Ce(t), o = "" + t), rr(r) && (Ce(r.key), o = "" + r.key), er(r) && (T = r.ref, tr(r, c));
        for (p in r)
          Z.call(r, p) && !Qe.hasOwnProperty(p) && (s[p] = r[p]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (p in b)
            s[p] === void 0 && (s[p] = b[p]);
        }
        if (o || T) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && nr(s, _), T && ar(s, _);
        }
        return ir(e, o, T, c, a, V.current, s);
      }
    }
    var ue = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function ke() {
      {
        if (ue.current) {
          var e = F(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function sr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ue.current && (a = " It was passed a child from " + F(e._owner.type) + "."), $(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            de(a) && Ie(a, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = re(e);
          if (typeof c == "function" && c !== e.entries)
            for (var p = c.call(e), s; !(s = p.next()).done; )
              de(s.value) && Ie(s.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === n || r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = F(r);
          He(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var c = F(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Ne(e, r, t, a, c, p) {
      {
        var s = I(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = lr(c);
          T ? o += T : o += ke();
          var b;
          e === null ? b = "null" : se(e) ? b = "array" : e !== void 0 && e.$$typeof === R ? (b = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, o);
        }
        var _ = or(e, r, t, c, p);
        if (_ == null)
          return _;
        if (s) {
          var D = r.children;
          if (D !== void 0)
            if (a)
              if (se(D)) {
                for (var Y = 0; Y < D.length; Y++)
                  Fe(D[Y], e);
                Object.freeze && Object.freeze(D);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(D, e);
        }
        return e === l ? ur(_) : cr(_), _;
      }
    }
    function fr(e, r, t) {
      return Ne(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Ne(e, r, t, !1);
    }
    var pr = dr, vr = fr;
    z.Fragment = l, z.jsx = pr, z.jsxs = vr;
  }()), z;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = yr() : g.exports = xr();
})(ee);
const ve = ee.exports.Fragment, u = ee.exports.jsx, W = ee.exports.jsxs, Le = hr({
  deleteItem: () => {
  },
  recursiveData: {},
  setRecursiveData: () => {
  },
  addItem: () => {
  },
  updateNodeByPath: () => {
  }
}), Sr = ({
  children: g,
  data: R
}) => {
  const [h, l] = q(R), S = (m) => {
    const n = m.split(".");
    let f = h;
    if (m) {
      for (let d = 0; d < n.length - 1; d++) {
        const y = parseInt(n[d]);
        if (!f.children || !f.children[y])
          return !1;
        f = f.children[y];
      }
      const i = parseInt(n[n.length - 1]);
      if (!f.children || !f.children[i])
        return !1;
      f.children.splice(i, 1), l(() => ({
        ...h
      }));
    } else
      l(() => ({
        ...R,
        children: []
      }));
  }, C = (m, n) => {
    const f = n.split(".");
    let i = h;
    if (n) {
      for (let y = 0; y < f.length; y++) {
        const k = parseInt(f[y]);
        if (!i.children || !i.children[k])
          return !1;
        i = i.children[k];
      }
      const d = parseInt(f[f.length - 1]);
      i.children || (i.children = []), i.children.splice(d + 1, 0, m);
    } else
      i.children || (i.children = []), i.children.push(m);
    l(() => ({
      ...h
    }));
  };
  function P(m, n) {
    const f = n.split(".");
    let i = h;
    if (n)
      for (let d = 0; d < f.length; d++) {
        const y = parseInt(f[d]);
        if (!i.children || !i.children[y])
          return !1;
        i = i.children[y];
      }
    Object.assign(i, m), l(() => ({
      ...h
    }));
  }
  return /* @__PURE__ */ u(Le.Provider, {
    value: {
      deleteItem: S,
      recursiveData: h,
      setRecursiveData: l,
      addItem: C,
      updateNodeByPath: P
    },
    children: g
  });
}, br = ({
  data: g,
  component: R,
  accessKey: h = "",
  result: l
}) => {
  const {
    recursiveData: S,
    deleteItem: C,
    addItem: P,
    updateNodeByPath: m
  } = gr(Le), {
    children: n,
    ...f
  } = g || S;
  return mr(() => {
    l(S);
  }, [S]), /* @__PURE__ */ u(ve, {
    children: /* @__PURE__ */ u(R, {
      data: f,
      accessKey: h,
      deleteItem: () => C(h),
      addItem: P,
      updateItem: m,
      children: n && n.length > 0 ? n.map((i, d) => {
        const y = (h ? h + "." : "") + d;
        return /* @__PURE__ */ u(br, {
          data: i,
          accessKey: y,
          result: l,
          component: R
        }, d);
      }) : null
    })
  });
};
const _r = "_resizebaleDiv_fvnik_1", Rr = "_colBorder_fvnik_12", Er = "_row_fvnik_19", w = {
  resizebaleDiv: _r,
  colBorder: Rr,
  row: Er
}, pe = (g, R, h = 0) => {
  let l = g[R[h]];
  return typeof l == "object" && (l = pe(l, R, ++h)), l;
}, Or = ({
  columns: g,
  caption: R,
  data: h,
  alternateRowColored: l = !1,
  draggableCol: S,
  rowHeight: C,
  colorScheme: P = "",
  isExpandable: m = !1,
  border: n = !1,
  showSerialNumber: f = !1,
  expandedComponent: i
}) => {
  const [d, y] = q(g), [k, J] = q(0), [G, re] = q(0), [A, E] = q(null), te = (v, x) => {
    J(x);
  }, ne = (v, x) => {
    v.preventDefault(), re(x);
  }, ae = (v) => {
    v.preventDefault(), y((x) => {
      const O = [...x];
      return O[k] = x[G], O[G] = x[k], O;
    });
  };
  return /* @__PURE__ */ u("div", {
    style: {
      width: "fit-content",
      borderLeft: n ? "1px solid rgb(182, 182, 182)" : "",
      borderRight: n ? "1px solid rgb(182, 182, 182)" : "",
      paddingBottom: "0.1px"
    },
    children: /* @__PURE__ */ W("table", {
      style: {
        width: "100%",
        position: "relative",
        borderSpacing: "0",
        border: "none"
      },
      border: n ? 1 : 0,
      cellSpacing: "0",
      children: [R && /* @__PURE__ */ u("caption", {
        children: R
      }), /* @__PURE__ */ W("thead", {
        style: {
          userSelect: "none",
          position: "sticky",
          top: "0",
          boxShadow: "0px 1px 5px #00000067",
          backgroundColor: P
        },
        children: [/* @__PURE__ */ W("tr", {
          children: [m && /* @__PURE__ */ u("th", {
            className: n ? w.colBorder : "",
            style: {
              padding: "0.5rem",
              width: "100px",
              textAlign: "left",
              border: "solid 1px #000000aaF",
              borderTop: n ? "1px solid rgb(182, 182, 182)" : ""
            }
          }), f && /* @__PURE__ */ u("th", {
            style: {
              padding: "0.5rem",
              width: "80px",
              textAlign: "left",
              maxWidth: "80px",
              borderTop: n ? "1px solid rgb(182, 182, 182)" : ""
            },
            className: n ? w.colBorder : "",
            children: "S.No."
          }), g && d.map((v, x) => {
            var O, j;
            return /* @__PURE__ */ u("th", {
              colSpan: (O = v.children) == null ? void 0 : O.length,
              draggable: S,
              onDragStart: (I) => te(I, x),
              onDragOver: (I) => ne(I, x),
              onDrop: (I) => ae(I),
              style: {
                padding: "0.5rem",
                width: "100px",
                textAlign: "left",
                borderTop: n ? "1px solid rgb(182, 182, 182)" : ""
              },
              className: n ? w.colBorder : "",
              children: /* @__PURE__ */ u("div", {
                style: {
                  minWidth: v.children && ((j = v.children) == null ? void 0 : j.length) * 150 + "px",
                  ...v.headStyle
                },
                className: w.resizebaleDiv,
                children: v.title
              })
            }, M());
          })]
        }), /* @__PURE__ */ W("tr", {
          children: [m && /* @__PURE__ */ u("th", {
            className: n ? w.colBorder : "",
            style: {
              padding: "0.5rem",
              width: "100px",
              textAlign: "left",
              border: "solid 1px #000000aaF"
            }
          }), f && /* @__PURE__ */ u("th", {
            className: n ? w.colBorder : "",
            style: {
              padding: "0.5rem",
              width: "100px",
              textAlign: "left",
              border: "solid 1px #000000aaF"
            }
          }), g && d.map((v, x) => {
            var O;
            return v.children ? (O = v.children) == null ? void 0 : O.map((j) => /* @__PURE__ */ u("th", {
              className: n ? w.colBorder : "",
              style: {
                padding: "0.3rem 0.5rem",
                width: "100px",
                textAlign: "left",
                border: "solid 1px #eeeeeeaaF",
                ...j.headStyle
              },
              children: /* @__PURE__ */ u("div", {
                style: {
                  minWidth: "150px",
                  ...v.headStyle
                },
                children: j.title
              })
            }, M())) : /* @__PURE__ */ u("th", {
              className: n ? w.colBorder : "",
              style: {
                padding: "0.3rem 0.5rem",
                width: "100px",
                textAlign: "left",
                ...v.headStyle
              }
            }, M());
          })]
        }), /* @__PURE__ */ W("tr", {
          children: [m && /* @__PURE__ */ u("th", {
            className: n ? w.colBorder : "",
            style: {
              padding: "0.5rem",
              width: "100px",
              textAlign: "left",
              border: "solid 1px #000000aaF"
            }
          }), f && /* @__PURE__ */ u("th", {
            className: n ? w.colBorder : "",
            style: {
              padding: "0.5rem",
              width: "100px",
              textAlign: "left",
              border: "solid 1px #000000aaF"
            }
          }), g && d.map((v, x) => {
            var O;
            return v.children ? (O = v.children) == null ? void 0 : O.map((j) => {
              var I;
              return /* @__PURE__ */ u("th", {
                className: n ? w.colBorder : "",
                style: {
                  padding: "0.3rem 0.5rem",
                  width: "100px",
                  textAlign: "left",
                  border: "solid 1px #eeeeeeaaF",
                  ...j.headStyle
                },
                children: /* @__PURE__ */ u("div", {
                  style: {
                    minWidth: "150px",
                    ...v.headStyle
                  },
                  children: (I = j.filter) == null ? void 0 : I.value
                })
              }, M());
            }) : /* @__PURE__ */ u("th", {
              className: n ? w.colBorder : "",
              style: {
                padding: "0.3rem 0.5rem",
                width: "100px",
                textAlign: "left",
                ...v.headStyle
              }
            }, M());
          })]
        })]
      }), /* @__PURE__ */ u("tbody", {
        children: h.map((v, x) => /* @__PURE__ */ W(ve, {
          children: [/* @__PURE__ */ W("tr", {
            style: {
              height: C,
              backgroundColor: l && x % 2 !== 0 ? P + "33" : ""
            },
            children: [m && /* @__PURE__ */ u("td", {
              className: n ? w.colBorder : "",
              style: {
                padding: "0.5rem",
                width: "100px",
                textAlign: "left"
              },
              children: /* @__PURE__ */ u("span", {
                onClick: () => E(x === A ? -1 : x),
                style: {
                  color: P,
                  cursor: "pointer"
                },
                children: "\u27BD"
              })
            }), f && /* @__PURE__ */ u("td", {
              className: n ? w.colBorder : "",
              style: {
                padding: "0.5rem",
                width: "100px",
                textAlign: "left"
              },
              children: x + 1
            }), /* @__PURE__ */ u(Ve, {
              border: n,
              row: v,
              columns: d
            })]
          }, v.id), /* @__PURE__ */ u("tr", {
            style: {
              transition: "0.3s",
              height: x === A ? "300px" : "0px"
            },
            children: x === A && /* @__PURE__ */ u("td", {
              colSpan: 200,
              style: {
                transition: "1s"
              },
              children: i(v)
            })
          })]
        }))
      })]
    })
  });
}, Ve = ({
  row: g,
  columns: R,
  border: h
}) => /* @__PURE__ */ u(ve, {
  children: R.map((l, S) => {
    var C;
    return l.children ? /* @__PURE__ */ u(Ve, {
      border: h,
      row: g,
      columns: l.children
    }, l.id) : /* @__PURE__ */ u("td", {
      className: h ? w.colBorder : "",
      style: {
        padding: "0.5rem",
        width: "100px",
        textAlign: "left",
        ...l.cellStyle
      },
      children: l.format ? l.format && l.format(pe(g, l.value ? l.value.split(".") : []), g, S) : l.value && pe(g, (C = l.value) == null ? void 0 : C.split("."))
    }, l.id);
  })
});
export {
  br as RecursiveComponentBuilder,
  Sr as RecursiveComponentContext,
  Or as Table
};
