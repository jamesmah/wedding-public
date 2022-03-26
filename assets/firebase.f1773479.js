/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ya=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,h=i+2<e.length,c=h?e[i+2]:0,u=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;h||(m=64,o||(p=64)),s.push(n[u],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ya(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw Error();const p=r<<2|a>>4;if(s.push(p),c!==64){const m=a<<4&240|c>>2;if(s.push(m),l!==64){const y=c<<6&192|l;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Qa=function(e){const t=_i(e);return Ni.encodeByteArray(t,!0)},ki=function(e){return Qa(e).replace(/\./g,"")},yf=function(e){try{return Ni.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Za(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function th(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function eh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nh(){return qe().indexOf("Electron/")>=0}function sh(){const e=qe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ih(){return qe().indexOf("MSAppHost/")>=0}function rh(){return typeof indexedDB=="object"}function oh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="FirebaseError";class je extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=ah,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?hh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new je(i,a,s)}}function hh(e,t){return e.replace(ch,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const ch=/\{\$([^}]+)}/g;function vf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(xi(r)&&xi(o)){if(!qn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function xi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ef(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Tf(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function If(e,t){const n=new uh(e,t);return n.subscribe.bind(n)}class uh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lh(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=jn),i.error===void 0&&(i.error=jn),i.complete===void 0&&(i.complete=jn);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lh(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function jn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){return new Promise((n,s)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;s(`${t}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class Oi{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new Mi(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Li(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Mi{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Li(this._transaction.objectStore(t))}}class Li{constructor(t){this._store=t}index(t){return new Fi(this._store.index(t))}createIndex(t,n,s){return new Fi(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return se(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return se(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return se(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return se(t,"Error clearing IndexedDB object store")}}class Fi{constructor(t){this._index=t}get(t){const n=this._index.get(t);return se(n,"Error reading from IndexedDB")}}function dh(e,t,n){return new Promise((s,i)=>{try{const r=indexedDB.open(e,t);r.onsuccess=o=>{s(new Oi(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new Oi(r.result),o.oldVersion,o.newVersion,new Mi(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class ie{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ja;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gh(t))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=yt){return this.instances.has(t)}getOptions(t=yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ph(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=yt){return this.component?this.component.multipleInstances?t:yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(e){return e===yt?void 0:e}function gh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const yh={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},vh=D.INFO,wh={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Eh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=wh[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pi{constructor(t){this.name=t,this._logLevel=vh,this._logHandler=Eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ih(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ih(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hn="@firebase/app",Vi="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Pi("@firebase/app"),Sh="@firebase/app-compat",bh="@firebase/analytics-compat",Ch="@firebase/analytics",Ah="@firebase/app-check-compat",Dh="@firebase/app-check",_h="@firebase/auth",Nh="@firebase/auth-compat",kh="@firebase/database",Rh="@firebase/database-compat",xh="@firebase/functions",Oh="@firebase/functions-compat",Mh="@firebase/installations",Lh="@firebase/installations-compat",Fh="@firebase/messaging",Ph="@firebase/messaging-compat",Vh="@firebase/performance",Uh="@firebase/performance-compat",$h="@firebase/remote-config",Bh="@firebase/remote-config-compat",qh="@firebase/storage",jh="@firebase/storage-compat",Hh="@firebase/firestore",Kh="@firebase/firestore-compat",zh="firebase",Gh="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]",Wh={[Hn]:"fire-core",[Sh]:"fire-core-compat",[Ch]:"fire-analytics",[bh]:"fire-analytics-compat",[Dh]:"fire-app-check",[Ah]:"fire-app-check-compat",[_h]:"fire-auth",[Nh]:"fire-auth-compat",[kh]:"fire-rtdb",[Rh]:"fire-rtdb-compat",[xh]:"fire-fn",[Oh]:"fire-fn-compat",[Mh]:"fire-iid",[Lh]:"fire-iid-compat",[Fh]:"fire-fcm",[Ph]:"fire-fcm-compat",[Vh]:"fire-perf",[Uh]:"fire-perf-compat",[$h]:"fire-rc",[Bh]:"fire-rc-compat",[qh]:"fire-gcs",[jh]:"fire-gcs-compat",[Hh]:"fire-fst",[Kh]:"fire-fst-compat","fire-js":"fire-js",[zh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Map,zn=new Map;function Xh(e,t){try{e.container.addComponent(t)}catch(n){Kn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ke(e){const t=e.name;if(zn.has(t))return Kn.debug(`There were multiple attempts to register component ${t}.`),!1;zn.set(t,e);for(const n of He.values())Xh(n,e);return!0}function Yh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},vt=new Ri("app","Firebase",Qh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=Gh;function tc(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ui,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});const i=He.get(s);if(i){if(qn(e,i.options)&&qn(n,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const r=new mh(s);for(const a of zn.values())r.addComponent(a);const o=new Jh(e,n,r);return He.set(s,o),o}function ec(e=Ui){const t=He.get(e);if(!t)throw vt.create("no-app",{appName:e});return t}function xt(e,t,n){var s;let i=(s=Wh[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Ke(new ie(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="firebase-heartbeat-database",sc=1,re="firebase-heartbeat-store";let Gn=null;function $i(){return Gn||(Gn=dh(nc,sc,(e,t)=>{switch(t){case 0:e.createObjectStore(re)}}).catch(e=>{throw vt.create("storage-open",{originalErrorMessage:e.message})})),Gn}async function ic(e){try{return(await $i()).transaction(re).objectStore(re).get(qi(e))}catch(t){throw vt.create("storage-get",{originalErrorMessage:t.message})}}async function Bi(e,t){try{const s=(await $i()).transaction(re,"readwrite");return await s.objectStore(re).put(t,qi(e)),s.complete}catch(n){throw vt.create("storage-set",{originalErrorMessage:n.message})}}function qi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=1024,oc=30*24*60*60*1e3;class ac{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ji();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=oc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ji(),{heartbeatsToSend:n,unsentEntries:s}=hc(this._heartbeatsCache.heartbeats),i=ki(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ji(){return new Date().toISOString().substring(0,10)}function hc(e,t=rc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Hi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rh()?oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ic(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Hi(e){return ki(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e){Ke(new ie("platform-logger",t=>new Th(t),"PRIVATE")),Ke(new ie("heartbeat",t=>new ac(t),"PRIVATE")),xt(Hn,Vi,e),xt(Hn,Vi,"esm2017"),xt("fire-js","")}uc("");var lc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Wn=Wn||{},T=lc||self;function ze(){}function Xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function oe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function dc(e){return Object.prototype.hasOwnProperty.call(e,Yn)&&e[Yn]||(e[Yn]=++fc)}var Yn="closure_uid_"+(1e9*Math.random()>>>0),fc=0;function pc(e,t,n){return e.call.apply(e.bind,arguments)}function gc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=pc:$=gc,$.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function B(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ut(){this.s=this.s,this.o=this.o}var mc=0,yc={};ut.prototype.s=!1;ut.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),mc!=0)){var e=dc(this);delete yc[e]}};ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ki=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},zi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function vc(e){t:{var t=cu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Gi(e){return Array.prototype.concat.apply([],arguments)}function Qn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function We(e){return/^[\s\xa0]*$/.test(e)}var Wi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Jn(e,t){return e<t?-1:e>t?1:0}var X;t:{var Xi=T.navigator;if(Xi){var Yi=Xi.userAgent;if(Yi){X=Yi;break t}}X=""}function Zn(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Qi(e){const t={};for(const n in e)t[n]=e[n];return t}var Ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zi(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ji.length;r++)n=Ji[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ts(e){return ts[" "](e),e}ts[" "]=ze;function wc(e){var t=Ic;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ec=W(X,"Opera"),Ot=W(X,"Trident")||W(X,"MSIE"),tr=W(X,"Edge"),es=tr||Ot,er=W(X,"Gecko")&&!(W(X.toLowerCase(),"webkit")&&!W(X,"Edge"))&&!(W(X,"Trident")||W(X,"MSIE"))&&!W(X,"Edge"),Tc=W(X.toLowerCase(),"webkit")&&!W(X,"Edge");function nr(){var e=T.document;return e?e.documentMode:void 0}var Xe;t:{var ns="",ss=function(){var e=X;if(er)return/rv:([^\);]+)(\)|;)/.exec(e);if(tr)return/Edge\/([\d\.]+)/.exec(e);if(Ot)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Tc)return/WebKit\/(\S+)/.exec(e);if(Ec)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ss&&(ns=ss?ss[1]:""),Ot){var is=nr();if(is!=null&&is>parseFloat(ns)){Xe=String(is);break t}}Xe=ns}var Ic={};function Sc(){return wc(function(){let e=0;const t=Wi(String(Xe)).split("."),n=Wi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Jn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Jn(i[2].length==0,r[2].length==0)||Jn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var rs;if(T.document&&Ot){var sr=nr();rs=sr||parseInt(Xe,10)||void 0}else rs=void 0;var bc=rs,Cc=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",ze,t),T.removeEventListener("test",ze,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function ae(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(er){t:{try{ts(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ac[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ae.Z.h.call(this)}}B(ae,z);var Ac={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Dc=0;function _c(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Dc,this.ca=this.fa=!1}function Ye(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Qe(e){this.src=e,this.g={},this.h=0}Qe.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=as(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new _c(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function os(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Ki(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ye(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function as(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var hs="closure_lm_"+(1e6*Math.random()|0),cs={};function ir(e,t,n,s,i){if(s&&s.once)return or(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ir(e,t[r],n,s,i);return null}return n=fs(n),e&&e[he]?e.N(t,n,oe(s)?!!s.capture:!!s,i):rr(e,t,n,!1,s,i)}function rr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=oe(i)?!!i.capture:!!i,a=ls(e);if(a||(e[hs]=a=new Qe(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Nc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Cc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(hr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nc(){function e(n){return t.call(e.src,e.listener,n)}var t=kc;return e}function or(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)or(e,t[r],n,s,i);return null}return n=fs(n),e&&e[he]?e.O(t,n,oe(s)?!!s.capture:!!s,i):rr(e,t,n,!0,s,i)}function ar(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)ar(e,t[r],n,s,i);else s=oe(s)?!!s.capture:!!s,n=fs(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=as(r,n,s,i),-1<n&&(Ye(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=as(t,n,s,i)),(n=-1<e?t[e]:null)&&us(n))}function us(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[he])os(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(hr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ls(t))?(os(n,e),n.h==0&&(n.src=null,t[hs]=null)):Ye(e)}}}function hr(e){return e in cs?cs[e]:cs[e]="on"+e}function kc(e,t){if(e.ca)e=!0;else{t=new ae(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&us(e),e=n.call(s,t)}return e}function ls(e){return e=e[hs],e instanceof Qe?e:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function fs(e){return typeof e=="function"?e:(e[ds]||(e[ds]=function(t){return e.handleEvent(t)}),e[ds])}function P(){ut.call(this),this.i=new Qe(this),this.P=this,this.I=null}B(P,ut);P.prototype[he]=!0;P.prototype.removeEventListener=function(e,t,n,s){ar(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),Zi(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Je(o,s,!0,t)&&i}if(o=t.g=e,i=Je(o,s,!0,t)&&i,i=Je(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Je(o,s,!1,t)&&i}P.prototype.M=function(){if(P.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ye(n[s]);delete e.g[t],e.h--}}this.I=null};P.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};P.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Je(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&os(e.i,o),i=a.call(h,s)!==!1&&i}}return i&&!s.defaultPrevented}var ps=T.JSON.stringify;function Rc(){var e=ur;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xc{constructor(){this.h=this.g=null}add(t,n){const s=cr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var cr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Oc,e=>e.reset());class Oc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mc(e){T.setTimeout(()=>{throw e},0)}function gs(e,t){ms||Lc(),ys||(ms(),ys=!0),ur.add(e,t)}var ms;function Lc(){var e=T.Promise.resolve(void 0);ms=function(){e.then(Fc)}}var ys=!1,ur=new xc;function Fc(){for(var e;e=Rc();){try{e.h.call(e.g)}catch(n){Mc(n)}var t=cr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ys=!1}function Ze(e,t){P.call(this),this.h=e||1,this.g=t||T,this.j=$(this.kb,this),this.l=Date.now()}B(Ze,P);g=Ze.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(vs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Ze.Z.M.call(this),vs(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function lr(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,lr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Pc extends ut{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:lr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){ut.call(this),this.h=e,this.g={}}B(ce,ut);var dr=[];function fr(e,t,n,s){Array.isArray(n)||(n&&(dr[0]=n.toString()),n=dr);for(var i=0;i<n.length;i++){var r=ir(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function pr(e){Zn(e.g,function(t,n){this.g.hasOwnProperty(n)&&us(t)},e),e.g={}}ce.prototype.M=function(){ce.Z.M.call(this),pr(this)};ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tn(){this.g=!0}tn.prototype.Aa=function(){this.g=!1};function Vc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Uc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Bc(e,n)+(s?" "+s:"")})}function $c(e,t){e.info(function(){return"TIMEOUT: "+t})}tn.prototype.info=function(){};function Bc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ps(n)}catch{return t}}var wt={},gr=null;function en(){return gr=gr||new P}wt.Ma="serverreachability";function mr(e){z.call(this,wt.Ma,e)}B(mr,z);function ue(e){const t=en();q(t,new mr(t,e))}wt.STAT_EVENT="statevent";function yr(e,t){z.call(this,wt.STAT_EVENT,e),this.stat=t}B(yr,z);function Y(e){const t=en();q(t,new yr(t,e))}wt.Na="timingevent";function vr(e,t){z.call(this,wt.Na,e),this.size=t}B(vr,z);function le(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var nn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},wr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Es(){}Es.prototype.h=null;function Er(e){return e.h||(e.h=e.i())}function Tr(){}var de={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ts(){z.call(this,"d")}B(Ts,z);function Is(){z.call(this,"c")}B(Is,z);var Ss;function sn(){}B(sn,Es);sn.prototype.g=function(){return new XMLHttpRequest};sn.prototype.i=function(){return{}};Ss=new sn;function fe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ce(this),this.P=qc,e=es?125:void 0,this.W=new Ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ir}function Ir(){this.i=null,this.g="",this.h=!1}var qc=45e3,bs={},rn={};g=fe.prototype;g.setTimeout=function(e){this.P=e};function Cs(e,t,n){e.K=1,e.v=un(at(t)),e.s=n,e.U=!0,Sr(e,null)}function Sr(e,t){e.F=Date.now(),pe(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),xr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Ir,e.g=eo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Pc($(e.Ia,e,e.g),e.O)),fr(e.V,e.g,"readystatechange",e.gb),t=e.H?Qi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ue(1),Vc(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ht(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||es||this.g&&(this.h.h||this.g.ga()||Hr(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?ue(3):ue(2)),on(this);var n=this.g.ba();this.N=n;e:if(br(this)){var s=Hr(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),ge(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Uc(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!We(a)){var c=a;break e}}c=null}if(n=c)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,As(this,n);else{this.i=!1,this.o=3,Y(12),Et(this),ge(this);break t}}this.U?(Cr(this,u,o),es&&this.i&&u==3&&(fr(this.V,this.W,"tick",this.fb),this.W.start())):(Mt(this.j,this.m,o,null),As(this,o)),u==4&&Et(this),this.i&&!this.I&&(u==4?Qr(this.l,this):(this.i=!1,pe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Et(this),ge(this)}}}catch{}finally{}};function br(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Cr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=jc(e,n),i==rn){t==4&&(e.o=4,Y(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==bs){e.o=4,Y(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),As(e,i);br(e)&&i!=rn&&i!=bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ps(t),t.L=!0,Y(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),ge(e))}g.fb=function(){if(this.g){var e=ht(this.g),t=this.g.ga();this.C<t.length&&(on(this),Cr(this,e,t),this.i&&e!=4&&pe(this))}};function jc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?rn:(n=Number(t.substring(n,s)),isNaN(n)?bs:(s+=1,s+n>t.length?rn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Et(this)};function pe(e){e.Y=Date.now()+e.P,Ar(e,e.P)}function Ar(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=le($(e.eb,e),t)}function on(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?($c(this.j,this.A),this.K!=2&&(ue(3),Y(17)),Et(this),this.o=2,ge(this)):Ar(this,this.Y-e)};function ge(e){e.l.G==0||e.I||Qr(e.l,e)}function Et(e){on(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,vs(e.W),pr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function As(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ns(n.i,e))){if(n.I=e.N,!e.J&&Ns(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)mn(n),pn(n);else break t;Fs(n),Y(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=le($(n.ab,n),6e3));if(1>=Lr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else St(n,11)}else if((e.J||n.g==e)&&mn(n),!We(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(W(y,"spdy")||W(y,"quic")||W(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ks(r,r.h),r.h=null))}if(s.D){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.sa=A,O(s.F,s.D,A))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=to(s,s.H?s.la:null,s.W),o.J){Fr(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(on(a),pe(a)),s.g=o}else Xr(s);0<n.l.length&&gn(n)}else c[0]!="stop"&&c[0]!="close"||St(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?St(n,7):Ms(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ue(4)}catch{}}function Hc(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Xn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ds(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xn(e)||typeof e=="string")zi(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Xn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Hc(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Lt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Lt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Lt.prototype;g.R=function(){_s(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return _s(this),this.g.concat()};function _s(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Tt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Tt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Tt(this.h,e)?this.h[e]:t};g.set=function(e,t){Tt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Dr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof It){this.g=t!==void 0?t:e.g,an(this,e.j),this.s=e.s,hn(this,e.i),cn(this,e.m),this.l=e.l,t=e.h;var n=new ve;n.i=t.i,t.g&&(n.g=new Lt(t.g),n.h=t.h),_r(this,n),this.o=e.o}else e&&(n=String(e).match(Dr))?(this.g=!!t,an(this,n[1]||"",!0),this.s=me(n[2]||""),hn(this,n[3]||"",!0),cn(this,n[4]),this.l=me(n[5]||"",!0),_r(this,n[6]||"",!0),this.o=me(n[7]||"")):(this.g=!!t,this.h=new ve(null,this.g))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ye(t,Nr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ye(t,Nr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ye(n,n.charAt(0)=="/"?Yc:Xc,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ye(n,Jc)),e.join("")};function at(e){return new It(e)}function an(e,t,n){e.j=n?me(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hn(e,t,n){e.i=n?me(t,!0):t}function cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _r(e,t,n){t instanceof ve?(e.h=t,Zc(e.h,e.g)):(n||(t=ye(t,Qc)),e.h=new ve(t,e.g))}function O(e,t,n){e.h.set(t,n)}function un(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zc(e){return e instanceof It?at(e):new It(e,void 0)}function Gc(e,t,n,s){var i=new It(null,void 0);return e&&an(i,e),t&&hn(i,t),n&&cn(i,n),s&&(i.l=s),i}function me(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ye(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Wc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Nr=/[#\/\?@]/g,Xc=/[#\?:]/g,Yc=/[#\?]/g,Qc=/[#\?@]/g,Jc=/#/g;function ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lt(e){e.g||(e.g=new Lt,e.h=0,e.i&&Kc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ve.prototype;g.add=function(e,t){lt(this),this.i=null,e=Ft(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function kr(e,t){lt(e),t=Ft(e,t),Tt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Tt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&_s(e)))}function Rr(e,t){return lt(e),t=Ft(e,t),Tt(e.g.h,t)}g.forEach=function(e,t){lt(this),this.g.forEach(function(n,s){zi(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){lt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){lt(this);var t=[];if(typeof e=="string")Rr(this,e)&&(t=Gi(t,this.g.get(Ft(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Gi(t,e[n])}return t};g.set=function(e,t){return lt(this),this.i=null,e=Ft(this,e),Rr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function xr(e,t,n){kr(e,t),0<n.length&&(e.i=null,e.g.set(Ft(e,t),Qn(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Ft(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Zc(e,t){t&&!e.j&&(lt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(kr(this,s),xr(this,i,n))},e)),e.j=t}var tu=class{constructor(e,t){this.h=e,this.g=t}};function Or(e){this.l=e||eu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eu=10;function Mr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lr(e){return e.h?1:e.g?e.g.size:0}function Ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ks(e,t){e.g?e.g.add(t):e.h=t}function Fr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Or.prototype.cancel=function(){if(this.i=Pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qn(e.i)}function Rs(){}Rs.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Rs.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function nu(){this.g=new Rs}function su(e,t,n){const s=n||"";try{Ds(e,function(i,r){let o=i;oe(i)&&(o=ps(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function iu(e,t){const n=new tn;if(T.Image){const s=new Image;s.onload=Ge(ln,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ge(ln,n,s,"TestLoadImage: error",!1,t),s.onabort=Ge(ln,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ge(ln,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ln(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function we(e){this.l=e.$b||null,this.j=e.ib||!1}B(we,Es);we.prototype.g=function(){return new dn(this.l,this.j)};we.prototype.i=function(e){return function(){return e}}({});function dn(e,t){P.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(dn,P);var xs=0;g=dn.prototype;g.open=function(e,t){if(this.readyState!=xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Te(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ee(this)),this.readyState=xs};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Te(this)),this.g&&(this.readyState=3,Te(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Vr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ee(this):Te(this),this.readyState==3&&Vr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Ee(this))};g.Ta=function(e){this.g&&(this.response=e,Ee(this))};g.ha=function(){this.g&&Ee(this)};function Ee(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Te(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Te(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ru=T.JSON.parse;function M(e){P.call(this),this.headers=new Lt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ur,this.K=this.L=!1}B(M,P);var Ur="",ou=/^https?$/i,au=["POST","PUT"];g=M.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ss.g(),this.C=this.u?Er(this.u):Er(Ss),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){$r(this,r);return}e=n||"";const i=new Lt(this.headers);s&&Ds(s,function(r,o){i.set(o,r)}),s=vc(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Ki(au,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jr(this),0<this.B&&((this.K=hu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=ws(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){$r(this,r)}};function hu(e){return Ot&&Sc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function cu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Wn!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function $r(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Br(e),fn(e)}function Br(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),fn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fn(this,!0)),M.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?qr(this):this.cb())};g.cb=function(){qr(this)};function qr(e){if(e.h&&typeof Wn!="undefined"&&(!e.C[1]||ht(e)!=4||e.ba()!=2)){if(e.v&&ht(e)==4)ws(e.Fa,0,e);else if(q(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Dr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!ou.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Br(e)}}finally{fn(e)}}}}function fn(e,t){if(e.g){jr(e);const n=e.g,s=e.C[0]?ze:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function jr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ru(t)}};function Hr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ur:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function uu(e){let t="";return Zn(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Os(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=uu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kr(e){this.za=0,this.l=[],this.h=new tn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ie("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ie("baseRetryDelayMs",5e3,e),this.$a=Ie("retryDelaySeedMs",1e4,e),this.Ya=Ie("forwardChannelMaxRetries",2,e),this.ra=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Or(e&&e.concurrentRequestLimit),this.Ca=new nu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Kr.prototype;g.ma=8;g.G=1;function Ms(e){if(zr(e),e.G==3){var t=e.V++,n=at(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),Se(e,n),t=new fe(e,e.h,t,void 0),t.K=2,t.v=un(at(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=eo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),pe(t)}Zr(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function pn(e){e.g&&(Ps(e),e.g.cancel(),e.g=null)}function zr(e){pn(e),e.u&&(T.clearTimeout(e.u),e.u=null),mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Ls(e,t){e.l.push(new tu(e.Za++,t)),e.G==3&&gn(e)}function gn(e){Mr(e.i)||e.m||(e.m=!0,gs(e.Ha,e),e.C=0)}function lu(e,t){return Lr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=le($(e.Ha,e,t),Jr(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new fe(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=Qi(r),Zi(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Wr(this,i,t),n=at(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Se(this,n),this.o&&r&&Os(n,this.o,r),ks(this.i,i),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),i.$=!0,Cs(i,n,null)):Cs(i,n,t),this.G=2}}else this.G==3&&(e?Gr(this,e):this.l.length==0||Mr(this.i)||Gr(this))};function Gr(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),Se(e,s),e.o&&e.s&&Os(s,e.o,e.s),n=new fe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Wr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ks(e.i,n),Cs(n,s,t)}function Se(e,t){e.j&&Ds({},function(n,s){O(t,s,n)})}function Wr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=i[h].h;const u=i[h].g;if(c-=r,0>c)r=Math.max(0,i[h].h-100),a=!1;else try{su(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Xr(e){e.g||e.u||(e.Y=1,gs(e.Ga,e),e.A=0)}function Fs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=le($(e.Ga,e),Jr(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Yr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=le($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Y(10),pn(this),Yr(this))};function Ps(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Yr(e){e.g=new fe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),Se(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Os(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=un(at(t)),n.s=null,n.U=!0,Sr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,pn(this),Fs(this),Y(19))};function mn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Qr(e,t){var n=null;if(e.g==t){mn(e),Ps(e),e.g=null;var s=2}else if(Ns(e.i,t))n=t.D,Fr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=en(),q(s,new vr(s,n,t,i)),gn(e)}else Xr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&lu(e,t)||s==2&&Fs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:St(e,5);break;case 4:St(e,10);break;case 3:St(e,6);break;default:St(e,2)}}}function Jr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function St(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||an(n,"https"),un(n)),iu(n.toString(),s)}else Y(2);e.G=0,e.j&&e.j.va(t),Zr(e),zr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Y(2)):(this.h.info("Failed to ping google.com"),Y(1))};function Zr(e){e.G=0,e.I=-1,e.j&&((Pr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Qn(e.l),e.l.length=0),e.j.ua())}function to(e,t,n){let s=zc(n);if(s.i!="")t&&hn(s,t+"."+s.i),cn(s,s.m);else{const i=T.location;s=Gc(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Zn(e.aa,function(i,r){O(s,r,i)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),Se(e,s),s}function eo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new M(new we({ib:!0})):new M(e.qa),t.L=e.H,t}function no(){}g=no.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function yn(){if(Ot&&!(10<=Number(bc)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){P.call(this),this.g=new Kr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!We(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!We(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pt(this)}B(nt,P);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),gs($(e.hb,e,t))),Y(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=to(e,null,e.W),gn(e)};nt.prototype.close=function(){Ms(this.g)};nt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ls(this.g,t)}else this.v?(t={},t.__data__=ps(e),Ls(this.g,t)):Ls(this.g,e)};nt.prototype.M=function(){this.g.j=null,delete this.j,Ms(this.g),delete this.g,nt.Z.M.call(this)};function so(e){Ts.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}B(so,Ts);function io(){Is.call(this),this.status=1}B(io,Is);function Pt(e){this.g=e}B(Pt,no);Pt.prototype.xa=function(){q(this.g,"a")};Pt.prototype.wa=function(e){q(this.g,new so(e))};Pt.prototype.va=function(e){q(this.g,new io(e))};Pt.prototype.ua=function(){q(this.g,"b")};yn.prototype.createWebChannel=yn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;nn.NO_ERROR=0;nn.TIMEOUT=8;nn.HTTP_ERROR=6;wr.COMPLETE="complete";Tr.EventType=de;de.OPEN="a";de.CLOSE="b";de.ERROR="c";de.MESSAGE="d";P.prototype.listen=P.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.La;M.prototype.getLastErrorCode=M.prototype.Da;M.prototype.getStatus=M.prototype.ba;M.prototype.getResponseJson=M.prototype.Qa;M.prototype.getResponseText=M.prototype.ga;M.prototype.send=M.prototype.ea;var du=function(){return new yn},fu=function(){return en()},Vs=nn,pu=wr,gu=wt,ro={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},mu=we,vn=Tr,yu=M;const oo="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Vt="9.6.9";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const bt=new Pi("@firebase/firestore");function ao(){return bt.logLevel}function w(e,...t){if(bt.logLevel<=D.DEBUG){const n=t.map(Us);bt.debug(`Firestore (${Vt}): ${e}`,...n)}}function dt(e,...t){if(bt.logLevel<=D.ERROR){const n=t.map(Us);bt.error(`Firestore (${Vt}): ${e}`,...n)}}function ho(e,...t){if(bt.logLevel<=D.WARN){const n=t.map(Us);bt.warn(`Firestore (${Vt}): ${e}`,...n)}}function Us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I(e="Unexpected state"){const t=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function k(e,t){e||I()}function S(e,t){return e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends je{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Eu{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let r=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ct,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const h=r;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},a=h=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string"),new vu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new Z(t)}}class Tu{constructor(t,n,s){this.type="FirstParty",this.user=Z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Iu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Tu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Su{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.p=n.token,new Su(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $s{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/$s.A=-1;class co{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Cu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function Ut(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}class st{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new st(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $t(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class be{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends be{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Au=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends be{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return Au.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bs{constructor(t){this.fields=t,t.sort(tt.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ut(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class j{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new j(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new j(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}j.EMPTY_BYTE_STRING=new j("");const Du=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(e){if(k(!!e),typeof e=="string"){let t=0;const n=Du.exec(e);if(k(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?j.fromBase64String(e):j.fromUint8Array(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function po(e){const t=e.mapValue.fields.__previous_value__;return fo(t)?po(t):t}function Ce(e){const t=ft(e.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _u{constructor(t,n,s,i,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class qt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jt(e){return e==null}function wn(e){return e===0&&1/e==-1/0}function Nu(e){return typeof e=="number"&&Number.isInteger(e)&&!wn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class E{constructor(t){this.path=t}static fromPath(t){return new E(R.fromString(t))}static fromName(t){return new E(R.fromString(t).popFirst(5))}static empty(){return new E(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new R(t.slice()))}}function At(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fo(e)?4:ku(e)?9:10:I()}function ot(e,t){if(e===t)return!0;const n=At(e);if(n!==At(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ce(e).isEqual(Ce(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ft(s.timestampValue),o=ft(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?wn(r)===wn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ut(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(uo(r)!==uo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ae(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function Ht(e,t){if(e===t)return 0;const n=At(e),s=At(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return go(e.timestampValue,t.timestampValue);case 4:return go(Ce(e),Ce(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let h=0;h<o.length&&h<a.length;h++){const c=_(o[h],a[h]);if(c!==0)return c}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=_(L(i.latitude),L(r.latitude));return o!==0?o:_(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let h=0;h<o.length&&h<a.length;++h){const c=Ht(o[h],a[h]);if(c)return c}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),h=r.fields||{},c=Object.keys(h);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const l=_(a[u],c[u]);if(l!==0)return l;const p=Ht(o[a[u]],h[c[u]]);if(p!==0)return p}return _(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function go(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=ft(e),s=ft(t),i=_(n.seconds,s.seconds);return i!==0?i:_(n.nanos,s.nanos)}function Kt(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=ft(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Bt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=qs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${qs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function mo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function js(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function yo(e){return!!e&&"nullValue"in e}function vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function En(e){return!!e&&"mapValue"in e}function De(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $t(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=De(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=De(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ku(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!En(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=De(n)}setAll(t){let n=tt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=De(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());En(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];En(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){$t(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(De(this.value))}}function wo(e){const t=[];return $t(e.fields,(n,s)=>{const i=new tt([n]);if(En(s)){const r=wo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Bs(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,b.min(),b.min(),rt.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,b.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,b.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,b.min(),rt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ru{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Eo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Ru(e,t,n,s,i,r,o)}function Ks(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Kt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),jt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Kt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Kt(s)).join(",")),t.P=n}return t.P}function xu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Kt(s.value)}`;var s}).join(", ")}]`),jt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Kt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Kt(n)).join(",")),`Target(${t})`}function zs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!$u(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!So(e.startAt,t.startAt)&&So(e.endAt,t.endAt)}function Gs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Q extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new Ou(t,n,s):n==="array-contains"?new Fu(t,s):n==="in"?new Pu(t,s):n==="not-in"?new Vu(t,s):n==="array-contains-any"?new Uu(t,s):new Q(t,n,s)}static V(t,n,s){return n==="in"?new Mu(t,s):new Lu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ht(n,this.value)):n!==null&&At(this.value)===At(n)&&this.v(Ht(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ou extends Q{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class Mu extends Q{constructor(t,n){super(t,"in",n),this.keys=To("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Lu extends Q{constructor(t,n){super(t,"not-in",n),this.keys=To("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function To(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Fu extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hs(n)&&Ae(n.arrayValue,this.value)}}class Pu extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class Vu extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class Uu extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}class Tn{constructor(t,n){this.position=t,this.inclusive=n}}class _e{constructor(t,n="asc"){this.field=t,this.dir=n}}function $u(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Io(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Ht(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function So(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ne{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function Bu(e,t,n,s,i,r,o,a){return new Ne(e,t,n,s,i,r,o,a)}function Ws(e){return new Ne(e)}function In(e){return!jt(e.limit)&&e.limitType==="F"}function Sn(e){return!jt(e.limit)&&e.limitType==="L"}function bo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Co(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ao(e){return e.collectionGroup!==null}function ke(e){const t=S(e);if(t.D===null){t.D=[];const n=Co(t),s=bo(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new _e(n)),t.D.push(new _e(tt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new _e(tt.keyField(),r))}}}return t.D}function Dt(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=Eo(t.path,t.collectionGroup,ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ke(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new _e(r.field,o))}const s=t.endAt?new Tn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new Tn(t.startAt.position,!t.startAt.inclusive):null;t.C=Eo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function qu(e,t,n){return new Ne(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bn(e,t){return zs(Dt(e),Dt(t))&&e.limitType===t.limitType}function Do(e){return`${Ks(Dt(e))}|lt:${e.limitType}`}function Xs(e){return`Query(target=${xu(Dt(e))}; limitType=${e.limitType})`}function Ys(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Io(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ke(n),s)||n.endAt&&!function(i,r,o){const a=Io(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ke(n),s))}(e,t)}function _o(e){return(t,n)=>{let s=!1;for(const i of ke(e)){const r=ju(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ju(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),h=o.data.field(i);return a!==null&&h!==null?Ht(a,h):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function No(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(t)?"-0":t}}function ko(e){return{integerValue:""+e}}function Hu(e,t){return Nu(t)?ko(t):No(e,t)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cn{constructor(){this._=void 0}}function Ku(e,t,n){return e instanceof An?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Re?xo(e,t):e instanceof xe?Oo(e,t):function(s,i){const r=Ro(s,i),o=Mo(r)+Mo(s.k);return js(r)&&js(s.k)?ko(o):No(s.M,o)}(e,t)}function zu(e,t,n){return e instanceof Re?xo(e,t):e instanceof xe?Oo(e,t):n}function Ro(e,t){return e instanceof Dn?js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class An extends Cn{}class Re extends Cn{constructor(t){super(),this.elements=t}}function xo(e,t){const n=Lo(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class xe extends Cn{constructor(t){super(),this.elements=t}}function Oo(e,t){let n=Lo(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class Dn extends Cn{constructor(t,n){super(),this.M=t,this.k=n}}function Mo(e){return L(e.integerValue||e.doubleValue)}function Lo(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Gu(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Re&&s instanceof Re||n instanceof xe&&s instanceof xe?Ut(n.elements,s.elements,ot):n instanceof Dn&&s instanceof Dn?ot(n.k,s.k):n instanceof An&&s instanceof An}(e.transform,t.transform)}class Wu{constructor(t,n){this.version=t,this.transformResults=n}}class _t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Nn{}function Xu(e,t,n){e instanceof kn?function(s,i,r){const o=s.value.clone(),a=Uo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Oe?function(s,i,r){if(!_n(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Uo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Vo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Qs(e,t,n){e instanceof kn?function(s,i,r){if(!_n(s.precondition,i))return;const o=s.value.clone(),a=$o(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Po(i),o).setHasLocalMutations()}(e,t,n):e instanceof Oe?function(s,i,r){if(!_n(s.precondition,i))return;const o=$o(s.fieldTransforms,r,i),a=i.data;a.setAll(Vo(s)),a.setAll(o),i.convertToFoundDocument(Po(i),a).setHasLocalMutations()}(e,t,n):function(s,i){_n(s.precondition,i)&&i.convertToNoDocument(b.min())}(e,t)}function Yu(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ro(s.transform,i||null);r!=null&&(n==null&&(n=rt.empty()),n.set(s.field,r))}return n||null}function Fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ut(n,s,(i,r)=>Gu(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Po(e){return e.isFoundDocument()?e.version:b.min()}class kn extends Nn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Oe extends Nn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Vo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Uo(e,t,n){const s=new Map;k(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,zu(o,a,n[i]))}return s}function $o(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ku(r,o,t))}return s}class Qu extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ju extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zu{constructor(t){this.count=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F,C;function tl(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Bo(e){if(e===void 0)return dt("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$t(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return lo(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class V{constructor(t,n){this.comparator=t,this.root=n||H.EMPTY}insert(t,n){return new V(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new V(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rn(this.root,t,this.comparator,!0)}}class Rn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:H.RED,this.left=i!=null?i:H.EMPTY,this.right=r!=null?r:H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new H(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return H.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class K{constructor(t){this.comparator=t,this.data=new V(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(t){return new qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof K)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new K(this.comparator);return n.data=t,n}}class qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const el=new V(E.comparator);function Nt(){return el}const nl=new V(E.comparator);function Js(){return nl}function Zs(){return new zt(e=>e.toString(),(e,t)=>e.isEqual(t))}const sl=new V(E.comparator),il=new K(E.comparator);function x(...e){let t=il;for(const n of e)t=t.add(n);return t}const rl=new K(_);function jo(){return rl}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Me.createSynthesizedTargetChangeForCurrentChange(t,n)),new xn(b.min(),s,jo(),Nt(),x())}}class Me{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Me(j.EMPTY_BYTE_STRING,n,x(),x(),x())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class On{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Ho{constructor(t,n){this.targetId=t,this.F=n}}class Ko{constructor(t,n,s=j.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class zo{constructor(){this.B=0,this.L=Wo(),this.q=j.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.q=t)}H(){let t=x(),n=x(),s=x();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Me(this.q,this.U,t,n,s)}J(){this.K=!1,this.L=Wo()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class ol{constructor(t){this.nt=t,this.st=new Map,this.it=Nt(),this.rt=Go(),this.ot=new K(_)}at(t){for(const n of t.O)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.ct(n,t.key,t.$);for(const n of t.removedTargetIds)this.ct(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.F.count,i=this.wt(n);if(i){const r=i.target;if(Gs(r))if(s===0){const o=new E(r.path);this.ct(n,o,G.newNoDocument(o,b.min()))}else k(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Gs(a.target)){const h=new E(a.target.path);this.it.get(h)!==null||this.It(o,h)||this.ct(o,h,G.newNoDocument(h,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=x();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(h=>{const c=this.wt(h);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new xn(t,n,this.ot,this.it,s);return this.it=Nt(),this.rt=Go(),this.ot=new K(_),i}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new zo,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new K(_),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new zo),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Go(){return new V(E.comparator)}function Wo(){return new V(E.comparator)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const al=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cl{constructor(t,n){this.databaseId=t,this.N=n}}function Mn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xo(e,t){return e.N?t.toBase64():t.toUint8Array()}function ul(e,t){return Mn(e,t.toTimestamp())}function ct(e){return k(!!e),b.fromTimestamp(function(t){const n=ft(t);return new st(n.seconds,n.nanos)}(e))}function ti(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Yo(e){const t=R.fromString(e);return k(ta(t)),t}function ei(e,t){return ti(e.databaseId,t.path)}function ni(e,t){const n=Yo(t);if(n.get(1)!==e.databaseId.projectId)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Qo(n))}function si(e,t){return ti(e.databaseId,t)}function ll(e){const t=Yo(e);return t.length===4?R.emptyPath():Qo(t)}function ii(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Qo(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Jo(e,t,n){return{name:ei(e,t),fields:n.value.mapValue.fields}}function dl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(h,c){return h.N?(k(c===void 0||typeof c=="string"),j.fromBase64String(c||"")):(k(c===void 0||c instanceof Uint8Array),j.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?d.UNKNOWN:Bo(h.code);return new v(c,h.message||"")}(o);n=new Ko(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ni(e,s.document.name),r=ct(s.document.updateTime),o=new rt({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new On(h,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ni(e,s.document),r=s.readTime?ct(s.readTime):b.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new On([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ni(e,s.document),r=s.removedTargetIds||[];n=new On([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Zu(i),o=s.targetId;n=new Ho(o,r)}}return n}function fl(e,t){let n;if(t instanceof kn)n={update:Jo(e,t.key,t.value)};else if(t instanceof Qu)n={delete:ei(e,t.key)};else if(t instanceof Oe)n={update:Jo(e,t.key,t.data),updateMask:Sl(t.fieldMask)};else{if(!(t instanceof Ju))return I();n={verify:ei(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof An)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Re)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xe)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dn)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ul(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function pl(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ct(s.updateTime):ct(i);return r.isEqual(b.min())&&(r=ct(i)),new Wu(r,s.transformResults||[])}(n,t))):[]}function gl(e,t){return{documents:[si(e,t.path)]}}function ml(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=si(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=si(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(h){if(h.length===0)return;const c=h.map(u=>function(l){if(l.op==="=="){if(vo(l.value))return{unaryFilter:{field:Gt(l.field),op:"IS_NAN"}};if(yo(l.value))return{unaryFilter:{field:Gt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(vo(l.value))return{unaryFilter:{field:Gt(l.field),op:"IS_NOT_NAN"}};if(yo(l.value))return{unaryFilter:{field:Gt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(l.field),op:El(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(h){if(h.length!==0)return h.map(c=>function(u){return{field:Gt(u.field),direction:wl(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(h,c){return h.N||jt(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function yl(e){let t=ll(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){k(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=Zo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new _e(Wt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,jt(l)?null:l}(n.limit));let h=null;n.startAt&&(h=function(u){const l=!!u.before,p=u.values||[];return new Tn(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const l=!u.before,p=u.values||[];return new Tn(p,l)}(n.endAt)),Bu(t,i,o,r,a,"F",h,c)}function vl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Zo(e){return e?e.unaryFilter!==void 0?[Il(e)]:e.fieldFilter!==void 0?[Tl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Zo(t)).reduce((t,n)=>t.concat(n)):I():[]}function wl(e){return al[e]}function El(e){return hl[e]}function Gt(e){return{fieldPath:e.canonicalString()}}function Wt(e){return tt.fromServerFormat(e.fieldPath)}function Tl(e){return Q.create(Wt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Il(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wt(e.unaryFilter.field);return Q.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Wt(e.unaryFilter.field);return Q.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wt(e.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wt(e.unaryFilter.field);return Q.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Sl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ta(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},h=>s(h))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Le(e){return e.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Al{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Xu(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Qs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Qs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(b.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&Ut(this.mutations,t.mutations,(n,s)=>Fo(n,s))&&Ut(this.baseMutations,t.baseMutations,(n,s)=>Fo(n,s))}}class ri{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){k(t.mutations.length===s.length);let i=sl;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ri(t,n,s,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kt{constructor(t,n,s,i,r=b.min(),o=b.min(),a=j.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _l{constructor(t){this.Jt=t}}function Nl(e){const t=yl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qu(t,t.limit,"L"):t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kl{constructor(){this.Ue=new Rl}addToCollectionParentIndex(t,n){return this.Ue.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Ue.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getFieldIndex(t,n){return f.resolve(null)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Rl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new K(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new K(R.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Xt(0)}static gn(){return new Xt(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Fe(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==bl)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xl{constructor(){this.changes=new zt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ol{constructor(t,n,s){this.ls=t,this.Fs=n,this.indexManager=s}Bs(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.ls.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Us(t,n){return this.ls.getEntries(t,n).next(s=>this.Ks(t,s).next(()=>s))}Ks(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Gs(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):Ao(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new E(n)).next(s=>{let i=Js();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=Js();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const h=function(c,u){return new Ne(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.Ws(t,h,s).next(c=>{c.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}Ws(t,n,s){let i;return this.ls.getAll(t,n.path,s).next(r=>(i=r,this.Fs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const h=a.key;let c=i.get(h);c==null&&(c=G.newInvalidDocument(h),i=i.insert(h,c)),Qs(a,c,o.localWriteTime),c.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((r,o)=>{Ys(n,o)||(i=i.remove(r))}),i))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class oi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=x(),i=x();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new oi(t,n.fromCache,s,i)}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ml{Ys(t){this.Xs=t}Gs(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(b.min())?this.Zs(t,n):this.Xs.Us(t,i).next(r=>{const o=this.ti(n,r);return(In(n)||Sn(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(ao()<=D.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xs(n)),this.Xs.Gs(t,n,s).next(a=>(o.forEach(h=>{a=a.insert(h.key,h)}),a)))})}ti(t,n){let s=new K(_o(t));return n.forEach((i,r)=>{Ys(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return ao()<=D.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.Xs.Gs(t,n,b.min())}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ll{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new V(_),this.ii=new zt(r=>Ks(r),zs),this.ri=b.min(),this.oi=t.getRemoteDocumentCache(),this.hs=t.getTargetCache(),this.fs=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Fs=this.persistence.getMutationQueue(t,this.indexManager),this.ui=new Ol(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function Fl(e,t,n,s){return new Ll(e,t,n,s)}async function ea(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Fs.getAllMutationBatches(s).next(r=>(i=r,n.ai(t),n.Fs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let h=x();for(const c of i){o.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}return n.ui.Us(s,h).next(c=>({ci:c,removedBatchIds:o,addedBatchIds:a}))})})}function Pl(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,h,c){const u=h.batch,l=u.keys();let p=f.resolve();return l.forEach(m=>{p=p.next(()=>c.getEntry(a,m)).next(y=>{const A=h.docVersions.get(m);k(A!==null),y.version.compareTo(A)<0&&(u.applyToRemoteDocument(y,h),y.isValidDocument()&&(y.setReadTime(h.commitVersion),c.addEntry(y)))})}),p.next(()=>o.Fs.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Fs.performConsistencyCheck(s)).next(()=>n.ui.Us(s,i))})}function na(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hs.getLastRemoteSnapshotVersion(n))}function Vl(e,t){const n=S(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((c,u)=>{const l=i.get(u);if(!l)return;a.push(n.hs.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.hs.addMatchingKeys(r,c.addedDocuments,u)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?p=p.withResumeToken(j.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),i=i.insert(u,p),function(m,y,A){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(l,p,c)&&a.push(n.hs.updateTargetData(r,p))});let h=Nt();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Ul(r,o,t.documentUpdates).next(c=>{h=c})),!s.isEqual(b.min())){const c=n.hs.getLastRemoteSnapshotVersion(r).next(u=>n.hs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.ui.Ks(r,h)).next(()=>h)}).then(r=>(n.si=i,r))}function Ul(e,t,n){let s=x();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Nt();return n.forEach((o,a)=>{const h=i.get(o);a.isNoDocument()&&a.version.isEqual(b.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!h.isValidDocument()||a.version.compareTo(h.version)>0||a.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",a.version)}),r})}function $l(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Fs.getNextMutationBatchAfterBatchId(s,t)))}function Bl(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.hs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.hs.allocateTargetId(s).next(o=>(i=new kt(t,o,0,s.currentSequenceNumber),n.hs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function ai(e,t,n){const s=S(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Le(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function sa(e,t,n){const s=S(e);let i=b.min(),r=x();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,h,c){const u=S(a),l=u.ii.get(c);return l!==void 0?f.resolve(u.si.get(l)):u.hs.getTargetData(h,c)}(s,o,Dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.hs.getMatchingKeysForTargetId(o,a.targetId).next(h=>{r=h})}).next(()=>s.ni.Gs(o,t,n?i:b.min(),n?r:x())).next(a=>({documents:a,hi:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return f.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:Nl(s.bundledQuery),readTime:ct(s.readTime)}}(n)),f.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jl{constructor(){this.overlays=new V(E.comparator),this.mi=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=Zs(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,c=h.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&h.largestBatchId>s&&i.set(h.getKey(),h)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new V((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Zs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zs(),h=r.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Dl(n,s));let r=this.mi.get(n);r===void 0&&(r=x(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hi{constructor(){this.gi=new K(U.yi),this.pi=new K(U.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new U(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new U(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new E(new R([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new E(new R([])),s=new U(n,t),i=new U(n,t+1);let r=x();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return E.comparator(t.key,n.key)||_(t.Vi,n.Vi)}static Ii(t,n){return _(t.Vi,n.Vi)||E.comparator(t.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new K(U.yi)}checkEmpty(t){return f.resolve(this.Fs.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new Al(r,n,s,i);this.Fs.push(o);for(const a of i)this.Si=this.Si.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return f.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(t){return f.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new K(_);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),f.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new U(new E(r),0);let a=new K(_);return this.Si.forEachWhile(h=>{const c=h.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(h.Vi)),!0)},o),f.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){k(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let s=this.Si;return f.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new U(n,0),i=this.Si.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Fs.length,f.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.Fs.length===0?0:t-this.Fs[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kl{constructor(t){this.ki=t,this.docs=new V(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(s)}getAll(t,n,s){let i=Nt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:h}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||h.readTime.compareTo(s)<=0||(i=i.insert(h.key,h.mutableCopy()))}return f.resolve(i)}Mi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new zl(this)}getSize(t){return f.resolve(this.size)}}class zl extends xl{constructor(t){super(),this.Un=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Un.addEntry(t,i)):this.Un.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Un.getEntry(t,n)}getAllFromCache(t,n){return this.Un.getEntries(t,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gl{constructor(t){this.persistence=t,this.Oi=new zt(n=>Ks(n),zs),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.$i=0,this.Fi=new hi,this.targetCount=0,this.Bi=Xt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),f.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new Xt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.In(n),f.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Fi.Ti(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Fi.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Fi.Ri(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Fi.Pi(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Fi.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wl{constructor(t,n){this.Li={},this.overlays={},this.Zn=new $s(0),this.ts=!1,this.ts=!0,this.referenceDelegate=t(this),this.hs=new Gl(this),this.indexManager=new kl,this.ls=function(s){return new Kl(s)}(s=>this.referenceDelegate.qi(s)),this.M=new _l(n),this.fs=new ql(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new jl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new Hl(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new Xl(this.Zn.next());return this.referenceDelegate.Ui(),s(i).next(r=>this.referenceDelegate.Ki(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gi(t,n){return f.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class Xl extends Cl{constructor(t){super(),this.currentSequenceNumber=t}}class ci{constructor(t){this.persistence=t,this.Qi=new hi,this.ji=null}static Wi(t){return new ci(t)}get zi(){if(this.ji)return this.ji;throw I()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ui(){this.ji=new Set}Ki(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.zi,s=>{const i=E.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,b.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(t){return 0}Hi(t,n){return f.or([()=>f.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gi(t,n)])}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ia{constructor(){this.activeTargetIds=jo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yl{constructor(){this.Or=new ia,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Or.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Or.Zi(t)}isLocalQueryTarget(t){return this.Or.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(t){return this.Or.activeTargetIds.has(t)}start(){return this.Or=new ia,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ql{Fr(t){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ra{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Ur(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zl{constructor(t){this.Qr=t.Qr,this.jr=t.jr}Wr(t){this.zr=t}Hr(t){this.Jr=t}onMessage(t){this.Yr=t}close(){this.jr()}send(t){this.Qr(t)}Xr(){this.zr()}Zr(t){this.Jr(t)}eo(t){this.Yr(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class td extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.no=n+"://"+t.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(t,n,s,i,r){const o=this.ro(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.oo(a,i,r),this.ao(t,o,a,s).then(h=>(w("RestConnection","Received: ",h),h),h=>{throw ho("RestConnection",`${t} failed with error: `,h,"url: ",o,"request:",s),h})}uo(t,n,s,i,r){return this.io(t,n,s,i,r)}oo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ro(t,n){const s=Jl[t];return`${this.no}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new yu;a.listenOnce(pu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vs.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Vs.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case Vs.HTTP_ERROR:const u=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(y)>=0?y:d.UNKNOWN}(l.status);o(new v(p,l.message))}else o(new v(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(i);a.send(n,"POST",h,s,15)})}co(t,n,s){const i=[this.no,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=du(),o=fu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new mu({})),this.oo(a.initMessageHeaders,n,s),Za()||eh()||nh()||sh()||ih()||th()||(a.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");w("Connection","Creating WebChannel: "+h,a);const c=r.createWebChannel(h,a);let u=!1,l=!1;const p=new Zl({Qr:y=>{l?w("Connection","Not sending because WebChannel is closed:",y):(u||(w("Connection","Opening WebChannel transport."),c.open(),u=!0),w("Connection","WebChannel sending:",y),c.send(y))},jr:()=>c.close()}),m=(y,A,N)=>{y.listen(A,J=>{try{N(J)}catch(it){setTimeout(()=>{throw it},0)}})};return m(c,vn.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(c,vn.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),p.Zr())}),m(c,vn.EventType.ERROR,y=>{l||(l=!0,ho("Connection","WebChannel transport errored:",y),p.Zr(new v(d.UNAVAILABLE,"The operation could not be completed")))}),m(c,vn.EventType.MESSAGE,y=>{var A;if(!l){const N=y.data[0];k(!!N);const J=N,it=J.error||((A=J[0])===null||A===void 0?void 0:A.error);if(it){w("Connection","WebChannel received error:",it);const ee=it.status;let ne=function(Xa){const Di=F[Xa];if(Di!==void 0)return Bo(Di)}(ee),Ai=it.message;ne===void 0&&(ne=d.INTERNAL,Ai="Unknown error status: "+ee+" with message "+it.message),l=!0,p.Zr(new v(ne,Ai)),c.close()}else w("Connection","WebChannel received:",N),p.eo(N)}}),m(o,gu.STAT_EVENT,y=>{y.stat===ro.PROXY?w("Connection","Detected buffering proxy"):y.stat===ro.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Xr()},0),p}}function ui(){return typeof document!="undefined"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ln(e){return new cl(e,!0)}class oa{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hn=t,this.timerId=n,this.ho=s,this.lo=i,this.fo=r,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(t){this.cancel();const n=Math.floor(this._o+this.Io()),s=Math.max(0,Date.now()-this.mo),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,()=>(this.mo=Date.now(),t())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aa{constructor(t,n,s,i,r,o,a,h){this.Hn=t,this.Eo=s,this.Ao=i,this.Ro=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new oa(t,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(t){this.Oo(),this.stream.send(t)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,t!==4?this.vo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const t=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.bo===n&&this.Lo(s,i)},s=>{t(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Lo(t,n){const s=this.Bo(this.bo);this.stream=this.Uo(t,n),this.stream.Wr(()=>{s(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Bo(t){return n=>{this.Hn.enqueueAndForget(()=>this.bo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ed extends aa{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Uo(t,n){return this.Ro.co("Listen",t,n)}onMessage(t){this.vo.reset();const n=dl(this.M,t),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?ct(r.readTime):b.min()}(t);return this.listener.Ko(n,s)}Go(t){const n={};n.database=ii(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=Gs(a)?{documents:gl(i,a)}:{query:ml(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xo(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Mn(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=vl(this.M,t);s&&(n.labels=s),this.Mo(n)}Qo(t){const n={};n.database=ii(this.M),n.removeTarget=t,this.Mo(n)}}class nd extends aa{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(t,n){return this.Ro.co("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.jo){this.vo.reset();const n=pl(t.writeResults,t.commitTime),s=ct(t.commitTime);return this.listener.Ho(s,n)}return k(!t.writeResults||t.writeResults.length===0),this.jo=!0,this.listener.Jo()}Yo(){const t={};t.database=ii(this.M),this.Mo(t)}zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>fl(this.M,s))};this.Mo(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sd extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Ro=s,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}io(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}uo(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.uo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}terminate(){this.Xo=!0}}class id{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(t){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ia("Offline")))}set(t){this.aa(),this.ta=0,t==="Online"&&(this.na=!1),this.ia(t)}ia(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(dt(n),this.na=!1):w("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=r,this.fa.Fr(o=>{s.enqueueAndForget(async()=>{Rt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const h=S(a);h.ha.add(4),await Pe(h),h.da.set("Unknown"),h.ha.delete(4),await Fn(h)}(this))})}),this.da=new id(s,i)}}async function Fn(e){if(Rt(e))for(const t of e.la)await t(!0)}async function Pe(e){for(const t of e.la)await t(!1)}function ha(e,t){const n=S(e);n.ca.has(t.targetId)||(n.ca.set(t.targetId,t),fi(n)?di(n):Yt(n).Do()&&li(n,t))}function ca(e,t){const n=S(e),s=Yt(n);n.ca.delete(t),s.Do()&&ua(n,t),n.ca.size===0&&(s.Do()?s.No():Rt(n)&&n.da.set("Unknown"))}function li(e,t){e._a.Z(t.targetId),Yt(e).Go(t)}function ua(e,t){e._a.Z(t),Yt(e).Qo(t)}function di(e){e._a=new ol({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),Yt(e).start(),e.da.sa()}function fi(e){return Rt(e)&&!Yt(e).So()&&e.ca.size>0}function Rt(e){return S(e).ha.size===0}function la(e){e._a=void 0}async function od(e){e.ca.forEach((t,n)=>{li(e,t)})}async function ad(e,t){la(e),fi(e)?(e.da.oa(t),di(e)):e.da.set("Unknown")}async function hd(e,t,n){if(e.da.set("Online"),t instanceof Ko&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.ca.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.ca.delete(o),s._a.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Pn(e,s)}else if(t instanceof On?e._a.at(t):t instanceof Ho?e._a._t(t):e._a.ht(t),!n.isEqual(b.min()))try{const s=await na(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i._a.yt(r);return o.targetChanges.forEach((a,h)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.ca.get(h);c&&i.ca.set(h,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const h=i.ca.get(a);if(!h)return;i.ca.set(a,h.withResumeToken(j.EMPTY_BYTE_STRING,h.snapshotVersion)),ua(i,a);const c=new kt(h.target,a,1,h.sequenceNumber);li(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Pn(e,s)}}async function Pn(e,t,n){if(!Le(t))throw t;e.ha.add(1),await Pe(e),e.da.set("Offline"),n||(n=()=>na(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.ha.delete(1),await Fn(e)})}function da(e,t){return t().catch(n=>Pn(e,n,t))}async function Vn(e){const t=S(e),n=pt(t);let s=t.ua.length>0?t.ua[t.ua.length-1].batchId:-1;for(;cd(t);)try{const i=await $l(t.localStore,s);if(i===null){t.ua.length===0&&n.No();break}s=i.batchId,ud(t,i)}catch(i){await Pn(t,i)}fa(t)&&pa(t)}function cd(e){return Rt(e)&&e.ua.length<10}function ud(e,t){e.ua.push(t);const n=pt(e);n.Do()&&n.Wo&&n.zo(t.mutations)}function fa(e){return Rt(e)&&!pt(e).So()&&e.ua.length>0}function pa(e){pt(e).start()}async function ld(e){pt(e).Yo()}async function dd(e){const t=pt(e);for(const n of e.ua)t.zo(n.mutations)}async function fd(e,t,n){const s=e.ua.shift(),i=ri.from(s,t,n);await da(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Vn(e)}async function pd(e,t){t&&pt(e).Wo&&await async function(n,s){if(i=s.code,tl(i)&&i!==d.ABORTED){const r=n.ua.shift();pt(n).xo(),await da(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Vn(n)}var i}(e,t),fa(e)&&pa(e)}async function ga(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Rt(n);n.ha.add(3),await Pe(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.ha.delete(3),await Fn(n)}async function gd(e,t){const n=S(e);t?(n.ha.delete(2),await Fn(n)):t||(n.ha.add(2),await Pe(n),n.da.set("Unknown"))}function Yt(e){return e.wa||(e.wa=function(t,n,s){const i=S(t);return i.Zo(),new ed(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:od.bind(null,e),Hr:ad.bind(null,e),Ko:hd.bind(null,e)}),e.la.push(async t=>{t?(e.wa.xo(),fi(e)?di(e):e.da.set("Unknown")):(await e.wa.stop(),la(e))})),e.wa}function pt(e){return e.ma||(e.ma=function(t,n,s){const i=S(t);return i.Zo(),new nd(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:ld.bind(null,e),Hr:pd.bind(null,e),Jo:dd.bind(null,e),Ho:fd.bind(null,e)}),e.la.push(async t=>{t?(e.ma.xo(),await Vn(e)):(await e.ma.stop(),e.ua.length>0&&(w("RemoteStore",`Stopping write stream with ${e.ua.length} pending writes`),e.ua=[]))})),e.ma}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new pi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gi(e,t){if(dt("AsyncQueue",`${t}: ${e}`),Le(e))return new v(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Js(),this.sortedSet=new V(this.comparator)}static emptySet(t){return new Qt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ma{constructor(){this.ga=new V(E.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):I():this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class Jt{constructor(t,n,s,i,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Jt(t,n,Qt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class md{constructor(){this.pa=void 0,this.listeners=[]}}class yd{constructor(){this.queries=new zt(t=>Do(t),bn),this.onlineState="Unknown",this.Ia=new Set}}async function vd(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new md),i)try{r.pa=await n.onListen(s)}catch(o){const a=gi(o,`Initialization of query '${Xs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ta(n.onlineState),r.pa&&t.Ea(r.pa)&&mi(n)}async function wd(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ed(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ea(i)&&(s=!0);o.pa=i}}s&&mi(n)}function Td(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function mi(e){e.Ia.forEach(t=>{t.next()})}class Id{constructor(t,n,s){this.query=t,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=s||{}}Ea(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Jt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(t)&&(this.Aa.next(t),n=!0):this.Va(t,this.onlineState)&&(this.va(t),n=!0),this.ba=t,n}onError(t){this.Aa.error(t)}Ta(t){this.onlineState=t;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,t)&&(this.va(this.ba),n=!0),n}Va(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Sa||!s)&&(!t.docs.isEmpty()||n==="Offline")}Pa(t){if(t.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(t){t=Jt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Ra=!0,this.Aa.next(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ya{constructor(t){this.key=t}}class va{constructor(t){this.key=t}}class Sd{constructor(t,n){this.query=t,this.ka=n,this.Ma=null,this.current=!1,this.Oa=x(),this.mutatedKeys=x(),this.$a=_o(t),this.Fa=new Qt(this.$a)}get Ba(){return this.ka}La(t,n){const s=n?n.qa:new ma,i=n?n.Fa:this.Fa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const h=In(this.query)&&i.size===this.query.limit?i.last():null,c=Sn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const p=i.get(u),m=Ys(this.query,l)?l:null,y=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;p&&m?p.data.isEqual(m.data)?y!==A&&(s.track({type:3,doc:m}),N=!0):this.Ua(p,m)||(s.track({type:2,doc:m}),N=!0,(h&&this.$a(m,h)>0||c&&this.$a(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),N=!0):p&&!m&&(s.track({type:1,doc:p}),N=!0,(h||c)&&(a=!0)),N&&(m?(o=o.add(m),r=A?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),In(this.query)||Sn(this.query))for(;o.size>this.query.limit;){const u=In(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Fa:o,qa:s,ei:a,mutatedKeys:r}}Ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Fa;this.Fa=t.Fa,this.mutatedKeys=t.mutatedKeys;const r=t.qa.ya();r.sort((c,u)=>function(l,p){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(c.type,u.type)||this.$a(c.doc,u.doc)),this.Ka(s);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,h=a!==this.Ma;return this.Ma=a,r.length!==0||h?{snapshot:new Jt(this.query,t.Fa,i,r,t.mutatedKeys,a===0,h,!1),Qa:o}:{Qa:o}}Ta(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new ma,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(t){return!this.ka.has(t)&&!!this.Fa.has(t)&&!this.Fa.get(t).hasLocalMutations}Ka(t){t&&(t.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=t.current)}Ga(){if(!this.current)return[];const t=this.Oa;this.Oa=x(),this.Fa.forEach(s=>{this.ja(s.key)&&(this.Oa=this.Oa.add(s.key))});const n=[];return t.forEach(s=>{this.Oa.has(s)||n.push(new va(s))}),this.Oa.forEach(s=>{t.has(s)||n.push(new ya(s))}),n}Wa(t){this.ka=t.hi,this.Oa=x();const n=this.La(t.documents);return this.applyChanges(n,!0)}za(){return Jt.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class bd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Cd{constructor(t){this.key=t,this.Ha=!1}}class Ad{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new zt(a=>Do(a),bn),this.Xa=new Map,this.Za=new Set,this.tu=new V(E.comparator),this.eu=new Map,this.nu=new hi,this.su={},this.iu=new Map,this.ru=Xt.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function Dd(e,t){const n=Pd(e);let s,i;const r=n.Ya.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.za();else{const o=await Bl(n.localStore,Dt(t));n.isPrimaryClient&&ha(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await _d(n,t,s,a==="current")}return i}async function _d(e,t,n,s){e.au=(u,l,p)=>async function(m,y,A,N){let J=y.view.La(A);J.ei&&(J=await sa(m.localStore,y.query,!1).then(({documents:ne})=>y.view.La(ne,J)));const it=N&&N.targetChanges.get(y.targetId),ee=y.view.applyChanges(J,m.isPrimaryClient,it);return ba(m,y.targetId,ee.Qa),ee.snapshot}(e,u,l,p);const i=await sa(e.localStore,t,!0),r=new Sd(t,i.hi),o=r.La(i.documents),a=Me.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),h=r.applyChanges(o,e.isPrimaryClient,a);ba(e,n,h.Qa);const c=new bd(t,n,r);return e.Ya.set(t,c),e.Xa.has(n)?e.Xa.get(n).push(t):e.Xa.set(n,[t]),h.snapshot}async function Nd(e,t){const n=S(e),s=n.Ya.get(t),i=n.Xa.get(s.targetId);if(i.length>1)return n.Xa.set(s.targetId,i.filter(r=>!bn(r,t))),void n.Ya.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ai(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ca(n.remoteStore,s.targetId),yi(n,s.targetId)}).catch(Fe)):(yi(n,s.targetId),await ai(n.localStore,s.targetId,!0))}async function kd(e,t,n){const s=Vd(e);try{const i=await function(r,o){const a=S(r),h=st.now(),c=o.reduce((l,p)=>l.add(p.key),x());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.ui.Us(l,c).next(p=>{u=p;const m=[];for(const y of o){const A=Yu(y,u.get(y.key));A!=null&&m.push(new Oe(y.key,A,wo(A.value.mapValue),_t.exists(!0)))}return a.Fs.addMutationBatch(l,h,m,o)})).then(l=>(l.applyToLocalDocumentSet(u),{batchId:l.batchId,changes:u}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let h=r.su[r.currentUser.toKey()];h||(h=new V(_)),h=h.insert(o,a),r.su[r.currentUser.toKey()]=h}(s,i.batchId,n),await Ve(s,i.changes),await Vn(s.remoteStore)}catch(i){const r=gi(i,"Failed to persist write");n.reject(r)}}async function wa(e,t){const n=S(e);try{const s=await Vl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.eu.get(r);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ha=!0:i.modifiedDocuments.size>0?k(o.Ha):i.removedDocuments.size>0&&(k(o.Ha),o.Ha=!1))}),await Ve(n,s,t)}catch(s){await Fe(s)}}function Ea(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ya.forEach((r,o)=>{const a=o.view.Ta(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let h=!1;a.queries.forEach((c,u)=>{for(const l of u.listeners)l.Ta(o)&&(h=!0)}),h&&mi(a)}(s.eventManager,t),i.length&&s.Ja.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Rd(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.eu.get(t),r=i&&i.key;if(r){let o=new V(E.comparator);o=o.insert(r,G.newNoDocument(r,b.min()));const a=x().add(r),h=new xn(b.min(),new Map,new K(_),o,a);await wa(s,h),s.tu=s.tu.remove(r),s.eu.delete(t),vi(s)}else await ai(s.localStore,t,!1).then(()=>yi(s,t,n)).catch(Fe)}async function xd(e,t){const n=S(e),s=t.batch.batchId;try{const i=await Pl(n.localStore,t);Ia(n,s,null),Ta(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ve(n,i)}catch(i){await Fe(i)}}async function Od(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let c;return a.Fs.lookupMutationBatch(h,o).next(u=>(k(u!==null),c=u.keys(),a.Fs.removeMutationBatch(h,u))).next(()=>a.Fs.performConsistencyCheck(h)).next(()=>a.ui.Us(h,c))})}(s.localStore,t);Ia(s,t,n),Ta(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ve(s,i)}catch(i){await Fe(i)}}function Ta(e,t){(e.iu.get(t)||[]).forEach(n=>{n.resolve()}),e.iu.delete(t)}function Ia(e,t,n){const s=S(e);let i=s.su[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.su[s.currentUser.toKey()]=i}}function yi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Xa.get(t))e.Ya.delete(s),n&&e.Ja.uu(s,n);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(s=>{e.nu.containsKey(s)||Sa(e,s)})}function Sa(e,t){e.Za.delete(t.path.canonicalString());const n=e.tu.get(t);n!==null&&(ca(e.remoteStore,n),e.tu=e.tu.remove(t),e.eu.delete(n),vi(e))}function ba(e,t,n){for(const s of n)s instanceof ya?(e.nu.addReference(s.key,t),Md(e,s)):s instanceof va?(w("SyncEngine","Document no longer in limbo: "+s.key),e.nu.removeReference(s.key,t),e.nu.containsKey(s.key)||Sa(e,s.key)):I()}function Md(e,t){const n=t.key,s=n.path.canonicalString();e.tu.get(n)||e.Za.has(s)||(w("SyncEngine","New document in limbo: "+n),e.Za.add(s),vi(e))}function vi(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){const t=e.Za.values().next().value;e.Za.delete(t);const n=new E(R.fromString(t)),s=e.ru.next();e.eu.set(s,new Cd(n)),e.tu=e.tu.insert(n,s),ha(e.remoteStore,new kt(Dt(Ws(n.path)),s,2,$s.A))}}async function Ve(e,t,n){const s=S(e),i=[],r=[],o=[];s.Ya.isEmpty()||(s.Ya.forEach((a,h)=>{o.push(s.au(h,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(h.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=oi.Js(h.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ja.Ko(i),await async function(a,h){const c=S(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(h,l=>f.forEach(l.zs,p=>c.persistence.referenceDelegate.addReference(u,l.targetId,p)).next(()=>f.forEach(l.Hs,p=>c.persistence.referenceDelegate.removeReference(u,l.targetId,p)))))}catch(u){if(!Le(u))throw u;w("LocalStore","Failed to update sequence numbers: "+u)}for(const u of h){const l=u.targetId;if(!u.fromCache){const p=c.si.get(l),m=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(m);c.si=c.si.insert(l,y)}}}(s.localStore,r))}async function Ld(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await ea(n.localStore,t);n.currentUser=t,function(i,r){i.iu.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ve(n,s.ci)}}function Fd(e,t){const n=S(e),s=n.eu.get(t);if(s&&s.Ha)return x().add(s.key);{let i=x();const r=n.Xa.get(t);if(!r)return i;for(const o of r){const a=n.Ya.get(o);i=i.unionWith(a.view.Ba)}return i}}function Pd(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rd.bind(null,t),t.Ja.Ko=Ed.bind(null,t.eventManager),t.Ja.uu=Td.bind(null,t.eventManager),t}function Vd(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Od.bind(null,t),t}class Ud{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Ln(t.databaseInfo.databaseId),this.sharedClientState=this.hu(t),this.persistence=this.lu(t),await this.persistence.start(),this.gcScheduler=this.fu(t),this.localStore=this.du(t)}fu(t){return null}du(t){return Fl(this.persistence,new Ml,t.initialUser,this.M)}lu(t){return new Wl(ci.Wi,this.M)}hu(t){return new Yl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $d{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ea(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ld.bind(null,this.syncEngine),await gd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yd}createDatastore(t){const n=Ln(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new td(i));var i;return function(r,o,a,h){return new sd(r,o,a,h)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ea(this.syncEngine,a,0),o=ra.vt()?new ra:new Ql,new rd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,h,c){const u=new Ad(s,i,r,o,a,h);return c&&(u.ou=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);w("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await Pe(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.wu(this.observer.next,t)}error(t){this.observer.error?this.wu(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}mu(){this.muted=!0}wu(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=co.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=gi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function jd(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ea(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Hd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kd(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>ga(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>ga(t.remoteStore,r)),e.onlineComponents=t}async function Kd(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await jd(e,new Ud)),e.offlineComponents}async function Ca(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Hd(e,new $d)),e.onlineComponents}function zd(e){return Ca(e).then(t=>t.syncEngine)}async function Aa(e){const t=await Ca(e),n=t.eventManager;return n.onListen=Dd.bind(null,t.syncEngine),n.onUnlisten=Nd.bind(null,t.syncEngine),n}const Da=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _a(e,t,n){if(!n)throw new v(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gd(e,t,n,s){if(t===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Na(e){if(!E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ka(e){if(E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Un(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Zt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Un(e);throw new v(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}class Ra{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Gd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wi{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1,t instanceof qt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(i.options.projectId)}(t))}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wu;switch(n.type){case"gapi":const s=n.client;return k(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Iu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Da.get(t);n&&(w("ComponentProvider","Removing Datastore"),Da.delete(t),n.terminate())}(this),Promise.resolve()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class et{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new et(this.firestore,t,this._key)}}class Ue{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ue(this.firestore,t,this._query)}}class gt extends Ue{constructor(t,n,s){super(t,n,Ws(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new et(this.firestore,null,new E(t))}withConverter(t){return new gt(this.firestore,t,this._path)}}function Sf(e,t,...n){if(e=mt(e),_a("collection","path",t),e instanceof wi){const s=R.fromString(t,...n);return ka(s),new gt(e,null,s)}{if(!(e instanceof et||e instanceof gt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return ka(s),new gt(e.firestore,null,s)}}function Wd(e,t,...n){if(e=mt(e),arguments.length===1&&(t=co.R()),_a("doc","path",t),e instanceof wi){const s=R.fromString(t,...n);return Na(s),new et(e,null,new E(s))}{if(!(e instanceof et||e instanceof gt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return Na(s),new et(e.firestore,e instanceof gt?e.converter:null,new E(s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xd{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new oa(this,"async_queue_retry"),this.Fu=()=>{const n=ui();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Bu(),this.Lu(t)}enterRestrictedMode(t){if(!this.xu){this.xu=!0,this.Ou=t||!1;const n=ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(t){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new Ct;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Cu.push(t),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(t){if(!Le(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(t){const n=this.Du.then(()=>(this.Mu=!0,t().catch(s=>{this.ku=s,this.Mu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Mu=!1,s))));return this.Du=n,n}enqueueAfterDelay(t,n,s){this.Bu(),this.$u.indexOf(t)>-1&&(n=0);const i=pi.createAndSchedule(this,t,n,s,r=>this.Uu(r));return this.Nu.push(i),i}Bu(){this.ku&&I()}verifyOperationInProgress(){}async Ku(){let t;do t=this.Du,await t;while(t!==this.Du)}Gu(t){for(const n of this.Nu)if(n.timerId===t)return!0;return!1}Qu(t){return this.Ku().then(()=>{this.Nu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ku()})}ju(t){this.$u.push(t)}Uu(t){const n=this.Nu.indexOf(t);this.Nu.splice(n,1)}}function xa(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class $e extends wi{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Xd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ma(this),this._firestoreClient.terminate()}}function Yd(e=ec()){return Yh(e,"firestore").getImmediate()}function Oa(e){return e._firestoreClient||Ma(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ma(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new _u(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new qd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ei{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new te(j.fromBase64String(t))}catch(n){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new te(j.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class La{constructor(t){this._methodName=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ti{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qd=/^__.*__$/;class Jd{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Oe(t,this.data,this.fieldMask,n,this.fieldTransforms):new kn(t,this.data,n,this.fieldTransforms)}}function Fa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Ii{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Wu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Xu(t),i}Zu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Wu(),i}tc(t){return this.Hu({path:void 0,Yu:!0})}ec(t){return $n(t,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Wu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Xu(this.path.get(t))}Xu(t){if(t.length===0)throw this.ec("Document fields must not be empty");if(Fa(this.zu)&&Qd.test(t))throw this.ec('Document fields cannot begin and end with "__"')}}class Zd{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Ln(t)}ic(t,n,s,i=!1){return new Ii({zu:t,methodName:n,sc:s,path:tt.emptyPath(),Yu:!1,nc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Si(e){const t=e._freezeSettings(),n=Ln(e._databaseId);return new Zd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pa(e,t,n,s,i,r={}){const o=e.ic(r.merge||r.mergeFields?2:0,t,n,i);$a("Data must be an object, but it was:",o,s);const a=Va(s,o);let h,c;if(r.merge)h=new Bs(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const l of r.mergeFields){const p=ef(t,l,n);if(!o.contains(p))throw new v(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sf(u,p)||u.push(p)}h=new Bs(u),c=o.fieldTransforms.filter(l=>h.covers(l.field))}else h=null,c=o.fieldTransforms;return new Jd(new rt(a),h,c)}function tf(e,t,n,s=!1){return bi(n,e.ic(s?4:3,t))}function bi(e,t){if(Ua(e=mt(e)))return $a("Unsupported field value:",t,e),Va(e,t);if(e instanceof La)return function(n,s){if(!Fa(s.zu))throw s.ec(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ec(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Yu&&t.zu!==4)throw t.ec("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=bi(o,s.tc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hu(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=st.fromDate(n);return{timestampValue:Mn(s.M,i)}}if(n instanceof st){const i=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mn(s.M,i)}}if(n instanceof Ti)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof te)return{bytesValue:Xo(s.M,n._byteString)};if(n instanceof et){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ec(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ti(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ec(`Unsupported field value: ${Un(n)}`)}(e,t)}function Va(e,t){const n={};return lo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$t(e,(s,i)=>{const r=bi(i,t.Ju(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ua(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof st||e instanceof Ti||e instanceof te||e instanceof et||e instanceof La)}function $a(e,t,n){if(!Ua(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Un(n);throw s==="an object"?t.ec(e+" a custom object"):t.ec(e+" "+s)}}function ef(e,t,n){if((t=mt(t))instanceof Ei)return t._internalPath;if(typeof t=="string")return Ba(e,t);throw $n("Field path arguments must be of type string or ",e,!1,void 0,n)}const nf=new RegExp("[~\\*/\\[\\]]");function Ba(e,t,n){if(t.search(nf)>=0)throw $n(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ei(...t.split("."))._internalPath}catch{throw $n(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $n(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new v(d.INVALID_ARGUMENT,a+e+h)}function sf(e,t){return e.some(n=>n.isEqual(t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ci("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rf extends qa{data(){return super.data()}}function Ci(e,t){return typeof t=="string"?Ba(e,t):t instanceof Ei?t._internalPath:t._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ja extends qa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ci("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bn extends ja{data(t={}){return super.data(t)}}class of{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Be(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Bn(this._firestore,this._userDataWriter,s.key,s,new Be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,c=-1;return o.type!==0&&(h=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:af(o.type),doc:a,oldIndex:h,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function af(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e){if(Sn(e)&&e.explicitOrderBy.length===0)throw new v(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cf{}function bf(e,...t){for(const n of t)e=n._apply(e);return e}class uf extends cf{constructor(t,n,s){super(),this.ac=t,this.uc=n,this.cc=s,this.type="where"}_apply(t){const n=Si(t.firestore),s=function(i,r,o,a,h,c,u){let l;if(h.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new v(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ka(u,c);const m=[];for(const y of u)m.push(Ha(a,i,y));l={arrayValue:{values:m}}}else l=Ha(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ka(u,c),l=tf(o,r,u,c==="in"||c==="not-in");const p=Q.create(h,c,l);return function(m,y){if(y.S()){const N=Co(m);if(N!==null&&!N.isEqual(y.field))throw new v(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${N.toString()}' and '${y.field.toString()}'`);const J=bo(m);J!==null&&lf(m,y.field,J)}const A=function(N,J){for(const it of N.filters)if(J.indexOf(it.op)>=0)return it.op;return null}(m,function(N){switch(N){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(A!==null)throw A===y.op?new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${A.toString()}' filters.`)}(i,p),p}(t._query,"where",n,t.firestore._databaseId,this.ac,this.uc,this.cc);return new Ue(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new Ne(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function Cf(e,t,n){const s=t,i=Ci("where",e);return new uf(i,s,n)}function Ha(e,t,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new v(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ao(t)&&n.indexOf("/")!==-1)throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(R.fromString(n));if(!E.isDocumentKey(s))throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return mo(e,new E(s))}if(n instanceof et)return mo(e,n._key);throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Un(n)}.`)}function Ka(e,t){if(!Array.isArray(e)||e.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new v(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function lf(e,t,n){if(!n.isEqual(t))throw new v(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class df{convertValue(t,n="none"){switch(At(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return $t(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Ti(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=po(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ce(t));default:return null}}convertTimestamp(t){const n=ft(t);return new st(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=R.fromString(t);k(ta(s));const i=new qt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function za(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class Ga extends df{constructor(t){super(),this.firestore=t}convertBytes(t){return new te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Af(e,t,n){e=Zt(e,et);const s=Zt(e.firestore,$e),i=za(e.converter,t,n);return Wa(s,[Pa(Si(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,_t.none())])}function Df(e,t){const n=Zt(e.firestore,$e),s=Wd(e),i=za(e.converter,t);return Wa(n,[Pa(Si(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,_t.exists(!1))]).then(()=>s)}function _f(e,...t){var n,s,i;e=mt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||xa(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xa(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let h,c,u;if(e instanceof et)c=Zt(e.firestore,$e),u=Ws(e._key.path),h={next:l=>{t[o]&&t[o](ff(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Zt(e,Ue);c=Zt(l.firestore,$e),u=l._query;const p=new Ga(c);h={next:m=>{t[o]&&t[o](new of(c,p,l,m))},error:t[o+1],complete:t[o+2]},hf(e._query)}return function(l,p,m,y){const A=new Bd(y),N=new Id(p,A,m);return l.asyncQueue.enqueueAndForget(async()=>vd(await Aa(l),N)),()=>{A.mu(),l.asyncQueue.enqueueAndForget(async()=>wd(await Aa(l),N))}}(Oa(c),u,a,h)}function Wa(e,t){return function(n,s){const i=new Ct;return n.asyncQueue.enqueueAndForget(async()=>kd(await zd(n),s,i)),i.promise}(Oa(e),t)}function ff(e,t,n){const s=n.docs.get(t._key),i=new Ga(e);return new ja(e,i,t._key,s,new Be(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Vt=n})(Zh),Ke(new ie("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new $e(i,new Eu(n.getProvider("auth-internal")),new bu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),xt(oo,"3.4.6",e),xt(oo,"3.4.6","esm2017")})();var pf="firebase",gf="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(pf,gf,"app");const mf=tc({apiKey:"AIzaSyAXyd6wVqjNsavwsdRFc7egB-Cw9zEjb10",authDomain:"wedding-a2cd0.firebaseapp.com",projectId:"wedding-a2cd0",storageBucket:"wedding-a2cd0.appspot.com",messagingSenderId:"587037697531",appId:"1:587037697531:web:7a53f22b3004468c0cd75e"}),Nf=Yd(mf);export{Cf as A,ie as C,Ri as E,je as F,Pi as L,Zh as S,bf as T,Af as Y,Ke as _,Sf as a,eh as b,ec as c,Yh as d,qn as e,Nf as f,mt as g,Wd as h,Za as i,th as j,If as k,Tf as l,qe as m,sh as n,D as o,wf as p,Ef as q,xt as r,yf as s,Df as t,st as u,vf as v,_f as w};
