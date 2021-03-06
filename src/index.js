/**
 * Created by zhy on 2017/4/1.
 */
'use strict';

/**
 * mavonEditor
 * @author hinesboy
 */

const mavonEditor = require('./mavon-editor.vue');
const VueMavonEditor = {
    markdownIt: mavonEditor.data().s_markdown,
    mavonEditor: mavonEditor,
    install: function(Vue) {
        Vue.component('mavon-editor', mavonEditor);
    }
};

module.exports = VueMavonEditor;
