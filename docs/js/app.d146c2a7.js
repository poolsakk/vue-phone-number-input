(function(a){function e(e){for(var t,o,u=e[0],s=e[1],l=e[2],d=0,m=[];d<u.length;d++)o=u[d],i[o]&&m.push(i[o][0]),i[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var a,e=0;e<r.length;e++){for(var n=r[e],t=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(t=!1)}t&&(r.splice(e--,1),a=o(o.s=n[0]))}return a}var t={},i={app:0},r=[];function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=a,o.c=t,o.d=function(a,e,n){o.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,e){if(1&e&&(a=o(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)o.d(n,t,function(e){return a[e]}.bind(null,t));return n},o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,"a",e),e},o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(a,e,n){a.exports=n("56d7")},"0dfe":function(a,e,n){},"428c":function(a,e,n){},"56d7":function(a,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var t=n("2b0e"),i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[a._v("VuePhoneNumberInput")]),n("VuePhoneNumberInput",{model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)},r=[],o=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"vue-phone-number-input flex"},[n("div",{staticClass:"select-country-container"},[n("SelectCountry",{attrs:{items:a.codesCountries,label:"Country Code"},model:{value:a.codeCountry,callback:function(e){a.codeCountry=e},expression:"codeCountry"}})],1),n("div",{staticClass:"flex-1"},[n("VueInputUI",{staticClass:"input-text-phone",attrs:{label:"Phone number",error:!a.numberIsValid,hint:a.codeCountry?a.phoneNumberHint:"Choose country"},model:{value:a.phoneNumber,callback:function(e){a.phoneNumber=e},expression:"phoneNumber"}})],1)])},u=[],s=n("a4bb"),l=n.n(s),c=(n("28a5"),[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]]),d=c.map(function(a){return{name:a[0],iso2:a[1].toUpperCase(),dialCode:a[2],priority:a[3]||0,areaCodes:a[4]||null}}),m=n("3e84"),p=n("42c6"),f=n.n(p),b=(n("f71a"),function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{ref:"parent",staticClass:"field country-selector",class:[{"is-focused":a.isFocus,"has-value":a.value,"has-error":a.error,"is-disabled":a.disabled,"is-dark":a.dark}],on:{click:a.focusInput}},[a.value?t("div",{staticClass:"flag-container field-country-flag"},[t("img",{class:"flag-small flag flag-"+a.value.toLowerCase(),attrs:{alt:a.value.toLowerCase(),src:n("7184")}})]):a._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:a.selectedCountry,expression:"selectedCountry"}],ref:"CountrySelector",staticClass:"field-input",style:[a.borderStyle],attrs:{id:a.id,placeholder:a.label,disabled:a.disabled,readonly:""},domProps:{value:a.selectedCountry},on:{focus:a.onFocus,blur:a.onBlur,click:function(e){a.$emit("click")},input:function(e){e.target.composing||(a.selectedCountry=e.target.value)}}}),t("label",{ref:"label",staticClass:"field-label",class:a.error?"text-danger":null,style:[a.colorStyle],attrs:{for:a.id},on:{click:a.focusInput}},[a._v("\n    "+a._s(a.hint||a.label)+"\n  ")]),t("div",{staticClass:"country-list"},a._l(a.items,function(e){return t("div",{key:e.code,staticClass:"flex country-list-item",class:{selected:a.value===e.iso2},on:{click:function(n){n.stopPropagation(),a.updateValue(e.iso2)}}},[t("div",{staticClass:"flag-container mr-2"},[t("img",{class:"flag-small flag flag-"+e.iso2.toLowerCase(),attrs:{alt:e.iso2,src:n("7184")}})]),t("div",[a._v("\n        "+a._s(e.iso2)+" - "),t("b",[a._v(a._s(e.name))])])])}),0)])}),h=[],g=(n("7f7f"),{name:"CountrySelector",props:{value:{type:[String,Object],required:!1,default:null},label:{type:String,default:"Enter text"},hint:{type:String,default:String},error:{type:Boolean,default:Boolean},color:{type:String,default:"dodgerblue"},disabled:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},id:{type:String,default:"CountrySelector"},items:{type:Array,default:Array,required:!0}},data:function(){return{isFocus:!1}},computed:{borderStyle:function(){var a=this.isFocus&&!this.error;return a?{border:"1px solid ".concat(this.color," !important")}:null},colorStyle:function(){var a=this.isFocus;return a?{color:"".concat(this.color)}:null},selectedCountry:function(){var a=this;return this.items.filter(function(e){return e.iso2===a.value}).map(function(a){return a.name})[0]}},methods:{focusInput:function(){this.$refs.CountrySelector.focus()},onFocus:function(){this.$emit("focus"),this.isFocus=!0},onBlur:function(){this.$emit("blur"),this.isFocus=!1},updateValue:function(a){this.$emit("input",a||this.value)}}}),y=g,v=(n("a48d"),n("2877")),C=Object(v["a"])(y,b,h,!1,null,"a0a0f470",null);C.options.__file="CountrySelector.vue";var S=C.exports,k={name:"VuePhoneNumberInput",components:{VueInputUI:f.a,SelectCountry:S},props:{value:{type:Object,default:Object}},data:function(){return{phoneNumberHint:"",formatter:null,numberIsValid:!0}},created:function(){this.formatter=new m["a"](this.codeCountry)},computed:{codeCountry:{get:function(){return this.value.code},set:function(a){this.$emit("input",{phoneNumber:this.phoneNumber,code:a})}},codesCountries:function(){return d},phoneNumber:{get:function(){return this.value.phoneNumber},set:function(a){this.$emit("input",{phoneNumber:a,code:this.codeCountry})}}},methods:{resetFormatNumber:function(a){var e,n=this;this.formatter.reset();var t=a.split("");return t.map(function(a){e=n.formatter.input(a)}),e},updateFormatNumber:function(a){return this.formatter.input(a.slice(-1))},updateNumberAfterChangeCountry:function(a){this.formatNumberLogic(this.resetFormatNumber(a),this.phoneNumber)},formatNumberLogic:function(a,e){var n=Object(m["d"])(e,this.codeCountry);l()(n).length?(this.numberIsValid=Object(m["c"])(n),this.numberIsValid&&(this.$emit("update-phone",{val:Object(m["b"])(n.phone,this.codeCountry,"International"),isValid:!0}),this.phoneNumberHint=Object(m["b"])(n.phone,this.codeCountry,"International"))):e.length?(this.$emit("update-phone",{val:this.phoneNumber,isValid:!1}),this.phoneNumberHint=Object(m["b"])(e,this.codeCountry,"International"),this.numberIsValid=!1):(this.$emit("update-phone",{val:null,isValid:!1}),this.phoneNumberHint="",this.numberIsValid=!0)}}},A=k,N=(n("9957"),Object(v["a"])(A,o,u,!1,null,null,null));N.options.__file="index.vue";var I=N.exports,M={name:"App",components:{VuePhoneNumberInput:I},data:function(){return{value:{code:"FR",phoneNumber:"0658584729"}}}},w=M,B=(n("a204"),Object(v["a"])(w,i,r,!1,null,"2e0534ad",null));B.options.__file="App.vue";var j=B.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(a){return a(j)}}).$mount("#app")},"5d19":function(a,e,n){},7184:function(a,e){a.exports="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAgFAAEkCwgAOw=="},9957:function(a,e,n){"use strict";var t=n("0dfe"),i=n.n(t);i.a},a204:function(a,e,n){"use strict";var t=n("428c"),i=n.n(t);i.a},a48d:function(a,e,n){"use strict";var t=n("5d19"),i=n.n(t);i.a}});
//# sourceMappingURL=app.d146c2a7.js.map