import l from "@babel/types";
import { parse as O } from "@babel/parser";
import B from "@babel/traverse";
import { generate as z } from "@babel/generator";
import w, { join as f } from "path/posix";
import { existsSync as D } from "fs";
import E from "fs/promises";
import { loadConfigFromFile as Z } from "vite";
import y from "chalk";
import G from "inquirer";
import L from "simple-git";
const U = [
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
], J = 0, V = 1, H = [
  {
    method: J,
    module: /^react$/g,
    links: ["window", "opener", "SP_REACT"]
  },
  {
    method: J,
    module: /^react-dom$/g,
    links: ["window", "opener", "SP_REACTDOM"]
  }
], W = {
  type: "auto",
  git: {
    major: { autoCommit: !1 },
    minor: { autoCommit: !1 },
    patch: { autoCommit: !1 },
    rc: { autoCommit: !0, needCommitMessage: !0 },
    gamma: { autoCommit: !0, needCommitMessage: !0 },
    beta: { autoCommit: !0, needCommitMessage: !0 },
    preview: { autoCommit: !0, needCommitMessage: !1 },
    alpha: { autoCommit: !0, needCommitMessage: !1 },
    snapshot: { autoCommit: !0, needCommitMessage: !1 }
  }
}, ge = {
  type: "auto",
  git: {
    major: { autoCommit: !1 },
    minor: { autoCommit: !1 },
    patch: { autoCommit: !1 },
    rc: { autoCommit: !1 },
    gamma: { autoCommit: !1 },
    beta: { autoCommit: !1 },
    preview: { autoCommit: !1 },
    alpha: { autoCommit: !1 },
    snapshot: { autoCommit: !1 }
  }
}, X = W, $ = L();
async function q(s = !1) {
  if (s) {
    const o = await G.prompt([
      {
        type: "select",
        name: "type",
        message: "选择提交类型:",
        choices: [
          "feat",
          "fix",
          "docs",
          "style",
          "refactor",
          "test",
          "chore"
        ],
        default: "chore"
      },
      {
        type: "input",
        name: "message",
        message: "输入提交信息:"
      },
      {
        type: "confirm",
        name: "confirm",
        message: "确认提交？",
        default: !0
      }
    ]);
    if (!o.confirm) {
      k("❌ 已取消提交");
      return;
    }
    try {
      await $.add("."), await $.commit(`${o.type}: ${o.message}`), k("✓ git提交成功");
    } catch (t) {
      F(`❌ git提交失败: ${t.message}`);
    }
  } else
    try {
      await $.add("."), await $.commit("chore: auto commit by MillenniumSkin"), k("✓ git提交成功");
    } catch (o) {
      F(`❌ git提交失败: ${o.message}`);
    }
}
const de = /^SharedJSContext$/, he = /^Steam$/, Ce = /^View Root Menu$/, be = /^Steam Root Menu$/, Me = /^Friends Root Menu$/, we = /^Games Root Menu$/, ye = /^Help Root Menu$/, Te = /^Notifications Menu$/, ve = /^Account Menu$/, K = B.default, Q = /(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<preRelease>(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0)(?:\.(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0))*))?(?:\+(?<metadata>(?:[a-zA-Z\d-]*)(?:\.(?:[a-zA-Z\d-]*))*))?/, Y = /(?:\.)?(?<tag>[a-zA-Z]+)\.(?<number>(?:[1-9]\d*|0\d*|0))/g;
let C;
function $e() {
  const s = [], o = [];
  let t, e, a, n;
  const b = "virtual:millennium-skin", A = "\0" + b;
  return {
    name: "vite-plugin-millennium-skin",
    enforce: "pre",
    resolveId(c) {
      if (c === b)
        return A;
    },
    load(c) {
      if (c === A)
        return `export const version = ${n ? JSON.stringify(n) : "undefined"};`;
    },
    async config(c) {
      if (t = (await Z(
        { command: "build", mode: "profuction" },
        "skin.config.ts",
        c.root
      ))?.config, t.Patches === void 0) {
        if (!t.UseDefaultPatches)
          throw new Error("haven't any patch in skin.config.ts");
        t.Patches = U;
      }
      return t.Patches.forEach((i) => {
        i.TargetJs && s.push(f(t.srcJs, i.TargetJs)), i.TargetCss && o.push(
          I(f(t.srcCss, i.TargetCss))
        );
      }), t.RootColors !== void 0 && o.push(
        I(
          f(t.srcCss, t.RootColors)
        )
      ), {
        build: {
          rollupOptions: {
            input: [...s, ...o],
            output: {
              entryFileNames: "assets/js/[name].js",
              assetFileNames: (i) => {
                const m = i.names[0], r = w.parse(m);
                return r.ext === ".css" ? `assets/css/${m}` : /\.(png|jpg|jpeg|gif|svg|webp|bmp|heic)/i.test(
                  r.ext
                ) ? `assets/images/${m}` : `assets/css/${m}`;
              }
            }
          },
          assetsInlineLimit: 0,
          cssCodeSplit: !0
        }
      };
    },
    async configResolved(c) {
      a = c, C = c.logger;
      const p = a.root, i = f(p, "package.json");
      t.version === void 0 && (t.version = X);
      try {
        const m = JSON.parse(
          await E.readFile(i, {
            flag: "r",
            encoding: "utf-8"
          })
        );
        if (t.version.type === "auto") {
          if (n = await _(
            m.version,
            process.env.RELEASE
          ), n) {
            const r = n.newString;
            m.version = r, await E.writeFile(
              i,
              JSON.stringify(m, null, 4)
            ), k(`${n.nativeString} -> ${r}`);
          }
        } else t.version.type === "package" && (n = await _(m.version));
      } catch (m) {
        R(`can't use package.json: ${m}`), n = await _("0.0.0");
      }
    },
    generateBundle(c, p) {
      if (t.Patches === void 0)
        throw new Error("haven't any patch in building");
      const i = a.root, m = structuredClone(
        t.Patches
      ).map((r) => {
        if (r.Match instanceof RegExp && (r.Match = r.Match.source), r.TargetJs) {
          const g = w.parse(r.TargetJs);
          r.TargetJs = f(
            i,
            t.srcJs,
            g.dir,
            g.name
          );
        }
        if (r.TargetCss) {
          const g = w.parse(r.TargetCss);
          r.TargetCss = f(
            i,
            t.srcCss,
            g.dir,
            g.name
          );
        }
        return {
          MatchRegexString: r.Match,
          TargetJs: r.TargetJs,
          TargetCss: r.TargetCss
        };
      });
      Object.entries(p).forEach(([, r]) => {
        const { type: g } = r, M = r.fileName;
        if (g === "chunk") {
          if (!r.facadeModuleId) return;
          const u = w.parse(r.facadeModuleId), h = f(
            u.dir,
            u.name
          );
          m.forEach((d) => {
            h === d.TargetJs && (d.TargetJs = M);
          });
        } else {
          const u = w.parse(
            f(i, r.originalFileNames[0])
          ), h = f(
            u.dir,
            u.name
          );
          m.forEach((d) => {
            h === d.TargetCss && (d.TargetCss = M);
          }), t.RootColors && h === f(
            a.root,
            t.srcCss,
            t.RootColors
          ) && (t.RootColors = M);
          return;
        }
      }), e = {
        ...t,
        Patches: m,
        version: n?.newString ?? "0.0.0"
      };
    },
    async writeBundle() {
      const c = a.root;
      try {
        await E.writeFile(
          f(c, a.build.outDir, "skin.json"),
          JSON.stringify(e, null, 4)
        );
      } catch (p) {
        throw new Error(`can't write skin.json: ${p}`);
      }
    },
    transform(c, p) {
      if (!/.+\.(js|ts|tsx)$/g.test(p)) return;
      const i = O(c, {
        sourceType: "module",
        plugins: ["typescript", "jsx"]
      });
      return K(i, {
        Program(r) {
          const g = r.node.body, M = {};
          for (let u = g.length - 1; u >= 0; u--) {
            let h = g[u];
            if (!l.isImportDeclaration(h)) continue;
            const d = h.source.value, T = [];
            for (const v of H) {
              if (!v.module.test(d)) continue;
              const { method: N } = v;
              for (const j of h.specifiers) {
                const x = j.local.name;
                let S;
                switch (j.type === "ImportDefaultSpecifier" ? S = v.links : S = [
                  ...v.links,
                  j.imported.name
                ], N) {
                  case V:
                    M[x] = v.links;
                    break;
                  case J:
                    T.push(
                      ee(
                        x,
                        S
                      )
                    );
                    break;
                }
              }
            }
            T.length && g.splice(u, 1, ...T);
          }
          Object.entries(M).forEach(
            ([u, h]) => {
              const d = r.scope.getBinding(u);
              d !== void 0 && (d.referencePaths.forEach((T) => {
                te(T, u, h);
              }), d.scope.removeOwnBinding(u));
            }
          );
        }
      }), { code: z(i).code };
    },
    async closeBundle(c) {
      if (c) {
        console.error("打包失败:", c);
        return;
      }
      if (t.version?.git !== void 0) {
        const p = process.env.RELEASE;
        if (p && t.version.git[p]) {
          const i = t.version.git[p];
          i.autoCommit && await q(i.needCommitMessage);
        }
      }
    }
  };
}
function ke(s) {
  return s;
}
function ee(s, o) {
  let t = l.identifier(o[0]);
  for (let a = 1; a < o.length; a++)
    t = l.memberExpression(t, l.identifier(o[a]));
  const e = l.variableDeclarator(
    l.identifier(s),
    t
  );
  return l.variableDeclaration("const", [e]);
}
function I(s) {
  if (w.parse(s).ext !== "") return s;
  for (const t of ["scss", "sass", "css"]) {
    const e = `${s}.${t}`;
    if (D(f(process.cwd(), e)))
      return e;
  }
  throw new Error(`can't find css module: ${s}`);
}
function te(s, o, t) {
  const e = s.parent;
  if (l.isMemberExpression(e) && e.object === s.node) {
    const a = e.property;
    if (l.isIdentifier(a)) {
      const n = P(t);
      if (!s.parentPath) return;
      s.parentPath.replaceWith(
        l.memberExpression(n, l.identifier(a.name))
      );
    }
    return;
  }
  if (s.isIdentifier()) {
    const a = P(t);
    s.replaceWith(
      l.memberExpression(a, l.identifier(o))
    );
  }
}
function P(s) {
  if (s.length === 0)
    throw new Error("globalObj must not be empty");
  let o = l.identifier(s[0]);
  for (let t = 1; t < s.length; t++)
    o = l.memberExpression(o, l.identifier(s[t]));
  return o;
}
async function _(s, o = null) {
  try {
    const t = Q.exec(s);
    if (!t?.groups) {
      R(`can't understand version: ${s}`);
      return;
    }
    let e = {
      major: parseInt(t.groups.major),
      minor: parseInt(t.groups.minor),
      patch: parseInt(t.groups.patch)
    };
    t.groups.preRelease && [
      ...t.groups.preRelease.matchAll(Y)
    ].forEach((b) => {
      b.groups && (e[b.groups.tag] = parseInt(b.groups.number));
    });
    const a = { ...e };
    switch (o) {
      case null:
        break;
      case void 0:
        break;
      case "major":
        e = {
          major: e.major + 1,
          minor: 0,
          patch: 0
        };
        break;
      case "minor":
        e = {
          major: e.major,
          minor: e.minor + 1,
          patch: 0
        };
        break;
      case "patch":
        e = {
          major: e.major,
          minor: e.minor,
          patch: e.patch + 1
        };
        break;
      case "rc":
        e.rc = (e.rc ?? 0) + 1, delete e.gamma, delete e.beta, delete e.preview, delete e.alpha, delete e.snapshot;
        break;
      case "gamma":
        e.gamma = (e.gamma ?? 0) + 1, delete e.beta, delete e.preview, delete e.alpha, delete e.snapshot;
        break;
      case "beta":
        e.beta = (e.beta ?? 0) + 1, delete e.preview, delete e.alpha, delete e.snapshot;
        break;
      case "preview":
        e.preview = (e.preview ?? 0) + 1, delete e.alpha, delete e.snapshot;
        break;
      case "alpha":
        e.alpha = (e.alpha ?? 0) + 1, delete e.snapshot;
        break;
      case "snapshot":
        e.snapshot = (e.snapshot ?? 0) + 1;
        break;
    }
    return {
      native: a,
      new: e,
      nativeString: s,
      newString: se(e)
    };
  } catch (t) {
    R(`can't bump version: ${t}`);
  }
}
function se(s) {
  let o = `${s.major}.${s.minor}.${s.patch}`;
  const t = ["rc", "gamma", "beta", "preview", "alpha", "snapshot"];
  let e = !1;
  for (const a of t) {
    const n = s[a];
    n != null && (e ? o += `.${a}.${n}` : (o += `-${a}.${n}`, e = !0));
  }
  return o;
}
function R(s, o) {
  C ? C.warn(y.yellow(`[MillenniumSkin] ${s}`), o) : console.warn(y.yellow(`[MillenniumSkin] ${s}`));
}
function k(s, o) {
  C ? C.info(y.greenBright(`[MillenniumSkin] ${s}`), o) : console.log(y.greenBright(`[MillenniumSkin] ${s}`));
}
function F(s, o) {
  C ? C.error(y.redBright(`[MillenniumSkin] ${s}`), o) : console.error(y.redBright(`[MillenniumSkin] ${s}`));
}
export {
  he as LibraryRoot,
  ve as MenuAccount,
  Me as MenuFriends,
  we as MenuGames,
  ye as MenuHelp,
  Te as MenuNotifications,
  be as MenuSteam,
  Ce as MenuView,
  de as Root,
  W as __AUTO__,
  X as __DEFAULT__,
  J as __DIRECT__,
  ge as __PACKAGE__,
  V as __RUNTIME__,
  $e as default,
  ke as defineConfig,
  F as error,
  k as info,
  R as warn
};
