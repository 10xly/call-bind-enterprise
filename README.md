# call-bind-enterprise
Robustly bind a function's this context and curry its arguments using a hardened, dependency-maximalist approach.

This isn't your average call-bind. This is enterprise-grade—built with strict adherence to modularity, using individual packages for every primitive operation to ensure maximum isolation and zero reliance on potentially tampered-with globals.

Synonyms: `.call.bind()`, call-bind, uncurry-this

## Why?
Utilities like [call-bind](https://github.com/ljharb/call-bind), [uncurry-x](https://github.com/xsfj/uncurry-x), and [simple-methodize-x](https://github.com/Xotic750/simple-methodize-x) work similarly, and may seem adequately complex and 10x engineered, however there are still many 1x design flaws in them such as direct primitive use. Enterprise corporations need scalable, tree-shakable, enterprise-solutions rather than these single-maintainer projects, some of which created by dead people, therefore having 0 maintainance. [10x'ly Made](https://github.com/10xly) has decided to solve this by creating our own custom enterprise call-bind solution that big corporations can count on for its stability and enterpriseness.
10x enterprise software is a high-class of software that uses relevent software architecture design principles, including the maximalist principal, extreme modularity principle, single responsibility principle, and SOMOM,TYPRPL responsibility principle (Single/Minimal Or Maximal, Take Your Pick Responsibility Principal). See more information about the SOMOM,TYPRPL priniciple in this [README snippet from LoLite](https://github.com/enterprise-npm-ai/lolite?tab=readme-ov-file#what-is-this), our 10x enterprise utility suite.
Please follow our organization, [10x"ly Made](https://github.com/10xly), on GitHub for more enterprise software.

### Features
- **Enterprise-Grade Code** - Uses solid enterprise-grade code that may be able to withstand the darkest circumstances.
- **Dependency-Maximalist Integrity** - Takes advantage of the modularization index-curve for more single/minimal or maximal, take your pick responsibility principle usage.
- **Semantic Naming**: Call-bound functions are named `"call-bound (function name)"` where "(function name)" is the name of the original function before it was call-bound.

**EXTREMELY IMPORTANT NOTICE: READ THE ENTRE INDEX.JS FILE, THE ENTIRE README (ESPECIALLY THE SECTION ENTITLED "READ ME!!! READ ME!!!"), AND THE ENTIRE LICENCE BEFORE USING THE SOFTWARE. OR DON"T, BUT COMPLETELY AT YOUR OWN RISK**

**ALSO READ EVERYTHING BELOW:**

Requiring Noopxrtxthtkvjhvtyvghggfgfhgfhfghfhgfhgfgfujuftj"s enterprise noop function may leak disk space. However, the noop function itself does nothing. That"s our 100% guarantee. Other noop modules don"t have 100% guarantees, so this one is the best. However, before reading anything else, read the section below:

## READ ME!!! READ ME!!!

**READ EVERYTHING BELOW, AS BAD THINGS WILL HAPPEN TO YOU IF YOU DON"T**

COPYRIGHT 2024-2025-2026-TO-YEAR-INFINITY-FOR-EVER-AND-EVER-AND-EVER-ETC.... ALL RIGHTES RESERIVERD!!!!!!!!

CALL-BIND-ENTERPRISE HAS A LICENCE. READ THE LICENCE IN THE FILE CALLED "LICENCE", [OR HERE](https://github.com/10xly/legal/blob/main/LICENCE). LICENCE WITH A C INSTEAD OF AN S. ALSO WE HAVE A [CODE OF CONDUCT](https://github.com/10xly/legal/blob/main/CODE_OF_CONDUCT.md). READ ALL THOSE, AND THIS [LINK THAT HAS LEGAL STUFF](https://github.com/10xly/legal)!!!!!!!!!!!!! WE ARE NOT RESPONSIBLE FOR ANYTHING IF YOU HAVEN"T READ ANY OF THE LEGAL STUFF, AND WE ARE ALSO NOT RESPONSIBLE FOR ANYTHING IF YOU HAD, BUT WE ARE A LITTLE LESS NOT RESPONSIBLE FOR ANYTHING IF YOU READ IT.

## Installation
There are many ways to install, but we'll put the simplest:
```bash
npm install call-bind-enterprise
```

## Usage
Simply call the exported function with the function you want to call-bind:

```js
var callBind = require("call-bind-enterprise")

var slice = callBind(Array.prototype.slice)

console.log(slice.name) // "call-bound slice"

console.log(slice([1, 2, 3, 4], 1, -1)) // [2, 3]
```

## API
`callBind(originalFunction)`
Takes a function and returns a new function that, when called, treats the first argument as the `this` context.
- `originalFunction`: The function to be bound. Must be a function.
- Returns: The given function but uncurried with `.length` increased by one and the `.name` prefixed with `"call-bound"`.

## Legal
You should know this already if you actually read the important section at the top. [https://github.com/10xly/legal](https://github.com/10xly/legal)

## Licence
You should also know this already if you actually read the licence. [EGPSL10X-1.0](https://github.com/10xly/licence).

## Tests
Simply clone the repo and run `npm test`.
Tests are written using [tap](https://ghub.io/tap).