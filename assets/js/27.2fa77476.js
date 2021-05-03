(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{413:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[t._v("#")]),t._v(" Validator")]),t._v(" "),s("h2",{attrs:{id:"what-is-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-validator"}},[t._v("#")]),t._v(" What is Validator?")]),t._v(" "),s("p",[t._v("Validator is a full node that participates in the consensus mechanism by broadcasting its votes.\nValidators get rewards for proposing a new blocks. Validators should bond tokens in form of stake\nand they are weighted by their boned stakes.")]),t._v(" "),s("h2",{attrs:{id:"validator-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validator-structure"}},[t._v("#")]),t._v(" Validator structure")]),t._v(" "),s("p",[t._v("Validator structure is used to hold the public key, stake and number of validator.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Validator "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   PublicKey       PublicKey "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"1,keyasint"`')]),t._v("\n   Number          "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"2,keyasint"`')]),t._v("\n   Sequence        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"3,keyasint"`')]),t._v("\n   Stake           "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"4,keyasint"`')]),t._v("\n   BondingHeight   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"5,keyasint"`')]),t._v("\n   UnbondingHeight "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"6,keyasint"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("It serialized like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A6015860DFF46FBCE5AE1BA4837DE551206176C0A74DEB5DFCA803228F570F7C9BA093EA109700559B72FE1D385492F0D5A10F17A4CEC41EB2E552F51E1F7F48AB311D4E195B1563C1FCBA8EE201173E4E6362CABEDACCEE541F9EFC9C4140D9FB268102021901B4031902F7041A2AF78F210514061864\n")])])]),s("p",[t._v("Which can be interpreted like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n    1: h'DFF46FBCE5AE1BA4837DE551206176C0A74DEB5DFCA803228F570F7C9BA093EA109700559B72FE1D385492F0D5A10F17A4CEC41EB2E552F51E1F7F48AB311D4E195B1563C1FCBA8EE201173E4E6362CABEDACCEE541F9EFC9C4140D9FB268102',\n    2: 436,\n    3: 759,\n    4: 720867105,\n    5: 20,\n    6: 100\n}\n")])])]),s("p",[t._v("Comment:")]),t._v(" "),s("ul",[s("li",[t._v("Keys are fixed.")]),t._v(" "),s("li",[t._v("int64 is enough for holding balance")]),t._v(" "),s("li",[t._v("To generate hash we are using the cbor serialized data. For above example hash is:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Hash: 24118cc654fdc5333c222b40a932fccf0a058e3c0045a1e34d9298df4c128fba\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);