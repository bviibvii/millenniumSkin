import bu from "@babel/traverse";
import { generate as Pu } from "@babel/generator";
import ii, { join as rt } from "path/posix";
import { existsSync as Eu } from "fs";
import jn from "fs/promises";
import { loadConfigFromFile as Au } from "vite";
function gu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Un = {}, Di = {}, Xi = {}, $i = {}, v = {}, Wi = {}, so;
function Hn() {
  if (so) return Wi;
  so = 1, Object.defineProperty(Wi, "__esModule", {
    value: !0
  }), Wi.default = n;
  function n(l, c) {
    const o = Object.keys(c);
    for (const S of o)
      if (l[S] !== c[S])
        return !1;
    return !0;
  }
  return Wi;
}
var zi = {}, io;
function Ui() {
  if (io) return zi;
  io = 1, Object.defineProperty(zi, "__esModule", {
    value: !0
  }), zi.default = l;
  const n = /* @__PURE__ */ new Set();
  function l(o, S, x = "", M = o) {
    if (n.has(M)) return;
    n.add(M);
    const {
      internal: w,
      trace: L
    } = c(1, 2);
    w || console.warn(`${x}\`${o}\` has been deprecated, please migrate to \`${S}\`
${L}`);
  }
  function c(o, S) {
    const {
      stackTraceLimit: x,
      prepareStackTrace: M
    } = Error;
    let w;
    if (Error.stackTraceLimit = 1 + o + S, Error.prepareStackTrace = function(k, O) {
      w = O;
    }, new Error().stack, Error.stackTraceLimit = x, Error.prepareStackTrace = M, !w) return {
      internal: !1,
      trace: ""
    };
    const L = w.slice(1 + o, 1 + o + S);
    return {
      internal: /[\\/]@babel[\\/]/.test(L[1].getFileName()),
      trace: L.map((k) => `    at ${k}`).join(`
`)
    };
  }
  return zi;
}
var ao;
function we() {
  if (ao) return v;
  ao = 1, Object.defineProperty(v, "__esModule", {
    value: !0
  }), v.isAccessor = xn, v.isAnyTypeAnnotation = rs, v.isArgumentPlaceholder = Js, v.isArrayExpression = c, v.isArrayPattern = Et, v.isArrayTypeAnnotation = ie, v.isArrowFunctionExpression = st, v.isAssignmentExpression = o, v.isAssignmentPattern = ct, v.isAwaitExpression = zr, v.isBigIntLiteral = Wt, v.isBinary = Ii, v.isBinaryExpression = S, v.isBindExpression = Ys, v.isBlock = wi, v.isBlockParent = Ci, v.isBlockStatement = L, v.isBooleanLiteral = Ne, v.isBooleanLiteralTypeAnnotation = Gt, v.isBooleanTypeAnnotation = ss, v.isBreakStatement = k, v.isCallExpression = O, v.isCatchClause = F, v.isClass = mn, v.isClassAccessorProperty = Qr, v.isClassBody = At, v.isClassDeclaration = vt, v.isClassExpression = gt, v.isClassImplements = as, v.isClassMethod = $, v.isClassPrivateMethod = kt, v.isClassPrivateProperty = Zr, v.isClassProperty = Gr, v.isCompletionStatement = f, v.isConditional = h, v.isConditionalExpression = j, v.isContinueStatement = R, v.isDebuggerStatement = Z, v.isDecimalLiteral = zs, v.isDeclaration = rn, v.isDeclareClass = ns, v.isDeclareExportAllDeclaration = cs, v.isDeclareExportDeclaration = Bt, v.isDeclareFunction = os, v.isDeclareInterface = ls, v.isDeclareModule = us, v.isDeclareModuleExports = pt, v.isDeclareOpaqueType = Qt, v.isDeclareTypeAlias = Ze, v.isDeclareVariable = _t, v.isDeclaredPredicate = $e, v.isDecorator = qt, v.isDirective = M, v.isDirectiveLiteral = w, v.isDoExpression = Xs, v.isDoWhileStatement = K, v.isEmptyStatement = V, v.isEmptyTypeAnnotation = at, v.isEnumBody = In, v.isEnumBooleanBody = mt, v.isEnumBooleanMember = Ds, v.isEnumDeclaration = yt, v.isEnumDefaultedMember = nr, v.isEnumMember = Nn, v.isEnumNumberBody = jt, v.isEnumNumberMember = Kt, v.isEnumStringBody = Os, v.isEnumStringMember = Ls, v.isEnumSymbolBody = Ut, v.isExistsTypeAnnotation = Ue, v.isExportAllDeclaration = It, v.isExportDeclaration = Tn, v.isExportDefaultDeclaration = Nt, v.isExportDefaultSpecifier = $s, v.isExportNamedDeclaration = Be, v.isExportNamespaceSpecifier = zt, v.isExportSpecifier = He, v.isExpression = vi, v.isExpressionStatement = A, v.isExpressionWrapper = _, v.isFile = Y, v.isFlow = Pn, v.isFlowBaseAnnotation = An, v.isFlowDeclaration = gn, v.isFlowPredicate = vn, v.isFlowType = En, v.isFor = ee, v.isForInStatement = te, v.isForOfStatement = Ct, v.isForStatement = se, v.isForXStatement = Ae, v.isFunction = Ce, v.isFunctionDeclaration = Te, v.isFunctionExpression = be, v.isFunctionParameter = sn, v.isFunctionParent = tt, v.isFunctionTypeAnnotation = et, v.isFunctionTypeParam = ps, v.isGenericTypeAnnotation = fs, v.isIdentifier = ve, v.isIfStatement = ge, v.isImmutable = un, v.isImport = $t, v.isImportAttribute = ts, v.isImportDeclaration = Ge, v.isImportDefaultSpecifier = _e, v.isImportExpression = wt, v.isImportNamespaceSpecifier = it, v.isImportOrExportDeclaration = Yi, v.isImportSpecifier = Qe, v.isIndexedAccessType = H, v.isInferredPredicate = ds, v.isInterfaceDeclaration = ft, v.isInterfaceExtends = hs, v.isInterfaceTypeAnnotation = ys, v.isInterpreterDirective = x, v.isIntersectionTypeAnnotation = Zt, v.isJSX = Cn, v.isJSXAttribute = or, v.isJSXClosingElement = Ms, v.isJSXClosingFragment = dr, v.isJSXElement = _s, v.isJSXEmptyExpression = Bs, v.isJSXExpressionContainer = Fs, v.isJSXFragment = fr, v.isJSXIdentifier = Rs, v.isJSXMemberExpression = ur, v.isJSXNamespacedName = cr, v.isJSXOpeningElement = js, v.isJSXOpeningFragment = Ks, v.isJSXSpreadAttribute = Us, v.isJSXSpreadChild = lr, v.isJSXText = pr, v.isLVal = nn, v.isLabeledStatement = ue, v.isLiteral = ln, v.isLogicalExpression = Je, v.isLoop = b, v.isMemberExpression = z, v.isMetaProperty = Ot, v.isMethod = pn, v.isMiscellaneous = wn, v.isMixedTypeAnnotation = ms, v.isModuleDeclaration = Rn, v.isModuleExpression = Hs, v.isModuleSpecifier = Sn, v.isNewExpression = ne, v.isNoop = Vs, v.isNullLiteral = je, v.isNullLiteralTypeAnnotation = is, v.isNullableTypeAnnotation = Ke, v.isNumberLiteral = Mn, v.isNumberLiteralTypeAnnotation = Ts, v.isNumberTypeAnnotation = Ft, v.isNumericLiteral = q, v.isObjectExpression = Q, v.isObjectMember = fn, v.isObjectMethod = ce, v.isObjectPattern = $r, v.isObjectProperty = ye, v.isObjectTypeAnnotation = Ss, v.isObjectTypeCallProperty = dt, v.isObjectTypeIndexer = tr, v.isObjectTypeInternalSlot = er, v.isObjectTypeProperty = xs, v.isObjectTypeSpreadProperty = bs, v.isOpaqueType = Rt, v.isOptionalCallExpression = Hr, v.isOptionalIndexedAccessType = ks, v.isOptionalMemberExpression = Ht, v.isParenthesizedExpression = Oe, v.isPattern = yn, v.isPatternLike = an, v.isPipelineBareFunction = yr, v.isPipelinePrimaryTopicReference = Qs, v.isPipelineTopicExpression = ot, v.isPlaceholder = qs, v.isPrivate = bn, v.isPrivateName = Mt, v.isProgram = W, v.isProperty = dn, v.isPureish = tn, v.isQualifiedTypeIdentifier = rr, v.isRecordExpression = hr, v.isRegExpLiteral = Me, v.isRegexLiteral = _n, v.isRestElement = Se, v.isRestProperty = Bn, v.isReturnStatement = me, v.isScopable = Ni, v.isSequenceExpression = Ee, v.isSpreadElement = Dt, v.isSpreadProperty = Fn, v.isStandardized = gi, v.isStatement = Oi, v.isStaticBlock = es, v.isStringLiteral = ae, v.isStringLiteralTypeAnnotation = sr, v.isStringTypeAnnotation = nt, v.isSuper = Fe, v.isSwitchCase = De, v.isSwitchStatement = re, v.isSymbolTypeAnnotation = Ps, v.isTSAnyKeyword = D, v.isTSArrayType = vr, v.isTSAsExpression = Yr, v.isTSBaseType = kn, v.isTSBigIntKeyword = J, v.isTSBooleanKeyword = B, v.isTSCallSignatureDeclaration = u, v.isTSConditionalType = Lr, v.isTSConstructSignatureDeclaration = T, v.isTSConstructorType = br, v.isTSDeclareFunction = e, v.isTSDeclareMethod = r, v.isTSEntityName = on, v.isTSEnumBody = ui, v.isTSEnumDeclaration = ci, v.isTSEnumMember = pi, v.isTSExportAssignment = Si, v.isTSExpressionWithTypeArguments = Ur, v.isTSExternalModuleReference = mi, v.isTSFunctionType = xr, v.isTSImportEqualsDeclaration = yi, v.isTSImportType = hi, v.isTSIndexSignature = C, v.isTSIndexedAccessType = Br, v.isTSInferType = kr, v.isTSInstantiationExpression = Jr, v.isTSInterfaceBody = Vr, v.isTSInterfaceDeclaration = Kr, v.isTSIntersectionType = Dr, v.isTSIntrinsicKeyword = X, v.isTSLiteralType = jr, v.isTSMappedType = Fr, v.isTSMethodSignature = g, v.isTSModuleBlock = di, v.isTSModuleDeclaration = fi, v.isTSNamedTupleMember = wr, v.isTSNamespaceExportDeclaration = xi, v.isTSNeverKeyword = G, v.isTSNonNullExpression = Ti, v.isTSNullKeyword = de, v.isTSNumberKeyword = Pe, v.isTSObjectKeyword = oe, v.isTSOptionalType = Nr, v.isTSParameterProperty = t, v.isTSParenthesizedType = Mr, v.isTSPropertySignature = P, v.isTSQualifiedName = i, v.isTSRestType = Cr, v.isTSSatisfiesExpression = oi, v.isTSStringKeyword = xe, v.isTSSymbolKeyword = We, v.isTSTemplateLiteralType = Rr, v.isTSThisType = Sr, v.isTSTupleType = Ir, v.isTSType = Ln, v.isTSTypeAliasDeclaration = qr, v.isTSTypeAnnotation = bi, v.isTSTypeAssertion = li, v.isTSTypeElement = Dn, v.isTSTypeLiteral = gr, v.isTSTypeOperator = _r, v.isTSTypeParameter = Ai, v.isTSTypeParameterDeclaration = Ei, v.isTSTypeParameterInstantiation = Pi, v.isTSTypePredicate = Er, v.isTSTypeQuery = Ar, v.isTSTypeReference = Pr, v.isTSUndefinedKeyword = qe, v.isTSUnionType = Or, v.isTSUnknownKeyword = mr, v.isTSVoidKeyword = Tr, v.isTaggedTemplateExpression = Xe, v.isTemplateElement = Lt, v.isTemplateLiteral = Xt, v.isTerminatorless = p, v.isThisExpression = le, v.isThisTypeAnnotation = Ve, v.isThrowStatement = St, v.isTopicReference = Gs, v.isTryStatement = pe, v.isTupleExpression = Ws, v.isTupleTypeAnnotation = Es, v.isTypeAlias = gs, v.isTypeAnnotation = ht, v.isTypeCastExpression = ir, v.isTypeParameter = vs, v.isTypeParameterDeclaration = Is, v.isTypeParameterInstantiation = Ns, v.isTypeScript = On, v.isTypeofTypeAnnotation = As, v.isUnaryExpression = xt, v.isUnaryLike = hn, v.isUnionTypeAnnotation = Cs, v.isUpdateExpression = Le, v.isUserWhitespacable = cn, v.isV8IntrinsicIdentifier = Vt, v.isVariableDeclaration = ut, v.isVariableDeclarator = bt, v.isVariance = ar, v.isVoidPattern = y, v.isVoidTypeAnnotation = ws, v.isWhile = N, v.isWhileStatement = Ye, v.isWithStatement = Pt, v.isYieldExpression = Wr;
  var n = Hn(), l = Ui();
  function c(a, s) {
    return !a || a.type !== "ArrayExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function o(a, s) {
    return !a || a.type !== "AssignmentExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function S(a, s) {
    return !a || a.type !== "BinaryExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function x(a, s) {
    return !a || a.type !== "InterpreterDirective" ? !1 : s == null || (0, n.default)(a, s);
  }
  function M(a, s) {
    return !a || a.type !== "Directive" ? !1 : s == null || (0, n.default)(a, s);
  }
  function w(a, s) {
    return !a || a.type !== "DirectiveLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function L(a, s) {
    return !a || a.type !== "BlockStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function k(a, s) {
    return !a || a.type !== "BreakStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function O(a, s) {
    return !a || a.type !== "CallExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function F(a, s) {
    return !a || a.type !== "CatchClause" ? !1 : s == null || (0, n.default)(a, s);
  }
  function j(a, s) {
    return !a || a.type !== "ConditionalExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function R(a, s) {
    return !a || a.type !== "ContinueStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Z(a, s) {
    return !a || a.type !== "DebuggerStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function K(a, s) {
    return !a || a.type !== "DoWhileStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function V(a, s) {
    return !a || a.type !== "EmptyStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function A(a, s) {
    return !a || a.type !== "ExpressionStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Y(a, s) {
    return !a || a.type !== "File" ? !1 : s == null || (0, n.default)(a, s);
  }
  function te(a, s) {
    return !a || a.type !== "ForInStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function se(a, s) {
    return !a || a.type !== "ForStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Te(a, s) {
    return !a || a.type !== "FunctionDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function be(a, s) {
    return !a || a.type !== "FunctionExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ve(a, s) {
    return !a || a.type !== "Identifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ge(a, s) {
    return !a || a.type !== "IfStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ue(a, s) {
    return !a || a.type !== "LabeledStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ae(a, s) {
    return !a || a.type !== "StringLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function q(a, s) {
    return !a || a.type !== "NumericLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function je(a, s) {
    return !a || a.type !== "NullLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ne(a, s) {
    return !a || a.type !== "BooleanLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Me(a, s) {
    return !a || a.type !== "RegExpLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Je(a, s) {
    return !a || a.type !== "LogicalExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function z(a, s) {
    return !a || a.type !== "MemberExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ne(a, s) {
    return !a || a.type !== "NewExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function W(a, s) {
    return !a || a.type !== "Program" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Q(a, s) {
    return !a || a.type !== "ObjectExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ce(a, s) {
    return !a || a.type !== "ObjectMethod" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ye(a, s) {
    return !a || a.type !== "ObjectProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Se(a, s) {
    return !a || a.type !== "RestElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function me(a, s) {
    return !a || a.type !== "ReturnStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ee(a, s) {
    return !a || a.type !== "SequenceExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Oe(a, s) {
    return !a || a.type !== "ParenthesizedExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function De(a, s) {
    return !a || a.type !== "SwitchCase" ? !1 : s == null || (0, n.default)(a, s);
  }
  function re(a, s) {
    return !a || a.type !== "SwitchStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function le(a, s) {
    return !a || a.type !== "ThisExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function St(a, s) {
    return !a || a.type !== "ThrowStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function pe(a, s) {
    return !a || a.type !== "TryStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function xt(a, s) {
    return !a || a.type !== "UnaryExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Le(a, s) {
    return !a || a.type !== "UpdateExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ut(a, s) {
    return !a || a.type !== "VariableDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function bt(a, s) {
    return !a || a.type !== "VariableDeclarator" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ye(a, s) {
    return !a || a.type !== "WhileStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Pt(a, s) {
    return !a || a.type !== "WithStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ct(a, s) {
    return !a || a.type !== "AssignmentPattern" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Et(a, s) {
    return !a || a.type !== "ArrayPattern" ? !1 : s == null || (0, n.default)(a, s);
  }
  function st(a, s) {
    return !a || a.type !== "ArrowFunctionExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function At(a, s) {
    return !a || a.type !== "ClassBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function gt(a, s) {
    return !a || a.type !== "ClassExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function vt(a, s) {
    return !a || a.type !== "ClassDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function It(a, s) {
    return !a || a.type !== "ExportAllDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Nt(a, s) {
    return !a || a.type !== "ExportDefaultDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Be(a, s) {
    return !a || a.type !== "ExportNamedDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function He(a, s) {
    return !a || a.type !== "ExportSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ct(a, s) {
    return !a || a.type !== "ForOfStatement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ge(a, s) {
    return !a || a.type !== "ImportDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function _e(a, s) {
    return !a || a.type !== "ImportDefaultSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function it(a, s) {
    return !a || a.type !== "ImportNamespaceSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Qe(a, s) {
    return !a || a.type !== "ImportSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function wt(a, s) {
    return !a || a.type !== "ImportExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ot(a, s) {
    return !a || a.type !== "MetaProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function $(a, s) {
    return !a || a.type !== "ClassMethod" ? !1 : s == null || (0, n.default)(a, s);
  }
  function $r(a, s) {
    return !a || a.type !== "ObjectPattern" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Dt(a, s) {
    return !a || a.type !== "SpreadElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Fe(a, s) {
    return !a || a.type !== "Super" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Xe(a, s) {
    return !a || a.type !== "TaggedTemplateExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Lt(a, s) {
    return !a || a.type !== "TemplateElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Xt(a, s) {
    return !a || a.type !== "TemplateLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Wr(a, s) {
    return !a || a.type !== "YieldExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function zr(a, s) {
    return !a || a.type !== "AwaitExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function $t(a, s) {
    return !a || a.type !== "Import" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Wt(a, s) {
    return !a || a.type !== "BigIntLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function zt(a, s) {
    return !a || a.type !== "ExportNamespaceSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ht(a, s) {
    return !a || a.type !== "OptionalMemberExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Hr(a, s) {
    return !a || a.type !== "OptionalCallExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Gr(a, s) {
    return !a || a.type !== "ClassProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Qr(a, s) {
    return !a || a.type !== "ClassAccessorProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Zr(a, s) {
    return !a || a.type !== "ClassPrivateProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function kt(a, s) {
    return !a || a.type !== "ClassPrivateMethod" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Mt(a, s) {
    return !a || a.type !== "PrivateName" ? !1 : s == null || (0, n.default)(a, s);
  }
  function es(a, s) {
    return !a || a.type !== "StaticBlock" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ts(a, s) {
    return !a || a.type !== "ImportAttribute" ? !1 : s == null || (0, n.default)(a, s);
  }
  function rs(a, s) {
    return !a || a.type !== "AnyTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ie(a, s) {
    return !a || a.type !== "ArrayTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ss(a, s) {
    return !a || a.type !== "BooleanTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Gt(a, s) {
    return !a || a.type !== "BooleanLiteralTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function is(a, s) {
    return !a || a.type !== "NullLiteralTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function as(a, s) {
    return !a || a.type !== "ClassImplements" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ns(a, s) {
    return !a || a.type !== "DeclareClass" ? !1 : s == null || (0, n.default)(a, s);
  }
  function os(a, s) {
    return !a || a.type !== "DeclareFunction" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ls(a, s) {
    return !a || a.type !== "DeclareInterface" ? !1 : s == null || (0, n.default)(a, s);
  }
  function us(a, s) {
    return !a || a.type !== "DeclareModule" ? !1 : s == null || (0, n.default)(a, s);
  }
  function pt(a, s) {
    return !a || a.type !== "DeclareModuleExports" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ze(a, s) {
    return !a || a.type !== "DeclareTypeAlias" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Qt(a, s) {
    return !a || a.type !== "DeclareOpaqueType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function _t(a, s) {
    return !a || a.type !== "DeclareVariable" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Bt(a, s) {
    return !a || a.type !== "DeclareExportDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function cs(a, s) {
    return !a || a.type !== "DeclareExportAllDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function $e(a, s) {
    return !a || a.type !== "DeclaredPredicate" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ue(a, s) {
    return !a || a.type !== "ExistsTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function et(a, s) {
    return !a || a.type !== "FunctionTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ps(a, s) {
    return !a || a.type !== "FunctionTypeParam" ? !1 : s == null || (0, n.default)(a, s);
  }
  function fs(a, s) {
    return !a || a.type !== "GenericTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ds(a, s) {
    return !a || a.type !== "InferredPredicate" ? !1 : s == null || (0, n.default)(a, s);
  }
  function hs(a, s) {
    return !a || a.type !== "InterfaceExtends" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ft(a, s) {
    return !a || a.type !== "InterfaceDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ys(a, s) {
    return !a || a.type !== "InterfaceTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Zt(a, s) {
    return !a || a.type !== "IntersectionTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ms(a, s) {
    return !a || a.type !== "MixedTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function at(a, s) {
    return !a || a.type !== "EmptyTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ke(a, s) {
    return !a || a.type !== "NullableTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ts(a, s) {
    return !a || a.type !== "NumberLiteralTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ft(a, s) {
    return !a || a.type !== "NumberTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ss(a, s) {
    return !a || a.type !== "ObjectTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function er(a, s) {
    return !a || a.type !== "ObjectTypeInternalSlot" ? !1 : s == null || (0, n.default)(a, s);
  }
  function dt(a, s) {
    return !a || a.type !== "ObjectTypeCallProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function tr(a, s) {
    return !a || a.type !== "ObjectTypeIndexer" ? !1 : s == null || (0, n.default)(a, s);
  }
  function xs(a, s) {
    return !a || a.type !== "ObjectTypeProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function bs(a, s) {
    return !a || a.type !== "ObjectTypeSpreadProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Rt(a, s) {
    return !a || a.type !== "OpaqueType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function rr(a, s) {
    return !a || a.type !== "QualifiedTypeIdentifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function sr(a, s) {
    return !a || a.type !== "StringLiteralTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function nt(a, s) {
    return !a || a.type !== "StringTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ps(a, s) {
    return !a || a.type !== "SymbolTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ve(a, s) {
    return !a || a.type !== "ThisTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Es(a, s) {
    return !a || a.type !== "TupleTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function As(a, s) {
    return !a || a.type !== "TypeofTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function gs(a, s) {
    return !a || a.type !== "TypeAlias" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ht(a, s) {
    return !a || a.type !== "TypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ir(a, s) {
    return !a || a.type !== "TypeCastExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function vs(a, s) {
    return !a || a.type !== "TypeParameter" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Is(a, s) {
    return !a || a.type !== "TypeParameterDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ns(a, s) {
    return !a || a.type !== "TypeParameterInstantiation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Cs(a, s) {
    return !a || a.type !== "UnionTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ar(a, s) {
    return !a || a.type !== "Variance" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ws(a, s) {
    return !a || a.type !== "VoidTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function yt(a, s) {
    return !a || a.type !== "EnumDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function mt(a, s) {
    return !a || a.type !== "EnumBooleanBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function jt(a, s) {
    return !a || a.type !== "EnumNumberBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Os(a, s) {
    return !a || a.type !== "EnumStringBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ut(a, s) {
    return !a || a.type !== "EnumSymbolBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ds(a, s) {
    return !a || a.type !== "EnumBooleanMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Kt(a, s) {
    return !a || a.type !== "EnumNumberMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ls(a, s) {
    return !a || a.type !== "EnumStringMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function nr(a, s) {
    return !a || a.type !== "EnumDefaultedMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function H(a, s) {
    return !a || a.type !== "IndexedAccessType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ks(a, s) {
    return !a || a.type !== "OptionalIndexedAccessType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function or(a, s) {
    return !a || a.type !== "JSXAttribute" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ms(a, s) {
    return !a || a.type !== "JSXClosingElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function _s(a, s) {
    return !a || a.type !== "JSXElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Bs(a, s) {
    return !a || a.type !== "JSXEmptyExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Fs(a, s) {
    return !a || a.type !== "JSXExpressionContainer" ? !1 : s == null || (0, n.default)(a, s);
  }
  function lr(a, s) {
    return !a || a.type !== "JSXSpreadChild" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Rs(a, s) {
    return !a || a.type !== "JSXIdentifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ur(a, s) {
    return !a || a.type !== "JSXMemberExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function cr(a, s) {
    return !a || a.type !== "JSXNamespacedName" ? !1 : s == null || (0, n.default)(a, s);
  }
  function js(a, s) {
    return !a || a.type !== "JSXOpeningElement" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Us(a, s) {
    return !a || a.type !== "JSXSpreadAttribute" ? !1 : s == null || (0, n.default)(a, s);
  }
  function pr(a, s) {
    return !a || a.type !== "JSXText" ? !1 : s == null || (0, n.default)(a, s);
  }
  function fr(a, s) {
    return !a || a.type !== "JSXFragment" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ks(a, s) {
    return !a || a.type !== "JSXOpeningFragment" ? !1 : s == null || (0, n.default)(a, s);
  }
  function dr(a, s) {
    return !a || a.type !== "JSXClosingFragment" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Vs(a, s) {
    return !a || a.type !== "Noop" ? !1 : s == null || (0, n.default)(a, s);
  }
  function qs(a, s) {
    return !a || a.type !== "Placeholder" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Vt(a, s) {
    return !a || a.type !== "V8IntrinsicIdentifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Js(a, s) {
    return !a || a.type !== "ArgumentPlaceholder" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ys(a, s) {
    return !a || a.type !== "BindExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function qt(a, s) {
    return !a || a.type !== "Decorator" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Xs(a, s) {
    return !a || a.type !== "DoExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function $s(a, s) {
    return !a || a.type !== "ExportDefaultSpecifier" ? !1 : s == null || (0, n.default)(a, s);
  }
  function hr(a, s) {
    return !a || a.type !== "RecordExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ws(a, s) {
    return !a || a.type !== "TupleExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function zs(a, s) {
    return !a || a.type !== "DecimalLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Hs(a, s) {
    return !a || a.type !== "ModuleExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Gs(a, s) {
    return !a || a.type !== "TopicReference" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ot(a, s) {
    return !a || a.type !== "PipelineTopicExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function yr(a, s) {
    return !a || a.type !== "PipelineBareFunction" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Qs(a, s) {
    return !a || a.type !== "PipelinePrimaryTopicReference" ? !1 : s == null || (0, n.default)(a, s);
  }
  function y(a, s) {
    return !a || a.type !== "VoidPattern" ? !1 : s == null || (0, n.default)(a, s);
  }
  function t(a, s) {
    return !a || a.type !== "TSParameterProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function e(a, s) {
    return !a || a.type !== "TSDeclareFunction" ? !1 : s == null || (0, n.default)(a, s);
  }
  function r(a, s) {
    return !a || a.type !== "TSDeclareMethod" ? !1 : s == null || (0, n.default)(a, s);
  }
  function i(a, s) {
    return !a || a.type !== "TSQualifiedName" ? !1 : s == null || (0, n.default)(a, s);
  }
  function u(a, s) {
    return !a || a.type !== "TSCallSignatureDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function T(a, s) {
    return !a || a.type !== "TSConstructSignatureDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function P(a, s) {
    return !a || a.type !== "TSPropertySignature" ? !1 : s == null || (0, n.default)(a, s);
  }
  function g(a, s) {
    return !a || a.type !== "TSMethodSignature" ? !1 : s == null || (0, n.default)(a, s);
  }
  function C(a, s) {
    return !a || a.type !== "TSIndexSignature" ? !1 : s == null || (0, n.default)(a, s);
  }
  function D(a, s) {
    return !a || a.type !== "TSAnyKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function B(a, s) {
    return !a || a.type !== "TSBooleanKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function J(a, s) {
    return !a || a.type !== "TSBigIntKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function X(a, s) {
    return !a || a.type !== "TSIntrinsicKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function G(a, s) {
    return !a || a.type !== "TSNeverKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function de(a, s) {
    return !a || a.type !== "TSNullKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Pe(a, s) {
    return !a || a.type !== "TSNumberKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function oe(a, s) {
    return !a || a.type !== "TSObjectKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function xe(a, s) {
    return !a || a.type !== "TSStringKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function We(a, s) {
    return !a || a.type !== "TSSymbolKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function qe(a, s) {
    return !a || a.type !== "TSUndefinedKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function mr(a, s) {
    return !a || a.type !== "TSUnknownKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Tr(a, s) {
    return !a || a.type !== "TSVoidKeyword" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Sr(a, s) {
    return !a || a.type !== "TSThisType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function xr(a, s) {
    return !a || a.type !== "TSFunctionType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function br(a, s) {
    return !a || a.type !== "TSConstructorType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Pr(a, s) {
    return !a || a.type !== "TSTypeReference" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Er(a, s) {
    return !a || a.type !== "TSTypePredicate" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ar(a, s) {
    return !a || a.type !== "TSTypeQuery" ? !1 : s == null || (0, n.default)(a, s);
  }
  function gr(a, s) {
    return !a || a.type !== "TSTypeLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function vr(a, s) {
    return !a || a.type !== "TSArrayType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ir(a, s) {
    return !a || a.type !== "TSTupleType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Nr(a, s) {
    return !a || a.type !== "TSOptionalType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Cr(a, s) {
    return !a || a.type !== "TSRestType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function wr(a, s) {
    return !a || a.type !== "TSNamedTupleMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Or(a, s) {
    return !a || a.type !== "TSUnionType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Dr(a, s) {
    return !a || a.type !== "TSIntersectionType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Lr(a, s) {
    return !a || a.type !== "TSConditionalType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function kr(a, s) {
    return !a || a.type !== "TSInferType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Mr(a, s) {
    return !a || a.type !== "TSParenthesizedType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function _r(a, s) {
    return !a || a.type !== "TSTypeOperator" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Br(a, s) {
    return !a || a.type !== "TSIndexedAccessType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Fr(a, s) {
    return !a || a.type !== "TSMappedType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Rr(a, s) {
    return !a || a.type !== "TSTemplateLiteralType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function jr(a, s) {
    return !a || a.type !== "TSLiteralType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ur(a, s) {
    return !a || a.type !== "TSExpressionWithTypeArguments" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Kr(a, s) {
    return !a || a.type !== "TSInterfaceDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Vr(a, s) {
    return !a || a.type !== "TSInterfaceBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function qr(a, s) {
    return !a || a.type !== "TSTypeAliasDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Jr(a, s) {
    return !a || a.type !== "TSInstantiationExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Yr(a, s) {
    return !a || a.type !== "TSAsExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function oi(a, s) {
    return !a || a.type !== "TSSatisfiesExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function li(a, s) {
    return !a || a.type !== "TSTypeAssertion" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ui(a, s) {
    return !a || a.type !== "TSEnumBody" ? !1 : s == null || (0, n.default)(a, s);
  }
  function ci(a, s) {
    return !a || a.type !== "TSEnumDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function pi(a, s) {
    return !a || a.type !== "TSEnumMember" ? !1 : s == null || (0, n.default)(a, s);
  }
  function fi(a, s) {
    return !a || a.type !== "TSModuleDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function di(a, s) {
    return !a || a.type !== "TSModuleBlock" ? !1 : s == null || (0, n.default)(a, s);
  }
  function hi(a, s) {
    return !a || a.type !== "TSImportType" ? !1 : s == null || (0, n.default)(a, s);
  }
  function yi(a, s) {
    return !a || a.type !== "TSImportEqualsDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function mi(a, s) {
    return !a || a.type !== "TSExternalModuleReference" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ti(a, s) {
    return !a || a.type !== "TSNonNullExpression" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Si(a, s) {
    return !a || a.type !== "TSExportAssignment" ? !1 : s == null || (0, n.default)(a, s);
  }
  function xi(a, s) {
    return !a || a.type !== "TSNamespaceExportDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function bi(a, s) {
    return !a || a.type !== "TSTypeAnnotation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Pi(a, s) {
    return !a || a.type !== "TSTypeParameterInstantiation" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ei(a, s) {
    return !a || a.type !== "TSTypeParameterDeclaration" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Ai(a, s) {
    return !a || a.type !== "TSTypeParameter" ? !1 : s == null || (0, n.default)(a, s);
  }
  function gi(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "InterpreterDirective":
      case "Directive":
      case "DirectiveLiteral":
      case "BlockStatement":
      case "BreakStatement":
      case "CallExpression":
      case "CatchClause":
      case "ConditionalExpression":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "File":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Identifier":
      case "IfStatement":
      case "LabeledStatement":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "Program":
      case "ObjectExpression":
      case "ObjectMethod":
      case "ObjectProperty":
      case "RestElement":
      case "ReturnStatement":
      case "SequenceExpression":
      case "ParenthesizedExpression":
      case "SwitchCase":
      case "SwitchStatement":
      case "ThisExpression":
      case "ThrowStatement":
      case "TryStatement":
      case "UnaryExpression":
      case "UpdateExpression":
      case "VariableDeclaration":
      case "VariableDeclarator":
      case "WhileStatement":
      case "WithStatement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ArrowFunctionExpression":
      case "ClassBody":
      case "ClassExpression":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ExportSpecifier":
      case "ForOfStatement":
      case "ImportDeclaration":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
      case "ImportExpression":
      case "MetaProperty":
      case "ClassMethod":
      case "ObjectPattern":
      case "SpreadElement":
      case "Super":
      case "TaggedTemplateExpression":
      case "TemplateElement":
      case "TemplateLiteral":
      case "YieldExpression":
      case "AwaitExpression":
      case "Import":
      case "BigIntLiteral":
      case "ExportNamespaceSpecifier":
      case "OptionalMemberExpression":
      case "OptionalCallExpression":
      case "ClassProperty":
      case "ClassAccessorProperty":
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
      case "PrivateName":
      case "StaticBlock":
      case "ImportAttribute":
        break;
      case "Placeholder":
        switch (a.expectedNode) {
          case "Identifier":
          case "StringLiteral":
          case "BlockStatement":
          case "ClassBody":
            break;
          default:
            return !1;
        }
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function vi(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ParenthesizedExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
      case "ArrowFunctionExpression":
      case "ClassExpression":
      case "ImportExpression":
      case "MetaProperty":
      case "Super":
      case "TaggedTemplateExpression":
      case "TemplateLiteral":
      case "YieldExpression":
      case "AwaitExpression":
      case "Import":
      case "BigIntLiteral":
      case "OptionalMemberExpression":
      case "OptionalCallExpression":
      case "TypeCastExpression":
      case "JSXElement":
      case "JSXFragment":
      case "BindExpression":
      case "DoExpression":
      case "RecordExpression":
      case "TupleExpression":
      case "DecimalLiteral":
      case "ModuleExpression":
      case "TopicReference":
      case "PipelineTopicExpression":
      case "PipelineBareFunction":
      case "PipelinePrimaryTopicReference":
      case "TSInstantiationExpression":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (a.expectedNode) {
          case "Expression":
          case "Identifier":
          case "StringLiteral":
            break;
          default:
            return !1;
        }
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ii(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ni(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Program":
      case "ObjectMethod":
      case "SwitchStatement":
      case "WhileStatement":
      case "ArrowFunctionExpression":
      case "ClassExpression":
      case "ClassDeclaration":
      case "ForOfStatement":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (a.expectedNode === "BlockStatement") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ci(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "Program":
      case "ObjectMethod":
      case "SwitchStatement":
      case "WhileStatement":
      case "ArrowFunctionExpression":
      case "ForOfStatement":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (a.expectedNode === "BlockStatement") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function wi(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "Program":
      case "TSModuleBlock":
        break;
      case "Placeholder":
        if (a.expectedNode === "BlockStatement") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Oi(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "FunctionDeclaration":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ForOfStatement":
      case "ImportDeclaration":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
      case "EnumDeclaration":
      case "TSDeclareFunction":
      case "TSInterfaceDeclaration":
      case "TSTypeAliasDeclaration":
      case "TSEnumDeclaration":
      case "TSModuleDeclaration":
      case "TSImportEqualsDeclaration":
      case "TSExportAssignment":
      case "TSNamespaceExportDeclaration":
        break;
      case "Placeholder":
        switch (a.expectedNode) {
          case "Statement":
          case "Declaration":
          case "BlockStatement":
            break;
          default:
            return !1;
        }
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function p(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "ReturnStatement":
      case "ThrowStatement":
      case "YieldExpression":
      case "AwaitExpression":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function f(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "ReturnStatement":
      case "ThrowStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function h(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ConditionalExpression":
      case "IfStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function b(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
      case "ForOfStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function N(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "DoWhileStatement":
      case "WhileStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function _(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ExpressionStatement":
      case "ParenthesizedExpression":
      case "TypeCastExpression":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function ee(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ForInStatement":
      case "ForStatement":
      case "ForOfStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ae(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ForInStatement":
      case "ForOfStatement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ce(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ObjectMethod":
      case "ArrowFunctionExpression":
      case "ClassMethod":
      case "ClassPrivateMethod":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function tt(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ObjectMethod":
      case "ArrowFunctionExpression":
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "StaticBlock":
      case "TSModuleBlock":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function tn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "ArrowFunctionExpression":
      case "BigIntLiteral":
      case "DecimalLiteral":
        break;
      case "Placeholder":
        if (a.expectedNode === "StringLiteral") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function rn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "FunctionDeclaration":
      case "VariableDeclaration":
      case "ClassDeclaration":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ImportDeclaration":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
      case "EnumDeclaration":
      case "TSDeclareFunction":
      case "TSInterfaceDeclaration":
      case "TSTypeAliasDeclaration":
      case "TSEnumDeclaration":
      case "TSModuleDeclaration":
      case "TSImportEqualsDeclaration":
        break;
      case "Placeholder":
        if (a.expectedNode === "Declaration") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function sn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "Identifier":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
        break;
      case "Placeholder":
        if (a.expectedNode === "Identifier") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function an(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "Identifier":
      case "MemberExpression":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (a.expectedNode) {
          case "Pattern":
          case "Identifier":
            break;
          default:
            return !1;
        }
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function nn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "Identifier":
      case "MemberExpression":
      case "RestElement":
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "TSParameterProperty":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        break;
      case "Placeholder":
        switch (a.expectedNode) {
          case "Pattern":
          case "Identifier":
            break;
          default:
            return !1;
        }
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function on(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "Identifier":
      case "TSQualifiedName":
        break;
      case "Placeholder":
        if (a.expectedNode === "Identifier") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function ln(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "RegExpLiteral":
      case "TemplateLiteral":
      case "BigIntLiteral":
      case "DecimalLiteral":
        break;
      case "Placeholder":
        if (a.expectedNode === "StringLiteral") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function un(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "StringLiteral":
      case "NumericLiteral":
      case "NullLiteral":
      case "BooleanLiteral":
      case "BigIntLiteral":
      case "JSXAttribute":
      case "JSXClosingElement":
      case "JSXElement":
      case "JSXExpressionContainer":
      case "JSXSpreadChild":
      case "JSXOpeningElement":
      case "JSXText":
      case "JSXFragment":
      case "JSXOpeningFragment":
      case "JSXClosingFragment":
      case "DecimalLiteral":
        break;
      case "Placeholder":
        if (a.expectedNode === "StringLiteral") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function cn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ObjectMethod":
      case "ObjectProperty":
      case "ObjectTypeInternalSlot":
      case "ObjectTypeCallProperty":
      case "ObjectTypeIndexer":
      case "ObjectTypeProperty":
      case "ObjectTypeSpreadProperty":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function pn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ObjectMethod":
      case "ClassMethod":
      case "ClassPrivateMethod":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function fn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ObjectMethod":
      case "ObjectProperty":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function dn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ObjectProperty":
      case "ClassProperty":
      case "ClassAccessorProperty":
      case "ClassPrivateProperty":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function hn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "UnaryExpression":
      case "SpreadElement":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function yn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "AssignmentPattern":
      case "ArrayPattern":
      case "ObjectPattern":
      case "VoidPattern":
        break;
      case "Placeholder":
        if (a.expectedNode === "Pattern") break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function mn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ClassExpression":
      case "ClassDeclaration":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Yi(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ImportDeclaration":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Tn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Sn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ExportSpecifier":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function xn(a, s) {
    return !a || a.type !== "ClassAccessorProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function bn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
      case "PrivateName":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Pn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "AnyTypeAnnotation":
      case "ArrayTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "BooleanLiteralTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "ClassImplements":
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "DeclaredPredicate":
      case "ExistsTypeAnnotation":
      case "FunctionTypeAnnotation":
      case "FunctionTypeParam":
      case "GenericTypeAnnotation":
      case "InferredPredicate":
      case "InterfaceExtends":
      case "InterfaceDeclaration":
      case "InterfaceTypeAnnotation":
      case "IntersectionTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NullableTypeAnnotation":
      case "NumberLiteralTypeAnnotation":
      case "NumberTypeAnnotation":
      case "ObjectTypeAnnotation":
      case "ObjectTypeInternalSlot":
      case "ObjectTypeCallProperty":
      case "ObjectTypeIndexer":
      case "ObjectTypeProperty":
      case "ObjectTypeSpreadProperty":
      case "OpaqueType":
      case "QualifiedTypeIdentifier":
      case "StringLiteralTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "TupleTypeAnnotation":
      case "TypeofTypeAnnotation":
      case "TypeAlias":
      case "TypeAnnotation":
      case "TypeCastExpression":
      case "TypeParameter":
      case "TypeParameterDeclaration":
      case "TypeParameterInstantiation":
      case "UnionTypeAnnotation":
      case "Variance":
      case "VoidTypeAnnotation":
      case "EnumDeclaration":
      case "EnumBooleanBody":
      case "EnumNumberBody":
      case "EnumStringBody":
      case "EnumSymbolBody":
      case "EnumBooleanMember":
      case "EnumNumberMember":
      case "EnumStringMember":
      case "EnumDefaultedMember":
      case "IndexedAccessType":
      case "OptionalIndexedAccessType":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function En(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "AnyTypeAnnotation":
      case "ArrayTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "BooleanLiteralTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "ExistsTypeAnnotation":
      case "FunctionTypeAnnotation":
      case "GenericTypeAnnotation":
      case "InterfaceTypeAnnotation":
      case "IntersectionTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NullableTypeAnnotation":
      case "NumberLiteralTypeAnnotation":
      case "NumberTypeAnnotation":
      case "ObjectTypeAnnotation":
      case "StringLiteralTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "TupleTypeAnnotation":
      case "TypeofTypeAnnotation":
      case "UnionTypeAnnotation":
      case "VoidTypeAnnotation":
      case "IndexedAccessType":
      case "OptionalIndexedAccessType":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function An(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "AnyTypeAnnotation":
      case "BooleanTypeAnnotation":
      case "NullLiteralTypeAnnotation":
      case "MixedTypeAnnotation":
      case "EmptyTypeAnnotation":
      case "NumberTypeAnnotation":
      case "StringTypeAnnotation":
      case "SymbolTypeAnnotation":
      case "ThisTypeAnnotation":
      case "VoidTypeAnnotation":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function gn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "DeclareClass":
      case "DeclareFunction":
      case "DeclareInterface":
      case "DeclareModule":
      case "DeclareModuleExports":
      case "DeclareTypeAlias":
      case "DeclareOpaqueType":
      case "DeclareVariable":
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
      case "InterfaceDeclaration":
      case "OpaqueType":
      case "TypeAlias":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function vn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "DeclaredPredicate":
      case "InferredPredicate":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function In(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "EnumBooleanBody":
      case "EnumNumberBody":
      case "EnumStringBody":
      case "EnumSymbolBody":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Nn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "EnumBooleanMember":
      case "EnumNumberMember":
      case "EnumStringMember":
      case "EnumDefaultedMember":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Cn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "JSXAttribute":
      case "JSXClosingElement":
      case "JSXElement":
      case "JSXEmptyExpression":
      case "JSXExpressionContainer":
      case "JSXSpreadChild":
      case "JSXIdentifier":
      case "JSXMemberExpression":
      case "JSXNamespacedName":
      case "JSXOpeningElement":
      case "JSXSpreadAttribute":
      case "JSXText":
      case "JSXFragment":
      case "JSXOpeningFragment":
      case "JSXClosingFragment":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function wn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "Noop":
      case "Placeholder":
      case "V8IntrinsicIdentifier":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function On(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "TSParameterProperty":
      case "TSDeclareFunction":
      case "TSDeclareMethod":
      case "TSQualifiedName":
      case "TSCallSignatureDeclaration":
      case "TSConstructSignatureDeclaration":
      case "TSPropertySignature":
      case "TSMethodSignature":
      case "TSIndexSignature":
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSFunctionType":
      case "TSConstructorType":
      case "TSTypeReference":
      case "TSTypePredicate":
      case "TSTypeQuery":
      case "TSTypeLiteral":
      case "TSArrayType":
      case "TSTupleType":
      case "TSOptionalType":
      case "TSRestType":
      case "TSNamedTupleMember":
      case "TSUnionType":
      case "TSIntersectionType":
      case "TSConditionalType":
      case "TSInferType":
      case "TSParenthesizedType":
      case "TSTypeOperator":
      case "TSIndexedAccessType":
      case "TSMappedType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
      case "TSExpressionWithTypeArguments":
      case "TSInterfaceDeclaration":
      case "TSInterfaceBody":
      case "TSTypeAliasDeclaration":
      case "TSInstantiationExpression":
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSEnumBody":
      case "TSEnumDeclaration":
      case "TSEnumMember":
      case "TSModuleDeclaration":
      case "TSModuleBlock":
      case "TSImportType":
      case "TSImportEqualsDeclaration":
      case "TSExternalModuleReference":
      case "TSNonNullExpression":
      case "TSExportAssignment":
      case "TSNamespaceExportDeclaration":
      case "TSTypeAnnotation":
      case "TSTypeParameterInstantiation":
      case "TSTypeParameterDeclaration":
      case "TSTypeParameter":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Dn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "TSCallSignatureDeclaration":
      case "TSConstructSignatureDeclaration":
      case "TSPropertySignature":
      case "TSMethodSignature":
      case "TSIndexSignature":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Ln(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSFunctionType":
      case "TSConstructorType":
      case "TSTypeReference":
      case "TSTypePredicate":
      case "TSTypeQuery":
      case "TSTypeLiteral":
      case "TSArrayType":
      case "TSTupleType":
      case "TSOptionalType":
      case "TSRestType":
      case "TSUnionType":
      case "TSIntersectionType":
      case "TSConditionalType":
      case "TSInferType":
      case "TSParenthesizedType":
      case "TSTypeOperator":
      case "TSIndexedAccessType":
      case "TSMappedType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
      case "TSExpressionWithTypeArguments":
      case "TSImportType":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function kn(a, s) {
    if (!a) return !1;
    switch (a.type) {
      case "TSAnyKeyword":
      case "TSBooleanKeyword":
      case "TSBigIntKeyword":
      case "TSIntrinsicKeyword":
      case "TSNeverKeyword":
      case "TSNullKeyword":
      case "TSNumberKeyword":
      case "TSObjectKeyword":
      case "TSStringKeyword":
      case "TSSymbolKeyword":
      case "TSUndefinedKeyword":
      case "TSUnknownKeyword":
      case "TSVoidKeyword":
      case "TSThisType":
      case "TSTemplateLiteralType":
      case "TSLiteralType":
        break;
      default:
        return !1;
    }
    return s == null || (0, n.default)(a, s);
  }
  function Mn(a, s) {
    return (0, l.default)("isNumberLiteral", "isNumericLiteral"), !a || a.type !== "NumberLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function _n(a, s) {
    return (0, l.default)("isRegexLiteral", "isRegExpLiteral"), !a || a.type !== "RegexLiteral" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Bn(a, s) {
    return (0, l.default)("isRestProperty", "isRestElement"), !a || a.type !== "RestProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Fn(a, s) {
    return (0, l.default)("isSpreadProperty", "isSpreadElement"), !a || a.type !== "SpreadProperty" ? !1 : s == null || (0, n.default)(a, s);
  }
  function Rn(a, s) {
    return (0, l.default)("isModuleDeclaration", "isImportOrExportDeclaration"), Yi(a, s);
  }
  return v;
}
var no;
function tu() {
  if (no) return $i;
  no = 1, Object.defineProperty($i, "__esModule", {
    value: !0
  }), $i.default = c;
  var n = we();
  function l(o) {
    return (0, n.isMemberExpression)(o) || (0, n.isMetaProperty)(o);
  }
  function c(o, S, x) {
    if (!l(o)) return !1;
    const M = Array.isArray(S) ? S : S.split("."), w = [];
    let L;
    for (L = o; l(L); L = (k = L.object) != null ? k : L.meta) {
      var k;
      w.push(L.property);
    }
    if (w.push(L), w.length < M.length || !x && w.length > M.length) return !1;
    for (let O = 0, F = w.length - 1; O < M.length; O++, F--) {
      const j = w[F];
      let R;
      if ((0, n.isIdentifier)(j))
        R = j.name;
      else if ((0, n.isStringLiteral)(j))
        R = j.value;
      else if ((0, n.isThisExpression)(j))
        R = "this";
      else if ((0, n.isSuper)(j))
        R = "super";
      else if ((0, n.isPrivateName)(j))
        R = "#" + j.id.name;
      else
        return !1;
      if (M[O] !== R) return !1;
    }
    return !0;
  }
  return $i;
}
var oo;
function ru() {
  if (oo) return Xi;
  oo = 1, Object.defineProperty(Xi, "__esModule", {
    value: !0
  }), Xi.default = l;
  var n = tu();
  function l(c, o) {
    const S = c.split(".");
    return (x) => (0, n.default)(x, S, o);
  }
  return Xi;
}
var lo;
function vu() {
  if (lo) return Di;
  lo = 1, Object.defineProperty(Di, "__esModule", {
    value: !0
  }), Di.default = void 0;
  var n = ru();
  const l = (0, n.default)("React.Component");
  return Di.default = l, Di;
}
var Hi = {}, uo;
function Iu() {
  if (uo) return Hi;
  uo = 1, Object.defineProperty(Hi, "__esModule", {
    value: !0
  }), Hi.default = n;
  function n(l) {
    return !!l && /^[a-z]/.test(l);
  }
  return Hi;
}
var Gi = {}, Qi = {}, Kn = {}, E = {}, Zs = {}, Vn = {}, ke = {}, Zi = {}, ea = {}, co;
function Gn() {
  if (co) return ea;
  co = 1, Object.defineProperty(ea, "__esModule", {
    value: !0
  }), ea.default = l;
  var n = lt();
  function l(c, o) {
    if (c === o) return !0;
    if (c == null || n.ALIAS_KEYS[o]) return !1;
    const S = n.FLIPPED_ALIAS_KEYS[o];
    return !!(S != null && S.includes(c));
  }
  return ea;
}
var ta = {}, po;
function su() {
  if (po) return ta;
  po = 1, Object.defineProperty(ta, "__esModule", {
    value: !0
  }), ta.default = l;
  var n = lt();
  function l(c, o) {
    if (c === o) return !0;
    const S = n.PLACEHOLDERS_ALIAS[c];
    return !!(S != null && S.includes(o));
  }
  return ta;
}
var fo;
function Ki() {
  if (fo) return Zi;
  fo = 1, Object.defineProperty(Zi, "__esModule", {
    value: !0
  }), Zi.default = S;
  var n = Hn(), l = Gn(), c = su(), o = lt();
  function S(x, M, w) {
    return M ? (0, l.default)(M.type, x) ? w === void 0 ? !0 : (0, n.default)(M, w) : !w && M.type === "Placeholder" && x in o.FLIPPED_ALIAS_KEYS ? (0, c.default)(M.expectedNode, x) : !1 : !1;
  }
  return Zi;
}
var ra = {}, qn = {}, ti = {}, ho;
function Nu() {
  if (ho) return ti;
  ho = 1, Object.defineProperty(ti, "__esModule", {
    value: !0
  }), ti.isIdentifierChar = L, ti.isIdentifierName = k, ti.isIdentifierStart = w;
  let n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", l = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const c = new RegExp("[" + n + "]"), o = new RegExp("[" + n + l + "]");
  n = l = null;
  const S = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], x = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function M(O, F) {
    let j = 65536;
    for (let R = 0, Z = F.length; R < Z; R += 2) {
      if (j += F[R], j > O) return !1;
      if (j += F[R + 1], j >= O) return !0;
    }
    return !1;
  }
  function w(O) {
    return O < 65 ? O === 36 : O <= 90 ? !0 : O < 97 ? O === 95 : O <= 122 ? !0 : O <= 65535 ? O >= 170 && c.test(String.fromCharCode(O)) : M(O, S);
  }
  function L(O) {
    return O < 48 ? O === 36 : O < 58 ? !0 : O < 65 ? !1 : O <= 90 ? !0 : O < 97 ? O === 95 : O <= 122 ? !0 : O <= 65535 ? O >= 170 && o.test(String.fromCharCode(O)) : M(O, S) || M(O, x);
  }
  function k(O) {
    let F = !0;
    for (let j = 0; j < O.length; j++) {
      let R = O.charCodeAt(j);
      if ((R & 64512) === 55296 && j + 1 < O.length) {
        const Z = O.charCodeAt(++j);
        (Z & 64512) === 56320 && (R = 65536 + ((R & 1023) << 10) + (Z & 1023));
      }
      if (F) {
        if (F = !1, !w(R))
          return !1;
      } else if (!L(R))
        return !1;
    }
    return !F;
  }
  return ti;
}
var Xr = {}, yo;
function Cu() {
  if (yo) return Xr;
  yo = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.isKeyword = L, Xr.isReservedWord = S, Xr.isStrictBindOnlyReservedWord = M, Xr.isStrictBindReservedWord = w, Xr.isStrictReservedWord = x;
  const n = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, l = new Set(n.keyword), c = new Set(n.strict), o = new Set(n.strictBind);
  function S(k, O) {
    return O && k === "await" || k === "enum";
  }
  function x(k, O) {
    return S(k, O) || c.has(k);
  }
  function M(k) {
    return o.has(k);
  }
  function w(k, O) {
    return x(k, O) || M(k);
  }
  function L(k) {
    return l.has(k);
  }
  return Xr;
}
var mo;
function Qn() {
  return mo || (mo = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "isIdentifierChar", {
      enumerable: !0,
      get: function() {
        return l.isIdentifierChar;
      }
    }), Object.defineProperty(n, "isIdentifierName", {
      enumerable: !0,
      get: function() {
        return l.isIdentifierName;
      }
    }), Object.defineProperty(n, "isIdentifierStart", {
      enumerable: !0,
      get: function() {
        return l.isIdentifierStart;
      }
    }), Object.defineProperty(n, "isKeyword", {
      enumerable: !0,
      get: function() {
        return c.isKeyword;
      }
    }), Object.defineProperty(n, "isReservedWord", {
      enumerable: !0,
      get: function() {
        return c.isReservedWord;
      }
    }), Object.defineProperty(n, "isStrictBindOnlyReservedWord", {
      enumerable: !0,
      get: function() {
        return c.isStrictBindOnlyReservedWord;
      }
    }), Object.defineProperty(n, "isStrictBindReservedWord", {
      enumerable: !0,
      get: function() {
        return c.isStrictBindReservedWord;
      }
    }), Object.defineProperty(n, "isStrictReservedWord", {
      enumerable: !0,
      get: function() {
        return c.isStrictReservedWord;
      }
    });
    var l = Nu(), c = Cu();
  })(qn)), qn;
}
var To;
function Vi() {
  if (To) return ra;
  To = 1, Object.defineProperty(ra, "__esModule", {
    value: !0
  }), ra.default = l;
  var n = Qn();
  function l(c, o = !0) {
    return typeof c != "string" || o && ((0, n.isKeyword)(c) || (0, n.isStrictReservedWord)(c, !0)) ? !1 : (0, n.isIdentifierName)(c);
  }
  return ra;
}
var ri = {}, So;
function wu() {
  if (So) return ri;
  So = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.readCodePoint = L, ri.readInt = w, ri.readStringContents = o;
  var n = function(O) {
    return O >= 48 && O <= 57;
  };
  const l = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, c = {
    bin: (k) => k === 48 || k === 49,
    oct: (k) => k >= 48 && k <= 55,
    dec: (k) => k >= 48 && k <= 57,
    hex: (k) => k >= 48 && k <= 57 || k >= 65 && k <= 70 || k >= 97 && k <= 102
  };
  function o(k, O, F, j, R, Z) {
    const K = F, V = j, A = R;
    let Y = "", te = null, se = F;
    const {
      length: Te
    } = O;
    for (; ; ) {
      if (F >= Te) {
        Z.unterminated(K, V, A), Y += O.slice(se, F);
        break;
      }
      const be = O.charCodeAt(F);
      if (S(k, be, O, F)) {
        Y += O.slice(se, F);
        break;
      }
      if (be === 92) {
        Y += O.slice(se, F);
        const ve = x(O, F, j, R, k === "template", Z);
        ve.ch === null && !te ? te = {
          pos: F,
          lineStart: j,
          curLine: R
        } : Y += ve.ch, {
          pos: F,
          lineStart: j,
          curLine: R
        } = ve, se = F;
      } else be === 8232 || be === 8233 ? (++F, ++R, j = F) : be === 10 || be === 13 ? k === "template" ? (Y += O.slice(se, F) + `
`, ++F, be === 13 && O.charCodeAt(F) === 10 && ++F, ++R, se = j = F) : Z.unterminated(K, V, A) : ++F;
    }
    return {
      pos: F,
      str: Y,
      firstInvalidLoc: te,
      lineStart: j,
      curLine: R,
      containsInvalid: !!te
    };
  }
  function S(k, O, F, j) {
    return k === "template" ? O === 96 || O === 36 && F.charCodeAt(j + 1) === 123 : O === (k === "double" ? 34 : 39);
  }
  function x(k, O, F, j, R, Z) {
    const K = !R;
    O++;
    const V = (Y) => ({
      pos: O,
      ch: Y,
      lineStart: F,
      curLine: j
    }), A = k.charCodeAt(O++);
    switch (A) {
      case 110:
        return V(`
`);
      case 114:
        return V("\r");
      case 120: {
        let Y;
        return {
          code: Y,
          pos: O
        } = M(k, O, F, j, 2, !1, K, Z), V(Y === null ? null : String.fromCharCode(Y));
      }
      case 117: {
        let Y;
        return {
          code: Y,
          pos: O
        } = L(k, O, F, j, K, Z), V(Y === null ? null : String.fromCodePoint(Y));
      }
      case 116:
        return V("	");
      case 98:
        return V("\b");
      case 118:
        return V("\v");
      case 102:
        return V("\f");
      case 13:
        k.charCodeAt(O) === 10 && ++O;
      case 10:
        F = O, ++j;
      case 8232:
      case 8233:
        return V("");
      case 56:
      case 57:
        if (R)
          return V(null);
        Z.strictNumericEscape(O - 1, F, j);
      default:
        if (A >= 48 && A <= 55) {
          const Y = O - 1;
          let se = /^[0-7]+/.exec(k.slice(Y, O + 2))[0], Te = parseInt(se, 8);
          Te > 255 && (se = se.slice(0, -1), Te = parseInt(se, 8)), O += se.length - 1;
          const be = k.charCodeAt(O);
          if (se !== "0" || be === 56 || be === 57) {
            if (R)
              return V(null);
            Z.strictNumericEscape(Y, F, j);
          }
          return V(String.fromCharCode(Te));
        }
        return V(String.fromCharCode(A));
    }
  }
  function M(k, O, F, j, R, Z, K, V) {
    const A = O;
    let Y;
    return {
      n: Y,
      pos: O
    } = w(k, O, F, j, 16, R, Z, !1, V, !K), Y === null && (K ? V.invalidEscapeSequence(A, F, j) : O = A - 1), {
      code: Y,
      pos: O
    };
  }
  function w(k, O, F, j, R, Z, K, V, A, Y) {
    const te = O, se = R === 16 ? l.hex : l.decBinOct, Te = R === 16 ? c.hex : R === 10 ? c.dec : R === 8 ? c.oct : c.bin;
    let be = !1, ve = 0;
    for (let ge = 0, ue = Z ?? 1 / 0; ge < ue; ++ge) {
      const ae = k.charCodeAt(O);
      let q;
      if (ae === 95 && V !== "bail") {
        const je = k.charCodeAt(O - 1), Ne = k.charCodeAt(O + 1);
        if (V) {
          if (Number.isNaN(Ne) || !Te(Ne) || se.has(je) || se.has(Ne)) {
            if (Y) return {
              n: null,
              pos: O
            };
            A.unexpectedNumericSeparator(O, F, j);
          }
        } else {
          if (Y) return {
            n: null,
            pos: O
          };
          A.numericSeparatorInEscapeSequence(O, F, j);
        }
        ++O;
        continue;
      }
      if (ae >= 97 ? q = ae - 97 + 10 : ae >= 65 ? q = ae - 65 + 10 : n(ae) ? q = ae - 48 : q = 1 / 0, q >= R) {
        if (q <= 9 && Y)
          return {
            n: null,
            pos: O
          };
        if (q <= 9 && A.invalidDigit(O, F, j, R))
          q = 0;
        else if (K)
          q = 0, be = !0;
        else
          break;
      }
      ++O, ve = ve * R + q;
    }
    return O === te || Z != null && O - te !== Z || be ? {
      n: null,
      pos: O
    } : {
      n: ve,
      pos: O
    };
  }
  function L(k, O, F, j, R, Z) {
    const K = k.charCodeAt(O);
    let V;
    if (K === 123) {
      if (++O, {
        code: V,
        pos: O
      } = M(k, O, F, j, k.indexOf("}", O) - O, !0, R, Z), ++O, V !== null && V > 1114111)
        if (R)
          Z.invalidCodePoint(O, F, j);
        else
          return {
            code: null,
            pos: O
          };
    } else
      ({
        code: V,
        pos: O
      } = M(k, O, F, j, 4, !1, R, Z));
    return {
      code: V,
      pos: O
    };
  }
  return ri;
}
var fe = {}, xo;
function qi() {
  if (xo) return fe;
  xo = 1, Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.UPDATE_OPERATORS = fe.UNARY_OPERATORS = fe.STRING_UNARY_OPERATORS = fe.STATEMENT_OR_BLOCK_KEYS = fe.NUMBER_UNARY_OPERATORS = fe.NUMBER_BINARY_OPERATORS = fe.LOGICAL_OPERATORS = fe.INHERIT_KEYS = fe.FOR_INIT_KEYS = fe.FLATTENABLE_KEYS = fe.EQUALITY_BINARY_OPERATORS = fe.COMPARISON_BINARY_OPERATORS = fe.COMMENT_KEYS = fe.BOOLEAN_UNARY_OPERATORS = fe.BOOLEAN_NUMBER_BINARY_OPERATORS = fe.BOOLEAN_BINARY_OPERATORS = fe.BINARY_OPERATORS = fe.ASSIGNMENT_OPERATORS = void 0, fe.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"], fe.FLATTENABLE_KEYS = ["body", "expressions"], fe.FOR_INIT_KEYS = ["left", "init"], fe.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
  const n = fe.LOGICAL_OPERATORS = ["||", "&&", "??"];
  fe.UPDATE_OPERATORS = ["++", "--"];
  const l = fe.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="], c = fe.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="], o = fe.COMPARISON_BINARY_OPERATORS = [...c, "in", "instanceof"], S = fe.BOOLEAN_BINARY_OPERATORS = [...o, ...l], x = fe.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  fe.BINARY_OPERATORS = ["+", ...x, ...S, "|>"], fe.ASSIGNMENT_OPERATORS = ["=", "+=", ...x.map((k) => k + "="), ...n.map((k) => k + "=")];
  const M = fe.BOOLEAN_UNARY_OPERATORS = ["delete", "!"], w = fe.NUMBER_UNARY_OPERATORS = ["+", "-", "~"], L = fe.STRING_UNARY_OPERATORS = ["typeof"];
  return fe.UNARY_OPERATORS = ["void", "throw", ...M, ...w, ...L], fe.INHERIT_KEYS = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  }, fe.BLOCK_SCOPED_SYMBOL = /* @__PURE__ */ Symbol.for("var used to be block scoped"), fe.NOT_LOCAL_BINDING = /* @__PURE__ */ Symbol.for("should not be considered a local binding"), fe;
}
var he = {}, bo;
function Yt() {
  if (bo) return he;
  bo = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.allExpandedTypes = he.VISITOR_KEYS = he.NODE_UNION_SHAPES__PRIVATE = he.NODE_PARENT_VALIDATIONS = he.NODE_FIELDS = he.FLIPPED_ALIAS_KEYS = he.DEPRECATED_KEYS = he.BUILDER_KEYS = he.ALIAS_KEYS = void 0, he.arrayOf = K, he.arrayOfType = V, he.assertEach = Y, he.assertNodeOrValueType = be, he.assertNodeType = Te, he.assertOneOf = te, he.assertOptionalChainStart = ue, he.assertShape = ge, he.assertValueType = ve, he.chain = ae, he.default = Je, he.defineAliasedType = Me, he.validate = F, he.validateArrayOfType = A, he.validateOptional = R, he.validateOptionalType = Z, he.validateType = j;
  var n = Ki(), l = Zn();
  const c = he.VISITOR_KEYS = {}, o = he.ALIAS_KEYS = {}, S = he.FLIPPED_ALIAS_KEYS = {}, x = he.NODE_FIELDS = {}, M = he.BUILDER_KEYS = {}, w = he.DEPRECATED_KEYS = {}, L = he.NODE_PARENT_VALIDATIONS = {}, k = he.NODE_UNION_SHAPES__PRIVATE = {};
  function O(z) {
    return Array.isArray(z) ? "array" : z === null ? "null" : typeof z;
  }
  function F(z) {
    return {
      validate: z
    };
  }
  function j(...z) {
    return F(Te(...z));
  }
  function R(z) {
    return {
      validate: z,
      optional: !0
    };
  }
  function Z(...z) {
    return {
      validate: Te(...z),
      optional: !0
    };
  }
  function K(z) {
    return ae(ve("array"), Y(z));
  }
  function V(...z) {
    return K(Te(...z));
  }
  function A(...z) {
    return F(V(...z));
  }
  function Y(z) {
    const ne = process.env.BABEL_TYPES_8_BREAKING ? l.validateChild : () => {
    };
    function W(Q, ce, ye) {
      if (!Array.isArray(ye)) return;
      let Se = 0;
      const me = {
        toString() {
          return `${ce}[${Se}]`;
        }
      };
      for (; Se < ye.length; Se++) {
        const Ee = ye[Se];
        z(Q, me, Ee), ne(Q, me, Ee);
      }
    }
    return W.each = z, W;
  }
  function te(...z) {
    function ne(W, Q, ce) {
      if (!z.includes(ce))
        throw new TypeError(`Property ${Q} expected value to be one of ${JSON.stringify(z)} but got ${JSON.stringify(ce)}`);
    }
    return ne.oneOf = z, ne;
  }
  const se = he.allExpandedTypes = [];
  function Te(...z) {
    const ne = /* @__PURE__ */ new Set();
    se.push({
      types: z,
      set: ne
    });
    function W(Q, ce, ye) {
      const Se = ye?.type;
      if (Se != null) {
        if (ne.has(Se)) {
          (0, l.validateChild)(Q, ce, ye);
          return;
        }
        if (Se === "Placeholder") {
          for (const me of z)
            if ((0, n.default)(me, ye)) {
              (0, l.validateChild)(Q, ce, ye);
              return;
            }
        }
      }
      throw new TypeError(`Property ${ce} of ${Q.type} expected node to be of a type ${JSON.stringify(z)} but instead got ${JSON.stringify(Se)}`);
    }
    return W.oneOfNodeTypes = z, W;
  }
  function be(...z) {
    function ne(W, Q, ce) {
      const ye = O(ce);
      for (const Se of z)
        if (ye === Se || (0, n.default)(Se, ce)) {
          (0, l.validateChild)(W, Q, ce);
          return;
        }
      throw new TypeError(`Property ${Q} of ${W.type} expected node to be of a type ${JSON.stringify(z)} but instead got ${JSON.stringify(ce?.type)}`);
    }
    return ne.oneOfNodeOrValueTypes = z, ne;
  }
  function ve(z) {
    function ne(W, Q, ce) {
      if (O(ce) !== z)
        throw new TypeError(`Property ${Q} expected type of ${z} but got ${O(ce)}`);
    }
    return ne.type = z, ne;
  }
  function ge(z) {
    const ne = Object.keys(z);
    function W(Q, ce, ye) {
      const Se = [];
      for (const me of ne)
        try {
          (0, l.validateField)(Q, me, ye[me], z[me]);
        } catch (Ee) {
          if (Ee instanceof TypeError) {
            Se.push(Ee.message);
            continue;
          }
          throw Ee;
        }
      if (Se.length)
        throw new TypeError(`Property ${ce} of ${Q.type} expected to have the following:
${Se.join(`
`)}`);
    }
    return W.shapeOf = z, W;
  }
  function ue() {
    function z(ne) {
      var W;
      let Q = ne;
      for (; ne; ) {
        const {
          type: ce
        } = Q;
        if (ce === "OptionalCallExpression") {
          if (Q.optional) return;
          Q = Q.callee;
          continue;
        }
        if (ce === "OptionalMemberExpression") {
          if (Q.optional) return;
          Q = Q.object;
          continue;
        }
        break;
      }
      throw new TypeError(`Non-optional ${ne.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(W = Q) == null ? void 0 : W.type}`);
    }
    return z;
  }
  function ae(...z) {
    function ne(...W) {
      for (const Q of z)
        Q(...W);
    }
    if (ne.chainOf = z, z.length >= 2 && "type" in z[0] && z[0].type === "array" && !("each" in z[1]))
      throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
    return ne;
  }
  const q = /* @__PURE__ */ new Set(["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate", "unionShape"]), je = /* @__PURE__ */ new Set(["default", "optional", "deprecated", "validate"]), Ne = {};
  function Me(...z) {
    return (ne, W = {}) => {
      let Q = W.aliases;
      if (!Q) {
        var ce;
        W.inherits && (Q = (ce = Ne[W.inherits].aliases) == null ? void 0 : ce.slice()), Q ?? (Q = []), W.aliases = Q;
      }
      const ye = z.filter((Se) => !Q.includes(Se));
      Q.unshift(...ye), Je(ne, W);
    };
  }
  function Je(z, ne = {}) {
    const W = ne.inherits && Ne[ne.inherits] || {};
    let Q = ne.fields;
    if (!Q && (Q = {}, W.fields)) {
      const me = Object.getOwnPropertyNames(W.fields);
      for (const Ee of me) {
        const Oe = W.fields[Ee], De = Oe.default;
        if (Array.isArray(De) ? De.length > 0 : De && typeof De == "object")
          throw new Error("field defaults can only be primitives or empty arrays currently");
        Q[Ee] = {
          default: Array.isArray(De) ? [] : De,
          optional: Oe.optional,
          deprecated: Oe.deprecated,
          validate: Oe.validate
        };
      }
    }
    const ce = ne.visitor || W.visitor || [], ye = ne.aliases || W.aliases || [], Se = ne.builder || W.builder || ne.visitor || [];
    for (const me of Object.keys(ne))
      if (!q.has(me))
        throw new Error(`Unknown type option "${me}" on ${z}`);
    ne.deprecatedAlias && (w[ne.deprecatedAlias] = z);
    for (const me of ce.concat(Se))
      Q[me] = Q[me] || {};
    for (const me of Object.keys(Q)) {
      const Ee = Q[me];
      Ee.default !== void 0 && !Se.includes(me) && (Ee.optional = !0), Ee.default === void 0 ? Ee.default = null : !Ee.validate && Ee.default != null && (Ee.validate = ve(O(Ee.default)));
      for (const Oe of Object.keys(Ee))
        if (!je.has(Oe))
          throw new Error(`Unknown field key "${Oe}" on ${z}.${me}`);
    }
    c[z] = ne.visitor = ce, M[z] = ne.builder = Se, x[z] = ne.fields = Q, o[z] = ne.aliases = ye, ye.forEach((me) => {
      S[me] = S[me] || [], S[me].push(z);
    }), ne.validate && (L[z] = ne.validate), ne.unionShape && (k[z] = ne.unionShape), Ne[z] = ne;
  }
  return he;
}
var Po;
function Za() {
  if (Po) return ke;
  Po = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  }), ke.patternLikeCommon = ke.importAttributes = ke.functionTypeAnnotationCommon = ke.functionDeclarationCommon = ke.functionCommon = ke.classMethodOrPropertyUnionShapeCommon = ke.classMethodOrPropertyCommon = ke.classMethodOrDeclareMethodCommon = void 0;
  var n = Ki(), l = Vi(), c = Qn(), o = wu(), S = qi(), x = Yt();
  const M = (K = !1) => ({
    unionShape: {
      discriminator: "computed",
      shapes: [{
        name: "computed",
        value: [!0],
        properties: {
          key: {
            validate: (0, x.assertNodeType)("Expression")
          }
        }
      }, {
        name: "nonComputed",
        value: [!1],
        properties: {
          key: {
            validate: K ? (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName") : (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral")
          }
        }
      }]
    }
  });
  ke.classMethodOrPropertyUnionShapeCommon = M;
  const w = (0, x.defineAliasedType)("Standardized");
  w("ArrayExpression", {
    fields: {
      elements: {
        validate: (0, x.arrayOf)((0, x.assertNodeOrValueType)("null", "Expression", "SpreadElement")),
        default: process.env.BABEL_TYPES_8_BREAKING ? void 0 : []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  }), w("AssignmentExpression", {
    fields: {
      operator: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? Object.assign((function() {
          const K = (0, x.assertOneOf)(...S.ASSIGNMENT_OPERATORS), V = (0, x.assertOneOf)("=");
          return function(A, Y, te) {
            ((0, n.default)("Pattern", A.left) ? V : K)(A, Y, te);
          };
        })(), {
          oneOf: S.ASSIGNMENT_OPERATORS
        }) : (0, x.assertValueType)("string")
      },
      left: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertNodeType)("Identifier", "MemberExpression", "OptionalMemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, x.assertNodeType)("LVal", "OptionalMemberExpression")
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  }), w("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: (0, x.assertOneOf)(...S.BINARY_OPERATORS)
      },
      left: {
        validate: (function() {
          const K = (0, x.assertNodeType)("Expression"), V = (0, x.assertNodeType)("Expression", "PrivateName");
          return Object.assign(function(Y, te, se) {
            (Y.operator === "in" ? V : K)(Y, te, se);
          }, {
            oneOfNodeTypes: ["Expression", "PrivateName"]
          });
        })()
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  }), w("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, x.assertValueType)("string")
      }
    }
  }), w("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: (0, x.assertNodeType)("DirectiveLiteral")
      }
    }
  }), w("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, x.assertValueType)("string")
      }
    }
  }), w("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: (0, x.arrayOfType)("Directive"),
        default: []
      },
      body: (0, x.validateArrayOfType)("Statement")
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  }), w("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, x.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  }), w("CallExpression", {
    visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, x.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
      },
      arguments: (0, x.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
      typeArguments: {
        validate: (0, x.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      }
    }, process.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      typeParameters: {
        validate: (0, x.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    })
  }), w("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: (0, x.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  }), w("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: (0, x.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, x.assertNodeType)("Expression")
      },
      alternate: {
        validate: (0, x.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  }), w("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, x.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  }), w("DebuggerStatement", {
    aliases: ["Statement"]
  }), w("DoWhileStatement", {
    builder: ["test", "body"],
    visitor: ["body", "test"],
    fields: {
      test: {
        validate: (0, x.assertNodeType)("Expression")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  }), w("EmptyStatement", {
    aliases: ["Statement"]
  }), w("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, x.assertNodeType)("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  }), w("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: (0, x.assertNodeType)("Program")
      },
      comments: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertEach)((0, x.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign(() => {
        }, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }),
        optional: !0
      },
      tokens: {
        validate: (0, x.assertEach)(Object.assign(() => {
        }, {
          type: "any"
        })),
        optional: !0
      }
    }
  }), w("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, x.assertNodeType)("VariableDeclaration", "LVal")
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  }), w("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: (0, x.assertNodeType)("VariableDeclaration", "Expression"),
        optional: !0
      },
      test: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      update: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  });
  const L = () => ({
    params: (0, x.validateArrayOfType)("FunctionParameter"),
    generator: {
      default: !1
    },
    async: {
      default: !1
    }
  });
  ke.functionCommon = L;
  const k = () => ({
    returnType: {
      validate: (0, x.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, x.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  });
  ke.functionTypeAnnotationCommon = k;
  const O = () => Object.assign({}, L(), {
    declare: {
      validate: (0, x.assertValueType)("boolean"),
      optional: !0
    },
    id: {
      validate: (0, x.assertNodeType)("Identifier"),
      optional: !0
    }
  });
  ke.functionDeclarationCommon = O, w("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "typeParameters", "params", "predicate", "returnType", "body"],
    fields: Object.assign({}, O(), k(), {
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, x.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: process.env.BABEL_TYPES_8_BREAKING ? (function() {
      const K = (0, x.assertNodeType)("Identifier");
      return function(V, A, Y) {
        (0, n.default)("ExportDefaultDeclaration", V) || K(Y, "id", Y.id);
      };
    })() : void 0
  }), w("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, L(), k(), {
      id: {
        validate: (0, x.assertNodeType)("Identifier"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, x.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  });
  const F = () => ({
    typeAnnotation: {
      validate: (0, x.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    optional: {
      validate: (0, x.assertValueType)("boolean"),
      optional: !0
    },
    decorators: {
      validate: (0, x.arrayOfType)("Decorator"),
      optional: !0
    }
  });
  ke.patternLikeCommon = F, w("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "FunctionParameter", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, F(), {
      name: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("string"), Object.assign(function(K, V, A) {
          if (!(0, l.default)(A, !1))
            throw new TypeError(`"${A}" is not a valid identifier name`);
        }, {
          type: "string"
        })) : (0, x.assertValueType)("string")
      }
    }),
    validate: process.env.BABEL_TYPES_8_BREAKING ? function(K, V, A) {
      const Y = /\.(\w+)$/.exec(V.toString());
      if (!Y) return;
      const [, te] = Y, se = {
        computed: !1
      };
      if (te === "property") {
        if ((0, n.default)("MemberExpression", K, se) || (0, n.default)("OptionalMemberExpression", K, se)) return;
      } else if (te === "key") {
        if ((0, n.default)("Property", K, se) || (0, n.default)("Method", K, se)) return;
      } else if (te === "exported") {
        if ((0, n.default)("ExportSpecifier", K)) return;
      } else if (te === "imported") {
        if ((0, n.default)("ImportSpecifier", K, {
          imported: A
        })) return;
      } else if (te === "meta" && (0, n.default)("MetaProperty", K, {
        meta: A
      }))
        return;
      if (((0, c.isKeyword)(A.name) || (0, c.isReservedWord)(A.name, !1)) && A.name !== "this")
        throw new TypeError(`"${A.name}" is not a valid identifier`);
    } : void 0
  }), w("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: (0, x.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, x.assertNodeType)("Statement")
      },
      alternate: {
        optional: !0,
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  }), w("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: (0, x.assertNodeType)("Identifier")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  }), w("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, x.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), w("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: (0, x.chain)((0, x.assertValueType)("number"), Object.assign(function(K, V, A) {
        }, {
          type: "number"
        }))
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), w("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), w("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, x.assertValueType)("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), w("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: (0, x.assertValueType)("string")
      },
      flags: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("string"), Object.assign(function(K, V, A) {
          const Y = /[^dgimsuvy]/.exec(A);
          if (Y)
            throw new TypeError(`"${Y[0]}" is not a valid RegExp flag`);
        }, {
          type: "string"
        })) : (0, x.assertValueType)("string"),
        default: ""
      }
    }
  }), w("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: (0, x.assertOneOf)(...S.LOGICAL_OPERATORS)
      },
      left: {
        validate: (0, x.assertNodeType)("Expression")
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("MemberExpression", {
    builder: ["object", "property", "computed", ...process.env.BABEL_TYPES_8_BREAKING ? [] : ["optional"]],
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal", "PatternLike"],
    unionShape: {
      discriminator: "computed",
      shapes: [{
        name: "computed",
        value: [!0],
        properties: {
          property: {
            validate: (0, x.assertNodeType)("Expression")
          }
        }
      }, {
        name: "nonComputed",
        value: [!1],
        properties: {
          property: {
            validate: (0, x.assertNodeType)("Identifier", "PrivateName")
          }
        }
      }]
    },
    fields: Object.assign({
      object: {
        validate: (0, x.assertNodeType)("Expression", "Super")
      },
      property: {
        validate: (function() {
          const K = (0, x.assertNodeType)("Identifier", "PrivateName"), V = (0, x.assertNodeType)("Expression"), A = function(Y, te, se) {
            (Y.computed ? V : K)(Y, te, se);
          };
          return A.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"], A;
        })()
      },
      computed: {
        default: !1
      }
    }, process.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      }
    })
  }), w("NewExpression", {
    inherits: "CallExpression"
  }), w("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceType: {
        validate: (0, x.assertOneOf)("script", "module"),
        default: "script"
      },
      interpreter: {
        validate: (0, x.assertNodeType)("InterpreterDirective"),
        default: null,
        optional: !0
      },
      directives: {
        validate: (0, x.arrayOfType)("Directive"),
        default: []
      },
      body: (0, x.validateArrayOfType)("Statement")
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  }), w("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: (0, x.validateArrayOfType)("ObjectMethod", "ObjectProperty", "SpreadElement")
    }
  }), w("ObjectMethod", Object.assign({
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"]
  }, M(), {
    fields: Object.assign({}, L(), k(), {
      kind: Object.assign({
        validate: (0, x.assertOneOf)("method", "get", "set")
      }, process.env.BABEL_TYPES_8_BREAKING ? {} : {
        default: "method"
      }),
      computed: {
        default: !1
      },
      key: {
        validate: (function() {
          const K = (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"), V = (0, x.assertNodeType)("Expression"), A = function(Y, te, se) {
            (Y.computed ? V : K)(Y, te, se);
          };
          return A.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"], A;
        })()
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      }
    }),
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  })), w("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand", ...process.env.BABEL_TYPES_8_BREAKING ? [] : ["decorators"]],
    unionShape: {
      discriminator: "computed",
      shapes: [{
        name: "computed",
        value: [!0],
        properties: {
          key: {
            validate: (0, x.assertNodeType)("Expression")
          }
        }
      }, {
        name: "nonComputed",
        value: [!1],
        properties: {
          key: {
            validate: (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName")
          }
        }
      }]
    },
    fields: {
      computed: {
        default: !1
      },
      key: {
        validate: (function() {
          const K = (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"), V = (0, x.assertNodeType)("Expression");
          return Object.assign(function(Y, te, se) {
            (Y.computed ? V : K)(Y, te, se);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
          });
        })()
      },
      value: {
        validate: (0, x.assertNodeType)("Expression", "PatternLike")
      },
      shorthand: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("boolean"), Object.assign(function(K, V, A) {
          if (A) {
            if (K.computed)
              throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
            if (!(0, n.default)("Identifier", K.key))
              throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
          }
        }, {
          type: "boolean"
        })) : (0, x.assertValueType)("boolean"),
        default: !1
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      }
    },
    visitor: ["decorators", "key", "value"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: process.env.BABEL_TYPES_8_BREAKING ? (function() {
      const K = (0, x.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion"), V = (0, x.assertNodeType)("Expression");
      return function(A, Y, te) {
        ((0, n.default)("ObjectPattern", A) ? K : V)(te, "value", te.value);
      };
    })() : void 0
  }), w("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["FunctionParameter", "PatternLike", "LVal"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, F(), {
      argument: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, x.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression", "RestElement", "AssignmentPattern")
      }
    }),
    validate: process.env.BABEL_TYPES_8_BREAKING ? function(K, V) {
      const A = /(\w+)\[(\d+)\]/.exec(V.toString());
      if (!A) throw new Error("Internal Babel error: malformed key.");
      const [, Y, te] = A;
      if (K[Y].length > +te + 1)
        throw new TypeError(`RestElement must be last element of ${Y}`);
    } : void 0
  }), w("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      }
    }
  }), w("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: (0, x.validateArrayOfType)("Expression")
    },
    aliases: ["Expression"]
  }), w("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      consequent: (0, x.validateArrayOfType)("Statement")
    }
  }), w("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: (0, x.assertNodeType)("Expression")
      },
      cases: (0, x.validateArrayOfType)("SwitchCase")
    }
  }), w("ThisExpression", {
    aliases: ["Expression"]
  }), w("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertNodeType)("BlockStatement"), Object.assign(function(K) {
          if (!K.handler && !K.finalizer)
            throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        })) : (0, x.assertNodeType)("BlockStatement")
      },
      handler: {
        optional: !0,
        validate: (0, x.assertNodeType)("CatchClause")
      },
      finalizer: {
        optional: !0,
        validate: (0, x.assertNodeType)("BlockStatement")
      }
    }
  }), w("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !0
      },
      argument: {
        validate: (0, x.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, x.assertOneOf)(...S.UNARY_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  }), w("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !1
      },
      argument: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertNodeType)("Identifier", "MemberExpression") : (0, x.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, x.assertOneOf)(...S.UPDATE_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  }), w("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      kind: {
        validate: (0, x.assertOneOf)("var", "let", "const", "using", "await using")
      },
      declarations: (0, x.validateArrayOfType)("VariableDeclarator")
    },
    validate: process.env.BABEL_TYPES_8_BREAKING ? (() => {
      const K = (0, x.assertNodeType)("Identifier", "Placeholder"), V = (0, x.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "Placeholder"), A = (0, x.assertNodeType)("Identifier", "VoidPattern", "Placeholder");
      return function(Y, te, se) {
        const {
          kind: Te,
          declarations: be
        } = se, ve = (0, n.default)("ForXStatement", Y, {
          left: se
        });
        if (ve && be.length !== 1)
          throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${Y.type}`);
        for (const ge of be)
          Te === "const" || Te === "let" || Te === "var" ? !ve && !ge.init ? K(ge, "id", ge.id) : V(ge, "id", ge.id) : A(ge, "id", ge.id);
      };
    })() : void 0
  }), w("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "VoidPattern") : (0, x.assertNodeType)("LVal", "VoidPattern")
      },
      definite: {
        optional: !0,
        validate: (0, x.assertValueType)("boolean")
      },
      init: {
        optional: !0,
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: (0, x.assertNodeType)("Expression")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  }), w("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: (0, x.assertNodeType)("Expression")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      }
    }
  }), w("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, F(), {
      left: {
        validate: (0, x.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      }
    })
  }), w("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, F(), {
      elements: {
        validate: (0, x.chain)((0, x.assertValueType)("array"), (0, x.assertEach)((0, x.assertNodeOrValueType)("null", "PatternLike")))
      }
    })
  }), w("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["typeParameters", "params", "predicate", "returnType", "body"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, L(), k(), {
      expression: {
        validate: (0, x.assertValueType)("boolean")
      },
      body: {
        validate: (0, x.assertNodeType)("BlockStatement", "Expression")
      },
      predicate: {
        validate: (0, x.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  }), w("ClassBody", {
    visitor: ["body"],
    fields: {
      body: (0, x.validateArrayOfType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")
    }
  }), w("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: {
      id: {
        validate: (0, x.assertNodeType)("Identifier"),
        optional: !0
      },
      typeParameters: {
        validate: (0, x.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, x.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, x.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, x.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
        optional: !0
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      mixins: {
        validate: (0, x.assertNodeType)("InterfaceExtends"),
        optional: !0
      }
    }
  }), w("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: {
      id: {
        validate: (0, x.assertNodeType)("Identifier"),
        optional: !0
      },
      typeParameters: {
        validate: (0, x.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, x.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, x.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, x.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, x.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
        optional: !0
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      mixins: {
        validate: (0, x.assertNodeType)("InterfaceExtends"),
        optional: !0
      },
      declare: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      abstract: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      }
    },
    validate: process.env.BABEL_TYPES_8_BREAKING ? (function() {
      const K = (0, x.assertNodeType)("Identifier");
      return function(V, A, Y) {
        (0, n.default)("ExportDefaultDeclaration", V) || K(Y, "id", Y.id);
      };
    })() : void 0
  });
  const j = ke.importAttributes = {
    attributes: {
      optional: !0,
      validate: (0, x.arrayOfType)("ImportAttribute")
    },
    assertions: {
      deprecated: !0,
      optional: !0,
      validate: (0, x.arrayOfType)("ImportAttribute")
    }
  };
  w("ExportAllDeclaration", {
    builder: ["source"],
    visitor: ["source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: Object.assign({
      source: {
        validate: (0, x.assertNodeType)("StringLiteral")
      },
      exportKind: (0, x.validateOptional)((0, x.assertOneOf)("type", "value"))
    }, j)
  }), w("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: {
      declaration: (0, x.validateType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression"),
      exportKind: (0, x.validateOptional)((0, x.assertOneOf)("value"))
    }
  }), w("ExportNamedDeclaration", {
    builder: ["declaration", "specifiers", "source"],
    visitor: ["declaration", "specifiers", "source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: Object.assign({
      declaration: {
        optional: !0,
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertNodeType)("Declaration"), Object.assign(function(K, V, A) {
          if (A && K.specifiers.length)
            throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
          if (A && K.source)
            throw new TypeError("Cannot export a declaration from a source");
        }, {
          oneOfNodeTypes: ["Declaration"]
        })) : (0, x.assertNodeType)("Declaration")
      }
    }, j, {
      specifiers: {
        default: [],
        validate: (0, x.arrayOf)((function() {
          const K = (0, x.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"), V = (0, x.assertNodeType)("ExportSpecifier");
          return process.env.BABEL_TYPES_8_BREAKING ? Object.assign(function(A, Y, te) {
            (A.source ? K : V)(A, Y, te);
          }, {
            oneOfNodeTypes: ["ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"]
          }) : K;
        })())
      },
      source: {
        validate: (0, x.assertNodeType)("StringLiteral"),
        optional: !0
      },
      exportKind: (0, x.validateOptional)((0, x.assertOneOf)("type", "value"))
    })
  }), w("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, x.assertNodeType)("Identifier")
      },
      exported: {
        validate: (0, x.assertNodeType)("Identifier", "StringLiteral")
      },
      exportKind: {
        validate: (0, x.assertOneOf)("type", "value"),
        optional: !0
      }
    }
  }), w("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: (function() {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return (0, x.assertNodeType)("VariableDeclaration", "LVal");
          const K = (0, x.assertNodeType)("VariableDeclaration"), V = (0, x.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
          return Object.assign(function(A, Y, te) {
            (0, n.default)("VariableDeclaration", te) ? K(A, Y, te) : V(A, Y, te);
          }, {
            oneOfNodeTypes: ["VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression"]
          });
        })()
      },
      right: {
        validate: (0, x.assertNodeType)("Expression")
      },
      body: {
        validate: (0, x.assertNodeType)("Statement")
      },
      await: {
        default: !1
      }
    }
  }), w("ImportDeclaration", {
    builder: ["specifiers", "source"],
    visitor: ["specifiers", "source", "attributes", "assertions"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
    fields: Object.assign({}, j, {
      module: {
        optional: !0,
        validate: (0, x.assertValueType)("boolean")
      },
      phase: {
        default: null,
        validate: (0, x.assertOneOf)("source", "defer")
      },
      specifiers: (0, x.validateArrayOfType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"),
      source: {
        validate: (0, x.assertNodeType)("StringLiteral")
      },
      importKind: {
        validate: (0, x.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    })
  }), w("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, x.assertNodeType)("Identifier")
      }
    }
  }), w("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, x.assertNodeType)("Identifier")
      }
    }
  }), w("ImportSpecifier", {
    visitor: ["imported", "local"],
    builder: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, x.assertNodeType)("Identifier")
      },
      imported: {
        validate: (0, x.assertNodeType)("Identifier", "StringLiteral")
      },
      importKind: {
        validate: (0, x.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    }
  }), w("ImportExpression", {
    visitor: ["source", "options"],
    aliases: ["Expression"],
    fields: {
      phase: {
        default: null,
        validate: (0, x.assertOneOf)("source", "defer")
      },
      source: {
        validate: (0, x.assertNodeType)("Expression")
      },
      options: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      }
    }
  }), w("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertNodeType)("Identifier"), Object.assign(function(K, V, A) {
          let Y;
          switch (A.name) {
            case "function":
              Y = "sent";
              break;
            case "new":
              Y = "target";
              break;
            case "import":
              Y = "meta";
              break;
          }
          if (!(0, n.default)("Identifier", K.property, {
            name: Y
          }))
            throw new TypeError("Unrecognised MetaProperty");
        }, {
          oneOfNodeTypes: ["Identifier"]
        })) : (0, x.assertNodeType)("Identifier")
      },
      property: {
        validate: (0, x.assertNodeType)("Identifier")
      }
    }
  });
  const R = () => ({
    abstract: {
      validate: (0, x.assertValueType)("boolean"),
      optional: !0
    },
    accessibility: {
      validate: (0, x.assertOneOf)("public", "private", "protected"),
      optional: !0
    },
    static: {
      default: !1
    },
    override: {
      default: !1
    },
    computed: {
      default: !1
    },
    optional: {
      validate: (0, x.assertValueType)("boolean"),
      optional: !0
    },
    key: {
      validate: (0, x.chain)((function() {
        const K = (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"), V = (0, x.assertNodeType)("Expression");
        return function(A, Y, te) {
          (A.computed ? V : K)(A, Y, te);
        };
      })(), (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
    }
  });
  ke.classMethodOrPropertyCommon = R;
  const Z = () => Object.assign({}, L(), R(), {
    params: (0, x.validateArrayOfType)("FunctionParameter", "TSParameterProperty"),
    kind: {
      validate: (0, x.assertOneOf)("get", "set", "method", "constructor"),
      default: "method"
    },
    access: {
      validate: (0, x.chain)((0, x.assertValueType)("string"), (0, x.assertOneOf)("public", "private", "protected")),
      optional: !0
    },
    decorators: {
      validate: (0, x.arrayOfType)("Decorator"),
      optional: !0
    }
  });
  return ke.classMethodOrDeclareMethodCommon = Z, w("ClassMethod", Object.assign({
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"]
  }, M(), {
    fields: Object.assign({}, Z(), k(), {
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      }
    })
  })), w("ObjectPattern", {
    visitor: ["decorators", "properties", "typeAnnotation"],
    builder: ["properties"],
    aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, F(), {
      properties: (0, x.validateArrayOfType)("RestElement", "ObjectProperty")
    })
  }), w("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("Super", {
    aliases: ["Expression"]
  }), w("TaggedTemplateExpression", {
    visitor: ["tag", "typeParameters", "quasi"],
    builder: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: {
      tag: {
        validate: (0, x.assertNodeType)("Expression")
      },
      quasi: {
        validate: (0, x.assertNodeType)("TemplateLiteral")
      },
      typeParameters: {
        validate: (0, x.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  }), w("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: (0, x.chain)((0, x.assertShape)({
          raw: {
            validate: (0, x.assertValueType)("string")
          },
          cooked: {
            validate: (0, x.assertValueType)("string"),
            optional: !0
          }
        }), function(V) {
          const A = V.value.raw;
          let Y = !1;
          const te = () => {
            throw new Error("Internal @babel/types error.");
          }, {
            str: se,
            firstInvalidLoc: Te
          } = (0, o.readStringContents)("template", A, 0, 0, 0, {
            unterminated() {
              Y = !0;
            },
            strictNumericEscape: te,
            invalidEscapeSequence: te,
            numericSeparatorInEscapeSequence: te,
            unexpectedNumericSeparator: te,
            invalidDigit: te,
            invalidCodePoint: te
          });
          if (!Y) throw new Error("Invalid raw");
          V.value.cooked = Te ? null : se;
        })
      },
      tail: {
        default: !1
      }
    }
  }), w("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: (0, x.validateArrayOfType)("TemplateElement"),
      expressions: {
        validate: (0, x.chain)((0, x.assertValueType)("array"), (0, x.assertEach)((0, x.assertNodeType)("Expression", "TSType")), function(K, V, A) {
          if (K.quasis.length !== A.length + 1)
            throw new TypeError(`Number of ${K.type} quasis should be exactly one more than the number of expressions.
Expected ${A.length + 1} quasis but got ${K.quasis.length}`);
        })
      }
    }
  }), w("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("boolean"), Object.assign(function(K, V, A) {
          if (A && !K.argument)
            throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }, {
          type: "boolean"
        })) : (0, x.assertValueType)("boolean"),
        default: !1
      },
      argument: {
        optional: !0,
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: (0, x.assertNodeType)("Expression")
      }
    }
  }), w("Import", {
    aliases: ["Expression"]
  }), w("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, x.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), w("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, x.assertNodeType)("Identifier")
      }
    }
  }), w("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: (0, x.assertNodeType)("Expression")
      },
      property: {
        validate: (function() {
          const K = (0, x.assertNodeType)("Identifier"), V = (0, x.assertNodeType)("Expression");
          return Object.assign(function(Y, te, se) {
            (Y.computed ? V : K)(Y, te, se);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier"]
          });
        })()
      },
      computed: {
        default: !1
      },
      optional: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("boolean"), (0, x.assertOptionalChainStart)()) : (0, x.assertValueType)("boolean")
      }
    }
  }), w("OptionalCallExpression", {
    visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, x.assertNodeType)("Expression")
      },
      arguments: (0, x.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
      optional: {
        validate: process.env.BABEL_TYPES_8_BREAKING ? (0, x.chain)((0, x.assertValueType)("boolean"), (0, x.assertOptionalChainStart)()) : (0, x.assertValueType)("boolean")
      },
      typeArguments: {
        validate: (0, x.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      }
    }, {
      typeParameters: {
        validate: (0, x.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    })
  }), w("ClassProperty", Object.assign({
    visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"]
  }, M(), {
    fields: Object.assign({}, R(), {
      value: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, x.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      readonly: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, x.assertNodeType)("Variance"),
        optional: !0
      }
    })
  })), w("ClassAccessorProperty", Object.assign({
    visitor: ["decorators", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property", "Accessor"]
  }, M(!0), {
    fields: Object.assign({}, R(), {
      key: {
        validate: (0, x.chain)((function() {
          const K = (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName"), V = (0, x.assertNodeType)("Expression");
          return function(A, Y, te) {
            (A.computed ? V : K)(A, Y, te);
          };
        })(), (0, x.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
      },
      value: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, x.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      readonly: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, x.assertNodeType)("Variance"),
        optional: !0
      }
    })
  })), w("ClassPrivateProperty", {
    visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: (0, x.assertNodeType)("PrivateName")
      },
      value: {
        validate: (0, x.assertNodeType)("Expression"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, x.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, x.arrayOfType)("Decorator"),
        optional: !0
      },
      static: {
        validate: (0, x.assertValueType)("boolean"),
        default: !1
      },
      readonly: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      optional: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      definite: {
        validate: (0, x.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, x.assertNodeType)("Variance"),
        optional: !0
      }
    }
  }), w("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, Z(), k(), {
      kind: {
        validate: (0, x.assertOneOf)("get", "set", "method"),
        default: "method"
      },
      key: {
        validate: (0, x.assertNodeType)("PrivateName")
      },
      body: {
        validate: (0, x.assertNodeType)("BlockStatement")
      }
    })
  }), w("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: (0, x.assertNodeType)("Identifier")
      }
    }
  }), w("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: (0, x.validateArrayOfType)("Statement")
    },
    aliases: ["Scopable", "BlockParent", "FunctionParent"]
  }), w("ImportAttribute", {
    visitor: ["key", "value"],
    fields: {
      key: {
        validate: (0, x.assertNodeType)("Identifier", "StringLiteral")
      },
      value: {
        validate: (0, x.assertNodeType)("StringLiteral")
      }
    }
  }), ke;
}
var Eo = {}, Ao;
function Ou() {
  if (Ao) return Eo;
  Ao = 1;
  var n = Za(), l = Yt();
  const c = (0, l.defineAliasedType)("Flow"), o = (S) => {
    const x = S === "DeclareClass";
    c(S, {
      builder: ["id", "typeParameters", "extends", "body"],
      visitor: ["id", "typeParameters", "extends", ...x ? ["mixins", "implements"] : [], "body"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: Object.assign({
        id: (0, l.validateType)("Identifier"),
        typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
        extends: (0, l.validateOptional)((0, l.arrayOfType)("InterfaceExtends"))
      }, x ? {
        mixins: (0, l.validateOptional)((0, l.arrayOfType)("InterfaceExtends")),
        implements: (0, l.validateOptional)((0, l.arrayOfType)("ClassImplements"))
      } : {}, {
        body: (0, l.validateType)("ObjectTypeAnnotation")
      })
    });
  };
  return c("AnyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("ArrayTypeAnnotation", {
    visitor: ["elementType"],
    aliases: ["FlowType"],
    fields: {
      elementType: (0, l.validateType)("FlowType")
    }
  }), c("BooleanTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("BooleanLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("NullLiteralTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("ClassImplements", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterInstantiation")
    }
  }), o("DeclareClass"), c("DeclareFunction", {
    builder: ["id"],
    visitor: ["id", "predicate"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      predicate: (0, l.validateOptionalType)("DeclaredPredicate")
    }
  }), o("DeclareInterface"), c("DeclareModule", {
    builder: ["id", "body", "kind"],
    visitor: ["id", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier", "StringLiteral"),
      body: (0, l.validateType)("BlockStatement"),
      kind: (0, l.validateOptional)((0, l.assertOneOf)("CommonJS", "ES"))
    }
  }), c("DeclareModuleExports", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      typeAnnotation: (0, l.validateType)("TypeAnnotation")
    }
  }), c("DeclareTypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, l.validateType)("FlowType")
    }
  }), c("DeclareOpaqueType", {
    visitor: ["id", "typeParameters", "supertype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, l.validateOptionalType)("FlowType"),
      impltype: (0, l.validateOptionalType)("FlowType")
    }
  }), c("DeclareVariable", {
    visitor: ["id"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier")
    }
  }), c("DeclareExportDeclaration", {
    visitor: ["declaration", "specifiers", "source", "attributes"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: Object.assign({
      declaration: (0, l.validateOptionalType)("Flow"),
      specifiers: (0, l.validateOptional)((0, l.arrayOfType)("ExportSpecifier", "ExportNamespaceSpecifier")),
      source: (0, l.validateOptionalType)("StringLiteral"),
      default: (0, l.validateOptional)((0, l.assertValueType)("boolean"))
    }, n.importAttributes)
  }), c("DeclareExportAllDeclaration", {
    visitor: ["source", "attributes"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: Object.assign({
      source: (0, l.validateType)("StringLiteral"),
      exportKind: (0, l.validateOptional)((0, l.assertOneOf)("type", "value"))
    }, n.importAttributes)
  }), c("DeclaredPredicate", {
    visitor: ["value"],
    aliases: ["FlowPredicate"],
    fields: {
      value: (0, l.validateType)("Flow")
    }
  }), c("ExistsTypeAnnotation", {
    aliases: ["FlowType"]
  }), c("FunctionTypeAnnotation", {
    builder: ["typeParameters", "params", "rest", "returnType"],
    visitor: ["typeParameters", "this", "params", "rest", "returnType"],
    aliases: ["FlowType"],
    fields: {
      typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
      params: (0, l.validateArrayOfType)("FunctionTypeParam"),
      rest: (0, l.validateOptionalType)("FunctionTypeParam"),
      this: (0, l.validateOptionalType)("FunctionTypeParam"),
      returnType: (0, l.validateType)("FlowType")
    }
  }), c("FunctionTypeParam", {
    visitor: ["name", "typeAnnotation"],
    fields: {
      name: (0, l.validateOptionalType)("Identifier"),
      typeAnnotation: (0, l.validateType)("FlowType"),
      optional: (0, l.validateOptional)((0, l.assertValueType)("boolean"))
    }
  }), c("GenericTypeAnnotation", {
    visitor: ["id", "typeParameters"],
    aliases: ["FlowType"],
    fields: {
      id: (0, l.validateType)("Identifier", "QualifiedTypeIdentifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterInstantiation")
    }
  }), c("InferredPredicate", {
    aliases: ["FlowPredicate"]
  }), c("InterfaceExtends", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: (0, l.validateType)("Identifier", "QualifiedTypeIdentifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterInstantiation")
    }
  }), o("InterfaceDeclaration"), c("InterfaceTypeAnnotation", {
    visitor: ["extends", "body"],
    aliases: ["FlowType"],
    fields: {
      extends: (0, l.validateOptional)((0, l.arrayOfType)("InterfaceExtends")),
      body: (0, l.validateType)("ObjectTypeAnnotation")
    }
  }), c("IntersectionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, l.validate)((0, l.arrayOfType)("FlowType"))
    }
  }), c("MixedTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("EmptyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("NullableTypeAnnotation", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowType"],
    fields: {
      typeAnnotation: (0, l.validateType)("FlowType")
    }
  }), c("NumberLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, l.validate)((0, l.assertValueType)("number"))
    }
  }), c("NumberTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("ObjectTypeAnnotation", {
    visitor: ["properties", "indexers", "callProperties", "internalSlots"],
    aliases: ["FlowType"],
    builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
    fields: {
      properties: (0, l.validate)((0, l.arrayOfType)("ObjectTypeProperty", "ObjectTypeSpreadProperty")),
      indexers: {
        validate: (0, l.arrayOfType)("ObjectTypeIndexer"),
        optional: !0,
        default: []
      },
      callProperties: {
        validate: (0, l.arrayOfType)("ObjectTypeCallProperty"),
        optional: !0,
        default: []
      },
      internalSlots: {
        validate: (0, l.arrayOfType)("ObjectTypeInternalSlot"),
        optional: !0,
        default: []
      },
      exact: {
        validate: (0, l.assertValueType)("boolean"),
        default: !1
      },
      inexact: (0, l.validateOptional)((0, l.assertValueType)("boolean"))
    }
  }), c("ObjectTypeInternalSlot", {
    visitor: ["id", "value"],
    builder: ["id", "value", "optional", "static", "method"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      value: (0, l.validateType)("FlowType"),
      optional: (0, l.validate)((0, l.assertValueType)("boolean")),
      static: (0, l.validate)((0, l.assertValueType)("boolean")),
      method: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("ObjectTypeCallProperty", {
    visitor: ["value"],
    aliases: ["UserWhitespacable"],
    fields: {
      value: (0, l.validateType)("FlowType"),
      static: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("ObjectTypeIndexer", {
    visitor: ["variance", "id", "key", "value"],
    builder: ["id", "key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: (0, l.validateOptionalType)("Identifier"),
      key: (0, l.validateType)("FlowType"),
      value: (0, l.validateType)("FlowType"),
      static: (0, l.validate)((0, l.assertValueType)("boolean")),
      variance: (0, l.validateOptionalType)("Variance")
    }
  }), c("ObjectTypeProperty", {
    visitor: ["key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      key: (0, l.validateType)("Identifier", "StringLiteral"),
      value: (0, l.validateType)("FlowType"),
      kind: (0, l.validate)((0, l.assertOneOf)("init", "get", "set")),
      static: (0, l.validate)((0, l.assertValueType)("boolean")),
      proto: (0, l.validate)((0, l.assertValueType)("boolean")),
      optional: (0, l.validate)((0, l.assertValueType)("boolean")),
      variance: (0, l.validateOptionalType)("Variance"),
      method: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("ObjectTypeSpreadProperty", {
    visitor: ["argument"],
    aliases: ["UserWhitespacable"],
    fields: {
      argument: (0, l.validateType)("FlowType")
    }
  }), c("OpaqueType", {
    visitor: ["id", "typeParameters", "supertype", "impltype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, l.validateOptionalType)("FlowType"),
      impltype: (0, l.validateType)("FlowType")
    }
  }), c("QualifiedTypeIdentifier", {
    visitor: ["qualification", "id"],
    builder: ["id", "qualification"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      qualification: (0, l.validateType)("Identifier", "QualifiedTypeIdentifier")
    }
  }), c("StringLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, l.validate)((0, l.assertValueType)("string"))
    }
  }), c("StringTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("SymbolTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("ThisTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("TupleTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, l.validate)((0, l.arrayOfType)("FlowType"))
    }
  }), c("TypeofTypeAnnotation", {
    visitor: ["argument"],
    aliases: ["FlowType"],
    fields: {
      argument: (0, l.validateType)("FlowType")
    }
  }), c("TypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      typeParameters: (0, l.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, l.validateType)("FlowType")
    }
  }), c("TypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, l.validateType)("FlowType")
    }
  }), c("TypeCastExpression", {
    visitor: ["expression", "typeAnnotation"],
    aliases: ["ExpressionWrapper", "Expression"],
    fields: {
      expression: (0, l.validateType)("Expression"),
      typeAnnotation: (0, l.validateType)("TypeAnnotation")
    }
  }), c("TypeParameter", {
    visitor: ["bound", "default", "variance"],
    fields: {
      name: (0, l.validate)((0, l.assertValueType)("string")),
      bound: (0, l.validateOptionalType)("TypeAnnotation"),
      default: (0, l.validateOptionalType)("FlowType"),
      variance: (0, l.validateOptionalType)("Variance")
    }
  }), c("TypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: (0, l.validate)((0, l.arrayOfType)("TypeParameter"))
    }
  }), c("TypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: (0, l.validate)((0, l.arrayOfType)("FlowType"))
    }
  }), c("UnionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, l.validate)((0, l.arrayOfType)("FlowType"))
    }
  }), c("Variance", {
    builder: ["kind"],
    fields: {
      kind: (0, l.validate)((0, l.assertOneOf)("minus", "plus"))
    }
  }), c("VoidTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  }), c("EnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      body: (0, l.validateType)("EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody")
    }
  }), c("EnumBooleanBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, l.validate)((0, l.assertValueType)("boolean")),
      members: (0, l.validateArrayOfType)("EnumBooleanMember"),
      hasUnknownMembers: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("EnumNumberBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, l.validate)((0, l.assertValueType)("boolean")),
      members: (0, l.validateArrayOfType)("EnumNumberMember"),
      hasUnknownMembers: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("EnumStringBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, l.validate)((0, l.assertValueType)("boolean")),
      members: (0, l.validateArrayOfType)("EnumStringMember", "EnumDefaultedMember"),
      hasUnknownMembers: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("EnumSymbolBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      members: (0, l.validateArrayOfType)("EnumDefaultedMember"),
      hasUnknownMembers: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), c("EnumBooleanMember", {
    aliases: ["EnumMember"],
    builder: ["id"],
    visitor: ["id", "init"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      init: (0, l.validateType)("BooleanLiteral")
    }
  }), c("EnumNumberMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      init: (0, l.validateType)("NumericLiteral")
    }
  }), c("EnumStringMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, l.validateType)("Identifier"),
      init: (0, l.validateType)("StringLiteral")
    }
  }), c("EnumDefaultedMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: (0, l.validateType)("Identifier")
    }
  }), c("IndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: (0, l.validateType)("FlowType"),
      indexType: (0, l.validateType)("FlowType")
    }
  }), c("OptionalIndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: (0, l.validateType)("FlowType"),
      indexType: (0, l.validateType)("FlowType"),
      optional: (0, l.validate)((0, l.assertValueType)("boolean"))
    }
  }), Eo;
}
var go = {}, vo;
function Du() {
  if (vo) return go;
  vo = 1;
  var n = Yt();
  const l = (0, n.defineAliasedType)("JSX");
  return l("JSXAttribute", {
    visitor: ["name", "value"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, n.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
      },
      value: {
        optional: !0,
        validate: (0, n.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
      }
    }
  }), l("JSXClosingElement", {
    visitor: ["name"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, n.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      }
    }
  }), l("JSXElement", {
    builder: ["openingElement", "closingElement", "children", "selfClosing"],
    visitor: ["openingElement", "children", "closingElement"],
    aliases: ["Immutable", "Expression"],
    fields: Object.assign({
      openingElement: {
        validate: (0, n.assertNodeType)("JSXOpeningElement")
      },
      closingElement: {
        optional: !0,
        validate: (0, n.assertNodeType)("JSXClosingElement")
      },
      children: (0, n.validateArrayOfType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
    }, {
      selfClosing: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      }
    })
  }), l("JSXEmptyExpression", {}), l("JSXExpressionContainer", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression", "JSXEmptyExpression")
      }
    }
  }), l("JSXSpreadChild", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  }), l("JSXIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, n.assertValueType)("string")
      }
    }
  }), l("JSXMemberExpression", {
    visitor: ["object", "property"],
    fields: {
      object: {
        validate: (0, n.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
      },
      property: {
        validate: (0, n.assertNodeType)("JSXIdentifier")
      }
    }
  }), l("JSXNamespacedName", {
    visitor: ["namespace", "name"],
    fields: {
      namespace: {
        validate: (0, n.assertNodeType)("JSXIdentifier")
      },
      name: {
        validate: (0, n.assertNodeType)("JSXIdentifier")
      }
    }
  }), l("JSXOpeningElement", {
    builder: ["name", "attributes", "selfClosing"],
    visitor: ["name", "typeParameters", "typeArguments", "attributes"],
    aliases: ["Immutable"],
    fields: Object.assign({
      name: {
        validate: (0, n.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      },
      selfClosing: {
        default: !1
      },
      attributes: (0, n.validateArrayOfType)("JSXAttribute", "JSXSpreadAttribute"),
      typeArguments: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      }
    }, {
      typeParameters: {
        validate: (0, n.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    })
  }), l("JSXSpreadAttribute", {
    visitor: ["argument"],
    fields: {
      argument: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  }), l("JSXText", {
    aliases: ["Immutable"],
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    }
  }), l("JSXFragment", {
    builder: ["openingFragment", "closingFragment", "children"],
    visitor: ["openingFragment", "children", "closingFragment"],
    aliases: ["Immutable", "Expression"],
    fields: {
      openingFragment: {
        validate: (0, n.assertNodeType)("JSXOpeningFragment")
      },
      closingFragment: {
        validate: (0, n.assertNodeType)("JSXClosingFragment")
      },
      children: (0, n.validateArrayOfType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
    }
  }), l("JSXOpeningFragment", {
    aliases: ["Immutable"]
  }), l("JSXClosingFragment", {
    aliases: ["Immutable"]
  }), go;
}
var Io = {}, Jt = {}, No;
function iu() {
  if (No) return Jt;
  No = 1, Object.defineProperty(Jt, "__esModule", {
    value: !0
  }), Jt.PLACEHOLDERS_FLIPPED_ALIAS = Jt.PLACEHOLDERS_ALIAS = Jt.PLACEHOLDERS = void 0;
  var n = Yt();
  const l = Jt.PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"], c = Jt.PLACEHOLDERS_ALIAS = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  for (const S of l) {
    const x = n.ALIAS_KEYS[S];
    x != null && x.length && (c[S] = x);
  }
  const o = Jt.PLACEHOLDERS_FLIPPED_ALIAS = {};
  return Object.keys(c).forEach((S) => {
    c[S].forEach((x) => {
      hasOwnProperty.call(o, x) || (o[x] = []), o[x].push(S);
    });
  }), Jt;
}
var Co;
function Lu() {
  if (Co) return Io;
  Co = 1;
  var n = Yt(), l = iu(), c = Za();
  const o = (0, n.defineAliasedType)("Miscellaneous");
  return o("Noop", {
    visitor: []
  }), o("Placeholder", {
    visitor: [],
    builder: ["expectedNode", "name"],
    fields: Object.assign({
      name: {
        validate: (0, n.assertNodeType)("Identifier")
      },
      expectedNode: {
        validate: (0, n.assertOneOf)(...l.PLACEHOLDERS)
      }
    }, (0, c.patternLikeCommon)())
  }), o("V8IntrinsicIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, n.assertValueType)("string")
      }
    }
  }), Io;
}
var wo = {}, Oo;
function ku() {
  if (Oo) return wo;
  Oo = 1;
  var n = Yt();
  return (0, n.default)("ArgumentPlaceholder", {}), (0, n.default)("BindExpression", {
    visitor: ["object", "callee"],
    aliases: ["Expression"],
    fields: process.env.BABEL_TYPES_8_BREAKING ? {
      object: {
        validate: (0, n.assertNodeType)("Expression")
      },
      callee: {
        validate: (0, n.assertNodeType)("Expression")
      }
    } : {
      object: {
        validate: Object.assign(() => {
        }, {
          oneOfNodeTypes: ["Expression"]
        })
      },
      callee: {
        validate: Object.assign(() => {
        }, {
          oneOfNodeTypes: ["Expression"]
        })
      }
    }
  }), (0, n.default)("Decorator", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  }), (0, n.default)("DoExpression", {
    visitor: ["body"],
    builder: ["body", "async"],
    aliases: ["Expression"],
    fields: {
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      },
      async: {
        validate: (0, n.assertValueType)("boolean"),
        default: !1
      }
    }
  }), (0, n.default)("ExportDefaultSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  }), (0, n.default)("RecordExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: (0, n.validateArrayOfType)("ObjectProperty", "SpreadElement")
    }
  }), (0, n.default)("TupleExpression", {
    fields: {
      elements: {
        validate: (0, n.arrayOfType)("Expression", "SpreadElement"),
        default: []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  }), (0, n.default)("DecimalLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  }), (0, n.default)("ModuleExpression", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, n.assertNodeType)("Program")
      }
    },
    aliases: ["Expression"]
  }), (0, n.default)("TopicReference", {
    aliases: ["Expression"]
  }), (0, n.default)("PipelineTopicExpression", {
    builder: ["expression"],
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  }), (0, n.default)("PipelineBareFunction", {
    builder: ["callee"],
    visitor: ["callee"],
    fields: {
      callee: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  }), (0, n.default)("PipelinePrimaryTopicReference", {
    aliases: ["Expression"]
  }), (0, n.default)("VoidPattern", {
    aliases: ["Pattern", "PatternLike", "FunctionParameter"]
  }), wo;
}
var Do = {}, Lo;
function Mu() {
  if (Lo) return Do;
  Lo = 1;
  var n = Yt(), l = Za(), c = Ki();
  const o = (0, n.defineAliasedType)("TypeScript"), S = (0, n.assertValueType)("boolean"), x = () => ({
    returnType: {
      validate: (0, n.assertNodeType)("TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, n.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  });
  o("TSParameterProperty", {
    aliases: ["LVal"],
    visitor: ["parameter"],
    fields: {
      accessibility: {
        validate: (0, n.assertOneOf)("public", "private", "protected"),
        optional: !0
      },
      readonly: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      parameter: {
        validate: (0, n.assertNodeType)("Identifier", "AssignmentPattern")
      },
      override: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      decorators: {
        validate: (0, n.arrayOfType)("Decorator"),
        optional: !0
      }
    }
  }), o("TSDeclareFunction", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, (0, l.functionDeclarationCommon)(), x())
  }), o("TSDeclareMethod", Object.assign({
    visitor: ["decorators", "key", "typeParameters", "params", "returnType"]
  }, (0, l.classMethodOrPropertyUnionShapeCommon)(), {
    fields: Object.assign({}, (0, l.classMethodOrDeclareMethodCommon)(), x())
  })), o("TSQualifiedName", {
    aliases: ["TSEntityName"],
    visitor: ["left", "right"],
    fields: {
      left: (0, n.validateType)("TSEntityName"),
      right: (0, n.validateType)("Identifier")
    }
  });
  const M = () => ({
    typeParameters: (0, n.validateOptionalType)("TSTypeParameterDeclaration"),
    parameters: (0, n.validateArrayOfType)("ArrayPattern", "Identifier", "ObjectPattern", "RestElement"),
    typeAnnotation: (0, n.validateOptionalType)("TSTypeAnnotation")
  }), w = {
    aliases: ["TSTypeElement"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: M()
  };
  o("TSCallSignatureDeclaration", w), o("TSConstructSignatureDeclaration", w);
  const L = () => ({
    key: (0, n.validateType)("Expression"),
    computed: {
      default: !1
    },
    optional: (0, n.validateOptional)(S)
  });
  o("TSPropertySignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeAnnotation"],
    fields: Object.assign({}, L(), {
      readonly: (0, n.validateOptional)(S),
      typeAnnotation: (0, n.validateOptionalType)("TSTypeAnnotation"),
      kind: {
        optional: !0,
        validate: (0, n.assertOneOf)("get", "set")
      }
    })
  }), o("TSMethodSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
    fields: Object.assign({}, M(), L(), {
      kind: {
        validate: (0, n.assertOneOf)("method", "get", "set")
      }
    })
  }), o("TSIndexSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["parameters", "typeAnnotation"],
    fields: {
      readonly: (0, n.validateOptional)(S),
      static: (0, n.validateOptional)(S),
      parameters: (0, n.validateArrayOfType)("Identifier"),
      typeAnnotation: (0, n.validateOptionalType)("TSTypeAnnotation")
    }
  });
  const k = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
  for (const R of k)
    o(R, {
      aliases: ["TSType", "TSBaseType"],
      visitor: [],
      fields: {}
    });
  o("TSThisType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
  const O = {
    aliases: ["TSType"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"]
  };
  o("TSFunctionType", Object.assign({}, O, {
    fields: M()
  })), o("TSConstructorType", Object.assign({}, O, {
    fields: Object.assign({}, M(), {
      abstract: (0, n.validateOptional)(S)
    })
  })), o("TSTypeReference", {
    aliases: ["TSType"],
    visitor: ["typeName", "typeParameters"],
    fields: {
      typeName: (0, n.validateType)("TSEntityName"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterInstantiation")
    }
  }), o("TSTypePredicate", {
    aliases: ["TSType"],
    visitor: ["parameterName", "typeAnnotation"],
    builder: ["parameterName", "typeAnnotation", "asserts"],
    fields: {
      parameterName: (0, n.validateType)("Identifier", "TSThisType"),
      typeAnnotation: (0, n.validateOptionalType)("TSTypeAnnotation"),
      asserts: (0, n.validateOptional)(S)
    }
  }), o("TSTypeQuery", {
    aliases: ["TSType"],
    visitor: ["exprName", "typeParameters"],
    fields: {
      exprName: (0, n.validateType)("TSEntityName", "TSImportType"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterInstantiation")
    }
  }), o("TSTypeLiteral", {
    aliases: ["TSType"],
    visitor: ["members"],
    fields: {
      members: (0, n.validateArrayOfType)("TSTypeElement")
    }
  }), o("TSArrayType", {
    aliases: ["TSType"],
    visitor: ["elementType"],
    fields: {
      elementType: (0, n.validateType)("TSType")
    }
  }), o("TSTupleType", {
    aliases: ["TSType"],
    visitor: ["elementTypes"],
    fields: {
      elementTypes: (0, n.validateArrayOfType)("TSType", "TSNamedTupleMember")
    }
  }), o("TSOptionalType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, n.validateType)("TSType")
    }
  }), o("TSRestType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, n.validateType)("TSType")
    }
  }), o("TSNamedTupleMember", {
    visitor: ["label", "elementType"],
    builder: ["label", "elementType", "optional"],
    fields: {
      label: (0, n.validateType)("Identifier"),
      optional: {
        validate: S,
        default: !1
      },
      elementType: (0, n.validateType)("TSType")
    }
  });
  const F = {
    aliases: ["TSType"],
    visitor: ["types"],
    fields: {
      types: (0, n.validateArrayOfType)("TSType")
    }
  };
  o("TSUnionType", F), o("TSIntersectionType", F), o("TSConditionalType", {
    aliases: ["TSType"],
    visitor: ["checkType", "extendsType", "trueType", "falseType"],
    fields: {
      checkType: (0, n.validateType)("TSType"),
      extendsType: (0, n.validateType)("TSType"),
      trueType: (0, n.validateType)("TSType"),
      falseType: (0, n.validateType)("TSType")
    }
  }), o("TSInferType", {
    aliases: ["TSType"],
    visitor: ["typeParameter"],
    fields: {
      typeParameter: (0, n.validateType)("TSTypeParameter")
    }
  }), o("TSParenthesizedType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, n.validateType)("TSType")
    }
  }), o("TSTypeOperator", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    builder: ["typeAnnotation", "operator"],
    fields: {
      operator: {
        validate: (0, n.assertValueType)("string"),
        default: "keyof"
      },
      typeAnnotation: (0, n.validateType)("TSType")
    }
  }), o("TSIndexedAccessType", {
    aliases: ["TSType"],
    visitor: ["objectType", "indexType"],
    fields: {
      objectType: (0, n.validateType)("TSType"),
      indexType: (0, n.validateType)("TSType")
    }
  }), o("TSMappedType", {
    aliases: ["TSType"],
    visitor: ["typeParameter", "nameType", "typeAnnotation"],
    builder: ["typeParameter", "typeAnnotation", "nameType"],
    fields: Object.assign({}, {
      typeParameter: (0, n.validateType)("TSTypeParameter")
    }, {
      readonly: (0, n.validateOptional)((0, n.assertOneOf)(!0, !1, "+", "-")),
      optional: (0, n.validateOptional)((0, n.assertOneOf)(!0, !1, "+", "-")),
      typeAnnotation: (0, n.validateOptionalType)("TSType"),
      nameType: (0, n.validateOptionalType)("TSType")
    })
  }), o("TSTemplateLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["quasis", "types"],
    fields: {
      quasis: (0, n.validateArrayOfType)("TemplateElement"),
      types: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("TSType")), function(R, Z, K) {
          if (R.quasis.length !== K.length + 1)
            throw new TypeError(`Number of ${R.type} quasis should be exactly one more than the number of types.
Expected ${K.length + 1} quasis but got ${R.quasis.length}`);
        })
      }
    }
  }), o("TSLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["literal"],
    fields: {
      literal: {
        validate: (function() {
          const R = (0, n.assertNodeType)("NumericLiteral", "BigIntLiteral"), Z = (0, n.assertOneOf)("-"), K = (0, n.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral"), V = function(Y, te, se) {
            (0, c.default)("UnaryExpression", se) ? (Z(se, "operator", se.operator), R(se, "argument", se.argument)) : K(Y, te, se);
          };
          return V.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"], V;
        })()
      }
    }
  }), o("TSExpressionWithTypeArguments", {
    aliases: ["TSType"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, n.validateType)("TSEntityName"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterInstantiation")
    }
  }), o("TSInterfaceDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "extends", "body"],
    fields: {
      declare: (0, n.validateOptional)(S),
      id: (0, n.validateType)("Identifier"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterDeclaration"),
      extends: (0, n.validateOptional)((0, n.arrayOfType)("TSExpressionWithTypeArguments")),
      body: (0, n.validateType)("TSInterfaceBody")
    }
  }), o("TSInterfaceBody", {
    visitor: ["body"],
    fields: {
      body: (0, n.validateArrayOfType)("TSTypeElement")
    }
  }), o("TSTypeAliasDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "typeAnnotation"],
    fields: {
      declare: (0, n.validateOptional)(S),
      id: (0, n.validateType)("Identifier"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterDeclaration"),
      typeAnnotation: (0, n.validateType)("TSType")
    }
  }), o("TSInstantiationExpression", {
    aliases: ["Expression"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, n.validateType)("Expression"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  const j = {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression", "typeAnnotation"],
    fields: {
      expression: (0, n.validateType)("Expression"),
      typeAnnotation: (0, n.validateType)("TSType")
    }
  };
  return o("TSAsExpression", j), o("TSSatisfiesExpression", j), o("TSTypeAssertion", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["typeAnnotation", "expression"],
    fields: {
      typeAnnotation: (0, n.validateType)("TSType"),
      expression: (0, n.validateType)("Expression")
    }
  }), o("TSEnumBody", {
    visitor: ["members"],
    fields: {
      members: (0, n.validateArrayOfType)("TSEnumMember")
    }
  }), o("TSEnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "members"],
    fields: {
      declare: (0, n.validateOptional)(S),
      const: (0, n.validateOptional)(S),
      id: (0, n.validateType)("Identifier"),
      members: (0, n.validateArrayOfType)("TSEnumMember"),
      initializer: (0, n.validateOptionalType)("Expression"),
      body: (0, n.validateOptionalType)("TSEnumBody")
    }
  }), o("TSEnumMember", {
    visitor: ["id", "initializer"],
    fields: {
      id: (0, n.validateType)("Identifier", "StringLiteral"),
      initializer: (0, n.validateOptionalType)("Expression")
    }
  }), o("TSModuleDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: Object.assign({
      kind: {
        validate: (0, n.assertOneOf)("global", "module", "namespace")
      },
      declare: (0, n.validateOptional)(S)
    }, {
      global: (0, n.validateOptional)(S)
    }, {
      id: (0, n.validateType)("Identifier", "StringLiteral"),
      body: (0, n.validateType)("TSModuleBlock", "TSModuleDeclaration")
    })
  }), o("TSModuleBlock", {
    aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
    visitor: ["body"],
    fields: {
      body: (0, n.validateArrayOfType)("Statement")
    }
  }), o("TSImportType", {
    aliases: ["TSType"],
    builder: ["argument", "qualifier", "typeParameters"],
    visitor: ["argument", "options", "qualifier", "typeParameters"],
    fields: {
      argument: (0, n.validateType)("StringLiteral"),
      qualifier: (0, n.validateOptionalType)("TSEntityName"),
      typeParameters: (0, n.validateOptionalType)("TSTypeParameterInstantiation"),
      options: {
        validate: (0, n.assertNodeType)("ObjectExpression"),
        optional: !0
      }
    }
  }), o("TSImportEqualsDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "moduleReference"],
    fields: Object.assign({}, {
      isExport: (0, n.validate)(S)
    }, {
      id: (0, n.validateType)("Identifier"),
      moduleReference: (0, n.validateType)("TSEntityName", "TSExternalModuleReference"),
      importKind: {
        validate: (0, n.assertOneOf)("type", "value"),
        optional: !0
      }
    })
  }), o("TSExternalModuleReference", {
    visitor: ["expression"],
    fields: {
      expression: (0, n.validateType)("StringLiteral")
    }
  }), o("TSNonNullExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression"],
    fields: {
      expression: (0, n.validateType)("Expression")
    }
  }), o("TSExportAssignment", {
    aliases: ["Statement"],
    visitor: ["expression"],
    fields: {
      expression: (0, n.validateType)("Expression")
    }
  }), o("TSNamespaceExportDeclaration", {
    aliases: ["Statement"],
    visitor: ["id"],
    fields: {
      id: (0, n.validateType)("Identifier")
    }
  }), o("TSTypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: {
        validate: (0, n.assertNodeType)("TSType")
      }
    }
  }), o("TSTypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: (0, n.validateArrayOfType)("TSType")
    }
  }), o("TSTypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: (0, n.validateArrayOfType)("TSTypeParameter")
    }
  }), o("TSTypeParameter", {
    builder: ["constraint", "default", "name"],
    visitor: ["constraint", "default"],
    fields: {
      name: {
        validate: (0, n.assertValueType)("string")
      },
      in: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      out: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      const: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      constraint: {
        validate: (0, n.assertNodeType)("TSType"),
        optional: !0
      },
      default: {
        validate: (0, n.assertNodeType)("TSType"),
        optional: !0
      }
    }
  }), Do;
}
var Li = {}, ko;
function _u() {
  return ko || (ko = 1, Object.defineProperty(Li, "__esModule", {
    value: !0
  }), Li.DEPRECATED_ALIASES = void 0, Li.DEPRECATED_ALIASES = {
    ModuleDeclaration: "ImportOrExportDeclaration"
  }), Li;
}
var Mo;
function lt() {
  return Mo || (Mo = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "ALIAS_KEYS", {
      enumerable: !0,
      get: function() {
        return l.ALIAS_KEYS;
      }
    }), Object.defineProperty(n, "BUILDER_KEYS", {
      enumerable: !0,
      get: function() {
        return l.BUILDER_KEYS;
      }
    }), Object.defineProperty(n, "DEPRECATED_ALIASES", {
      enumerable: !0,
      get: function() {
        return o.DEPRECATED_ALIASES;
      }
    }), Object.defineProperty(n, "DEPRECATED_KEYS", {
      enumerable: !0,
      get: function() {
        return l.DEPRECATED_KEYS;
      }
    }), Object.defineProperty(n, "FLIPPED_ALIAS_KEYS", {
      enumerable: !0,
      get: function() {
        return l.FLIPPED_ALIAS_KEYS;
      }
    }), Object.defineProperty(n, "NODE_FIELDS", {
      enumerable: !0,
      get: function() {
        return l.NODE_FIELDS;
      }
    }), Object.defineProperty(n, "NODE_PARENT_VALIDATIONS", {
      enumerable: !0,
      get: function() {
        return l.NODE_PARENT_VALIDATIONS;
      }
    }), Object.defineProperty(n, "NODE_UNION_SHAPES__PRIVATE", {
      enumerable: !0,
      get: function() {
        return l.NODE_UNION_SHAPES__PRIVATE;
      }
    }), Object.defineProperty(n, "PLACEHOLDERS", {
      enumerable: !0,
      get: function() {
        return c.PLACEHOLDERS;
      }
    }), Object.defineProperty(n, "PLACEHOLDERS_ALIAS", {
      enumerable: !0,
      get: function() {
        return c.PLACEHOLDERS_ALIAS;
      }
    }), Object.defineProperty(n, "PLACEHOLDERS_FLIPPED_ALIAS", {
      enumerable: !0,
      get: function() {
        return c.PLACEHOLDERS_FLIPPED_ALIAS;
      }
    }), n.TYPES = void 0, Object.defineProperty(n, "VISITOR_KEYS", {
      enumerable: !0,
      get: function() {
        return l.VISITOR_KEYS;
      }
    }), Za(), Ou(), Du(), Lu(), ku(), Mu();
    var l = Yt(), c = iu(), o = _u();
    Object.keys(o.DEPRECATED_ALIASES).forEach((S) => {
      l.FLIPPED_ALIAS_KEYS[S] = l.FLIPPED_ALIAS_KEYS[o.DEPRECATED_ALIASES[S]];
    });
    for (const {
      types: S,
      set: x
    } of l.allExpandedTypes)
      for (const M of S) {
        const w = l.FLIPPED_ALIAS_KEYS[M];
        w ? w.forEach(x.add, x) : x.add(M);
      }
    n.TYPES = [].concat(Object.keys(l.VISITOR_KEYS), Object.keys(l.FLIPPED_ALIAS_KEYS), Object.keys(l.DEPRECATED_KEYS));
  })(Vn)), Vn;
}
var _o;
function Zn() {
  if (_o) return Zs;
  _o = 1, Object.defineProperty(Zs, "__esModule", {
    value: !0
  }), Zs.default = l, Zs.validateChild = S, Zs.validateField = o, Zs.validateInternal = c;
  var n = lt();
  function l(x, M, w) {
    if (!x) return;
    const L = n.NODE_FIELDS[x.type];
    if (!L) return;
    const k = L[M];
    o(x, M, w, k), S(x, M, w);
  }
  function c(x, M, w, L, k) {
    if (x != null && x.validate && !(x.optional && L == null) && (x.validate(M, w, L), k)) {
      var O;
      const F = L.type;
      if (F == null) return;
      (O = n.NODE_PARENT_VALIDATIONS[F]) == null || O.call(n.NODE_PARENT_VALIDATIONS, M, w, L);
    }
  }
  function o(x, M, w, L) {
    L != null && L.validate && (L.optional && w == null || L.validate(x, M, w));
  }
  function S(x, M, w) {
    var L;
    const k = w?.type;
    k != null && ((L = n.NODE_PARENT_VALIDATIONS[k]) == null || L.call(n.NODE_PARENT_VALIDATIONS, x, M, w));
  }
  return Zs;
}
var Bo;
function au() {
  if (Bo) return E;
  Bo = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.anyTypeAnnotation = Gt, E.argumentPlaceholder = Xs, E.arrayExpression = M, E.arrayPattern = vt, E.arrayTypeAnnotation = is, E.arrowFunctionExpression = It, E.assignmentExpression = w, E.assignmentPattern = gt, E.awaitExpression = Ht, E.bigIntLiteral = x, E.binaryExpression = L, E.bindExpression = $s, E.blockStatement = j, E.booleanLiteral = ne, E.booleanLiteralTypeAnnotation = ns, E.booleanTypeAnnotation = as, E.breakStatement = R, E.callExpression = Z, E.catchClause = K, E.classAccessorProperty = Mt, E.classBody = Nt, E.classDeclaration = He, E.classExpression = Be, E.classImplements = ls, E.classMethod = Xe, E.classPrivateMethod = ts, E.classPrivateProperty = es, E.classProperty = kt, E.conditionalExpression = V, E.continueStatement = A, E.debuggerStatement = Y, E.decimalLiteral = ot, E.declareClass = us, E.declareExportAllDeclaration = et, E.declareExportDeclaration = Ue, E.declareFunction = pt, E.declareInterface = Ze, E.declareModule = Qt, E.declareModuleExports = _t, E.declareOpaqueType = cs, E.declareTypeAlias = Bt, E.declareVariable = $e, E.declaredPredicate = ps, E.decorator = hr, E.directive = O, E.directiveLiteral = F, E.doExpression = Ws, E.doWhileStatement = te, E.emptyStatement = se, E.emptyTypeAnnotation = Ft, E.enumBooleanBody = Ut, E.enumBooleanMember = nr, E.enumDeclaration = Os, E.enumDefaultedMember = or, E.enumNumberBody = Ds, E.enumNumberMember = H, E.enumStringBody = Kt, E.enumStringMember = ks, E.enumSymbolBody = Ls, E.existsTypeAnnotation = fs, E.exportAllDeclaration = Ct, E.exportDefaultDeclaration = Ge, E.exportDefaultSpecifier = zs, E.exportNamedDeclaration = _e, E.exportNamespaceSpecifier = Gr, E.exportSpecifier = it, E.expressionStatement = Te, E.file = be, E.forInStatement = ve, E.forOfStatement = Qe, E.forStatement = ge, E.functionDeclaration = ue, E.functionExpression = ae, E.functionTypeAnnotation = ds, E.functionTypeParam = hs, E.genericTypeAnnotation = ft, E.identifier = q, E.ifStatement = je, E.import = Hr, E.importAttribute = ss, E.importDeclaration = wt, E.importDefaultSpecifier = Ot, E.importExpression = Dt, E.importNamespaceSpecifier = $, E.importSpecifier = $r, E.indexedAccessType = Ms, E.inferredPredicate = ys, E.interfaceDeclaration = ms, E.interfaceExtends = Zt, E.interfaceTypeAnnotation = at, E.interpreterDirective = k, E.intersectionTypeAnnotation = Ke, E.jSXAttribute = E.jsxAttribute = Bs, E.jSXClosingElement = E.jsxClosingElement = Fs, E.jSXClosingFragment = E.jsxClosingFragment = Vt, E.jSXElement = E.jsxElement = lr, E.jSXEmptyExpression = E.jsxEmptyExpression = Rs, E.jSXExpressionContainer = E.jsxExpressionContainer = ur, E.jSXFragment = E.jsxFragment = Vs, E.jSXIdentifier = E.jsxIdentifier = js, E.jSXMemberExpression = E.jsxMemberExpression = Us, E.jSXNamespacedName = E.jsxNamespacedName = pr, E.jSXOpeningElement = E.jsxOpeningElement = fr, E.jSXOpeningFragment = E.jsxOpeningFragment = qs, E.jSXSpreadAttribute = E.jsxSpreadAttribute = Ks, E.jSXSpreadChild = E.jsxSpreadChild = cr, E.jSXText = E.jsxText = dr, E.labeledStatement = Ne, E.logicalExpression = Q, E.memberExpression = ce, E.metaProperty = Fe, E.mixedTypeAnnotation = Ts, E.moduleExpression = yr, E.newExpression = ye, E.noop = Js, E.nullLiteral = z, E.nullLiteralTypeAnnotation = os, E.nullableTypeAnnotation = Ss, E.numberLiteral = Ni, E.numberLiteralTypeAnnotation = er, E.numberTypeAnnotation = dt, E.numericLiteral = Je, E.objectExpression = me, E.objectMethod = Ee, E.objectPattern = Lt, E.objectProperty = Oe, E.objectTypeAnnotation = tr, E.objectTypeCallProperty = bs, E.objectTypeIndexer = Rt, E.objectTypeInternalSlot = xs, E.objectTypeProperty = rr, E.objectTypeSpreadProperty = sr, E.opaqueType = nt, E.optionalCallExpression = Zr, E.optionalIndexedAccessType = _s, E.optionalMemberExpression = Qr, E.parenthesizedExpression = St, E.pipelineBareFunction = t, E.pipelinePrimaryTopicReference = e, E.pipelineTopicExpression = y, E.placeholder = Ys, E.privateName = rs, E.program = Se, E.qualifiedTypeIdentifier = Ps, E.recordExpression = Hs, E.regExpLiteral = W, E.regexLiteral = Ci, E.restElement = De, E.restProperty = wi, E.returnStatement = re, E.sequenceExpression = le, E.spreadElement = Xt, E.spreadProperty = Oi, E.staticBlock = ie, E.stringLiteral = Me, E.stringLiteralTypeAnnotation = Ve, E.stringTypeAnnotation = Es, E.super = Wr, E.switchCase = pe, E.switchStatement = xt, E.symbolTypeAnnotation = As, E.taggedTemplateExpression = zr, E.templateElement = $t, E.templateLiteral = Wt, E.thisExpression = Le, E.thisTypeAnnotation = gs, E.throwStatement = ut, E.topicReference = Qs, E.tryStatement = bt, E.tSAnyKeyword = E.tsAnyKeyword = X, E.tSArrayType = E.tsArrayType = Cr, E.tSAsExpression = E.tsAsExpression = ui, E.tSBigIntKeyword = E.tsBigIntKeyword = de, E.tSBooleanKeyword = E.tsBooleanKeyword = G, E.tSCallSignatureDeclaration = E.tsCallSignatureDeclaration = g, E.tSConditionalType = E.tsConditionalType = _r, E.tSConstructSignatureDeclaration = E.tsConstructSignatureDeclaration = C, E.tSConstructorType = E.tsConstructorType = Ar, E.tSDeclareFunction = E.tsDeclareFunction = u, E.tSDeclareMethod = E.tsDeclareMethod = T, E.tSEnumBody = E.tsEnumBody = fi, E.tSEnumDeclaration = E.tsEnumDeclaration = di, E.tSEnumMember = E.tsEnumMember = hi, E.tSExportAssignment = E.tsExportAssignment = Pi, E.tSExpressionWithTypeArguments = E.tsExpressionWithTypeArguments = qr, E.tSExternalModuleReference = E.tsExternalModuleReference = xi, E.tSFunctionType = E.tsFunctionType = Er, E.tSImportEqualsDeclaration = E.tsImportEqualsDeclaration = Si, E.tSImportType = E.tsImportType = Ti, E.tSIndexSignature = E.tsIndexSignature = J, E.tSIndexedAccessType = E.tsIndexedAccessType = jr, E.tSInferType = E.tsInferType = Br, E.tSInstantiationExpression = E.tsInstantiationExpression = li, E.tSInterfaceBody = E.tsInterfaceBody = Yr, E.tSInterfaceDeclaration = E.tsInterfaceDeclaration = Jr, E.tSIntersectionType = E.tsIntersectionType = Mr, E.tSIntrinsicKeyword = E.tsIntrinsicKeyword = Pe, E.tSLiteralType = E.tsLiteralType = Vr, E.tSMappedType = E.tsMappedType = Ur, E.tSMethodSignature = E.tsMethodSignature = B, E.tSModuleBlock = E.tsModuleBlock = mi, E.tSModuleDeclaration = E.tsModuleDeclaration = yi, E.tSNamedTupleMember = E.tsNamedTupleMember = Lr, E.tSNamespaceExportDeclaration = E.tsNamespaceExportDeclaration = Ei, E.tSNeverKeyword = E.tsNeverKeyword = oe, E.tSNonNullExpression = E.tsNonNullExpression = bi, E.tSNullKeyword = E.tsNullKeyword = xe, E.tSNumberKeyword = E.tsNumberKeyword = We, E.tSObjectKeyword = E.tsObjectKeyword = qe, E.tSOptionalType = E.tsOptionalType = Or, E.tSParameterProperty = E.tsParameterProperty = i, E.tSParenthesizedType = E.tsParenthesizedType = Fr, E.tSPropertySignature = E.tsPropertySignature = D, E.tSQualifiedName = E.tsQualifiedName = P, E.tSRestType = E.tsRestType = Dr, E.tSSatisfiesExpression = E.tsSatisfiesExpression = ci, E.tSStringKeyword = E.tsStringKeyword = mr, E.tSSymbolKeyword = E.tsSymbolKeyword = Tr, E.tSTemplateLiteralType = E.tsTemplateLiteralType = Kr, E.tSThisType = E.tsThisType = Pr, E.tSTupleType = E.tsTupleType = wr, E.tSTypeAliasDeclaration = E.tsTypeAliasDeclaration = oi, E.tSTypeAnnotation = E.tsTypeAnnotation = Ai, E.tSTypeAssertion = E.tsTypeAssertion = pi, E.tSTypeLiteral = E.tsTypeLiteral = Nr, E.tSTypeOperator = E.tsTypeOperator = Rr, E.tSTypeParameter = E.tsTypeParameter = Ii, E.tSTypeParameterDeclaration = E.tsTypeParameterDeclaration = vi, E.tSTypeParameterInstantiation = E.tsTypeParameterInstantiation = gi, E.tSTypePredicate = E.tsTypePredicate = vr, E.tSTypeQuery = E.tsTypeQuery = Ir, E.tSTypeReference = E.tsTypeReference = gr, E.tSUndefinedKeyword = E.tsUndefinedKeyword = Sr, E.tSUnionType = E.tsUnionType = kr, E.tSUnknownKeyword = E.tsUnknownKeyword = xr, E.tSVoidKeyword = E.tsVoidKeyword = br, E.tupleExpression = Gs, E.tupleTypeAnnotation = ht, E.typeAlias = vs, E.typeAnnotation = Is, E.typeCastExpression = Ns, E.typeParameter = Cs, E.typeParameterDeclaration = ar, E.typeParameterInstantiation = ws, E.typeofTypeAnnotation = ir, E.unaryExpression = Ye, E.unionTypeAnnotation = yt, E.updateExpression = Pt, E.v8IntrinsicIdentifier = qt, E.variableDeclaration = ct, E.variableDeclarator = Et, E.variance = mt, E.voidPattern = r, E.voidTypeAnnotation = jt, E.whileStatement = st, E.withStatement = At, E.yieldExpression = zt;
  var n = Zn(), l = Ui(), c = Yt();
  const {
    validateInternal: o
  } = n, {
    NODE_FIELDS: S
  } = c;
  function x(p) {
    typeof p == "bigint" && (p = p.toString());
    const f = {
      type: "BigIntLiteral",
      value: p
    }, h = S.BigIntLiteral;
    return o(h.value, f, "value", p), f;
  }
  function M(p = []) {
    const f = {
      type: "ArrayExpression",
      elements: p
    }, h = S.ArrayExpression;
    return o(h.elements, f, "elements", p, 1), f;
  }
  function w(p, f, h) {
    const b = {
      type: "AssignmentExpression",
      operator: p,
      left: f,
      right: h
    }, N = S.AssignmentExpression;
    return o(N.operator, b, "operator", p), o(N.left, b, "left", f, 1), o(N.right, b, "right", h, 1), b;
  }
  function L(p, f, h) {
    const b = {
      type: "BinaryExpression",
      operator: p,
      left: f,
      right: h
    }, N = S.BinaryExpression;
    return o(N.operator, b, "operator", p), o(N.left, b, "left", f, 1), o(N.right, b, "right", h, 1), b;
  }
  function k(p) {
    const f = {
      type: "InterpreterDirective",
      value: p
    }, h = S.InterpreterDirective;
    return o(h.value, f, "value", p), f;
  }
  function O(p) {
    const f = {
      type: "Directive",
      value: p
    }, h = S.Directive;
    return o(h.value, f, "value", p, 1), f;
  }
  function F(p) {
    const f = {
      type: "DirectiveLiteral",
      value: p
    }, h = S.DirectiveLiteral;
    return o(h.value, f, "value", p), f;
  }
  function j(p, f = []) {
    const h = {
      type: "BlockStatement",
      body: p,
      directives: f
    }, b = S.BlockStatement;
    return o(b.body, h, "body", p, 1), o(b.directives, h, "directives", f, 1), h;
  }
  function R(p = null) {
    const f = {
      type: "BreakStatement",
      label: p
    }, h = S.BreakStatement;
    return o(h.label, f, "label", p, 1), f;
  }
  function Z(p, f) {
    const h = {
      type: "CallExpression",
      callee: p,
      arguments: f
    }, b = S.CallExpression;
    return o(b.callee, h, "callee", p, 1), o(b.arguments, h, "arguments", f, 1), h;
  }
  function K(p = null, f) {
    const h = {
      type: "CatchClause",
      param: p,
      body: f
    }, b = S.CatchClause;
    return o(b.param, h, "param", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function V(p, f, h) {
    const b = {
      type: "ConditionalExpression",
      test: p,
      consequent: f,
      alternate: h
    }, N = S.ConditionalExpression;
    return o(N.test, b, "test", p, 1), o(N.consequent, b, "consequent", f, 1), o(N.alternate, b, "alternate", h, 1), b;
  }
  function A(p = null) {
    const f = {
      type: "ContinueStatement",
      label: p
    }, h = S.ContinueStatement;
    return o(h.label, f, "label", p, 1), f;
  }
  function Y() {
    return {
      type: "DebuggerStatement"
    };
  }
  function te(p, f) {
    const h = {
      type: "DoWhileStatement",
      test: p,
      body: f
    }, b = S.DoWhileStatement;
    return o(b.test, h, "test", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function se() {
    return {
      type: "EmptyStatement"
    };
  }
  function Te(p) {
    const f = {
      type: "ExpressionStatement",
      expression: p
    }, h = S.ExpressionStatement;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function be(p, f = null, h = null) {
    const b = {
      type: "File",
      program: p,
      comments: f,
      tokens: h
    }, N = S.File;
    return o(N.program, b, "program", p, 1), o(N.comments, b, "comments", f, 1), o(N.tokens, b, "tokens", h), b;
  }
  function ve(p, f, h) {
    const b = {
      type: "ForInStatement",
      left: p,
      right: f,
      body: h
    }, N = S.ForInStatement;
    return o(N.left, b, "left", p, 1), o(N.right, b, "right", f, 1), o(N.body, b, "body", h, 1), b;
  }
  function ge(p = null, f = null, h = null, b) {
    const N = {
      type: "ForStatement",
      init: p,
      test: f,
      update: h,
      body: b
    }, _ = S.ForStatement;
    return o(_.init, N, "init", p, 1), o(_.test, N, "test", f, 1), o(_.update, N, "update", h, 1), o(_.body, N, "body", b, 1), N;
  }
  function ue(p = null, f, h, b = !1, N = !1) {
    const _ = {
      type: "FunctionDeclaration",
      id: p,
      params: f,
      body: h,
      generator: b,
      async: N
    }, ee = S.FunctionDeclaration;
    return o(ee.id, _, "id", p, 1), o(ee.params, _, "params", f, 1), o(ee.body, _, "body", h, 1), o(ee.generator, _, "generator", b), o(ee.async, _, "async", N), _;
  }
  function ae(p = null, f, h, b = !1, N = !1) {
    const _ = {
      type: "FunctionExpression",
      id: p,
      params: f,
      body: h,
      generator: b,
      async: N
    }, ee = S.FunctionExpression;
    return o(ee.id, _, "id", p, 1), o(ee.params, _, "params", f, 1), o(ee.body, _, "body", h, 1), o(ee.generator, _, "generator", b), o(ee.async, _, "async", N), _;
  }
  function q(p) {
    const f = {
      type: "Identifier",
      name: p
    }, h = S.Identifier;
    return o(h.name, f, "name", p), f;
  }
  function je(p, f, h = null) {
    const b = {
      type: "IfStatement",
      test: p,
      consequent: f,
      alternate: h
    }, N = S.IfStatement;
    return o(N.test, b, "test", p, 1), o(N.consequent, b, "consequent", f, 1), o(N.alternate, b, "alternate", h, 1), b;
  }
  function Ne(p, f) {
    const h = {
      type: "LabeledStatement",
      label: p,
      body: f
    }, b = S.LabeledStatement;
    return o(b.label, h, "label", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function Me(p) {
    const f = {
      type: "StringLiteral",
      value: p
    }, h = S.StringLiteral;
    return o(h.value, f, "value", p), f;
  }
  function Je(p) {
    const f = {
      type: "NumericLiteral",
      value: p
    }, h = S.NumericLiteral;
    return o(h.value, f, "value", p), f;
  }
  function z() {
    return {
      type: "NullLiteral"
    };
  }
  function ne(p) {
    const f = {
      type: "BooleanLiteral",
      value: p
    }, h = S.BooleanLiteral;
    return o(h.value, f, "value", p), f;
  }
  function W(p, f = "") {
    const h = {
      type: "RegExpLiteral",
      pattern: p,
      flags: f
    }, b = S.RegExpLiteral;
    return o(b.pattern, h, "pattern", p), o(b.flags, h, "flags", f), h;
  }
  function Q(p, f, h) {
    const b = {
      type: "LogicalExpression",
      operator: p,
      left: f,
      right: h
    }, N = S.LogicalExpression;
    return o(N.operator, b, "operator", p), o(N.left, b, "left", f, 1), o(N.right, b, "right", h, 1), b;
  }
  function ce(p, f, h = !1, b = null) {
    const N = {
      type: "MemberExpression",
      object: p,
      property: f,
      computed: h,
      optional: b
    }, _ = S.MemberExpression;
    return o(_.object, N, "object", p, 1), o(_.property, N, "property", f, 1), o(_.computed, N, "computed", h), o(_.optional, N, "optional", b), N;
  }
  function ye(p, f) {
    const h = {
      type: "NewExpression",
      callee: p,
      arguments: f
    }, b = S.NewExpression;
    return o(b.callee, h, "callee", p, 1), o(b.arguments, h, "arguments", f, 1), h;
  }
  function Se(p, f = [], h = "script", b = null) {
    const N = {
      type: "Program",
      body: p,
      directives: f,
      sourceType: h,
      interpreter: b
    }, _ = S.Program;
    return o(_.body, N, "body", p, 1), o(_.directives, N, "directives", f, 1), o(_.sourceType, N, "sourceType", h), o(_.interpreter, N, "interpreter", b, 1), N;
  }
  function me(p) {
    const f = {
      type: "ObjectExpression",
      properties: p
    }, h = S.ObjectExpression;
    return o(h.properties, f, "properties", p, 1), f;
  }
  function Ee(p = "method", f, h, b, N = !1, _ = !1, ee = !1) {
    const Ae = {
      type: "ObjectMethod",
      kind: p,
      key: f,
      params: h,
      body: b,
      computed: N,
      generator: _,
      async: ee
    }, Ce = S.ObjectMethod;
    return o(Ce.kind, Ae, "kind", p), o(Ce.key, Ae, "key", f, 1), o(Ce.params, Ae, "params", h, 1), o(Ce.body, Ae, "body", b, 1), o(Ce.computed, Ae, "computed", N), o(Ce.generator, Ae, "generator", _), o(Ce.async, Ae, "async", ee), Ae;
  }
  function Oe(p, f, h = !1, b = !1, N = null) {
    const _ = {
      type: "ObjectProperty",
      key: p,
      value: f,
      computed: h,
      shorthand: b,
      decorators: N
    }, ee = S.ObjectProperty;
    return o(ee.key, _, "key", p, 1), o(ee.value, _, "value", f, 1), o(ee.computed, _, "computed", h), o(ee.shorthand, _, "shorthand", b), o(ee.decorators, _, "decorators", N, 1), _;
  }
  function De(p) {
    const f = {
      type: "RestElement",
      argument: p
    }, h = S.RestElement;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function re(p = null) {
    const f = {
      type: "ReturnStatement",
      argument: p
    }, h = S.ReturnStatement;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function le(p) {
    const f = {
      type: "SequenceExpression",
      expressions: p
    }, h = S.SequenceExpression;
    return o(h.expressions, f, "expressions", p, 1), f;
  }
  function St(p) {
    const f = {
      type: "ParenthesizedExpression",
      expression: p
    }, h = S.ParenthesizedExpression;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function pe(p = null, f) {
    const h = {
      type: "SwitchCase",
      test: p,
      consequent: f
    }, b = S.SwitchCase;
    return o(b.test, h, "test", p, 1), o(b.consequent, h, "consequent", f, 1), h;
  }
  function xt(p, f) {
    const h = {
      type: "SwitchStatement",
      discriminant: p,
      cases: f
    }, b = S.SwitchStatement;
    return o(b.discriminant, h, "discriminant", p, 1), o(b.cases, h, "cases", f, 1), h;
  }
  function Le() {
    return {
      type: "ThisExpression"
    };
  }
  function ut(p) {
    const f = {
      type: "ThrowStatement",
      argument: p
    }, h = S.ThrowStatement;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function bt(p, f = null, h = null) {
    const b = {
      type: "TryStatement",
      block: p,
      handler: f,
      finalizer: h
    }, N = S.TryStatement;
    return o(N.block, b, "block", p, 1), o(N.handler, b, "handler", f, 1), o(N.finalizer, b, "finalizer", h, 1), b;
  }
  function Ye(p, f, h = !0) {
    const b = {
      type: "UnaryExpression",
      operator: p,
      argument: f,
      prefix: h
    }, N = S.UnaryExpression;
    return o(N.operator, b, "operator", p), o(N.argument, b, "argument", f, 1), o(N.prefix, b, "prefix", h), b;
  }
  function Pt(p, f, h = !1) {
    const b = {
      type: "UpdateExpression",
      operator: p,
      argument: f,
      prefix: h
    }, N = S.UpdateExpression;
    return o(N.operator, b, "operator", p), o(N.argument, b, "argument", f, 1), o(N.prefix, b, "prefix", h), b;
  }
  function ct(p, f) {
    const h = {
      type: "VariableDeclaration",
      kind: p,
      declarations: f
    }, b = S.VariableDeclaration;
    return o(b.kind, h, "kind", p), o(b.declarations, h, "declarations", f, 1), h;
  }
  function Et(p, f = null) {
    const h = {
      type: "VariableDeclarator",
      id: p,
      init: f
    }, b = S.VariableDeclarator;
    return o(b.id, h, "id", p, 1), o(b.init, h, "init", f, 1), h;
  }
  function st(p, f) {
    const h = {
      type: "WhileStatement",
      test: p,
      body: f
    }, b = S.WhileStatement;
    return o(b.test, h, "test", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function At(p, f) {
    const h = {
      type: "WithStatement",
      object: p,
      body: f
    }, b = S.WithStatement;
    return o(b.object, h, "object", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function gt(p, f) {
    const h = {
      type: "AssignmentPattern",
      left: p,
      right: f
    }, b = S.AssignmentPattern;
    return o(b.left, h, "left", p, 1), o(b.right, h, "right", f, 1), h;
  }
  function vt(p) {
    const f = {
      type: "ArrayPattern",
      elements: p
    }, h = S.ArrayPattern;
    return o(h.elements, f, "elements", p, 1), f;
  }
  function It(p, f, h = !1) {
    const b = {
      type: "ArrowFunctionExpression",
      params: p,
      body: f,
      async: h,
      expression: null
    }, N = S.ArrowFunctionExpression;
    return o(N.params, b, "params", p, 1), o(N.body, b, "body", f, 1), o(N.async, b, "async", h), b;
  }
  function Nt(p) {
    const f = {
      type: "ClassBody",
      body: p
    }, h = S.ClassBody;
    return o(h.body, f, "body", p, 1), f;
  }
  function Be(p = null, f = null, h, b = null) {
    const N = {
      type: "ClassExpression",
      id: p,
      superClass: f,
      body: h,
      decorators: b
    }, _ = S.ClassExpression;
    return o(_.id, N, "id", p, 1), o(_.superClass, N, "superClass", f, 1), o(_.body, N, "body", h, 1), o(_.decorators, N, "decorators", b, 1), N;
  }
  function He(p = null, f = null, h, b = null) {
    const N = {
      type: "ClassDeclaration",
      id: p,
      superClass: f,
      body: h,
      decorators: b
    }, _ = S.ClassDeclaration;
    return o(_.id, N, "id", p, 1), o(_.superClass, N, "superClass", f, 1), o(_.body, N, "body", h, 1), o(_.decorators, N, "decorators", b, 1), N;
  }
  function Ct(p) {
    const f = {
      type: "ExportAllDeclaration",
      source: p
    }, h = S.ExportAllDeclaration;
    return o(h.source, f, "source", p, 1), f;
  }
  function Ge(p) {
    const f = {
      type: "ExportDefaultDeclaration",
      declaration: p
    }, h = S.ExportDefaultDeclaration;
    return o(h.declaration, f, "declaration", p, 1), f;
  }
  function _e(p = null, f = [], h = null) {
    const b = {
      type: "ExportNamedDeclaration",
      declaration: p,
      specifiers: f,
      source: h
    }, N = S.ExportNamedDeclaration;
    return o(N.declaration, b, "declaration", p, 1), o(N.specifiers, b, "specifiers", f, 1), o(N.source, b, "source", h, 1), b;
  }
  function it(p, f) {
    const h = {
      type: "ExportSpecifier",
      local: p,
      exported: f
    }, b = S.ExportSpecifier;
    return o(b.local, h, "local", p, 1), o(b.exported, h, "exported", f, 1), h;
  }
  function Qe(p, f, h, b = !1) {
    const N = {
      type: "ForOfStatement",
      left: p,
      right: f,
      body: h,
      await: b
    }, _ = S.ForOfStatement;
    return o(_.left, N, "left", p, 1), o(_.right, N, "right", f, 1), o(_.body, N, "body", h, 1), o(_.await, N, "await", b), N;
  }
  function wt(p, f) {
    const h = {
      type: "ImportDeclaration",
      specifiers: p,
      source: f
    }, b = S.ImportDeclaration;
    return o(b.specifiers, h, "specifiers", p, 1), o(b.source, h, "source", f, 1), h;
  }
  function Ot(p) {
    const f = {
      type: "ImportDefaultSpecifier",
      local: p
    }, h = S.ImportDefaultSpecifier;
    return o(h.local, f, "local", p, 1), f;
  }
  function $(p) {
    const f = {
      type: "ImportNamespaceSpecifier",
      local: p
    }, h = S.ImportNamespaceSpecifier;
    return o(h.local, f, "local", p, 1), f;
  }
  function $r(p, f) {
    const h = {
      type: "ImportSpecifier",
      local: p,
      imported: f
    }, b = S.ImportSpecifier;
    return o(b.local, h, "local", p, 1), o(b.imported, h, "imported", f, 1), h;
  }
  function Dt(p, f = null) {
    const h = {
      type: "ImportExpression",
      source: p,
      options: f
    }, b = S.ImportExpression;
    return o(b.source, h, "source", p, 1), o(b.options, h, "options", f, 1), h;
  }
  function Fe(p, f) {
    const h = {
      type: "MetaProperty",
      meta: p,
      property: f
    }, b = S.MetaProperty;
    return o(b.meta, h, "meta", p, 1), o(b.property, h, "property", f, 1), h;
  }
  function Xe(p = "method", f, h, b, N = !1, _ = !1, ee = !1, Ae = !1) {
    const Ce = {
      type: "ClassMethod",
      kind: p,
      key: f,
      params: h,
      body: b,
      computed: N,
      static: _,
      generator: ee,
      async: Ae
    }, tt = S.ClassMethod;
    return o(tt.kind, Ce, "kind", p), o(tt.key, Ce, "key", f, 1), o(tt.params, Ce, "params", h, 1), o(tt.body, Ce, "body", b, 1), o(tt.computed, Ce, "computed", N), o(tt.static, Ce, "static", _), o(tt.generator, Ce, "generator", ee), o(tt.async, Ce, "async", Ae), Ce;
  }
  function Lt(p) {
    const f = {
      type: "ObjectPattern",
      properties: p
    }, h = S.ObjectPattern;
    return o(h.properties, f, "properties", p, 1), f;
  }
  function Xt(p) {
    const f = {
      type: "SpreadElement",
      argument: p
    }, h = S.SpreadElement;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function Wr() {
    return {
      type: "Super"
    };
  }
  function zr(p, f) {
    const h = {
      type: "TaggedTemplateExpression",
      tag: p,
      quasi: f
    }, b = S.TaggedTemplateExpression;
    return o(b.tag, h, "tag", p, 1), o(b.quasi, h, "quasi", f, 1), h;
  }
  function $t(p, f = !1) {
    const h = {
      type: "TemplateElement",
      value: p,
      tail: f
    }, b = S.TemplateElement;
    return o(b.value, h, "value", p), o(b.tail, h, "tail", f), h;
  }
  function Wt(p, f) {
    const h = {
      type: "TemplateLiteral",
      quasis: p,
      expressions: f
    }, b = S.TemplateLiteral;
    return o(b.quasis, h, "quasis", p, 1), o(b.expressions, h, "expressions", f, 1), h;
  }
  function zt(p = null, f = !1) {
    const h = {
      type: "YieldExpression",
      argument: p,
      delegate: f
    }, b = S.YieldExpression;
    return o(b.argument, h, "argument", p, 1), o(b.delegate, h, "delegate", f), h;
  }
  function Ht(p) {
    const f = {
      type: "AwaitExpression",
      argument: p
    }, h = S.AwaitExpression;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function Hr() {
    return {
      type: "Import"
    };
  }
  function Gr(p) {
    const f = {
      type: "ExportNamespaceSpecifier",
      exported: p
    }, h = S.ExportNamespaceSpecifier;
    return o(h.exported, f, "exported", p, 1), f;
  }
  function Qr(p, f, h = !1, b) {
    const N = {
      type: "OptionalMemberExpression",
      object: p,
      property: f,
      computed: h,
      optional: b
    }, _ = S.OptionalMemberExpression;
    return o(_.object, N, "object", p, 1), o(_.property, N, "property", f, 1), o(_.computed, N, "computed", h), o(_.optional, N, "optional", b), N;
  }
  function Zr(p, f, h) {
    const b = {
      type: "OptionalCallExpression",
      callee: p,
      arguments: f,
      optional: h
    }, N = S.OptionalCallExpression;
    return o(N.callee, b, "callee", p, 1), o(N.arguments, b, "arguments", f, 1), o(N.optional, b, "optional", h), b;
  }
  function kt(p, f = null, h = null, b = null, N = !1, _ = !1) {
    const ee = {
      type: "ClassProperty",
      key: p,
      value: f,
      typeAnnotation: h,
      decorators: b,
      computed: N,
      static: _
    }, Ae = S.ClassProperty;
    return o(Ae.key, ee, "key", p, 1), o(Ae.value, ee, "value", f, 1), o(Ae.typeAnnotation, ee, "typeAnnotation", h, 1), o(Ae.decorators, ee, "decorators", b, 1), o(Ae.computed, ee, "computed", N), o(Ae.static, ee, "static", _), ee;
  }
  function Mt(p, f = null, h = null, b = null, N = !1, _ = !1) {
    const ee = {
      type: "ClassAccessorProperty",
      key: p,
      value: f,
      typeAnnotation: h,
      decorators: b,
      computed: N,
      static: _
    }, Ae = S.ClassAccessorProperty;
    return o(Ae.key, ee, "key", p, 1), o(Ae.value, ee, "value", f, 1), o(Ae.typeAnnotation, ee, "typeAnnotation", h, 1), o(Ae.decorators, ee, "decorators", b, 1), o(Ae.computed, ee, "computed", N), o(Ae.static, ee, "static", _), ee;
  }
  function es(p, f = null, h = null, b = !1) {
    const N = {
      type: "ClassPrivateProperty",
      key: p,
      value: f,
      decorators: h,
      static: b
    }, _ = S.ClassPrivateProperty;
    return o(_.key, N, "key", p, 1), o(_.value, N, "value", f, 1), o(_.decorators, N, "decorators", h, 1), o(_.static, N, "static", b), N;
  }
  function ts(p = "method", f, h, b, N = !1) {
    const _ = {
      type: "ClassPrivateMethod",
      kind: p,
      key: f,
      params: h,
      body: b,
      static: N
    }, ee = S.ClassPrivateMethod;
    return o(ee.kind, _, "kind", p), o(ee.key, _, "key", f, 1), o(ee.params, _, "params", h, 1), o(ee.body, _, "body", b, 1), o(ee.static, _, "static", N), _;
  }
  function rs(p) {
    const f = {
      type: "PrivateName",
      id: p
    }, h = S.PrivateName;
    return o(h.id, f, "id", p, 1), f;
  }
  function ie(p) {
    const f = {
      type: "StaticBlock",
      body: p
    }, h = S.StaticBlock;
    return o(h.body, f, "body", p, 1), f;
  }
  function ss(p, f) {
    const h = {
      type: "ImportAttribute",
      key: p,
      value: f
    }, b = S.ImportAttribute;
    return o(b.key, h, "key", p, 1), o(b.value, h, "value", f, 1), h;
  }
  function Gt() {
    return {
      type: "AnyTypeAnnotation"
    };
  }
  function is(p) {
    const f = {
      type: "ArrayTypeAnnotation",
      elementType: p
    }, h = S.ArrayTypeAnnotation;
    return o(h.elementType, f, "elementType", p, 1), f;
  }
  function as() {
    return {
      type: "BooleanTypeAnnotation"
    };
  }
  function ns(p) {
    const f = {
      type: "BooleanLiteralTypeAnnotation",
      value: p
    }, h = S.BooleanLiteralTypeAnnotation;
    return o(h.value, f, "value", p), f;
  }
  function os() {
    return {
      type: "NullLiteralTypeAnnotation"
    };
  }
  function ls(p, f = null) {
    const h = {
      type: "ClassImplements",
      id: p,
      typeParameters: f
    }, b = S.ClassImplements;
    return o(b.id, h, "id", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function us(p, f = null, h = null, b) {
    const N = {
      type: "DeclareClass",
      id: p,
      typeParameters: f,
      extends: h,
      body: b
    }, _ = S.DeclareClass;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.extends, N, "extends", h, 1), o(_.body, N, "body", b, 1), N;
  }
  function pt(p) {
    const f = {
      type: "DeclareFunction",
      id: p
    }, h = S.DeclareFunction;
    return o(h.id, f, "id", p, 1), f;
  }
  function Ze(p, f = null, h = null, b) {
    const N = {
      type: "DeclareInterface",
      id: p,
      typeParameters: f,
      extends: h,
      body: b
    }, _ = S.DeclareInterface;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.extends, N, "extends", h, 1), o(_.body, N, "body", b, 1), N;
  }
  function Qt(p, f, h = null) {
    const b = {
      type: "DeclareModule",
      id: p,
      body: f,
      kind: h
    }, N = S.DeclareModule;
    return o(N.id, b, "id", p, 1), o(N.body, b, "body", f, 1), o(N.kind, b, "kind", h), b;
  }
  function _t(p) {
    const f = {
      type: "DeclareModuleExports",
      typeAnnotation: p
    }, h = S.DeclareModuleExports;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function Bt(p, f = null, h) {
    const b = {
      type: "DeclareTypeAlias",
      id: p,
      typeParameters: f,
      right: h
    }, N = S.DeclareTypeAlias;
    return o(N.id, b, "id", p, 1), o(N.typeParameters, b, "typeParameters", f, 1), o(N.right, b, "right", h, 1), b;
  }
  function cs(p, f = null, h = null) {
    const b = {
      type: "DeclareOpaqueType",
      id: p,
      typeParameters: f,
      supertype: h
    }, N = S.DeclareOpaqueType;
    return o(N.id, b, "id", p, 1), o(N.typeParameters, b, "typeParameters", f, 1), o(N.supertype, b, "supertype", h, 1), b;
  }
  function $e(p) {
    const f = {
      type: "DeclareVariable",
      id: p
    }, h = S.DeclareVariable;
    return o(h.id, f, "id", p, 1), f;
  }
  function Ue(p = null, f = null, h = null, b = null) {
    const N = {
      type: "DeclareExportDeclaration",
      declaration: p,
      specifiers: f,
      source: h,
      attributes: b
    }, _ = S.DeclareExportDeclaration;
    return o(_.declaration, N, "declaration", p, 1), o(_.specifiers, N, "specifiers", f, 1), o(_.source, N, "source", h, 1), o(_.attributes, N, "attributes", b, 1), N;
  }
  function et(p, f = null) {
    const h = {
      type: "DeclareExportAllDeclaration",
      source: p,
      attributes: f
    }, b = S.DeclareExportAllDeclaration;
    return o(b.source, h, "source", p, 1), o(b.attributes, h, "attributes", f, 1), h;
  }
  function ps(p) {
    const f = {
      type: "DeclaredPredicate",
      value: p
    }, h = S.DeclaredPredicate;
    return o(h.value, f, "value", p, 1), f;
  }
  function fs() {
    return {
      type: "ExistsTypeAnnotation"
    };
  }
  function ds(p = null, f, h = null, b) {
    const N = {
      type: "FunctionTypeAnnotation",
      typeParameters: p,
      params: f,
      rest: h,
      returnType: b
    }, _ = S.FunctionTypeAnnotation;
    return o(_.typeParameters, N, "typeParameters", p, 1), o(_.params, N, "params", f, 1), o(_.rest, N, "rest", h, 1), o(_.returnType, N, "returnType", b, 1), N;
  }
  function hs(p = null, f) {
    const h = {
      type: "FunctionTypeParam",
      name: p,
      typeAnnotation: f
    }, b = S.FunctionTypeParam;
    return o(b.name, h, "name", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function ft(p, f = null) {
    const h = {
      type: "GenericTypeAnnotation",
      id: p,
      typeParameters: f
    }, b = S.GenericTypeAnnotation;
    return o(b.id, h, "id", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function ys() {
    return {
      type: "InferredPredicate"
    };
  }
  function Zt(p, f = null) {
    const h = {
      type: "InterfaceExtends",
      id: p,
      typeParameters: f
    }, b = S.InterfaceExtends;
    return o(b.id, h, "id", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function ms(p, f = null, h = null, b) {
    const N = {
      type: "InterfaceDeclaration",
      id: p,
      typeParameters: f,
      extends: h,
      body: b
    }, _ = S.InterfaceDeclaration;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.extends, N, "extends", h, 1), o(_.body, N, "body", b, 1), N;
  }
  function at(p = null, f) {
    const h = {
      type: "InterfaceTypeAnnotation",
      extends: p,
      body: f
    }, b = S.InterfaceTypeAnnotation;
    return o(b.extends, h, "extends", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function Ke(p) {
    const f = {
      type: "IntersectionTypeAnnotation",
      types: p
    }, h = S.IntersectionTypeAnnotation;
    return o(h.types, f, "types", p, 1), f;
  }
  function Ts() {
    return {
      type: "MixedTypeAnnotation"
    };
  }
  function Ft() {
    return {
      type: "EmptyTypeAnnotation"
    };
  }
  function Ss(p) {
    const f = {
      type: "NullableTypeAnnotation",
      typeAnnotation: p
    }, h = S.NullableTypeAnnotation;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function er(p) {
    const f = {
      type: "NumberLiteralTypeAnnotation",
      value: p
    }, h = S.NumberLiteralTypeAnnotation;
    return o(h.value, f, "value", p), f;
  }
  function dt() {
    return {
      type: "NumberTypeAnnotation"
    };
  }
  function tr(p, f = [], h = [], b = [], N = !1) {
    const _ = {
      type: "ObjectTypeAnnotation",
      properties: p,
      indexers: f,
      callProperties: h,
      internalSlots: b,
      exact: N
    }, ee = S.ObjectTypeAnnotation;
    return o(ee.properties, _, "properties", p, 1), o(ee.indexers, _, "indexers", f, 1), o(ee.callProperties, _, "callProperties", h, 1), o(ee.internalSlots, _, "internalSlots", b, 1), o(ee.exact, _, "exact", N), _;
  }
  function xs(p, f, h, b, N) {
    const _ = {
      type: "ObjectTypeInternalSlot",
      id: p,
      value: f,
      optional: h,
      static: b,
      method: N
    }, ee = S.ObjectTypeInternalSlot;
    return o(ee.id, _, "id", p, 1), o(ee.value, _, "value", f, 1), o(ee.optional, _, "optional", h), o(ee.static, _, "static", b), o(ee.method, _, "method", N), _;
  }
  function bs(p) {
    const f = {
      type: "ObjectTypeCallProperty",
      value: p,
      static: null
    }, h = S.ObjectTypeCallProperty;
    return o(h.value, f, "value", p, 1), f;
  }
  function Rt(p = null, f, h, b = null) {
    const N = {
      type: "ObjectTypeIndexer",
      id: p,
      key: f,
      value: h,
      variance: b,
      static: null
    }, _ = S.ObjectTypeIndexer;
    return o(_.id, N, "id", p, 1), o(_.key, N, "key", f, 1), o(_.value, N, "value", h, 1), o(_.variance, N, "variance", b, 1), N;
  }
  function rr(p, f, h = null) {
    const b = {
      type: "ObjectTypeProperty",
      key: p,
      value: f,
      variance: h,
      kind: null,
      method: null,
      optional: null,
      proto: null,
      static: null
    }, N = S.ObjectTypeProperty;
    return o(N.key, b, "key", p, 1), o(N.value, b, "value", f, 1), o(N.variance, b, "variance", h, 1), b;
  }
  function sr(p) {
    const f = {
      type: "ObjectTypeSpreadProperty",
      argument: p
    }, h = S.ObjectTypeSpreadProperty;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function nt(p, f = null, h = null, b) {
    const N = {
      type: "OpaqueType",
      id: p,
      typeParameters: f,
      supertype: h,
      impltype: b
    }, _ = S.OpaqueType;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.supertype, N, "supertype", h, 1), o(_.impltype, N, "impltype", b, 1), N;
  }
  function Ps(p, f) {
    const h = {
      type: "QualifiedTypeIdentifier",
      id: p,
      qualification: f
    }, b = S.QualifiedTypeIdentifier;
    return o(b.id, h, "id", p, 1), o(b.qualification, h, "qualification", f, 1), h;
  }
  function Ve(p) {
    const f = {
      type: "StringLiteralTypeAnnotation",
      value: p
    }, h = S.StringLiteralTypeAnnotation;
    return o(h.value, f, "value", p), f;
  }
  function Es() {
    return {
      type: "StringTypeAnnotation"
    };
  }
  function As() {
    return {
      type: "SymbolTypeAnnotation"
    };
  }
  function gs() {
    return {
      type: "ThisTypeAnnotation"
    };
  }
  function ht(p) {
    const f = {
      type: "TupleTypeAnnotation",
      types: p
    }, h = S.TupleTypeAnnotation;
    return o(h.types, f, "types", p, 1), f;
  }
  function ir(p) {
    const f = {
      type: "TypeofTypeAnnotation",
      argument: p
    }, h = S.TypeofTypeAnnotation;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function vs(p, f = null, h) {
    const b = {
      type: "TypeAlias",
      id: p,
      typeParameters: f,
      right: h
    }, N = S.TypeAlias;
    return o(N.id, b, "id", p, 1), o(N.typeParameters, b, "typeParameters", f, 1), o(N.right, b, "right", h, 1), b;
  }
  function Is(p) {
    const f = {
      type: "TypeAnnotation",
      typeAnnotation: p
    }, h = S.TypeAnnotation;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function Ns(p, f) {
    const h = {
      type: "TypeCastExpression",
      expression: p,
      typeAnnotation: f
    }, b = S.TypeCastExpression;
    return o(b.expression, h, "expression", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function Cs(p = null, f = null, h = null) {
    const b = {
      type: "TypeParameter",
      bound: p,
      default: f,
      variance: h,
      name: null
    }, N = S.TypeParameter;
    return o(N.bound, b, "bound", p, 1), o(N.default, b, "default", f, 1), o(N.variance, b, "variance", h, 1), b;
  }
  function ar(p) {
    const f = {
      type: "TypeParameterDeclaration",
      params: p
    }, h = S.TypeParameterDeclaration;
    return o(h.params, f, "params", p, 1), f;
  }
  function ws(p) {
    const f = {
      type: "TypeParameterInstantiation",
      params: p
    }, h = S.TypeParameterInstantiation;
    return o(h.params, f, "params", p, 1), f;
  }
  function yt(p) {
    const f = {
      type: "UnionTypeAnnotation",
      types: p
    }, h = S.UnionTypeAnnotation;
    return o(h.types, f, "types", p, 1), f;
  }
  function mt(p) {
    const f = {
      type: "Variance",
      kind: p
    }, h = S.Variance;
    return o(h.kind, f, "kind", p), f;
  }
  function jt() {
    return {
      type: "VoidTypeAnnotation"
    };
  }
  function Os(p, f) {
    const h = {
      type: "EnumDeclaration",
      id: p,
      body: f
    }, b = S.EnumDeclaration;
    return o(b.id, h, "id", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function Ut(p) {
    const f = {
      type: "EnumBooleanBody",
      members: p,
      explicitType: null,
      hasUnknownMembers: null
    }, h = S.EnumBooleanBody;
    return o(h.members, f, "members", p, 1), f;
  }
  function Ds(p) {
    const f = {
      type: "EnumNumberBody",
      members: p,
      explicitType: null,
      hasUnknownMembers: null
    }, h = S.EnumNumberBody;
    return o(h.members, f, "members", p, 1), f;
  }
  function Kt(p) {
    const f = {
      type: "EnumStringBody",
      members: p,
      explicitType: null,
      hasUnknownMembers: null
    }, h = S.EnumStringBody;
    return o(h.members, f, "members", p, 1), f;
  }
  function Ls(p) {
    const f = {
      type: "EnumSymbolBody",
      members: p,
      hasUnknownMembers: null
    }, h = S.EnumSymbolBody;
    return o(h.members, f, "members", p, 1), f;
  }
  function nr(p) {
    const f = {
      type: "EnumBooleanMember",
      id: p,
      init: null
    }, h = S.EnumBooleanMember;
    return o(h.id, f, "id", p, 1), f;
  }
  function H(p, f) {
    const h = {
      type: "EnumNumberMember",
      id: p,
      init: f
    }, b = S.EnumNumberMember;
    return o(b.id, h, "id", p, 1), o(b.init, h, "init", f, 1), h;
  }
  function ks(p, f) {
    const h = {
      type: "EnumStringMember",
      id: p,
      init: f
    }, b = S.EnumStringMember;
    return o(b.id, h, "id", p, 1), o(b.init, h, "init", f, 1), h;
  }
  function or(p) {
    const f = {
      type: "EnumDefaultedMember",
      id: p
    }, h = S.EnumDefaultedMember;
    return o(h.id, f, "id", p, 1), f;
  }
  function Ms(p, f) {
    const h = {
      type: "IndexedAccessType",
      objectType: p,
      indexType: f
    }, b = S.IndexedAccessType;
    return o(b.objectType, h, "objectType", p, 1), o(b.indexType, h, "indexType", f, 1), h;
  }
  function _s(p, f) {
    const h = {
      type: "OptionalIndexedAccessType",
      objectType: p,
      indexType: f,
      optional: null
    }, b = S.OptionalIndexedAccessType;
    return o(b.objectType, h, "objectType", p, 1), o(b.indexType, h, "indexType", f, 1), h;
  }
  function Bs(p, f = null) {
    const h = {
      type: "JSXAttribute",
      name: p,
      value: f
    }, b = S.JSXAttribute;
    return o(b.name, h, "name", p, 1), o(b.value, h, "value", f, 1), h;
  }
  function Fs(p) {
    const f = {
      type: "JSXClosingElement",
      name: p
    }, h = S.JSXClosingElement;
    return o(h.name, f, "name", p, 1), f;
  }
  function lr(p, f = null, h, b = null) {
    const N = {
      type: "JSXElement",
      openingElement: p,
      closingElement: f,
      children: h,
      selfClosing: b
    }, _ = S.JSXElement;
    return o(_.openingElement, N, "openingElement", p, 1), o(_.closingElement, N, "closingElement", f, 1), o(_.children, N, "children", h, 1), o(_.selfClosing, N, "selfClosing", b), N;
  }
  function Rs() {
    return {
      type: "JSXEmptyExpression"
    };
  }
  function ur(p) {
    const f = {
      type: "JSXExpressionContainer",
      expression: p
    }, h = S.JSXExpressionContainer;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function cr(p) {
    const f = {
      type: "JSXSpreadChild",
      expression: p
    }, h = S.JSXSpreadChild;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function js(p) {
    const f = {
      type: "JSXIdentifier",
      name: p
    }, h = S.JSXIdentifier;
    return o(h.name, f, "name", p), f;
  }
  function Us(p, f) {
    const h = {
      type: "JSXMemberExpression",
      object: p,
      property: f
    }, b = S.JSXMemberExpression;
    return o(b.object, h, "object", p, 1), o(b.property, h, "property", f, 1), h;
  }
  function pr(p, f) {
    const h = {
      type: "JSXNamespacedName",
      namespace: p,
      name: f
    }, b = S.JSXNamespacedName;
    return o(b.namespace, h, "namespace", p, 1), o(b.name, h, "name", f, 1), h;
  }
  function fr(p, f, h = !1) {
    const b = {
      type: "JSXOpeningElement",
      name: p,
      attributes: f,
      selfClosing: h
    }, N = S.JSXOpeningElement;
    return o(N.name, b, "name", p, 1), o(N.attributes, b, "attributes", f, 1), o(N.selfClosing, b, "selfClosing", h), b;
  }
  function Ks(p) {
    const f = {
      type: "JSXSpreadAttribute",
      argument: p
    }, h = S.JSXSpreadAttribute;
    return o(h.argument, f, "argument", p, 1), f;
  }
  function dr(p) {
    const f = {
      type: "JSXText",
      value: p
    }, h = S.JSXText;
    return o(h.value, f, "value", p), f;
  }
  function Vs(p, f, h) {
    const b = {
      type: "JSXFragment",
      openingFragment: p,
      closingFragment: f,
      children: h
    }, N = S.JSXFragment;
    return o(N.openingFragment, b, "openingFragment", p, 1), o(N.closingFragment, b, "closingFragment", f, 1), o(N.children, b, "children", h, 1), b;
  }
  function qs() {
    return {
      type: "JSXOpeningFragment"
    };
  }
  function Vt() {
    return {
      type: "JSXClosingFragment"
    };
  }
  function Js() {
    return {
      type: "Noop"
    };
  }
  function Ys(p, f) {
    const h = {
      type: "Placeholder",
      expectedNode: p,
      name: f
    }, b = S.Placeholder;
    return o(b.expectedNode, h, "expectedNode", p), o(b.name, h, "name", f, 1), h;
  }
  function qt(p) {
    const f = {
      type: "V8IntrinsicIdentifier",
      name: p
    }, h = S.V8IntrinsicIdentifier;
    return o(h.name, f, "name", p), f;
  }
  function Xs() {
    return {
      type: "ArgumentPlaceholder"
    };
  }
  function $s(p, f) {
    const h = {
      type: "BindExpression",
      object: p,
      callee: f
    }, b = S.BindExpression;
    return o(b.object, h, "object", p, 1), o(b.callee, h, "callee", f, 1), h;
  }
  function hr(p) {
    const f = {
      type: "Decorator",
      expression: p
    }, h = S.Decorator;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function Ws(p, f = !1) {
    const h = {
      type: "DoExpression",
      body: p,
      async: f
    }, b = S.DoExpression;
    return o(b.body, h, "body", p, 1), o(b.async, h, "async", f), h;
  }
  function zs(p) {
    const f = {
      type: "ExportDefaultSpecifier",
      exported: p
    }, h = S.ExportDefaultSpecifier;
    return o(h.exported, f, "exported", p, 1), f;
  }
  function Hs(p) {
    const f = {
      type: "RecordExpression",
      properties: p
    }, h = S.RecordExpression;
    return o(h.properties, f, "properties", p, 1), f;
  }
  function Gs(p = []) {
    const f = {
      type: "TupleExpression",
      elements: p
    }, h = S.TupleExpression;
    return o(h.elements, f, "elements", p, 1), f;
  }
  function ot(p) {
    const f = {
      type: "DecimalLiteral",
      value: p
    }, h = S.DecimalLiteral;
    return o(h.value, f, "value", p), f;
  }
  function yr(p) {
    const f = {
      type: "ModuleExpression",
      body: p
    }, h = S.ModuleExpression;
    return o(h.body, f, "body", p, 1), f;
  }
  function Qs() {
    return {
      type: "TopicReference"
    };
  }
  function y(p) {
    const f = {
      type: "PipelineTopicExpression",
      expression: p
    }, h = S.PipelineTopicExpression;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function t(p) {
    const f = {
      type: "PipelineBareFunction",
      callee: p
    }, h = S.PipelineBareFunction;
    return o(h.callee, f, "callee", p, 1), f;
  }
  function e() {
    return {
      type: "PipelinePrimaryTopicReference"
    };
  }
  function r() {
    return {
      type: "VoidPattern"
    };
  }
  function i(p) {
    const f = {
      type: "TSParameterProperty",
      parameter: p
    }, h = S.TSParameterProperty;
    return o(h.parameter, f, "parameter", p, 1), f;
  }
  function u(p = null, f = null, h, b = null) {
    const N = {
      type: "TSDeclareFunction",
      id: p,
      typeParameters: f,
      params: h,
      returnType: b
    }, _ = S.TSDeclareFunction;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.params, N, "params", h, 1), o(_.returnType, N, "returnType", b, 1), N;
  }
  function T(p = null, f, h = null, b, N = null) {
    const _ = {
      type: "TSDeclareMethod",
      decorators: p,
      key: f,
      typeParameters: h,
      params: b,
      returnType: N
    }, ee = S.TSDeclareMethod;
    return o(ee.decorators, _, "decorators", p, 1), o(ee.key, _, "key", f, 1), o(ee.typeParameters, _, "typeParameters", h, 1), o(ee.params, _, "params", b, 1), o(ee.returnType, _, "returnType", N, 1), _;
  }
  function P(p, f) {
    const h = {
      type: "TSQualifiedName",
      left: p,
      right: f
    }, b = S.TSQualifiedName;
    return o(b.left, h, "left", p, 1), o(b.right, h, "right", f, 1), h;
  }
  function g(p = null, f, h = null) {
    const b = {
      type: "TSCallSignatureDeclaration",
      typeParameters: p,
      parameters: f,
      typeAnnotation: h
    }, N = S.TSCallSignatureDeclaration;
    return o(N.typeParameters, b, "typeParameters", p, 1), o(N.parameters, b, "parameters", f, 1), o(N.typeAnnotation, b, "typeAnnotation", h, 1), b;
  }
  function C(p = null, f, h = null) {
    const b = {
      type: "TSConstructSignatureDeclaration",
      typeParameters: p,
      parameters: f,
      typeAnnotation: h
    }, N = S.TSConstructSignatureDeclaration;
    return o(N.typeParameters, b, "typeParameters", p, 1), o(N.parameters, b, "parameters", f, 1), o(N.typeAnnotation, b, "typeAnnotation", h, 1), b;
  }
  function D(p, f = null) {
    const h = {
      type: "TSPropertySignature",
      key: p,
      typeAnnotation: f
    }, b = S.TSPropertySignature;
    return o(b.key, h, "key", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function B(p, f = null, h, b = null) {
    const N = {
      type: "TSMethodSignature",
      key: p,
      typeParameters: f,
      parameters: h,
      typeAnnotation: b,
      kind: null
    }, _ = S.TSMethodSignature;
    return o(_.key, N, "key", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.parameters, N, "parameters", h, 1), o(_.typeAnnotation, N, "typeAnnotation", b, 1), N;
  }
  function J(p, f = null) {
    const h = {
      type: "TSIndexSignature",
      parameters: p,
      typeAnnotation: f
    }, b = S.TSIndexSignature;
    return o(b.parameters, h, "parameters", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function X() {
    return {
      type: "TSAnyKeyword"
    };
  }
  function G() {
    return {
      type: "TSBooleanKeyword"
    };
  }
  function de() {
    return {
      type: "TSBigIntKeyword"
    };
  }
  function Pe() {
    return {
      type: "TSIntrinsicKeyword"
    };
  }
  function oe() {
    return {
      type: "TSNeverKeyword"
    };
  }
  function xe() {
    return {
      type: "TSNullKeyword"
    };
  }
  function We() {
    return {
      type: "TSNumberKeyword"
    };
  }
  function qe() {
    return {
      type: "TSObjectKeyword"
    };
  }
  function mr() {
    return {
      type: "TSStringKeyword"
    };
  }
  function Tr() {
    return {
      type: "TSSymbolKeyword"
    };
  }
  function Sr() {
    return {
      type: "TSUndefinedKeyword"
    };
  }
  function xr() {
    return {
      type: "TSUnknownKeyword"
    };
  }
  function br() {
    return {
      type: "TSVoidKeyword"
    };
  }
  function Pr() {
    return {
      type: "TSThisType"
    };
  }
  function Er(p = null, f, h = null) {
    const b = {
      type: "TSFunctionType",
      typeParameters: p,
      parameters: f,
      typeAnnotation: h
    }, N = S.TSFunctionType;
    return o(N.typeParameters, b, "typeParameters", p, 1), o(N.parameters, b, "parameters", f, 1), o(N.typeAnnotation, b, "typeAnnotation", h, 1), b;
  }
  function Ar(p = null, f, h = null) {
    const b = {
      type: "TSConstructorType",
      typeParameters: p,
      parameters: f,
      typeAnnotation: h
    }, N = S.TSConstructorType;
    return o(N.typeParameters, b, "typeParameters", p, 1), o(N.parameters, b, "parameters", f, 1), o(N.typeAnnotation, b, "typeAnnotation", h, 1), b;
  }
  function gr(p, f = null) {
    const h = {
      type: "TSTypeReference",
      typeName: p,
      typeParameters: f
    }, b = S.TSTypeReference;
    return o(b.typeName, h, "typeName", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function vr(p, f = null, h = null) {
    const b = {
      type: "TSTypePredicate",
      parameterName: p,
      typeAnnotation: f,
      asserts: h
    }, N = S.TSTypePredicate;
    return o(N.parameterName, b, "parameterName", p, 1), o(N.typeAnnotation, b, "typeAnnotation", f, 1), o(N.asserts, b, "asserts", h), b;
  }
  function Ir(p, f = null) {
    const h = {
      type: "TSTypeQuery",
      exprName: p,
      typeParameters: f
    }, b = S.TSTypeQuery;
    return o(b.exprName, h, "exprName", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function Nr(p) {
    const f = {
      type: "TSTypeLiteral",
      members: p
    }, h = S.TSTypeLiteral;
    return o(h.members, f, "members", p, 1), f;
  }
  function Cr(p) {
    const f = {
      type: "TSArrayType",
      elementType: p
    }, h = S.TSArrayType;
    return o(h.elementType, f, "elementType", p, 1), f;
  }
  function wr(p) {
    const f = {
      type: "TSTupleType",
      elementTypes: p
    }, h = S.TSTupleType;
    return o(h.elementTypes, f, "elementTypes", p, 1), f;
  }
  function Or(p) {
    const f = {
      type: "TSOptionalType",
      typeAnnotation: p
    }, h = S.TSOptionalType;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function Dr(p) {
    const f = {
      type: "TSRestType",
      typeAnnotation: p
    }, h = S.TSRestType;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function Lr(p, f, h = !1) {
    const b = {
      type: "TSNamedTupleMember",
      label: p,
      elementType: f,
      optional: h
    }, N = S.TSNamedTupleMember;
    return o(N.label, b, "label", p, 1), o(N.elementType, b, "elementType", f, 1), o(N.optional, b, "optional", h), b;
  }
  function kr(p) {
    const f = {
      type: "TSUnionType",
      types: p
    }, h = S.TSUnionType;
    return o(h.types, f, "types", p, 1), f;
  }
  function Mr(p) {
    const f = {
      type: "TSIntersectionType",
      types: p
    }, h = S.TSIntersectionType;
    return o(h.types, f, "types", p, 1), f;
  }
  function _r(p, f, h, b) {
    const N = {
      type: "TSConditionalType",
      checkType: p,
      extendsType: f,
      trueType: h,
      falseType: b
    }, _ = S.TSConditionalType;
    return o(_.checkType, N, "checkType", p, 1), o(_.extendsType, N, "extendsType", f, 1), o(_.trueType, N, "trueType", h, 1), o(_.falseType, N, "falseType", b, 1), N;
  }
  function Br(p) {
    const f = {
      type: "TSInferType",
      typeParameter: p
    }, h = S.TSInferType;
    return o(h.typeParameter, f, "typeParameter", p, 1), f;
  }
  function Fr(p) {
    const f = {
      type: "TSParenthesizedType",
      typeAnnotation: p
    }, h = S.TSParenthesizedType;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function Rr(p, f = "keyof") {
    const h = {
      type: "TSTypeOperator",
      typeAnnotation: p,
      operator: f
    }, b = S.TSTypeOperator;
    return o(b.typeAnnotation, h, "typeAnnotation", p, 1), o(b.operator, h, "operator", f), h;
  }
  function jr(p, f) {
    const h = {
      type: "TSIndexedAccessType",
      objectType: p,
      indexType: f
    }, b = S.TSIndexedAccessType;
    return o(b.objectType, h, "objectType", p, 1), o(b.indexType, h, "indexType", f, 1), h;
  }
  function Ur(p, f = null, h = null) {
    const b = {
      type: "TSMappedType",
      typeParameter: p,
      typeAnnotation: f,
      nameType: h
    }, N = S.TSMappedType;
    return o(N.typeParameter, b, "typeParameter", p, 1), o(N.typeAnnotation, b, "typeAnnotation", f, 1), o(N.nameType, b, "nameType", h, 1), b;
  }
  function Kr(p, f) {
    const h = {
      type: "TSTemplateLiteralType",
      quasis: p,
      types: f
    }, b = S.TSTemplateLiteralType;
    return o(b.quasis, h, "quasis", p, 1), o(b.types, h, "types", f, 1), h;
  }
  function Vr(p) {
    const f = {
      type: "TSLiteralType",
      literal: p
    }, h = S.TSLiteralType;
    return o(h.literal, f, "literal", p, 1), f;
  }
  function qr(p, f = null) {
    const h = {
      type: "TSExpressionWithTypeArguments",
      expression: p,
      typeParameters: f
    }, b = S.TSExpressionWithTypeArguments;
    return o(b.expression, h, "expression", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function Jr(p, f = null, h = null, b) {
    const N = {
      type: "TSInterfaceDeclaration",
      id: p,
      typeParameters: f,
      extends: h,
      body: b
    }, _ = S.TSInterfaceDeclaration;
    return o(_.id, N, "id", p, 1), o(_.typeParameters, N, "typeParameters", f, 1), o(_.extends, N, "extends", h, 1), o(_.body, N, "body", b, 1), N;
  }
  function Yr(p) {
    const f = {
      type: "TSInterfaceBody",
      body: p
    }, h = S.TSInterfaceBody;
    return o(h.body, f, "body", p, 1), f;
  }
  function oi(p, f = null, h) {
    const b = {
      type: "TSTypeAliasDeclaration",
      id: p,
      typeParameters: f,
      typeAnnotation: h
    }, N = S.TSTypeAliasDeclaration;
    return o(N.id, b, "id", p, 1), o(N.typeParameters, b, "typeParameters", f, 1), o(N.typeAnnotation, b, "typeAnnotation", h, 1), b;
  }
  function li(p, f = null) {
    const h = {
      type: "TSInstantiationExpression",
      expression: p,
      typeParameters: f
    }, b = S.TSInstantiationExpression;
    return o(b.expression, h, "expression", p, 1), o(b.typeParameters, h, "typeParameters", f, 1), h;
  }
  function ui(p, f) {
    const h = {
      type: "TSAsExpression",
      expression: p,
      typeAnnotation: f
    }, b = S.TSAsExpression;
    return o(b.expression, h, "expression", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function ci(p, f) {
    const h = {
      type: "TSSatisfiesExpression",
      expression: p,
      typeAnnotation: f
    }, b = S.TSSatisfiesExpression;
    return o(b.expression, h, "expression", p, 1), o(b.typeAnnotation, h, "typeAnnotation", f, 1), h;
  }
  function pi(p, f) {
    const h = {
      type: "TSTypeAssertion",
      typeAnnotation: p,
      expression: f
    }, b = S.TSTypeAssertion;
    return o(b.typeAnnotation, h, "typeAnnotation", p, 1), o(b.expression, h, "expression", f, 1), h;
  }
  function fi(p) {
    const f = {
      type: "TSEnumBody",
      members: p
    }, h = S.TSEnumBody;
    return o(h.members, f, "members", p, 1), f;
  }
  function di(p, f) {
    const h = {
      type: "TSEnumDeclaration",
      id: p,
      members: f
    }, b = S.TSEnumDeclaration;
    return o(b.id, h, "id", p, 1), o(b.members, h, "members", f, 1), h;
  }
  function hi(p, f = null) {
    const h = {
      type: "TSEnumMember",
      id: p,
      initializer: f
    }, b = S.TSEnumMember;
    return o(b.id, h, "id", p, 1), o(b.initializer, h, "initializer", f, 1), h;
  }
  function yi(p, f) {
    const h = {
      type: "TSModuleDeclaration",
      id: p,
      body: f,
      kind: null
    }, b = S.TSModuleDeclaration;
    return o(b.id, h, "id", p, 1), o(b.body, h, "body", f, 1), h;
  }
  function mi(p) {
    const f = {
      type: "TSModuleBlock",
      body: p
    }, h = S.TSModuleBlock;
    return o(h.body, f, "body", p, 1), f;
  }
  function Ti(p, f = null, h = null) {
    const b = {
      type: "TSImportType",
      argument: p,
      qualifier: f,
      typeParameters: h
    }, N = S.TSImportType;
    return o(N.argument, b, "argument", p, 1), o(N.qualifier, b, "qualifier", f, 1), o(N.typeParameters, b, "typeParameters", h, 1), b;
  }
  function Si(p, f) {
    const h = {
      type: "TSImportEqualsDeclaration",
      id: p,
      moduleReference: f,
      isExport: null
    }, b = S.TSImportEqualsDeclaration;
    return o(b.id, h, "id", p, 1), o(b.moduleReference, h, "moduleReference", f, 1), h;
  }
  function xi(p) {
    const f = {
      type: "TSExternalModuleReference",
      expression: p
    }, h = S.TSExternalModuleReference;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function bi(p) {
    const f = {
      type: "TSNonNullExpression",
      expression: p
    }, h = S.TSNonNullExpression;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function Pi(p) {
    const f = {
      type: "TSExportAssignment",
      expression: p
    }, h = S.TSExportAssignment;
    return o(h.expression, f, "expression", p, 1), f;
  }
  function Ei(p) {
    const f = {
      type: "TSNamespaceExportDeclaration",
      id: p
    }, h = S.TSNamespaceExportDeclaration;
    return o(h.id, f, "id", p, 1), f;
  }
  function Ai(p) {
    const f = {
      type: "TSTypeAnnotation",
      typeAnnotation: p
    }, h = S.TSTypeAnnotation;
    return o(h.typeAnnotation, f, "typeAnnotation", p, 1), f;
  }
  function gi(p) {
    const f = {
      type: "TSTypeParameterInstantiation",
      params: p
    }, h = S.TSTypeParameterInstantiation;
    return o(h.params, f, "params", p, 1), f;
  }
  function vi(p) {
    const f = {
      type: "TSTypeParameterDeclaration",
      params: p
    }, h = S.TSTypeParameterDeclaration;
    return o(h.params, f, "params", p, 1), f;
  }
  function Ii(p = null, f = null, h) {
    const b = {
      type: "TSTypeParameter",
      constraint: p,
      default: f,
      name: h
    }, N = S.TSTypeParameter;
    return o(N.constraint, b, "constraint", p, 1), o(N.default, b, "default", f, 1), o(N.name, b, "name", h), b;
  }
  function Ni(p) {
    return (0, l.default)("NumberLiteral", "NumericLiteral", "The node type "), Je(p);
  }
  function Ci(p, f = "") {
    return (0, l.default)("RegexLiteral", "RegExpLiteral", "The node type "), W(p, f);
  }
  function wi(p) {
    return (0, l.default)("RestProperty", "RestElement", "The node type "), De(p);
  }
  function Oi(p) {
    return (0, l.default)("SpreadProperty", "SpreadElement", "The node type "), Xt(p);
  }
  return E;
}
var m = {}, Fo;
function Bu() {
  if (Fo) return m;
  Fo = 1, Object.defineProperty(m, "__esModule", {
    value: !0
  }), m.JSXIdentifier = m.JSXFragment = m.JSXExpressionContainer = m.JSXEmptyExpression = m.JSXElement = m.JSXClosingFragment = m.JSXClosingElement = m.JSXAttribute = m.IntersectionTypeAnnotation = m.InterpreterDirective = m.InterfaceTypeAnnotation = m.InterfaceExtends = m.InterfaceDeclaration = m.InferredPredicate = m.IndexedAccessType = m.ImportSpecifier = m.ImportNamespaceSpecifier = m.ImportExpression = m.ImportDefaultSpecifier = m.ImportDeclaration = m.ImportAttribute = m.Import = m.IfStatement = m.Identifier = m.GenericTypeAnnotation = m.FunctionTypeParam = m.FunctionTypeAnnotation = m.FunctionExpression = m.FunctionDeclaration = m.ForStatement = m.ForOfStatement = m.ForInStatement = m.File = m.ExpressionStatement = m.ExportSpecifier = m.ExportNamespaceSpecifier = m.ExportNamedDeclaration = m.ExportDefaultSpecifier = m.ExportDefaultDeclaration = m.ExportAllDeclaration = m.ExistsTypeAnnotation = m.EnumSymbolBody = m.EnumStringMember = m.EnumStringBody = m.EnumNumberMember = m.EnumNumberBody = m.EnumDefaultedMember = m.EnumDeclaration = m.EnumBooleanMember = m.EnumBooleanBody = m.EmptyTypeAnnotation = m.EmptyStatement = m.DoWhileStatement = m.DoExpression = m.DirectiveLiteral = m.Directive = m.Decorator = m.DeclaredPredicate = m.DeclareVariable = m.DeclareTypeAlias = m.DeclareOpaqueType = m.DeclareModuleExports = m.DeclareModule = m.DeclareInterface = m.DeclareFunction = m.DeclareExportDeclaration = m.DeclareExportAllDeclaration = m.DeclareClass = m.DecimalLiteral = m.DebuggerStatement = m.ContinueStatement = m.ConditionalExpression = m.ClassProperty = m.ClassPrivateProperty = m.ClassPrivateMethod = m.ClassMethod = m.ClassImplements = m.ClassExpression = m.ClassDeclaration = m.ClassBody = m.ClassAccessorProperty = m.CatchClause = m.CallExpression = m.BreakStatement = m.BooleanTypeAnnotation = m.BooleanLiteralTypeAnnotation = m.BooleanLiteral = m.BlockStatement = m.BindExpression = m.BinaryExpression = m.BigIntLiteral = m.AwaitExpression = m.AssignmentPattern = m.AssignmentExpression = m.ArrowFunctionExpression = m.ArrayTypeAnnotation = m.ArrayPattern = m.ArrayExpression = m.ArgumentPlaceholder = m.AnyTypeAnnotation = void 0, m.TSNumberKeyword = m.TSNullKeyword = m.TSNonNullExpression = m.TSNeverKeyword = m.TSNamespaceExportDeclaration = m.TSNamedTupleMember = m.TSModuleDeclaration = m.TSModuleBlock = m.TSMethodSignature = m.TSMappedType = m.TSLiteralType = m.TSIntrinsicKeyword = m.TSIntersectionType = m.TSInterfaceDeclaration = m.TSInterfaceBody = m.TSInstantiationExpression = m.TSInferType = m.TSIndexedAccessType = m.TSIndexSignature = m.TSImportType = m.TSImportEqualsDeclaration = m.TSFunctionType = m.TSExternalModuleReference = m.TSExpressionWithTypeArguments = m.TSExportAssignment = m.TSEnumMember = m.TSEnumDeclaration = m.TSEnumBody = m.TSDeclareMethod = m.TSDeclareFunction = m.TSConstructorType = m.TSConstructSignatureDeclaration = m.TSConditionalType = m.TSCallSignatureDeclaration = m.TSBooleanKeyword = m.TSBigIntKeyword = m.TSAsExpression = m.TSArrayType = m.TSAnyKeyword = m.SymbolTypeAnnotation = m.SwitchStatement = m.SwitchCase = m.Super = m.StringTypeAnnotation = m.StringLiteralTypeAnnotation = m.StringLiteral = m.StaticBlock = m.SpreadProperty = m.SpreadElement = m.SequenceExpression = m.ReturnStatement = m.RestProperty = m.RestElement = m.RegexLiteral = m.RegExpLiteral = m.RecordExpression = m.QualifiedTypeIdentifier = m.Program = m.PrivateName = m.Placeholder = m.PipelineTopicExpression = m.PipelinePrimaryTopicReference = m.PipelineBareFunction = m.ParenthesizedExpression = m.OptionalMemberExpression = m.OptionalIndexedAccessType = m.OptionalCallExpression = m.OpaqueType = m.ObjectTypeSpreadProperty = m.ObjectTypeProperty = m.ObjectTypeInternalSlot = m.ObjectTypeIndexer = m.ObjectTypeCallProperty = m.ObjectTypeAnnotation = m.ObjectProperty = m.ObjectPattern = m.ObjectMethod = m.ObjectExpression = m.NumericLiteral = m.NumberTypeAnnotation = m.NumberLiteralTypeAnnotation = m.NumberLiteral = m.NullableTypeAnnotation = m.NullLiteralTypeAnnotation = m.NullLiteral = m.Noop = m.NewExpression = m.ModuleExpression = m.MixedTypeAnnotation = m.MetaProperty = m.MemberExpression = m.LogicalExpression = m.LabeledStatement = m.JSXText = m.JSXSpreadChild = m.JSXSpreadAttribute = m.JSXOpeningFragment = m.JSXOpeningElement = m.JSXNamespacedName = m.JSXMemberExpression = void 0, m.YieldExpression = m.WithStatement = m.WhileStatement = m.VoidTypeAnnotation = m.VoidPattern = m.Variance = m.VariableDeclarator = m.VariableDeclaration = m.V8IntrinsicIdentifier = m.UpdateExpression = m.UnionTypeAnnotation = m.UnaryExpression = m.TypeofTypeAnnotation = m.TypeParameterInstantiation = m.TypeParameterDeclaration = m.TypeParameter = m.TypeCastExpression = m.TypeAnnotation = m.TypeAlias = m.TupleTypeAnnotation = m.TupleExpression = m.TryStatement = m.TopicReference = m.ThrowStatement = m.ThisTypeAnnotation = m.ThisExpression = m.TemplateLiteral = m.TemplateElement = m.TaggedTemplateExpression = m.TSVoidKeyword = m.TSUnknownKeyword = m.TSUnionType = m.TSUndefinedKeyword = m.TSTypeReference = m.TSTypeQuery = m.TSTypePredicate = m.TSTypeParameterInstantiation = m.TSTypeParameterDeclaration = m.TSTypeParameter = m.TSTypeOperator = m.TSTypeLiteral = m.TSTypeAssertion = m.TSTypeAnnotation = m.TSTypeAliasDeclaration = m.TSTupleType = m.TSThisType = m.TSTemplateLiteralType = m.TSSymbolKeyword = m.TSStringKeyword = m.TSSatisfiesExpression = m.TSRestType = m.TSQualifiedName = m.TSPropertySignature = m.TSParenthesizedType = m.TSParameterProperty = m.TSOptionalType = m.TSObjectKeyword = void 0;
  var n = au();
  Ui();
  function l(c) {
    return n[c];
  }
  return m.ArrayExpression = l("arrayExpression"), m.AssignmentExpression = l("assignmentExpression"), m.BinaryExpression = l("binaryExpression"), m.InterpreterDirective = l("interpreterDirective"), m.Directive = l("directive"), m.DirectiveLiteral = l("directiveLiteral"), m.BlockStatement = l("blockStatement"), m.BreakStatement = l("breakStatement"), m.CallExpression = l("callExpression"), m.CatchClause = l("catchClause"), m.ConditionalExpression = l("conditionalExpression"), m.ContinueStatement = l("continueStatement"), m.DebuggerStatement = l("debuggerStatement"), m.DoWhileStatement = l("doWhileStatement"), m.EmptyStatement = l("emptyStatement"), m.ExpressionStatement = l("expressionStatement"), m.File = l("file"), m.ForInStatement = l("forInStatement"), m.ForStatement = l("forStatement"), m.FunctionDeclaration = l("functionDeclaration"), m.FunctionExpression = l("functionExpression"), m.Identifier = l("identifier"), m.IfStatement = l("ifStatement"), m.LabeledStatement = l("labeledStatement"), m.StringLiteral = l("stringLiteral"), m.NumericLiteral = l("numericLiteral"), m.NullLiteral = l("nullLiteral"), m.BooleanLiteral = l("booleanLiteral"), m.RegExpLiteral = l("regExpLiteral"), m.LogicalExpression = l("logicalExpression"), m.MemberExpression = l("memberExpression"), m.NewExpression = l("newExpression"), m.Program = l("program"), m.ObjectExpression = l("objectExpression"), m.ObjectMethod = l("objectMethod"), m.ObjectProperty = l("objectProperty"), m.RestElement = l("restElement"), m.ReturnStatement = l("returnStatement"), m.SequenceExpression = l("sequenceExpression"), m.ParenthesizedExpression = l("parenthesizedExpression"), m.SwitchCase = l("switchCase"), m.SwitchStatement = l("switchStatement"), m.ThisExpression = l("thisExpression"), m.ThrowStatement = l("throwStatement"), m.TryStatement = l("tryStatement"), m.UnaryExpression = l("unaryExpression"), m.UpdateExpression = l("updateExpression"), m.VariableDeclaration = l("variableDeclaration"), m.VariableDeclarator = l("variableDeclarator"), m.WhileStatement = l("whileStatement"), m.WithStatement = l("withStatement"), m.AssignmentPattern = l("assignmentPattern"), m.ArrayPattern = l("arrayPattern"), m.ArrowFunctionExpression = l("arrowFunctionExpression"), m.ClassBody = l("classBody"), m.ClassExpression = l("classExpression"), m.ClassDeclaration = l("classDeclaration"), m.ExportAllDeclaration = l("exportAllDeclaration"), m.ExportDefaultDeclaration = l("exportDefaultDeclaration"), m.ExportNamedDeclaration = l("exportNamedDeclaration"), m.ExportSpecifier = l("exportSpecifier"), m.ForOfStatement = l("forOfStatement"), m.ImportDeclaration = l("importDeclaration"), m.ImportDefaultSpecifier = l("importDefaultSpecifier"), m.ImportNamespaceSpecifier = l("importNamespaceSpecifier"), m.ImportSpecifier = l("importSpecifier"), m.ImportExpression = l("importExpression"), m.MetaProperty = l("metaProperty"), m.ClassMethod = l("classMethod"), m.ObjectPattern = l("objectPattern"), m.SpreadElement = l("spreadElement"), m.Super = l("super"), m.TaggedTemplateExpression = l("taggedTemplateExpression"), m.TemplateElement = l("templateElement"), m.TemplateLiteral = l("templateLiteral"), m.YieldExpression = l("yieldExpression"), m.AwaitExpression = l("awaitExpression"), m.Import = l("import"), m.BigIntLiteral = l("bigIntLiteral"), m.ExportNamespaceSpecifier = l("exportNamespaceSpecifier"), m.OptionalMemberExpression = l("optionalMemberExpression"), m.OptionalCallExpression = l("optionalCallExpression"), m.ClassProperty = l("classProperty"), m.ClassAccessorProperty = l("classAccessorProperty"), m.ClassPrivateProperty = l("classPrivateProperty"), m.ClassPrivateMethod = l("classPrivateMethod"), m.PrivateName = l("privateName"), m.StaticBlock = l("staticBlock"), m.ImportAttribute = l("importAttribute"), m.AnyTypeAnnotation = l("anyTypeAnnotation"), m.ArrayTypeAnnotation = l("arrayTypeAnnotation"), m.BooleanTypeAnnotation = l("booleanTypeAnnotation"), m.BooleanLiteralTypeAnnotation = l("booleanLiteralTypeAnnotation"), m.NullLiteralTypeAnnotation = l("nullLiteralTypeAnnotation"), m.ClassImplements = l("classImplements"), m.DeclareClass = l("declareClass"), m.DeclareFunction = l("declareFunction"), m.DeclareInterface = l("declareInterface"), m.DeclareModule = l("declareModule"), m.DeclareModuleExports = l("declareModuleExports"), m.DeclareTypeAlias = l("declareTypeAlias"), m.DeclareOpaqueType = l("declareOpaqueType"), m.DeclareVariable = l("declareVariable"), m.DeclareExportDeclaration = l("declareExportDeclaration"), m.DeclareExportAllDeclaration = l("declareExportAllDeclaration"), m.DeclaredPredicate = l("declaredPredicate"), m.ExistsTypeAnnotation = l("existsTypeAnnotation"), m.FunctionTypeAnnotation = l("functionTypeAnnotation"), m.FunctionTypeParam = l("functionTypeParam"), m.GenericTypeAnnotation = l("genericTypeAnnotation"), m.InferredPredicate = l("inferredPredicate"), m.InterfaceExtends = l("interfaceExtends"), m.InterfaceDeclaration = l("interfaceDeclaration"), m.InterfaceTypeAnnotation = l("interfaceTypeAnnotation"), m.IntersectionTypeAnnotation = l("intersectionTypeAnnotation"), m.MixedTypeAnnotation = l("mixedTypeAnnotation"), m.EmptyTypeAnnotation = l("emptyTypeAnnotation"), m.NullableTypeAnnotation = l("nullableTypeAnnotation"), m.NumberLiteralTypeAnnotation = l("numberLiteralTypeAnnotation"), m.NumberTypeAnnotation = l("numberTypeAnnotation"), m.ObjectTypeAnnotation = l("objectTypeAnnotation"), m.ObjectTypeInternalSlot = l("objectTypeInternalSlot"), m.ObjectTypeCallProperty = l("objectTypeCallProperty"), m.ObjectTypeIndexer = l("objectTypeIndexer"), m.ObjectTypeProperty = l("objectTypeProperty"), m.ObjectTypeSpreadProperty = l("objectTypeSpreadProperty"), m.OpaqueType = l("opaqueType"), m.QualifiedTypeIdentifier = l("qualifiedTypeIdentifier"), m.StringLiteralTypeAnnotation = l("stringLiteralTypeAnnotation"), m.StringTypeAnnotation = l("stringTypeAnnotation"), m.SymbolTypeAnnotation = l("symbolTypeAnnotation"), m.ThisTypeAnnotation = l("thisTypeAnnotation"), m.TupleTypeAnnotation = l("tupleTypeAnnotation"), m.TypeofTypeAnnotation = l("typeofTypeAnnotation"), m.TypeAlias = l("typeAlias"), m.TypeAnnotation = l("typeAnnotation"), m.TypeCastExpression = l("typeCastExpression"), m.TypeParameter = l("typeParameter"), m.TypeParameterDeclaration = l("typeParameterDeclaration"), m.TypeParameterInstantiation = l("typeParameterInstantiation"), m.UnionTypeAnnotation = l("unionTypeAnnotation"), m.Variance = l("variance"), m.VoidTypeAnnotation = l("voidTypeAnnotation"), m.EnumDeclaration = l("enumDeclaration"), m.EnumBooleanBody = l("enumBooleanBody"), m.EnumNumberBody = l("enumNumberBody"), m.EnumStringBody = l("enumStringBody"), m.EnumSymbolBody = l("enumSymbolBody"), m.EnumBooleanMember = l("enumBooleanMember"), m.EnumNumberMember = l("enumNumberMember"), m.EnumStringMember = l("enumStringMember"), m.EnumDefaultedMember = l("enumDefaultedMember"), m.IndexedAccessType = l("indexedAccessType"), m.OptionalIndexedAccessType = l("optionalIndexedAccessType"), m.JSXAttribute = l("jsxAttribute"), m.JSXClosingElement = l("jsxClosingElement"), m.JSXElement = l("jsxElement"), m.JSXEmptyExpression = l("jsxEmptyExpression"), m.JSXExpressionContainer = l("jsxExpressionContainer"), m.JSXSpreadChild = l("jsxSpreadChild"), m.JSXIdentifier = l("jsxIdentifier"), m.JSXMemberExpression = l("jsxMemberExpression"), m.JSXNamespacedName = l("jsxNamespacedName"), m.JSXOpeningElement = l("jsxOpeningElement"), m.JSXSpreadAttribute = l("jsxSpreadAttribute"), m.JSXText = l("jsxText"), m.JSXFragment = l("jsxFragment"), m.JSXOpeningFragment = l("jsxOpeningFragment"), m.JSXClosingFragment = l("jsxClosingFragment"), m.Noop = l("noop"), m.Placeholder = l("placeholder"), m.V8IntrinsicIdentifier = l("v8IntrinsicIdentifier"), m.ArgumentPlaceholder = l("argumentPlaceholder"), m.BindExpression = l("bindExpression"), m.Decorator = l("decorator"), m.DoExpression = l("doExpression"), m.ExportDefaultSpecifier = l("exportDefaultSpecifier"), m.RecordExpression = l("recordExpression"), m.TupleExpression = l("tupleExpression"), m.DecimalLiteral = l("decimalLiteral"), m.ModuleExpression = l("moduleExpression"), m.TopicReference = l("topicReference"), m.PipelineTopicExpression = l("pipelineTopicExpression"), m.PipelineBareFunction = l("pipelineBareFunction"), m.PipelinePrimaryTopicReference = l("pipelinePrimaryTopicReference"), m.VoidPattern = l("voidPattern"), m.TSParameterProperty = l("tsParameterProperty"), m.TSDeclareFunction = l("tsDeclareFunction"), m.TSDeclareMethod = l("tsDeclareMethod"), m.TSQualifiedName = l("tsQualifiedName"), m.TSCallSignatureDeclaration = l("tsCallSignatureDeclaration"), m.TSConstructSignatureDeclaration = l("tsConstructSignatureDeclaration"), m.TSPropertySignature = l("tsPropertySignature"), m.TSMethodSignature = l("tsMethodSignature"), m.TSIndexSignature = l("tsIndexSignature"), m.TSAnyKeyword = l("tsAnyKeyword"), m.TSBooleanKeyword = l("tsBooleanKeyword"), m.TSBigIntKeyword = l("tsBigIntKeyword"), m.TSIntrinsicKeyword = l("tsIntrinsicKeyword"), m.TSNeverKeyword = l("tsNeverKeyword"), m.TSNullKeyword = l("tsNullKeyword"), m.TSNumberKeyword = l("tsNumberKeyword"), m.TSObjectKeyword = l("tsObjectKeyword"), m.TSStringKeyword = l("tsStringKeyword"), m.TSSymbolKeyword = l("tsSymbolKeyword"), m.TSUndefinedKeyword = l("tsUndefinedKeyword"), m.TSUnknownKeyword = l("tsUnknownKeyword"), m.TSVoidKeyword = l("tsVoidKeyword"), m.TSThisType = l("tsThisType"), m.TSFunctionType = l("tsFunctionType"), m.TSConstructorType = l("tsConstructorType"), m.TSTypeReference = l("tsTypeReference"), m.TSTypePredicate = l("tsTypePredicate"), m.TSTypeQuery = l("tsTypeQuery"), m.TSTypeLiteral = l("tsTypeLiteral"), m.TSArrayType = l("tsArrayType"), m.TSTupleType = l("tsTupleType"), m.TSOptionalType = l("tsOptionalType"), m.TSRestType = l("tsRestType"), m.TSNamedTupleMember = l("tsNamedTupleMember"), m.TSUnionType = l("tsUnionType"), m.TSIntersectionType = l("tsIntersectionType"), m.TSConditionalType = l("tsConditionalType"), m.TSInferType = l("tsInferType"), m.TSParenthesizedType = l("tsParenthesizedType"), m.TSTypeOperator = l("tsTypeOperator"), m.TSIndexedAccessType = l("tsIndexedAccessType"), m.TSMappedType = l("tsMappedType"), m.TSTemplateLiteralType = l("tsTemplateLiteralType"), m.TSLiteralType = l("tsLiteralType"), m.TSExpressionWithTypeArguments = l("tsExpressionWithTypeArguments"), m.TSInterfaceDeclaration = l("tsInterfaceDeclaration"), m.TSInterfaceBody = l("tsInterfaceBody"), m.TSTypeAliasDeclaration = l("tsTypeAliasDeclaration"), m.TSInstantiationExpression = l("tsInstantiationExpression"), m.TSAsExpression = l("tsAsExpression"), m.TSSatisfiesExpression = l("tsSatisfiesExpression"), m.TSTypeAssertion = l("tsTypeAssertion"), m.TSEnumBody = l("tsEnumBody"), m.TSEnumDeclaration = l("tsEnumDeclaration"), m.TSEnumMember = l("tsEnumMember"), m.TSModuleDeclaration = l("tsModuleDeclaration"), m.TSModuleBlock = l("tsModuleBlock"), m.TSImportType = l("tsImportType"), m.TSImportEqualsDeclaration = l("tsImportEqualsDeclaration"), m.TSExternalModuleReference = l("tsExternalModuleReference"), m.TSNonNullExpression = l("tsNonNullExpression"), m.TSExportAssignment = l("tsExportAssignment"), m.TSNamespaceExportDeclaration = l("tsNamespaceExportDeclaration"), m.TSTypeAnnotation = l("tsTypeAnnotation"), m.TSTypeParameterInstantiation = l("tsTypeParameterInstantiation"), m.TSTypeParameterDeclaration = l("tsTypeParameterDeclaration"), m.TSTypeParameter = l("tsTypeParameter"), m.NumberLiteral = n.numberLiteral, m.RegexLiteral = n.regexLiteral, m.RestProperty = n.restProperty, m.SpreadProperty = n.spreadProperty, m;
}
var Ro;
function ze() {
  return Ro || (Ro = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var l = au();
    Object.keys(l).forEach(function(o) {
      o === "default" || o === "__esModule" || o in n && n[o] === l[o] || Object.defineProperty(n, o, {
        enumerable: !0,
        get: function() {
          return l[o];
        }
      });
    });
    var c = Bu();
    Object.keys(c).forEach(function(o) {
      o === "default" || o === "__esModule" || o in n && n[o] === c[o] || Object.defineProperty(n, o, {
        enumerable: !0,
        get: function() {
          return c[o];
        }
      });
    });
  })(Kn)), Kn;
}
var jo;
function Fu() {
  if (jo) return Qi;
  jo = 1, Object.defineProperty(Qi, "__esModule", {
    value: !0
  }), Qi.default = c;
  var n = ze(), l = to();
  function c(o, S) {
    const x = o.value.split(/\r\n|\n|\r/);
    let M = 0;
    for (let L = 0; L < x.length; L++)
      /[^ \t]/.exec(x[L]) && (M = L);
    let w = "";
    for (let L = 0; L < x.length; L++) {
      const k = x[L], O = L === 0, F = L === x.length - 1, j = L === M;
      let R = k.replace(/\t/g, " ");
      O || (R = R.replace(/^ +/, "")), F || (R = R.replace(/ +$/, "")), R && (j || (R += " "), w += R);
    }
    w && S.push((0, l.inherits)((0, n.stringLiteral)(w), o));
  }
  return Qi;
}
var Uo;
function Ru() {
  if (Uo) return Gi;
  Uo = 1, Object.defineProperty(Gi, "__esModule", {
    value: !0
  }), Gi.default = c;
  var n = we(), l = Fu();
  function c(o) {
    const S = [];
    for (let x = 0; x < o.children.length; x++) {
      let M = o.children[x];
      if ((0, n.isJSXText)(M)) {
        (0, l.default)(M, S);
        continue;
      }
      (0, n.isJSXExpressionContainer)(M) && (M = M.expression), !(0, n.isJSXEmptyExpression)(M) && S.push(M);
    }
    return S;
  }
  return Gi;
}
var sa = {}, ia = {}, Ko;
function nu() {
  if (Ko) return ia;
  Ko = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = l;
  var n = lt();
  function l(c) {
    return !!(c && n.VISITOR_KEYS[c.type]);
  }
  return ia;
}
var Vo;
function ju() {
  if (Vo) return sa;
  Vo = 1, Object.defineProperty(sa, "__esModule", {
    value: !0
  }), sa.default = l;
  var n = nu();
  function l(c) {
    if (!(0, n.default)(c)) {
      var o;
      const S = (o = c?.type) != null ? o : JSON.stringify(c);
      throw new TypeError(`Not a valid node of type "${S}"`);
    }
  }
  return sa;
}
var I = {}, qo;
function Uu() {
  if (qo) return I;
  qo = 1, Object.defineProperty(I, "__esModule", {
    value: !0
  }), I.assertAccessor = bn, I.assertAnyTypeAnnotation = ie, I.assertArgumentPlaceholder = Ys, I.assertArrayExpression = o, I.assertArrayPattern = st, I.assertArrayTypeAnnotation = ss, I.assertArrowFunctionExpression = At, I.assertAssignmentExpression = S, I.assertAssignmentPattern = Et, I.assertAwaitExpression = $t, I.assertBigIntLiteral = zt, I.assertBinary = Ni, I.assertBinaryExpression = x, I.assertBindExpression = qt, I.assertBlock = Oi, I.assertBlockParent = wi, I.assertBlockStatement = k, I.assertBooleanLiteral = Me, I.assertBooleanLiteralTypeAnnotation = is, I.assertBooleanTypeAnnotation = Gt, I.assertBreakStatement = O, I.assertCallExpression = F, I.assertCatchClause = j, I.assertClass = Yi, I.assertClassAccessorProperty = Zr, I.assertClassBody = gt, I.assertClassDeclaration = It, I.assertClassExpression = vt, I.assertClassImplements = ns, I.assertClassMethod = $r, I.assertClassPrivateMethod = Mt, I.assertClassPrivateProperty = kt, I.assertClassProperty = Qr, I.assertCompletionStatement = h, I.assertConditional = b, I.assertConditionalExpression = R, I.assertContinueStatement = Z, I.assertDebuggerStatement = K, I.assertDecimalLiteral = Hs, I.assertDeclaration = sn, I.assertDeclareClass = os, I.assertDeclareExportAllDeclaration = $e, I.assertDeclareExportDeclaration = cs, I.assertDeclareFunction = ls, I.assertDeclareInterface = us, I.assertDeclareModule = pt, I.assertDeclareModuleExports = Ze, I.assertDeclareOpaqueType = _t, I.assertDeclareTypeAlias = Qt, I.assertDeclareVariable = Bt, I.assertDeclaredPredicate = Ue, I.assertDecorator = Xs, I.assertDirective = w, I.assertDirectiveLiteral = L, I.assertDoExpression = $s, I.assertDoWhileStatement = V, I.assertEmptyStatement = A, I.assertEmptyTypeAnnotation = Ke, I.assertEnumBody = Nn, I.assertEnumBooleanBody = jt, I.assertEnumBooleanMember = Kt, I.assertEnumDeclaration = mt, I.assertEnumDefaultedMember = H, I.assertEnumMember = Cn, I.assertEnumNumberBody = Os, I.assertEnumNumberMember = Ls, I.assertEnumStringBody = Ut, I.assertEnumStringMember = nr, I.assertEnumSymbolBody = Ds, I.assertExistsTypeAnnotation = et, I.assertExportAllDeclaration = Nt, I.assertExportDeclaration = Sn, I.assertExportDefaultDeclaration = Be, I.assertExportDefaultSpecifier = hr, I.assertExportNamedDeclaration = He, I.assertExportNamespaceSpecifier = Ht, I.assertExportSpecifier = Ct, I.assertExpression = Ii, I.assertExpressionStatement = Y, I.assertExpressionWrapper = ee, I.assertFile = te, I.assertFlow = En, I.assertFlowBaseAnnotation = gn, I.assertFlowDeclaration = vn, I.assertFlowPredicate = In, I.assertFlowType = An, I.assertFor = Ae, I.assertForInStatement = se, I.assertForOfStatement = Ge, I.assertForStatement = Te, I.assertForXStatement = Ce, I.assertFunction = tt, I.assertFunctionDeclaration = be, I.assertFunctionExpression = ve, I.assertFunctionParameter = an, I.assertFunctionParent = tn, I.assertFunctionTypeAnnotation = ps, I.assertFunctionTypeParam = fs, I.assertGenericTypeAnnotation = ds, I.assertIdentifier = ge, I.assertIfStatement = ue, I.assertImmutable = cn, I.assertImport = Wt, I.assertImportAttribute = rs, I.assertImportDeclaration = _e, I.assertImportDefaultSpecifier = it, I.assertImportExpression = Ot, I.assertImportNamespaceSpecifier = Qe, I.assertImportOrExportDeclaration = Tn, I.assertImportSpecifier = wt, I.assertIndexedAccessType = ks, I.assertInferredPredicate = hs, I.assertInterfaceDeclaration = ys, I.assertInterfaceExtends = ft, I.assertInterfaceTypeAnnotation = Zt, I.assertInterpreterDirective = M, I.assertIntersectionTypeAnnotation = ms, I.assertJSX = wn, I.assertJSXAttribute = Ms, I.assertJSXClosingElement = _s, I.assertJSXClosingFragment = Vs, I.assertJSXElement = Bs, I.assertJSXEmptyExpression = Fs, I.assertJSXExpressionContainer = lr, I.assertJSXFragment = Ks, I.assertJSXIdentifier = ur, I.assertJSXMemberExpression = cr, I.assertJSXNamespacedName = js, I.assertJSXOpeningElement = Us, I.assertJSXOpeningFragment = dr, I.assertJSXSpreadAttribute = pr, I.assertJSXSpreadChild = Rs, I.assertJSXText = fr, I.assertLVal = on, I.assertLabeledStatement = ae, I.assertLiteral = un, I.assertLogicalExpression = z, I.assertLoop = N, I.assertMemberExpression = ne, I.assertMetaProperty = $, I.assertMethod = fn, I.assertMiscellaneous = On, I.assertMixedTypeAnnotation = at, I.assertModuleDeclaration = a, I.assertModuleExpression = Gs, I.assertModuleSpecifier = xn, I.assertNewExpression = W, I.assertNoop = qs, I.assertNullLiteral = Ne, I.assertNullLiteralTypeAnnotation = as, I.assertNullableTypeAnnotation = Ts, I.assertNumberLiteral = _n, I.assertNumberLiteralTypeAnnotation = Ft, I.assertNumberTypeAnnotation = Ss, I.assertNumericLiteral = je, I.assertObjectExpression = ce, I.assertObjectMember = dn, I.assertObjectMethod = ye, I.assertObjectPattern = Dt, I.assertObjectProperty = Se, I.assertObjectTypeAnnotation = er, I.assertObjectTypeCallProperty = tr, I.assertObjectTypeIndexer = xs, I.assertObjectTypeInternalSlot = dt, I.assertObjectTypeProperty = bs, I.assertObjectTypeSpreadProperty = Rt, I.assertOpaqueType = rr, I.assertOptionalCallExpression = Gr, I.assertOptionalIndexedAccessType = or, I.assertOptionalMemberExpression = Hr, I.assertParenthesizedExpression = De, I.assertPattern = mn, I.assertPatternLike = nn, I.assertPipelineBareFunction = Qs, I.assertPipelinePrimaryTopicReference = y, I.assertPipelineTopicExpression = yr, I.assertPlaceholder = Vt, I.assertPrivate = Pn, I.assertPrivateName = es, I.assertProgram = Q, I.assertProperty = hn, I.assertPureish = rn, I.assertQualifiedTypeIdentifier = sr, I.assertRecordExpression = Ws, I.assertRegExpLiteral = Je, I.assertRegexLiteral = Bn, I.assertRestElement = me, I.assertRestProperty = Fn, I.assertReturnStatement = Ee, I.assertScopable = Ci, I.assertSequenceExpression = Oe, I.assertSpreadElement = Fe, I.assertSpreadProperty = Rn, I.assertStandardized = vi, I.assertStatement = p, I.assertStaticBlock = ts, I.assertStringLiteral = q, I.assertStringLiteralTypeAnnotation = nt, I.assertStringTypeAnnotation = Ps, I.assertSuper = Xe, I.assertSwitchCase = re, I.assertSwitchStatement = le, I.assertSymbolTypeAnnotation = Ve, I.assertTSAnyKeyword = B, I.assertTSArrayType = Ir, I.assertTSAsExpression = oi, I.assertTSBaseType = Mn, I.assertTSBigIntKeyword = X, I.assertTSBooleanKeyword = J, I.assertTSCallSignatureDeclaration = T, I.assertTSConditionalType = kr, I.assertTSConstructSignatureDeclaration = P, I.assertTSConstructorType = Pr, I.assertTSDeclareFunction = r, I.assertTSDeclareMethod = i, I.assertTSEntityName = ln, I.assertTSEnumBody = ci, I.assertTSEnumDeclaration = pi, I.assertTSEnumMember = fi, I.assertTSExportAssignment = xi, I.assertTSExpressionWithTypeArguments = Kr, I.assertTSExternalModuleReference = Ti, I.assertTSFunctionType = br, I.assertTSImportEqualsDeclaration = mi, I.assertTSImportType = yi, I.assertTSIndexSignature = D, I.assertTSIndexedAccessType = Fr, I.assertTSInferType = Mr, I.assertTSInstantiationExpression = Yr, I.assertTSInterfaceBody = qr, I.assertTSInterfaceDeclaration = Vr, I.assertTSIntersectionType = Lr, I.assertTSIntrinsicKeyword = G, I.assertTSLiteralType = Ur, I.assertTSMappedType = Rr, I.assertTSMethodSignature = C, I.assertTSModuleBlock = hi, I.assertTSModuleDeclaration = di, I.assertTSNamedTupleMember = Or, I.assertTSNamespaceExportDeclaration = bi, I.assertTSNeverKeyword = de, I.assertTSNonNullExpression = Si, I.assertTSNullKeyword = Pe, I.assertTSNumberKeyword = oe, I.assertTSObjectKeyword = xe, I.assertTSOptionalType = Cr, I.assertTSParameterProperty = e, I.assertTSParenthesizedType = _r, I.assertTSPropertySignature = g, I.assertTSQualifiedName = u, I.assertTSRestType = wr, I.assertTSSatisfiesExpression = li, I.assertTSStringKeyword = We, I.assertTSSymbolKeyword = qe, I.assertTSTemplateLiteralType = jr, I.assertTSThisType = xr, I.assertTSTupleType = Nr, I.assertTSType = kn, I.assertTSTypeAliasDeclaration = Jr, I.assertTSTypeAnnotation = Pi, I.assertTSTypeAssertion = ui, I.assertTSTypeElement = Ln, I.assertTSTypeLiteral = vr, I.assertTSTypeOperator = Br, I.assertTSTypeParameter = gi, I.assertTSTypeParameterDeclaration = Ai, I.assertTSTypeParameterInstantiation = Ei, I.assertTSTypePredicate = Ar, I.assertTSTypeQuery = gr, I.assertTSTypeReference = Er, I.assertTSUndefinedKeyword = mr, I.assertTSUnionType = Dr, I.assertTSUnknownKeyword = Tr, I.assertTSVoidKeyword = Sr, I.assertTaggedTemplateExpression = Lt, I.assertTemplateElement = Xt, I.assertTemplateLiteral = Wr, I.assertTerminatorless = f, I.assertThisExpression = St, I.assertThisTypeAnnotation = Es, I.assertThrowStatement = pe, I.assertTopicReference = ot, I.assertTryStatement = xt, I.assertTupleExpression = zs, I.assertTupleTypeAnnotation = As, I.assertTypeAlias = ht, I.assertTypeAnnotation = ir, I.assertTypeCastExpression = vs, I.assertTypeParameter = Is, I.assertTypeParameterDeclaration = Ns, I.assertTypeParameterInstantiation = Cs, I.assertTypeScript = Dn, I.assertTypeofTypeAnnotation = gs, I.assertUnaryExpression = Le, I.assertUnaryLike = yn, I.assertUnionTypeAnnotation = ar, I.assertUpdateExpression = ut, I.assertUserWhitespacable = pn, I.assertV8IntrinsicIdentifier = Js, I.assertVariableDeclaration = bt, I.assertVariableDeclarator = Ye, I.assertVariance = ws, I.assertVoidPattern = t, I.assertVoidTypeAnnotation = yt, I.assertWhile = _, I.assertWhileStatement = Pt, I.assertWithStatement = ct, I.assertYieldExpression = zr;
  var n = Ki(), l = Ui();
  function c(s, d, ro) {
    if (!(0, n.default)(s, d, ro))
      throw new Error(`Expected type "${s}" with option ${JSON.stringify(ro)}, but instead got "${d.type}".`);
  }
  function o(s, d) {
    c("ArrayExpression", s, d);
  }
  function S(s, d) {
    c("AssignmentExpression", s, d);
  }
  function x(s, d) {
    c("BinaryExpression", s, d);
  }
  function M(s, d) {
    c("InterpreterDirective", s, d);
  }
  function w(s, d) {
    c("Directive", s, d);
  }
  function L(s, d) {
    c("DirectiveLiteral", s, d);
  }
  function k(s, d) {
    c("BlockStatement", s, d);
  }
  function O(s, d) {
    c("BreakStatement", s, d);
  }
  function F(s, d) {
    c("CallExpression", s, d);
  }
  function j(s, d) {
    c("CatchClause", s, d);
  }
  function R(s, d) {
    c("ConditionalExpression", s, d);
  }
  function Z(s, d) {
    c("ContinueStatement", s, d);
  }
  function K(s, d) {
    c("DebuggerStatement", s, d);
  }
  function V(s, d) {
    c("DoWhileStatement", s, d);
  }
  function A(s, d) {
    c("EmptyStatement", s, d);
  }
  function Y(s, d) {
    c("ExpressionStatement", s, d);
  }
  function te(s, d) {
    c("File", s, d);
  }
  function se(s, d) {
    c("ForInStatement", s, d);
  }
  function Te(s, d) {
    c("ForStatement", s, d);
  }
  function be(s, d) {
    c("FunctionDeclaration", s, d);
  }
  function ve(s, d) {
    c("FunctionExpression", s, d);
  }
  function ge(s, d) {
    c("Identifier", s, d);
  }
  function ue(s, d) {
    c("IfStatement", s, d);
  }
  function ae(s, d) {
    c("LabeledStatement", s, d);
  }
  function q(s, d) {
    c("StringLiteral", s, d);
  }
  function je(s, d) {
    c("NumericLiteral", s, d);
  }
  function Ne(s, d) {
    c("NullLiteral", s, d);
  }
  function Me(s, d) {
    c("BooleanLiteral", s, d);
  }
  function Je(s, d) {
    c("RegExpLiteral", s, d);
  }
  function z(s, d) {
    c("LogicalExpression", s, d);
  }
  function ne(s, d) {
    c("MemberExpression", s, d);
  }
  function W(s, d) {
    c("NewExpression", s, d);
  }
  function Q(s, d) {
    c("Program", s, d);
  }
  function ce(s, d) {
    c("ObjectExpression", s, d);
  }
  function ye(s, d) {
    c("ObjectMethod", s, d);
  }
  function Se(s, d) {
    c("ObjectProperty", s, d);
  }
  function me(s, d) {
    c("RestElement", s, d);
  }
  function Ee(s, d) {
    c("ReturnStatement", s, d);
  }
  function Oe(s, d) {
    c("SequenceExpression", s, d);
  }
  function De(s, d) {
    c("ParenthesizedExpression", s, d);
  }
  function re(s, d) {
    c("SwitchCase", s, d);
  }
  function le(s, d) {
    c("SwitchStatement", s, d);
  }
  function St(s, d) {
    c("ThisExpression", s, d);
  }
  function pe(s, d) {
    c("ThrowStatement", s, d);
  }
  function xt(s, d) {
    c("TryStatement", s, d);
  }
  function Le(s, d) {
    c("UnaryExpression", s, d);
  }
  function ut(s, d) {
    c("UpdateExpression", s, d);
  }
  function bt(s, d) {
    c("VariableDeclaration", s, d);
  }
  function Ye(s, d) {
    c("VariableDeclarator", s, d);
  }
  function Pt(s, d) {
    c("WhileStatement", s, d);
  }
  function ct(s, d) {
    c("WithStatement", s, d);
  }
  function Et(s, d) {
    c("AssignmentPattern", s, d);
  }
  function st(s, d) {
    c("ArrayPattern", s, d);
  }
  function At(s, d) {
    c("ArrowFunctionExpression", s, d);
  }
  function gt(s, d) {
    c("ClassBody", s, d);
  }
  function vt(s, d) {
    c("ClassExpression", s, d);
  }
  function It(s, d) {
    c("ClassDeclaration", s, d);
  }
  function Nt(s, d) {
    c("ExportAllDeclaration", s, d);
  }
  function Be(s, d) {
    c("ExportDefaultDeclaration", s, d);
  }
  function He(s, d) {
    c("ExportNamedDeclaration", s, d);
  }
  function Ct(s, d) {
    c("ExportSpecifier", s, d);
  }
  function Ge(s, d) {
    c("ForOfStatement", s, d);
  }
  function _e(s, d) {
    c("ImportDeclaration", s, d);
  }
  function it(s, d) {
    c("ImportDefaultSpecifier", s, d);
  }
  function Qe(s, d) {
    c("ImportNamespaceSpecifier", s, d);
  }
  function wt(s, d) {
    c("ImportSpecifier", s, d);
  }
  function Ot(s, d) {
    c("ImportExpression", s, d);
  }
  function $(s, d) {
    c("MetaProperty", s, d);
  }
  function $r(s, d) {
    c("ClassMethod", s, d);
  }
  function Dt(s, d) {
    c("ObjectPattern", s, d);
  }
  function Fe(s, d) {
    c("SpreadElement", s, d);
  }
  function Xe(s, d) {
    c("Super", s, d);
  }
  function Lt(s, d) {
    c("TaggedTemplateExpression", s, d);
  }
  function Xt(s, d) {
    c("TemplateElement", s, d);
  }
  function Wr(s, d) {
    c("TemplateLiteral", s, d);
  }
  function zr(s, d) {
    c("YieldExpression", s, d);
  }
  function $t(s, d) {
    c("AwaitExpression", s, d);
  }
  function Wt(s, d) {
    c("Import", s, d);
  }
  function zt(s, d) {
    c("BigIntLiteral", s, d);
  }
  function Ht(s, d) {
    c("ExportNamespaceSpecifier", s, d);
  }
  function Hr(s, d) {
    c("OptionalMemberExpression", s, d);
  }
  function Gr(s, d) {
    c("OptionalCallExpression", s, d);
  }
  function Qr(s, d) {
    c("ClassProperty", s, d);
  }
  function Zr(s, d) {
    c("ClassAccessorProperty", s, d);
  }
  function kt(s, d) {
    c("ClassPrivateProperty", s, d);
  }
  function Mt(s, d) {
    c("ClassPrivateMethod", s, d);
  }
  function es(s, d) {
    c("PrivateName", s, d);
  }
  function ts(s, d) {
    c("StaticBlock", s, d);
  }
  function rs(s, d) {
    c("ImportAttribute", s, d);
  }
  function ie(s, d) {
    c("AnyTypeAnnotation", s, d);
  }
  function ss(s, d) {
    c("ArrayTypeAnnotation", s, d);
  }
  function Gt(s, d) {
    c("BooleanTypeAnnotation", s, d);
  }
  function is(s, d) {
    c("BooleanLiteralTypeAnnotation", s, d);
  }
  function as(s, d) {
    c("NullLiteralTypeAnnotation", s, d);
  }
  function ns(s, d) {
    c("ClassImplements", s, d);
  }
  function os(s, d) {
    c("DeclareClass", s, d);
  }
  function ls(s, d) {
    c("DeclareFunction", s, d);
  }
  function us(s, d) {
    c("DeclareInterface", s, d);
  }
  function pt(s, d) {
    c("DeclareModule", s, d);
  }
  function Ze(s, d) {
    c("DeclareModuleExports", s, d);
  }
  function Qt(s, d) {
    c("DeclareTypeAlias", s, d);
  }
  function _t(s, d) {
    c("DeclareOpaqueType", s, d);
  }
  function Bt(s, d) {
    c("DeclareVariable", s, d);
  }
  function cs(s, d) {
    c("DeclareExportDeclaration", s, d);
  }
  function $e(s, d) {
    c("DeclareExportAllDeclaration", s, d);
  }
  function Ue(s, d) {
    c("DeclaredPredicate", s, d);
  }
  function et(s, d) {
    c("ExistsTypeAnnotation", s, d);
  }
  function ps(s, d) {
    c("FunctionTypeAnnotation", s, d);
  }
  function fs(s, d) {
    c("FunctionTypeParam", s, d);
  }
  function ds(s, d) {
    c("GenericTypeAnnotation", s, d);
  }
  function hs(s, d) {
    c("InferredPredicate", s, d);
  }
  function ft(s, d) {
    c("InterfaceExtends", s, d);
  }
  function ys(s, d) {
    c("InterfaceDeclaration", s, d);
  }
  function Zt(s, d) {
    c("InterfaceTypeAnnotation", s, d);
  }
  function ms(s, d) {
    c("IntersectionTypeAnnotation", s, d);
  }
  function at(s, d) {
    c("MixedTypeAnnotation", s, d);
  }
  function Ke(s, d) {
    c("EmptyTypeAnnotation", s, d);
  }
  function Ts(s, d) {
    c("NullableTypeAnnotation", s, d);
  }
  function Ft(s, d) {
    c("NumberLiteralTypeAnnotation", s, d);
  }
  function Ss(s, d) {
    c("NumberTypeAnnotation", s, d);
  }
  function er(s, d) {
    c("ObjectTypeAnnotation", s, d);
  }
  function dt(s, d) {
    c("ObjectTypeInternalSlot", s, d);
  }
  function tr(s, d) {
    c("ObjectTypeCallProperty", s, d);
  }
  function xs(s, d) {
    c("ObjectTypeIndexer", s, d);
  }
  function bs(s, d) {
    c("ObjectTypeProperty", s, d);
  }
  function Rt(s, d) {
    c("ObjectTypeSpreadProperty", s, d);
  }
  function rr(s, d) {
    c("OpaqueType", s, d);
  }
  function sr(s, d) {
    c("QualifiedTypeIdentifier", s, d);
  }
  function nt(s, d) {
    c("StringLiteralTypeAnnotation", s, d);
  }
  function Ps(s, d) {
    c("StringTypeAnnotation", s, d);
  }
  function Ve(s, d) {
    c("SymbolTypeAnnotation", s, d);
  }
  function Es(s, d) {
    c("ThisTypeAnnotation", s, d);
  }
  function As(s, d) {
    c("TupleTypeAnnotation", s, d);
  }
  function gs(s, d) {
    c("TypeofTypeAnnotation", s, d);
  }
  function ht(s, d) {
    c("TypeAlias", s, d);
  }
  function ir(s, d) {
    c("TypeAnnotation", s, d);
  }
  function vs(s, d) {
    c("TypeCastExpression", s, d);
  }
  function Is(s, d) {
    c("TypeParameter", s, d);
  }
  function Ns(s, d) {
    c("TypeParameterDeclaration", s, d);
  }
  function Cs(s, d) {
    c("TypeParameterInstantiation", s, d);
  }
  function ar(s, d) {
    c("UnionTypeAnnotation", s, d);
  }
  function ws(s, d) {
    c("Variance", s, d);
  }
  function yt(s, d) {
    c("VoidTypeAnnotation", s, d);
  }
  function mt(s, d) {
    c("EnumDeclaration", s, d);
  }
  function jt(s, d) {
    c("EnumBooleanBody", s, d);
  }
  function Os(s, d) {
    c("EnumNumberBody", s, d);
  }
  function Ut(s, d) {
    c("EnumStringBody", s, d);
  }
  function Ds(s, d) {
    c("EnumSymbolBody", s, d);
  }
  function Kt(s, d) {
    c("EnumBooleanMember", s, d);
  }
  function Ls(s, d) {
    c("EnumNumberMember", s, d);
  }
  function nr(s, d) {
    c("EnumStringMember", s, d);
  }
  function H(s, d) {
    c("EnumDefaultedMember", s, d);
  }
  function ks(s, d) {
    c("IndexedAccessType", s, d);
  }
  function or(s, d) {
    c("OptionalIndexedAccessType", s, d);
  }
  function Ms(s, d) {
    c("JSXAttribute", s, d);
  }
  function _s(s, d) {
    c("JSXClosingElement", s, d);
  }
  function Bs(s, d) {
    c("JSXElement", s, d);
  }
  function Fs(s, d) {
    c("JSXEmptyExpression", s, d);
  }
  function lr(s, d) {
    c("JSXExpressionContainer", s, d);
  }
  function Rs(s, d) {
    c("JSXSpreadChild", s, d);
  }
  function ur(s, d) {
    c("JSXIdentifier", s, d);
  }
  function cr(s, d) {
    c("JSXMemberExpression", s, d);
  }
  function js(s, d) {
    c("JSXNamespacedName", s, d);
  }
  function Us(s, d) {
    c("JSXOpeningElement", s, d);
  }
  function pr(s, d) {
    c("JSXSpreadAttribute", s, d);
  }
  function fr(s, d) {
    c("JSXText", s, d);
  }
  function Ks(s, d) {
    c("JSXFragment", s, d);
  }
  function dr(s, d) {
    c("JSXOpeningFragment", s, d);
  }
  function Vs(s, d) {
    c("JSXClosingFragment", s, d);
  }
  function qs(s, d) {
    c("Noop", s, d);
  }
  function Vt(s, d) {
    c("Placeholder", s, d);
  }
  function Js(s, d) {
    c("V8IntrinsicIdentifier", s, d);
  }
  function Ys(s, d) {
    c("ArgumentPlaceholder", s, d);
  }
  function qt(s, d) {
    c("BindExpression", s, d);
  }
  function Xs(s, d) {
    c("Decorator", s, d);
  }
  function $s(s, d) {
    c("DoExpression", s, d);
  }
  function hr(s, d) {
    c("ExportDefaultSpecifier", s, d);
  }
  function Ws(s, d) {
    c("RecordExpression", s, d);
  }
  function zs(s, d) {
    c("TupleExpression", s, d);
  }
  function Hs(s, d) {
    c("DecimalLiteral", s, d);
  }
  function Gs(s, d) {
    c("ModuleExpression", s, d);
  }
  function ot(s, d) {
    c("TopicReference", s, d);
  }
  function yr(s, d) {
    c("PipelineTopicExpression", s, d);
  }
  function Qs(s, d) {
    c("PipelineBareFunction", s, d);
  }
  function y(s, d) {
    c("PipelinePrimaryTopicReference", s, d);
  }
  function t(s, d) {
    c("VoidPattern", s, d);
  }
  function e(s, d) {
    c("TSParameterProperty", s, d);
  }
  function r(s, d) {
    c("TSDeclareFunction", s, d);
  }
  function i(s, d) {
    c("TSDeclareMethod", s, d);
  }
  function u(s, d) {
    c("TSQualifiedName", s, d);
  }
  function T(s, d) {
    c("TSCallSignatureDeclaration", s, d);
  }
  function P(s, d) {
    c("TSConstructSignatureDeclaration", s, d);
  }
  function g(s, d) {
    c("TSPropertySignature", s, d);
  }
  function C(s, d) {
    c("TSMethodSignature", s, d);
  }
  function D(s, d) {
    c("TSIndexSignature", s, d);
  }
  function B(s, d) {
    c("TSAnyKeyword", s, d);
  }
  function J(s, d) {
    c("TSBooleanKeyword", s, d);
  }
  function X(s, d) {
    c("TSBigIntKeyword", s, d);
  }
  function G(s, d) {
    c("TSIntrinsicKeyword", s, d);
  }
  function de(s, d) {
    c("TSNeverKeyword", s, d);
  }
  function Pe(s, d) {
    c("TSNullKeyword", s, d);
  }
  function oe(s, d) {
    c("TSNumberKeyword", s, d);
  }
  function xe(s, d) {
    c("TSObjectKeyword", s, d);
  }
  function We(s, d) {
    c("TSStringKeyword", s, d);
  }
  function qe(s, d) {
    c("TSSymbolKeyword", s, d);
  }
  function mr(s, d) {
    c("TSUndefinedKeyword", s, d);
  }
  function Tr(s, d) {
    c("TSUnknownKeyword", s, d);
  }
  function Sr(s, d) {
    c("TSVoidKeyword", s, d);
  }
  function xr(s, d) {
    c("TSThisType", s, d);
  }
  function br(s, d) {
    c("TSFunctionType", s, d);
  }
  function Pr(s, d) {
    c("TSConstructorType", s, d);
  }
  function Er(s, d) {
    c("TSTypeReference", s, d);
  }
  function Ar(s, d) {
    c("TSTypePredicate", s, d);
  }
  function gr(s, d) {
    c("TSTypeQuery", s, d);
  }
  function vr(s, d) {
    c("TSTypeLiteral", s, d);
  }
  function Ir(s, d) {
    c("TSArrayType", s, d);
  }
  function Nr(s, d) {
    c("TSTupleType", s, d);
  }
  function Cr(s, d) {
    c("TSOptionalType", s, d);
  }
  function wr(s, d) {
    c("TSRestType", s, d);
  }
  function Or(s, d) {
    c("TSNamedTupleMember", s, d);
  }
  function Dr(s, d) {
    c("TSUnionType", s, d);
  }
  function Lr(s, d) {
    c("TSIntersectionType", s, d);
  }
  function kr(s, d) {
    c("TSConditionalType", s, d);
  }
  function Mr(s, d) {
    c("TSInferType", s, d);
  }
  function _r(s, d) {
    c("TSParenthesizedType", s, d);
  }
  function Br(s, d) {
    c("TSTypeOperator", s, d);
  }
  function Fr(s, d) {
    c("TSIndexedAccessType", s, d);
  }
  function Rr(s, d) {
    c("TSMappedType", s, d);
  }
  function jr(s, d) {
    c("TSTemplateLiteralType", s, d);
  }
  function Ur(s, d) {
    c("TSLiteralType", s, d);
  }
  function Kr(s, d) {
    c("TSExpressionWithTypeArguments", s, d);
  }
  function Vr(s, d) {
    c("TSInterfaceDeclaration", s, d);
  }
  function qr(s, d) {
    c("TSInterfaceBody", s, d);
  }
  function Jr(s, d) {
    c("TSTypeAliasDeclaration", s, d);
  }
  function Yr(s, d) {
    c("TSInstantiationExpression", s, d);
  }
  function oi(s, d) {
    c("TSAsExpression", s, d);
  }
  function li(s, d) {
    c("TSSatisfiesExpression", s, d);
  }
  function ui(s, d) {
    c("TSTypeAssertion", s, d);
  }
  function ci(s, d) {
    c("TSEnumBody", s, d);
  }
  function pi(s, d) {
    c("TSEnumDeclaration", s, d);
  }
  function fi(s, d) {
    c("TSEnumMember", s, d);
  }
  function di(s, d) {
    c("TSModuleDeclaration", s, d);
  }
  function hi(s, d) {
    c("TSModuleBlock", s, d);
  }
  function yi(s, d) {
    c("TSImportType", s, d);
  }
  function mi(s, d) {
    c("TSImportEqualsDeclaration", s, d);
  }
  function Ti(s, d) {
    c("TSExternalModuleReference", s, d);
  }
  function Si(s, d) {
    c("TSNonNullExpression", s, d);
  }
  function xi(s, d) {
    c("TSExportAssignment", s, d);
  }
  function bi(s, d) {
    c("TSNamespaceExportDeclaration", s, d);
  }
  function Pi(s, d) {
    c("TSTypeAnnotation", s, d);
  }
  function Ei(s, d) {
    c("TSTypeParameterInstantiation", s, d);
  }
  function Ai(s, d) {
    c("TSTypeParameterDeclaration", s, d);
  }
  function gi(s, d) {
    c("TSTypeParameter", s, d);
  }
  function vi(s, d) {
    c("Standardized", s, d);
  }
  function Ii(s, d) {
    c("Expression", s, d);
  }
  function Ni(s, d) {
    c("Binary", s, d);
  }
  function Ci(s, d) {
    c("Scopable", s, d);
  }
  function wi(s, d) {
    c("BlockParent", s, d);
  }
  function Oi(s, d) {
    c("Block", s, d);
  }
  function p(s, d) {
    c("Statement", s, d);
  }
  function f(s, d) {
    c("Terminatorless", s, d);
  }
  function h(s, d) {
    c("CompletionStatement", s, d);
  }
  function b(s, d) {
    c("Conditional", s, d);
  }
  function N(s, d) {
    c("Loop", s, d);
  }
  function _(s, d) {
    c("While", s, d);
  }
  function ee(s, d) {
    c("ExpressionWrapper", s, d);
  }
  function Ae(s, d) {
    c("For", s, d);
  }
  function Ce(s, d) {
    c("ForXStatement", s, d);
  }
  function tt(s, d) {
    c("Function", s, d);
  }
  function tn(s, d) {
    c("FunctionParent", s, d);
  }
  function rn(s, d) {
    c("Pureish", s, d);
  }
  function sn(s, d) {
    c("Declaration", s, d);
  }
  function an(s, d) {
    c("FunctionParameter", s, d);
  }
  function nn(s, d) {
    c("PatternLike", s, d);
  }
  function on(s, d) {
    c("LVal", s, d);
  }
  function ln(s, d) {
    c("TSEntityName", s, d);
  }
  function un(s, d) {
    c("Literal", s, d);
  }
  function cn(s, d) {
    c("Immutable", s, d);
  }
  function pn(s, d) {
    c("UserWhitespacable", s, d);
  }
  function fn(s, d) {
    c("Method", s, d);
  }
  function dn(s, d) {
    c("ObjectMember", s, d);
  }
  function hn(s, d) {
    c("Property", s, d);
  }
  function yn(s, d) {
    c("UnaryLike", s, d);
  }
  function mn(s, d) {
    c("Pattern", s, d);
  }
  function Yi(s, d) {
    c("Class", s, d);
  }
  function Tn(s, d) {
    c("ImportOrExportDeclaration", s, d);
  }
  function Sn(s, d) {
    c("ExportDeclaration", s, d);
  }
  function xn(s, d) {
    c("ModuleSpecifier", s, d);
  }
  function bn(s, d) {
    c("Accessor", s, d);
  }
  function Pn(s, d) {
    c("Private", s, d);
  }
  function En(s, d) {
    c("Flow", s, d);
  }
  function An(s, d) {
    c("FlowType", s, d);
  }
  function gn(s, d) {
    c("FlowBaseAnnotation", s, d);
  }
  function vn(s, d) {
    c("FlowDeclaration", s, d);
  }
  function In(s, d) {
    c("FlowPredicate", s, d);
  }
  function Nn(s, d) {
    c("EnumBody", s, d);
  }
  function Cn(s, d) {
    c("EnumMember", s, d);
  }
  function wn(s, d) {
    c("JSX", s, d);
  }
  function On(s, d) {
    c("Miscellaneous", s, d);
  }
  function Dn(s, d) {
    c("TypeScript", s, d);
  }
  function Ln(s, d) {
    c("TSTypeElement", s, d);
  }
  function kn(s, d) {
    c("TSType", s, d);
  }
  function Mn(s, d) {
    c("TSBaseType", s, d);
  }
  function _n(s, d) {
    (0, l.default)("assertNumberLiteral", "assertNumericLiteral"), c("NumberLiteral", s, d);
  }
  function Bn(s, d) {
    (0, l.default)("assertRegexLiteral", "assertRegExpLiteral"), c("RegexLiteral", s, d);
  }
  function Fn(s, d) {
    (0, l.default)("assertRestProperty", "assertRestElement"), c("RestProperty", s, d);
  }
  function Rn(s, d) {
    (0, l.default)("assertSpreadProperty", "assertSpreadElement"), c("SpreadProperty", s, d);
  }
  function a(s, d) {
    (0, l.default)("assertModuleDeclaration", "assertImportOrExportDeclaration"), c("ModuleDeclaration", s, d);
  }
  return I;
}
var ki = {}, Jo;
function Ku() {
  if (Jo) return ki;
  Jo = 1, Object.defineProperty(ki, "__esModule", {
    value: !0
  }), ki.default = void 0;
  var n = ze();
  ki.default = l;
  function l(c) {
    switch (c) {
      case "string":
        return (0, n.stringTypeAnnotation)();
      case "number":
        return (0, n.numberTypeAnnotation)();
      case "undefined":
        return (0, n.voidTypeAnnotation)();
      case "boolean":
        return (0, n.booleanTypeAnnotation)();
      case "function":
        return (0, n.genericTypeAnnotation)((0, n.identifier)("Function"));
      case "object":
        return (0, n.genericTypeAnnotation)((0, n.identifier)("Object"));
      case "symbol":
        return (0, n.genericTypeAnnotation)((0, n.identifier)("Symbol"));
      case "bigint":
        return (0, n.anyTypeAnnotation)();
    }
    throw new Error("Invalid typeof value: " + c);
  }
  return ki;
}
var aa = {}, na = {}, Yo;
function ou() {
  if (Yo) return na;
  Yo = 1, Object.defineProperty(na, "__esModule", {
    value: !0
  }), na.default = c;
  var n = we();
  function l(o) {
    return (0, n.isIdentifier)(o) ? o.name : `${o.id.name}.${l(o.qualification)}`;
  }
  function c(o) {
    const S = Array.from(o), x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), L = [];
    for (let k = 0; k < S.length; k++) {
      const O = S[k];
      if (O && !L.includes(O)) {
        if ((0, n.isAnyTypeAnnotation)(O))
          return [O];
        if ((0, n.isFlowBaseAnnotation)(O)) {
          M.set(O.type, O);
          continue;
        }
        if ((0, n.isUnionTypeAnnotation)(O)) {
          w.has(O.types) || (S.push(...O.types), w.add(O.types));
          continue;
        }
        if ((0, n.isGenericTypeAnnotation)(O)) {
          const F = l(O.id);
          if (x.has(F)) {
            let j = x.get(F);
            j.typeParameters ? O.typeParameters && (j.typeParameters.params.push(...O.typeParameters.params), j.typeParameters.params = c(j.typeParameters.params)) : j = O.typeParameters;
          } else
            x.set(F, O);
          continue;
        }
        L.push(O);
      }
    }
    for (const [, k] of M)
      L.push(k);
    for (const [, k] of x)
      L.push(k);
    return L;
  }
  return na;
}
var Xo;
function Vu() {
  if (Xo) return aa;
  Xo = 1, Object.defineProperty(aa, "__esModule", {
    value: !0
  }), aa.default = c;
  var n = ze(), l = ou();
  function c(o) {
    const S = (0, l.default)(o);
    return S.length === 1 ? S[0] : (0, n.unionTypeAnnotation)(S);
  }
  return aa;
}
var oa = {}, la = {}, $o;
function qu() {
  if ($o) return la;
  $o = 1, Object.defineProperty(la, "__esModule", {
    value: !0
  }), la.default = c;
  var n = we();
  function l(o) {
    return (0, n.isIdentifier)(o) ? o.name : (0, n.isThisExpression)(o) ? "this" : `${o.right.name}.${l(o.left)}`;
  }
  function c(o) {
    const S = Array.from(o), x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), L = [];
    for (let k = 0; k < S.length; k++) {
      const O = S[k];
      if (!O || L.includes(O))
        continue;
      if ((0, n.isTSAnyKeyword)(O))
        return [O];
      if ((0, n.isTSBaseType)(O)) {
        M.set(O.type, O);
        continue;
      }
      if ((0, n.isTSUnionType)(O)) {
        w.has(O.types) || (S.push(...O.types), w.add(O.types));
        continue;
      }
      const F = "typeParameters";
      if ((0, n.isTSTypeReference)(O) && O[F]) {
        const j = O[F], R = l(O.typeName);
        if (x.has(R)) {
          let Z = x.get(R);
          const K = Z[F];
          K ? (K.params.push(...j.params), K.params = c(K.params)) : Z = j;
        } else
          x.set(R, O);
        continue;
      }
      L.push(O);
    }
    for (const [, k] of M)
      L.push(k);
    for (const [, k] of x)
      L.push(k);
    return L;
  }
  return la;
}
var Wo;
function Ju() {
  if (Wo) return oa;
  Wo = 1, Object.defineProperty(oa, "__esModule", {
    value: !0
  }), oa.default = o;
  var n = ze(), l = qu(), c = we();
  function o(S) {
    const x = S.map((w) => (0, c.isTSTypeAnnotation)(w) ? w.typeAnnotation : w), M = (0, l.default)(x);
    return M.length === 1 ? M[0] : (0, n.tsUnionType)(M);
  }
  return oa;
}
var ua = {}, zo;
function lu() {
  if (zo) return ua;
  zo = 1, Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.buildUndefinedNode = l;
  var n = ze();
  function l() {
    return (0, n.unaryExpression)("void", (0, n.numericLiteral)(0), !0);
  }
  return ua;
}
var ca = {}, Ho;
function ei() {
  if (Ho) return ca;
  Ho = 1, Object.defineProperty(ca, "__esModule", {
    value: !0
  }), ca.default = x;
  var n = lt(), l = we();
  const {
    hasOwn: c
  } = {
    hasOwn: Function.call.bind(Object.prototype.hasOwnProperty)
  };
  function o(L, k, O, F) {
    return L && typeof L.type == "string" ? M(L, k, O, F) : L;
  }
  function S(L, k, O, F) {
    return Array.isArray(L) ? L.map((j) => o(j, k, O, F)) : o(L, k, O, F);
  }
  function x(L, k = !0, O = !1) {
    return M(L, k, O, /* @__PURE__ */ new Map());
  }
  function M(L, k = !0, O = !1, F) {
    if (!L) return L;
    const {
      type: j
    } = L, R = {
      type: L.type
    };
    if ((0, l.isIdentifier)(L))
      R.name = L.name, c(L, "optional") && typeof L.optional == "boolean" && (R.optional = L.optional), c(L, "typeAnnotation") && (R.typeAnnotation = k ? S(L.typeAnnotation, !0, O, F) : L.typeAnnotation), c(L, "decorators") && (R.decorators = k ? S(L.decorators, !0, O, F) : L.decorators);
    else if (c(n.NODE_FIELDS, j))
      for (const Z of Object.keys(n.NODE_FIELDS[j]))
        c(L, Z) && (k ? R[Z] = (0, l.isFile)(L) && Z === "comments" ? w(L.comments, k, O, F) : S(L[Z], !0, O, F) : R[Z] = L[Z]);
    else
      throw new Error(`Unknown node type: "${j}"`);
    return c(L, "loc") && (O ? R.loc = null : R.loc = L.loc), c(L, "leadingComments") && (R.leadingComments = w(L.leadingComments, k, O, F)), c(L, "innerComments") && (R.innerComments = w(L.innerComments, k, O, F)), c(L, "trailingComments") && (R.trailingComments = w(L.trailingComments, k, O, F)), c(L, "extra") && (R.extra = Object.assign({}, L.extra)), R;
  }
  function w(L, k, O, F) {
    return !L || !k ? L : L.map((j) => {
      const R = F.get(j);
      if (R) return R;
      const {
        type: Z,
        value: K,
        loc: V
      } = j, A = {
        type: Z,
        value: K,
        loc: V
      };
      return O && (A.loc = null), F.set(j, A), A;
    });
  }
  return ca;
}
var pa = {}, Go;
function Yu() {
  if (Go) return pa;
  Go = 1, Object.defineProperty(pa, "__esModule", {
    value: !0
  }), pa.default = l;
  var n = ei();
  function l(c) {
    return (0, n.default)(c, !1);
  }
  return pa;
}
var fa = {}, Qo;
function Xu() {
  if (Qo) return fa;
  Qo = 1, Object.defineProperty(fa, "__esModule", {
    value: !0
  }), fa.default = l;
  var n = ei();
  function l(c) {
    return (0, n.default)(c);
  }
  return fa;
}
var da = {}, Zo;
function $u() {
  if (Zo) return da;
  Zo = 1, Object.defineProperty(da, "__esModule", {
    value: !0
  }), da.default = l;
  var n = ei();
  function l(c) {
    return (0, n.default)(c, !0, !0);
  }
  return da;
}
var ha = {}, el;
function Wu() {
  if (el) return ha;
  el = 1, Object.defineProperty(ha, "__esModule", {
    value: !0
  }), ha.default = l;
  var n = ei();
  function l(c) {
    return (0, n.default)(c, !1, !0);
  }
  return ha;
}
var ya = {}, ma = {}, tl;
function uu() {
  if (tl) return ma;
  tl = 1, Object.defineProperty(ma, "__esModule", {
    value: !0
  }), ma.default = n;
  function n(l, c, o) {
    if (!o || !l) return l;
    const S = `${c}Comments`;
    return l[S] ? c === "leading" ? l[S] = o.concat(l[S]) : l[S].push(...o) : l[S] = o, l;
  }
  return ma;
}
var rl;
function zu() {
  if (rl) return ya;
  rl = 1, Object.defineProperty(ya, "__esModule", {
    value: !0
  }), ya.default = l;
  var n = uu();
  function l(c, o, S, x) {
    return (0, n.default)(c, o, [{
      type: x ? "CommentLine" : "CommentBlock",
      value: S
    }]);
  }
  return ya;
}
var Ta = {}, Sa = {}, sl;
function eo() {
  if (sl) return Sa;
  sl = 1, Object.defineProperty(Sa, "__esModule", {
    value: !0
  }), Sa.default = n;
  function n(l, c, o) {
    c && o && (c[l] = Array.from(new Set([].concat(c[l], o[l]).filter(Boolean))));
  }
  return Sa;
}
var il;
function cu() {
  if (il) return Ta;
  il = 1, Object.defineProperty(Ta, "__esModule", {
    value: !0
  }), Ta.default = l;
  var n = eo();
  function l(c, o) {
    (0, n.default)("innerComments", c, o);
  }
  return Ta;
}
var xa = {}, al;
function pu() {
  if (al) return xa;
  al = 1, Object.defineProperty(xa, "__esModule", {
    value: !0
  }), xa.default = l;
  var n = eo();
  function l(c, o) {
    (0, n.default)("leadingComments", c, o);
  }
  return xa;
}
var ba = {}, Pa = {}, nl;
function fu() {
  if (nl) return Pa;
  nl = 1, Object.defineProperty(Pa, "__esModule", {
    value: !0
  }), Pa.default = l;
  var n = eo();
  function l(c, o) {
    (0, n.default)("trailingComments", c, o);
  }
  return Pa;
}
var ol;
function du() {
  if (ol) return ba;
  ol = 1, Object.defineProperty(ba, "__esModule", {
    value: !0
  }), ba.default = o;
  var n = fu(), l = pu(), c = cu();
  function o(S, x) {
    return (0, n.default)(S, x), (0, l.default)(S, x), (0, c.default)(S, x), S;
  }
  return ba;
}
var Ea = {}, ll;
function Hu() {
  if (ll) return Ea;
  ll = 1, Object.defineProperty(Ea, "__esModule", {
    value: !0
  }), Ea.default = l;
  var n = qi();
  function l(c) {
    return n.COMMENT_KEYS.forEach((o) => {
      c[o] = null;
    }), c;
  }
  return Ea;
}
var U = {}, ul;
function Gu() {
  if (ul) return U;
  ul = 1, Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.WHILE_TYPES = U.USERWHITESPACABLE_TYPES = U.UNARYLIKE_TYPES = U.TYPESCRIPT_TYPES = U.TSTYPE_TYPES = U.TSTYPEELEMENT_TYPES = U.TSENTITYNAME_TYPES = U.TSBASETYPE_TYPES = U.TERMINATORLESS_TYPES = U.STATEMENT_TYPES = U.STANDARDIZED_TYPES = U.SCOPABLE_TYPES = U.PUREISH_TYPES = U.PROPERTY_TYPES = U.PRIVATE_TYPES = U.PATTERN_TYPES = U.PATTERNLIKE_TYPES = U.OBJECTMEMBER_TYPES = U.MODULESPECIFIER_TYPES = U.MODULEDECLARATION_TYPES = U.MISCELLANEOUS_TYPES = U.METHOD_TYPES = U.LVAL_TYPES = U.LOOP_TYPES = U.LITERAL_TYPES = U.JSX_TYPES = U.IMPORTOREXPORTDECLARATION_TYPES = U.IMMUTABLE_TYPES = U.FUNCTION_TYPES = U.FUNCTIONPARENT_TYPES = U.FUNCTIONPARAMETER_TYPES = U.FOR_TYPES = U.FORXSTATEMENT_TYPES = U.FLOW_TYPES = U.FLOWTYPE_TYPES = U.FLOWPREDICATE_TYPES = U.FLOWDECLARATION_TYPES = U.FLOWBASEANNOTATION_TYPES = U.EXPRESSION_TYPES = U.EXPRESSIONWRAPPER_TYPES = U.EXPORTDECLARATION_TYPES = U.ENUMMEMBER_TYPES = U.ENUMBODY_TYPES = U.DECLARATION_TYPES = U.CONDITIONAL_TYPES = U.COMPLETIONSTATEMENT_TYPES = U.CLASS_TYPES = U.BLOCK_TYPES = U.BLOCKPARENT_TYPES = U.BINARY_TYPES = U.ACCESSOR_TYPES = void 0;
  var n = lt();
  U.STANDARDIZED_TYPES = n.FLIPPED_ALIAS_KEYS.Standardized, U.EXPRESSION_TYPES = n.FLIPPED_ALIAS_KEYS.Expression, U.BINARY_TYPES = n.FLIPPED_ALIAS_KEYS.Binary, U.SCOPABLE_TYPES = n.FLIPPED_ALIAS_KEYS.Scopable, U.BLOCKPARENT_TYPES = n.FLIPPED_ALIAS_KEYS.BlockParent, U.BLOCK_TYPES = n.FLIPPED_ALIAS_KEYS.Block, U.STATEMENT_TYPES = n.FLIPPED_ALIAS_KEYS.Statement, U.TERMINATORLESS_TYPES = n.FLIPPED_ALIAS_KEYS.Terminatorless, U.COMPLETIONSTATEMENT_TYPES = n.FLIPPED_ALIAS_KEYS.CompletionStatement, U.CONDITIONAL_TYPES = n.FLIPPED_ALIAS_KEYS.Conditional, U.LOOP_TYPES = n.FLIPPED_ALIAS_KEYS.Loop, U.WHILE_TYPES = n.FLIPPED_ALIAS_KEYS.While, U.EXPRESSIONWRAPPER_TYPES = n.FLIPPED_ALIAS_KEYS.ExpressionWrapper, U.FOR_TYPES = n.FLIPPED_ALIAS_KEYS.For, U.FORXSTATEMENT_TYPES = n.FLIPPED_ALIAS_KEYS.ForXStatement, U.FUNCTION_TYPES = n.FLIPPED_ALIAS_KEYS.Function, U.FUNCTIONPARENT_TYPES = n.FLIPPED_ALIAS_KEYS.FunctionParent, U.PUREISH_TYPES = n.FLIPPED_ALIAS_KEYS.Pureish, U.DECLARATION_TYPES = n.FLIPPED_ALIAS_KEYS.Declaration, U.FUNCTIONPARAMETER_TYPES = n.FLIPPED_ALIAS_KEYS.FunctionParameter, U.PATTERNLIKE_TYPES = n.FLIPPED_ALIAS_KEYS.PatternLike, U.LVAL_TYPES = n.FLIPPED_ALIAS_KEYS.LVal, U.TSENTITYNAME_TYPES = n.FLIPPED_ALIAS_KEYS.TSEntityName, U.LITERAL_TYPES = n.FLIPPED_ALIAS_KEYS.Literal, U.IMMUTABLE_TYPES = n.FLIPPED_ALIAS_KEYS.Immutable, U.USERWHITESPACABLE_TYPES = n.FLIPPED_ALIAS_KEYS.UserWhitespacable, U.METHOD_TYPES = n.FLIPPED_ALIAS_KEYS.Method, U.OBJECTMEMBER_TYPES = n.FLIPPED_ALIAS_KEYS.ObjectMember, U.PROPERTY_TYPES = n.FLIPPED_ALIAS_KEYS.Property, U.UNARYLIKE_TYPES = n.FLIPPED_ALIAS_KEYS.UnaryLike, U.PATTERN_TYPES = n.FLIPPED_ALIAS_KEYS.Pattern, U.CLASS_TYPES = n.FLIPPED_ALIAS_KEYS.Class;
  const l = U.IMPORTOREXPORTDECLARATION_TYPES = n.FLIPPED_ALIAS_KEYS.ImportOrExportDeclaration;
  return U.EXPORTDECLARATION_TYPES = n.FLIPPED_ALIAS_KEYS.ExportDeclaration, U.MODULESPECIFIER_TYPES = n.FLIPPED_ALIAS_KEYS.ModuleSpecifier, U.ACCESSOR_TYPES = n.FLIPPED_ALIAS_KEYS.Accessor, U.PRIVATE_TYPES = n.FLIPPED_ALIAS_KEYS.Private, U.FLOW_TYPES = n.FLIPPED_ALIAS_KEYS.Flow, U.FLOWTYPE_TYPES = n.FLIPPED_ALIAS_KEYS.FlowType, U.FLOWBASEANNOTATION_TYPES = n.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation, U.FLOWDECLARATION_TYPES = n.FLIPPED_ALIAS_KEYS.FlowDeclaration, U.FLOWPREDICATE_TYPES = n.FLIPPED_ALIAS_KEYS.FlowPredicate, U.ENUMBODY_TYPES = n.FLIPPED_ALIAS_KEYS.EnumBody, U.ENUMMEMBER_TYPES = n.FLIPPED_ALIAS_KEYS.EnumMember, U.JSX_TYPES = n.FLIPPED_ALIAS_KEYS.JSX, U.MISCELLANEOUS_TYPES = n.FLIPPED_ALIAS_KEYS.Miscellaneous, U.TYPESCRIPT_TYPES = n.FLIPPED_ALIAS_KEYS.TypeScript, U.TSTYPEELEMENT_TYPES = n.FLIPPED_ALIAS_KEYS.TSTypeElement, U.TSTYPE_TYPES = n.FLIPPED_ALIAS_KEYS.TSType, U.TSBASETYPE_TYPES = n.FLIPPED_ALIAS_KEYS.TSBaseType, U.MODULEDECLARATION_TYPES = l, U;
}
var Aa = {}, ga = {}, cl;
function hu() {
  if (cl) return ga;
  cl = 1, Object.defineProperty(ga, "__esModule", {
    value: !0
  }), ga.default = c;
  var n = we(), l = ze();
  function c(o, S) {
    if ((0, n.isBlockStatement)(o))
      return o;
    let x = [];
    return (0, n.isEmptyStatement)(o) ? x = [] : ((0, n.isStatement)(o) || ((0, n.isFunction)(S) ? o = (0, l.returnStatement)(o) : o = (0, l.expressionStatement)(o)), x = [o]), (0, l.blockStatement)(x);
  }
  return ga;
}
var pl;
function Qu() {
  if (pl) return Aa;
  pl = 1, Object.defineProperty(Aa, "__esModule", {
    value: !0
  }), Aa.default = l;
  var n = hu();
  function l(c, o = "body") {
    const S = (0, n.default)(c[o], c);
    return c[o] = S, S;
  }
  return Aa;
}
var va = {}, Ia = {}, fl;
function yu() {
  if (fl) return Ia;
  fl = 1, Object.defineProperty(Ia, "__esModule", {
    value: !0
  }), Ia.default = c;
  var n = Vi(), l = Qn();
  function c(o) {
    o = o + "";
    let S = "";
    for (const x of o)
      S += (0, l.isIdentifierChar)(x.codePointAt(0)) ? x : "-";
    return S = S.replace(/^[-0-9]+/, ""), S = S.replace(/[-\s]+(.)?/g, function(x, M) {
      return M ? M.toUpperCase() : "";
    }), (0, n.default)(S) || (S = `_${S}`), S || "_";
  }
  return Ia;
}
var dl;
function Zu() {
  if (dl) return va;
  dl = 1, Object.defineProperty(va, "__esModule", {
    value: !0
  }), va.default = l;
  var n = yu();
  function l(c) {
    return c = (0, n.default)(c), (c === "eval" || c === "arguments") && (c = "_" + c), c;
  }
  return va;
}
var Na = {}, hl;
function ec() {
  if (hl) return Na;
  hl = 1, Object.defineProperty(Na, "__esModule", {
    value: !0
  }), Na.default = c;
  var n = we(), l = ze();
  function c(o, S = o.key || o.property) {
    return !o.computed && (0, n.isIdentifier)(S) && (S = (0, l.stringLiteral)(S.name)), S;
  }
  return Na;
}
var Mi = {}, yl;
function tc() {
  if (yl) return Mi;
  yl = 1, Object.defineProperty(Mi, "__esModule", {
    value: !0
  }), Mi.default = void 0;
  var n = we();
  Mi.default = l;
  function l(c) {
    if ((0, n.isExpressionStatement)(c) && (c = c.expression), (0, n.isExpression)(c))
      return c;
    if ((0, n.isClass)(c) ? (c.type = "ClassExpression", c.abstract = !1) : (0, n.isFunction)(c) && (c.type = "FunctionExpression"), !(0, n.isExpression)(c))
      throw new Error(`cannot turn ${c.type} to an expression`);
    return c;
  }
  return Mi;
}
var Ca = {}, wa = {}, Oa = {}, ml;
function mu() {
  if (ml) return Oa;
  ml = 1, Object.defineProperty(Oa, "__esModule", {
    value: !0
  }), Oa.default = o;
  var n = lt();
  const l = /* @__PURE__ */ Symbol(), c = /* @__PURE__ */ Symbol();
  function o(S, x, M) {
    if (!S) return !1;
    const w = n.VISITOR_KEYS[S.type];
    if (!w) return !1;
    M = M || {};
    const L = x(S, M);
    if (L !== void 0)
      switch (L) {
        case l:
          return !1;
        case c:
          return !0;
      }
    for (const k of w) {
      const O = S[k];
      if (O) {
        if (Array.isArray(O)) {
          for (const F of O)
            if (o(F, x, M)) return !0;
        } else if (o(O, x, M)) return !0;
      }
    }
    return !1;
  }
  return o.skip = l, o.stop = c, Oa;
}
var Da = {}, Tl;
function Tu() {
  if (Tl) return Da;
  Tl = 1, Object.defineProperty(Da, "__esModule", {
    value: !0
  }), Da.default = o;
  var n = qi();
  const l = ["tokens", "start", "end", "loc", "raw", "rawValue"], c = [...n.COMMENT_KEYS, "comments", ...l];
  function o(S, x = {}) {
    const M = x.preserveComments ? l : c;
    for (const L of M)
      S[L] != null && (S[L] = void 0);
    for (const L of Object.keys(S))
      L[0] === "_" && S[L] != null && (S[L] = void 0);
    const w = Object.getOwnPropertySymbols(S);
    for (const L of w)
      S[L] = null;
  }
  return Da;
}
var Sl;
function Su() {
  if (Sl) return wa;
  Sl = 1, Object.defineProperty(wa, "__esModule", {
    value: !0
  }), wa.default = c;
  var n = mu(), l = Tu();
  function c(o, S) {
    return (0, n.default)(o, l.default, S), o;
  }
  return wa;
}
var xl;
function rc() {
  if (xl) return Ca;
  xl = 1, Object.defineProperty(Ca, "__esModule", {
    value: !0
  }), Ca.default = o;
  var n = we(), l = ei(), c = Su();
  function o(S, x = S.key) {
    let M;
    return S.kind === "method" ? o.increment() + "" : ((0, n.isIdentifier)(x) ? M = x.name : (0, n.isStringLiteral)(x) ? M = JSON.stringify(x.value) : M = JSON.stringify((0, c.default)((0, l.default)(x))), S.computed && (M = `[${M}]`), S.static && (M = `static:${M}`), M);
  }
  return o.uid = 0, o.increment = function() {
    return o.uid >= Number.MAX_SAFE_INTEGER ? o.uid = 0 : o.uid++;
  }, Ca;
}
var _i = {}, bl;
function sc() {
  if (bl) return _i;
  bl = 1, Object.defineProperty(_i, "__esModule", {
    value: !0
  }), _i.default = void 0;
  var n = we(), l = ze();
  _i.default = c;
  function c(o, S) {
    if ((0, n.isStatement)(o))
      return o;
    let x = !1, M;
    if ((0, n.isClass)(o))
      x = !0, M = "ClassDeclaration";
    else if ((0, n.isFunction)(o))
      x = !0, M = "FunctionDeclaration";
    else if ((0, n.isAssignmentExpression)(o))
      return (0, l.expressionStatement)(o);
    if (x && !o.id && (M = !1), !M) {
      if (S)
        return !1;
      throw new Error(`cannot turn ${o.type} to a statement`);
    }
    return o.type = M, o;
  }
  return _i;
}
var Bi = {}, Pl;
function ic() {
  if (Pl) return Bi;
  Pl = 1, Object.defineProperty(Bi, "__esModule", {
    value: !0
  }), Bi.default = void 0;
  var n = Vi(), l = ze();
  Bi.default = x;
  const c = Function.call.bind(Object.prototype.toString);
  function o(M) {
    return c(M) === "[object RegExp]";
  }
  function S(M) {
    if (typeof M != "object" || M === null || Object.prototype.toString.call(M) !== "[object Object]")
      return !1;
    const w = Object.getPrototypeOf(M);
    return w === null || Object.getPrototypeOf(w) === null;
  }
  function x(M) {
    if (M === void 0)
      return (0, l.identifier)("undefined");
    if (M === !0 || M === !1)
      return (0, l.booleanLiteral)(M);
    if (M === null)
      return (0, l.nullLiteral)();
    if (typeof M == "string")
      return (0, l.stringLiteral)(M);
    if (typeof M == "number") {
      let w;
      if (Number.isFinite(M))
        w = (0, l.numericLiteral)(Math.abs(M));
      else {
        let L;
        Number.isNaN(M) ? L = (0, l.numericLiteral)(0) : L = (0, l.numericLiteral)(1), w = (0, l.binaryExpression)("/", L, (0, l.numericLiteral)(0));
      }
      return (M < 0 || Object.is(M, -0)) && (w = (0, l.unaryExpression)("-", w)), w;
    }
    if (typeof M == "bigint")
      return M < 0 ? (0, l.unaryExpression)("-", (0, l.bigIntLiteral)(-M)) : (0, l.bigIntLiteral)(M);
    if (o(M)) {
      const w = M.source, L = /\/([a-z]*)$/.exec(M.toString())[1];
      return (0, l.regExpLiteral)(w, L);
    }
    if (Array.isArray(M))
      return (0, l.arrayExpression)(M.map(x));
    if (S(M)) {
      const w = [];
      for (const L of Object.keys(M)) {
        let k, O = !1;
        (0, n.default)(L) ? L === "__proto__" ? (O = !0, k = (0, l.stringLiteral)(L)) : k = (0, l.identifier)(L) : k = (0, l.stringLiteral)(L), w.push((0, l.objectProperty)(k, x(M[L]), O));
      }
      return (0, l.objectExpression)(w);
    }
    throw new Error("don't know how to turn this value into a node");
  }
  return Bi;
}
var La = {}, El;
function ac() {
  if (El) return La;
  El = 1, Object.defineProperty(La, "__esModule", {
    value: !0
  }), La.default = l;
  var n = ze();
  function l(c, o, S = !1) {
    return c.object = (0, n.memberExpression)(c.object, c.property, c.computed), c.property = o, c.computed = !!S, c;
  }
  return La;
}
var ka = {}, Al;
function nc() {
  if (Al) return ka;
  Al = 1, Object.defineProperty(ka, "__esModule", {
    value: !0
  }), ka.default = c;
  var n = qi(), l = du();
  function c(o, S) {
    if (!o || !S) return o;
    for (const x of n.INHERIT_KEYS.optional)
      o[x] == null && (o[x] = S[x]);
    for (const x of Object.keys(S))
      x[0] === "_" && x !== "__clone" && (o[x] = S[x]);
    for (const x of n.INHERIT_KEYS.force)
      o[x] = S[x];
    return (0, l.default)(o, S), o;
  }
  return ka;
}
var Ma = {}, gl;
function oc() {
  if (gl) return Ma;
  gl = 1, Object.defineProperty(Ma, "__esModule", {
    value: !0
  }), Ma.default = c;
  var n = ze(), l = to();
  function c(o, S) {
    if ((0, l.isSuper)(o.object))
      throw new Error("Cannot prepend node to super property access (`super.foo`).");
    return o.object = (0, n.memberExpression)(S, o.object), o;
  }
  return Ma;
}
var _a = {}, vl;
function lc() {
  if (vl) return _a;
  vl = 1, Object.defineProperty(_a, "__esModule", {
    value: !0
  }), _a.default = n;
  function n(l) {
    const c = [].concat(l), o = /* @__PURE__ */ Object.create(null);
    for (; c.length; ) {
      const S = c.pop();
      if (S)
        switch (S.type) {
          case "ArrayPattern":
            c.push(...S.elements);
            break;
          case "AssignmentExpression":
          case "AssignmentPattern":
          case "ForInStatement":
          case "ForOfStatement":
            c.push(S.left);
            break;
          case "ObjectPattern":
            c.push(...S.properties);
            break;
          case "ObjectProperty":
            c.push(S.value);
            break;
          case "RestElement":
          case "UpdateExpression":
            c.push(S.argument);
            break;
          case "UnaryExpression":
            S.operator === "delete" && c.push(S.argument);
            break;
          case "Identifier":
            o[S.name] = S;
            break;
        }
    }
    return o;
  }
  return _a;
}
var Ba = {}, Il;
function en() {
  if (Il) return Ba;
  Il = 1, Object.defineProperty(Ba, "__esModule", {
    value: !0
  }), Ba.default = l;
  var n = we();
  function l(o, S, x, M) {
    const w = [].concat(o), L = /* @__PURE__ */ Object.create(null);
    for (; w.length; ) {
      const k = w.shift();
      if (!k || M && ((0, n.isAssignmentExpression)(k) || (0, n.isUnaryExpression)(k) || (0, n.isUpdateExpression)(k)))
        continue;
      if ((0, n.isIdentifier)(k)) {
        S ? (L[k.name] = L[k.name] || []).push(k) : L[k.name] = k;
        continue;
      }
      if ((0, n.isExportDeclaration)(k) && !(0, n.isExportAllDeclaration)(k)) {
        (0, n.isDeclaration)(k.declaration) && w.push(k.declaration);
        continue;
      }
      if (x) {
        if ((0, n.isFunctionDeclaration)(k)) {
          w.push(k.id);
          continue;
        }
        if ((0, n.isFunctionExpression)(k))
          continue;
      }
      const O = l.keys[k.type];
      if (O)
        for (let F = 0; F < O.length; F++) {
          const j = O[F], R = k[j];
          R && (Array.isArray(R) ? w.push(...R) : w.push(R));
        }
    }
    return L;
  }
  const c = {
    DeclareClass: ["id"],
    DeclareFunction: ["id"],
    DeclareModule: ["id"],
    DeclareVariable: ["id"],
    DeclareInterface: ["id"],
    DeclareTypeAlias: ["id"],
    DeclareOpaqueType: ["id"],
    InterfaceDeclaration: ["id"],
    TypeAlias: ["id"],
    OpaqueType: ["id"],
    CatchClause: ["param"],
    LabeledStatement: ["label"],
    UnaryExpression: ["argument"],
    AssignmentExpression: ["left"],
    ImportSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportDefaultSpecifier: ["local"],
    ImportDeclaration: ["specifiers"],
    TSImportEqualsDeclaration: ["id"],
    ExportSpecifier: ["exported"],
    ExportNamespaceSpecifier: ["exported"],
    ExportDefaultSpecifier: ["exported"],
    FunctionDeclaration: ["id", "params"],
    FunctionExpression: ["id", "params"],
    ArrowFunctionExpression: ["params"],
    ObjectMethod: ["params"],
    ClassMethod: ["params"],
    ClassPrivateMethod: ["params"],
    ForInStatement: ["left"],
    ForOfStatement: ["left"],
    ClassDeclaration: ["id"],
    ClassExpression: ["id"],
    RestElement: ["argument"],
    UpdateExpression: ["argument"],
    ObjectProperty: ["value"],
    AssignmentPattern: ["left"],
    ArrayPattern: ["elements"],
    ObjectPattern: ["properties"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id"]
  };
  return l.keys = c, Ba;
}
var Fi = {}, Nl;
function uc() {
  if (Nl) return Fi;
  Nl = 1, Object.defineProperty(Fi, "__esModule", {
    value: !0
  }), Fi.default = void 0;
  var n = en();
  Fi.default = l;
  function l(c, o) {
    return (0, n.default)(c, o, !0);
  }
  return Fi;
}
var Fa = {}, Cl;
function cc() {
  if (Cl) return Fa;
  Cl = 1, Object.defineProperty(Fa, "__esModule", {
    value: !0
  }), Fa.default = o;
  var n = we();
  function l(S) {
    return (0, n.isNullLiteral)(S) ? "null" : (0, n.isRegExpLiteral)(S) ? `/${S.pattern}/${S.flags}` : (0, n.isTemplateLiteral)(S) ? S.quasis.map((x) => x.value.raw).join("") : S.value !== void 0 ? String(S.value) : null;
  }
  function c(S) {
    if (!S.computed || (0, n.isLiteral)(S.key))
      return S.key;
  }
  function o(S, x) {
    if ("id" in S && S.id)
      return {
        name: S.id.name,
        originalNode: S.id
      };
    let M = "", w;
    if ((0, n.isObjectProperty)(x, {
      value: S
    }) ? w = c(x) : (0, n.isObjectMethod)(S) || (0, n.isClassMethod)(S) ? (w = c(S), S.kind === "get" ? M = "get " : S.kind === "set" && (M = "set ")) : (0, n.isVariableDeclarator)(x, {
      init: S
    }) ? w = x.id : (0, n.isAssignmentExpression)(x, {
      operator: "=",
      right: S
    }) && (w = x.left), !w) return null;
    const L = (0, n.isLiteral)(w) ? l(w) : (0, n.isIdentifier)(w) ? w.name : (0, n.isPrivateName)(w) ? w.id.name : null;
    return L == null ? null : {
      name: M + L,
      originalNode: w
    };
  }
  return Fa;
}
var Ra = {}, wl;
function pc() {
  if (wl) return Ra;
  wl = 1, Object.defineProperty(Ra, "__esModule", {
    value: !0
  }), Ra.default = l;
  var n = lt();
  function l(o, S, x) {
    typeof S == "function" && (S = {
      enter: S
    });
    const {
      enter: M,
      exit: w
    } = S;
    c(o, M, w, x, []);
  }
  function c(o, S, x, M, w) {
    const L = n.VISITOR_KEYS[o.type];
    if (L) {
      S && S(o, w, M);
      for (const k of L) {
        const O = o[k];
        if (Array.isArray(O))
          for (let F = 0; F < O.length; F++) {
            const j = O[F];
            j && (w.push({
              node: o,
              key: k,
              index: F
            }), c(j, S, x, M, w), w.pop());
          }
        else O && (w.push({
          node: o,
          key: k
        }), c(O, S, x, M, w), w.pop());
      }
      x && x(o, w, M);
    }
  }
  return Ra;
}
var ja = {}, Ol;
function fc() {
  if (Ol) return ja;
  Ol = 1, Object.defineProperty(ja, "__esModule", {
    value: !0
  }), ja.default = l;
  var n = en();
  function l(c, o, S) {
    if (S && c.type === "Identifier" && o.type === "ObjectProperty" && S.type === "ObjectExpression")
      return !1;
    const x = n.default.keys[o.type];
    if (x)
      for (let M = 0; M < x.length; M++) {
        const w = x[M], L = o[w];
        if (Array.isArray(L)) {
          if (L.includes(c)) return !0;
        } else if (L === c) return !0;
      }
    return !1;
  }
  return ja;
}
var Ua = {}, Ka = {}, Dl;
function xu() {
  if (Dl) return Ka;
  Dl = 1, Object.defineProperty(Ka, "__esModule", {
    value: !0
  }), Ka.default = c;
  var n = we(), l = /* @__PURE__ */ Symbol.for("var used to be block scoped");
  function c(o) {
    return (0, n.isVariableDeclaration)(o) && (o.kind !== "var" || o[l]);
  }
  return Ka;
}
var Ll;
function dc() {
  if (Ll) return Ua;
  Ll = 1, Object.defineProperty(Ua, "__esModule", {
    value: !0
  }), Ua.default = c;
  var n = we(), l = xu();
  function c(o) {
    return (0, n.isFunctionDeclaration)(o) || (0, n.isClassDeclaration)(o) || (0, l.default)(o);
  }
  return Ua;
}
var Va = {}, kl;
function hc() {
  if (kl) return Va;
  kl = 1, Object.defineProperty(Va, "__esModule", {
    value: !0
  }), Va.default = c;
  var n = Gn(), l = we();
  function c(o) {
    return (0, n.default)(o.type, "Immutable") ? !0 : (0, l.isIdentifier)(o) ? o.name === "undefined" : !1;
  }
  return Va;
}
var qa = {}, Ml;
function yc() {
  if (Ml) return qa;
  Ml = 1, Object.defineProperty(qa, "__esModule", {
    value: !0
  }), qa.default = l;
  var n = lt();
  function l(c, o) {
    if (typeof c != "object" || typeof o != "object" || c == null || o == null)
      return c === o;
    if (c.type !== o.type)
      return !1;
    const S = Object.keys(n.NODE_FIELDS[c.type] || c.type), x = n.VISITOR_KEYS[c.type];
    for (const M of S) {
      const w = c[M], L = o[M];
      if (typeof w != typeof L)
        return !1;
      if (!(w == null && L == null)) {
        if (w == null || L == null)
          return !1;
        if (Array.isArray(w)) {
          if (!Array.isArray(L) || w.length !== L.length)
            return !1;
          for (let k = 0; k < w.length; k++)
            if (!l(w[k], L[k]))
              return !1;
          continue;
        }
        if (typeof w == "object" && !(x != null && x.includes(M))) {
          for (const k of Object.keys(w))
            if (w[k] !== L[k])
              return !1;
          continue;
        }
        if (!l(w, L))
          return !1;
      }
    }
    return !0;
  }
  return qa;
}
var Ja = {}, _l;
function mc() {
  if (_l) return Ja;
  _l = 1, Object.defineProperty(Ja, "__esModule", {
    value: !0
  }), Ja.default = n;
  function n(l, c, o) {
    switch (c.type) {
      case "MemberExpression":
      case "OptionalMemberExpression":
        return c.property === l ? !!c.computed : c.object === l;
      case "JSXMemberExpression":
        return c.object === l;
      case "VariableDeclarator":
        return c.init === l;
      case "ArrowFunctionExpression":
        return c.body === l;
      case "PrivateName":
        return !1;
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "ObjectMethod":
        return c.key === l ? !!c.computed : !1;
      case "ObjectProperty":
        return c.key === l ? !!c.computed : !o || o.type !== "ObjectPattern";
      case "ClassProperty":
      case "ClassAccessorProperty":
        return c.key === l ? !!c.computed : !0;
      case "ClassPrivateProperty":
        return c.key !== l;
      case "ClassDeclaration":
      case "ClassExpression":
        return c.superClass === l;
      case "AssignmentExpression":
        return c.right === l;
      case "AssignmentPattern":
        return c.right === l;
      case "LabeledStatement":
        return !1;
      case "CatchClause":
        return !1;
      case "RestElement":
        return !1;
      case "BreakStatement":
      case "ContinueStatement":
        return !1;
      case "FunctionDeclaration":
      case "FunctionExpression":
        return !1;
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        return !1;
      case "ExportSpecifier":
        return o != null && o.source ? !1 : c.local === l;
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return !1;
      case "ImportAttribute":
        return !1;
      case "JSXAttribute":
        return !1;
      case "ObjectPattern":
      case "ArrayPattern":
        return !1;
      case "MetaProperty":
        return !1;
      case "ObjectTypeProperty":
        return c.key !== l;
      case "TSEnumMember":
        return c.id !== l;
      case "TSPropertySignature":
        return c.key === l ? !!c.computed : !0;
    }
    return !0;
  }
  return Ja;
}
var Ya = {}, Bl;
function Tc() {
  if (Bl) return Ya;
  Bl = 1, Object.defineProperty(Ya, "__esModule", {
    value: !0
  }), Ya.default = l;
  var n = we();
  function l(c, o) {
    return (0, n.isBlockStatement)(c) && ((0, n.isFunction)(o) || (0, n.isCatchClause)(o)) ? !1 : (0, n.isPattern)(c) && ((0, n.isFunction)(o) || (0, n.isCatchClause)(o)) ? !0 : (0, n.isScopable)(c);
  }
  return Ya;
}
var Xa = {}, Fl;
function Sc() {
  if (Fl) return Xa;
  Fl = 1, Object.defineProperty(Xa, "__esModule", {
    value: !0
  }), Xa.default = l;
  var n = we();
  function l(c) {
    return (0, n.isImportDefaultSpecifier)(c) || (0, n.isIdentifier)(c.imported || c.exported, {
      name: "default"
    });
  }
  return Xa;
}
var $a = {}, Rl;
function xc() {
  if (Rl) return $a;
  Rl = 1, Object.defineProperty($a, "__esModule", {
    value: !0
  }), $a.default = c;
  var n = Vi();
  const l = /* @__PURE__ */ new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
  function c(o) {
    return (0, n.default)(o) && !l.has(o);
  }
  return $a;
}
var Wa = {}, jl;
function bc() {
  if (jl) return Wa;
  jl = 1, Object.defineProperty(Wa, "__esModule", {
    value: !0
  }), Wa.default = c;
  var n = we(), l = /* @__PURE__ */ Symbol.for("var used to be block scoped");
  function c(o) {
    return (0, n.isVariableDeclaration)(o, {
      kind: "var"
    }) && !o[l];
  }
  return Wa;
}
var za = {}, Ha = {}, Ul;
function Pc() {
  if (Ul) return Ha;
  Ul = 1, Object.defineProperty(Ha, "__esModule", {
    value: !0
  }), Ha.default = x;
  var n = en(), l = we(), c = ze(), o = lu(), S = ei();
  function x(M, w) {
    const L = [];
    let k = !0;
    for (const O of M)
      if ((0, l.isEmptyStatement)(O) || (k = !1), (0, l.isExpression)(O))
        L.push(O);
      else if ((0, l.isExpressionStatement)(O))
        L.push(O.expression);
      else if ((0, l.isVariableDeclaration)(O)) {
        if (O.kind !== "var") return;
        for (const F of O.declarations) {
          const j = (0, n.default)(F);
          for (const R of Object.keys(j))
            w.push({
              kind: O.kind,
              id: (0, S.default)(j[R])
            });
          F.init && L.push((0, c.assignmentExpression)("=", F.id, F.init));
        }
        k = !0;
      } else if ((0, l.isIfStatement)(O)) {
        const F = O.consequent ? x([O.consequent], w) : (0, o.buildUndefinedNode)(), j = O.alternate ? x([O.alternate], w) : (0, o.buildUndefinedNode)();
        if (!F || !j) return;
        L.push((0, c.conditionalExpression)(O.test, F, j));
      } else if ((0, l.isBlockStatement)(O)) {
        const F = x(O.body, w);
        if (!F) return;
        L.push(F);
      } else if ((0, l.isEmptyStatement)(O))
        M.indexOf(O) === 0 && (k = !0);
      else
        return;
    return k && L.push((0, o.buildUndefinedNode)()), L.length === 1 ? L[0] : (0, c.sequenceExpression)(L);
  }
  return Ha;
}
var Kl;
function Ec() {
  if (Kl) return za;
  Kl = 1, Object.defineProperty(za, "__esModule", {
    value: !0
  }), za.default = l;
  var n = Pc();
  function l(c, o) {
    if (!(c != null && c.length)) return;
    const S = [], x = (0, n.default)(c, S);
    if (x) {
      for (const M of S)
        o.push(M);
      return x;
    }
  }
  return za;
}
var Vl;
function to() {
  return Vl || (Vl = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var l = {
      react: !0,
      assertNode: !0,
      createTypeAnnotationBasedOnTypeof: !0,
      createUnionTypeAnnotation: !0,
      createFlowUnionType: !0,
      createTSUnionType: !0,
      cloneNode: !0,
      clone: !0,
      cloneDeep: !0,
      cloneDeepWithoutLoc: !0,
      cloneWithoutLoc: !0,
      addComment: !0,
      addComments: !0,
      inheritInnerComments: !0,
      inheritLeadingComments: !0,
      inheritsComments: !0,
      inheritTrailingComments: !0,
      removeComments: !0,
      ensureBlock: !0,
      toBindingIdentifierName: !0,
      toBlock: !0,
      toComputedKey: !0,
      toExpression: !0,
      toIdentifier: !0,
      toKeyAlias: !0,
      toStatement: !0,
      valueToNode: !0,
      appendToMemberExpression: !0,
      inherits: !0,
      prependToMemberExpression: !0,
      removeProperties: !0,
      removePropertiesDeep: !0,
      removeTypeDuplicates: !0,
      getAssignmentIdentifiers: !0,
      getBindingIdentifiers: !0,
      getOuterBindingIdentifiers: !0,
      getFunctionName: !0,
      traverse: !0,
      traverseFast: !0,
      shallowEqual: !0,
      is: !0,
      isBinding: !0,
      isBlockScoped: !0,
      isImmutable: !0,
      isLet: !0,
      isNode: !0,
      isNodesEquivalent: !0,
      isPlaceholderType: !0,
      isReferenced: !0,
      isScope: !0,
      isSpecifierDefault: !0,
      isType: !0,
      isValidES3Identifier: !0,
      isValidIdentifier: !0,
      isVar: !0,
      matchesPattern: !0,
      validate: !0,
      buildMatchMemberExpression: !0,
      __internal__deprecationWarning: !0
    };
    Object.defineProperty(n, "__internal__deprecationWarning", {
      enumerable: !0,
      get: function() {
        return wt.default;
      }
    }), Object.defineProperty(n, "addComment", {
      enumerable: !0,
      get: function() {
        return A.default;
      }
    }), Object.defineProperty(n, "addComments", {
      enumerable: !0,
      get: function() {
        return Y.default;
      }
    }), Object.defineProperty(n, "appendToMemberExpression", {
      enumerable: !0,
      get: function() {
        return ce.default;
      }
    }), Object.defineProperty(n, "assertNode", {
      enumerable: !0,
      get: function() {
        return x.default;
      }
    }), Object.defineProperty(n, "buildMatchMemberExpression", {
      enumerable: !0,
      get: function() {
        return it.default;
      }
    }), Object.defineProperty(n, "clone", {
      enumerable: !0,
      get: function() {
        return R.default;
      }
    }), Object.defineProperty(n, "cloneDeep", {
      enumerable: !0,
      get: function() {
        return Z.default;
      }
    }), Object.defineProperty(n, "cloneDeepWithoutLoc", {
      enumerable: !0,
      get: function() {
        return K.default;
      }
    }), Object.defineProperty(n, "cloneNode", {
      enumerable: !0,
      get: function() {
        return j.default;
      }
    }), Object.defineProperty(n, "cloneWithoutLoc", {
      enumerable: !0,
      get: function() {
        return V.default;
      }
    }), Object.defineProperty(n, "createFlowUnionType", {
      enumerable: !0,
      get: function() {
        return L.default;
      }
    }), Object.defineProperty(n, "createTSUnionType", {
      enumerable: !0,
      get: function() {
        return k.default;
      }
    }), Object.defineProperty(n, "createTypeAnnotationBasedOnTypeof", {
      enumerable: !0,
      get: function() {
        return w.default;
      }
    }), Object.defineProperty(n, "createUnionTypeAnnotation", {
      enumerable: !0,
      get: function() {
        return L.default;
      }
    }), Object.defineProperty(n, "ensureBlock", {
      enumerable: !0,
      get: function() {
        return ae.default;
      }
    }), Object.defineProperty(n, "getAssignmentIdentifiers", {
      enumerable: !0,
      get: function() {
        return De.default;
      }
    }), Object.defineProperty(n, "getBindingIdentifiers", {
      enumerable: !0,
      get: function() {
        return re.default;
      }
    }), Object.defineProperty(n, "getFunctionName", {
      enumerable: !0,
      get: function() {
        return St.default;
      }
    }), Object.defineProperty(n, "getOuterBindingIdentifiers", {
      enumerable: !0,
      get: function() {
        return le.default;
      }
    }), Object.defineProperty(n, "inheritInnerComments", {
      enumerable: !0,
      get: function() {
        return te.default;
      }
    }), Object.defineProperty(n, "inheritLeadingComments", {
      enumerable: !0,
      get: function() {
        return se.default;
      }
    }), Object.defineProperty(n, "inheritTrailingComments", {
      enumerable: !0,
      get: function() {
        return be.default;
      }
    }), Object.defineProperty(n, "inherits", {
      enumerable: !0,
      get: function() {
        return ye.default;
      }
    }), Object.defineProperty(n, "inheritsComments", {
      enumerable: !0,
      get: function() {
        return Te.default;
      }
    }), Object.defineProperty(n, "is", {
      enumerable: !0,
      get: function() {
        return ut.default;
      }
    }), Object.defineProperty(n, "isBinding", {
      enumerable: !0,
      get: function() {
        return bt.default;
      }
    }), Object.defineProperty(n, "isBlockScoped", {
      enumerable: !0,
      get: function() {
        return Ye.default;
      }
    }), Object.defineProperty(n, "isImmutable", {
      enumerable: !0,
      get: function() {
        return Pt.default;
      }
    }), Object.defineProperty(n, "isLet", {
      enumerable: !0,
      get: function() {
        return ct.default;
      }
    }), Object.defineProperty(n, "isNode", {
      enumerable: !0,
      get: function() {
        return Et.default;
      }
    }), Object.defineProperty(n, "isNodesEquivalent", {
      enumerable: !0,
      get: function() {
        return st.default;
      }
    }), Object.defineProperty(n, "isPlaceholderType", {
      enumerable: !0,
      get: function() {
        return At.default;
      }
    }), Object.defineProperty(n, "isReferenced", {
      enumerable: !0,
      get: function() {
        return gt.default;
      }
    }), Object.defineProperty(n, "isScope", {
      enumerable: !0,
      get: function() {
        return vt.default;
      }
    }), Object.defineProperty(n, "isSpecifierDefault", {
      enumerable: !0,
      get: function() {
        return It.default;
      }
    }), Object.defineProperty(n, "isType", {
      enumerable: !0,
      get: function() {
        return Nt.default;
      }
    }), Object.defineProperty(n, "isValidES3Identifier", {
      enumerable: !0,
      get: function() {
        return Be.default;
      }
    }), Object.defineProperty(n, "isValidIdentifier", {
      enumerable: !0,
      get: function() {
        return He.default;
      }
    }), Object.defineProperty(n, "isVar", {
      enumerable: !0,
      get: function() {
        return Ct.default;
      }
    }), Object.defineProperty(n, "matchesPattern", {
      enumerable: !0,
      get: function() {
        return Ge.default;
      }
    }), Object.defineProperty(n, "prependToMemberExpression", {
      enumerable: !0,
      get: function() {
        return Se.default;
      }
    }), n.react = void 0, Object.defineProperty(n, "removeComments", {
      enumerable: !0,
      get: function() {
        return ve.default;
      }
    }), Object.defineProperty(n, "removeProperties", {
      enumerable: !0,
      get: function() {
        return me.default;
      }
    }), Object.defineProperty(n, "removePropertiesDeep", {
      enumerable: !0,
      get: function() {
        return Ee.default;
      }
    }), Object.defineProperty(n, "removeTypeDuplicates", {
      enumerable: !0,
      get: function() {
        return Oe.default;
      }
    }), Object.defineProperty(n, "shallowEqual", {
      enumerable: !0,
      get: function() {
        return Le.default;
      }
    }), Object.defineProperty(n, "toBindingIdentifierName", {
      enumerable: !0,
      get: function() {
        return q.default;
      }
    }), Object.defineProperty(n, "toBlock", {
      enumerable: !0,
      get: function() {
        return je.default;
      }
    }), Object.defineProperty(n, "toComputedKey", {
      enumerable: !0,
      get: function() {
        return Ne.default;
      }
    }), Object.defineProperty(n, "toExpression", {
      enumerable: !0,
      get: function() {
        return Me.default;
      }
    }), Object.defineProperty(n, "toIdentifier", {
      enumerable: !0,
      get: function() {
        return Je.default;
      }
    }), Object.defineProperty(n, "toKeyAlias", {
      enumerable: !0,
      get: function() {
        return z.default;
      }
    }), Object.defineProperty(n, "toStatement", {
      enumerable: !0,
      get: function() {
        return ne.default;
      }
    }), Object.defineProperty(n, "traverse", {
      enumerable: !0,
      get: function() {
        return pe.default;
      }
    }), Object.defineProperty(n, "traverseFast", {
      enumerable: !0,
      get: function() {
        return xt.default;
      }
    }), Object.defineProperty(n, "validate", {
      enumerable: !0,
      get: function() {
        return _e.default;
      }
    }), Object.defineProperty(n, "valueToNode", {
      enumerable: !0,
      get: function() {
        return W.default;
      }
    });
    var c = vu(), o = Iu(), S = Ru(), x = ju(), M = Uu();
    Object.keys(M).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === M[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return M[$];
        }
      });
    });
    var w = Ku(), L = Vu(), k = Ju(), O = lu();
    Object.keys(O).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === O[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return O[$];
        }
      });
    });
    var F = ze();
    Object.keys(F).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === F[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return F[$];
        }
      });
    });
    var j = ei(), R = Yu(), Z = Xu(), K = $u(), V = Wu(), A = zu(), Y = uu(), te = cu(), se = pu(), Te = du(), be = fu(), ve = Hu(), ge = Gu();
    Object.keys(ge).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === ge[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return ge[$];
        }
      });
    });
    var ue = qi();
    Object.keys(ue).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === ue[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return ue[$];
        }
      });
    });
    var ae = Qu(), q = Zu(), je = hu(), Ne = ec(), Me = tc(), Je = yu(), z = rc(), ne = sc(), W = ic(), Q = lt();
    Object.keys(Q).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === Q[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return Q[$];
        }
      });
    });
    var ce = ac(), ye = nc(), Se = oc(), me = Tu(), Ee = Su(), Oe = ou(), De = lc(), re = en(), le = uc(), St = cc(), pe = pc();
    Object.keys(pe).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === pe[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return pe[$];
        }
      });
    });
    var xt = mu(), Le = Hn(), ut = Ki(), bt = fc(), Ye = dc(), Pt = hc(), ct = xu(), Et = nu(), st = yc(), At = su(), gt = mc(), vt = Tc(), It = Sc(), Nt = Gn(), Be = xc(), He = Vi(), Ct = bc(), Ge = tu(), _e = Zn(), it = ru(), Qe = we();
    Object.keys(Qe).forEach(function($) {
      $ === "default" || $ === "__esModule" || Object.prototype.hasOwnProperty.call(l, $) || $ in n && n[$] === Qe[$] || Object.defineProperty(n, $, {
        enumerable: !0,
        get: function() {
          return Qe[$];
        }
      });
    });
    var wt = Ui(), Ot = Ec();
    n.react = {
      isReactComponent: c.default,
      isCompatTag: o.default,
      buildChildren: S.default
    }, n.toSequenceExpression = Ot.default, process.env.BABEL_TYPES_8_BREAKING && console.warn("BABEL_TYPES_8_BREAKING is not supported anymore. Use the latest Babel 8.0.0 pre-release instead!");
  })(Un)), Un;
}
var Ac = to();
const Re = /* @__PURE__ */ gu(Ac);
var si = {}, ql;
function gc() {
  if (ql) return si;
  ql = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  });
  function n(y, t) {
    if (y == null) return {};
    var e = {};
    for (var r in y) if ({}.hasOwnProperty.call(y, r)) {
      if (t.indexOf(r) !== -1) continue;
      e[r] = y[r];
    }
    return e;
  }
  class l {
    constructor(t, e, r) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = r;
    }
  }
  class c {
    constructor(t, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
    }
  }
  function o(y, t) {
    const {
      line: e,
      column: r,
      index: i
    } = y;
    return new l(e, r + t, i + t);
  }
  const S = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var x = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: S
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: S
    }
  };
  const M = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    CatchClause: "catch clause",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
    ImportSpecifier: "import specifier",
    ImportDefaultSpecifier: "import default specifier",
    ImportNamespaceSpecifier: "import namespace specifier",
    ObjectPattern: "object destructuring pattern",
    ParenthesizedExpression: "parenthesized expression",
    RestElement: "rest element",
    UpdateExpression: {
      true: "prefix operation",
      false: "postfix operation"
    },
    VariableDeclarator: "variable declaration",
    YieldExpression: "yield expression"
  }, w = (y) => y.type === "UpdateExpression" ? M.UpdateExpression[`${y.prefix}`] : M[y.type];
  var L = {
    AccessorIsGenerator: ({
      kind: y
    }) => `A ${y}ter cannot be a generator.`,
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
    AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
    AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
    BadGetterArity: "A 'get' accessor must not have any formal parameters.",
    BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
    BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
    ConstructorClassField: "Classes may not have a field named 'constructor'.",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
    ConstructorIsAccessor: "Class constructor may not be an accessor.",
    ConstructorIsAsync: "Constructor can't be an async function.",
    ConstructorIsGenerator: "Constructor can't be a generator.",
    DeclarationMissingInitializer: ({
      kind: y
    }) => `Missing initializer in ${y} declaration.`,
    DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
    DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
    DecoratorStaticBlock: "Decorators can't be used with a static block.",
    DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
    DeletePrivateField: "Deleting a private field is not allowed.",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class.",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: ({
      exportName: y
    }) => `\`${y}\` has already been exported. Exported identifiers must be unique.`,
    DuplicateProto: "Redefinition of __proto__ property.",
    DuplicateRegExpFlags: "Duplicate regular expression flag.",
    ElementAfterRest: "Rest element must be last element.",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
    ExportBindingIsString: ({
      localName: y,
      exportName: t
    }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${y}' as '${t}' } from 'some-module'\`?`,
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
    ForInOfLoopInitializer: ({
      type: y
    }) => `'${y === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
    ForInUsing: "For-in loop may not start with 'using' declaration.",
    ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
    ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
    IllegalBreakContinue: ({
      type: y
    }) => `Unsyntactic ${y === "BreakStatement" ? "break" : "continue"}.`,
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
    IllegalReturn: "'return' outside of function.",
    ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
    ImportBindingIsString: ({
      importName: y
    }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${y}" as foo }\`?`,
    ImportCallArity: "`import()` requires exactly one or two arguments.",
    ImportCallNotNewExpression: "Cannot use new with import(...).",
    ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
    ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
    ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
    ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
    IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
    InvalidBigIntLiteral: "Invalid BigIntLiteral.",
    InvalidCodePoint: "Code point out of bounds.",
    InvalidCoverDiscardElement: "'void' must be followed by an expression when not used in a binding position.",
    InvalidCoverInitializedName: "Invalid shorthand property initializer.",
    InvalidDecimal: "Invalid decimal.",
    InvalidDigit: ({
      radix: y
    }) => `Expected number in radix ${y}.`,
    InvalidEscapeSequence: "Bad character escape sequence.",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
    InvalidEscapedReservedWord: ({
      reservedWord: y
    }) => `Escape sequence in keyword ${y}.`,
    InvalidIdentifier: ({
      identifierName: y
    }) => `Invalid identifier ${y}.`,
    InvalidLhs: ({
      ancestor: y
    }) => `Invalid left-hand side in ${w(y)}.`,
    InvalidLhsBinding: ({
      ancestor: y
    }) => `Binding invalid left-hand side in ${w(y)}.`,
    InvalidLhsOptionalChaining: ({
      ancestor: y
    }) => `Invalid optional chaining in the left-hand side of ${w(y)}.`,
    InvalidNumber: "Invalid number.",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
    InvalidOrUnexpectedToken: ({
      unexpected: y
    }) => `Unexpected character '${y}'.`,
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
    InvalidPrivateFieldResolution: ({
      identifierName: y
    }) => `Private name #${y} is not defined.`,
    InvalidPropertyBindingPattern: "Binding member expression.",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
    LabelRedeclaration: ({
      labelName: y
    }) => `Label '${y}' is already declared.`,
    LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
    MalformedRegExpFlags: "Invalid regular expression flag.",
    MissingClassName: "A class name is required.",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon.",
    MissingPlugin: ({
      missingPlugin: y
    }) => `This experimental syntax requires enabling the parser plugin: ${y.map((t) => JSON.stringify(t)).join(", ")}.`,
    MissingOneOfPlugins: ({
      missingPlugin: y
    }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${y.map((t) => JSON.stringify(t)).join(", ")}.`,
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
    ModuleAttributesWithDuplicateKeys: ({
      key: y
    }) => `Duplicate key "${y}" is not allowed in module attributes.`,
    ModuleExportNameHasLoneSurrogate: ({
      surrogateCharCode: y
    }) => `An export name cannot include a lone surrogate, found '\\u${y.toString(16)}'.`,
    ModuleExportUndefined: ({
      localName: y
    }) => `Export '${y}' is not defined.`,
    MultipleDefaultsInSwitch: "Multiple default clauses.",
    NewlineAfterThrow: "Illegal newline after throw.",
    NoCatchOrFinally: "Missing catch or finally clause.",
    NumberIdentifier: "Identifier directly after number.",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
    ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
    OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
    ParamDupe: "Argument name clash.",
    PatternHasAccessor: "Object pattern can't contain getter or setter.",
    PatternHasMethod: "Object pattern can't contain methods.",
    PrivateInExpectedIn: ({
      identifierName: y
    }) => `Private names are only allowed in property accesses (\`obj.#${y}\`) or in \`in\` expressions (\`#${y} in obj\`).`,
    PrivateNameRedeclaration: ({
      identifierName: y
    }) => `Duplicate private name #${y}.`,
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    RecordNoProto: "'__proto__' is not allowed in Record expressions.",
    RestTrailingComma: "Unexpected trailing comma after rest element.",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
    SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
    SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
    StaticPrototype: "Classes may not have static property named prototype.",
    SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super.",
    TrailingDecorator: "Decorators must be attached to a class element.",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
    UnexpectedKeyword: ({
      keyword: y
    }) => `Unexpected keyword '${y}'.`,
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
    UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
    UnexpectedPrivateField: "Unexpected private name.",
    UnexpectedReservedWord: ({
      reservedWord: y
    }) => `Unexpected reserved word '${y}'.`,
    UnexpectedSuper: "'super' is only allowed in object methods and classes.",
    UnexpectedToken: ({
      expected: y,
      unexpected: t
    }) => `Unexpected token${t ? ` '${t}'.` : ""}${y ? `, expected "${y}"` : ""}`,
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",
    UnexpectedVoidPattern: "Unexpected void binding.",
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
    UnsupportedMetaProperty: ({
      target: y,
      onlyValidPropertyName: t
    }) => `The only valid meta property for ${y} is ${y}.${t}.`,
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
    UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
    UnterminatedComment: "Unterminated comment.",
    UnterminatedRegExp: "Unterminated regular expression.",
    UnterminatedString: "Unterminated string constant.",
    UnterminatedTemplate: "Unterminated template.",
    UsingDeclarationExport: "Using declaration cannot be exported.",
    UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
    VarRedeclaration: ({
      identifierName: y
    }) => `Identifier '${y}' has already been declared.`,
    VoidPatternCatchClauseParam: "A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",
    VoidPatternInitializer: "A void binding may not have an initializer.",
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
    YieldInParameter: "Yield expression is not allowed in formal parameters.",
    YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
  }, k = {
    StrictDelete: "Deleting local variable in strict mode.",
    StrictEvalArguments: ({
      referenceName: y
    }) => `Assigning to '${y}' in strict mode.`,
    StrictEvalArgumentsBinding: ({
      bindingName: y
    }) => `Binding '${y}' in strict mode.`,
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
    StrictWith: "'with' in strict mode."
  }, O = {
    ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
    ParseExpressionExpectsEOF: ({
      unexpected: y
    }) => `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(y)}\`.`
  };
  const F = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var j = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: y
    }) => `Invalid topic token ${y}. In order to use ${y} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${y}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: y
    }) => `Hack-style pipe body cannot be an unparenthesized ${w({
      type: y
    })}; please wrap it in parentheses.`
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  });
  const R = ["message"];
  function Z(y, t, e) {
    Object.defineProperty(y, t, {
      enumerable: !1,
      configurable: !0,
      value: e
    });
  }
  function K({
    toMessage: y,
    code: t,
    reasonCode: e,
    syntaxPlugin: r
  }) {
    const i = e === "MissingPlugin" || e === "MissingOneOfPlugins";
    {
      const u = {
        AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
        AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
        ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
        SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
        SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
        SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
      };
      u[e] && (e = u[e]);
    }
    return function u(T, P) {
      const g = new SyntaxError();
      return g.code = t, g.reasonCode = e, g.loc = T, g.pos = T.index, g.syntaxPlugin = r, i && (g.missingPlugin = P.missingPlugin), Z(g, "clone", function(D = {}) {
        var B;
        const {
          line: J,
          column: X,
          index: G
        } = (B = D.loc) != null ? B : T;
        return u(new l(J, X, G), Object.assign({}, P, D.details));
      }), Z(g, "details", P), Object.defineProperty(g, "message", {
        configurable: !0,
        get() {
          const C = `${y(P)} (${T.line}:${T.column})`;
          return this.message = C, C;
        },
        set(C) {
          Object.defineProperty(this, "message", {
            value: C,
            writable: !0
          });
        }
      }), g;
    };
  }
  function V(y, t) {
    if (Array.isArray(y))
      return (r) => V(r, y[0]);
    const e = {};
    for (const r of Object.keys(y)) {
      const i = y[r], u = typeof i == "string" ? {
        message: () => i
      } : typeof i == "function" ? {
        message: i
      } : i, {
        message: T
      } = u, P = n(u, R), g = typeof T == "string" ? () => T : T;
      e[r] = K(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: r,
        toMessage: g
      }, t ? {
        syntaxPlugin: t
      } : {}, P));
    }
    return e;
  }
  const A = Object.assign({}, V(x), V(L), V(k), V(O), V`pipelineOperator`(j));
  function Y() {
    return {
      sourceType: "script",
      sourceFilename: void 0,
      startIndex: 0,
      startColumn: 0,
      startLine: 1,
      allowAwaitOutsideFunction: !1,
      allowReturnOutsideFunction: !1,
      allowNewTargetOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowSuperOutsideMethod: !1,
      allowUndeclaredExports: !1,
      allowYieldOutsideFunction: !1,
      plugins: [],
      strictMode: void 0,
      ranges: !1,
      tokens: !1,
      createImportExpressions: !1,
      createParenthesizedExpressions: !1,
      errorRecovery: !1,
      attachComment: !0,
      annexB: !0
    };
  }
  function te(y) {
    const t = Y();
    if (y == null)
      return t;
    if (y.annexB != null && y.annexB !== !1)
      throw new Error("The `annexB` option can only be set to `false`.");
    for (const e of Object.keys(t))
      y[e] != null && (t[e] = y[e]);
    if (t.startLine === 1)
      y.startIndex == null && t.startColumn > 0 ? t.startIndex = t.startColumn : y.startColumn == null && t.startIndex > 0 && (t.startColumn = t.startIndex);
    else if ((y.startColumn == null || y.startIndex == null) && y.startIndex != null)
      throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
    if (t.sourceType === "commonjs") {
      if (y.allowAwaitOutsideFunction != null)
        throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");
      if (y.allowReturnOutsideFunction != null)
        throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");
      if (y.allowNewTargetOutsideFunction != null)
        throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.");
    }
    return t;
  }
  const {
    defineProperty: se
  } = Object, Te = (y, t) => {
    y && se(y, t, {
      enumerable: !1,
      value: y[t]
    });
  };
  function be(y) {
    return Te(y.loc.start, "index"), Te(y.loc.end, "index"), y;
  }
  var ve = (y) => class extends y {
    parse() {
      const e = be(super.parse());
      return this.optionFlags & 256 && (e.tokens = e.tokens.map(be)), e;
    }
    parseRegExpLiteral({
      pattern: e,
      flags: r
    }) {
      let i = null;
      try {
        i = new RegExp(e, r);
      } catch {
      }
      const u = this.estreeParseLiteral(i);
      return u.regex = {
        pattern: e,
        flags: r
      }, u;
    }
    parseBigIntLiteral(e) {
      let r;
      try {
        r = BigInt(e);
      } catch {
        r = null;
      }
      const i = this.estreeParseLiteral(r);
      return i.bigint = String(i.value || e), i;
    }
    parseDecimalLiteral(e) {
      const i = this.estreeParseLiteral(null);
      return i.decimal = String(i.value || e), i;
    }
    estreeParseLiteral(e) {
      return this.parseLiteral(e, "Literal");
    }
    parseStringLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNumericLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNullLiteral() {
      return this.estreeParseLiteral(null);
    }
    parseBooleanLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    estreeParseChainExpression(e, r) {
      const i = this.startNodeAtNode(e);
      return i.expression = e, this.finishNodeAt(i, "ChainExpression", r);
    }
    directiveToStmt(e) {
      const r = e.value;
      delete e.value, this.castNodeTo(r, "Literal"), r.raw = r.extra.raw, r.value = r.extra.expressionValue;
      const i = this.castNodeTo(e, "ExpressionStatement");
      return i.expression = r, i.directive = r.extra.rawValue, delete r.extra, i;
    }
    fillOptionalPropertiesForTSESLint(e) {
    }
    cloneEstreeStringLiteral(e) {
      const {
        start: r,
        end: i,
        loc: u,
        range: T,
        raw: P,
        value: g
      } = e, C = Object.create(e.constructor.prototype);
      return C.type = "Literal", C.start = r, C.end = i, C.loc = u, C.range = T, C.raw = P, C.value = g, C;
    }
    initFunction(e, r) {
      super.initFunction(e, r), e.expression = !1;
    }
    checkDeclaration(e) {
      e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
    }
    getObjectOrClassMethodParams(e) {
      return e.value.params;
    }
    isValidDirective(e) {
      var r;
      return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((r = e.expression.extra) != null && r.parenthesized);
    }
    parseBlockBody(e, r, i, u, T) {
      super.parseBlockBody(e, r, i, u, T);
      const P = e.directives.map((g) => this.directiveToStmt(g));
      e.body = P.concat(e.body), delete e.directives;
    }
    parsePrivateName() {
      const e = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
    }
    convertPrivateNameToPrivateIdentifier(e) {
      const r = super.getPrivateNameSV(e);
      return delete e.id, e.name = r, this.castNodeTo(e, "PrivateIdentifier");
    }
    isPrivateName(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
    }
    getPrivateNameSV(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
    }
    parseLiteral(e, r) {
      const i = super.parseLiteral(e, r);
      return i.raw = i.extra.raw, delete i.extra, i;
    }
    parseFunctionBody(e, r, i = !1) {
      super.parseFunctionBody(e, r, i), e.expression = e.body.type !== "BlockStatement";
    }
    parseMethod(e, r, i, u, T, P, g = !1) {
      let C = this.startNode();
      C.kind = e.kind, C = super.parseMethod(C, r, i, u, T, P, g), delete C.kind;
      const {
        typeParameters: D
      } = e;
      D && (delete e.typeParameters, C.typeParameters = D, this.resetStartLocationFromNode(C, D));
      const B = this.castNodeTo(C, "FunctionExpression");
      return e.value = B, P === "ClassPrivateMethod" && (e.computed = !1), P === "ObjectMethod" ? (e.kind === "method" && (e.kind = "init"), e.shorthand = !1, this.finishNode(e, "Property")) : this.finishNode(e, "MethodDefinition");
    }
    nameIsConstructor(e) {
      return e.type === "Literal" ? e.value === "constructor" : super.nameIsConstructor(e);
    }
    parseClassProperty(...e) {
      const r = super.parseClassProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && this.castNodeTo(r, "PropertyDefinition"), r;
    }
    parseClassPrivateProperty(...e) {
      const r = super.parseClassPrivateProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && (this.castNodeTo(r, "PropertyDefinition"), r.computed = !1), r;
    }
    parseClassAccessorProperty(e) {
      const r = super.parseClassAccessorProperty(e);
      return this.getPluginOption("estree", "classFeatures") && (r.abstract && this.hasPlugin("typescript") ? (delete r.abstract, this.castNodeTo(r, "TSAbstractAccessorProperty")) : this.castNodeTo(r, "AccessorProperty")), r;
    }
    parseObjectProperty(e, r, i, u) {
      const T = super.parseObjectProperty(e, r, i, u);
      return T && (T.kind = "init", this.castNodeTo(T, "Property")), T;
    }
    finishObjectProperty(e) {
      return e.kind = "init", this.finishNode(e, "Property");
    }
    isValidLVal(e, r, i, u) {
      return e === "Property" ? "value" : super.isValidLVal(e, r, i, u);
    }
    isAssignable(e, r) {
      return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, r) : super.isAssignable(e, r);
    }
    toAssignable(e, r = !1) {
      if (e != null && this.isObjectProperty(e)) {
        const {
          key: i,
          value: u
        } = e;
        this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(u, r);
      } else
        super.toAssignable(e, r);
    }
    toAssignableObjectExpressionProp(e, r, i) {
      e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(A.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(A.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, r, i);
    }
    finishCallExpression(e, r) {
      const i = super.finishCallExpression(e, r);
      if (i.callee.type === "Import") {
        var u;
        this.castNodeTo(i, "ImportExpression"), i.source = i.arguments[0], i.options = (u = i.arguments[1]) != null ? u : null;
        {
          var T;
          i.attributes = (T = i.arguments[1]) != null ? T : null;
        }
        delete i.arguments, delete i.callee;
      } else i.type === "OptionalCallExpression" ? this.castNodeTo(i, "CallExpression") : i.optional = !1;
      return i;
    }
    toReferencedArguments(e) {
      e.type !== "ImportExpression" && super.toReferencedArguments(e);
    }
    parseExport(e, r) {
      const i = this.state.lastTokStartLoc, u = super.parseExport(e, r);
      switch (u.type) {
        case "ExportAllDeclaration":
          u.exported = null;
          break;
        case "ExportNamedDeclaration":
          u.specifiers.length === 1 && u.specifiers[0].type === "ExportNamespaceSpecifier" && (this.castNodeTo(u, "ExportAllDeclaration"), u.exported = u.specifiers[0].exported, delete u.specifiers);
        case "ExportDefaultDeclaration":
          {
            var T;
            const {
              declaration: P
            } = u;
            P?.type === "ClassDeclaration" && ((T = P.decorators) == null ? void 0 : T.length) > 0 && P.start === u.start && this.resetStartLocation(u, i);
          }
          break;
      }
      return u;
    }
    stopParseSubscript(e, r) {
      const i = super.stopParseSubscript(e, r);
      return r.optionalChainMember ? this.estreeParseChainExpression(i, e.loc.end) : i;
    }
    parseMember(e, r, i, u, T) {
      const P = super.parseMember(e, r, i, u, T);
      return P.type === "OptionalMemberExpression" ? this.castNodeTo(P, "MemberExpression") : P.optional = !1, P;
    }
    isOptionalMemberExpression(e) {
      return e.type === "ChainExpression" ? e.expression.type === "MemberExpression" : super.isOptionalMemberExpression(e);
    }
    hasPropertyAsPrivateName(e) {
      return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
    }
    isObjectProperty(e) {
      return e.type === "Property" && e.kind === "init" && !e.method;
    }
    isObjectMethod(e) {
      return e.type === "Property" && (e.method || e.kind === "get" || e.kind === "set");
    }
    castNodeTo(e, r) {
      const i = super.castNodeTo(e, r);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    cloneIdentifier(e) {
      const r = super.cloneIdentifier(e);
      return this.fillOptionalPropertiesForTSESLint(r), r;
    }
    cloneStringLiteral(e) {
      return e.type === "Literal" ? this.cloneEstreeStringLiteral(e) : super.cloneStringLiteral(e);
    }
    finishNodeAt(e, r, i) {
      return be(super.finishNodeAt(e, r, i));
    }
    finishNode(e, r) {
      const i = super.finishNode(e, r);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    resetStartLocation(e, r) {
      super.resetStartLocation(e, r), be(e);
    }
    resetEndLocation(e, r = this.state.lastTokEndLoc) {
      super.resetEndLocation(e, r), be(e);
    }
  };
  class ge {
    constructor(t, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
    }
  }
  const ue = {
    brace: new ge("{"),
    j_oTag: new ge("<tag"),
    j_cTag: new ge("</tag"),
    j_expr: new ge("<tag>...</tag>", !0)
  };
  ue.template = new ge("`", !0);
  const ae = !0, q = !0, je = !0, Ne = !0, Me = !0, Je = !0;
  class z {
    constructor(t, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }
  }
  const ne = /* @__PURE__ */ new Map();
  function W(y, t = {}) {
    t.keyword = y;
    const e = re(y, t);
    return ne.set(y, e), e;
  }
  function Q(y, t) {
    return re(y, {
      beforeExpr: ae,
      binop: t
    });
  }
  let ce = -1;
  const ye = [], Se = [], me = [], Ee = [], Oe = [], De = [];
  function re(y, t = {}) {
    var e, r, i, u;
    return ++ce, Se.push(y), me.push((e = t.binop) != null ? e : -1), Ee.push((r = t.beforeExpr) != null ? r : !1), Oe.push((i = t.startsExpr) != null ? i : !1), De.push((u = t.prefix) != null ? u : !1), ye.push(new z(y, t)), ce;
  }
  function le(y, t = {}) {
    var e, r, i, u;
    return ++ce, ne.set(y, ce), Se.push(y), me.push((e = t.binop) != null ? e : -1), Ee.push((r = t.beforeExpr) != null ? r : !1), Oe.push((i = t.startsExpr) != null ? i : !1), De.push((u = t.prefix) != null ? u : !1), ye.push(new z("name", t)), ce;
  }
  const St = {
    bracketL: re("[", {
      beforeExpr: ae,
      startsExpr: q
    }),
    bracketHashL: re("#[", {
      beforeExpr: ae,
      startsExpr: q
    }),
    bracketBarL: re("[|", {
      beforeExpr: ae,
      startsExpr: q
    }),
    bracketR: re("]"),
    bracketBarR: re("|]"),
    braceL: re("{", {
      beforeExpr: ae,
      startsExpr: q
    }),
    braceBarL: re("{|", {
      beforeExpr: ae,
      startsExpr: q
    }),
    braceHashL: re("#{", {
      beforeExpr: ae,
      startsExpr: q
    }),
    braceR: re("}"),
    braceBarR: re("|}"),
    parenL: re("(", {
      beforeExpr: ae,
      startsExpr: q
    }),
    parenR: re(")"),
    comma: re(",", {
      beforeExpr: ae
    }),
    semi: re(";", {
      beforeExpr: ae
    }),
    colon: re(":", {
      beforeExpr: ae
    }),
    doubleColon: re("::", {
      beforeExpr: ae
    }),
    dot: re("."),
    question: re("?", {
      beforeExpr: ae
    }),
    questionDot: re("?."),
    arrow: re("=>", {
      beforeExpr: ae
    }),
    template: re("template"),
    ellipsis: re("...", {
      beforeExpr: ae
    }),
    backQuote: re("`", {
      startsExpr: q
    }),
    dollarBraceL: re("${", {
      beforeExpr: ae,
      startsExpr: q
    }),
    templateTail: re("...`", {
      startsExpr: q
    }),
    templateNonTail: re("...${", {
      beforeExpr: ae,
      startsExpr: q
    }),
    at: re("@"),
    hash: re("#", {
      startsExpr: q
    }),
    interpreterDirective: re("#!..."),
    eq: re("=", {
      beforeExpr: ae,
      isAssign: Ne
    }),
    assign: re("_=", {
      beforeExpr: ae,
      isAssign: Ne
    }),
    slashAssign: re("_=", {
      beforeExpr: ae,
      isAssign: Ne
    }),
    xorAssign: re("_=", {
      beforeExpr: ae,
      isAssign: Ne
    }),
    moduloAssign: re("_=", {
      beforeExpr: ae,
      isAssign: Ne
    }),
    incDec: re("++/--", {
      prefix: Me,
      postfix: Je,
      startsExpr: q
    }),
    bang: re("!", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    tilde: re("~", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    doubleCaret: re("^^", {
      startsExpr: q
    }),
    doubleAt: re("@@", {
      startsExpr: q
    }),
    pipeline: Q("|>", 0),
    nullishCoalescing: Q("??", 1),
    logicalOR: Q("||", 1),
    logicalAND: Q("&&", 2),
    bitwiseOR: Q("|", 3),
    bitwiseXOR: Q("^", 4),
    bitwiseAND: Q("&", 5),
    equality: Q("==/!=/===/!==", 6),
    lt: Q("</>/<=/>=", 7),
    gt: Q("</>/<=/>=", 7),
    relational: Q("</>/<=/>=", 7),
    bitShift: Q("<</>>/>>>", 8),
    bitShiftL: Q("<</>>/>>>", 8),
    bitShiftR: Q("<</>>/>>>", 8),
    plusMin: re("+/-", {
      beforeExpr: ae,
      binop: 9,
      prefix: Me,
      startsExpr: q
    }),
    modulo: re("%", {
      binop: 10,
      startsExpr: q
    }),
    star: re("*", {
      binop: 10
    }),
    slash: Q("/", 10),
    exponent: re("**", {
      beforeExpr: ae,
      binop: 11,
      rightAssociative: !0
    }),
    _in: W("in", {
      beforeExpr: ae,
      binop: 7
    }),
    _instanceof: W("instanceof", {
      beforeExpr: ae,
      binop: 7
    }),
    _break: W("break"),
    _case: W("case", {
      beforeExpr: ae
    }),
    _catch: W("catch"),
    _continue: W("continue"),
    _debugger: W("debugger"),
    _default: W("default", {
      beforeExpr: ae
    }),
    _else: W("else", {
      beforeExpr: ae
    }),
    _finally: W("finally"),
    _function: W("function", {
      startsExpr: q
    }),
    _if: W("if"),
    _return: W("return", {
      beforeExpr: ae
    }),
    _switch: W("switch"),
    _throw: W("throw", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    _try: W("try"),
    _var: W("var"),
    _const: W("const"),
    _with: W("with"),
    _new: W("new", {
      beforeExpr: ae,
      startsExpr: q
    }),
    _this: W("this", {
      startsExpr: q
    }),
    _super: W("super", {
      startsExpr: q
    }),
    _class: W("class", {
      startsExpr: q
    }),
    _extends: W("extends", {
      beforeExpr: ae
    }),
    _export: W("export"),
    _import: W("import", {
      startsExpr: q
    }),
    _null: W("null", {
      startsExpr: q
    }),
    _true: W("true", {
      startsExpr: q
    }),
    _false: W("false", {
      startsExpr: q
    }),
    _typeof: W("typeof", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    _void: W("void", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    _delete: W("delete", {
      beforeExpr: ae,
      prefix: Me,
      startsExpr: q
    }),
    _do: W("do", {
      isLoop: je,
      beforeExpr: ae
    }),
    _for: W("for", {
      isLoop: je
    }),
    _while: W("while", {
      isLoop: je
    }),
    _as: le("as", {
      startsExpr: q
    }),
    _assert: le("assert", {
      startsExpr: q
    }),
    _async: le("async", {
      startsExpr: q
    }),
    _await: le("await", {
      startsExpr: q
    }),
    _defer: le("defer", {
      startsExpr: q
    }),
    _from: le("from", {
      startsExpr: q
    }),
    _get: le("get", {
      startsExpr: q
    }),
    _let: le("let", {
      startsExpr: q
    }),
    _meta: le("meta", {
      startsExpr: q
    }),
    _of: le("of", {
      startsExpr: q
    }),
    _sent: le("sent", {
      startsExpr: q
    }),
    _set: le("set", {
      startsExpr: q
    }),
    _source: le("source", {
      startsExpr: q
    }),
    _static: le("static", {
      startsExpr: q
    }),
    _using: le("using", {
      startsExpr: q
    }),
    _yield: le("yield", {
      startsExpr: q
    }),
    _asserts: le("asserts", {
      startsExpr: q
    }),
    _checks: le("checks", {
      startsExpr: q
    }),
    _exports: le("exports", {
      startsExpr: q
    }),
    _global: le("global", {
      startsExpr: q
    }),
    _implements: le("implements", {
      startsExpr: q
    }),
    _intrinsic: le("intrinsic", {
      startsExpr: q
    }),
    _infer: le("infer", {
      startsExpr: q
    }),
    _is: le("is", {
      startsExpr: q
    }),
    _mixins: le("mixins", {
      startsExpr: q
    }),
    _proto: le("proto", {
      startsExpr: q
    }),
    _require: le("require", {
      startsExpr: q
    }),
    _satisfies: le("satisfies", {
      startsExpr: q
    }),
    _keyof: le("keyof", {
      startsExpr: q
    }),
    _readonly: le("readonly", {
      startsExpr: q
    }),
    _unique: le("unique", {
      startsExpr: q
    }),
    _abstract: le("abstract", {
      startsExpr: q
    }),
    _declare: le("declare", {
      startsExpr: q
    }),
    _enum: le("enum", {
      startsExpr: q
    }),
    _module: le("module", {
      startsExpr: q
    }),
    _namespace: le("namespace", {
      startsExpr: q
    }),
    _interface: le("interface", {
      startsExpr: q
    }),
    _type: le("type", {
      startsExpr: q
    }),
    _opaque: le("opaque", {
      startsExpr: q
    }),
    name: re("name", {
      startsExpr: q
    }),
    placeholder: re("%%", {
      startsExpr: q
    }),
    string: re("string", {
      startsExpr: q
    }),
    num: re("num", {
      startsExpr: q
    }),
    bigint: re("bigint", {
      startsExpr: q
    }),
    decimal: re("decimal", {
      startsExpr: q
    }),
    regexp: re("regexp", {
      startsExpr: q
    }),
    privateName: re("#name", {
      startsExpr: q
    }),
    eof: re("eof"),
    jsxName: re("jsxName"),
    jsxText: re("jsxText", {
      beforeExpr: ae
    }),
    jsxTagStart: re("jsxTagStart", {
      startsExpr: q
    }),
    jsxTagEnd: re("jsxTagEnd")
  };
  function pe(y) {
    return y >= 93 && y <= 133;
  }
  function xt(y) {
    return y <= 92;
  }
  function Le(y) {
    return y >= 58 && y <= 133;
  }
  function ut(y) {
    return y >= 58 && y <= 137;
  }
  function bt(y) {
    return Ee[y];
  }
  function Ye(y) {
    return Oe[y];
  }
  function Pt(y) {
    return y >= 29 && y <= 33;
  }
  function ct(y) {
    return y >= 129 && y <= 131;
  }
  function Et(y) {
    return y >= 90 && y <= 92;
  }
  function st(y) {
    return y >= 58 && y <= 92;
  }
  function At(y) {
    return y >= 39 && y <= 59;
  }
  function gt(y) {
    return y === 34;
  }
  function vt(y) {
    return De[y];
  }
  function It(y) {
    return y >= 121 && y <= 123;
  }
  function Nt(y) {
    return y >= 124 && y <= 130;
  }
  function Be(y) {
    return Se[y];
  }
  function He(y) {
    return me[y];
  }
  function Ct(y) {
    return y === 57;
  }
  function Ge(y) {
    return y >= 24 && y <= 25;
  }
  function _e(y) {
    return ye[y];
  }
  ye[8].updateContext = (y) => {
    y.pop();
  }, ye[5].updateContext = ye[7].updateContext = ye[23].updateContext = (y) => {
    y.push(ue.brace);
  }, ye[22].updateContext = (y) => {
    y[y.length - 1] === ue.template ? y.pop() : y.push(ue.template);
  }, ye[143].updateContext = (y) => {
    y.push(ue.j_expr, ue.j_oTag);
  };
  let it = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Qe = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const wt = new RegExp("[" + it + "]"), Ot = new RegExp("[" + it + Qe + "]");
  it = Qe = null;
  const $ = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], $r = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function Dt(y, t) {
    let e = 65536;
    for (let r = 0, i = t.length; r < i; r += 2) {
      if (e += t[r], e > y) return !1;
      if (e += t[r + 1], e >= y) return !0;
    }
    return !1;
  }
  function Fe(y) {
    return y < 65 ? y === 36 : y <= 90 ? !0 : y < 97 ? y === 95 : y <= 122 ? !0 : y <= 65535 ? y >= 170 && wt.test(String.fromCharCode(y)) : Dt(y, $);
  }
  function Xe(y) {
    return y < 48 ? y === 36 : y < 58 ? !0 : y < 65 ? !1 : y <= 90 ? !0 : y < 97 ? y === 95 : y <= 122 ? !0 : y <= 65535 ? y >= 170 && Ot.test(String.fromCharCode(y)) : Dt(y, $) || Dt(y, $r);
  }
  const Lt = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, Xt = new Set(Lt.keyword), Wr = new Set(Lt.strict), zr = new Set(Lt.strictBind);
  function $t(y, t) {
    return t && y === "await" || y === "enum";
  }
  function Wt(y, t) {
    return $t(y, t) || Wr.has(y);
  }
  function zt(y) {
    return zr.has(y);
  }
  function Ht(y, t) {
    return Wt(y, t) || zt(y);
  }
  function Hr(y) {
    return Xt.has(y);
  }
  function Gr(y, t, e) {
    return y === 64 && t === 64 && Fe(e);
  }
  const Qr = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function Zr(y) {
    return Qr.has(y);
  }
  class kt {
    constructor(t) {
      this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = t;
    }
  }
  class Mt {
    constructor(t, e) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = e;
    }
    get inTopLevel() {
      return (this.currentScope().flags & 1) > 0;
    }
    get inFunction() {
      return (this.currentVarScopeFlags() & 2) > 0;
    }
    get allowSuper() {
      return (this.currentThisScopeFlags() & 16) > 0;
    }
    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & 32) > 0;
    }
    get allowNewTarget() {
      return (this.currentThisScopeFlags() & 512) > 0;
    }
    get inClass() {
      return (this.currentThisScopeFlags() & 64) > 0;
    }
    get inClassAndNotInNonArrowFunction() {
      const t = this.currentThisScopeFlags();
      return (t & 64) > 0 && (t & 2) === 0;
    }
    get inStaticBlock() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 128)
          return !0;
        if (e & 1731)
          return !1;
      }
    }
    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & 2) > 0;
    }
    get inBareCaseStatement() {
      return (this.currentScope().flags & 256) > 0;
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
    createScope(t) {
      return new kt(t);
    }
    enter(t) {
      this.scopeStack.push(this.createScope(t));
    }
    exit() {
      return this.scopeStack.pop().flags;
    }
    treatFunctionsAsVarInScope(t) {
      return !!(t.flags & 130 || !this.parser.inModule && t.flags & 1);
    }
    declareName(t, e, r) {
      let i = this.currentScope();
      if (e & 8 || e & 16) {
        this.checkRedeclarationInScope(i, t, e, r);
        let u = i.names.get(t) || 0;
        e & 16 ? u = u | 4 : (i.firstLexicalName || (i.firstLexicalName = t), u = u | 2), i.names.set(t, u), e & 8 && this.maybeExportDefined(i, t);
      } else if (e & 4)
        for (let u = this.scopeStack.length - 1; u >= 0 && (i = this.scopeStack[u], this.checkRedeclarationInScope(i, t, e, r), i.names.set(t, (i.names.get(t) || 0) | 1), this.maybeExportDefined(i, t), !(i.flags & 1667)); --u)
          ;
      this.parser.inModule && i.flags & 1 && this.undefinedExports.delete(t);
    }
    maybeExportDefined(t, e) {
      this.parser.inModule && t.flags & 1 && this.undefinedExports.delete(e);
    }
    checkRedeclarationInScope(t, e, r, i) {
      this.isRedeclaredInScope(t, e, r) && this.parser.raise(A.VarRedeclaration, i, {
        identifierName: e
      });
    }
    isRedeclaredInScope(t, e, r) {
      if (!(r & 1)) return !1;
      if (r & 8)
        return t.names.has(e);
      const i = t.names.get(e) || 0;
      return r & 16 ? (i & 2) > 0 || !this.treatFunctionsAsVarInScope(t) && (i & 1) > 0 : (i & 2) > 0 && !(t.flags & 8 && t.firstLexicalName === e) || !this.treatFunctionsAsVarInScope(t) && (i & 4) > 0;
    }
    checkLocalExport(t) {
      const {
        name: e
      } = t;
      this.scopeStack[0].names.has(e) || this.undefinedExports.set(e, t.loc.start);
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
    currentVarScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 1667)
          return e;
      }
    }
    currentThisScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 1731 && !(e & 4))
          return e;
      }
    }
  }
  class es extends kt {
    constructor(...t) {
      super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }
  class ts extends Mt {
    createScope(t) {
      return new es(t);
    }
    declareName(t, e, r) {
      const i = this.currentScope();
      if (e & 2048) {
        this.checkRedeclarationInScope(i, t, e, r), this.maybeExportDefined(i, t), i.declareFunctions.add(t);
        return;
      }
      super.declareName(t, e, r);
    }
    isRedeclaredInScope(t, e, r) {
      if (super.isRedeclaredInScope(t, e, r)) return !0;
      if (r & 2048 && !t.declareFunctions.has(e)) {
        const i = t.names.get(e);
        return (i & 4) > 0 || (i & 2) > 0;
      }
      return !1;
    }
    checkLocalExport(t) {
      this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
    }
  }
  const rs = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), ie = V`flow`({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
    AssignReservedType: ({
      reservedType: y
    }) => `Cannot overwrite reserved type ${y}.`,
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
    EnumBooleanMemberNotInitialized: ({
      memberName: y,
      enumName: t
    }) => `Boolean enum members need to be initialized. Use either \`${y} = true,\` or \`${y} = false,\` in enum \`${t}\`.`,
    EnumDuplicateMemberName: ({
      memberName: y,
      enumName: t
    }) => `Enum member names need to be unique, but the name \`${y}\` has already been used before in enum \`${t}\`.`,
    EnumInconsistentMemberValues: ({
      enumName: y
    }) => `Enum \`${y}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
    EnumInvalidExplicitType: ({
      invalidEnumType: y,
      enumName: t
    }) => `Enum type \`${y}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,
    EnumInvalidExplicitTypeUnknownSupplied: ({
      enumName: y
    }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${y}\`.`,
    EnumInvalidMemberInitializerPrimaryType: ({
      enumName: y,
      memberName: t,
      explicitType: e
    }) => `Enum \`${y}\` has type \`${e}\`, so the initializer of \`${t}\` needs to be a ${e} literal.`,
    EnumInvalidMemberInitializerSymbolType: ({
      enumName: y,
      memberName: t
    }) => `Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${y}\`.`,
    EnumInvalidMemberInitializerUnknownType: ({
      enumName: y,
      memberName: t
    }) => `The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${y}\`.`,
    EnumInvalidMemberName: ({
      enumName: y,
      memberName: t,
      suggestion: e
    }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${e}\`, in enum \`${y}\`.`,
    EnumNumberMemberNotInitialized: ({
      enumName: y,
      memberName: t
    }) => `Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${y}\`.`,
    EnumStringMemberInconsistentlyInitialized: ({
      enumName: y
    }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${y}\`.`,
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
    InexactVariance: "Explicit inexact syntax cannot have variance.",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
    PatternIsOptional: Object.assign({
      message: "A binding pattern parameter cannot be optional in an implementation signature."
    }, {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance.",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
    UnexpectedReservedType: ({
      reservedType: y
    }) => `Unexpected reserved type ${y}.`,
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
    UnsupportedDeclareExportKind: ({
      unsupportedExportKind: y,
      suggestion: t
    }) => `\`declare export ${y}\` is not supported. Use \`${t}\` instead.`,
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
    UnterminatedFlowComment: "Unterminated flow-comment."
  });
  function ss(y) {
    return y.type === "DeclareExportAllDeclaration" || y.type === "DeclareExportDeclaration" && (!y.declaration || y.declaration.type !== "TypeAlias" && y.declaration.type !== "InterfaceDeclaration");
  }
  function Gt(y) {
    return y.importKind === "type" || y.importKind === "typeof";
  }
  const is = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function as(y, t) {
    const e = [], r = [];
    for (let i = 0; i < y.length; i++)
      (t(y[i], i, y) ? e : r).push(y[i]);
    return [e, r];
  }
  const ns = /\*?\s*@((?:no)?flow)\b/;
  var os = (y) => class extends y {
    constructor(...e) {
      super(...e), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return ts;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    finishToken(e, r) {
      e !== 134 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, r);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        const r = ns.exec(e.value);
        if (r) if (r[1] === "flow")
          this.flowPragma = "flow";
        else if (r[1] === "noflow")
          this.flowPragma = "noflow";
        else
          throw new Error("Unexpected flow pragma");
      }
      super.addComment(e);
    }
    flowParseTypeInitialiser(e) {
      const r = this.state.inType;
      this.state.inType = !0, this.expect(e || 14);
      const i = this.flowParseType();
      return this.state.inType = r, i;
    }
    flowParsePredicate() {
      const e = this.startNode(), r = this.state.startLoc;
      return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > r.index + 1 && this.raise(ie.UnexpectedSpaceBetweenModuloChecks, r), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
    }
    flowParseTypeAndPredicateInitialiser() {
      const e = this.state.inType;
      this.state.inType = !0, this.expect(14);
      let r = null, i = null;
      return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (r = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [r, i];
    }
    flowParseDeclareClass(e) {
      return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass");
    }
    flowParseDeclareFunction(e) {
      this.next();
      const r = e.id = this.parseIdentifier(), i = this.startNode(), u = this.startNode();
      this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
      const T = this.flowParseFunctionTypeParams();
      return i.params = T.params, i.rest = T.rest, i.this = T._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), u.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), r.typeAnnotation = this.finishNode(u, "TypeAnnotation"), this.resetEndLocation(r), this.semicolon(), this.scope.declareName(e.id.name, 2048, e.id.loc.start), this.finishNode(e, "DeclareFunction");
    }
    flowParseDeclare(e, r) {
      if (this.match(80))
        return this.flowParseDeclareClass(e);
      if (this.match(68))
        return this.flowParseDeclareFunction(e);
      if (this.match(74))
        return this.flowParseDeclareVariable(e);
      if (this.eatContextual(127))
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (r && this.raise(ie.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
      if (this.isContextual(130))
        return this.flowParseDeclareTypeAlias(e);
      if (this.isContextual(131))
        return this.flowParseDeclareOpaqueType(e);
      if (this.isContextual(129))
        return this.flowParseDeclareInterface(e);
      if (this.match(82))
        return this.flowParseDeclareExportDeclaration(e, r);
      throw this.unexpected();
    }
    flowParseDeclareVariable(e) {
      return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(e.id.name, 5, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
    }
    flowParseDeclareModule(e) {
      this.scope.enter(0), this.match(134) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
      const r = e.body = this.startNode(), i = r.body = [];
      for (this.expect(5); !this.match(8); ) {
        const P = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(ie.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), i.push(super.parseImport(P))) : (this.expectContextual(125, ie.UnsupportedStatementInDeclareModule), i.push(this.flowParseDeclare(P, !0)));
      }
      this.scope.exit(), this.expect(8), this.finishNode(r, "BlockStatement");
      let u = null, T = !1;
      return i.forEach((P) => {
        ss(P) ? (u === "CommonJS" && this.raise(ie.AmbiguousDeclareModuleKind, P), u = "ES") : P.type === "DeclareModuleExports" && (T && this.raise(ie.DuplicateDeclareModuleExports, P), u === "ES" && this.raise(ie.AmbiguousDeclareModuleKind, P), u = "CommonJS", T = !0);
      }), e.kind = u || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, r) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !r) {
        const i = this.state.value;
        throw this.raise(ie.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: i,
          suggestion: is[i]
        });
      }
      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131))
        return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131))
        return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" ? (e.default = !1, delete e.exportKind, this.castNodeTo(e, "DeclareExportDeclaration")) : this.castNodeTo(e, "DeclareExportAllDeclaration");
      throw this.unexpected();
    }
    flowParseDeclareModuleExports(e) {
      return this.next(), this.expectContextual(111), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
    }
    flowParseDeclareTypeAlias(e) {
      this.next();
      const r = this.flowParseTypeAlias(e);
      return this.castNodeTo(r, "DeclareTypeAlias"), r;
    }
    flowParseDeclareOpaqueType(e) {
      this.next();
      const r = this.flowParseOpaqueType(e, !0);
      return this.castNodeTo(r, "DeclareOpaqueType"), r;
    }
    flowParseDeclareInterface(e) {
      return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface");
    }
    flowParseInterfaceish(e, r) {
      if (e.id = this.flowParseRestrictedIdentifier(!r, !0), this.scope.declareName(e.id.name, r ? 17 : 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (!r && this.eat(12));
      if (r) {
        if (e.implements = [], e.mixins = [], this.eatContextual(117))
          do
            e.mixins.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
        if (this.eatContextual(113))
          do
            e.implements.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
      }
      e.body = this.flowParseObjectType({
        allowStatic: r,
        allowExact: !1,
        allowSpread: !1,
        allowProto: r,
        allowInexact: !1
      });
    }
    flowParseInterfaceExtends() {
      const e = this.startNode();
      return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
    }
    flowParseInterface(e) {
      return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration");
    }
    checkNotUnderscore(e) {
      e === "_" && this.raise(ie.UnexpectedReservedUnderscore, this.state.startLoc);
    }
    checkReservedType(e, r, i) {
      rs.has(e) && this.raise(i ? ie.AssignReservedType : ie.UnexpectedReservedType, r, {
        reservedType: e
      });
    }
    flowParseRestrictedIdentifier(e, r) {
      return this.checkReservedType(this.state.value, this.state.startLoc, r), this.parseIdentifier(e);
    }
    flowParseTypeAlias(e) {
      return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
    }
    flowParseOpaqueType(e, r) {
      return this.expectContextual(130), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, r || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
    }
    flowParseTypeParameter(e = !1) {
      const r = this.state.startLoc, i = this.startNode(), u = this.flowParseVariance(), T = this.flowParseTypeAnnotatableIdentifier();
      return i.name = T.name, i.variance = u, i.bound = T.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(ie.MissingTypeParamDefault, r), this.finishNode(i, "TypeParameter");
    }
    flowParseTypeParameterDeclaration() {
      const e = this.state.inType, r = this.startNode();
      r.params = [], this.state.inType = !0, this.match(47) || this.match(143) ? this.next() : this.unexpected();
      let i = !1;
      do {
        const u = this.flowParseTypeParameter(i);
        r.params.push(u), u.default && (i = !0), this.match(48) || this.expect(12);
      } while (!this.match(48));
      return this.expect(48), this.state.inType = e, this.finishNode(r, "TypeParameterDeclaration");
    }
    flowInTopLevelContext(e) {
      if (this.curContext() !== ue.brace) {
        const r = this.state.context;
        this.state.context = [r[0]];
        try {
          return e();
        } finally {
          this.state.context = r;
        }
      } else
        return e();
    }
    flowParseTypeParameterInstantiationInExpression() {
      if (this.reScan_lt() === 47)
        return this.flowParseTypeParameterInstantiation();
    }
    flowParseTypeParameterInstantiation() {
      const e = this.startNode(), r = this.state.inType;
      return this.state.inType = !0, e.params = [], this.flowInTopLevelContext(() => {
        this.expect(47);
        const i = this.state.noAnonFunctionType;
        for (this.state.noAnonFunctionType = !1; !this.match(48); )
          e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
        this.state.noAnonFunctionType = i;
      }), this.state.inType = r, !this.state.inType && this.curContext() === ue.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseTypeParameterInstantiationCallOrNew() {
      if (this.reScan_lt() !== 47) return null;
      const e = this.startNode(), r = this.state.inType;
      for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48); )
        e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
      return this.expect(48), this.state.inType = r, this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseInterfaceType() {
      const e = this.startNode();
      if (this.expectContextual(129), e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (this.eat(12));
      return e.body = this.flowParseObjectType({
        allowStatic: !1,
        allowExact: !1,
        allowSpread: !1,
        allowProto: !1,
        allowInexact: !1
      }), this.finishNode(e, "InterfaceTypeAnnotation");
    }
    flowParseObjectPropertyKey() {
      return this.match(135) || this.match(134) ? super.parseExprAtom() : this.parseIdentifier(!0);
    }
    flowParseObjectTypeIndexer(e, r, i) {
      return e.static = r, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
    }
    flowParseObjectTypeInternalSlot(e, r) {
      return e.static = r, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
    }
    flowParseObjectTypeMethodish(e) {
      for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
    }
    flowParseObjectTypeCallProperty(e, r) {
      const i = this.startNode();
      return e.static = r, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
    }
    flowParseObjectType({
      allowStatic: e,
      allowExact: r,
      allowSpread: i,
      allowProto: u,
      allowInexact: T
    }) {
      const P = this.state.inType;
      this.state.inType = !0;
      const g = this.startNode();
      g.callProperties = [], g.properties = [], g.indexers = [], g.internalSlots = [];
      let C, D, B = !1;
      for (r && this.match(6) ? (this.expect(6), C = 9, D = !0) : (this.expect(5), C = 8, D = !1), g.exact = D; !this.match(C); ) {
        let X = !1, G = null, de = null;
        const Pe = this.startNode();
        if (u && this.isContextual(118)) {
          const xe = this.lookahead();
          xe.type !== 14 && xe.type !== 17 && (this.next(), G = this.state.startLoc, e = !1);
        }
        if (e && this.isContextual(106)) {
          const xe = this.lookahead();
          xe.type !== 14 && xe.type !== 17 && (this.next(), X = !0);
        }
        const oe = this.flowParseVariance();
        if (this.eat(0))
          G != null && this.unexpected(G), this.eat(0) ? (oe && this.unexpected(oe.loc.start), g.internalSlots.push(this.flowParseObjectTypeInternalSlot(Pe, X))) : g.indexers.push(this.flowParseObjectTypeIndexer(Pe, X, oe));
        else if (this.match(10) || this.match(47))
          G != null && this.unexpected(G), oe && this.unexpected(oe.loc.start), g.callProperties.push(this.flowParseObjectTypeCallProperty(Pe, X));
        else {
          let xe = "init";
          if (this.isContextual(99) || this.isContextual(104)) {
            const qe = this.lookahead();
            ut(qe.type) && (xe = this.state.value, this.next());
          }
          const We = this.flowParseObjectTypeProperty(Pe, X, G, oe, xe, i, T ?? !D);
          We === null ? (B = !0, de = this.state.lastTokStartLoc) : g.properties.push(We);
        }
        this.flowObjectTypeSemicolon(), de && !this.match(8) && !this.match(9) && this.raise(ie.UnexpectedExplicitInexactInObject, de);
      }
      this.expect(C), i && (g.inexact = B);
      const J = this.finishNode(g, "ObjectTypeAnnotation");
      return this.state.inType = P, J;
    }
    flowParseObjectTypeProperty(e, r, i, u, T, P, g) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (P ? g || this.raise(ie.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(ie.InexactInsideNonObject, this.state.lastTokStartLoc), u && this.raise(ie.InexactVariance, u), null) : (P || this.raise(ie.UnexpectedSpreadType, this.state.lastTokStartLoc), i != null && this.unexpected(i), u && this.raise(ie.SpreadVariance, u), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = r, e.proto = i != null, e.kind = T;
        let C = !1;
        return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), u && this.unexpected(u.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (T === "get" || T === "set") && this.flowCheckGetterSetterParams(e), !P && e.key.name === "constructor" && e.value.this && this.raise(ie.ThisParamBannedInConstructor, e.value.this)) : (T !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (C = !0), e.value = this.flowParseTypeInitialiser(), e.variance = u), e.optional = C, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      const r = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? ie.GetterMayNotHaveThisParam : ie.SetterMayNotHaveThisParam, e.value.this), i !== r && this.raise(e.kind === "get" ? A.BadGetterArity : A.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(A.BadSetterRestParameter, e);
    }
    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }
    flowParseQualifiedTypeIdentifier(e, r) {
      e ?? (e = this.state.startLoc);
      let i = r || this.flowParseRestrictedIdentifier(!0);
      for (; this.eat(16); ) {
        const u = this.startNodeAt(e);
        u.qualification = i, u.id = this.flowParseRestrictedIdentifier(!0), i = this.finishNode(u, "QualifiedTypeIdentifier");
      }
      return i;
    }
    flowParseGenericType(e, r) {
      const i = this.startNodeAt(e);
      return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, r), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
    }
    flowParseTypeofType() {
      const e = this.startNode();
      return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
    }
    flowParseTupleType() {
      const e = this.startNode();
      for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
        this.expect(12);
      return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
    }
    flowParseFunctionTypeParam(e) {
      let r = null, i = !1, u = null;
      const T = this.startNode(), P = this.lookahead(), g = this.state.type === 78;
      return P.type === 14 || P.type === 17 ? (g && !e && this.raise(ie.ThisParamMustBeFirst, T), r = this.parseIdentifier(g), this.eat(17) && (i = !0, g && this.raise(ie.ThisParamMayNotBeOptional, T)), u = this.flowParseTypeInitialiser()) : u = this.flowParseType(), T.name = r, T.optional = i, T.typeAnnotation = u, this.finishNode(T, "FunctionTypeParam");
    }
    reinterpretTypeAsFunctionTypeParam(e) {
      const r = this.startNodeAt(e.loc.start);
      return r.name = null, r.optional = !1, r.typeAnnotation = e, this.finishNode(r, "FunctionTypeParam");
    }
    flowParseFunctionTypeParams(e = []) {
      let r = null, i = null;
      for (this.match(78) && (i = this.flowParseFunctionTypeParam(!0), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (r = this.flowParseFunctionTypeParam(!1)), {
        params: e,
        rest: r,
        _this: i
      };
    }
    flowIdentToTypeAnnotation(e, r, i) {
      switch (i.name) {
        case "any":
          return this.finishNode(r, "AnyTypeAnnotation");
        case "bool":
        case "boolean":
          return this.finishNode(r, "BooleanTypeAnnotation");
        case "mixed":
          return this.finishNode(r, "MixedTypeAnnotation");
        case "empty":
          return this.finishNode(r, "EmptyTypeAnnotation");
        case "number":
          return this.finishNode(r, "NumberTypeAnnotation");
        case "string":
          return this.finishNode(r, "StringTypeAnnotation");
        case "symbol":
          return this.finishNode(r, "SymbolTypeAnnotation");
        default:
          return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
      }
    }
    flowParsePrimaryType() {
      const e = this.state.startLoc, r = this.startNode();
      let i, u, T = !1;
      const P = this.state.noAnonFunctionType;
      switch (this.state.type) {
        case 5:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !1,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !0
          });
        case 6:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !0,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !1
          });
        case 0:
          return this.state.noAnonFunctionType = !1, u = this.flowParseTupleType(), this.state.noAnonFunctionType = P, u;
        case 47: {
          const g = this.startNode();
          return g.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), g.params = i.params, g.rest = i.rest, g.this = i._this, this.expect(11), this.expect(19), g.returnType = this.flowParseType(), this.finishNode(g, "FunctionTypeAnnotation");
        }
        case 10: {
          const g = this.startNode();
          if (this.next(), !this.match(11) && !this.match(21))
            if (pe(this.state.type) || this.match(78)) {
              const C = this.lookahead().type;
              T = C !== 17 && C !== 14;
            } else
              T = !0;
          if (T) {
            if (this.state.noAnonFunctionType = !1, u = this.flowParseType(), this.state.noAnonFunctionType = P, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), u;
            this.eat(12);
          }
          return u ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(u)]) : i = this.flowParseFunctionTypeParams(), g.params = i.params, g.rest = i.rest, g.this = i._this, this.expect(11), this.expect(19), g.returnType = this.flowParseType(), g.typeParameters = null, this.finishNode(g, "FunctionTypeAnnotation");
        }
        case 134:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
        case 85:
        case 86:
          return r.value = this.match(85), this.next(), this.finishNode(r, "BooleanLiteralTypeAnnotation");
        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(135))
              return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", r);
            if (this.match(136))
              return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", r);
            throw this.raise(ie.UnexpectedSubtractionOperand, this.state.startLoc);
          }
          throw this.unexpected();
        case 135:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
        case 136:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
        case 88:
          return this.next(), this.finishNode(r, "VoidTypeAnnotation");
        case 84:
          return this.next(), this.finishNode(r, "NullLiteralTypeAnnotation");
        case 78:
          return this.next(), this.finishNode(r, "ThisTypeAnnotation");
        case 55:
          return this.next(), this.finishNode(r, "ExistsTypeAnnotation");
        case 87:
          return this.flowParseTypeofType();
        default:
          if (st(this.state.type)) {
            const g = Be(this.state.type);
            return this.next(), super.createIdentifier(r, g);
          } else if (pe(this.state.type))
            return this.isContextual(129) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, r, this.parseIdentifier());
      }
      throw this.unexpected();
    }
    flowParsePostfixType() {
      const e = this.state.startLoc;
      let r = this.flowParsePrimaryType(), i = !1;
      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
        const u = this.startNodeAt(e), T = this.eat(18);
        i = i || T, this.expect(0), !T && this.match(3) ? (u.elementType = r, this.next(), r = this.finishNode(u, "ArrayTypeAnnotation")) : (u.objectType = r, u.indexType = this.flowParseType(), this.expect(3), i ? (u.optional = T, r = this.finishNode(u, "OptionalIndexedAccessType")) : r = this.finishNode(u, "IndexedAccessType"));
      }
      return r;
    }
    flowParsePrefixType() {
      const e = this.startNode();
      return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }
    flowParseAnonFunctionWithoutParens() {
      const e = this.flowParsePrefixType();
      if (!this.state.noAnonFunctionType && this.eat(19)) {
        const r = this.startNodeAt(e.loc.start);
        return r.params = [this.reinterpretTypeAsFunctionTypeParam(e)], r.rest = null, r.this = null, r.returnType = this.flowParseType(), r.typeParameters = null, this.finishNode(r, "FunctionTypeAnnotation");
      }
      return e;
    }
    flowParseIntersectionType() {
      const e = this.startNode();
      this.eat(45);
      const r = this.flowParseAnonFunctionWithoutParens();
      for (e.types = [r]; this.eat(45); )
        e.types.push(this.flowParseAnonFunctionWithoutParens());
      return e.types.length === 1 ? r : this.finishNode(e, "IntersectionTypeAnnotation");
    }
    flowParseUnionType() {
      const e = this.startNode();
      this.eat(43);
      const r = this.flowParseIntersectionType();
      for (e.types = [r]; this.eat(43); )
        e.types.push(this.flowParseIntersectionType());
      return e.types.length === 1 ? r : this.finishNode(e, "UnionTypeAnnotation");
    }
    flowParseType() {
      const e = this.state.inType;
      this.state.inType = !0;
      const r = this.flowParseUnionType();
      return this.state.inType = e, r;
    }
    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 132 && this.state.value === "_") {
        const e = this.state.startLoc, r = this.parseIdentifier();
        return this.flowParseGenericType(e, r);
      } else
        return this.flowParseType();
    }
    flowParseTypeAnnotation() {
      const e = this.startNode();
      return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
    }
    flowParseTypeAnnotatableIdentifier(e) {
      const r = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
      return this.match(14) && (r.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(r)), r;
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    flowParseVariance() {
      let e = null;
      return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
    }
    parseFunctionBody(e, r, i = !1) {
      if (r) {
        this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, i));
        return;
      }
      super.parseFunctionBody(e, !1, i);
    }
    parseFunctionBodyAndFinish(e, r, i = !1) {
      if (this.match(14)) {
        const u = this.startNode();
        [u.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = u.typeAnnotation ? this.finishNode(u, "TypeAnnotation") : null;
      }
      return super.parseFunctionBodyAndFinish(e, r, i);
    }
    parseStatementLike(e) {
      if (this.state.strict && this.isContextual(129)) {
        const i = this.lookahead();
        if (Le(i.type)) {
          const u = this.startNode();
          return this.next(), this.flowParseInterface(u);
        }
      } else if (this.isContextual(126)) {
        const i = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(i);
      }
      const r = super.parseStatementLike(e);
      return this.flowPragma === void 0 && !this.isValidDirective(r) && (this.flowPragma = null), r;
    }
    parseExpressionStatement(e, r, i) {
      if (r.type === "Identifier") {
        if (r.name === "declare") {
          if (this.match(80) || pe(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (pe(this.state.type)) {
          if (r.name === "interface")
            return this.flowParseInterface(e);
          if (r.name === "type")
            return this.flowParseTypeAlias(e);
          if (r.name === "opaque")
            return this.flowParseOpaqueType(e, !1);
        }
      }
      return super.parseExpressionStatement(e, r, i);
    }
    shouldParseExportDeclaration() {
      const {
        type: e
      } = this.state;
      return e === 126 || ct(e) ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      const {
        type: e
      } = this.state;
      return e === 126 || ct(e) ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }
    parseExportDefaultExpression() {
      if (this.isContextual(126)) {
        const e = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(e);
      }
      return super.parseExportDefaultExpression();
    }
    parseConditional(e, r, i) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const J = this.lookaheadCharCode();
        if (J === 44 || J === 61 || J === 58 || J === 41)
          return this.setOptionalParametersError(i), e;
      }
      this.expect(17);
      const u = this.state.clone(), T = this.state.noArrowAt, P = this.startNodeAt(r);
      let {
        consequent: g,
        failed: C
      } = this.tryParseConditionalConsequent(), [D, B] = this.getArrowLikeExpressions(g);
      if (C || B.length > 0) {
        const J = [...T];
        if (B.length > 0) {
          this.state = u, this.state.noArrowAt = J;
          for (let X = 0; X < B.length; X++)
            J.push(B[X].start);
          ({
            consequent: g,
            failed: C
          } = this.tryParseConditionalConsequent()), [D, B] = this.getArrowLikeExpressions(g);
        }
        C && D.length > 1 && this.raise(ie.AmbiguousConditionalArrow, u.startLoc), C && D.length === 1 && (this.state = u, J.push(D[0].start), this.state.noArrowAt = J, {
          consequent: g,
          failed: C
        } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(g, !0), this.state.noArrowAt = T, this.expect(14), P.test = e, P.consequent = g, P.alternate = this.forwardNoArrowParamsConversionAt(P, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(P, "ConditionalExpression");
    }
    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      const e = this.parseMaybeAssignAllowIn(), r = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), {
        consequent: e,
        failed: r
      };
    }
    getArrowLikeExpressions(e, r) {
      const i = [e], u = [];
      for (; i.length !== 0; ) {
        const T = i.pop();
        T.type === "ArrowFunctionExpression" && T.body.type !== "BlockStatement" ? (T.typeParameters || !T.returnType ? this.finishArrowValidation(T) : u.push(T), i.push(T.body)) : T.type === "ConditionalExpression" && (i.push(T.consequent), i.push(T.alternate));
      }
      return r ? (u.forEach((T) => this.finishArrowValidation(T)), [u, []]) : as(u, (T) => T.params.every((P) => this.isAssignable(P, !0)));
    }
    finishArrowValidation(e) {
      var r;
      this.toAssignableList(e.params, (r = e.extra) == null ? void 0 : r.trailingCommaLoc, !1), this.scope.enter(518), super.checkParams(e, !1, !0), this.scope.exit();
    }
    forwardNoArrowParamsConversionAt(e, r) {
      let i;
      return this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = r(), this.state.noArrowParamsConversionAt.pop()) : i = r(), i;
    }
    parseParenItem(e, r) {
      const i = super.parseParenItem(e, r);
      if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const u = this.startNodeAt(r);
        return u.expression = i, u.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(u, "TypeCastExpression");
      }
      return i;
    }
    assertModuleNodeAllowed(e) {
      e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
    }
    parseExportDeclaration(e) {
      if (this.isContextual(130)) {
        e.exportKind = "type";
        const r = this.startNode();
        return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(e), null) : this.flowParseTypeAlias(r);
      } else if (this.isContextual(131)) {
        e.exportKind = "type";
        const r = this.startNode();
        return this.next(), this.flowParseOpaqueType(r, !1);
      } else if (this.isContextual(129)) {
        e.exportKind = "type";
        const r = this.startNode();
        return this.next(), this.flowParseInterface(r);
      } else if (this.isContextual(126)) {
        e.exportKind = "value";
        const r = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(r);
      } else
        return super.parseExportDeclaration(e);
    }
    eatExportStar(e) {
      return super.eatExportStar(e) ? !0 : this.isContextual(130) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), !0) : !1;
    }
    maybeParseExportNamespaceSpecifier(e) {
      const {
        startLoc: r
      } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
      return i && e.exportKind === "type" && this.unexpected(r), i;
    }
    parseClassId(e, r, i) {
      super.parseClassId(e, r, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
    }
    parseClassMember(e, r, i) {
      const {
        startLoc: u
      } = this.state;
      if (this.isContextual(125)) {
        if (super.parseClassMemberFromModifier(e, r))
          return;
        r.declare = !0;
      }
      super.parseClassMember(e, r, i), r.declare && (r.type !== "ClassProperty" && r.type !== "ClassPrivateProperty" && r.type !== "PropertyDefinition" ? this.raise(ie.DeclareClassElement, u) : r.value && this.raise(ie.DeclareClassFieldInitializer, r.value));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      const e = super.readWord1(), r = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(A.InvalidIdentifier, this.state.curPosition(), {
        identifierName: r
      }), this.finishToken(132, r);
    }
    getTokenFromCode(e) {
      const r = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && r === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? r === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Gr(e, r, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
    }
    isAssignable(e, r) {
      return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, r) : super.isAssignable(e, r);
    }
    toAssignable(e, r = !1) {
      !r && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, r);
    }
    toAssignableList(e, r, i) {
      for (let u = 0; u < e.length; u++) {
        const T = e[u];
        T?.type === "TypeCastExpression" && (e[u] = this.typeCastToParameter(T));
      }
      super.toAssignableList(e, r, i);
    }
    toReferencedList(e, r) {
      for (let u = 0; u < e.length; u++) {
        var i;
        const T = e[u];
        T && T.type === "TypeCastExpression" && !((i = T.extra) != null && i.parenthesized) && (e.length > 1 || !r) && this.raise(ie.TypeCastInPattern, T.typeAnnotation);
      }
      return e;
    }
    parseArrayLike(e, r, i) {
      const u = super.parseArrayLike(e, r, i);
      return i != null && !this.state.maybeInArrowParameters && this.toReferencedList(u.elements), u;
    }
    isValidLVal(e, r, i, u) {
      return e === "TypeCastExpression" || super.isValidLVal(e, r, i, u);
    }
    parseClassProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(14) || super.isClassProperty();
    }
    isNonstaticConstructor(e) {
      return !this.match(14) && super.isNonstaticConstructor(e);
    }
    pushClassMethod(e, r, i, u, T, P) {
      if (r.variance && this.unexpected(r.variance.loc.start), delete r.variance, this.match(47) && (r.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, r, i, u, T, P), r.params && T) {
        const g = r.params;
        g.length > 0 && this.isThisParam(g[0]) && this.raise(ie.ThisParamBannedInConstructor, r);
      } else if (r.type === "MethodDefinition" && T && r.value.params) {
        const g = r.value.params;
        g.length > 0 && this.isThisParam(g[0]) && this.raise(ie.ThisParamBannedInConstructor, r);
      }
    }
    pushClassPrivateMethod(e, r, i, u) {
      r.variance && this.unexpected(r.variance.loc.start), delete r.variance, this.match(47) && (r.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, r, i, u);
    }
    parseClassSuper(e) {
      if (super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression()), this.isContextual(113)) {
        this.next();
        const r = e.implements = [];
        do {
          const i = this.startNode();
          i.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, r.push(this.finishNode(i, "ClassImplements"));
        } while (this.eat(12));
      }
    }
    checkGetterSetterParams(e) {
      super.checkGetterSetterParams(e);
      const r = this.getObjectOrClassMethodParams(e);
      if (r.length > 0) {
        const i = r[0];
        this.isThisParam(i) && e.kind === "get" ? this.raise(ie.GetterMayNotHaveThisParam, i) : this.isThisParam(i) && this.raise(ie.SetterMayNotHaveThisParam, i);
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, r, i, u, T, P, g) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let C;
      this.match(47) && !P && (C = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      const D = super.parseObjPropValue(e, r, i, u, T, P, g);
      return C && ((D.value || D).typeParameters = C), D;
    }
    parseFunctionParamType(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(ie.PatternIsOptional, e), this.isThisParam(e) && this.raise(ie.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(ie.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(ie.ThisParamNoDefault, e), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, r) {
      const i = super.parseMaybeDefault(e, r);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(ie.TypeBeforeInitializer, i.typeAnnotation), i;
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(ie.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    parseImportSpecifierLocal(e, r, i) {
      r.local = Gt(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(r, i));
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        if (!e) return !0;
        const r = this.lookaheadCharCode();
        return r === 123 || r === 42;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, r, i, u) {
      if (super.applyImportPhase(e, r, i, u), r) {
        if (!i && this.match(65))
          return;
        e.exportKind = i === "type" ? i : "value";
      } else
        i === "type" && this.match(55) && this.unexpected(), e.importKind = i === "type" || i === "typeof" ? i : "value";
    }
    parseImportSpecifier(e, r, i, u, T) {
      const P = e.imported;
      let g = null;
      P.type === "Identifier" && (P.name === "type" ? g = "type" : P.name === "typeof" && (g = "typeof"));
      let C = !1;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        const B = this.parseIdentifier(!0);
        g !== null && !Le(this.state.type) ? (e.imported = B, e.importKind = g, e.local = this.cloneIdentifier(B)) : (e.imported = P, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (g !== null && Le(this.state.type))
          e.imported = this.parseIdentifier(!0), e.importKind = g;
        else {
          if (r)
            throw this.raise(A.ImportBindingIsString, e, {
              importName: P.value
            });
          e.imported = P, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (C = !0, e.local = this.cloneIdentifier(e.imported));
      }
      const D = Gt(e);
      return i && D && this.raise(ie.ImportTypeShorthandOnlyInPureImport, e), (i || D) && this.checkReservedType(e.local.name, e.local.loc.start, !0), C && !i && !D && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
    }
    parseBindingAtom() {
      return this.state.type === 78 ? this.parseIdentifier(!0) : super.parseBindingAtom();
    }
    parseFunctionParams(e, r) {
      const i = e.kind;
      i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, r);
    }
    parseVarId(e, r) {
      super.parseVarId(e, r), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, r) {
      if (this.match(14)) {
        const i = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
      }
      return super.parseAsyncArrowFromCallExpression(e, r);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    parseMaybeAssign(e, r) {
      var i;
      let u = null, T;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (u = this.state.clone(), T = this.tryParse(() => super.parseMaybeAssign(e, r), u), !T.error) return T.node;
        const {
          context: C
        } = this.state, D = C[C.length - 1];
        (D === ue.j_oTag || D === ue.j_expr) && C.pop();
      }
      if ((i = T) != null && i.error || this.match(47)) {
        var P, g;
        u = u || this.state.clone();
        let C;
        const D = this.tryParse((J) => {
          var X;
          C = this.flowParseTypeParameterDeclaration();
          const G = this.forwardNoArrowParamsConversionAt(C, () => {
            const Pe = super.parseMaybeAssign(e, r);
            return this.resetStartLocationFromNode(Pe, C), Pe;
          });
          (X = G.extra) != null && X.parenthesized && J();
          const de = this.maybeUnwrapTypeCastExpression(G);
          return de.type !== "ArrowFunctionExpression" && J(), de.typeParameters = C, this.resetStartLocationFromNode(de, C), G;
        }, u);
        let B = null;
        if (D.node && this.maybeUnwrapTypeCastExpression(D.node).type === "ArrowFunctionExpression") {
          if (!D.error && !D.aborted)
            return D.node.async && this.raise(ie.UnexpectedTypeParameterBeforeAsyncArrowFunction, C), D.node;
          B = D.node;
        }
        if ((P = T) != null && P.node)
          return this.state = T.failState, T.node;
        if (B)
          return this.state = D.failState, B;
        throw (g = T) != null && g.thrown ? T.error : D.thrown ? D.error : this.raise(ie.UnexpectedTokenAfterTypeParameter, C);
      }
      return super.parseMaybeAssign(e, r);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const r = this.tryParse(() => {
          const i = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = !0;
          const u = this.startNode();
          return [u.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), u;
        });
        if (r.thrown) return null;
        r.error && (this.state = r.failState), e.returnType = r.node.typeAnnotation ? this.finishNode(r.node, "TypeAnnotation") : null;
      }
      return super.parseArrow(e);
    }
    shouldParseArrow(e) {
      return this.match(14) || super.shouldParseArrow(e);
    }
    setArrowFunctionParameters(e, r) {
      this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? e.params = r : super.setArrowFunctionParameters(e, r);
    }
    checkParams(e, r, i, u = !0) {
      if (!(i && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)))) {
        for (let T = 0; T < e.params.length; T++)
          this.isThisParam(e.params[T]) && T > 0 && this.raise(ie.ThisParamMustBeFirst, e.params[T]);
        super.checkParams(e, r, i, u);
      }
    }
    parseParenAndDistinguishExpression(e) {
      return super.parseParenAndDistinguishExpression(e && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
    }
    parseSubscripts(e, r, i) {
      if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.includes(r.index)) {
        this.next();
        const u = this.startNodeAt(r);
        u.callee = e, u.arguments = super.parseCallExpressionArguments(), e = this.finishNode(u, "CallExpression");
      } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
        const u = this.state.clone(), T = this.tryParse((g) => this.parseAsyncArrowWithTypeParameters(r) || g(), u);
        if (!T.error && !T.aborted) return T.node;
        const P = this.tryParse(() => super.parseSubscripts(e, r, i), u);
        if (P.node && !P.error) return P.node;
        if (T.node)
          return this.state = T.failState, T.node;
        if (P.node)
          return this.state = P.failState, P.node;
        throw T.error || P.error;
      }
      return super.parseSubscripts(e, r, i);
    }
    parseSubscript(e, r, i, u) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (u.optionalChainMember = !0, i)
          return u.stop = !0, e;
        this.next();
        const T = this.startNodeAt(r);
        return T.callee = e, T.typeArguments = this.flowParseTypeParameterInstantiationInExpression(), this.expect(10), T.arguments = this.parseCallExpressionArguments(), T.optional = !0, this.finishCallExpression(T, !0);
      } else if (!i && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
        const T = this.startNodeAt(r);
        T.callee = e;
        const P = this.tryParse(() => (T.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), T.arguments = super.parseCallExpressionArguments(), u.optionalChainMember && (T.optional = !1), this.finishCallExpression(T, u.optionalChainMember)));
        if (P.node)
          return P.error && (this.state = P.failState), P.node;
      }
      return super.parseSubscript(e, r, i, u);
    }
    parseNewCallee(e) {
      super.parseNewCallee(e);
      let r = null;
      this.shouldParseTypes() && this.match(47) && (r = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = r;
    }
    parseAsyncArrowWithTypeParameters(e) {
      const r = this.startNodeAt(e);
      if (this.parseFunctionParams(r, !1), !!this.parseArrow(r))
        return super.parseArrowExpression(r, void 0, !0);
    }
    readToken_mult_modulo(e) {
      const r = this.input.charCodeAt(this.state.pos + 1);
      if (e === 42 && r === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
        return;
      }
      super.readToken_mult_modulo(e);
    }
    readToken_pipe_amp(e) {
      const r = this.input.charCodeAt(this.state.pos + 1);
      if (e === 124 && r === 125) {
        this.finishOp(9, 2);
        return;
      }
      super.readToken_pipe_amp(e);
    }
    parseTopLevel(e, r) {
      const i = super.parseTopLevel(e, r);
      return this.state.hasFlowComment && this.raise(ie.UnterminatedFlowComment, this.state.curPosition()), i;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(ie.NestedFlowComment, this.state.startLoc);
        this.hasFlowCommentCompletion();
        const e = this.skipFlowComment();
        e && (this.state.pos += e, this.state.hasFlowComment = !0);
        return;
      }
      return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
    }
    skipFlowComment() {
      const {
        pos: e
      } = this.state;
      let r = 2;
      for (; [32, 9].includes(this.input.charCodeAt(e + r)); )
        r++;
      const i = this.input.charCodeAt(r + e), u = this.input.charCodeAt(r + e + 1);
      return i === 58 && u === 58 ? r + 2 : this.input.slice(r + e, r + e + 12) === "flow-include" ? r + 12 : i === 58 && u !== 58 ? r : !1;
    }
    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1)
        throw this.raise(A.UnterminatedComment, this.state.curPosition());
    }
    flowEnumErrorBooleanMemberNotInitialized(e, {
      enumName: r,
      memberName: i
    }) {
      this.raise(ie.EnumBooleanMemberNotInitialized, e, {
        memberName: i,
        enumName: r
      });
    }
    flowEnumErrorInvalidMemberInitializer(e, r) {
      return this.raise(r.explicitType ? r.explicitType === "symbol" ? ie.EnumInvalidMemberInitializerSymbolType : ie.EnumInvalidMemberInitializerPrimaryType : ie.EnumInvalidMemberInitializerUnknownType, e, r);
    }
    flowEnumErrorNumberMemberNotInitialized(e, r) {
      this.raise(ie.EnumNumberMemberNotInitialized, e, r);
    }
    flowEnumErrorStringMemberInconsistentlyInitialized(e, r) {
      this.raise(ie.EnumStringMemberInconsistentlyInitialized, e, r);
    }
    flowEnumMemberInit() {
      const e = this.state.startLoc, r = () => this.match(12) || this.match(8);
      switch (this.state.type) {
        case 135: {
          const i = this.parseNumericLiteral(this.state.value);
          return r() ? {
            type: "number",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 134: {
          const i = this.parseStringLiteral(this.state.value);
          return r() ? {
            type: "string",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 85:
        case 86: {
          const i = this.parseBooleanLiteral(this.match(85));
          return r() ? {
            type: "boolean",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        default:
          return {
            type: "invalid",
            loc: e
          };
      }
    }
    flowEnumMemberRaw() {
      const e = this.state.startLoc, r = this.parseIdentifier(!0), i = this.eat(29) ? this.flowEnumMemberInit() : {
        type: "none",
        loc: e
      };
      return {
        id: r,
        init: i
      };
    }
    flowEnumCheckExplicitTypeMismatch(e, r, i) {
      const {
        explicitType: u
      } = r;
      u !== null && u !== i && this.flowEnumErrorInvalidMemberInitializer(e, r);
    }
    flowEnumMembers({
      enumName: e,
      explicitType: r
    }) {
      const i = /* @__PURE__ */ new Set(), u = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      };
      let T = !1;
      for (; !this.match(8); ) {
        if (this.eat(21)) {
          T = !0;
          break;
        }
        const P = this.startNode(), {
          id: g,
          init: C
        } = this.flowEnumMemberRaw(), D = g.name;
        if (D === "")
          continue;
        /^[a-z]/.test(D) && this.raise(ie.EnumInvalidMemberName, g, {
          memberName: D,
          suggestion: D[0].toUpperCase() + D.slice(1),
          enumName: e
        }), i.has(D) && this.raise(ie.EnumDuplicateMemberName, g, {
          memberName: D,
          enumName: e
        }), i.add(D);
        const B = {
          enumName: e,
          explicitType: r,
          memberName: D
        };
        switch (P.id = g, C.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(C.loc, B, "boolean"), P.init = C.value, u.booleanMembers.push(this.finishNode(P, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(C.loc, B, "number"), P.init = C.value, u.numberMembers.push(this.finishNode(P, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(C.loc, B, "string"), P.init = C.value, u.stringMembers.push(this.finishNode(P, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(C.loc, B);
          case "none":
            switch (r) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(C.loc, B);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(C.loc, B);
                break;
              default:
                u.defaultedMembers.push(this.finishNode(P, "EnumDefaultedMember"));
            }
        }
        this.match(8) || this.expect(12);
      }
      return {
        members: u,
        hasUnknownMembers: T
      };
    }
    flowEnumStringMembers(e, r, {
      enumName: i
    }) {
      if (e.length === 0)
        return r;
      if (r.length === 0)
        return e;
      if (r.length > e.length) {
        for (const u of e)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(u, {
            enumName: i
          });
        return r;
      } else {
        for (const u of r)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(u, {
            enumName: i
          });
        return e;
      }
    }
    flowEnumParseExplicitType({
      enumName: e
    }) {
      if (!this.eatContextual(102)) return null;
      if (!pe(this.state.type))
        throw this.raise(ie.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
          enumName: e
        });
      const {
        value: r
      } = this.state;
      return this.next(), r !== "boolean" && r !== "number" && r !== "string" && r !== "symbol" && this.raise(ie.EnumInvalidExplicitType, this.state.startLoc, {
        enumName: e,
        invalidEnumType: r
      }), r;
    }
    flowEnumBody(e, r) {
      const i = r.name, u = r.loc.start, T = this.flowEnumParseExplicitType({
        enumName: i
      });
      this.expect(5);
      const {
        members: P,
        hasUnknownMembers: g
      } = this.flowEnumMembers({
        enumName: i,
        explicitType: T
      });
      switch (e.hasUnknownMembers = g, T) {
        case "boolean":
          return e.explicitType = !0, e.members = P.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        case "number":
          return e.explicitType = !0, e.members = P.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        case "string":
          return e.explicitType = !0, e.members = this.flowEnumStringMembers(P.stringMembers, P.defaultedMembers, {
            enumName: i
          }), this.expect(8), this.finishNode(e, "EnumStringBody");
        case "symbol":
          return e.members = P.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
        default: {
          const C = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = !1;
          const D = P.booleanMembers.length, B = P.numberMembers.length, J = P.stringMembers.length, X = P.defaultedMembers.length;
          if (!D && !B && !J && !X)
            return C();
          if (!D && !B)
            return e.members = this.flowEnumStringMembers(P.stringMembers, P.defaultedMembers, {
              enumName: i
            }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!B && !J && D >= X) {
            for (const G of P.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(G.loc.start, {
                enumName: i,
                memberName: G.id.name
              });
            return e.members = P.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!D && !J && B >= X) {
            for (const G of P.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(G.loc.start, {
                enumName: i,
                memberName: G.id.name
              });
            return e.members = P.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(ie.EnumInconsistentMemberValues, u, {
              enumName: i
            }), C();
        }
      }
    }
    flowParseEnumDeclaration(e) {
      const r = this.parseIdentifier();
      return e.id = r, e.body = this.flowEnumBody(this.startNode(), r), this.finishNode(e, "EnumDeclaration");
    }
    jsxParseOpeningElementAfterName(e) {
      return this.shouldParseTypes() && (this.match(47) || this.match(51)) && (e.typeArguments = this.flowParseTypeParameterInstantiationInExpression()), super.jsxParseOpeningElementAfterName(e);
    }
    isLookaheadToken_lt() {
      const e = this.nextTokenStart();
      if (this.input.charCodeAt(e) === 60) {
        const r = this.input.charCodeAt(e + 1);
        return r !== 60 && r !== 61;
      }
      return !1;
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    maybeUnwrapTypeCastExpression(e) {
      return e.type === "TypeCastExpression" ? e.expression : e;
    }
  };
  const ls = {
    __proto__: null,
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
  }, us = /\r\n|[\r\n\u2028\u2029]/, pt = new RegExp(us.source, "g");
  function Ze(y) {
    switch (y) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0;
      default:
        return !1;
    }
  }
  function Qt(y, t, e) {
    for (let r = t; r < e; r++)
      if (Ze(y.charCodeAt(r)))
        return !0;
    return !1;
  }
  const _t = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Bt = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function cs(y) {
    switch (y) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0;
      default:
        return !1;
    }
  }
  const $e = V`jsx`({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
    MissingClosingTagElement: ({
      openingTagName: y
    }) => `Expected corresponding JSX closing tag for <${y}>.`,
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnexpectedToken: ({
      unexpected: y,
      HTMLEntity: t
    }) => `Unexpected token \`${y}\`. Did you mean \`${t}\` or \`{'${y}'}\`?`,
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
    UnterminatedJsxContent: "Unterminated JSX contents.",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });
  function Ue(y) {
    return y ? y.type === "JSXOpeningFragment" || y.type === "JSXClosingFragment" : !1;
  }
  function et(y) {
    if (y.type === "JSXIdentifier")
      return y.name;
    if (y.type === "JSXNamespacedName")
      return y.namespace.name + ":" + y.name.name;
    if (y.type === "JSXMemberExpression")
      return et(y.object) + "." + et(y.property);
    throw new Error("Node had unexpected type: " + y.type);
  }
  var ps = (y) => class extends y {
    jsxReadToken() {
      let e = "", r = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise($e.UnterminatedJsxContent, this.state.startLoc);
        const i = this.input.charCodeAt(this.state.pos);
        switch (i) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(143)) : super.getTokenFromCode(i);
              return;
            }
            e += this.input.slice(r, this.state.pos), this.finishToken(142, e);
            return;
          case 38:
            e += this.input.slice(r, this.state.pos), e += this.jsxReadEntity(), r = this.state.pos;
            break;
          default:
            Ze(i) ? (e += this.input.slice(r, this.state.pos), e += this.jsxReadNewLine(!0), r = this.state.pos) : ++this.state.pos;
        }
      }
    }
    jsxReadNewLine(e) {
      const r = this.input.charCodeAt(this.state.pos);
      let i;
      return ++this.state.pos, r === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(r), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
    }
    jsxReadString(e) {
      let r = "", i = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(A.UnterminatedString, this.state.startLoc);
        const u = this.input.charCodeAt(this.state.pos);
        if (u === e) break;
        u === 38 ? (r += this.input.slice(i, this.state.pos), r += this.jsxReadEntity(), i = this.state.pos) : Ze(u) ? (r += this.input.slice(i, this.state.pos), r += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
      }
      r += this.input.slice(i, this.state.pos++), this.finishToken(134, r);
    }
    jsxReadEntity() {
      const e = ++this.state.pos;
      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let r = 10;
        this.codePointAtPos(this.state.pos) === 120 && (r = 16, ++this.state.pos);
        const i = this.readInt(r, void 0, !1, "bail");
        if (i !== null && this.codePointAtPos(this.state.pos) === 59)
          return ++this.state.pos, String.fromCodePoint(i);
      } else {
        let r = 0, i = !1;
        for (; r++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) === 59); )
          ++this.state.pos;
        if (i) {
          const u = this.input.slice(e, this.state.pos), T = ls[u];
          if (++this.state.pos, T)
            return T;
        }
      }
      return this.state.pos = e, "&";
    }
    jsxReadWord() {
      let e;
      const r = this.state.pos;
      do
        e = this.input.charCodeAt(++this.state.pos);
      while (Xe(e) || e === 45);
      this.finishToken(141, this.input.slice(r, this.state.pos));
    }
    jsxParseIdentifier() {
      const e = this.startNode();
      return this.match(141) ? e.name = this.state.value : st(this.state.type) ? e.name = Be(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
    }
    jsxParseNamespacedName() {
      const e = this.state.startLoc, r = this.jsxParseIdentifier();
      if (!this.eat(14)) return r;
      const i = this.startNodeAt(e);
      return i.namespace = r, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
    }
    jsxParseElementName() {
      const e = this.state.startLoc;
      let r = this.jsxParseNamespacedName();
      if (r.type === "JSXNamespacedName")
        return r;
      for (; this.eat(16); ) {
        const i = this.startNodeAt(e);
        i.object = r, i.property = this.jsxParseIdentifier(), r = this.finishNode(i, "JSXMemberExpression");
      }
      return r;
    }
    jsxParseAttributeValue() {
      let e;
      switch (this.state.type) {
        case 5:
          return e = this.startNode(), this.setContext(ue.brace), this.next(), e = this.jsxParseExpressionContainer(e, ue.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise($e.AttributeIsEmpty, e), e;
        case 143:
        case 134:
          return this.parseExprAtom();
        default:
          throw this.raise($e.UnsupportedJsxValue, this.state.startLoc);
      }
    }
    jsxParseEmptyExpression() {
      const e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(ue.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
    }
    jsxParseExpressionContainer(e, r) {
      if (this.match(8))
        e.expression = this.jsxParseEmptyExpression();
      else {
        const i = this.parseExpression();
        e.expression = i;
      }
      return this.setContext(r), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
    }
    jsxParseAttribute() {
      const e = this.startNode();
      return this.match(5) ? (this.setContext(ue.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(ue.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
    }
    jsxParseOpeningElementAt(e) {
      const r = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(r, "JSXOpeningFragment") : (r.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(r));
    }
    jsxParseOpeningElementAfterName(e) {
      const r = [];
      for (; !this.match(56) && !this.match(144); )
        r.push(this.jsxParseAttribute());
      return e.attributes = r, e.selfClosing = this.eat(56), this.expect(144), this.finishNode(e, "JSXOpeningElement");
    }
    jsxParseClosingElementAt(e) {
      const r = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(r, "JSXClosingFragment") : (r.name = this.jsxParseElementName(), this.expect(144), this.finishNode(r, "JSXClosingElement"));
    }
    jsxParseElementAt(e) {
      const r = this.startNodeAt(e), i = [], u = this.jsxParseOpeningElementAt(e);
      let T = null;
      if (!u.selfClosing) {
        e: for (; ; )
          switch (this.state.type) {
            case 143:
              if (e = this.state.startLoc, this.next(), this.eat(56)) {
                T = this.jsxParseClosingElementAt(e);
                break e;
              }
              i.push(this.jsxParseElementAt(e));
              break;
            case 142:
              i.push(this.parseLiteral(this.state.value, "JSXText"));
              break;
            case 5: {
              const P = this.startNode();
              this.setContext(ue.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(P)) : i.push(this.jsxParseExpressionContainer(P, ue.j_expr));
              break;
            }
            default:
              this.unexpected();
          }
        Ue(u) && !Ue(T) && T !== null ? this.raise($e.MissingClosingTagFragment, T) : !Ue(u) && Ue(T) ? this.raise($e.MissingClosingTagElement, T, {
          openingTagName: et(u.name)
        }) : !Ue(u) && !Ue(T) && et(T.name) !== et(u.name) && this.raise($e.MissingClosingTagElement, T, {
          openingTagName: et(u.name)
        });
      }
      if (Ue(u) ? (r.openingFragment = u, r.closingFragment = T) : (r.openingElement = u, r.closingElement = T), r.children = i, this.match(47))
        throw this.raise($e.UnwrappedAdjacentJSXElements, this.state.startLoc);
      return Ue(u) ? this.finishNode(r, "JSXFragment") : this.finishNode(r, "JSXElement");
    }
    jsxParseElement() {
      const e = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(e);
    }
    setContext(e) {
      const {
        context: r
      } = this.state;
      r[r.length - 1] = e;
    }
    parseExprAtom(e) {
      return this.match(143) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(143), this.jsxParseElement()) : super.parseExprAtom(e);
    }
    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }
    getTokenFromCode(e) {
      const r = this.curContext();
      if (r === ue.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (r === ue.j_oTag || r === ue.j_cTag) {
        if (Fe(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(144);
          return;
        }
        if ((e === 34 || e === 39) && r === ue.j_oTag) {
          this.jsxReadString(e);
          return;
        }
      }
      if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
        ++this.state.pos, this.finishToken(143);
        return;
      }
      super.getTokenFromCode(e);
    }
    updateContext(e) {
      const {
        context: r,
        type: i
      } = this.state;
      if (i === 56 && e === 143)
        r.splice(-2, 2, ue.j_cTag), this.state.canStartJSXElement = !1;
      else if (i === 143)
        r.push(ue.j_oTag);
      else if (i === 144) {
        const u = r[r.length - 1];
        u === ue.j_oTag && e === 56 || u === ue.j_cTag ? (r.pop(), this.state.canStartJSXElement = r[r.length - 1] === ue.j_expr) : (this.setContext(ue.j_expr), this.state.canStartJSXElement = !0);
      } else
        this.state.canStartJSXElement = bt(i);
    }
  };
  class fs extends kt {
    constructor(...t) {
      super(...t), this.tsNames = /* @__PURE__ */ new Map();
    }
  }
  class ds extends Mt {
    constructor(...t) {
      super(...t), this.importsStack = [];
    }
    createScope(t) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new fs(t);
    }
    enter(t) {
      t === 1024 && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
    }
    exit() {
      const t = super.exit();
      return t === 1024 && this.importsStack.pop(), t;
    }
    hasImport(t, e) {
      const r = this.importsStack.length;
      if (this.importsStack[r - 1].has(t))
        return !0;
      if (!e && r > 1) {
        for (let i = 0; i < r - 1; i++)
          if (this.importsStack[i].has(t)) return !0;
      }
      return !1;
    }
    declareName(t, e, r) {
      if (e & 4096) {
        this.hasImport(t, !0) && this.parser.raise(A.VarRedeclaration, r, {
          identifierName: t
        }), this.importsStack[this.importsStack.length - 1].add(t);
        return;
      }
      const i = this.currentScope();
      let u = i.tsNames.get(t) || 0;
      if (e & 1024) {
        this.maybeExportDefined(i, t), i.tsNames.set(t, u | 16);
        return;
      }
      super.declareName(t, e, r), e & 2 && (e & 1 || (this.checkRedeclarationInScope(i, t, e, r), this.maybeExportDefined(i, t)), u = u | 1), e & 256 && (u = u | 2), e & 512 && (u = u | 4), e & 128 && (u = u | 8), u && i.tsNames.set(t, u);
    }
    isRedeclaredInScope(t, e, r) {
      const i = t.tsNames.get(e);
      if ((i & 2) > 0) {
        if (r & 256) {
          const u = !!(r & 512), T = (i & 4) > 0;
          return u !== T;
        }
        return !0;
      }
      return r & 128 && (i & 8) > 0 ? t.names.get(e) & 2 ? !!(r & 1) : !1 : r & 2 && (i & 1) > 0 ? !0 : super.isRedeclaredInScope(t, e, r);
    }
    checkLocalExport(t) {
      const {
        name: e
      } = t;
      if (this.hasImport(e)) return;
      const r = this.scopeStack.length;
      for (let i = r - 1; i >= 0; i--) {
        const T = this.scopeStack[i].tsNames.get(e);
        if ((T & 1) > 0 || (T & 16) > 0)
          return;
      }
      super.checkLocalExport(t);
    }
  }
  class hs {
    constructor() {
      this.stacks = [];
    }
    enter(t) {
      this.stacks.push(t);
    }
    exit() {
      this.stacks.pop();
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
    get hasAwait() {
      return (this.currentFlags() & 2) > 0;
    }
    get hasYield() {
      return (this.currentFlags() & 1) > 0;
    }
    get hasReturn() {
      return (this.currentFlags() & 4) > 0;
    }
    get hasIn() {
      return (this.currentFlags() & 8) > 0;
    }
  }
  function ft(y, t) {
    return (y ? 2 : 0) | (t ? 1 : 0);
  }
  class ys {
    constructor() {
      this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
    }
    sourceToOffsetPos(t) {
      return t + this.startIndex;
    }
    offsetToSourcePos(t) {
      return t - this.startIndex;
    }
    hasPlugin(t) {
      if (typeof t == "string")
        return this.plugins.has(t);
      {
        const [e, r] = t;
        if (!this.hasPlugin(e))
          return !1;
        const i = this.plugins.get(e);
        for (const u of Object.keys(r))
          if (i?.[u] !== r[u])
            return !1;
        return !0;
      }
    }
    getPluginOption(t, e) {
      var r;
      return (r = this.plugins.get(t)) == null ? void 0 : r[e];
    }
  }
  function Zt(y, t) {
    y.trailingComments === void 0 ? y.trailingComments = t : y.trailingComments.unshift(...t);
  }
  function ms(y, t) {
    y.leadingComments === void 0 ? y.leadingComments = t : y.leadingComments.unshift(...t);
  }
  function at(y, t) {
    y.innerComments === void 0 ? y.innerComments = t : y.innerComments.unshift(...t);
  }
  function Ke(y, t, e) {
    let r = null, i = t.length;
    for (; r === null && i > 0; )
      r = t[--i];
    r === null || r.start > e.start ? at(y, e.comments) : Zt(r, e.comments);
  }
  class Ts extends ys {
    addComment(t) {
      this.filename && (t.loc.filename = this.filename);
      const {
        commentsLen: e
      } = this.state;
      this.comments.length !== e && (this.comments.length = e), this.comments.push(t), this.state.commentsLen++;
    }
    processComment(t) {
      const {
        commentStack: e
      } = this.state, r = e.length;
      if (r === 0) return;
      let i = r - 1;
      const u = e[i];
      u.start === t.end && (u.leadingNode = t, i--);
      const {
        start: T
      } = t;
      for (; i >= 0; i--) {
        const P = e[i], g = P.end;
        if (g > T)
          P.containingNode = t, this.finalizeComment(P), e.splice(i, 1);
        else {
          g === T && (P.trailingNode = t);
          break;
        }
      }
    }
    finalizeComment(t) {
      var e;
      const {
        comments: r
      } = t;
      if (t.leadingNode !== null || t.trailingNode !== null)
        t.leadingNode !== null && Zt(t.leadingNode, r), t.trailingNode !== null && ms(t.trailingNode, r);
      else {
        const i = t.containingNode, u = t.start;
        if (this.input.charCodeAt(this.offsetToSourcePos(u) - 1) === 44)
          switch (i.type) {
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              Ke(i, i.properties, t);
              break;
            case "CallExpression":
            case "OptionalCallExpression":
              Ke(i, i.arguments, t);
              break;
            case "ImportExpression":
              Ke(i, [i.source, (e = i.options) != null ? e : null], t);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
              Ke(i, i.params, t);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              Ke(i, i.elements, t);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              Ke(i, i.specifiers, t);
              break;
            case "TSEnumDeclaration":
              Ke(i, i.members, t);
              break;
            case "TSEnumBody":
              Ke(i, i.members, t);
              break;
            default:
              at(i, r);
          }
        else
          at(i, r);
      }
    }
    finalizeRemainingComments() {
      const {
        commentStack: t
      } = this.state;
      for (let e = t.length - 1; e >= 0; e--)
        this.finalizeComment(t[e]);
      this.state.commentStack = [];
    }
    resetPreviousNodeTrailingComments(t) {
      const {
        commentStack: e
      } = this.state, {
        length: r
      } = e;
      if (r === 0) return;
      const i = e[r - 1];
      i.leadingNode === t && (i.leadingNode = null);
    }
    takeSurroundingComments(t, e, r) {
      const {
        commentStack: i
      } = this.state, u = i.length;
      if (u === 0) return;
      let T = u - 1;
      for (; T >= 0; T--) {
        const P = i[T], g = P.end;
        if (P.start === r)
          P.leadingNode = t;
        else if (g === e)
          P.trailingNode = t;
        else if (g < e)
          break;
      }
    }
  }
  class Ft {
    constructor() {
      this.flags = 1024, this.startIndex = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 140, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [ue.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
    }
    get strict() {
      return (this.flags & 1) > 0;
    }
    set strict(t) {
      t ? this.flags |= 1 : this.flags &= -2;
    }
    init({
      strictMode: t,
      sourceType: e,
      startIndex: r,
      startLine: i,
      startColumn: u
    }) {
      this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.startIndex = r, this.curLine = i, this.lineStart = -u, this.startLoc = this.endLoc = new l(i, u, r);
    }
    get maybeInArrowParameters() {
      return (this.flags & 2) > 0;
    }
    set maybeInArrowParameters(t) {
      t ? this.flags |= 2 : this.flags &= -3;
    }
    get inType() {
      return (this.flags & 4) > 0;
    }
    set inType(t) {
      t ? this.flags |= 4 : this.flags &= -5;
    }
    get noAnonFunctionType() {
      return (this.flags & 8) > 0;
    }
    set noAnonFunctionType(t) {
      t ? this.flags |= 8 : this.flags &= -9;
    }
    get hasFlowComment() {
      return (this.flags & 16) > 0;
    }
    set hasFlowComment(t) {
      t ? this.flags |= 16 : this.flags &= -17;
    }
    get isAmbientContext() {
      return (this.flags & 32) > 0;
    }
    set isAmbientContext(t) {
      t ? this.flags |= 32 : this.flags &= -33;
    }
    get inAbstractClass() {
      return (this.flags & 64) > 0;
    }
    set inAbstractClass(t) {
      t ? this.flags |= 64 : this.flags &= -65;
    }
    get inDisallowConditionalTypesContext() {
      return (this.flags & 128) > 0;
    }
    set inDisallowConditionalTypesContext(t) {
      t ? this.flags |= 128 : this.flags &= -129;
    }
    get soloAwait() {
      return (this.flags & 256) > 0;
    }
    set soloAwait(t) {
      t ? this.flags |= 256 : this.flags &= -257;
    }
    get inFSharpPipelineDirectBody() {
      return (this.flags & 512) > 0;
    }
    set inFSharpPipelineDirectBody(t) {
      t ? this.flags |= 512 : this.flags &= -513;
    }
    get canStartJSXElement() {
      return (this.flags & 1024) > 0;
    }
    set canStartJSXElement(t) {
      t ? this.flags |= 1024 : this.flags &= -1025;
    }
    get containsEsc() {
      return (this.flags & 2048) > 0;
    }
    set containsEsc(t) {
      t ? this.flags |= 2048 : this.flags &= -2049;
    }
    get hasTopLevelAwait() {
      return (this.flags & 4096) > 0;
    }
    set hasTopLevelAwait(t) {
      t ? this.flags |= 4096 : this.flags &= -4097;
    }
    curPosition() {
      return new l(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    }
    clone() {
      const t = new Ft();
      return t.flags = this.flags, t.startIndex = this.startIndex, t.curLine = this.curLine, t.lineStart = this.lineStart, t.startLoc = this.startLoc, t.endLoc = this.endLoc, t.errors = this.errors.slice(), t.potentialArrowAt = this.potentialArrowAt, t.noArrowAt = this.noArrowAt.slice(), t.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), t.topicContext = this.topicContext, t.labels = this.labels.slice(), t.commentsLen = this.commentsLen, t.commentStack = this.commentStack.slice(), t.pos = this.pos, t.type = this.type, t.value = this.value, t.start = this.start, t.end = this.end, t.lastTokEndLoc = this.lastTokEndLoc, t.lastTokStartLoc = this.lastTokStartLoc, t.context = this.context.slice(), t.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, t.strictErrors = this.strictErrors, t.tokensLength = this.tokensLength, t;
    }
  }
  var Ss = function(t) {
    return t >= 48 && t <= 57;
  };
  const er = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, dt = {
    bin: (y) => y === 48 || y === 49,
    oct: (y) => y >= 48 && y <= 55,
    dec: (y) => y >= 48 && y <= 57,
    hex: (y) => y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102
  };
  function tr(y, t, e, r, i, u) {
    const T = e, P = r, g = i;
    let C = "", D = null, B = e;
    const {
      length: J
    } = t;
    for (; ; ) {
      if (e >= J) {
        u.unterminated(T, P, g), C += t.slice(B, e);
        break;
      }
      const X = t.charCodeAt(e);
      if (xs(y, X, t, e)) {
        C += t.slice(B, e);
        break;
      }
      if (X === 92) {
        C += t.slice(B, e);
        const G = bs(t, e, r, i, y === "template", u);
        G.ch === null && !D ? D = {
          pos: e,
          lineStart: r,
          curLine: i
        } : C += G.ch, {
          pos: e,
          lineStart: r,
          curLine: i
        } = G, B = e;
      } else X === 8232 || X === 8233 ? (++e, ++i, r = e) : X === 10 || X === 13 ? y === "template" ? (C += t.slice(B, e) + `
`, ++e, X === 13 && t.charCodeAt(e) === 10 && ++e, ++i, B = r = e) : u.unterminated(T, P, g) : ++e;
    }
    return {
      pos: e,
      str: C,
      firstInvalidLoc: D,
      lineStart: r,
      curLine: i,
      containsInvalid: !!D
    };
  }
  function xs(y, t, e, r) {
    return y === "template" ? t === 96 || t === 36 && e.charCodeAt(r + 1) === 123 : t === (y === "double" ? 34 : 39);
  }
  function bs(y, t, e, r, i, u) {
    const T = !i;
    t++;
    const P = (C) => ({
      pos: t,
      ch: C,
      lineStart: e,
      curLine: r
    }), g = y.charCodeAt(t++);
    switch (g) {
      case 110:
        return P(`
`);
      case 114:
        return P("\r");
      case 120: {
        let C;
        return {
          code: C,
          pos: t
        } = Rt(y, t, e, r, 2, !1, T, u), P(C === null ? null : String.fromCharCode(C));
      }
      case 117: {
        let C;
        return {
          code: C,
          pos: t
        } = sr(y, t, e, r, T, u), P(C === null ? null : String.fromCodePoint(C));
      }
      case 116:
        return P("	");
      case 98:
        return P("\b");
      case 118:
        return P("\v");
      case 102:
        return P("\f");
      case 13:
        y.charCodeAt(t) === 10 && ++t;
      case 10:
        e = t, ++r;
      case 8232:
      case 8233:
        return P("");
      case 56:
      case 57:
        if (i)
          return P(null);
        u.strictNumericEscape(t - 1, e, r);
      default:
        if (g >= 48 && g <= 55) {
          const C = t - 1;
          let B = /^[0-7]+/.exec(y.slice(C, t + 2))[0], J = parseInt(B, 8);
          J > 255 && (B = B.slice(0, -1), J = parseInt(B, 8)), t += B.length - 1;
          const X = y.charCodeAt(t);
          if (B !== "0" || X === 56 || X === 57) {
            if (i)
              return P(null);
            u.strictNumericEscape(C, e, r);
          }
          return P(String.fromCharCode(J));
        }
        return P(String.fromCharCode(g));
    }
  }
  function Rt(y, t, e, r, i, u, T, P) {
    const g = t;
    let C;
    return {
      n: C,
      pos: t
    } = rr(y, t, e, r, 16, i, u, !1, P, !T), C === null && (T ? P.invalidEscapeSequence(g, e, r) : t = g - 1), {
      code: C,
      pos: t
    };
  }
  function rr(y, t, e, r, i, u, T, P, g, C) {
    const D = t, B = i === 16 ? er.hex : er.decBinOct, J = i === 16 ? dt.hex : i === 10 ? dt.dec : i === 8 ? dt.oct : dt.bin;
    let X = !1, G = 0;
    for (let de = 0, Pe = u ?? 1 / 0; de < Pe; ++de) {
      const oe = y.charCodeAt(t);
      let xe;
      if (oe === 95 && P !== "bail") {
        const We = y.charCodeAt(t - 1), qe = y.charCodeAt(t + 1);
        if (P) {
          if (Number.isNaN(qe) || !J(qe) || B.has(We) || B.has(qe)) {
            if (C) return {
              n: null,
              pos: t
            };
            g.unexpectedNumericSeparator(t, e, r);
          }
        } else {
          if (C) return {
            n: null,
            pos: t
          };
          g.numericSeparatorInEscapeSequence(t, e, r);
        }
        ++t;
        continue;
      }
      if (oe >= 97 ? xe = oe - 97 + 10 : oe >= 65 ? xe = oe - 65 + 10 : Ss(oe) ? xe = oe - 48 : xe = 1 / 0, xe >= i) {
        if (xe <= 9 && C)
          return {
            n: null,
            pos: t
          };
        if (xe <= 9 && g.invalidDigit(t, e, r, i))
          xe = 0;
        else if (T)
          xe = 0, X = !0;
        else
          break;
      }
      ++t, G = G * i + xe;
    }
    return t === D || u != null && t - D !== u || X ? {
      n: null,
      pos: t
    } : {
      n: G,
      pos: t
    };
  }
  function sr(y, t, e, r, i, u) {
    const T = y.charCodeAt(t);
    let P;
    if (T === 123) {
      if (++t, {
        code: P,
        pos: t
      } = Rt(y, t, e, r, y.indexOf("}", t) - t, !0, i, u), ++t, P !== null && P > 1114111)
        if (i)
          u.invalidCodePoint(t, e, r);
        else
          return {
            code: null,
            pos: t
          };
    } else
      ({
        code: P,
        pos: t
      } = Rt(y, t, e, r, 4, !1, i, u));
    return {
      code: P,
      pos: t
    };
  }
  function nt(y, t, e) {
    return new l(e, y - t, y);
  }
  const Ps = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  class Ve {
    constructor(t) {
      const e = t.startIndex || 0;
      this.type = t.type, this.value = t.value, this.start = e + t.start, this.end = e + t.end, this.loc = new c(t.startLoc, t.endLoc);
    }
  }
  class Es extends Ts {
    constructor(t, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (r, i, u, T) => this.optionFlags & 2048 ? (this.raise(A.InvalidDigit, nt(r, i, u), {
          radix: T
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(A.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(A.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(A.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(A.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (r, i, u) => {
          this.recordStrictModeErrors(A.StrictNumericEscape, nt(r, i, u));
        },
        unterminated: (r, i, u) => {
          throw this.raise(A.UnterminatedString, nt(r - 1, i, u));
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(A.StrictNumericEscape),
        unterminated: (r, i, u) => {
          throw this.raise(A.UnterminatedTemplate, nt(r, i, u));
        }
      }), this.state = new Ft(), this.state.init(t), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
    }
    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.optionFlags & 256 && this.pushToken(new Ve(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }
    eat(t) {
      return this.match(t) ? (this.next(), !0) : !1;
    }
    match(t) {
      return this.state.type === t;
    }
    createLookaheadState(t) {
      return {
        pos: t.pos,
        value: null,
        type: t.type,
        start: t.start,
        end: t.end,
        context: [this.curContext()],
        inType: t.inType,
        startLoc: t.startLoc,
        lastTokEndLoc: t.lastTokEndLoc,
        curLine: t.curLine,
        lineStart: t.lineStart,
        curPosition: t.curPosition
      };
    }
    lookahead() {
      const t = this.state;
      this.state = this.createLookaheadState(t), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
      const e = this.state;
      return this.state = t, e;
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
    nextTokenStartSince(t) {
      return _t.lastIndex = t, _t.test(this.input) ? _t.lastIndex : t;
    }
    lookaheadCharCode() {
      return this.lookaheadCharCodeSince(this.state.pos);
    }
    lookaheadCharCodeSince(t) {
      return this.input.charCodeAt(this.nextTokenStartSince(t));
    }
    nextTokenInLineStart() {
      return this.nextTokenInLineStartSince(this.state.pos);
    }
    nextTokenInLineStartSince(t) {
      return Bt.lastIndex = t, Bt.test(this.input) ? Bt.lastIndex : t;
    }
    lookaheadInLineCharCode() {
      return this.input.charCodeAt(this.nextTokenInLineStart());
    }
    codePointAtPos(t) {
      let e = this.input.charCodeAt(t);
      if ((e & 64512) === 55296 && ++t < this.input.length) {
        const r = this.input.charCodeAt(t);
        (r & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (r & 1023));
      }
      return e;
    }
    setStrict(t) {
      this.state.strict = t, t && (this.state.strictErrors.forEach(([e, r]) => this.raise(e, r)), this.state.strictErrors.clear());
    }
    curContext() {
      return this.state.context[this.state.context.length - 1];
    }
    nextToken() {
      if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
        this.finishToken(140);
        return;
      }
      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    }
    skipBlockComment(t) {
      let e;
      this.isLookahead || (e = this.state.curPosition());
      const r = this.state.pos, i = this.input.indexOf(t, r + 2);
      if (i === -1)
        throw this.raise(A.UnterminatedComment, this.state.curPosition());
      for (this.state.pos = i + t.length, pt.lastIndex = r + 2; pt.test(this.input) && pt.lastIndex <= i; )
        ++this.state.curLine, this.state.lineStart = pt.lastIndex;
      if (this.isLookahead) return;
      const u = {
        type: "CommentBlock",
        value: this.input.slice(r + 2, i),
        start: this.sourceToOffsetPos(r),
        end: this.sourceToOffsetPos(i + t.length),
        loc: new c(e, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(u), u;
    }
    skipLineComment(t) {
      const e = this.state.pos;
      let r;
      this.isLookahead || (r = this.state.curPosition());
      let i = this.input.charCodeAt(this.state.pos += t);
      if (this.state.pos < this.length)
        for (; !Ze(i) && ++this.state.pos < this.length; )
          i = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      const u = this.state.pos, P = {
        type: "CommentLine",
        value: this.input.slice(e + t, u),
        start: this.sourceToOffsetPos(e),
        end: this.sourceToOffsetPos(u),
        loc: new c(r, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(P), P;
    }
    skipSpace() {
      const t = this.state.pos, e = this.optionFlags & 4096 ? [] : null;
      e: for (; this.state.pos < this.length; ) {
        const r = this.input.charCodeAt(this.state.pos);
        switch (r) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const i = this.skipBlockComment("*/");
                i !== void 0 && (this.addComment(i), e?.push(i));
                break;
              }
              case 47: {
                const i = this.skipLineComment(2);
                i !== void 0 && (this.addComment(i), e?.push(i));
                break;
              }
              default:
                break e;
            }
            break;
          default:
            if (cs(r))
              ++this.state.pos;
            else if (r === 45 && !this.inModule && this.optionFlags & 8192) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                const u = this.skipLineComment(3);
                u !== void 0 && (this.addComment(u), e?.push(u));
              } else
                break e;
            } else if (r === 60 && !this.inModule && this.optionFlags & 8192) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                const u = this.skipLineComment(4);
                u !== void 0 && (this.addComment(u), e?.push(u));
              } else
                break e;
            } else
              break e;
        }
      }
      if (e?.length > 0) {
        const r = this.state.pos, i = {
          start: this.sourceToOffsetPos(t),
          end: this.sourceToOffsetPos(r),
          comments: e,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(i);
      }
    }
    finishToken(t, e) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      const r = this.state.type;
      this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(r);
    }
    replaceToken(t) {
      this.state.type = t, this.updateContext();
    }
    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter())
        return;
      const t = this.state.pos + 1, e = this.codePointAtPos(t);
      if (e >= 48 && e <= 57)
        throw this.raise(A.UnexpectedDigitAfterHash, this.state.curPosition());
      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(e === 123 ? A.RecordExpressionHashIncorrectStartSyntaxType : A.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else Fe(e) ? (++this.state.pos, this.finishToken(139, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(139, this.readWord1())) : this.finishOp(27, 1);
    }
    readToken_dot() {
      const t = this.input.charCodeAt(this.state.pos + 1);
      if (t >= 48 && t <= 57) {
        this.readNumber(!0);
        return;
      }
      t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }
    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }
    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return !1;
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== 33) return !1;
      const e = this.state.pos;
      for (this.state.pos += 1; !Ze(t) && ++this.state.pos < this.length; )
        t = this.input.charCodeAt(this.state.pos);
      const r = this.input.slice(e + 2, this.state.pos);
      return this.finishToken(28, r), !0;
    }
    readToken_mult_modulo(t) {
      let e = t === 42 ? 55 : 54, r = 1, i = this.input.charCodeAt(this.state.pos + 1);
      t === 42 && i === 42 && (r++, i = this.input.charCodeAt(this.state.pos + 2), e = 57), i === 61 && !this.state.inType && (r++, e = t === 37 ? 33 : 30), this.finishOp(e, r);
    }
    readToken_pipe_amp(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === t) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
        return;
      }
      if (t === 124) {
        if (e === 62) {
          this.finishOp(39, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(A.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(A.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }
      if (e === 61) {
        this.finishOp(30, 2);
        return;
      }
      this.finishOp(t === 124 ? 43 : 45, 1);
    }
    readToken_caret() {
      const t = this.input.charCodeAt(this.state.pos + 1);
      t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "^^"
      }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
    }
    readToken_atSign() {
      this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "@@"
      }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
    }
    readToken_plus_min(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === t) {
        this.finishOp(34, 2);
        return;
      }
      e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }
    readToken_lt() {
      const {
        pos: t
      } = this.state, e = this.input.charCodeAt(t + 1);
      if (e === 60) {
        if (this.input.charCodeAt(t + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }
        this.finishOp(51, 2);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(47, 1);
    }
    readToken_gt() {
      const {
        pos: t
      } = this.state, e = this.input.charCodeAt(t + 1);
      if (e === 62) {
        const r = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(t + r) === 61) {
          this.finishOp(30, r + 1);
          return;
        }
        this.finishOp(52, r);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(48, 1);
    }
    readToken_eq_excl(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (t === 61 && e === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }
      this.finishOp(t === 61 ? 29 : 35, 1);
    }
    readToken_question() {
      const t = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
      t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }
    getTokenFromCode(t) {
      switch (t) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos, this.finishToken(10);
          return;
        case 41:
          ++this.state.pos, this.finishToken(11);
          return;
        case 59:
          ++this.state.pos, this.finishToken(13);
          return;
        case 44:
          ++this.state.pos, this.finishToken(12);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(A.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(2);
          } else
            ++this.state.pos, this.finishToken(0);
          return;
        case 93:
          ++this.state.pos, this.finishToken(3);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(A.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(6);
          } else
            ++this.state.pos, this.finishToken(5);
          return;
        case 125:
          ++this.state.pos, this.finishToken(8);
          return;
        case 58:
          this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          this.readTemplateToken();
          return;
        case 48: {
          const e = this.input.charCodeAt(this.state.pos + 1);
          if (e === 120 || e === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (e === 111 || e === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (e === 98 || e === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(!1);
          return;
        case 34:
        case 39:
          this.readString(t);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(t);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(t);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(t);
          return;
        case 60:
          this.readToken_lt();
          return;
        case 62:
          this.readToken_gt();
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(t);
          return;
        case 126:
          this.finishOp(36, 1);
          return;
        case 64:
          this.readToken_atSign();
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (Fe(t)) {
            this.readWord(t);
            return;
          }
      }
      throw this.raise(A.InvalidOrUnexpectedToken, this.state.curPosition(), {
        unexpected: String.fromCodePoint(t)
      });
    }
    finishOp(t, e) {
      const r = this.input.slice(this.state.pos, this.state.pos + e);
      this.state.pos += e, this.finishToken(t, r);
    }
    readRegexp() {
      const t = this.state.startLoc, e = this.state.start + 1;
      let r, i, {
        pos: u
      } = this.state;
      for (; ; ++u) {
        if (u >= this.length)
          throw this.raise(A.UnterminatedRegExp, o(t, 1));
        const C = this.input.charCodeAt(u);
        if (Ze(C))
          throw this.raise(A.UnterminatedRegExp, o(t, 1));
        if (r)
          r = !1;
        else {
          if (C === 91)
            i = !0;
          else if (C === 93 && i)
            i = !1;
          else if (C === 47 && !i)
            break;
          r = C === 92;
        }
      }
      const T = this.input.slice(e, u);
      ++u;
      let P = "";
      const g = () => o(t, u + 2 - e);
      for (; u < this.length; ) {
        const C = this.codePointAtPos(u), D = String.fromCharCode(C);
        if (Ps.has(C))
          C === 118 ? P.includes("u") && this.raise(A.IncompatibleRegExpUVFlags, g()) : C === 117 && P.includes("v") && this.raise(A.IncompatibleRegExpUVFlags, g()), P.includes(D) && this.raise(A.DuplicateRegExpFlags, g());
        else if (Xe(C) || C === 92)
          this.raise(A.MalformedRegExpFlags, g());
        else
          break;
        ++u, P += D;
      }
      this.state.pos = u, this.finishToken(138, {
        pattern: T,
        flags: P
      });
    }
    readInt(t, e, r = !1, i = !0) {
      const {
        n: u,
        pos: T
      } = rr(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, r, i, this.errorHandlers_readInt, !1);
      return this.state.pos = T, u;
    }
    readRadixNumber(t) {
      const e = this.state.pos, r = this.state.curPosition();
      let i = !1;
      this.state.pos += 2;
      const u = this.readInt(t);
      u == null && this.raise(A.InvalidDigit, o(r, 2), {
        radix: t
      });
      const T = this.input.charCodeAt(this.state.pos);
      if (T === 110)
        ++this.state.pos, i = !0;
      else if (T === 109)
        throw this.raise(A.InvalidDecimal, r);
      if (Fe(this.codePointAtPos(this.state.pos)))
        throw this.raise(A.NumberIdentifier, this.state.curPosition());
      if (i) {
        const P = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(136, P);
        return;
      }
      this.finishToken(135, u);
    }
    readNumber(t) {
      const e = this.state.pos, r = this.state.curPosition();
      let i = !1, u = !1, T = !1, P = !1;
      !t && this.readInt(10) === null && this.raise(A.InvalidNumber, this.state.curPosition());
      const g = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
      if (g) {
        const X = this.input.slice(e, this.state.pos);
        if (this.recordStrictModeErrors(A.StrictOctalLiteral, r), !this.state.strict) {
          const G = X.indexOf("_");
          G > 0 && this.raise(A.ZeroDigitNumericSeparator, o(r, G));
        }
        P = g && !/[89]/.test(X);
      }
      let C = this.input.charCodeAt(this.state.pos);
      if (C === 46 && !P && (++this.state.pos, this.readInt(10), i = !0, C = this.input.charCodeAt(this.state.pos)), (C === 69 || C === 101) && !P && (C = this.input.charCodeAt(++this.state.pos), (C === 43 || C === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(A.InvalidOrMissingExponent, r), i = !0, T = !0, C = this.input.charCodeAt(this.state.pos)), C === 110 && ((i || g) && this.raise(A.InvalidBigIntLiteral, r), ++this.state.pos, u = !0), C === 109) {
        this.expectPlugin("decimal", this.state.curPosition()), (T || g) && this.raise(A.InvalidDecimal, r), ++this.state.pos;
        var D = !0;
      }
      if (Fe(this.codePointAtPos(this.state.pos)))
        throw this.raise(A.NumberIdentifier, this.state.curPosition());
      const B = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
      if (u) {
        this.finishToken(136, B);
        return;
      }
      if (D) {
        this.finishToken(137, B);
        return;
      }
      const J = P ? parseInt(B, 8) : parseFloat(B);
      this.finishToken(135, J);
    }
    readCodePoint(t) {
      const {
        code: e,
        pos: r
      } = sr(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
      return this.state.pos = r, e;
    }
    readString(t) {
      const {
        str: e,
        pos: r,
        curLine: i,
        lineStart: u
      } = tr(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
      this.state.pos = r + 1, this.state.lineStart = u, this.state.curLine = i, this.finishToken(134, e);
    }
    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }
    readTemplateToken() {
      const t = this.input[this.state.pos], {
        str: e,
        firstInvalidLoc: r,
        pos: i,
        curLine: u,
        lineStart: T
      } = tr("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = i + 1, this.state.lineStart = T, this.state.curLine = u, r && (this.state.firstInvalidTemplateEscapePos = new l(r.curLine, r.pos - r.lineStart, this.sourceToOffsetPos(r.pos))), this.input.codePointAt(i) === 96 ? this.finishToken(24, r ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, r ? null : t + e + "${"));
    }
    recordStrictModeErrors(t, e) {
      const r = e.index;
      this.state.strict && !this.state.strictErrors.has(r) ? this.raise(t, e) : this.state.strictErrors.set(r, [t, e]);
    }
    readWord1(t) {
      this.state.containsEsc = !1;
      let e = "";
      const r = this.state.pos;
      let i = this.state.pos;
      for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
        const u = this.codePointAtPos(this.state.pos);
        if (Xe(u))
          this.state.pos += u <= 65535 ? 1 : 2;
        else if (u === 92) {
          this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
          const T = this.state.curPosition(), P = this.state.pos === r ? Fe : Xe;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(A.MissingUnicodeEscape, this.state.curPosition()), i = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const g = this.readCodePoint(!0);
          g !== null && (P(g) || this.raise(A.EscapedCharNotAnIdentifier, T), e += String.fromCodePoint(g)), i = this.state.pos;
        } else
          break;
      }
      return e + this.input.slice(i, this.state.pos);
    }
    readWord(t) {
      const e = this.readWord1(t), r = ne.get(e);
      r !== void 0 ? this.finishToken(r, Be(r)) : this.finishToken(132, e);
    }
    checkKeywordEscapes() {
      const {
        type: t
      } = this.state;
      st(t) && this.state.containsEsc && this.raise(A.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: Be(t)
      });
    }
    raise(t, e, r = {}) {
      const i = e instanceof l ? e : e.loc.start, u = t(i, r);
      if (!(this.optionFlags & 2048)) throw u;
      return this.isLookahead || this.state.errors.push(u), u;
    }
    raiseOverwrite(t, e, r = {}) {
      const i = e instanceof l ? e : e.loc.start, u = i.index, T = this.state.errors;
      for (let P = T.length - 1; P >= 0; P--) {
        const g = T[P];
        if (g.loc.index === u)
          return T[P] = t(i, r);
        if (g.loc.index < u) break;
      }
      return this.raise(t, e, r);
    }
    updateContext(t) {
    }
    unexpected(t, e) {
      throw this.raise(A.UnexpectedToken, t ?? this.state.startLoc, {
        expected: e ? Be(e) : null
      });
    }
    expectPlugin(t, e) {
      if (this.hasPlugin(t))
        return !0;
      throw this.raise(A.MissingPlugin, e ?? this.state.startLoc, {
        missingPlugin: [t]
      });
    }
    expectOnePlugin(t) {
      if (!t.some((e) => this.hasPlugin(e)))
        throw this.raise(A.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: t
        });
    }
    errorBuilder(t) {
      return (e, r, i) => {
        this.raise(t, nt(e, r, i));
      };
    }
  }
  class As {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }
  class gs {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new As());
    }
    exit() {
      const t = this.stack.pop(), e = this.current();
      for (const [r, i] of Array.from(t.undefinedPrivateNames))
        e ? e.undefinedPrivateNames.has(r) || e.undefinedPrivateNames.set(r, i) : this.parser.raise(A.InvalidPrivateFieldResolution, i, {
          identifierName: r
        });
    }
    declarePrivateName(t, e, r) {
      const {
        privateNames: i,
        loneAccessors: u,
        undefinedPrivateNames: T
      } = this.current();
      let P = i.has(t);
      if (e & 3) {
        const g = P && u.get(t);
        if (g) {
          const C = g & 4, D = e & 4, B = g & 3, J = e & 3;
          P = B === J || C !== D, P || u.delete(t);
        } else P || u.set(t, e);
      }
      P && this.parser.raise(A.PrivateNameRedeclaration, r, {
        identifierName: t
      }), i.add(t), T.delete(t);
    }
    usePrivateName(t, e) {
      let r;
      for (r of this.stack)
        if (r.privateNames.has(t)) return;
      r ? r.undefinedPrivateNames.set(t, e) : this.parser.raise(A.InvalidPrivateFieldResolution, e, {
        identifierName: t
      });
    }
  }
  class ht {
    constructor(t = 0) {
      this.type = t;
    }
    canBeArrowParameterDeclaration() {
      return this.type === 2 || this.type === 1;
    }
    isCertainlyParameterDeclaration() {
      return this.type === 3;
    }
  }
  class ir extends ht {
    constructor(t) {
      super(t), this.declarationErrors = /* @__PURE__ */ new Map();
    }
    recordDeclarationError(t, e) {
      const r = e.index;
      this.declarationErrors.set(r, [t, e]);
    }
    clearDeclarationError(t) {
      this.declarationErrors.delete(t);
    }
    iterateErrors(t) {
      this.declarationErrors.forEach(t);
    }
  }
  class vs {
    constructor(t) {
      this.parser = void 0, this.stack = [new ht()], this.parser = t;
    }
    enter(t) {
      this.stack.push(t);
    }
    exit() {
      this.stack.pop();
    }
    recordParameterInitializerError(t, e) {
      const r = e.loc.start, {
        stack: i
      } = this;
      let u = i.length - 1, T = i[u];
      for (; !T.isCertainlyParameterDeclaration(); ) {
        if (T.canBeArrowParameterDeclaration())
          T.recordDeclarationError(t, r);
        else
          return;
        T = i[--u];
      }
      this.parser.raise(t, r);
    }
    recordArrowParameterBindingError(t, e) {
      const {
        stack: r
      } = this, i = r[r.length - 1], u = e.loc.start;
      if (i.isCertainlyParameterDeclaration())
        this.parser.raise(t, u);
      else if (i.canBeArrowParameterDeclaration())
        i.recordDeclarationError(t, u);
      else
        return;
    }
    recordAsyncArrowParametersError(t) {
      const {
        stack: e
      } = this;
      let r = e.length - 1, i = e[r];
      for (; i.canBeArrowParameterDeclaration(); )
        i.type === 2 && i.recordDeclarationError(A.AwaitBindingIdentifier, t), i = e[--r];
    }
    validateAsPattern() {
      const {
        stack: t
      } = this, e = t[t.length - 1];
      e.canBeArrowParameterDeclaration() && e.iterateErrors(([r, i]) => {
        this.parser.raise(r, i);
        let u = t.length - 2, T = t[u];
        for (; T.canBeArrowParameterDeclaration(); )
          T.clearDeclarationError(i.index), T = t[--u];
      });
    }
  }
  function Is() {
    return new ht(3);
  }
  function Ns() {
    return new ir(1);
  }
  function Cs() {
    return new ir(2);
  }
  function ar() {
    return new ht();
  }
  class ws extends Es {
    addExtra(t, e, r, i = !0) {
      if (!t) return;
      let {
        extra: u
      } = t;
      u == null && (u = {}, t.extra = u), i ? u[e] = r : Object.defineProperty(u, e, {
        enumerable: i,
        value: r
      });
    }
    isContextual(t) {
      return this.state.type === t && !this.state.containsEsc;
    }
    isUnparsedContextual(t, e) {
      if (this.input.startsWith(e, t)) {
        const r = this.input.charCodeAt(t + e.length);
        return !(Xe(r) || (r & 64512) === 55296);
      }
      return !1;
    }
    isLookaheadContextual(t) {
      const e = this.nextTokenStart();
      return this.isUnparsedContextual(e, t);
    }
    eatContextual(t) {
      return this.isContextual(t) ? (this.next(), !0) : !1;
    }
    expectContextual(t, e) {
      if (!this.eatContextual(t)) {
        if (e != null)
          throw this.raise(e, this.state.startLoc);
        this.unexpected(null, t);
      }
    }
    canInsertSemicolon() {
      return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
    }
    hasPrecedingLineBreak() {
      return Qt(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    }
    hasFollowingLineBreak() {
      return Qt(this.input, this.state.end, this.nextTokenStart());
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon(t = !0) {
      (t ? this.isLineTerminator() : this.eat(13)) || this.raise(A.MissingSemicolon, this.state.lastTokEndLoc);
    }
    expect(t, e) {
      this.eat(t) || this.unexpected(e, t);
    }
    tryParse(t, e = this.state.clone()) {
      const r = {
        node: null
      };
      try {
        const i = t((u = null) => {
          throw r.node = u, r;
        });
        if (this.state.errors.length > e.errors.length) {
          const u = this.state;
          return this.state = e, this.state.tokensLength = u.tokensLength, {
            node: i,
            error: u.errors[e.errors.length],
            thrown: !1,
            aborted: !1,
            failState: u
          };
        }
        return {
          node: i,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        };
      } catch (i) {
        const u = this.state;
        if (this.state = e, i instanceof SyntaxError)
          return {
            node: null,
            error: i,
            thrown: !0,
            aborted: !1,
            failState: u
          };
        if (i === r)
          return {
            node: r.node,
            error: null,
            thrown: !1,
            aborted: !0,
            failState: u
          };
        throw i;
      }
    }
    checkExpressionErrors(t, e) {
      if (!t) return !1;
      const {
        shorthandAssignLoc: r,
        doubleProtoLoc: i,
        privateKeyLoc: u,
        optionalParametersLoc: T,
        voidPatternLoc: P
      } = t, g = !!r || !!i || !!T || !!u || !!P;
      if (!e)
        return g;
      r != null && this.raise(A.InvalidCoverInitializedName, r), i != null && this.raise(A.DuplicateProto, i), u != null && this.raise(A.UnexpectedPrivateField, u), T != null && this.unexpected(T), P != null && this.raise(A.InvalidCoverDiscardElement, P);
    }
    isLiteralPropertyName() {
      return ut(this.state.type);
    }
    isPrivateName(t) {
      return t.type === "PrivateName";
    }
    getPrivateNameSV(t) {
      return t.id.name;
    }
    hasPropertyAsPrivateName(t) {
      return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
    }
    isObjectProperty(t) {
      return t.type === "ObjectProperty";
    }
    isObjectMethod(t) {
      return t.type === "ObjectMethod";
    }
    initializeScopes(t = this.options.sourceType === "module") {
      const e = this.state.labels;
      this.state.labels = [];
      const r = this.exportedIdentifiers;
      this.exportedIdentifiers = /* @__PURE__ */ new Set();
      const i = this.inModule;
      this.inModule = t;
      const u = this.scope, T = this.getScopeHandler();
      this.scope = new T(this, t);
      const P = this.prodParam;
      this.prodParam = new hs();
      const g = this.classScope;
      this.classScope = new gs(this);
      const C = this.expressionScope;
      return this.expressionScope = new vs(this), () => {
        this.state.labels = e, this.exportedIdentifiers = r, this.inModule = i, this.scope = u, this.prodParam = P, this.classScope = g, this.expressionScope = C;
      };
    }
    enterInitialScopes() {
      let t = 0;
      (this.inModule || this.optionFlags & 1) && (t |= 2), this.optionFlags & 32 && (t |= 1);
      const e = !this.inModule && this.options.sourceType === "commonjs";
      (e || this.optionFlags & 2) && (t |= 4), this.prodParam.enter(t);
      let r = e ? 514 : 1;
      this.optionFlags & 4 && (r |= 512), this.scope.enter(r);
    }
    checkDestructuringPrivate(t) {
      const {
        privateKeyLoc: e
      } = t;
      e !== null && this.expectPlugin("destructuringPrivate", e);
    }
  }
  class yt {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null, this.voidPatternLoc = null;
    }
  }
  class mt {
    constructor(t, e, r) {
      this.type = "", this.start = e, this.end = 0, this.loc = new c(r), t?.optionFlags & 128 && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }
  }
  const jt = mt.prototype;
  jt.__clone = function() {
    const y = new mt(void 0, this.start, this.loc.start), t = Object.keys(this);
    for (let e = 0, r = t.length; e < r; e++) {
      const i = t[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (y[i] = this[i]);
    }
    return y;
  };
  class Os extends ws {
    startNode() {
      const t = this.state.startLoc;
      return new mt(this, t.index, t);
    }
    startNodeAt(t) {
      return new mt(this, t.index, t);
    }
    startNodeAtNode(t) {
      return this.startNodeAt(t.loc.start);
    }
    finishNode(t, e) {
      return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
    }
    finishNodeAt(t, e, r) {
      return t.type = e, t.end = r.index, t.loc.end = r, this.optionFlags & 128 && (t.range[1] = r.index), this.optionFlags & 4096 && this.processComment(t), t;
    }
    resetStartLocation(t, e) {
      t.start = e.index, t.loc.start = e, this.optionFlags & 128 && (t.range[0] = e.index);
    }
    resetEndLocation(t, e = this.state.lastTokEndLoc) {
      t.end = e.index, t.loc.end = e, this.optionFlags & 128 && (t.range[1] = e.index);
    }
    resetStartLocationFromNode(t, e) {
      this.resetStartLocation(t, e.loc.start);
    }
    castNodeTo(t, e) {
      return t.type = e, t;
    }
    cloneIdentifier(t) {
      const {
        type: e,
        start: r,
        end: i,
        loc: u,
        range: T,
        name: P
      } = t, g = Object.create(jt);
      return g.type = e, g.start = r, g.end = i, g.loc = u, g.range = T, g.name = P, t.extra && (g.extra = t.extra), g;
    }
    cloneStringLiteral(t) {
      const {
        type: e,
        start: r,
        end: i,
        loc: u,
        range: T,
        extra: P
      } = t, g = Object.create(jt);
      return g.type = e, g.start = r, g.end = i, g.loc = u, g.range = T, g.extra = P, g.value = t.value, g;
    }
  }
  const Ut = (y) => y.type === "ParenthesizedExpression" ? Ut(y.expression) : y;
  class Ds extends Os {
    toAssignable(t, e = !1) {
      var r, i;
      let u;
      switch ((t.type === "ParenthesizedExpression" || (r = t.extra) != null && r.parenthesized) && (u = Ut(t), e ? u.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(A.InvalidParenthesizedAssignment, t) : u.type !== "CallExpression" && u.type !== "MemberExpression" && !this.isOptionalMemberExpression(u) && this.raise(A.InvalidParenthesizedAssignment, t) : this.raise(A.InvalidParenthesizedAssignment, t)), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          break;
        case "ObjectExpression":
          this.castNodeTo(t, "ObjectPattern");
          for (let P = 0, g = t.properties.length, C = g - 1; P < g; P++) {
            var T;
            const D = t.properties[P], B = P === C;
            this.toAssignableObjectExpressionProp(D, B, e), B && D.type === "RestElement" && (T = t.extra) != null && T.trailingCommaLoc && this.raise(A.RestTrailingComma, t.extra.trailingCommaLoc);
          }
          break;
        case "ObjectProperty": {
          const {
            key: P,
            value: g
          } = t;
          this.isPrivateName(P) && this.classScope.usePrivateName(this.getPrivateNameSV(P), P.loc.start), this.toAssignable(g, e);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          this.castNodeTo(t, "ArrayPattern"), this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
          break;
        case "AssignmentExpression":
          t.operator !== "=" && this.raise(A.MissingEqInAssignment, t.left.loc.end), this.castNodeTo(t, "AssignmentPattern"), delete t.operator, t.left.type === "VoidPattern" && this.raise(A.VoidPatternInitializer, t.left), this.toAssignable(t.left, e);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(u, e);
          break;
      }
    }
    toAssignableObjectExpressionProp(t, e, r) {
      if (t.type === "ObjectMethod")
        this.raise(t.kind === "get" || t.kind === "set" ? A.PatternHasAccessor : A.PatternHasMethod, t.key);
      else if (t.type === "SpreadElement") {
        this.castNodeTo(t, "RestElement");
        const i = t.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, r), e || this.raise(A.RestTrailingComma, t);
      } else
        this.toAssignable(t, r);
    }
    toAssignableList(t, e, r) {
      const i = t.length - 1;
      for (let u = 0; u <= i; u++) {
        const T = t[u];
        T && (this.toAssignableListItem(t, u, r), T.type === "RestElement" && (u < i ? this.raise(A.RestTrailingComma, T) : e && this.raise(A.RestTrailingComma, e)));
      }
    }
    toAssignableListItem(t, e, r) {
      const i = t[e];
      if (i.type === "SpreadElement") {
        this.castNodeTo(i, "RestElement");
        const u = i.argument;
        this.checkToRestConversion(u, !0), this.toAssignable(u, r);
      } else
        this.toAssignable(i, r);
    }
    isAssignable(t, e) {
      switch (t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          return !0;
        case "ObjectExpression": {
          const r = t.properties.length - 1;
          return t.properties.every((i, u) => i.type !== "ObjectMethod" && (u === r || i.type !== "SpreadElement") && this.isAssignable(i));
        }
        case "ObjectProperty":
          return this.isAssignable(t.value);
        case "SpreadElement":
          return this.isAssignable(t.argument);
        case "ArrayExpression":
          return t.elements.every((r) => r === null || this.isAssignable(r));
        case "AssignmentExpression":
          return t.operator === "=";
        case "ParenthesizedExpression":
          return this.isAssignable(t.expression);
        case "MemberExpression":
        case "OptionalMemberExpression":
          return !e;
        default:
          return !1;
      }
    }
    toReferencedList(t, e) {
      return t;
    }
    toReferencedListDeep(t, e) {
      this.toReferencedList(t, e);
      for (const r of t)
        r?.type === "ArrayExpression" && this.toReferencedListDeep(r.elements);
    }
    parseSpread(t) {
      const e = this.startNode();
      return this.next(), e.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(e, "SpreadElement");
    }
    parseRestBinding() {
      const t = this.startNode();
      this.next();
      const e = this.parseBindingAtom();
      return e.type === "VoidPattern" && this.raise(A.UnexpectedVoidPattern, e), t.argument = e, this.finishNode(t, "RestElement");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 0: {
          const t = this.startNode();
          return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
        }
        case 5:
          return this.parseObjectLike(8, !0);
        case 88:
          return this.parseVoidPattern(null);
      }
      return this.parseIdentifier();
    }
    parseBindingList(t, e, r) {
      const i = r & 1, u = [];
      let T = !0;
      for (; !this.eat(t); )
        if (T ? T = !1 : this.expect(12), i && this.match(12))
          u.push(null);
        else {
          if (this.eat(t))
            break;
          if (this.match(21)) {
            let P = this.parseRestBinding();
            if ((this.hasPlugin("flow") || r & 2) && (P = this.parseFunctionParamType(P)), u.push(P), !this.checkCommaAfterRest(e)) {
              this.expect(t);
              break;
            }
          } else {
            const P = [];
            if (r & 2)
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(A.UnsupportedParameterDecorator, this.state.startLoc); this.match(26); )
                P.push(this.parseDecorator());
            u.push(this.parseBindingElement(r, P));
          }
        }
      return u;
    }
    parseBindingRestProperty(t) {
      return this.next(), this.hasPlugin("discardBinding") && this.match(88) ? (t.argument = this.parseVoidPattern(null), this.raise(A.UnexpectedVoidPattern, t.argument)) : t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
    }
    parseBindingProperty() {
      const {
        type: t,
        startLoc: e
      } = this.state;
      if (t === 21)
        return this.parseBindingRestProperty(this.startNode());
      const r = this.startNode();
      return t === 139 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), r.key = this.parsePrivateName()) : this.parsePropertyName(r), r.method = !1, this.parseObjPropValue(r, e, !1, !1, !0, !1);
    }
    parseBindingElement(t, e) {
      const r = this.parseMaybeDefault();
      return (this.hasPlugin("flow") || t & 2) && this.parseFunctionParamType(r), e.length && (r.decorators = e, this.resetStartLocationFromNode(r, e[0])), this.parseMaybeDefault(r.loc.start, r);
    }
    parseFunctionParamType(t) {
      return t;
    }
    parseMaybeDefault(t, e) {
      if (t ?? (t = this.state.startLoc), e = e ?? this.parseBindingAtom(), !this.eat(29)) return e;
      const r = this.startNodeAt(t);
      return e.type === "VoidPattern" && this.raise(A.VoidPatternInitializer, e), r.left = e, r.right = this.parseMaybeAssignAllowIn(), this.finishNode(r, "AssignmentPattern");
    }
    isValidLVal(t, e, r, i) {
      switch (t) {
        case "AssignmentPattern":
          return "left";
        case "RestElement":
          return "argument";
        case "ObjectProperty":
          return "value";
        case "ParenthesizedExpression":
          return "expression";
        case "ArrayPattern":
          return "elements";
        case "ObjectPattern":
          return "properties";
        case "VoidPattern":
          return !0;
        case "CallExpression":
          if (!e && !this.state.strict && this.optionFlags & 8192)
            return !0;
      }
      return !1;
    }
    isOptionalMemberExpression(t) {
      return t.type === "OptionalMemberExpression";
    }
    checkLVal(t, e, r = 64, i = !1, u = !1, T = !1, P = !1) {
      var g;
      const C = t.type;
      if (this.isObjectMethod(t)) return;
      const D = this.isOptionalMemberExpression(t);
      if (D || C === "MemberExpression") {
        D && (this.expectPlugin("optionalChainingAssign", t.loc.start), e.type !== "AssignmentExpression" && this.raise(A.InvalidLhsOptionalChaining, t, {
          ancestor: e
        })), r !== 64 && this.raise(A.InvalidPropertyBindingPattern, t);
        return;
      }
      if (C === "Identifier") {
        this.checkIdentifier(t, r, u);
        const {
          name: oe
        } = t;
        i && (i.has(oe) ? this.raise(A.ParamDupe, t) : i.add(oe));
        return;
      } else C === "VoidPattern" && e.type === "CatchClause" && this.raise(A.VoidPatternCatchClauseParam, t);
      const B = Ut(t);
      P || (P = B.type === "CallExpression" && (B.callee.type === "Import" || B.callee.type === "Super"));
      const J = this.isValidLVal(C, P, !(T || (g = t.extra) != null && g.parenthesized) && e.type === "AssignmentExpression", r);
      if (J === !0) return;
      if (J === !1) {
        const oe = r === 64 ? A.InvalidLhs : A.InvalidLhsBinding;
        this.raise(oe, t, {
          ancestor: e
        });
        return;
      }
      let X, G;
      typeof J == "string" ? (X = J, G = C === "ParenthesizedExpression") : [X, G] = J;
      const de = C === "ArrayPattern" || C === "ObjectPattern" ? {
        type: C
      } : e, Pe = t[X];
      if (Array.isArray(Pe))
        for (const oe of Pe)
          oe && this.checkLVal(oe, de, r, i, u, G, !0);
      else Pe && this.checkLVal(Pe, de, r, i, u, G, P);
    }
    checkIdentifier(t, e, r = !1) {
      this.state.strict && (r ? Ht(t.name, this.inModule) : zt(t.name)) && (e === 64 ? this.raise(A.StrictEvalArguments, t, {
        referenceName: t.name
      }) : this.raise(A.StrictEvalArgumentsBinding, t, {
        bindingName: t.name
      })), e & 8192 && t.name === "let" && this.raise(A.LetInLexicalBinding, t), e & 64 || this.declareNameFromIdentifier(t, e);
    }
    declareNameFromIdentifier(t, e) {
      this.scope.declareName(t.name, e, t.loc.start);
    }
    checkToRestConversion(t, e) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(t.expression, e);
          break;
        case "Identifier":
        case "MemberExpression":
          break;
        case "ArrayExpression":
        case "ObjectExpression":
          if (e) break;
        default:
          this.raise(A.InvalidRestAssignmentPattern, t);
      }
    }
    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? A.RestTrailingComma : A.ElementAfterRest, this.state.startLoc), !0) : !1;
    }
  }
  const Kt = /in(?:stanceof)?|as|satisfies/y;
  function Ls(y) {
    if (y == null)
      throw new Error(`Unexpected ${y} value.`);
    return y;
  }
  function nr(y) {
    if (!y)
      throw new Error("Assert fail");
  }
  const H = V`typescript`({
    AbstractMethodHasImplementation: ({
      methodName: y
    }) => `Method '${y}' cannot have an implementation because it is marked abstract.`,
    AbstractPropertyHasInitializer: ({
      propertyName: y
    }) => `Property '${y}' cannot have an initializer because it is marked abstract.`,
    AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
    AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
    AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
    ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
    DeclareAccessor: ({
      kind: y
    }) => `'declare' is not allowed in ${y}ters.`,
    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
    DuplicateAccessibilityModifier: ({
      modifier: y
    }) => `Accessibility modifier already seen: '${y}'.`,
    DuplicateModifier: ({
      modifier: y
    }) => `Duplicate modifier: '${y}'.`,
    EmptyHeritageClauseType: ({
      token: y
    }) => `'${y}' list cannot be empty.`,
    EmptyTypeArguments: "Type argument list cannot be empty.",
    EmptyTypeParameters: "Type parameter list cannot be empty.",
    ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
    ImportAliasHasImportType: "An import alias can not use 'import type'.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
    IncompatibleModifiers: ({
      modifiers: y
    }) => `'${y[0]}' modifier cannot be used with '${y[1]}' modifier.`,
    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
    IndexSignatureHasAccessibility: ({
      modifier: y
    }) => `Index signatures cannot have an accessibility modifier ('${y}').`,
    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
    IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
    InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
    InvalidHeritageClauseType: ({
      token: y
    }) => `'${y}' list can only include identifiers or qualified-names with optional type arguments.`,
    InvalidModifierOnAwaitUsingDeclaration: (y) => `'${y}' modifier cannot appear on an await using declaration.`,
    InvalidModifierOnTypeMember: ({
      modifier: y
    }) => `'${y}' modifier cannot appear on a type member.`,
    InvalidModifierOnTypeParameter: ({
      modifier: y
    }) => `'${y}' modifier cannot appear on a type parameter.`,
    InvalidModifierOnTypeParameterPositions: ({
      modifier: y
    }) => `'${y}' modifier can only appear on a type parameter of a class, interface or type alias.`,
    InvalidModifierOnUsingDeclaration: (y) => `'${y}' modifier cannot appear on a using declaration.`,
    InvalidModifiersOrder: ({
      orderedModifiers: y
    }) => `'${y[0]}' modifier must precede '${y[1]}' modifier.`,
    InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
    MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
    NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
    NonClassMethodPropertyHasAbstractModifier: "'abstract' modifier can only appear on a class, method, or property declaration.",
    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
    OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
    PrivateElementHasAccessibility: ({
      modifier: y
    }) => `Private elements cannot have an accessibility modifier ('${y}').`,
    ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
    ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
    ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
    SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
    SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
    SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
    SingleTypeParameterWithoutTrailingComma: ({
      typeParameterName: y
    }) => `Single type parameter ${y} should have a trailing comma. Example usage: <${y},>.`,
    StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
    TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
    TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
    TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
    UnsupportedSignatureParameterKind: ({
      type: y
    }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${y}.`,
    UsingDeclarationInAmbientContext: (y) => `'${y}' declarations are not allowed in ambient contexts.`
  });
  function ks(y) {
    switch (y) {
      case "any":
        return "TSAnyKeyword";
      case "boolean":
        return "TSBooleanKeyword";
      case "bigint":
        return "TSBigIntKeyword";
      case "never":
        return "TSNeverKeyword";
      case "number":
        return "TSNumberKeyword";
      case "object":
        return "TSObjectKeyword";
      case "string":
        return "TSStringKeyword";
      case "symbol":
        return "TSSymbolKeyword";
      case "undefined":
        return "TSUndefinedKeyword";
      case "unknown":
        return "TSUnknownKeyword";
      default:
        return;
    }
  }
  function or(y) {
    return y === "private" || y === "public" || y === "protected";
  }
  function Ms(y) {
    return y === "in" || y === "out";
  }
  var _s = (y) => class extends y {
    constructor(...e) {
      super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: H.InvalidModifierOnTypeParameter
      }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["const"],
        disallowedModifiers: ["in", "out"],
        errorTemplate: H.InvalidModifierOnTypeParameterPositions
      }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out", "const"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: H.InvalidModifierOnTypeParameter
      });
    }
    getScopeHandler() {
      return ds;
    }
    tsIsIdentifier() {
      return pe(this.state.type);
    }
    tsTokenCanFollowModifier() {
      return this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(139) || this.isLiteralPropertyName();
    }
    tsNextTokenOnSameLineAndCanFollowModifier() {
      return this.next(), this.hasPrecedingLineBreak() ? !1 : this.tsTokenCanFollowModifier();
    }
    tsNextTokenCanFollowModifier() {
      return this.match(106) ? (this.next(), this.tsTokenCanFollowModifier()) : this.tsNextTokenOnSameLineAndCanFollowModifier();
    }
    tsParseModifier(e, r, i) {
      if (!pe(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
        return;
      const u = this.state.value;
      if (e.includes(u)) {
        if (i && this.match(106) || r && this.tsIsStartOfStaticBlocks())
          return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
          return u;
      }
    }
    tsParseModifiers({
      allowedModifiers: e,
      disallowedModifiers: r,
      stopOnStartOfClassStaticBlock: i,
      errorTemplate: u = H.InvalidModifierOnTypeMember
    }, T) {
      const P = (C, D, B, J) => {
        D === B && T[J] && this.raise(H.InvalidModifiersOrder, C, {
          orderedModifiers: [B, J]
        });
      }, g = (C, D, B, J) => {
        (T[B] && D === J || T[J] && D === B) && this.raise(H.IncompatibleModifiers, C, {
          modifiers: [B, J]
        });
      };
      for (; ; ) {
        const {
          startLoc: C
        } = this.state, D = this.tsParseModifier(e.concat(r ?? []), i, T.static);
        if (!D) break;
        or(D) ? T.accessibility ? this.raise(H.DuplicateAccessibilityModifier, C, {
          modifier: D
        }) : (P(C, D, D, "override"), P(C, D, D, "static"), P(C, D, D, "readonly"), T.accessibility = D) : Ms(D) ? (T[D] && this.raise(H.DuplicateModifier, C, {
          modifier: D
        }), T[D] = !0, P(C, D, "in", "out")) : (hasOwnProperty.call(T, D) ? this.raise(H.DuplicateModifier, C, {
          modifier: D
        }) : (P(C, D, "static", "readonly"), P(C, D, "static", "override"), P(C, D, "override", "readonly"), P(C, D, "abstract", "override"), g(C, D, "declare", "override"), g(C, D, "static", "abstract")), T[D] = !0), r != null && r.includes(D) && this.raise(u, C, {
          modifier: D
        });
      }
    }
    tsIsListTerminator(e) {
      switch (e) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(8);
        case "HeritageClauseElement":
          return this.match(5);
        case "TupleElementTypes":
          return this.match(3);
        case "TypeParametersOrArguments":
          return this.match(48);
      }
    }
    tsParseList(e, r) {
      const i = [];
      for (; !this.tsIsListTerminator(e); )
        i.push(r());
      return i;
    }
    tsParseDelimitedList(e, r, i) {
      return Ls(this.tsParseDelimitedListWorker(e, r, !0, i));
    }
    tsParseDelimitedListWorker(e, r, i, u) {
      const T = [];
      let P = -1;
      for (; !this.tsIsListTerminator(e); ) {
        P = -1;
        const g = r();
        if (g == null)
          return;
        if (T.push(g), this.eat(12)) {
          P = this.state.lastTokStartLoc.index;
          continue;
        }
        if (this.tsIsListTerminator(e))
          break;
        i && this.expect(12);
        return;
      }
      return u && (u.value = P), T;
    }
    tsParseBracketedList(e, r, i, u, T) {
      u || (i ? this.expect(0) : this.expect(47));
      const P = this.tsParseDelimitedList(e, r, T);
      return i ? this.expect(3) : this.expect(48), P;
    }
    tsParseImportType() {
      const e = this.startNode();
      return this.expect(83), this.expect(10), this.match(134) ? e.argument = this.parseStringLiteral(this.state.value) : (this.raise(H.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom()), this.eat(12) ? e.options = this.tsParseImportTypeOptions() : e.options = null, this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(3)), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
    }
    tsParseImportTypeOptions() {
      const e = this.startNode();
      this.expect(5);
      const r = this.startNode();
      return this.isContextual(76) ? (r.method = !1, r.key = this.parseIdentifier(!0), r.computed = !1, r.shorthand = !1) : this.unexpected(null, 76), this.expect(14), r.value = this.tsParseImportTypeWithPropertyValue(), e.properties = [this.finishObjectProperty(r)], this.eat(12), this.expect(8), this.finishNode(e, "ObjectExpression");
    }
    tsParseImportTypeWithPropertyValue() {
      const e = this.startNode(), r = [];
      for (this.expect(5); !this.match(8); ) {
        const i = this.state.type;
        pe(i) || i === 134 ? r.push(super.parsePropertyDefinition(null)) : this.unexpected(), this.eat(12);
      }
      return e.properties = r, this.next(), this.finishNode(e, "ObjectExpression");
    }
    tsParseEntityName(e) {
      let r;
      if (e & 1 && this.match(78))
        if (e & 2)
          r = this.parseIdentifier(!0);
        else {
          const i = this.startNode();
          this.next(), r = this.finishNode(i, "ThisExpression");
        }
      else
        r = this.parseIdentifier(!!(e & 1));
      for (; this.eat(16); ) {
        const i = this.startNodeAtNode(r);
        i.left = r, i.right = this.parseIdentifier(!!(e & 1)), r = this.finishNode(i, "TSQualifiedName");
      }
      return r;
    }
    tsParseTypeReference() {
      const e = this.startNode();
      return e.typeName = this.tsParseEntityName(1), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
    }
    tsParseThisTypePredicate(e) {
      this.next();
      const r = this.startNodeAtNode(e);
      return r.parameterName = e, r.typeAnnotation = this.tsParseTypeAnnotation(!1), r.asserts = !1, this.finishNode(r, "TSTypePredicate");
    }
    tsParseThisTypeNode() {
      const e = this.startNode();
      return this.next(), this.finishNode(e, "TSThisType");
    }
    tsParseTypeQuery() {
      const e = this.startNode();
      return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(3), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
    }
    tsParseTypeParameter(e) {
      const r = this.startNode();
      return e(r), r.name = this.tsParseTypeParameterName(), r.constraint = this.tsEatThenParseType(81), r.default = this.tsEatThenParseType(29), this.finishNode(r, "TSTypeParameter");
    }
    tsTryParseTypeParameters(e) {
      if (this.match(47))
        return this.tsParseTypeParameters(e);
    }
    tsParseTypeParameters(e) {
      const r = this.startNode();
      this.match(47) || this.match(143) ? this.next() : this.unexpected();
      const i = {
        value: -1
      };
      return r.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), r.params.length === 0 && this.raise(H.EmptyTypeParameters, r), i.value !== -1 && this.addExtra(r, "trailingComma", i.value), this.finishNode(r, "TSTypeParameterDeclaration");
    }
    tsFillSignature(e, r) {
      const i = e === 19, u = "parameters", T = "typeAnnotation";
      r.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), r[u] = this.tsParseBindingListForSignature(), i ? r[T] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (r[T] = this.tsParseTypeOrTypePredicateAnnotation(e));
    }
    tsParseBindingListForSignature() {
      const e = super.parseBindingList(11, 41, 2);
      for (const r of e) {
        const {
          type: i
        } = r;
        (i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(H.UnsupportedSignatureParameterKind, r, {
          type: i
        });
      }
      return e;
    }
    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }
    tsParseSignatureMember(e, r) {
      return this.tsFillSignature(14, r), this.tsParseTypeMemberSemicolon(), this.finishNode(r, e);
    }
    tsIsUnambiguouslyIndexSignature() {
      return this.next(), pe(this.state.type) ? (this.next(), this.match(14)) : !1;
    }
    tsTryParseIndexSignature(e) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
        return;
      this.expect(0);
      const r = this.parseIdentifier();
      r.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(r), this.expect(3), e.parameters = [r];
      const i = this.tsTryParseTypeAnnotation();
      return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
    }
    tsParsePropertyOrMethodSignature(e, r) {
      if (this.eat(17) && (e.optional = !0), this.match(10) || this.match(47)) {
        r && this.raise(H.ReadonlyForMethodSignature, e);
        const i = e;
        i.kind && this.match(47) && this.raise(H.AccessorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
        const u = "parameters", T = "typeAnnotation";
        if (i.kind === "get")
          i[u].length > 0 && (this.raise(A.BadGetterArity, this.state.curPosition()), this.isThisParam(i[u][0]) && this.raise(H.AccessorCannotDeclareThisParameter, this.state.curPosition()));
        else if (i.kind === "set") {
          if (i[u].length !== 1)
            this.raise(A.BadSetterArity, this.state.curPosition());
          else {
            const P = i[u][0];
            this.isThisParam(P) && this.raise(H.AccessorCannotDeclareThisParameter, this.state.curPosition()), P.type === "Identifier" && P.optional && this.raise(H.SetAccessorCannotHaveOptionalParameter, this.state.curPosition()), P.type === "RestElement" && this.raise(H.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
          i[T] && this.raise(H.SetAccessorCannotHaveReturnType, i[T]);
        } else
          i.kind = "method";
        return this.finishNode(i, "TSMethodSignature");
      } else {
        const i = e;
        r && (i.readonly = !0);
        const u = this.tsTryParseTypeAnnotation();
        return u && (i.typeAnnotation = u), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
      }
    }
    tsParseTypeMember() {
      const e = this.startNode();
      if (this.match(10) || this.match(47))
        return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
      if (this.match(77)) {
        const i = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
      }
      this.tsParseModifiers({
        allowedModifiers: ["readonly"],
        disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
      }, e);
      const r = this.tsTryParseIndexSignature(e);
      return r || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e), !this.match(10) && !this.match(47) && this.unexpected(null, 10)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
    }
    tsParseTypeLiteral() {
      const e = this.startNode();
      return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
    }
    tsParseObjectTypeMembers() {
      this.expect(5);
      const e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      return this.expect(8), e;
    }
    tsIsStartOfMappedType() {
      return this.next(), this.eat(53) ? this.isContextual(122) : (this.isContextual(122) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58)));
    }
    tsParseMappedType() {
      const e = this.startNode();
      this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(122)) : this.eatContextual(122) && (e.readonly = !0), this.expect(0);
      {
        const r = this.startNode();
        r.name = this.tsParseTypeParameterName(), r.constraint = this.tsExpectThenParseType(58), e.typeParameter = this.finishNode(r, "TSTypeParameter");
      }
      return e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
    }
    tsParseTupleType() {
      const e = this.startNode();
      e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
      let r = !1;
      return e.elementTypes.forEach((i) => {
        const {
          type: u
        } = i;
        r && u !== "TSRestType" && u !== "TSOptionalType" && !(u === "TSNamedTupleMember" && i.optional) && this.raise(H.OptionalTypeBeforeRequired, i), r || (r = u === "TSNamedTupleMember" && i.optional || u === "TSOptionalType");
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      const e = this.state.startLoc, r = this.eat(21), {
        startLoc: i
      } = this.state;
      let u, T, P, g;
      const D = Le(this.state.type) ? this.lookaheadCharCode() : null;
      if (D === 58)
        u = !0, P = !1, T = this.parseIdentifier(!0), this.expect(14), g = this.tsParseType();
      else if (D === 63) {
        P = !0;
        const B = this.state.value, J = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (u = !0, T = this.createIdentifier(this.startNodeAt(i), B), this.expect(17), this.expect(14), g = this.tsParseType()) : (u = !1, g = J, this.expect(17));
      } else
        g = this.tsParseType(), P = this.eat(17), u = this.eat(14);
      if (u) {
        let B;
        T ? (B = this.startNodeAt(i), B.optional = P, B.label = T, B.elementType = g, this.eat(17) && (B.optional = !0, this.raise(H.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (B = this.startNodeAt(i), B.optional = P, this.raise(H.InvalidTupleMemberLabel, g), B.label = g, B.elementType = this.tsParseType()), g = this.finishNode(B, "TSNamedTupleMember");
      } else if (P) {
        const B = this.startNodeAt(i);
        B.typeAnnotation = g, g = this.finishNode(B, "TSOptionalType");
      }
      if (r) {
        const B = this.startNodeAt(e);
        B.typeAnnotation = g, g = this.finishNode(B, "TSRestType");
      }
      return g;
    }
    tsParseParenthesizedType() {
      const e = this.startNode();
      return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
    }
    tsParseFunctionOrConstructorType(e, r) {
      const i = this.startNode();
      return e === "TSConstructorType" && (i.abstract = !!r, r && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
    }
    tsParseLiteralTypeNode() {
      const e = this.startNode();
      switch (this.state.type) {
        case 135:
        case 136:
        case 134:
        case 85:
        case 86:
          e.literal = super.parseExprAtom();
          break;
        default:
          this.unexpected();
      }
      return this.finishNode(e, "TSLiteralType");
    }
    tsParseTemplateLiteralType() {
      {
        const e = this.startNode();
        return e.literal = super.parseTemplate(!1), this.finishNode(e, "TSLiteralType");
      }
    }
    parseTemplateSubstitution() {
      return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
    }
    tsParseThisTypeOrThisTypePredicate() {
      const e = this.tsParseThisTypeNode();
      return this.isContextual(116) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
    }
    tsParseNonArrayType() {
      switch (this.state.type) {
        case 134:
        case 135:
        case 136:
        case 85:
        case 86:
          return this.tsParseLiteralTypeNode();
        case 53:
          if (this.state.value === "-") {
            const e = this.startNode(), r = this.lookahead();
            return r.type !== 135 && r.type !== 136 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
          }
          break;
        case 78:
          return this.tsParseThisTypeOrThisTypePredicate();
        case 87:
          return this.tsParseTypeQuery();
        case 83:
          return this.tsParseImportType();
        case 5:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
        case 0:
          return this.tsParseTupleType();
        case 10:
          return this.tsParseParenthesizedType();
        case 25:
        case 24:
          return this.tsParseTemplateLiteralType();
        default: {
          const {
            type: e
          } = this.state;
          if (pe(e) || e === 88 || e === 84) {
            const r = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : ks(this.state.value);
            if (r !== void 0 && this.lookaheadCharCode() !== 46) {
              const i = this.startNode();
              return this.next(), this.finishNode(i, r);
            }
            return this.tsParseTypeReference();
          }
        }
      }
      throw this.unexpected();
    }
    tsParseArrayTypeOrHigher() {
      const {
        startLoc: e
      } = this.state;
      let r = this.tsParseNonArrayType();
      for (; !this.hasPrecedingLineBreak() && this.eat(0); )
        if (this.match(3)) {
          const i = this.startNodeAt(e);
          i.elementType = r, this.expect(3), r = this.finishNode(i, "TSArrayType");
        } else {
          const i = this.startNodeAt(e);
          i.objectType = r, i.indexType = this.tsParseType(), this.expect(3), r = this.finishNode(i, "TSIndexedAccessType");
        }
      return r;
    }
    tsParseTypeOperator() {
      const e = this.startNode(), r = this.state.value;
      return this.next(), e.operator = r, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), r === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
    }
    tsCheckTypeAnnotationForReadOnly(e) {
      switch (e.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;
        default:
          this.raise(H.UnexpectedReadonly, e);
      }
    }
    tsParseInferType() {
      const e = this.startNode();
      this.expectContextual(115);
      const r = this.startNode();
      return r.name = this.tsParseTypeParameterName(), r.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(r, "TSTypeParameter"), this.finishNode(e, "TSInferType");
    }
    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        const e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17))
          return e;
      }
    }
    tsParseTypeOperatorOrHigher() {
      return It(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }
    tsParseUnionOrIntersectionType(e, r, i) {
      const u = this.startNode(), T = this.eat(i), P = [];
      do
        P.push(r());
      while (this.eat(i));
      return P.length === 1 && !T ? P[0] : (u.types = P, this.finishNode(u, e));
    }
    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
    }
    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
    }
    tsIsStartOfFunctionType() {
      return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }
    tsSkipParameterStart() {
      if (pe(this.state.type) || this.match(78))
        return this.next(), !0;
      if (this.match(5)) {
        const {
          errors: e
        } = this.state, r = e.length;
        try {
          return this.parseObjectLike(8, !0), e.length === r;
        } catch {
          return !1;
        }
      }
      if (this.match(0)) {
        this.next();
        const {
          errors: e
        } = this.state, r = e.length;
        try {
          return super.parseBindingList(3, 93, 1), e.length === r;
        } catch {
          return !1;
        }
      }
      return !1;
    }
    tsIsUnambiguouslyStartOfFunctionType() {
      return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
    }
    tsParseTypeOrTypePredicateAnnotation(e) {
      return this.tsInType(() => {
        const r = this.startNode();
        this.expect(e);
        const i = this.startNode(), u = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
        if (u && this.match(78)) {
          let g = this.tsParseThisTypeOrThisTypePredicate();
          return g.type === "TSThisType" ? (i.parameterName = g, i.asserts = !0, i.typeAnnotation = null, g = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(g, i), g.asserts = !0), r.typeAnnotation = g, this.finishNode(r, "TSTypeAnnotation");
        }
        const T = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!T)
          return u ? (i.parameterName = this.parseIdentifier(), i.asserts = u, i.typeAnnotation = null, r.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(r, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, r);
        const P = this.tsParseTypeAnnotation(!1);
        return i.parameterName = T, i.typeAnnotation = P, i.asserts = u, r.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(r, "TSTypeAnnotation");
      });
    }
    tsTryParseTypeOrTypePredicateAnnotation() {
      if (this.match(14))
        return this.tsParseTypeOrTypePredicateAnnotation(14);
    }
    tsTryParseTypeAnnotation() {
      if (this.match(14))
        return this.tsParseTypeAnnotation();
    }
    tsTryParseType() {
      return this.tsEatThenParseType(14);
    }
    tsParseTypePredicatePrefix() {
      const e = this.parseIdentifier();
      if (this.isContextual(116) && !this.hasPrecedingLineBreak())
        return this.next(), e;
    }
    tsParseTypePredicateAsserts() {
      if (this.state.type !== 109)
        return !1;
      const e = this.state.containsEsc;
      return this.next(), !pe(this.state.type) && !this.match(78) ? !1 : (e && this.raise(A.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      }), !0);
    }
    tsParseTypeAnnotation(e = !0, r = this.startNode()) {
      return this.tsInType(() => {
        e && this.expect(14), r.typeAnnotation = this.tsParseType();
      }), this.finishNode(r, "TSTypeAnnotation");
    }
    tsParseType() {
      nr(this.state.inType);
      const e = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
        return e;
      const r = this.startNodeAtNode(e);
      return r.checkType = e, r.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), r.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), r.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(r, "TSConditionalType");
    }
    isAbstractConstructorSignature() {
      return this.isContextual(124) && this.isLookaheadContextual("new");
    }
    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
    }
    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(H.ReservedTypeAssertion, this.state.startLoc);
      const e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      const r = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        {
          const u = this.startNode();
          return u.expression = this.tsParseEntityName(3), this.match(47) && (u.typeParameters = this.tsParseTypeArguments()), this.finishNode(u, "TSExpressionWithTypeArguments");
        }
      });
      return i.length || this.raise(H.EmptyHeritageClauseType, r, {
        token: e
      }), i;
    }
    tsParseInterfaceDeclaration(e, r = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(129), r.declare && (e.declare = !0), pe(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(H.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
      const i = this.startNode();
      return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
    }
    tsParseTypeAliasDeclaration(e) {
      return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 2), e.typeAnnotation = this.tsInType(() => {
        if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(114) && this.lookaheadCharCode() !== 46) {
          const r = this.startNode();
          return this.next(), this.finishNode(r, "TSIntrinsicKeyword");
        }
        return this.tsParseType();
      }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
    }
    tsInTopLevelContext(e) {
      if (this.curContext() !== ue.brace) {
        const r = this.state.context;
        this.state.context = [r[0]];
        try {
          return e();
        } finally {
          this.state.context = r;
        }
      } else
        return e();
    }
    tsInType(e) {
      const r = this.state.inType;
      this.state.inType = !0;
      try {
        return e();
      } finally {
        this.state.inType = r;
      }
    }
    tsInDisallowConditionalTypesContext(e) {
      const r = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !0;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = r;
      }
    }
    tsInAllowConditionalTypesContext(e) {
      const r = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !1;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = r;
      }
    }
    tsEatThenParseType(e) {
      if (this.match(e))
        return this.tsNextThenParseType();
    }
    tsExpectThenParseType(e) {
      return this.tsInType(() => (this.expect(e), this.tsParseType()));
    }
    tsNextThenParseType() {
      return this.tsInType(() => (this.next(), this.tsParseType()));
    }
    tsParseEnumMember() {
      const e = this.startNode();
      return e.id = this.match(134) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
    }
    tsParseEnumDeclaration(e, r = {}) {
      return r.const && (e.const = !0), r.declare && (e.declare = !0), this.expectContextual(126), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? 8971 : 8459), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
    }
    tsParseEnumBody() {
      const e = this.startNode();
      return this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumBody");
    }
    tsParseModuleBlock() {
      const e = this.startNode();
      return this.scope.enter(0), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
    }
    tsParseModuleOrNamespaceDeclaration(e, r = !1) {
      if (e.id = this.parseIdentifier(), r || this.checkIdentifier(e.id, 1024), this.eat(16)) {
        const i = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(i, !0), e.body = i;
      } else
        this.scope.enter(1024), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
      return this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseAmbientExternalModuleDeclaration(e) {
      return this.isContextual(112) ? (e.kind = "global", e.global = !0, e.id = this.parseIdentifier()) : this.match(134) ? (e.kind = "module", e.id = super.parseStringLiteral(this.state.value)) : this.unexpected(), this.match(5) ? (this.scope.enter(1024), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseImportEqualsDeclaration(e, r, i) {
      e.isExport = i || !1, e.id = r || this.parseIdentifier(), this.checkIdentifier(e.id, 4096), this.expect(29);
      const u = this.tsParseModuleReference();
      return e.importKind === "type" && u.type !== "TSExternalModuleReference" && this.raise(H.ImportAliasHasImportType, u), e.moduleReference = u, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
    }
    tsIsExternalModuleReference() {
      return this.isContextual(119) && this.lookaheadCharCode() === 40;
    }
    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
    }
    tsParseExternalModuleReference() {
      const e = this.startNode();
      return this.expectContextual(119), this.expect(10), this.match(134) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.sawUnambiguousESM = !0, this.finishNode(e, "TSExternalModuleReference");
    }
    tsLookAhead(e) {
      const r = this.state.clone(), i = e();
      return this.state = r, i;
    }
    tsTryParseAndCatch(e) {
      const r = this.tryParse((i) => e() || i());
      if (!(r.aborted || !r.node))
        return r.error && (this.state = r.failState), r.node;
    }
    tsTryParse(e) {
      const r = this.state.clone(), i = e();
      if (i !== void 0 && i !== !1)
        return i;
      this.state = r;
    }
    tsTryParseDeclare(e) {
      if (this.isLineTerminator())
        return;
      const r = this.state.type;
      return this.tsInAmbientContext(() => {
        switch (r) {
          case 68:
            return e.declare = !0, super.parseFunctionStatement(e, !1, !1);
          case 80:
            return e.declare = !0, this.parseClass(e, !0, !1);
          case 126:
            return this.tsParseEnumDeclaration(e, {
              declare: !0
            });
          case 112:
            return this.tsParseAmbientExternalModuleDeclaration(e);
          case 100:
            if (this.state.containsEsc)
              return;
          case 75:
          case 74:
            return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = !0, this.parseVarStatement(e, this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(e, {
              const: !0,
              declare: !0
            }));
          case 107:
            if (this.isUsing())
              return this.raise(H.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.parseVarStatement(e, "using", !0);
            break;
          case 96:
            if (this.isAwaitUsing())
              return this.raise(H.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.next(), this.parseVarStatement(e, "await using", !0);
            break;
          case 129: {
            const i = this.tsParseInterfaceDeclaration(e, {
              declare: !0
            });
            if (i) return i;
          }
          default:
            if (pe(r))
              return this.tsParseDeclaration(e, this.state.type, !0, null);
        }
      });
    }
    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.type, !0, null);
    }
    tsParseDeclaration(e, r, i, u) {
      switch (r) {
        case 124:
          if (this.tsCheckLineTerminator(i) && (this.match(80) || pe(this.state.type)))
            return this.tsParseAbstractDeclaration(e, u);
          break;
        case 127:
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(134))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (pe(this.state.type))
              return e.kind = "module", this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case 128:
          if (this.tsCheckLineTerminator(i) && pe(this.state.type))
            return e.kind = "namespace", this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case 130:
          if (this.tsCheckLineTerminator(i) && pe(this.state.type))
            return this.tsParseTypeAliasDeclaration(e);
          break;
      }
    }
    tsCheckLineTerminator(e) {
      return e ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
    }
    tsTryParseGenericAsyncArrowFunction(e) {
      if (!this.match(47)) return;
      const r = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !0;
      const i = this.tsTryParseAndCatch(() => {
        const u = this.startNodeAt(e);
        return u.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(u), u.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), u;
      });
      if (this.state.maybeInArrowParameters = r, !!i)
        return super.parseArrowExpression(i, null, !0);
    }
    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47)
        return this.tsParseTypeArguments();
    }
    tsParseTypeArguments() {
      const e = this.startNode();
      return e.params = this.tsInType(() => this.tsInTopLevelContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(H.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === ue.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return Nt(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }
    parseBindingElement(e, r) {
      const i = r.length ? r[0].loc.start : this.state.startLoc, u = {};
      this.tsParseModifiers({
        allowedModifiers: ["public", "private", "protected", "override", "readonly"]
      }, u);
      const T = u.accessibility, P = u.override, g = u.readonly;
      !(e & 4) && (T || g || P) && this.raise(H.UnexpectedParameterModifier, i);
      const C = this.parseMaybeDefault();
      e & 2 && this.parseFunctionParamType(C);
      const D = this.parseMaybeDefault(C.loc.start, C);
      if (T || g || P) {
        const B = this.startNodeAt(i);
        return r.length && (B.decorators = r), T && (B.accessibility = T), g && (B.readonly = g), P && (B.override = P), D.type !== "Identifier" && D.type !== "AssignmentPattern" && this.raise(H.UnsupportedParameterPropertyKind, B), B.parameter = D, this.finishNode(B, "TSParameterProperty");
      }
      return r.length && (C.decorators = r), D;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (const r of e.params)
        r.type !== "Identifier" && r.optional && !this.state.isAmbientContext && this.raise(H.PatternIsOptional, r);
    }
    setArrowFunctionParameters(e, r, i) {
      super.setArrowFunctionParameters(e, r, i), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, r, i = !1) {
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      const u = r === "FunctionDeclaration" ? "TSDeclareFunction" : r === "ClassMethod" || r === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return u && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, u) : u === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(H.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, u, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, r, i));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((r) => {
        r?.type === "TSTypeCastExpression" && this.raise(H.UnexpectedTypeAnnotation, r.typeAnnotation);
      });
    }
    toReferencedList(e, r) {
      return this.tsCheckForInvalidTypeCasts(e), e;
    }
    parseArrayLike(e, r, i) {
      const u = super.parseArrayLike(e, r, i);
      return u.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(u.elements), u;
    }
    parseSubscript(e, r, i, u) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = !1, this.next();
        const P = this.startNodeAt(r);
        return P.expression = e, this.finishNode(P, "TSNonNullExpression");
      }
      let T = !1;
      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (i)
          return u.stop = !0, e;
        u.optionalChainMember = T = !0, this.next();
      }
      if (this.match(47) || this.match(51)) {
        let P;
        const g = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(e)) {
            const J = this.tsTryParseGenericAsyncArrowFunction(r);
            if (J)
              return u.stop = !0, J;
          }
          const C = this.tsParseTypeArgumentsInExpression();
          if (!C) return;
          if (T && !this.match(10)) {
            P = this.state.curPosition();
            return;
          }
          if (Ge(this.state.type)) {
            const J = super.parseTaggedTemplateExpression(e, r, u);
            return J.typeParameters = C, J;
          }
          if (!i && this.eat(10)) {
            const J = this.startNodeAt(r);
            return J.callee = e, J.arguments = this.parseCallExpressionArguments(), this.tsCheckForInvalidTypeCasts(J.arguments), J.typeParameters = C, u.optionalChainMember && (J.optional = T), this.finishCallExpression(J, u.optionalChainMember);
          }
          const D = this.state.type;
          if (D === 48 || D === 52 || D !== 10 && Ye(D) && !this.hasPrecedingLineBreak())
            return;
          const B = this.startNodeAt(r);
          return B.expression = e, B.typeParameters = C, this.finishNode(B, "TSInstantiationExpression");
        });
        if (P && this.unexpected(P, 10), g)
          return g.type === "TSInstantiationExpression" && ((this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(H.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), !this.match(16) && !this.match(18) && (g.expression = super.stopParseSubscript(e, u))), g;
      }
      return super.parseSubscript(e, r, i, u);
    }
    parseNewCallee(e) {
      var r;
      super.parseNewCallee(e);
      const {
        callee: i
      } = e;
      i.type === "TSInstantiationExpression" && !((r = i.extra) != null && r.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
    }
    parseExprOp(e, r, i) {
      let u;
      if (He(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (u = this.isContextual(120)))) {
        const T = this.startNodeAt(r);
        return T.expression = e, T.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (u && this.raise(A.UnexpectedKeyword, this.state.startLoc, {
          keyword: "const"
        }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(T, u ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(T, r, i);
      }
      return super.parseExprOp(e, r, i);
    }
    checkReservedWord(e, r, i, u) {
      this.state.isAmbientContext || super.checkReservedWord(e, r, i, u);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(H.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    checkDuplicateExports() {
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        const r = this.lookaheadCharCode();
        return e ? r === 123 || r === 42 : r !== 61;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, r, i, u) {
      super.applyImportPhase(e, r, i, u), r ? e.exportKind = i === "type" ? "type" : "value" : e.importKind = i === "type" || i === "typeof" ? i : "value";
    }
    parseImport(e) {
      if (this.match(134))
        return e.importKind = "value", super.parseImport(e);
      let r;
      if (pe(this.state.type) && this.lookaheadCharCode() === 61)
        return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
      if (this.isContextual(130)) {
        const i = this.parseMaybeImportPhase(e, !1);
        if (this.lookaheadCharCode() === 61)
          return this.tsParseImportEqualsDeclaration(e, i);
        r = super.parseImportSpecifiersAndAfter(e, i);
      } else
        r = super.parseImport(e);
      return r.importKind === "type" && r.specifiers.length > 1 && r.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(H.TypeImportCannotSpecifyDefaultAndNamed, r), r;
    }
    parseExport(e, r) {
      if (this.match(83)) {
        const i = e;
        this.next();
        let u = null;
        return this.isContextual(130) && this.isPotentialImportPhase(!1) ? u = this.parseMaybeImportPhase(i, !1) : i.importKind = "value", this.tsParseImportEqualsDeclaration(i, u, !0);
      } else if (this.eat(29)) {
        const i = e;
        return i.expression = super.parseExpression(), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(i, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        const i = e;
        return this.expectContextual(128), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
      } else
        return super.parseExport(e, r);
    }
    isAbstractClass() {
      return this.isContextual(124) && this.isLookaheadContextual("class");
    }
    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        const e = this.startNode();
        return this.next(), e.abstract = !0, this.parseClass(e, !0, !0);
      }
      if (this.match(129)) {
        const e = this.tsParseInterfaceDeclaration(this.startNode());
        if (e) return e;
      }
      return super.parseExportDefaultExpression();
    }
    parseVarStatement(e, r, i = !1) {
      const {
        isAmbientContext: u
      } = this.state, T = super.parseVarStatement(e, r, i || u);
      if (!u) return T;
      if (!e.declare && (r === "using" || r === "await using"))
        return this.raiseOverwrite(H.UsingDeclarationInAmbientContext, e, r), T;
      for (const {
        id: P,
        init: g
      } of T.declarations)
        g && (r === "var" || r === "let" || P.typeAnnotation ? this.raise(H.InitializerNotAllowedInAmbientContext, g) : Fs(g, this.hasPlugin("estree")) || this.raise(H.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, g));
      return T;
    }
    parseStatementContent(e, r) {
      if (!this.state.containsEsc)
        switch (this.state.type) {
          case 75: {
            if (this.isLookaheadContextual("enum")) {
              const i = this.startNode();
              return this.expect(75), this.tsParseEnumDeclaration(i, {
                const: !0
              });
            }
            break;
          }
          case 124:
          case 125: {
            if (this.nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine()) {
              const i = this.state.type, u = this.startNode();
              this.next();
              const T = i === 125 ? this.tsTryParseDeclare(u) : this.tsParseAbstractDeclaration(u, r);
              return T ? (i === 125 && (T.declare = !0), T) : (u.expression = this.createIdentifier(this.startNodeAt(u.loc.start), i === 125 ? "declare" : "abstract"), this.semicolon(!1), this.finishNode(u, "ExpressionStatement"));
            }
            break;
          }
          case 126:
            return this.tsParseEnumDeclaration(this.startNode());
          case 112: {
            if (this.lookaheadCharCode() === 123) {
              const u = this.startNode();
              return this.tsParseAmbientExternalModuleDeclaration(u);
            }
            break;
          }
          case 129: {
            const i = this.tsParseInterfaceDeclaration(this.startNode());
            if (i) return i;
            break;
          }
          case 127: {
            if (this.nextTokenIsIdentifierOrStringLiteralOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseDeclaration(i, 127, !1, r);
            }
            break;
          }
          case 128: {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseDeclaration(i, 128, !1, r);
            }
            break;
          }
          case 130: {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseTypeAliasDeclaration(i);
            }
            break;
          }
        }
      return super.parseStatementContent(e, r);
    }
    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }
    tsHasSomeModifiers(e, r) {
      return r.some((i) => or(i) ? e.accessibility === i : !!e[i]);
    }
    tsIsStartOfStaticBlocks() {
      return this.isContextual(106) && this.lookaheadCharCode() === 123;
    }
    parseClassMember(e, r, i) {
      const u = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({
        allowedModifiers: u,
        disallowedModifiers: ["in", "out"],
        stopOnStartOfClassStaticBlock: !0,
        errorTemplate: H.InvalidModifierOnTypeParameterPositions
      }, r);
      const T = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(r, u) && this.raise(H.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, r)) : this.parseClassMemberWithIsStatic(e, r, i, !!r.static);
      };
      r.declare ? this.tsInAmbientContext(T) : T();
    }
    parseClassMemberWithIsStatic(e, r, i, u) {
      const T = this.tsTryParseIndexSignature(r);
      if (T) {
        e.body.push(T), r.abstract && this.raise(H.IndexSignatureHasAbstract, r), r.accessibility && this.raise(H.IndexSignatureHasAccessibility, r, {
          modifier: r.accessibility
        }), r.declare && this.raise(H.IndexSignatureHasDeclare, r), r.override && this.raise(H.IndexSignatureHasOverride, r);
        return;
      }
      !this.state.inAbstractClass && r.abstract && this.raise(H.NonAbstractClassHasAbstractMethod, r), r.override && (i.hadSuperClass || this.raise(H.OverrideNotInSubClass, r)), super.parseClassMemberWithIsStatic(e, r, i, u);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(H.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(H.ClassMethodHasDeclare, e);
    }
    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
    }
    parseConditional(e, r, i) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const u = this.lookaheadCharCode();
        if (u === 44 || u === 61 || u === 58 || u === 41)
          return this.setOptionalParametersError(i), e;
      }
      return super.parseConditional(e, r, i);
    }
    parseParenItem(e, r) {
      const i = super.parseParenItem(e, r);
      if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const u = this.startNodeAt(r);
        return u.expression = e, u.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(u, "TSTypeCastExpression");
      }
      return e;
    }
    parseExportDeclaration(e) {
      if (!this.state.isAmbientContext && this.isContextual(125))
        return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
      const r = this.state.startLoc, i = this.eatContextual(125);
      if (i && (this.isContextual(125) || !this.shouldParseExportDeclaration()))
        throw this.raise(H.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
      const T = pe(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
      return T ? ((T.type === "TSInterfaceDeclaration" || T.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && T.type !== "TSImportEqualsDeclaration" && (this.resetStartLocation(T, r), T.declare = !0), T) : null;
    }
    parseClassId(e, r, i, u) {
      if ((!r || i) && this.isContextual(113))
        return;
      super.parseClassId(e, r, i, e.declare ? 1024 : 8331);
      const T = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
      T && (e.typeParameters = T);
    }
    parseClassPropertyAnnotation(e) {
      e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
      const r = this.tsTryParseTypeAnnotation();
      r && (e.typeAnnotation = r);
    }
    parseClassProperty(e) {
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(H.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
        const {
          key: r
        } = e;
        this.raise(H.AbstractPropertyHasInitializer, this.state.startLoc, {
          propertyName: r.type === "Identifier" && !e.computed ? r.name : `[${this.input.slice(this.offsetToSourcePos(r.start), this.offsetToSourcePos(r.end))}]`
        });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(H.PrivateElementHasAbstract, e), e.accessibility && this.raise(H.PrivateElementHasAccessibility, e, {
        modifier: e.accessibility
      }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(H.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, r, i, u, T, P) {
      const g = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      g && T && this.raise(H.ConstructorHasTypeParameters, g);
      const {
        declare: C = !1,
        kind: D
      } = r;
      C && (D === "get" || D === "set") && this.raise(H.DeclareAccessor, r, {
        kind: D
      }), g && (r.typeParameters = g), super.pushClassMethod(e, r, i, u, T, P);
    }
    pushClassPrivateMethod(e, r, i, u) {
      const T = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      T && (r.typeParameters = T), super.pushClassPrivateMethod(e, r, i, u);
    }
    declareClassPrivateMethodInScope(e, r) {
      e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && e.value.body == null || super.declareClassPrivateMethodInScope(e, r));
    }
    parseClassSuper(e) {
      super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(113) && (e.implements = this.tsParseHeritageClause("implements"));
    }
    parseObjPropValue(e, r, i, u, T, P, g) {
      const C = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return C && (e.typeParameters = C), super.parseObjPropValue(e, r, i, u, T, P, g);
    }
    parseFunctionParams(e, r) {
      const i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      i && (e.typeParameters = i), super.parseFunctionParams(e, r);
    }
    parseVarId(e, r) {
      super.parseVarId(e, r), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
      const i = this.tsTryParseTypeAnnotation();
      i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, r) {
      return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, r);
    }
    parseMaybeAssign(e, r) {
      var i, u, T, P, g;
      let C, D, B;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (C = this.state.clone(), D = this.tryParse(() => super.parseMaybeAssign(e, r), C), !D.error) return D.node;
        const {
          context: G
        } = this.state, de = G[G.length - 1];
        (de === ue.j_oTag || de === ue.j_expr) && G.pop();
      }
      if (!((i = D) != null && i.error) && !this.match(47))
        return super.parseMaybeAssign(e, r);
      (!C || C === this.state) && (C = this.state.clone());
      let J;
      const X = this.tryParse((G) => {
        var de, Pe;
        J = this.tsParseTypeParameters(this.tsParseConstModifier);
        const oe = super.parseMaybeAssign(e, r);
        return (oe.type !== "ArrowFunctionExpression" || (de = oe.extra) != null && de.parenthesized) && G(), ((Pe = J) == null ? void 0 : Pe.params.length) !== 0 && this.resetStartLocationFromNode(oe, J), oe.typeParameters = J, oe;
      }, C);
      if (!X.error && !X.aborted)
        return J && this.reportReservedArrowTypeParam(J), X.node;
      if (!D && (nr(!this.hasPlugin("jsx")), B = this.tryParse(() => super.parseMaybeAssign(e, r), C), !B.error))
        return B.node;
      if ((u = D) != null && u.node)
        return this.state = D.failState, D.node;
      if (X.node)
        return this.state = X.failState, J && this.reportReservedArrowTypeParam(J), X.node;
      if ((T = B) != null && T.node)
        return this.state = B.failState, B.node;
      throw ((P = D) == null ? void 0 : P.error) || X.error || ((g = B) == null ? void 0 : g.error);
    }
    reportReservedArrowTypeParam(e) {
      var r;
      e.params.length === 1 && !e.params[0].constraint && !((r = e.extra) != null && r.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(H.ReservedArrowTypeParam, e);
    }
    parseMaybeUnary(e, r) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, r);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const r = this.tryParse((i) => {
          const u = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && i(), u;
        });
        if (r.aborted) return;
        r.thrown || (r.error && (this.state = r.failState), e.returnType = r.node);
      }
      return super.parseArrow(e);
    }
    parseFunctionParamType(e) {
      this.eat(17) && (e.optional = !0);
      const r = this.tsTryParseTypeAnnotation();
      return r && (e.typeAnnotation = r), this.resetEndLocation(e), e;
    }
    isAssignable(e, r) {
      switch (e.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(e.expression, r);
        case "TSParameterProperty":
          return !0;
        default:
          return super.isAssignable(e, r);
      }
    }
    toAssignable(e, r = !1) {
      switch (e.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(e, r);
          break;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          r ? this.expressionScope.recordArrowParameterBindingError(H.UnexpectedTypeCastInParameter, e) : this.raise(H.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, r);
          break;
        case "AssignmentExpression":
          !r && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
        default:
          super.toAssignable(e, r);
      }
    }
    toAssignableParenthesizedExpression(e, r) {
      switch (e.expression.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, r);
          break;
        default:
          super.toAssignable(e, r);
      }
    }
    checkToRestConversion(e, r) {
      switch (e.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(e.expression, !1);
          break;
        default:
          super.checkToRestConversion(e, r);
      }
    }
    isValidLVal(e, r, i, u) {
      switch (e) {
        case "TSTypeCastExpression":
          return !0;
        case "TSParameterProperty":
          return "parameter";
        case "TSNonNullExpression":
          return "expression";
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
          return (u !== 64 || !i) && ["expression", !0];
        default:
          return super.isValidLVal(e, r, i, u);
      }
    }
    parseBindingAtom() {
      return this.state.type === 78 ? this.parseIdentifier(!0) : super.parseBindingAtom();
    }
    parseMaybeDecoratorArguments(e, r) {
      if (this.match(47) || this.match(51)) {
        const i = this.tsParseTypeArgumentsInExpression();
        if (this.match(10)) {
          const u = super.parseMaybeDecoratorArguments(e, r);
          return u.typeParameters = i, u;
        }
        this.unexpected(null, 10);
      }
      return super.parseMaybeDecoratorArguments(e, r);
    }
    checkCommaAfterRest(e) {
      return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : super.checkCommaAfterRest(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(35) || this.match(14) || super.isClassProperty();
    }
    parseMaybeDefault(e, r) {
      const i = super.parseMaybeDefault(e, r);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(H.TypeAnnotationAfterAssign, i.typeAnnotation), i;
    }
    getTokenFromCode(e) {
      if (this.state.inType) {
        if (e === 62) {
          this.finishOp(48, 1);
          return;
        }
        if (e === 60) {
          this.finishOp(47, 1);
          return;
        }
      }
      super.getTokenFromCode(e);
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    toAssignableListItem(e, r, i) {
      const u = e[r];
      u.type === "TSTypeCastExpression" && (e[r] = this.typeCastToParameter(u)), super.toAssignableListItem(e, r, i);
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    shouldParseArrow(e) {
      return this.match(14) ? e.every((r) => this.isAssignable(r, !0)) : super.shouldParseArrow(e);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }
    jsxParseOpeningElementAfterName(e) {
      if (this.match(47) || this.match(51)) {
        const r = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        r && (e.typeParameters = r);
      }
      return super.jsxParseOpeningElementAfterName(e);
    }
    getGetterSetterExpectedParamCount(e) {
      const r = super.getGetterSetterExpectedParamCount(e), u = this.getObjectOrClassMethodParams(e)[0];
      return u && this.isThisParam(u) ? r + 1 : r;
    }
    parseCatchClauseParam() {
      const e = super.parseCatchClauseParam(), r = this.tsTryParseTypeAnnotation();
      return r && (e.typeAnnotation = r, this.resetEndLocation(e)), e;
    }
    tsInAmbientContext(e) {
      const {
        isAmbientContext: r,
        strict: i
      } = this.state;
      this.state.isAmbientContext = !0, this.state.strict = !1;
      try {
        return e();
      } finally {
        this.state.isAmbientContext = r, this.state.strict = i;
      }
    }
    parseClass(e, r, i) {
      const u = this.state.inAbstractClass;
      this.state.inAbstractClass = !!e.abstract;
      try {
        return super.parseClass(e, r, i);
      } finally {
        this.state.inAbstractClass = u;
      }
    }
    tsParseAbstractDeclaration(e, r) {
      if (this.match(80))
        return e.abstract = !0, this.maybeTakeDecorators(r, this.parseClass(e, !0, !1));
      if (this.isContextual(129))
        return this.hasFollowingLineBreak() ? null : (e.abstract = !0, this.raise(H.NonClassMethodPropertyHasAbstractModifier, e), this.tsParseInterfaceDeclaration(e));
      throw this.unexpected(null, 80);
    }
    parseMethod(e, r, i, u, T, P, g) {
      const C = super.parseMethod(e, r, i, u, T, P, g);
      if ((C.abstract || C.type === "TSAbstractMethodDefinition") && (this.hasPlugin("estree") ? C.value : C).body) {
        const {
          key: J
        } = C;
        this.raise(H.AbstractMethodHasImplementation, C, {
          methodName: J.type === "Identifier" && !C.computed ? J.name : `[${this.input.slice(this.offsetToSourcePos(J.start), this.offsetToSourcePos(J.end))}]`
        });
      }
      return C;
    }
    tsParseTypeParameterName() {
      return this.parseIdentifier().name;
    }
    shouldParseAsAmbientContext() {
      return !!this.getPluginOption("typescript", "dts");
    }
    parse() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse();
    }
    getExpression() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression();
    }
    parseExportSpecifier(e, r, i, u) {
      return !r && u ? (this.parseTypeOnlyImportExportSpecifier(e, !1, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, r, i, u));
    }
    parseImportSpecifier(e, r, i, u, T) {
      return !r && u ? (this.parseTypeOnlyImportExportSpecifier(e, !0, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, r, i, u, i ? 4098 : 4096));
    }
    parseTypeOnlyImportExportSpecifier(e, r, i) {
      const u = r ? "imported" : "local", T = r ? "local" : "exported";
      let P = e[u], g, C = !1, D = !0;
      const B = P.loc.start;
      if (this.isContextual(93)) {
        const X = this.parseIdentifier();
        if (this.isContextual(93)) {
          const G = this.parseIdentifier();
          Le(this.state.type) ? (C = !0, P = X, g = r ? this.parseIdentifier() : this.parseModuleExportName(), D = !1) : (g = G, D = !1);
        } else Le(this.state.type) ? (D = !1, g = r ? this.parseIdentifier() : this.parseModuleExportName()) : (C = !0, P = X);
      } else Le(this.state.type) && (C = !0, r ? (P = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(P.name, P.loc.start, !0, !0)) : P = this.parseModuleExportName());
      C && i && this.raise(r ? H.TypeModifierIsUsedInTypeImports : H.TypeModifierIsUsedInTypeExports, B), e[u] = P, e[T] = g;
      const J = r ? "importKind" : "exportKind";
      e[J] = C ? "type" : "value", D && this.eatContextual(93) && (e[T] = r ? this.parseIdentifier() : this.parseModuleExportName()), e[T] || (e[T] = this.cloneIdentifier(e[u])), r && this.checkIdentifier(e[T], C ? 4098 : 4096);
    }
    fillOptionalPropertiesForTSESLint(e) {
      var r, i, u, T, P, g, C, D, B, J, X, G, de, Pe, oe, xe, We, qe, mr, Tr, Sr, xr, br, Pr, Er, Ar, gr, vr, Ir, Nr, Cr, wr, Or, Dr, Lr, kr, Mr, _r, Br, Fr, Rr, jr, Ur, Kr, Vr, qr, Jr, Yr;
      switch (e.type) {
        case "ExpressionStatement":
          (r = e.directive) != null || (e.directive = void 0);
          return;
        case "RestElement":
          e.value = void 0;
        case "Identifier":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "ObjectPattern":
          (i = e.decorators) != null || (e.decorators = []), (u = e.optional) != null || (e.optional = !1), (T = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
          return;
        case "TSParameterProperty":
          (P = e.accessibility) != null || (e.accessibility = void 0), (g = e.decorators) != null || (e.decorators = []), (C = e.override) != null || (e.override = !1), (D = e.readonly) != null || (e.readonly = !1), (B = e.static) != null || (e.static = !1);
          return;
        case "TSEmptyBodyFunctionExpression":
          e.body = null;
        case "TSDeclareFunction":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ClassMethod":
        case "ClassPrivateMethod":
          (J = e.declare) != null || (e.declare = !1), (X = e.returnType) != null || (e.returnType = void 0), (G = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "Property":
          (de = e.optional) != null || (e.optional = !1);
          return;
        case "TSMethodSignature":
        case "TSPropertySignature":
          (Pe = e.optional) != null || (e.optional = !1);
        case "TSIndexSignature":
          (oe = e.accessibility) != null || (e.accessibility = void 0), (xe = e.readonly) != null || (e.readonly = !1), (We = e.static) != null || (e.static = !1);
          return;
        case "TSAbstractPropertyDefinition":
        case "PropertyDefinition":
        case "TSAbstractAccessorProperty":
        case "AccessorProperty":
          (qe = e.declare) != null || (e.declare = !1), (mr = e.definite) != null || (e.definite = !1), (Tr = e.readonly) != null || (e.readonly = !1), (Sr = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
        case "TSAbstractMethodDefinition":
        case "MethodDefinition":
          (xr = e.accessibility) != null || (e.accessibility = void 0), (br = e.decorators) != null || (e.decorators = []), (Pr = e.override) != null || (e.override = !1), (Er = e.optional) != null || (e.optional = !1);
          return;
        case "ClassExpression":
          (Ar = e.id) != null || (e.id = null);
        case "ClassDeclaration":
          (gr = e.abstract) != null || (e.abstract = !1), (vr = e.declare) != null || (e.declare = !1), (Ir = e.decorators) != null || (e.decorators = []), (Nr = e.implements) != null || (e.implements = []), (Cr = e.superTypeArguments) != null || (e.superTypeArguments = void 0), (wr = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "TSTypeAliasDeclaration":
        case "VariableDeclaration":
          (Or = e.declare) != null || (e.declare = !1);
          return;
        case "VariableDeclarator":
          (Dr = e.definite) != null || (e.definite = !1);
          return;
        case "TSEnumDeclaration":
          (Lr = e.const) != null || (e.const = !1), (kr = e.declare) != null || (e.declare = !1);
          return;
        case "TSEnumMember":
          (Mr = e.computed) != null || (e.computed = !1);
          return;
        case "TSImportType":
          (_r = e.qualifier) != null || (e.qualifier = null), (Br = e.options) != null || (e.options = null);
          return;
        case "TSInterfaceDeclaration":
          (Fr = e.declare) != null || (e.declare = !1), (Rr = e.extends) != null || (e.extends = []);
          return;
        case "TSMappedType":
          (jr = e.optional) != null || (e.optional = !1), (Ur = e.readonly) != null || (e.readonly = void 0);
          return;
        case "TSModuleDeclaration":
          (Kr = e.declare) != null || (e.declare = !1), (Vr = e.global) != null || (e.global = e.kind === "global");
          return;
        case "TSTypeParameter":
          (qr = e.const) != null || (e.const = !1), (Jr = e.in) != null || (e.in = !1), (Yr = e.out) != null || (e.out = !1);
          return;
      }
    }
    chStartsBindingIdentifierAndNotRelationalOperator(e, r) {
      if (Fe(e)) {
        if (Kt.lastIndex = r, Kt.test(this.input)) {
          const i = this.codePointAtPos(Kt.lastIndex);
          if (!Xe(i) && i !== 92)
            return !1;
        }
        return !0;
      } else return e === 92;
    }
    nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine() {
      const e = this.nextTokenInLineStart(), r = this.codePointAtPos(e);
      return this.chStartsBindingIdentifierAndNotRelationalOperator(r, e);
    }
    nextTokenIsIdentifierOrStringLiteralOnSameLine() {
      const e = this.nextTokenInLineStart(), r = this.codePointAtPos(e);
      return this.chStartsBindingIdentifier(r, e) || r === 34 || r === 39;
    }
  };
  function Bs(y) {
    if (y.type !== "MemberExpression") return !1;
    const {
      computed: t,
      property: e
    } = y;
    return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : ur(y.object);
  }
  function Fs(y, t) {
    var e;
    const {
      type: r
    } = y;
    if ((e = y.extra) != null && e.parenthesized)
      return !1;
    if (t) {
      if (r === "Literal") {
        const {
          value: i
        } = y;
        if (typeof i == "string" || typeof i == "boolean")
          return !0;
      }
    } else if (r === "StringLiteral" || r === "BooleanLiteral")
      return !0;
    return !!(lr(y, t) || Rs(y, t) || r === "TemplateLiteral" && y.expressions.length === 0 || Bs(y));
  }
  function lr(y, t) {
    return t ? y.type === "Literal" && (typeof y.value == "number" || "bigint" in y) : y.type === "NumericLiteral" || y.type === "BigIntLiteral";
  }
  function Rs(y, t) {
    if (y.type === "UnaryExpression") {
      const {
        operator: e,
        argument: r
      } = y;
      if (e === "-" && lr(r, t))
        return !0;
    }
    return !1;
  }
  function ur(y) {
    return y.type === "Identifier" ? !0 : y.type !== "MemberExpression" || y.computed ? !1 : ur(y.object);
  }
  const cr = V`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  });
  var js = (y) => class extends y {
    parsePlaceholder(e) {
      if (this.match(133)) {
        const r = this.startNode();
        return this.next(), this.assertNoSpace(), r.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(133), this.finishPlaceholder(r, e);
      }
    }
    finishPlaceholder(e, r) {
      let i = e;
      return (!i.expectedNode || !i.type) && (i = this.finishNode(i, "Placeholder")), i.expectedNode = r, i;
    }
    getTokenFromCode(e) {
      e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(133, 2) : super.getTokenFromCode(e);
    }
    parseExprAtom(e) {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
    }
    parseIdentifier(e) {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
    }
    checkReservedWord(e, r, i, u) {
      e !== void 0 && super.checkReservedWord(e, r, i, u);
    }
    cloneIdentifier(e) {
      const r = super.cloneIdentifier(e);
      return r.type === "Placeholder" && (r.expectedNode = e.expectedNode), r;
    }
    cloneStringLiteral(e) {
      return e.type === "Placeholder" ? this.cloneIdentifier(e) : super.cloneStringLiteral(e);
    }
    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
    }
    isValidLVal(e, r, i, u) {
      return e === "Placeholder" || super.isValidLVal(e, r, i, u);
    }
    toAssignable(e, r) {
      e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, r);
    }
    chStartsBindingIdentifier(e, r) {
      if (super.chStartsBindingIdentifier(e, r))
        return !0;
      const i = this.nextTokenStart();
      return this.input.charCodeAt(i) === 37 && this.input.charCodeAt(i + 1) === 37;
    }
    verifyBreakContinue(e, r) {
      e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, r);
    }
    parseExpressionStatement(e, r) {
      var i;
      if (r.type !== "Placeholder" || (i = r.extra) != null && i.parenthesized)
        return super.parseExpressionStatement(e, r);
      if (this.match(14)) {
        const T = e;
        return T.label = this.finishPlaceholder(r, "Identifier"), this.next(), T.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(T, "LabeledStatement");
      }
      this.semicolon();
      const u = e;
      return u.name = r.name, this.finishPlaceholder(u, "Statement");
    }
    parseBlock(e, r, i) {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, r, i);
    }
    parseFunctionId(e) {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
    }
    parseClass(e, r, i) {
      const u = r ? "ClassDeclaration" : "ClassExpression";
      this.next();
      const T = this.state.strict, P = this.parsePlaceholder("Identifier");
      if (P)
        if (this.match(81) || this.match(133) || this.match(5))
          e.id = P;
        else {
          if (i || !r)
            return e.id = null, e.body = this.finishPlaceholder(P, "ClassBody"), this.finishNode(e, u);
          throw this.raise(cr.ClassNameIsRequired, this.state.startLoc);
        }
      else
        this.parseClassId(e, r, i);
      return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, T), this.finishNode(e, u);
    }
    parseExport(e, r) {
      const i = this.parsePlaceholder("Identifier");
      if (!i) return super.parseExport(e, r);
      const u = e;
      if (!this.isContextual(98) && !this.match(12))
        return u.specifiers = [], u.source = null, u.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(u, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      const T = this.startNode();
      return T.exported = i, u.specifiers = [this.finishNode(T, "ExportDefaultSpecifier")], super.parseExport(u, r);
    }
    isExportDefaultSpecifier() {
      if (this.match(65)) {
        const e = this.nextTokenStart();
        if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Be(133), this.nextTokenStartSince(e + 4)))
          return !0;
      }
      return super.isExportDefaultSpecifier();
    }
    maybeParseExportDefaultSpecifier(e, r) {
      var i;
      return (i = e.specifiers) != null && i.length ? !0 : super.maybeParseExportDefaultSpecifier(e, r);
    }
    checkExport(e) {
      const {
        specifiers: r
      } = e;
      r != null && r.length && (e.specifiers = r.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = r;
    }
    parseImport(e) {
      const r = this.parsePlaceholder("Identifier");
      if (!r) return super.parseImport(e);
      if (e.specifiers = [], !this.isContextual(98) && !this.match(12))
        return e.source = this.finishPlaceholder(r, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      const i = this.startNodeAtNode(r);
      return i.local = r, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(98), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }
    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
    }
    assertNoSpace() {
      this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index) && this.raise(cr.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }, Us = (y) => class extends y {
    parseV8Intrinsic() {
      if (this.match(54)) {
        const e = this.state.startLoc, r = this.startNode();
        if (this.next(), pe(this.state.type)) {
          const i = this.parseIdentifierName(), u = this.createIdentifier(r, i);
          if (this.castNodeTo(u, "V8IntrinsicIdentifier"), this.match(10))
            return u;
        }
        this.unexpected(e);
      }
    }
    parseExprAtom(e) {
      return this.parseV8Intrinsic() || super.parseExprAtom(e);
    }
  };
  const pr = ["minimal", "fsharp", "hack", "smart"], fr = ["^^", "@@", "^", "%", "#"];
  function Ks(y) {
    if (y.has("decorators")) {
      if (y.has("decorators-legacy"))
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      const r = y.get("decorators").decoratorsBeforeExport;
      if (r != null && typeof r != "boolean")
        throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
      const i = y.get("decorators").allowCallParenthesized;
      if (i != null && typeof i != "boolean")
        throw new Error("'allowCallParenthesized' must be a boolean.");
    }
    if (y.has("flow") && y.has("typescript"))
      throw new Error("Cannot combine flow and typescript plugins.");
    if (y.has("placeholders") && y.has("v8intrinsic"))
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    if (y.has("pipelineOperator")) {
      var t;
      const r = y.get("pipelineOperator").proposal;
      if (!pr.includes(r)) {
        const i = pr.map((u) => `"${u}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${i}.`);
      }
      if (r === "hack") {
        if (y.has("placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (y.has("v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const i = y.get("pipelineOperator").topicToken;
        if (!fr.includes(i)) {
          const u = fr.map((T) => `"${T}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${u}.`);
        }
        {
          var e;
          if (i === "#" && ((e = y.get("recordAndTuple")) == null ? void 0 : e.syntaxType) === "hash")
            throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple", y.get("recordAndTuple")])}\`.`);
        }
      } else if (r === "smart" && ((t = y.get("recordAndTuple")) == null ? void 0 : t.syntaxType) === "hash")
        throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple", y.get("recordAndTuple")])}\`.`);
    }
    if (y.has("moduleAttributes")) {
      if (y.has("deprecatedImportAssert") || y.has("importAssertions"))
        throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");
      if (y.get("moduleAttributes").version !== "may-2020")
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }
    if (y.has("importAssertions") && y.has("deprecatedImportAssert"))
      throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");
    if (!y.has("deprecatedImportAssert") && y.has("importAttributes") && y.get("importAttributes").deprecatedAssertSyntax && y.set("deprecatedImportAssert", {}), y.has("recordAndTuple")) {
      const r = y.get("recordAndTuple").syntaxType;
      if (r != null) {
        const i = ["hash", "bar"];
        if (!i.includes(r))
          throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + i.map((u) => `'${u}'`).join(", "));
      }
    }
    if (y.has("asyncDoExpressions") && !y.has("doExpressions")) {
      const r = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw r.missingPlugins = "doExpressions", r;
    }
    if (y.has("optionalChainingAssign") && y.get("optionalChainingAssign").version !== "2023-07")
      throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");
    if (y.has("discardBinding") && y.get("discardBinding").syntaxType !== "void")
      throw new Error("The 'discardBinding' plugin requires a 'syntaxType' option. Currently the only supported value is 'void'.");
  }
  const dr = {
    estree: ve,
    jsx: ps,
    flow: os,
    typescript: _s,
    v8intrinsic: Us,
    placeholders: js
  }, Vs = Object.keys(dr);
  class qs extends Ds {
    checkProto(t, e, r, i) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
        return r;
      const u = t.key;
      return (u.type === "Identifier" ? u.name : u.value) === "__proto__" ? e ? (this.raise(A.RecordNoProto, u), !0) : (r && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = u.loc.start) : this.raise(A.DuplicateProto, u)), !0) : r;
    }
    shouldExitDescending(t, e) {
      return t.type === "ArrowFunctionExpression" && this.offsetToSourcePos(t.start) === e;
    }
    getExpression() {
      if (this.enterInitialScopes(), this.nextToken(), this.match(140))
        throw this.raise(A.ParseExpressionEmptyInput, this.state.startLoc);
      const t = this.parseExpression();
      if (!this.match(140))
        throw this.raise(A.ParseExpressionExpectsEOF, this.state.startLoc, {
          unexpected: this.input.codePointAt(this.state.start)
        });
      return this.finalizeRemainingComments(), t.comments = this.comments, t.errors = this.state.errors, this.optionFlags & 256 && (t.tokens = this.tokens), t;
    }
    parseExpression(t, e) {
      return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
    }
    parseExpressionBase(t) {
      const e = this.state.startLoc, r = this.parseMaybeAssign(t);
      if (this.match(12)) {
        const i = this.startNodeAt(e);
        for (i.expressions = [r]; this.eat(12); )
          i.expressions.push(this.parseMaybeAssign(t));
        return this.toReferencedList(i.expressions), this.finishNode(i, "SequenceExpression");
      }
      return r;
    }
    parseMaybeAssignDisallowIn(t, e) {
      return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
    }
    parseMaybeAssignAllowIn(t, e) {
      return this.allowInAnd(() => this.parseMaybeAssign(t, e));
    }
    setOptionalParametersError(t) {
      t.optionalParametersLoc = this.state.startLoc;
    }
    parseMaybeAssign(t, e) {
      const r = this.state.startLoc, i = this.isContextual(108);
      if (i && this.prodParam.hasYield) {
        this.next();
        let g = this.parseYield(r);
        return e && (g = e.call(this, g, r)), g;
      }
      let u;
      t ? u = !1 : (t = new yt(), u = !0);
      const {
        type: T
      } = this.state;
      (T === 10 || pe(T)) && (this.state.potentialArrowAt = this.state.start);
      let P = this.parseMaybeConditional(t);
      if (e && (P = e.call(this, P, r)), Pt(this.state.type)) {
        const g = this.startNodeAt(r), C = this.state.value;
        if (g.operator = C, this.match(29)) {
          this.toAssignable(P, !0), g.left = P;
          const D = r.index;
          t.doubleProtoLoc != null && t.doubleProtoLoc.index >= D && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= D && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= D && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null), t.voidPatternLoc != null && t.voidPatternLoc.index >= D && (t.voidPatternLoc = null);
        } else
          g.left = P;
        return this.next(), g.right = this.parseMaybeAssign(), this.checkLVal(P, this.finishNode(g, "AssignmentExpression"), void 0, void 0, void 0, void 0, C === "||=" || C === "&&=" || C === "??="), g;
      } else u && this.checkExpressionErrors(t, !0);
      if (i) {
        const {
          type: g
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Ye(g) : Ye(g) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(A.YieldNotInGeneratorFunction, r), this.parseYield(r);
      }
      return P;
    }
    parseMaybeConditional(t) {
      const e = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseExprOps(t);
      return this.shouldExitDescending(i, r) ? i : this.parseConditional(i, e, t);
    }
    parseConditional(t, e, r) {
      if (this.eat(17)) {
        const i = this.startNodeAt(e);
        return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression");
      }
      return t;
    }
    parseMaybeUnaryOrPrivate(t) {
      return this.match(139) ? this.parsePrivateName() : this.parseMaybeUnary(t);
    }
    parseExprOps(t) {
      const e = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseMaybeUnaryOrPrivate(t);
      return this.shouldExitDescending(i, r) ? i : this.parseExprOp(i, e, -1);
    }
    parseExprOp(t, e, r) {
      if (this.isPrivateName(t)) {
        const u = this.getPrivateNameSV(t);
        (r >= He(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(A.PrivateInExpectedIn, t, {
          identifierName: u
        }), this.classScope.usePrivateName(u, t.loc.start);
      }
      const i = this.state.type;
      if (At(i) && (this.prodParam.hasIn || !this.match(58))) {
        let u = He(i);
        if (u > r) {
          if (i === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return t;
            this.checkPipelineAtInfixOperator(t, e);
          }
          const T = this.startNodeAt(e);
          T.left = t, T.operator = this.state.value;
          const P = i === 41 || i === 42, g = i === 40;
          if (g && (u = He(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(A.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          T.right = this.parseExprOpRightExpr(i, u);
          const C = this.finishNode(T, P || g ? "LogicalExpression" : "BinaryExpression"), D = this.state.type;
          if (g && (D === 41 || D === 42) || P && D === 40)
            throw this.raise(A.MixingCoalesceWithLogical, this.state.startLoc);
          return this.parseExprOp(C, e, r);
        }
      }
      return t;
    }
    parseExprOpRightExpr(t, e) {
      const r = this.state.startLoc;
      switch (t) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());
            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
          }
          if (this.getPluginOption("pipelineOperator", "proposal") === "smart")
            return this.withTopicBindingContext(() => {
              if (this.prodParam.hasYield && this.isContextual(108))
                throw this.raise(A.PipeBodyIsTighter, this.state.startLoc);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), r);
            });
        default:
          return this.parseExprOpBaseRightExpr(t, e);
      }
    }
    parseExprOpBaseRightExpr(t, e) {
      const r = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, Ct(t) ? e - 1 : e);
    }
    parseHackPipeBody() {
      var t;
      const {
        startLoc: e
      } = this.state, r = this.parseMaybeAssign();
      return F.has(r.type) && !((t = r.extra) != null && t.parenthesized) && this.raise(A.PipeUnparenthesizedBody, e, {
        type: r.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(A.PipeTopicUnused, e), r;
    }
    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(A.UnexpectedTokenUnaryExponentiation, t.argument);
    }
    parseMaybeUnary(t, e) {
      const r = this.state.startLoc, i = this.isContextual(96);
      if (i && this.recordAwaitIfAllowed()) {
        this.next();
        const g = this.parseAwait(r);
        return e || this.checkExponentialAfterUnary(g), g;
      }
      const u = this.match(34), T = this.startNode();
      if (vt(this.state.type)) {
        T.operator = this.state.value, T.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        const g = this.match(89);
        if (this.next(), T.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && g) {
          const C = T.argument;
          C.type === "Identifier" ? this.raise(A.StrictDelete, T) : this.hasPropertyAsPrivateName(C) && this.raise(A.DeletePrivateField, T);
        }
        if (!u)
          return e || this.checkExponentialAfterUnary(T), this.finishNode(T, "UnaryExpression");
      }
      const P = this.parseUpdate(T, u, t);
      if (i) {
        const {
          type: g
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Ye(g) : Ye(g) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(A.AwaitNotInAsyncContext, r), this.parseAwait(r);
      }
      return P;
    }
    parseUpdate(t, e, r) {
      if (e) {
        const T = t;
        return this.checkLVal(T.argument, this.finishNode(T, "UpdateExpression")), t;
      }
      const i = this.state.startLoc;
      let u = this.parseExprSubscripts(r);
      if (this.checkExpressionErrors(r, !1)) return u;
      for (; gt(this.state.type) && !this.canInsertSemicolon(); ) {
        const T = this.startNodeAt(i);
        T.operator = this.state.value, T.prefix = !1, T.argument = u, this.next(), this.checkLVal(u, u = this.finishNode(T, "UpdateExpression"));
      }
      return u;
    }
    parseExprSubscripts(t) {
      const e = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseExprAtom(t);
      return this.shouldExitDescending(i, r) ? i : this.parseSubscripts(i, e);
    }
    parseSubscripts(t, e, r) {
      const i = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(t),
        stop: !1
      };
      do
        t = this.parseSubscript(t, e, r, i), i.maybeAsyncArrow = !1;
      while (!i.stop);
      return t;
    }
    parseSubscript(t, e, r, i) {
      const {
        type: u
      } = this.state;
      if (!r && u === 15)
        return this.parseBind(t, e, r, i);
      if (Ge(u))
        return this.parseTaggedTemplateExpression(t, e, i);
      let T = !1;
      if (u === 18) {
        if (r && (this.raise(A.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40))
          return this.stopParseSubscript(t, i);
        i.optionalChainMember = T = !0, this.next();
      }
      if (!r && this.match(10))
        return this.parseCoverCallAndAsyncArrowHead(t, e, i, T);
      {
        const P = this.eat(0);
        return P || T || this.eat(16) ? this.parseMember(t, e, i, P, T) : this.stopParseSubscript(t, i);
      }
    }
    stopParseSubscript(t, e) {
      return e.stop = !0, t;
    }
    parseMember(t, e, r, i, u) {
      const T = this.startNodeAt(e);
      return T.object = t, T.computed = i, i ? (T.property = this.parseExpression(), this.expect(3)) : this.match(139) ? (t.type === "Super" && this.raise(A.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), T.property = this.parsePrivateName()) : T.property = this.parseIdentifier(!0), r.optionalChainMember ? (T.optional = u, this.finishNode(T, "OptionalMemberExpression")) : this.finishNode(T, "MemberExpression");
    }
    parseBind(t, e, r, i) {
      const u = this.startNodeAt(e);
      return u.object = t, this.next(), u.callee = this.parseNoCallExpr(), i.stop = !0, this.parseSubscripts(this.finishNode(u, "BindExpression"), e, r);
    }
    parseCoverCallAndAsyncArrowHead(t, e, r, i) {
      const u = this.state.maybeInArrowParameters;
      let T = null;
      this.state.maybeInArrowParameters = !0, this.next();
      const P = this.startNodeAt(e);
      P.callee = t;
      const {
        maybeAsyncArrow: g,
        optionalChainMember: C
      } = r;
      g && (this.expressionScope.enter(Cs()), T = new yt()), C && (P.optional = i), i ? P.arguments = this.parseCallExpressionArguments() : P.arguments = this.parseCallExpressionArguments(t.type !== "Super", P, T);
      let D = this.finishCallExpression(P, C);
      return g && this.shouldParseAsyncArrow() && !i ? (r.stop = !0, this.checkDestructuringPrivate(T), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), D = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), D)) : (g && (this.checkExpressionErrors(T, !0), this.expressionScope.exit()), this.toReferencedArguments(D)), this.state.maybeInArrowParameters = u, D;
    }
    toReferencedArguments(t, e) {
      this.toReferencedListDeep(t.arguments, e);
    }
    parseTaggedTemplateExpression(t, e, r) {
      const i = this.startNodeAt(e);
      return i.tag = t, i.quasi = this.parseTemplate(!0), r.optionalChainMember && this.raise(A.OptionalChainingNoTemplate, e), this.finishNode(i, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.offsetToSourcePos(t.start) === this.state.potentialArrowAt;
    }
    finishCallExpression(t, e) {
      if (t.callee.type === "Import")
        if (t.arguments.length === 0 || t.arguments.length > 2)
          this.raise(A.ImportCallArity, t);
        else
          for (const r of t.arguments)
            r.type === "SpreadElement" && this.raise(A.ImportCallSpreadArgument, r);
      return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
    }
    parseCallExpressionArguments(t, e, r) {
      const i = [];
      let u = !0;
      const T = this.state.inFSharpPipelineDirectBody;
      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(11); ) {
        if (u)
          u = !1;
        else if (this.expect(12), this.match(11)) {
          e && this.addTrailingCommaExtraToNode(e), this.next();
          break;
        }
        i.push(this.parseExprListItem(11, !1, r, t));
      }
      return this.state.inFSharpPipelineDirectBody = T, i;
    }
    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }
    parseAsyncArrowFromCallExpression(t, e) {
      var r;
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (r = e.extra) == null ? void 0 : r.trailingCommaLoc), e.innerComments && at(t, e.innerComments), e.callee.trailingComments && at(t, e.callee.trailingComments), t;
    }
    parseNoCallExpr() {
      const t = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), t, !0);
    }
    parseExprAtom(t) {
      let e, r = null;
      const {
        type: i
      } = this.state;
      switch (i) {
        case 79:
          return this.parseSuper();
        case 83:
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaPropertyOrPhaseCall(e) : this.match(10) ? this.optionFlags & 512 ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(A.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
        case 78:
          return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
        case 90:
          return this.parseDo(this.startNode(), !1);
        case 56:
        case 31:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
        case 135:
          return this.parseNumericLiteral(this.state.value);
        case 136:
          return this.parseBigIntLiteral(this.state.value);
        case 134:
          return this.parseStringLiteral(this.state.value);
        case 84:
          return this.parseNullLiteral();
        case 85:
          return this.parseBooleanLiteral(!0);
        case 86:
          return this.parseBooleanLiteral(!1);
        case 10: {
          const u = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(u);
        }
        case 0:
          return this.parseArrayLike(3, !1, t);
        case 5:
          return this.parseObjectLike(8, !1, !1, t);
        case 68:
          return this.parseFunctionOrFunctionSent();
        case 26:
          r = this.parseDecorators();
        case 80:
          return this.parseClass(this.maybeTakeDecorators(r, this.startNode()), !1);
        case 77:
          return this.parseNewOrNewTarget();
        case 25:
        case 24:
          return this.parseTemplate(!1);
        case 15: {
          e = this.startNode(), this.next(), e.object = null;
          const u = e.callee = this.parseNoCallExpr();
          if (u.type === "MemberExpression")
            return this.finishNode(e, "BindExpression");
          throw this.raise(A.UnsupportedBind, u);
        }
        case 139:
          return this.raise(A.PrivateInExpectedIn, this.state.startLoc, {
            identifierName: this.state.value
          }), this.parsePrivateName();
        case 33:
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        case 32:
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        case 37:
        case 38:
          return this.parseTopicReference("hack");
        case 44:
        case 54:
        case 27: {
          const u = this.getPluginOption("pipelineOperator", "proposal");
          if (u)
            return this.parseTopicReference(u);
          throw this.unexpected();
        }
        case 47: {
          const u = this.input.codePointAt(this.nextTokenStart());
          throw Fe(u) || u === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
        }
        default:
          {
            if (i === 137)
              return this.parseDecimalLiteral(this.state.value);
            if (i === 2 || i === 1)
              return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !0);
            if (i === 6 || i === 7)
              return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
          }
          if (pe(i)) {
            if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123)
              return this.parseModuleExpression();
            const u = this.state.potentialArrowAt === this.state.start, T = this.state.containsEsc, P = this.parseIdentifier();
            if (!T && P.name === "async" && !this.canInsertSemicolon()) {
              const {
                type: g
              } = this.state;
              if (g === 68)
                return this.resetPreviousNodeTrailingComments(P), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(P));
              if (pe(g))
                return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(P)) : P;
              if (g === 90)
                return this.resetPreviousNodeTrailingComments(P), this.parseDo(this.startNodeAtNode(P), !0);
            }
            return u && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(P), [P], !1)) : P;
          } else
            throw this.unexpected();
      }
    }
    parseTopicReferenceThenEqualsSign(t, e) {
      const r = this.getPluginOption("pipelineOperator", "proposal");
      if (r)
        return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = o(this.state.endLoc, -1), this.parseTopicReference(r);
      throw this.unexpected();
    }
    parseTopicReference(t) {
      const e = this.startNode(), r = this.state.startLoc, i = this.state.type;
      return this.next(), this.finishTopicReference(e, r, t, i);
    }
    finishTopicReference(t, e, r, i) {
      if (this.testTopicReferenceConfiguration(r, e, i))
        return r === "hack" ? (this.topicReferenceIsAllowedInCurrentContext() || this.raise(A.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(t, "TopicReference")) : (this.topicReferenceIsAllowedInCurrentContext() || this.raise(A.PrimaryTopicNotAllowed, e), this.registerTopicReference(), this.finishNode(t, "PipelinePrimaryTopicReference"));
      throw this.raise(A.PipeTopicUnconfiguredToken, e, {
        token: Be(i)
      });
    }
    testTopicReferenceConfiguration(t, e, r) {
      switch (t) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: Be(r)
          }]);
        case "smart":
          return r === 27;
        default:
          throw this.raise(A.PipeTopicRequiresHackPipes, e);
      }
    }
    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(ft(!0, this.prodParam.hasYield));
      const e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(A.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(t, e, !0);
    }
    parseDo(t, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
      const r = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(2), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = r, this.finishNode(t, "DoExpression");
    }
    parseSuper() {
      const t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper ? this.optionFlags & 16 || this.raise(A.SuperNotAllowed, t) : this.scope.allowSuper || this.optionFlags & 16 || this.raise(A.UnexpectedSuper, t), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(A.UnsupportedSuper, t), this.finishNode(t, "Super");
    }
    parsePrivateName() {
      const t = this.startNode(), e = this.startNodeAt(o(this.state.startLoc, 1)), r = this.state.value;
      return this.next(), t.id = this.createIdentifier(e, r), this.finishNode(t, "PrivateName");
    }
    parseFunctionOrFunctionSent() {
      const t = this.startNode();
      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(t), "function");
        return this.next(), this.match(103) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
      }
      return this.parseFunction(t);
    }
    parseMetaProperty(t, e, r) {
      t.meta = e;
      const i = this.state.containsEsc;
      return t.property = this.parseIdentifier(!0), (t.property.name !== r || i) && this.raise(A.UnsupportedMetaProperty, t.property, {
        target: e.name,
        onlyValidPropertyName: r
      }), this.finishNode(t, "MetaProperty");
    }
    parseImportMetaPropertyOrPhaseCall(t) {
      if (this.next(), this.isContextual(105) || this.isContextual(97)) {
        const e = this.isContextual(105);
        return this.expectPlugin(e ? "sourcePhaseImports" : "deferredImportEvaluation"), this.next(), t.phase = e ? "source" : "defer", this.parseImportCall(t);
      } else {
        const e = this.createIdentifierAt(this.startNodeAtNode(t), "import", this.state.lastTokStartLoc);
        return this.isContextual(101) && (this.inModule || this.raise(A.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta");
      }
    }
    parseLiteralAtNode(t, e, r) {
      return this.addExtra(r, "rawValue", t), this.addExtra(r, "raw", this.input.slice(this.offsetToSourcePos(r.start), this.state.end)), r.value = t, this.next(), this.finishNode(r, e);
    }
    parseLiteral(t, e) {
      const r = this.startNode();
      return this.parseLiteralAtNode(t, e, r);
    }
    parseStringLiteral(t) {
      return this.parseLiteral(t, "StringLiteral");
    }
    parseNumericLiteral(t) {
      return this.parseLiteral(t, "NumericLiteral");
    }
    parseBigIntLiteral(t) {
      return this.parseLiteral(t, "BigIntLiteral");
    }
    parseDecimalLiteral(t) {
      return this.parseLiteral(t, "DecimalLiteral");
    }
    parseRegExpLiteral(t) {
      const e = this.startNode();
      return this.addExtra(e, "raw", this.input.slice(this.offsetToSourcePos(e.start), this.state.end)), e.pattern = t.pattern, e.flags = t.flags, this.next(), this.finishNode(e, "RegExpLiteral");
    }
    parseBooleanLiteral(t) {
      const e = this.startNode();
      return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
    }
    parseNullLiteral() {
      const t = this.startNode();
      return this.next(), this.finishNode(t, "NullLiteral");
    }
    parseParenAndDistinguishExpression(t) {
      const e = this.state.startLoc;
      let r;
      this.next(), this.expressionScope.enter(Ns());
      const i = this.state.maybeInArrowParameters, u = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      const T = this.state.startLoc, P = [], g = new yt();
      let C = !0, D, B;
      for (; !this.match(11); ) {
        if (C)
          C = !1;
        else if (this.expect(12, g.optionalParametersLoc === null ? null : g.optionalParametersLoc), this.match(11)) {
          B = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          const G = this.state.startLoc;
          if (D = this.state.startLoc, P.push(this.parseParenItem(this.parseRestBinding(), G)), !this.checkCommaAfterRest(41))
            break;
        } else
          P.push(this.parseMaybeAssignAllowInOrVoidPattern(11, g, this.parseParenItem));
      }
      const J = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = u;
      let X = this.startNodeAt(e);
      return t && this.shouldParseArrow(P) && (X = this.parseArrow(X)) ? (this.checkDestructuringPrivate(g), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(X, P, !1), X) : (this.expressionScope.exit(), P.length || this.unexpected(this.state.lastTokStartLoc), B && this.unexpected(B), D && this.unexpected(D), this.checkExpressionErrors(g, !0), this.toReferencedListDeep(P, !0), P.length > 1 ? (r = this.startNodeAt(T), r.expressions = P, this.finishNode(r, "SequenceExpression"), this.resetEndLocation(r, J)) : r = P[0], this.wrapParenthesis(e, r));
    }
    wrapParenthesis(t, e) {
      if (!(this.optionFlags & 1024))
        return this.addExtra(e, "parenthesized", !0), this.addExtra(e, "parenStart", t.index), this.takeSurroundingComments(e, t.index, this.state.lastTokEndLoc.index), e;
      const r = this.startNodeAt(t);
      return r.expression = e, this.finishNode(r, "ParenthesizedExpression");
    }
    shouldParseArrow(t) {
      return !this.canInsertSemicolon();
    }
    parseArrow(t) {
      if (this.eat(19))
        return t;
    }
    parseParenItem(t, e) {
      return t;
    }
    parseNewOrNewTarget() {
      const t = this.startNode();
      if (this.next(), this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(t), "new");
        this.next();
        const r = this.parseMetaProperty(t, e, "target");
        return this.scope.allowNewTarget || this.raise(A.UnexpectedNewTarget, r), r;
      }
      return this.parseNew(t);
    }
    parseNew(t) {
      if (this.parseNewCallee(t), this.eat(10)) {
        const e = this.parseExprList(11);
        this.toReferencedList(e), t.arguments = e;
      } else
        t.arguments = [];
      return this.finishNode(t, "NewExpression");
    }
    parseNewCallee(t) {
      const e = this.match(83), r = this.parseNoCallExpr();
      t.callee = r, e && (r.type === "Import" || r.type === "ImportExpression") && this.raise(A.ImportCallNotNewExpression, r);
    }
    parseTemplateElement(t) {
      const {
        start: e,
        startLoc: r,
        end: i,
        value: u
      } = this.state, T = e + 1, P = this.startNodeAt(o(r, 1));
      u === null && (t || this.raise(A.InvalidEscapeSequenceTemplate, o(this.state.firstInvalidTemplateEscapePos, 1)));
      const g = this.match(24), C = g ? -1 : -2, D = i + C;
      P.value = {
        raw: this.input.slice(T, D).replace(/\r\n?/g, `
`),
        cooked: u === null ? null : u.slice(1, C)
      }, P.tail = g, this.next();
      const B = this.finishNode(P, "TemplateElement");
      return this.resetEndLocation(B, o(this.state.lastTokEndLoc, C)), B;
    }
    parseTemplate(t) {
      const e = this.startNode();
      let r = this.parseTemplateElement(t);
      const i = [r], u = [];
      for (; !r.tail; )
        u.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), i.push(r = this.parseTemplateElement(t));
      return e.expressions = u, e.quasis = i, this.finishNode(e, "TemplateLiteral");
    }
    parseTemplateSubstitution() {
      return this.parseExpression();
    }
    parseObjectLike(t, e, r, i) {
      r && this.expectPlugin("recordAndTuple");
      const u = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let T = !1, P = !0;
      const g = this.startNode();
      for (g.properties = [], this.next(); !this.match(t); ) {
        if (P)
          P = !1;
        else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(g);
          break;
        }
        let D;
        e ? D = this.parseBindingProperty() : (D = this.parsePropertyDefinition(i), T = this.checkProto(D, r, T, i)), r && !this.isObjectProperty(D) && D.type !== "SpreadElement" && this.raise(A.InvalidRecordProperty, D), D.shorthand && this.addExtra(D, "shorthand", !0), g.properties.push(D);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = u;
      let C = "ObjectExpression";
      return e ? C = "ObjectPattern" : r && (C = "RecordExpression"), this.finishNode(g, C);
    }
    addTrailingCommaExtraToNode(t) {
      this.addExtra(t, "trailingComma", this.state.lastTokStartLoc.index), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
    }
    maybeAsyncOrAccessorProp(t) {
      return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }
    parsePropertyDefinition(t) {
      let e = [];
      if (this.match(26))
        for (this.hasPlugin("decorators") && this.raise(A.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26); )
          e.push(this.parseDecorator());
      const r = this.startNode();
      let i = !1, u = !1, T;
      if (this.match(21))
        return e.length && this.unexpected(), this.parseSpread();
      e.length && (r.decorators = e, e = []), r.method = !1, t && (T = this.state.startLoc);
      let P = this.eat(55);
      this.parsePropertyNamePrefixOperator(r);
      const g = this.state.containsEsc;
      if (this.parsePropertyName(r, t), !P && !g && this.maybeAsyncOrAccessorProp(r)) {
        const {
          key: C
        } = r, D = C.name;
        D === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(C), P = this.eat(55), this.parsePropertyName(r)), (D === "get" || D === "set") && (u = !0, this.resetPreviousNodeTrailingComments(C), r.kind = D, this.match(55) && (P = !0, this.raise(A.AccessorIsGenerator, this.state.curPosition(), {
          kind: D
        }), this.next()), this.parsePropertyName(r));
      }
      return this.parseObjPropValue(r, T, P, i, !1, u, t);
    }
    getGetterSetterExpectedParamCount(t) {
      return t.kind === "get" ? 0 : 1;
    }
    getObjectOrClassMethodParams(t) {
      return t.params;
    }
    checkGetterSetterParams(t) {
      var e;
      const r = this.getGetterSetterExpectedParamCount(t), i = this.getObjectOrClassMethodParams(t);
      i.length !== r && this.raise(t.kind === "get" ? A.BadGetterArity : A.BadSetterArity, t), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(A.BadSetterRestParameter, t);
    }
    parseObjectMethod(t, e, r, i, u) {
      if (u) {
        const T = this.parseMethod(t, e, !1, !1, !1, "ObjectMethod");
        return this.checkGetterSetterParams(T), T;
      }
      if (r || e || this.match(10))
        return i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, r, !1, !1, "ObjectMethod");
    }
    parseObjectProperty(t, e, r, i) {
      if (t.shorthand = !1, this.eat(14))
        return t.value = r ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowInOrVoidPattern(8, i), this.finishObjectProperty(t);
      if (!t.computed && t.key.type === "Identifier") {
        if (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), r)
          t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        else if (this.match(29)) {
          const u = this.state.startLoc;
          i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = u) : this.raise(A.InvalidCoverInitializedName, u), t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        } else
          t.value = this.cloneIdentifier(t.key);
        return t.shorthand = !0, this.finishObjectProperty(t);
      }
    }
    finishObjectProperty(t) {
      return this.finishNode(t, "ObjectProperty");
    }
    parseObjPropValue(t, e, r, i, u, T, P) {
      const g = this.parseObjectMethod(t, r, i, u, T) || this.parseObjectProperty(t, e, u, P);
      return g || this.unexpected(), g;
    }
    parsePropertyName(t, e) {
      if (this.eat(0))
        t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
      else {
        const {
          type: r,
          value: i
        } = this.state;
        let u;
        if (Le(r))
          u = this.parseIdentifier(!0);
        else
          switch (r) {
            case 135:
              u = this.parseNumericLiteral(i);
              break;
            case 134:
              u = this.parseStringLiteral(i);
              break;
            case 136:
              u = this.parseBigIntLiteral(i);
              break;
            case 139: {
              const T = this.state.startLoc;
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = T) : this.raise(A.UnexpectedPrivateField, T), u = this.parsePrivateName();
              break;
            }
            default:
              if (r === 137) {
                u = this.parseDecimalLiteral(i);
                break;
              }
              this.unexpected();
          }
        t.key = u, r !== 139 && (t.computed = !1);
      }
    }
    initFunction(t, e) {
      t.id = null, t.generator = !1, t.async = e;
    }
    parseMethod(t, e, r, i, u, T, P = !1) {
      this.initFunction(t, r), t.generator = e, this.scope.enter(530 | (P ? 576 : 0) | (u ? 32 : 0)), this.prodParam.enter(ft(r, t.generator)), this.parseFunctionParams(t, i);
      const g = this.parseFunctionBodyAndFinish(t, T, !0);
      return this.prodParam.exit(), this.scope.exit(), g;
    }
    parseArrayLike(t, e, r) {
      e && this.expectPlugin("recordAndTuple");
      const i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      const u = this.startNode();
      return this.next(), u.elements = this.parseExprList(t, !e, r, u), this.state.inFSharpPipelineDirectBody = i, this.finishNode(u, e ? "TupleExpression" : "ArrayExpression");
    }
    parseArrowExpression(t, e, r, i) {
      this.scope.enter(518);
      let u = ft(r, !1);
      !this.match(5) && this.prodParam.hasIn && (u |= 8), this.prodParam.enter(u), this.initFunction(t, r);
      const T = this.state.maybeInArrowParameters;
      return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = T, this.finishNode(t, "ArrowFunctionExpression");
    }
    setArrowFunctionParameters(t, e, r) {
      this.toAssignableList(e, r, !1), t.params = e;
    }
    parseFunctionBodyAndFinish(t, e, r = !1) {
      return this.parseFunctionBody(t, !1, r), this.finishNode(t, e);
    }
    parseFunctionBody(t, e, r = !1) {
      const i = e && !this.match(5);
      if (this.expressionScope.enter(ar()), i)
        t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
      else {
        const u = this.state.strict, T = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), t.body = this.parseBlock(!0, !1, (P) => {
          const g = !this.isSimpleParamList(t.params);
          P && g && this.raise(A.IllegalLanguageModeDirective, (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t);
          const C = !u && this.state.strict;
          this.checkParams(t, !this.state.strict && !e && !r && !g, e, C), this.state.strict && t.id && this.checkIdentifier(t.id, 65, C);
        }), this.prodParam.exit(), this.state.labels = T;
      }
      this.expressionScope.exit();
    }
    isSimpleParameter(t) {
      return t.type === "Identifier";
    }
    isSimpleParamList(t) {
      for (let e = 0, r = t.length; e < r; e++)
        if (!this.isSimpleParameter(t[e])) return !1;
      return !0;
    }
    checkParams(t, e, r, i = !0) {
      const u = !e && /* @__PURE__ */ new Set(), T = {
        type: "FormalParameters"
      };
      for (const P of t.params)
        this.checkLVal(P, T, 5, u, i);
    }
    parseExprList(t, e, r, i) {
      const u = [];
      let T = !0;
      for (; !this.eat(t); ) {
        if (T)
          T = !1;
        else if (this.expect(12), this.match(t)) {
          i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        u.push(this.parseExprListItem(t, e, r));
      }
      return u;
    }
    parseExprListItem(t, e, r, i) {
      let u;
      if (this.match(12))
        e || this.raise(A.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        }), u = null;
      else if (this.match(21)) {
        const T = this.state.startLoc;
        u = this.parseParenItem(this.parseSpread(r), T);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), i || this.raise(A.UnexpectedArgumentPlaceholder, this.state.startLoc);
        const T = this.startNode();
        this.next(), u = this.finishNode(T, "ArgumentPlaceholder");
      } else
        u = this.parseMaybeAssignAllowInOrVoidPattern(t, r, this.parseParenItem);
      return u;
    }
    parseIdentifier(t) {
      const e = this.startNode(), r = this.parseIdentifierName(t);
      return this.createIdentifier(e, r);
    }
    createIdentifier(t, e) {
      return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
    }
    createIdentifierAt(t, e, r) {
      return t.name = e, t.loc.identifierName = e, this.finishNodeAt(t, "Identifier", r);
    }
    parseIdentifierName(t) {
      let e;
      const {
        startLoc: r,
        type: i
      } = this.state;
      Le(i) ? e = this.state.value : this.unexpected();
      const u = xt(i);
      return t ? u && this.replaceToken(132) : this.checkReservedWord(e, r, u, !1), this.next(), e;
    }
    checkReservedWord(t, e, r, i) {
      if (t.length > 10 || !Zr(t))
        return;
      if (r && Hr(t)) {
        this.raise(A.UnexpectedKeyword, e, {
          keyword: t
        });
        return;
      }
      if ((this.state.strict ? i ? Ht : Wt : $t)(t, this.inModule)) {
        this.raise(A.UnexpectedReservedWord, e, {
          reservedWord: t
        });
        return;
      } else if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(A.YieldBindingIdentifier, e);
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(A.AwaitBindingIdentifier, e);
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(A.AwaitBindingIdentifierInStaticBlock, e);
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError(e);
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(A.ArgumentsInClass, e);
        return;
      }
    }
    recordAwaitIfAllowed() {
      const t = this.prodParam.hasAwait;
      return t && !this.scope.inFunction && (this.state.hasTopLevelAwait = !0), t;
    }
    parseAwait(t) {
      const e = this.startNodeAt(t);
      return this.expressionScope.recordParameterInitializerError(A.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(A.ObsoleteAwaitStar, e), !this.scope.inFunction && !(this.optionFlags & 1) && (this.isAmbiguousPrefixOrIdentifier() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
    }
    isAmbiguousPrefixOrIdentifier() {
      if (this.hasPrecedingLineBreak()) return !0;
      const {
        type: t
      } = this.state;
      return t === 53 || t === 10 || t === 0 || Ge(t) || t === 102 && !this.state.containsEsc || t === 138 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }
    parseYield(t) {
      const e = this.startNodeAt(t);
      this.expressionScope.recordParameterInitializerError(A.YieldInParameter, e);
      let r = !1, i = null;
      if (!this.hasPrecedingLineBreak())
        switch (r = this.eat(55), this.state.type) {
          case 13:
          case 140:
          case 8:
          case 11:
          case 3:
          case 9:
          case 14:
          case 12:
            if (!r) break;
          default:
            i = this.parseMaybeAssign();
        }
      return e.delegate = r, e.argument = i, this.finishNode(e, "YieldExpression");
    }
    parseImportCall(t) {
      if (this.next(), t.source = this.parseMaybeAssignAllowIn(), t.options = null, this.eat(12)) {
        if (this.match(11))
          this.addTrailingCommaExtraToNode(t.source);
        else if (t.options = this.parseMaybeAssignAllowIn(), this.eat(12) && (this.addTrailingCommaExtraToNode(t.options), !this.match(11))) {
          do
            this.parseMaybeAssignAllowIn();
          while (this.eat(12) && !this.match(11));
          this.raise(A.ImportCallArity, t);
        }
      }
      return this.expect(11), this.finishNode(t, "ImportExpression");
    }
    checkPipelineAtInfixOperator(t, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && t.type === "SequenceExpression" && this.raise(A.PipelineHeadSequenceExpression, e);
    }
    parseSmartPipelineBodyInStyle(t, e) {
      if (this.isSimpleReference(t)) {
        const r = this.startNodeAt(e);
        return r.callee = t, this.finishNode(r, "PipelineBareFunction");
      } else {
        const r = this.startNodeAt(e);
        return this.checkSmartPipeTopicBodyEarlyErrors(e), r.expression = t, this.finishNode(r, "PipelineTopicExpression");
      }
    }
    isSimpleReference(t) {
      switch (t.type) {
        case "MemberExpression":
          return !t.computed && this.isSimpleReference(t.object);
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    }
    checkSmartPipeTopicBodyEarlyErrors(t) {
      if (this.match(19))
        throw this.raise(A.PipelineBodyNoArrow, this.state.startLoc);
      this.topicReferenceWasUsedInCurrentContext() || this.raise(A.PipelineTopicUnused, t);
    }
    withTopicBindingContext(t) {
      const e = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };
      try {
        return t();
      } finally {
        this.state.topicContext = e;
      }
    }
    withSmartMixTopicForbiddingContext(t) {
      if (this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }])) {
        const e = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };
        try {
          return t();
        } finally {
          this.state.topicContext = e;
        }
      } else
        return t();
    }
    withSoloAwaitPermittingContext(t) {
      const e = this.state.soloAwait;
      this.state.soloAwait = !0;
      try {
        return t();
      } finally {
        this.state.soloAwait = e;
      }
    }
    allowInAnd(t) {
      const e = this.prodParam.currentFlags();
      if (8 & ~e) {
        this.prodParam.enter(e | 8);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    disallowInAnd(t) {
      const e = this.prodParam.currentFlags();
      if (8 & e) {
        this.prodParam.enter(e & -9);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
    topicReferenceWasUsedInCurrentContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
    parseFSharpPipelineBody(t) {
      const e = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      const r = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      const i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, t);
      return this.state.inFSharpPipelineDirectBody = r, i;
    }
    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      const t = this.startNode();
      this.next(), this.match(5) || this.unexpected(null, 5);
      const e = this.startNodeAt(this.state.endLoc);
      this.next();
      const r = this.initializeScopes(!0);
      this.enterInitialScopes();
      try {
        t.body = this.parseProgram(e, 8, "module");
      } finally {
        r();
      }
      return this.finishNode(t, "ModuleExpression");
    }
    parseVoidPattern(t) {
      this.expectPlugin("discardBinding");
      const e = this.startNode();
      return t != null && (t.voidPatternLoc = this.state.startLoc), this.next(), this.finishNode(e, "VoidPattern");
    }
    parseMaybeAssignAllowInOrVoidPattern(t, e, r) {
      if (e != null && this.match(88)) {
        const i = this.lookaheadCharCode();
        if (i === 44 || i === (t === 3 ? 93 : t === 8 ? 125 : 41) || i === 61)
          return this.parseMaybeDefault(this.state.startLoc, this.parseVoidPattern(e));
      }
      return this.parseMaybeAssignAllowIn(e, r);
    }
    parsePropertyNamePrefixOperator(t) {
    }
  }
  const Vt = {
    kind: 1
  }, Js = {
    kind: 2
  }, Ys = /[\uD800-\uDFFF]/u, qt = /in(?:stanceof)?/y;
  function Xs(y, t, e) {
    for (let r = 0; r < y.length; r++) {
      const i = y[r], {
        type: u
      } = i;
      if (typeof u == "number") {
        {
          if (u === 139) {
            const {
              loc: T,
              start: P,
              value: g,
              end: C
            } = i, D = P + 1, B = o(T.start, 1);
            y.splice(r, 1, new Ve({
              type: _e(27),
              value: "#",
              start: P,
              end: D,
              startLoc: T.start,
              endLoc: B
            }), new Ve({
              type: _e(132),
              value: g,
              start: D,
              end: C,
              startLoc: B,
              endLoc: T.end
            })), r++;
            continue;
          }
          if (Ge(u)) {
            const {
              loc: T,
              start: P,
              value: g,
              end: C
            } = i, D = P + 1, B = o(T.start, 1);
            let J;
            t.charCodeAt(P - e) === 96 ? J = new Ve({
              type: _e(22),
              value: "`",
              start: P,
              end: D,
              startLoc: T.start,
              endLoc: B
            }) : J = new Ve({
              type: _e(8),
              value: "}",
              start: P,
              end: D,
              startLoc: T.start,
              endLoc: B
            });
            let X, G, de, Pe;
            u === 24 ? (G = C - 1, de = o(T.end, -1), X = g === null ? null : g.slice(1, -1), Pe = new Ve({
              type: _e(22),
              value: "`",
              start: G,
              end: C,
              startLoc: de,
              endLoc: T.end
            })) : (G = C - 2, de = o(T.end, -2), X = g === null ? null : g.slice(1, -2), Pe = new Ve({
              type: _e(23),
              value: "${",
              start: G,
              end: C,
              startLoc: de,
              endLoc: T.end
            })), y.splice(r, 1, J, new Ve({
              type: _e(20),
              value: X,
              start: D,
              end: G,
              startLoc: B,
              endLoc: de
            }), Pe), r += 2;
            continue;
          }
        }
        i.type = _e(u);
      }
    }
    return y;
  }
  class $s extends qs {
    parseTopLevel(t, e) {
      return t.program = this.parseProgram(e, 140, this.options.sourceType === "module" ? "module" : "script"), t.comments = this.comments, this.optionFlags & 256 && (t.tokens = Xs(this.tokens, this.input, this.startIndex)), this.finishNode(t, "File");
    }
    parseProgram(t, e, r) {
      if (t.sourceType = r, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule) {
        if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0)
          for (const [u, T] of Array.from(this.scope.undefinedExports))
            this.raise(A.ModuleExportUndefined, T, {
              localName: u
            });
        this.addExtra(t, "topLevelAwait", this.state.hasTopLevelAwait);
      }
      let i;
      return e === 140 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", o(this.state.startLoc, -1)), i;
    }
    stmtToDirective(t) {
      const e = this.castNodeTo(t, "Directive"), r = this.castNodeTo(t.expression, "DirectiveLiteral"), i = r.value, u = this.input.slice(this.offsetToSourcePos(r.start), this.offsetToSourcePos(r.end)), T = r.value = u.slice(1, -1);
      return this.addExtra(r, "raw", u), this.addExtra(r, "rawValue", T), this.addExtra(r, "expressionValue", i), e.value = r, delete t.expression, e;
    }
    parseInterpreterDirective() {
      if (!this.match(28))
        return null;
      const t = this.startNode();
      return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
    }
    isLet() {
      return this.isContextual(100) ? this.hasFollowingBindingAtom() : !1;
    }
    isUsing() {
      return this.isContextual(107) ? this.nextTokenIsIdentifierOnSameLine() : !1;
    }
    isForUsing() {
      if (!this.isContextual(107))
        return !1;
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      if (this.isUnparsedContextual(t, "of")) {
        const r = this.lookaheadCharCodeSince(t + 2);
        if (r !== 61 && r !== 58 && r !== 59)
          return !1;
      }
      return !!(this.chStartsBindingIdentifier(e, t) || this.isUnparsedContextual(t, "void"));
    }
    nextTokenIsIdentifierOnSameLine() {
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      return this.chStartsBindingIdentifier(e, t);
    }
    isAwaitUsing() {
      if (!this.isContextual(96))
        return !1;
      let t = this.nextTokenInLineStart();
      if (this.isUnparsedContextual(t, "using")) {
        t = this.nextTokenInLineStartSince(t + 5);
        const e = this.codePointAtPos(t);
        if (this.chStartsBindingIdentifier(e, t))
          return !0;
      }
      return !1;
    }
    chStartsBindingIdentifier(t, e) {
      if (Fe(t)) {
        if (qt.lastIndex = e, qt.test(this.input)) {
          const r = this.codePointAtPos(qt.lastIndex);
          if (!Xe(r) && r !== 92)
            return !1;
        }
        return !0;
      } else return t === 92;
    }
    chStartsBindingPattern(t) {
      return t === 91 || t === 123;
    }
    hasFollowingBindingAtom() {
      const t = this.nextTokenStart(), e = this.codePointAtPos(t);
      return this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, t);
    }
    hasInLineFollowingBindingIdentifierOrBrace() {
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      return e === 123 || this.chStartsBindingIdentifier(e, t);
    }
    allowsUsing() {
      return (this.scope.inModule || !this.scope.inTopLevel) && !this.scope.inBareCaseStatement;
    }
    parseModuleItem() {
      return this.parseStatementLike(15);
    }
    parseStatementListItem() {
      return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
    }
    parseStatementOrSloppyAnnexBFunctionDeclaration(t = !1) {
      let e = 0;
      return this.options.annexB && !this.state.strict && (e |= 4, t && (e |= 8)), this.parseStatementLike(e);
    }
    parseStatement() {
      return this.parseStatementLike(0);
    }
    parseStatementLike(t) {
      let e = null;
      return this.match(26) && (e = this.parseDecorators(!0)), this.parseStatementContent(t, e);
    }
    parseStatementContent(t, e) {
      const r = this.state.type, i = this.startNode(), u = !!(t & 2), T = !!(t & 4), P = t & 1;
      switch (r) {
        case 60:
          return this.parseBreakContinueStatement(i, !0);
        case 63:
          return this.parseBreakContinueStatement(i, !1);
        case 64:
          return this.parseDebuggerStatement(i);
        case 90:
          return this.parseDoWhileStatement(i);
        case 91:
          return this.parseForStatement(i);
        case 68:
          if (this.lookaheadCharCode() === 46) break;
          return T || this.raise(this.state.strict ? A.StrictFunction : this.options.annexB ? A.SloppyFunctionAnnexB : A.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(i, !1, !u && T);
        case 80:
          return u || this.unexpected(), this.parseClass(this.maybeTakeDecorators(e, i), !0);
        case 69:
          return this.parseIfStatement(i);
        case 70:
          return this.parseReturnStatement(i);
        case 71:
          return this.parseSwitchStatement(i);
        case 72:
          return this.parseThrowStatement(i);
        case 73:
          return this.parseTryStatement(i);
        case 96:
          if (this.isAwaitUsing())
            return this.allowsUsing() ? u ? this.recordAwaitIfAllowed() || this.raise(A.AwaitUsingNotInAsyncContext, i) : this.raise(A.UnexpectedLexicalDeclaration, i) : this.raise(A.UnexpectedUsingDeclaration, i), this.next(), this.parseVarStatement(i, "await using");
          break;
        case 107:
          if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace())
            break;
          return this.allowsUsing() ? u || this.raise(A.UnexpectedLexicalDeclaration, this.state.startLoc) : this.raise(A.UnexpectedUsingDeclaration, this.state.startLoc), this.parseVarStatement(i, "using");
        case 100: {
          if (this.state.containsEsc)
            break;
          const D = this.nextTokenStart(), B = this.codePointAtPos(D);
          if (B !== 91 && (!u && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(B, D) && B !== 123))
            break;
        }
        case 75:
          u || this.raise(A.UnexpectedLexicalDeclaration, this.state.startLoc);
        case 74: {
          const D = this.state.value;
          return this.parseVarStatement(i, D);
        }
        case 92:
          return this.parseWhileStatement(i);
        case 76:
          return this.parseWithStatement(i);
        case 5:
          return this.parseBlock();
        case 13:
          return this.parseEmptyStatement(i);
        case 83: {
          const D = this.lookaheadCharCode();
          if (D === 40 || D === 46)
            break;
        }
        case 82: {
          !(this.optionFlags & 8) && !P && this.raise(A.UnexpectedImportExport, this.state.startLoc), this.next();
          let D;
          return r === 83 ? D = this.parseImport(i) : D = this.parseExport(i, e), this.assertModuleNodeAllowed(D), D;
        }
        default:
          if (this.isAsyncFunction())
            return u || this.raise(A.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(i, !0, !u && T);
      }
      const g = this.state.value, C = this.parseExpression();
      return pe(r) && C.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, g, C, t) : this.parseExpressionStatement(i, C, e);
    }
    assertModuleNodeAllowed(t) {
      !(this.optionFlags & 8) && !this.inModule && this.raise(A.ImportOutsideModule, t);
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
    }
    maybeTakeDecorators(t, e, r) {
      if (t) {
        var i;
        (i = e.decorators) != null && i.length ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(A.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), r && this.resetStartLocationFromNode(r, e);
      }
      return e;
    }
    canHaveLeadingDecorator() {
      return this.match(80);
    }
    parseDecorators(t) {
      const e = [];
      do
        e.push(this.parseDecorator());
      while (this.match(26));
      if (this.match(82))
        t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(A.DecoratorExportClass, this.state.startLoc);
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(A.UnexpectedLeadingDecorator, this.state.startLoc);
      return e;
    }
    parseDecorator() {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      const t = this.startNode();
      if (this.next(), this.hasPlugin("decorators")) {
        const e = this.state.startLoc;
        let r;
        if (this.match(10)) {
          const i = this.state.startLoc;
          this.next(), r = this.parseExpression(), this.expect(11), r = this.wrapParenthesis(i, r);
          const u = this.state.startLoc;
          t.expression = this.parseMaybeDecoratorArguments(r, i), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== r && this.raise(A.DecoratorArgumentsOutsideParentheses, u);
        } else {
          for (r = this.parseIdentifier(!1); this.eat(16); ) {
            const i = this.startNodeAt(e);
            i.object = r, this.match(139) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), i.property = this.parsePrivateName()) : i.property = this.parseIdentifier(!0), i.computed = !1, r = this.finishNode(i, "MemberExpression");
          }
          t.expression = this.parseMaybeDecoratorArguments(r, e);
        }
      } else
        t.expression = this.parseExprSubscripts();
      return this.finishNode(t, "Decorator");
    }
    parseMaybeDecoratorArguments(t, e) {
      if (this.eat(10)) {
        const r = this.startNodeAt(e);
        return r.callee = t, r.arguments = this.parseCallExpressionArguments(), this.toReferencedList(r.arguments), this.finishNode(r, "CallExpression");
      }
      return t;
    }
    parseBreakContinueStatement(t, e) {
      return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
    }
    verifyBreakContinue(t, e) {
      let r;
      for (r = 0; r < this.state.labels.length; ++r) {
        const i = this.state.labels[r];
        if ((t.label == null || i.name === t.label.name) && (i.kind != null && (e || i.kind === 1) || t.label && e))
          break;
      }
      if (r === this.state.labels.length) {
        const i = e ? "BreakStatement" : "ContinueStatement";
        this.raise(A.IllegalBreakContinue, t, {
          type: i
        });
      }
    }
    parseDebuggerStatement(t) {
      return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
    }
    parseHeaderExpression() {
      this.expect(10);
      const t = this.parseExpression();
      return this.expect(11), t;
    }
    parseDoWhileStatement(t) {
      return this.next(), this.state.labels.push(Vt), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }
    parseForStatement(t) {
      this.next(), this.state.labels.push(Vt);
      let e = null;
      if (this.isContextual(96) && this.recordAwaitIfAllowed() && (e = this.state.startLoc, this.next()), this.scope.enter(0), this.expect(10), this.match(13))
        return e !== null && this.unexpected(e), this.parseFor(t, null);
      const r = this.isContextual(100);
      {
        const g = this.isAwaitUsing(), C = g || this.isForUsing(), D = r && this.hasFollowingBindingAtom() || C;
        if (this.match(74) || this.match(75) || D) {
          const B = this.startNode();
          let J;
          g ? (J = "await using", this.recordAwaitIfAllowed() || this.raise(A.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : J = this.state.value, this.next(), this.parseVar(B, !0, J);
          const X = this.finishNode(B, "VariableDeclaration"), G = this.match(58);
          return G && C && this.raise(A.ForInUsing, X), (G || this.isContextual(102)) && X.declarations.length === 1 ? this.parseForIn(t, X, e) : (e !== null && this.unexpected(e), this.parseFor(t, X));
        }
      }
      const i = this.isContextual(95), u = new yt(), T = this.parseExpression(!0, u), P = this.isContextual(102);
      if (P && (r && this.raise(A.ForOfLet, T), e === null && i && T.type === "Identifier" && this.raise(A.ForOfAsync, T)), P || this.match(58)) {
        this.checkDestructuringPrivate(u), this.toAssignable(T, !0);
        const g = P ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(T, {
          type: g
        }), this.parseForIn(t, T, e);
      } else
        this.checkExpressionErrors(u, !0);
      return e !== null && this.unexpected(e), this.parseFor(t, T);
    }
    parseFunctionStatement(t, e, r) {
      return this.next(), this.parseFunction(t, 1 | (r ? 2 : 0) | (e ? 8 : 0));
    }
    parseIfStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement");
    }
    parseReturnStatement(t) {
      return this.prodParam.hasReturn || this.raise(A.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }
    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      const e = t.cases = [];
      this.expect(5), this.state.labels.push(Js), this.scope.enter(256);
      let r;
      for (let i; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          const u = this.match(61);
          r && this.finishNode(r, "SwitchCase"), e.push(r = this.startNode()), r.consequent = [], this.next(), u ? r.test = this.parseExpression() : (i && this.raise(A.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), i = !0, r.test = null), this.expect(14);
        } else
          r ? r.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), r && this.finishNode(r, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }
    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(A.NewlineAfterThrow, this.state.lastTokEndLoc), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
    }
    parseCatchClauseParam() {
      const t = this.parseBindingAtom();
      return this.scope.enter(this.options.annexB && t.type === "Identifier" ? 8 : 0), this.checkLVal(t, {
        type: "CatchClause"
      }, 9), t;
    }
    parseTryStatement(t) {
      if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
        const e = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(0)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
      }
      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(A.NoCatchOrFinally, t), this.finishNode(t, "TryStatement");
    }
    parseVarStatement(t, e, r = !1) {
      return this.next(), this.parseVar(t, !1, e, r), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }
    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(Vt), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }
    parseWithStatement(t) {
      return this.state.strict && this.raise(A.StrictWith, this.state.startLoc), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
    }
    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }
    parseLabeledStatement(t, e, r, i) {
      for (const T of this.state.labels)
        T.name === e && this.raise(A.LabelRedeclaration, r, {
          labelName: e
        });
      const u = Et(this.state.type) ? 1 : this.match(71) ? 2 : null;
      for (let T = this.state.labels.length - 1; T >= 0; T--) {
        const P = this.state.labels[T];
        if (P.statementStart === t.start)
          P.statementStart = this.sourceToOffsetPos(this.state.start), P.kind = u;
        else
          break;
      }
      return this.state.labels.push({
        name: e,
        kind: u,
        statementStart: this.sourceToOffsetPos(this.state.start)
      }), t.body = i & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), t.label = r, this.finishNode(t, "LabeledStatement");
    }
    parseExpressionStatement(t, e, r) {
      return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
    }
    parseBlock(t = !1, e = !0, r) {
      const i = this.startNode();
      return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(0), this.parseBlockBody(i, t, !1, 8, r), e && this.scope.exit(), this.finishNode(i, "BlockStatement");
    }
    isValidDirective(t) {
      return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
    }
    parseBlockBody(t, e, r, i, u) {
      const T = t.body = [], P = t.directives = [];
      this.parseBlockOrModuleBlockBody(T, e ? P : void 0, r, i, u);
    }
    parseBlockOrModuleBlockBody(t, e, r, i, u) {
      const T = this.state.strict;
      let P = !1, g = !1;
      for (; !this.match(i); ) {
        const C = r ? this.parseModuleItem() : this.parseStatementListItem();
        if (e && !g) {
          if (this.isValidDirective(C)) {
            const D = this.stmtToDirective(C);
            e.push(D), !P && D.value.value === "use strict" && (P = !0, this.setStrict(!0));
            continue;
          }
          g = !0, this.state.strictErrors.clear();
        }
        t.push(C);
      }
      u?.call(this, P), T || this.setStrict(!1), this.next();
    }
    parseFor(t, e) {
      return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }
    parseForIn(t, e, r) {
      const i = this.match(58);
      return this.next(), i ? r !== null && this.unexpected(r) : t.await = r !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(A.ForInOfLoopInitializer, e, {
        type: i ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(A.InvalidLhs, e, {
        ancestor: {
          type: "ForStatement"
        }
      }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(t, e, r, i = !1) {
      const u = t.declarations = [];
      for (t.kind = r; ; ) {
        const T = this.startNode();
        if (this.parseVarId(T, r), T.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, T.init === null && !i && (T.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(A.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: "destructuring"
        }) : (r === "const" || r === "using" || r === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(A.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: r
        })), u.push(this.finishNode(T, "VariableDeclarator")), !this.eat(12)) break;
      }
      return t;
    }
    parseVarId(t, e) {
      const r = this.parseBindingAtom();
      e === "using" || e === "await using" ? (r.type === "ArrayPattern" || r.type === "ObjectPattern") && this.raise(A.UsingDeclarationHasBindingPattern, r.loc.start) : r.type === "VoidPattern" && this.raise(A.UnexpectedVoidPattern, r.loc.start), this.checkLVal(r, {
        type: "VariableDeclarator"
      }, e === "var" ? 5 : 8201), t.id = r;
    }
    parseAsyncFunctionExpression(t) {
      return this.parseFunction(t, 8);
    }
    parseFunction(t, e = 0) {
      const r = e & 2, i = !!(e & 1), u = i && !(e & 4), T = !!(e & 8);
      this.initFunction(t, T), this.match(55) && (r && this.raise(A.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), t.generator = !0), i && (t.id = this.parseFunctionId(u));
      const P = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(514), this.prodParam.enter(ft(T, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !r && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = P, t;
    }
    parseFunctionId(t) {
      return t || pe(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(t, e) {
      this.expect(10), this.expressionScope.enter(Is()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
    }
    registerFunctionStatementId(t) {
      t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, t.id.loc.start);
    }
    parseClass(t, e, r) {
      this.next();
      const i = this.state.strict;
      return this.state.strict = !0, this.parseClassId(t, e, r), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
    }
    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }
    isClassMethod() {
      return this.match(10);
    }
    nameIsConstructor(t) {
      return t.type === "Identifier" && t.name === "constructor" || t.type === "StringLiteral" && t.value === "constructor";
    }
    isNonstaticConstructor(t) {
      return !t.computed && !t.static && this.nameIsConstructor(t.key);
    }
    parseClassBody(t, e) {
      this.classScope.enter();
      const r = {
        hadConstructor: !1,
        hadSuperClass: t
      };
      let i = [];
      const u = this.startNode();
      if (u.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
        for (; !this.match(8); ) {
          if (this.eat(13)) {
            if (i.length > 0)
              throw this.raise(A.DecoratorSemicolon, this.state.lastTokEndLoc);
            continue;
          }
          if (this.match(26)) {
            i.push(this.parseDecorator());
            continue;
          }
          const T = this.startNode();
          i.length && (T.decorators = i, this.resetStartLocationFromNode(T, i[0]), i = []), this.parseClassMember(u, T, r), T.kind === "constructor" && T.decorators && T.decorators.length > 0 && this.raise(A.DecoratorConstructor, T);
        }
      }), this.state.strict = e, this.next(), i.length)
        throw this.raise(A.TrailingDecorator, this.state.startLoc);
      return this.classScope.exit(), this.finishNode(u, "ClassBody");
    }
    parseClassMemberFromModifier(t, e) {
      const r = this.parseIdentifier(!0);
      if (this.isClassMethod()) {
        const i = e;
        return i.kind = "method", i.computed = !1, i.key = r, i.static = !1, this.pushClassMethod(t, i, !1, !1, !1, !1), !0;
      } else if (this.isClassProperty()) {
        const i = e;
        return i.computed = !1, i.key = r, i.static = !1, t.body.push(this.parseClassProperty(i)), !0;
      }
      return this.resetPreviousNodeTrailingComments(r), !1;
    }
    parseClassMember(t, e, r) {
      const i = this.isContextual(106);
      if (i) {
        if (this.parseClassMemberFromModifier(t, e))
          return;
        if (this.eat(5)) {
          this.parseClassStaticBlock(t, e);
          return;
        }
      }
      this.parseClassMemberWithIsStatic(t, e, r, i);
    }
    parseClassMemberWithIsStatic(t, e, r, i) {
      const u = e, T = e, P = e, g = e, C = e, D = u, B = u;
      if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        D.kind = "method";
        const oe = this.match(139);
        if (this.parseClassElementName(D), this.parsePostMemberNameModifiers(D), oe) {
          this.pushClassPrivateMethod(t, T, !0, !1);
          return;
        }
        this.isNonstaticConstructor(u) && this.raise(A.ConstructorIsGenerator, u.key), this.pushClassMethod(t, u, !0, !1, !1, !1);
        return;
      }
      const J = !this.state.containsEsc && pe(this.state.type), X = this.parseClassElementName(e), G = J ? X.name : null, de = this.isPrivateName(X), Pe = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(B), this.isClassMethod()) {
        if (D.kind = "method", de) {
          this.pushClassPrivateMethod(t, T, !1, !1);
          return;
        }
        const oe = this.isNonstaticConstructor(u);
        let xe = !1;
        oe && (u.kind = "constructor", r.hadConstructor && !this.hasPlugin("typescript") && this.raise(A.DuplicateConstructor, X), oe && this.hasPlugin("typescript") && e.override && this.raise(A.OverrideOnConstructor, X), r.hadConstructor = !0, xe = r.hadSuperClass), this.pushClassMethod(t, u, !1, !1, oe, xe);
      } else if (this.isClassProperty())
        de ? this.pushClassPrivateProperty(t, g) : this.pushClassProperty(t, P);
      else if (G === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(X);
        const oe = this.eat(55);
        B.optional && this.unexpected(Pe), D.kind = "method";
        const xe = this.match(139);
        this.parseClassElementName(D), this.parsePostMemberNameModifiers(B), xe ? this.pushClassPrivateMethod(t, T, oe, !0) : (this.isNonstaticConstructor(u) && this.raise(A.ConstructorIsAsync, u.key), this.pushClassMethod(t, u, oe, !0, !1, !1));
      } else if ((G === "get" || G === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(X), D.kind = G;
        const oe = this.match(139);
        this.parseClassElementName(u), oe ? this.pushClassPrivateMethod(t, T, !1, !1) : (this.isNonstaticConstructor(u) && this.raise(A.ConstructorIsAccessor, u.key), this.pushClassMethod(t, u, !1, !1, !1, !1)), this.checkGetterSetterParams(u);
      } else if (G === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(X);
        const oe = this.match(139);
        this.parseClassElementName(P), this.pushClassAccessorProperty(t, C, oe);
      } else this.isLineTerminator() ? de ? this.pushClassPrivateProperty(t, g) : this.pushClassProperty(t, P) : this.unexpected();
    }
    parseClassElementName(t) {
      const {
        type: e,
        value: r
      } = this.state;
      if ((e === 132 || e === 134) && t.static && r === "prototype" && this.raise(A.StaticPrototype, this.state.startLoc), e === 139) {
        r === "constructor" && this.raise(A.ConstructorClassPrivateField, this.state.startLoc);
        const i = this.parsePrivateName();
        return t.key = i, i;
      }
      return this.parsePropertyName(t), t.key;
    }
    parseClassStaticBlock(t, e) {
      var r;
      this.scope.enter(720);
      const i = this.state.labels;
      this.state.labels = [], this.prodParam.enter(0);
      const u = e.body = [];
      this.parseBlockOrModuleBlockBody(u, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (r = e.decorators) != null && r.length && this.raise(A.DecoratorStaticBlock, e);
    }
    pushClassProperty(t, e) {
      !e.computed && this.nameIsConstructor(e.key) && this.raise(A.ConstructorClassField, e.key), t.body.push(this.parseClassProperty(e));
    }
    pushClassPrivateProperty(t, e) {
      const r = this.parseClassPrivateProperty(e);
      t.body.push(r), this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), 0, r.key.loc.start);
    }
    pushClassAccessorProperty(t, e, r) {
      !r && !e.computed && this.nameIsConstructor(e.key) && this.raise(A.ConstructorClassField, e.key);
      const i = this.parseClassAccessorProperty(e);
      t.body.push(i), r && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), 0, i.key.loc.start);
    }
    pushClassMethod(t, e, r, i, u, T) {
      t.body.push(this.parseMethod(e, r, i, u, T, "ClassMethod", !0));
    }
    pushClassPrivateMethod(t, e, r, i) {
      const u = this.parseMethod(e, r, i, !1, !1, "ClassPrivateMethod", !0);
      t.body.push(u);
      const T = u.kind === "get" ? u.static ? 6 : 2 : u.kind === "set" ? u.static ? 5 : 1 : 0;
      this.declareClassPrivateMethodInScope(u, T);
    }
    declareClassPrivateMethodInScope(t, e) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
    }
    parsePostMemberNameModifiers(t) {
    }
    parseClassPrivateProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
    }
    parseClassProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
    }
    parseClassAccessorProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
    }
    parseInitializer(t) {
      this.scope.enter(592), this.expressionScope.enter(ar()), this.prodParam.enter(0), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(t, e, r, i = 8331) {
      if (pe(this.state.type))
        t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
      else if (r || !e)
        t.id = null;
      else
        throw this.raise(A.MissingClassName, this.state.startLoc);
    }
    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(t, e) {
      const r = this.parseMaybeImportPhase(t, !0), i = this.maybeParseExportDefaultSpecifier(t, r), u = !i || this.eat(12), T = u && this.eatExportStar(t), P = T && this.maybeParseExportNamespaceSpecifier(t), g = u && (!P || this.eat(12)), C = i || T;
      if (T && !P) {
        if (i && this.unexpected(), e)
          throw this.raise(A.UnsupportedDecoratorExport, t);
        return this.parseExportFrom(t, !0), this.sawUnambiguousESM = !0, this.finishNode(t, "ExportAllDeclaration");
      }
      const D = this.maybeParseExportNamedSpecifiers(t);
      i && u && !T && !D && this.unexpected(null, 5), P && g && this.unexpected(null, 98);
      let B;
      if (C || D) {
        if (B = !1, e)
          throw this.raise(A.UnsupportedDecoratorExport, t);
        this.parseExportFrom(t, C);
      } else
        B = this.maybeParseExportDeclaration(t);
      if (C || D || B) {
        var J;
        const X = t;
        if (this.checkExport(X, !0, !1, !!X.source), ((J = X.declaration) == null ? void 0 : J.type) === "ClassDeclaration")
          this.maybeTakeDecorators(e, X.declaration, X);
        else if (e)
          throw this.raise(A.UnsupportedDecoratorExport, t);
        return this.sawUnambiguousESM = !0, this.finishNode(X, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        const X = t, G = this.parseExportDefaultExpression();
        if (X.declaration = G, G.type === "ClassDeclaration")
          this.maybeTakeDecorators(e, G, X);
        else if (e)
          throw this.raise(A.UnsupportedDecoratorExport, t);
        return this.checkExport(X, !0, !0), this.sawUnambiguousESM = !0, this.finishNode(X, "ExportDefaultDeclaration");
      }
      throw this.unexpected(null, 5);
    }
    eatExportStar(t) {
      return this.eat(55);
    }
    maybeParseExportDefaultSpecifier(t, e) {
      if (e || this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom", e?.loc.start);
        const r = e || this.parseIdentifier(!0), i = this.startNodeAtNode(r);
        return i.exported = r, t.specifiers = [this.finishNode(i, "ExportDefaultSpecifier")], !0;
      }
      return !1;
    }
    maybeParseExportNamespaceSpecifier(t) {
      if (this.isContextual(93)) {
        var e, r;
        (r = (e = t).specifiers) != null || (e.specifiers = []);
        const i = this.startNodeAt(this.state.lastTokStartLoc);
        return this.next(), i.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(i, "ExportNamespaceSpecifier")), !0;
      }
      return !1;
    }
    maybeParseExportNamedSpecifiers(t) {
      if (this.match(5)) {
        const e = t;
        e.specifiers || (e.specifiers = []);
        const r = e.exportKind === "type";
        return e.specifiers.push(...this.parseExportSpecifiers(r)), e.source = null, this.hasPlugin("importAssertions") ? e.assertions = [] : e.attributes = [], e.declaration = null, !0;
      }
      return !1;
    }
    maybeParseExportDeclaration(t) {
      return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") ? t.assertions = [] : t.attributes = [], t.declaration = this.parseExportDeclaration(t), !0) : !1;
    }
    isAsyncFunction() {
      if (!this.isContextual(95)) return !1;
      const t = this.nextTokenInLineStart();
      return this.isUnparsedContextual(t, "function");
    }
    parseExportDefaultExpression() {
      const t = this.startNode();
      if (this.match(68))
        return this.next(), this.parseFunction(t, 5);
      if (this.isAsyncFunction())
        return this.next(), this.next(), this.parseFunction(t, 13);
      if (this.match(80))
        return this.parseClass(t, !0, !0);
      if (this.match(26))
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(A.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
      if (this.match(75) || this.match(74) || this.isLet() || this.isUsing() || this.isAwaitUsing())
        throw this.raise(A.UnsupportedDefaultExport, this.state.startLoc);
      const e = this.parseMaybeAssignAllowIn();
      return this.semicolon(), e;
    }
    parseExportDeclaration(t) {
      return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem();
    }
    isExportDefaultSpecifier() {
      const {
        type: t
      } = this.state;
      if (pe(t)) {
        if (t === 95 && !this.state.containsEsc || t === 100)
          return !1;
        if ((t === 130 || t === 129) && !this.state.containsEsc) {
          const i = this.nextTokenStart(), u = this.input.charCodeAt(i);
          if (u === 123 || this.chStartsBindingIdentifier(u, i) && !this.input.startsWith("from", i))
            return this.expectOnePlugin(["flow", "typescript"]), !1;
        }
      } else if (!this.match(65))
        return !1;
      const e = this.nextTokenStart(), r = this.isUnparsedContextual(e, "from");
      if (this.input.charCodeAt(e) === 44 || pe(this.state.type) && r)
        return !0;
      if (this.match(65) && r) {
        const i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
        return i === 34 || i === 39;
      }
      return !1;
    }
    parseExportFrom(t, e) {
      this.eatContextual(98) ? (t.source = this.parseImportSource(), this.checkExport(t), this.maybeParseImportAttributes(t), this.checkJSONModuleImport(t)) : e && this.unexpected(), this.semicolon();
    }
    shouldParseExportDeclaration() {
      const {
        type: t
      } = this.state;
      return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(A.DecoratorBeforeExport, this.state.startLoc), !0) : this.isUsing() ? (this.raise(A.UsingDeclarationExport, this.state.startLoc), !0) : this.isAwaitUsing() ? (this.raise(A.UsingDeclarationExport, this.state.startLoc), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(t, e, r, i) {
      if (e) {
        var u;
        if (r) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var T;
            const P = t.declaration;
            P.type === "Identifier" && P.name === "from" && P.end - P.start === 4 && !((T = P.extra) != null && T.parenthesized) && this.raise(A.ExportDefaultFromAsIdentifier, P);
          }
        } else if ((u = t.specifiers) != null && u.length)
          for (const P of t.specifiers) {
            const {
              exported: g
            } = P, C = g.type === "Identifier" ? g.name : g.value;
            if (this.checkDuplicateExports(P, C), !i && P.local) {
              const {
                local: D
              } = P;
              D.type !== "Identifier" ? this.raise(A.ExportBindingIsString, P, {
                localName: D.value,
                exportName: C
              }) : (this.checkReservedWord(D.name, D.loc.start, !0, !1), this.scope.checkLocalExport(D));
            }
          }
        else if (t.declaration) {
          const P = t.declaration;
          if (P.type === "FunctionDeclaration" || P.type === "ClassDeclaration") {
            const {
              id: g
            } = P;
            if (!g) throw new Error("Assertion failure");
            this.checkDuplicateExports(t, g.name);
          } else if (P.type === "VariableDeclaration")
            for (const g of P.declarations)
              this.checkDeclaration(g.id);
        }
      }
    }
    checkDeclaration(t) {
      if (t.type === "Identifier")
        this.checkDuplicateExports(t, t.name);
      else if (t.type === "ObjectPattern")
        for (const e of t.properties)
          this.checkDeclaration(e);
      else if (t.type === "ArrayPattern")
        for (const e of t.elements)
          e && this.checkDeclaration(e);
      else t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
    }
    checkDuplicateExports(t, e) {
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(A.DuplicateDefaultExport, t) : this.raise(A.DuplicateExport, t, {
        exportName: e
      })), this.exportedIdentifiers.add(e);
    }
    parseExportSpecifiers(t) {
      const e = [];
      let r = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (r)
          r = !1;
        else if (this.expect(12), this.eat(8)) break;
        const i = this.isContextual(130), u = this.match(134), T = this.startNode();
        T.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(T, u, t, i));
      }
      return e;
    }
    parseExportSpecifier(t, e, r, i) {
      return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = this.cloneStringLiteral(t.local) : t.exported || (t.exported = this.cloneIdentifier(t.local)), this.finishNode(t, "ExportSpecifier");
    }
    parseModuleExportName() {
      if (this.match(134)) {
        const t = this.parseStringLiteral(this.state.value), e = Ys.exec(t.value);
        return e && this.raise(A.ModuleExportNameHasLoneSurrogate, t, {
          surrogateCharCode: e[0].charCodeAt(0)
        }), t;
      }
      return this.parseIdentifier(!0);
    }
    isJSONModuleImport(t) {
      return t.assertions != null ? t.assertions.some(({
        key: e,
        value: r
      }) => r.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type")) : !1;
    }
    checkImportReflection(t) {
      const {
        specifiers: e
      } = t, r = e.length === 1 ? e[0].type : null;
      if (t.phase === "source")
        r !== "ImportDefaultSpecifier" && this.raise(A.SourcePhaseImportRequiresDefault, e[0].loc.start);
      else if (t.phase === "defer")
        r !== "ImportNamespaceSpecifier" && this.raise(A.DeferImportRequiresNamespace, e[0].loc.start);
      else if (t.module) {
        var i;
        r !== "ImportDefaultSpecifier" && this.raise(A.ImportReflectionNotBinding, e[0].loc.start), ((i = t.assertions) == null ? void 0 : i.length) > 0 && this.raise(A.ImportReflectionHasAssertion, e[0].loc.start);
      }
    }
    checkJSONModuleImport(t) {
      if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
        const {
          specifiers: e
        } = t;
        if (e != null) {
          const r = e.find((i) => {
            let u;
            if (i.type === "ExportSpecifier" ? u = i.local : i.type === "ImportSpecifier" && (u = i.imported), u !== void 0)
              return u.type === "Identifier" ? u.name !== "default" : u.value !== "default";
          });
          r !== void 0 && this.raise(A.ImportJSONBindingNotDefault, r.loc.start);
        }
      }
    }
    isPotentialImportPhase(t) {
      return t ? !1 : this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
    }
    applyImportPhase(t, e, r, i) {
      e || (r === "module" ? (this.expectPlugin("importReflection", i), t.module = !0) : this.hasPlugin("importReflection") && (t.module = !1), r === "source" ? (this.expectPlugin("sourcePhaseImports", i), t.phase = "source") : r === "defer" ? (this.expectPlugin("deferredImportEvaluation", i), t.phase = "defer") : this.hasPlugin("sourcePhaseImports") && (t.phase = null));
    }
    parseMaybeImportPhase(t, e) {
      if (!this.isPotentialImportPhase(e))
        return this.applyImportPhase(t, e, null), null;
      const r = this.startNode(), i = this.parseIdentifierName(!0), {
        type: u
      } = this.state;
      return (Le(u) ? u !== 98 || this.lookaheadCharCode() === 102 : u !== 12) ? (this.applyImportPhase(t, e, i, r.loc.start), null) : (this.applyImportPhase(t, e, null), this.createIdentifier(r, i));
    }
    isPrecedingIdImportPhase(t) {
      const {
        type: e
      } = this.state;
      return pe(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
    }
    parseImport(t) {
      return this.match(134) ? this.parseImportSourceAndAttributes(t) : this.parseImportSpecifiersAndAfter(t, this.parseMaybeImportPhase(t, !1));
    }
    parseImportSpecifiersAndAfter(t, e) {
      t.specifiers = [];
      const i = !this.maybeParseDefaultImportSpecifier(t, e) || this.eat(12), u = i && this.maybeParseStarImportSpecifier(t);
      return i && !u && this.parseNamedImportSpecifiers(t), this.expectContextual(98), this.parseImportSourceAndAttributes(t);
    }
    parseImportSourceAndAttributes(t) {
      var e;
      return (e = t.specifiers) != null || (t.specifiers = []), t.source = this.parseImportSource(), this.maybeParseImportAttributes(t), this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(t, "ImportDeclaration");
    }
    parseImportSource() {
      return this.match(134) || this.unexpected(), this.parseExprAtom();
    }
    parseImportSpecifierLocal(t, e, r) {
      e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, r));
    }
    finishImportSpecifier(t, e, r = 8201) {
      return this.checkLVal(t.local, {
        type: e
      }, r), this.finishNode(t, e);
    }
    parseImportAttributes() {
      this.expect(5);
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        if (this.match(8))
          break;
        const r = this.startNode(), i = this.state.value;
        if (e.has(i) && this.raise(A.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: i
        }), e.add(i), this.match(134) ? r.key = this.parseStringLiteral(i) : r.key = this.parseIdentifier(!0), this.expect(14), !this.match(134))
          throw this.raise(A.ModuleAttributeInvalidValue, this.state.startLoc);
        r.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(r, "ImportAttribute"));
      } while (this.eat(12));
      return this.expect(8), t;
    }
    parseModuleAttributes() {
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        const r = this.startNode();
        if (r.key = this.parseIdentifier(!0), r.key.name !== "type" && this.raise(A.ModuleAttributeDifferentFromType, r.key), e.has(r.key.name) && this.raise(A.ModuleAttributesWithDuplicateKeys, r.key, {
          key: r.key.name
        }), e.add(r.key.name), this.expect(14), !this.match(134))
          throw this.raise(A.ModuleAttributeInvalidValue, this.state.startLoc);
        r.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(r, "ImportAttribute"));
      } while (this.eat(12));
      return t;
    }
    maybeParseImportAttributes(t) {
      let e;
      var r = !1;
      if (this.match(76)) {
        if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40)
          return;
        this.next(), this.hasPlugin("moduleAttributes") ? (e = this.parseModuleAttributes(), this.addExtra(t, "deprecatedWithLegacySyntax", !0)) : e = this.parseImportAttributes(), r = !0;
      } else this.isContextual(94) && !this.hasPrecedingLineBreak() ? (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions") && this.raise(A.ImportAttributesUseAssert, this.state.startLoc), this.hasPlugin("importAssertions") || this.addExtra(t, "deprecatedAssertSyntax", !0), this.next(), e = this.parseImportAttributes()) : e = [];
      !r && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
    }
    maybeParseDefaultImportSpecifier(t, e) {
      if (e) {
        const r = this.startNodeAtNode(e);
        return r.local = e, t.specifiers.push(this.finishImportSpecifier(r, "ImportDefaultSpecifier")), !0;
      } else if (Le(this.state.type))
        return this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), !0;
      return !1;
    }
    maybeParseStarImportSpecifier(t) {
      if (this.match(55)) {
        const e = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), !0;
      }
      return !1;
    }
    parseNamedImportSpecifiers(t) {
      let e = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (e)
          e = !1;
        else {
          if (this.eat(14))
            throw this.raise(A.DestructureNamedImport, this.state.startLoc);
          if (this.expect(12), this.eat(8)) break;
        }
        const r = this.startNode(), i = this.match(134), u = this.isContextual(130);
        r.imported = this.parseModuleExportName();
        const T = this.parseImportSpecifier(r, i, t.importKind === "type" || t.importKind === "typeof", u, void 0);
        t.specifiers.push(T);
      }
    }
    parseImportSpecifier(t, e, r, i, u) {
      if (this.eatContextual(93))
        t.local = this.parseIdentifier();
      else {
        const {
          imported: T
        } = t;
        if (e)
          throw this.raise(A.ImportBindingIsString, t, {
            importName: T.value
          });
        this.checkReservedWord(T.name, t.loc.start, !0, !0), t.local || (t.local = this.cloneIdentifier(T));
      }
      return this.finishImportSpecifier(t, "ImportSpecifier", u);
    }
    isThisParam(t) {
      return t.type === "Identifier" && t.name === "this";
    }
  }
  class hr extends $s {
    constructor(t, e, r) {
      const i = te(t);
      super(i, e), this.options = i, this.initializeScopes(), this.plugins = r, this.filename = i.sourceFilename, this.startIndex = i.startIndex;
      let u = 0;
      i.allowAwaitOutsideFunction && (u |= 1), i.allowReturnOutsideFunction && (u |= 2), i.allowImportExportEverywhere && (u |= 8), i.allowSuperOutsideMethod && (u |= 16), i.allowUndeclaredExports && (u |= 64), i.allowNewTargetOutsideFunction && (u |= 4), i.allowYieldOutsideFunction && (u |= 32), i.ranges && (u |= 128), i.tokens && (u |= 256), i.createImportExpressions && (u |= 512), i.createParenthesizedExpressions && (u |= 1024), i.errorRecovery && (u |= 2048), i.attachComment && (u |= 4096), i.annexB && (u |= 8192), this.optionFlags = u;
    }
    getScopeHandler() {
      return Mt;
    }
    parse() {
      this.enterInitialScopes();
      const t = this.startNode(), e = this.startNode();
      this.nextToken(), t.errors = null;
      const r = this.parseTopLevel(t, e);
      return r.errors = this.state.errors, r.comments.length = this.state.commentsLen, r;
    }
  }
  function Ws(y, t) {
    var e;
    if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
      t = Object.assign({}, t);
      try {
        t.sourceType = "module";
        const r = ot(t, y), i = r.parse();
        if (r.sawUnambiguousESM)
          return i;
        if (r.ambiguousScriptDifferentAst)
          try {
            return t.sourceType = "script", ot(t, y).parse();
          } catch {
          }
        else
          i.program.sourceType = "script";
        return i;
      } catch (r) {
        try {
          return t.sourceType = "script", ot(t, y).parse();
        } catch {
        }
        throw r;
      }
    } else
      return ot(t, y).parse();
  }
  function zs(y, t) {
    const e = ot(t, y);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }
  function Hs(y) {
    const t = {};
    for (const e of Object.keys(y))
      t[e] = _e(y[e]);
    return t;
  }
  const Gs = Hs(St);
  function ot(y, t) {
    let e = hr;
    const r = /* @__PURE__ */ new Map();
    if (y != null && y.plugins) {
      for (const i of y.plugins) {
        let u, T;
        typeof i == "string" ? u = i : [u, T] = i, r.has(u) || r.set(u, T || {});
      }
      Ks(r), e = Qs(r);
    }
    return new e(y, t, r);
  }
  const yr = /* @__PURE__ */ new Map();
  function Qs(y) {
    const t = [];
    for (const i of Vs)
      y.has(i) && t.push(i);
    const e = t.join("|");
    let r = yr.get(e);
    if (!r) {
      r = hr;
      for (const i of t)
        r = dr[i](r);
      yr.set(e, r);
    }
    return r;
  }
  return si.parse = Ws, si.parseExpression = zs, si.tokTypes = Gs, si;
}
var vc = gc();
const Jn = 10, Jl = (n = 0) => (l) => `\x1B[${l + n}m`, Yl = (n = 0) => (l) => `\x1B[${38 + n};5;${l}m`, Xl = (n = 0) => (l, c, o) => `\x1B[${38 + n};2;${l};${c};${o}m`, Ie = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
Object.keys(Ie.modifier);
const Ic = Object.keys(Ie.color), Nc = Object.keys(Ie.bgColor);
[...Ic, ...Nc];
function Cc() {
  const n = /* @__PURE__ */ new Map();
  for (const [l, c] of Object.entries(Ie)) {
    for (const [o, S] of Object.entries(c))
      Ie[o] = {
        open: `\x1B[${S[0]}m`,
        close: `\x1B[${S[1]}m`
      }, c[o] = Ie[o], n.set(S[0], S[1]);
    Object.defineProperty(Ie, l, {
      value: c,
      enumerable: !1
    });
  }
  return Object.defineProperty(Ie, "codes", {
    value: n,
    enumerable: !1
  }), Ie.color.close = "\x1B[39m", Ie.bgColor.close = "\x1B[49m", Ie.color.ansi = Jl(), Ie.color.ansi256 = Yl(), Ie.color.ansi16m = Xl(), Ie.bgColor.ansi = Jl(Jn), Ie.bgColor.ansi256 = Yl(Jn), Ie.bgColor.ansi16m = Xl(Jn), Object.defineProperties(Ie, {
    rgbToAnsi256: {
      value(l, c, o) {
        return l === c && c === o ? l < 8 ? 16 : l > 248 ? 231 : Math.round((l - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(l / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(o / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(l) {
        const c = /[a-f\d]{6}|[a-f\d]{3}/i.exec(l.toString(16));
        if (!c)
          return [0, 0, 0];
        let [o] = c;
        o.length === 3 && (o = [...o].map((x) => x + x).join(""));
        const S = Number.parseInt(o, 16);
        return [
          /* eslint-disable no-bitwise */
          S >> 16 & 255,
          S >> 8 & 255,
          S & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: (l) => Ie.rgbToAnsi256(...Ie.hexToRgb(l)),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(l) {
        if (l < 8)
          return 30 + l;
        if (l < 16)
          return 90 + (l - 8);
        let c, o, S;
        if (l >= 232)
          c = ((l - 232) * 10 + 8) / 255, o = c, S = c;
        else {
          l -= 16;
          const w = l % 36;
          c = Math.floor(l / 36) / 5, o = Math.floor(w / 6) / 5, S = w % 6 / 5;
        }
        const x = Math.max(c, o, S) * 2;
        if (x === 0)
          return 30;
        let M = 30 + (Math.round(S) << 2 | Math.round(o) << 1 | Math.round(c));
        return x === 2 && (M += 60), M;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: (l, c, o) => Ie.ansi256ToAnsi(Ie.rgbToAnsi256(l, c, o)),
      enumerable: !1
    },
    hexToAnsi: {
      value: (l) => Ie.ansi256ToAnsi(Ie.hexToAnsi256(l)),
      enumerable: !1
    }
  }), Ie;
}
const Tt = Cc(), $l = (() => {
  if (!("navigator" in globalThis))
    return 0;
  if (globalThis.navigator.userAgentData) {
    const n = navigator.userAgentData.brands.find(({ brand: l }) => l === "Chromium");
    if (n && n.version > 93)
      return 3;
  }
  return /\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent) ? 1 : 0;
})(), Wl = $l !== 0 && {
  level: $l
}, wc = {
  stdout: Wl,
  stderr: Wl
};
function Oc(n, l, c) {
  let o = n.indexOf(l);
  if (o === -1)
    return n;
  const S = l.length;
  let x = 0, M = "";
  do
    M += n.slice(x, o) + l + c, x = o + S, o = n.indexOf(l, x);
  while (o !== -1);
  return M += n.slice(x), M;
}
function Dc(n, l, c, o) {
  let S = 0, x = "";
  do {
    const M = n[o - 1] === "\r";
    x += n.slice(S, M ? o - 1 : o) + l + (M ? `\r
` : `
`) + c, S = o + 1, o = n.indexOf(`
`, S);
  } while (o !== -1);
  return x += n.slice(S), x;
}
const { stdout: zl, stderr: Hl } = wc, Yn = /* @__PURE__ */ Symbol("GENERATOR"), ai = /* @__PURE__ */ Symbol("STYLER"), Ri = /* @__PURE__ */ Symbol("IS_EMPTY"), Gl = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], ni = /* @__PURE__ */ Object.create(null), Lc = (n, l = {}) => {
  if (l.level && !(Number.isInteger(l.level) && l.level >= 0 && l.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  const c = zl ? zl.level : 0;
  n.level = l.level === void 0 ? c : l.level;
}, kc = (n) => {
  const l = (...c) => c.join(" ");
  return Lc(l, n), Object.setPrototypeOf(l, Ji.prototype), l;
};
function Ji(n) {
  return kc(n);
}
Object.setPrototypeOf(Ji.prototype, Function.prototype);
for (const [n, l] of Object.entries(Tt))
  ni[n] = {
    get() {
      const c = Ga(this, $n(l.open, l.close, this[ai]), this[Ri]);
      return Object.defineProperty(this, n, { value: c }), c;
    }
  };
ni.visible = {
  get() {
    const n = Ga(this, this[ai], !0);
    return Object.defineProperty(this, "visible", { value: n }), n;
  }
};
const Xn = (n, l, c, ...o) => n === "rgb" ? l === "ansi16m" ? Tt[c].ansi16m(...o) : l === "ansi256" ? Tt[c].ansi256(Tt.rgbToAnsi256(...o)) : Tt[c].ansi(Tt.rgbToAnsi(...o)) : n === "hex" ? Xn("rgb", l, c, ...Tt.hexToRgb(...o)) : Tt[c][n](...o), Mc = ["rgb", "hex", "ansi256"];
for (const n of Mc) {
  ni[n] = {
    get() {
      const { level: c } = this;
      return function(...o) {
        const S = $n(Xn(n, Gl[c], "color", ...o), Tt.color.close, this[ai]);
        return Ga(this, S, this[Ri]);
      };
    }
  };
  const l = "bg" + n[0].toUpperCase() + n.slice(1);
  ni[l] = {
    get() {
      const { level: c } = this;
      return function(...o) {
        const S = $n(Xn(n, Gl[c], "bgColor", ...o), Tt.bgColor.close, this[ai]);
        return Ga(this, S, this[Ri]);
      };
    }
  };
}
const _c = Object.defineProperties(() => {
}, {
  ...ni,
  level: {
    enumerable: !0,
    get() {
      return this[Yn].level;
    },
    set(n) {
      this[Yn].level = n;
    }
  }
}), $n = (n, l, c) => {
  let o, S;
  return c === void 0 ? (o = n, S = l) : (o = c.openAll + n, S = l + c.closeAll), {
    open: n,
    close: l,
    openAll: o,
    closeAll: S,
    parent: c
  };
}, Ga = (n, l, c) => {
  const o = (...S) => Bc(o, S.length === 1 ? "" + S[0] : S.join(" "));
  return Object.setPrototypeOf(o, _c), o[Yn] = n, o[ai] = l, o[Ri] = c, o;
}, Bc = (n, l) => {
  if (n.level <= 0 || !l)
    return n[Ri] ? "" : l;
  let c = n[ai];
  if (c === void 0)
    return l;
  const { openAll: o, closeAll: S } = c;
  if (l.includes("\x1B"))
    for (; c !== void 0; )
      l = Oc(l, c.close, c.open), c = c.parent;
  const x = l.indexOf(`
`);
  return x !== -1 && (l = Dc(l, S, o, x)), o + l + S;
};
Object.defineProperties(Ji.prototype, ni);
const Qa = Ji();
Ji({ level: Hl ? Hl.level : 0 });
const Fc = [
  {
    Match: "https://.*.steampowered.com",
    TargetCss: "webkit.css",
    TargetJs: "webkit.js"
  },
  {
    Match: "https://steamcommunity.com",
    TargetCss: "webkit.css",
    TargetJs: "webkit.js"
  },
  {
    Match: "^Steam$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^OverlayBrowser_Browser$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^SP Overlay:",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "Supernav$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^notificationtoasts_",
    TargetCss: "notifications.custom.css",
    TargetJs: "notifications.custom.js"
  },
  {
    Match: "^SteamBrowser_Find$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^OverlayTab\\d+_Find$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^Steam Big Picture Mode$",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: "^QuickAccess_",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: "^MainMenu_",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: ".friendsui-container",
    TargetCss: "friends.custom.css",
    TargetJs: "friends.custom.js"
  },
  {
    Match: "Menu$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: ".ModalDialogPopup",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: ".FullModalOverlay",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  }
], Wn = 0, Rc = 1, jc = [
  {
    method: Wn,
    module: /^react$/g,
    links: ["window", "opener", "SP_REACT"]
  },
  {
    method: Wn,
    module: /^react-dom$/g,
    links: ["window", "opener", "SP_REACTDOM"]
  }
], Uc = 0, Kc = 1, lp = /^SharedJSContext$/, up = /^Steam$/, cp = /^View Root Menu$/, pp = /^Steam Root Menu$/, fp = /^Friends Root Menu$/, dp = /^Games Root Menu$/, hp = /^Help Root Menu$/, yp = /^Notifications Menu$/, mp = /^Account Menu$/;
var Vc = /* @__PURE__ */ ((n) => (n[n.auto = 0] = "auto", n[n.package = 1] = "package", n))(Vc || {});
const qc = bu.default, Jc = /(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<preRelease>(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0)(?:\.(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0))*))?(?:\+(?<metadata>(?:[a-zA-Z\d-]*)(?:\.(?:[a-zA-Z\d-]*))*))?/, Yc = /(?:\.)?(?<tag>[a-zA-Z]+)\.(?<number>(?:[1-9]\d*|0\d*|0))/g;
let ji;
function Tp() {
  const n = [], l = [];
  let c, o, S;
  return {
    name: "vite-plugin-millennium-skin",
    enforce: "pre",
    async config(x) {
      if (c = (await Au(
        { command: "build", mode: "profuction" },
        "skin.config.ts",
        x.root
      ))?.config, c.Patches === void 0) {
        if (!c.UseDefaultPatches)
          throw new Error("haven't any patch in skin.config.ts");
        c.Patches = Fc;
      }
      return c.Patches.forEach((w) => {
        w.TargetJs && n.push(rt(c.srcJs, w.TargetJs)), w.TargetCss && l.push(
          Ql(rt(c.srcCss, w.TargetCss))
        );
      }), c.RootColors !== void 0 && l.push(
        Ql(
          rt(c.srcCss, c.RootColors)
        )
      ), {
        build: {
          rollupOptions: {
            input: [...n, ...l],
            output: {
              entryFileNames: "assets/js/[name].js",
              assetFileNames: (w) => {
                const L = w.names[0], k = ii.parse(L);
                return k.ext === ".css" ? `assets/css/${L}` : /\.(png|jpg|jpeg|gif|svg|webp|bmp|heic)/i.test(
                  k.ext
                ) ? `assets/images/${L}` : `assets/css/${L}`;
              }
            }
          },
          assetsInlineLimit: 0,
          cssCodeSplit: !0
        }
      };
    },
    configResolved(x) {
      S = x, ji = x.logger;
    },
    generateBundle(x, M) {
      if (c.Patches === void 0)
        throw new Error("haven't any patch in building");
      const w = S.root, L = structuredClone(
        c.Patches
      ).map((k) => {
        if (k.Match instanceof RegExp && (k.Match = k.Match.source), k.TargetJs) {
          const O = ii.parse(k.TargetJs);
          k.TargetJs = rt(
            w,
            c.srcJs,
            O.dir,
            O.name
          );
        }
        if (k.TargetCss) {
          const O = ii.parse(k.TargetCss);
          k.TargetCss = rt(
            w,
            c.srcCss,
            O.dir,
            O.name
          );
        }
        return {
          MatchRegexString: k.Match,
          TargetJs: k.TargetJs,
          TargetCss: k.TargetCss
        };
      });
      Object.entries(M).forEach(([, k]) => {
        const { type: O } = k, F = k.fileName;
        if (O === "chunk") {
          const j = ii.parse(
            k.facadeModuleId
          ), R = rt(
            j.dir,
            j.name
          );
          L.forEach((Z) => {
            R === Z.TargetJs && (Z.TargetJs = F);
          });
        } else {
          const j = ii.parse(
            rt(w, k.originalFileNames[0])
          ), R = rt(
            j.dir,
            j.name
          );
          L.forEach((Z) => {
            R === Z.TargetCss && (Z.TargetCss = F);
          }), c.RootColors && R === rt(
            S.root,
            c.srcCss,
            c.RootColors
          ) && (c.RootColors = F);
          return;
        }
      }), o = {
        ...c,
        Patches: L,
        version: ""
      };
    },
    async writeBundle() {
      const x = S.root, M = rt(x, "package.json");
      try {
        const w = JSON.parse(
          await jn.readFile(M, {
            flag: "r",
            encoding: "utf-8"
          })
        );
        if (c.version === Uc || c.version === void 0) {
          const L = await Wc(
            w.version,
            process.env.RELEASE
          );
          if (L) {
            const k = eu(L.new);
            o.version = k, w.version = k, await jn.writeFile(
              M,
              JSON.stringify(w, null, 4)
            ), zc(
              `${eu(L.native)} -> ${k}`
            );
          }
        } else c.version === Kc && (o.version = w.version);
      } catch (w) {
        zn(`can't use package.json: ${w}`);
      }
      try {
        await jn.writeFile(
          rt(x, S.build.outDir, "skin.json"),
          JSON.stringify(o, null, 4)
        );
      } catch (w) {
        throw new Error(`can't write skin.json: ${w}`);
      }
    },
    transform(x, M) {
      if (!/.+\.(js|ts|tsx)$/g.test(M)) return;
      const w = vc.parse(x, {
        sourceType: "module",
        plugins: ["typescript"]
      });
      return qc(w, {
        Program(k) {
          const O = k.node.body, F = {};
          for (let j = O.length - 1; j >= 0; j--) {
            let R = O[j];
            if (!Re.isImportDeclaration(R)) continue;
            const Z = R.source.value, K = [];
            for (const V of jc) {
              if (!V.module.test(Z)) continue;
              const { method: A } = V;
              for (const Y of R.specifiers) {
                const te = Y.local.name;
                let se;
                switch (Y.type === "ImportDefaultSpecifier" ? se = V.links : se = [
                  ...V.links,
                  Y.imported.name
                ], A) {
                  case Rc:
                    F[te] = V.links;
                    break;
                  case Wn:
                    K.push(
                      Xc(
                        te,
                        se
                      )
                    );
                    break;
                }
              }
            }
            O.splice(j, 1, ...K);
          }
          Object.entries(F).forEach(
            ([j, R]) => {
              const Z = k.scope.getBinding(j);
              Z !== void 0 && (Z.referencePaths.forEach((K) => {
                $c(K, j, R);
              }), Z.scope.removeOwnBinding(j));
            }
          );
        }
      }), { code: Pu(w).code };
    }
  };
}
function Sp(n) {
  return n;
}
function Xc(n, l) {
  let c = Re.identifier(l[0]);
  for (let S = 1; S < l.length; S++)
    c = Re.memberExpression(c, Re.identifier(l[S]));
  const o = Re.variableDeclarator(
    Re.identifier(n),
    c
  );
  return Re.variableDeclaration("const", [o]);
}
function Ql(n) {
  if (ii.parse(n).ext !== "") return n;
  for (const c of ["scss", "sass", "css"]) {
    const o = `${n}.${c}`;
    if (Eu(rt(process.cwd(), o)))
      return o;
  }
  throw new Error(`can't find css module: ${n}`);
}
function $c(n, l, c) {
  const o = n.parent;
  if (Re.isMemberExpression(o) && o.object === n.node) {
    const S = o.property;
    if (Re.isIdentifier(S)) {
      const x = Zl(c);
      if (!n.parentPath) return;
      n.parentPath.replaceWith(
        Re.memberExpression(x, Re.identifier(S.name))
      );
    }
    return;
  }
  if (n.isIdentifier()) {
    const S = Zl(c);
    n.replaceWith(
      Re.memberExpression(S, Re.identifier(l))
    );
  }
}
function Zl(n) {
  if (n.length === 0)
    throw new Error("globalObj must not be empty");
  let l = Re.identifier(n[0]);
  for (let c = 1; c < n.length; c++)
    l = Re.memberExpression(l, Re.identifier(n[c]));
  return l;
}
async function Wc(n, l = "snapshot") {
  try {
    const c = Jc.exec(n);
    if (!c?.groups) {
      zn(`can't understand version: ${n}`);
      return;
    }
    let o = {
      major: parseInt(c.groups.major),
      minor: parseInt(c.groups.minor),
      patch: parseInt(c.groups.patch)
    };
    c.groups.preRelease && [
      ...c.groups.preRelease.matchAll(Yc)
    ].forEach((M) => {
      M.groups && (o[M.groups.tag] = parseInt(M.groups.number));
    });
    const S = { ...o };
    switch (l) {
      case null:
        break;
      case void 0:
        break;
      case "major":
        o = {
          major: o.major + 1,
          minor: 0,
          patch: 0
        };
        break;
      case "minor":
        o = {
          major: o.major,
          minor: o.minor + 1,
          patch: 0
        };
        break;
      case "patch":
        o = {
          major: o.major,
          minor: o.minor,
          patch: o.patch + 1
        };
        break;
      case "rc":
        o.rc = (o.rc ?? 0) + 1, delete o.gamma, delete o.beta, delete o.preview, delete o.alpha, delete o.snapshot;
        break;
      case "gamma":
        o.gamma = (o.gamma ?? 0) + 1, delete o.beta, delete o.preview, delete o.alpha, delete o.snapshot;
        break;
      case "beta":
        o.beta = (o.beta ?? 0) + 1, delete o.preview, delete o.alpha, delete o.snapshot;
        break;
      case "preview":
        o.preview = (o.preview ?? 0) + 1, delete o.alpha, delete o.snapshot;
        break;
      case "alpha":
        o.alpha = (o.alpha ?? 0) + 1, delete o.snapshot;
        break;
      case "snapshot":
        o.snapshot = (o.snapshot ?? 0) + 1;
        break;
    }
    return {
      native: S,
      new: o
    };
  } catch (c) {
    zn(`can't bump version: ${c}`);
  }
}
function eu(n) {
  let l = `${n.major}.${n.minor}.${n.patch}`;
  const c = ["rc", "gamma", "beta", "preview", "alpha", "snapshot"];
  let o = !1;
  for (const S of c) {
    const x = n[S];
    x != null && (o ? l += `.${S}.${x}` : (l += `-${S}.${x}`, o = !0));
  }
  return l;
}
function zn(n, l) {
  ji ? ji.warn(Qa.yellow(`[MillenniumSkin] ${n}`), l) : console.warn(Qa.yellow(`[MillenniumSkin] ${n}`));
}
function zc(n, l) {
  ji ? ji.info(Qa.greenBright(`[MillenniumSkin] ${n}`), l) : console.log(Qa.greenBright(`[MillenniumSkin] ${n}`));
}
export {
  up as LibraryRoot,
  mp as MenuAccount,
  fp as MenuFriends,
  dp as MenuGames,
  hp as MenuHelp,
  yp as MenuNotifications,
  pp as MenuSteam,
  cp as MenuView,
  lp as Root,
  Uc as __AUTO__,
  Wn as __DIRECT__,
  Kc as __PACKAGE__,
  Rc as __RUNTIME__,
  Tp as default,
  Sp as defineConfig,
  Vc as versionConfig
};
