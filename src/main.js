/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';
import * as App from './app';

require('./config');

new Vue(App).$mount('#app');
