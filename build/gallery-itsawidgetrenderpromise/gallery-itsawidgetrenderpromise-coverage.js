if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-itsawidgetrenderpromise/gallery-itsawidgetrenderpromise.js']) {
   __coverage__['build/gallery-itsawidgetrenderpromise/gallery-itsawidgetrenderpromise.js'] = {"path":"build/gallery-itsawidgetrenderpromise/gallery-itsawidgetrenderpromise.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":62}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":35},"end":{"line":35,"column":53}}},"3":{"name":"(anonymous_3)","line":38,"loc":{"start":{"line":38,"column":48},"end":{"line":38,"column":75}}},"4":{"name":"(anonymous_4)","line":41,"loc":{"start":{"line":41,"column":16},"end":{"line":41,"column":28}}},"5":{"name":"(anonymous_5)","line":52,"loc":{"start":{"line":52,"column":20},"end":{"line":52,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":63,"column":80}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":13}},"3":{"start":{"line":22,"column":0},"end":{"line":22,"column":27}},"4":{"start":{"line":35,"column":0},"end":{"line":61,"column":2}},"5":{"start":{"line":36,"column":4},"end":{"line":36,"column":24}},"6":{"start":{"line":37,"column":4},"end":{"line":59,"column":5}},"7":{"start":{"line":38,"column":8},"end":{"line":58,"column":11}},"8":{"start":{"line":39,"column":12},"end":{"line":44,"column":14}},"9":{"start":{"line":42,"column":20},"end":{"line":42,"column":31}},"10":{"start":{"line":45,"column":12},"end":{"line":47,"column":13}},"11":{"start":{"line":46,"column":16},"end":{"line":46,"column":26}},"12":{"start":{"line":48,"column":12},"end":{"line":57,"column":13}},"13":{"start":{"line":49,"column":16},"end":{"line":56,"column":18}},"14":{"start":{"line":53,"column":24},"end":{"line":53,"column":121}},"15":{"start":{"line":54,"column":24},"end":{"line":54,"column":56}},"16":{"start":{"line":60,"column":4},"end":{"line":60,"column":35}}},"branchMap":{"1":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":4},"end":{"line":37,"column":4}},{"start":{"line":37,"column":4},"end":{"line":37,"column":4}}]},"2":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":12},"end":{"line":45,"column":12}},{"start":{"line":45,"column":12},"end":{"line":45,"column":12}}]},"3":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":12},"end":{"line":48,"column":12}},{"start":{"line":48,"column":12},"end":{"line":48,"column":12}}]},"4":{"line":50,"type":"binary-expr","locations":[{"start":{"line":50,"column":20},"end":{"line":50,"column":27}},{"start":{"line":50,"column":31},"end":{"line":50,"column":45}}]},"5":{"line":53,"type":"binary-expr","locations":[{"start":{"line":53,"column":87},"end":{"line":53,"column":94}},{"start":{"line":53,"column":98},"end":{"line":53,"column":112}}]}},"code":["(function () { YUI.add('gallery-itsawidgetrenderpromise', function (Y, NAME) {","","'use strict';","/**"," * ITSAWidgetRenderPromise"," *"," *"," * This module adds Widget.renderPromise() to the Y.Widget class."," * By using this Promise, you don't need to listen for the 'render'-event, neither look for the value of the attribute 'rendered'."," *"," *"," * @module gallery-itsawidgetrenderpromise"," * @class Y.Widget"," * @since 0.1"," *"," * <i>Copyright (c) 2013 Marco Asbreuk - http://theinternetwizard.net</i>"," * Special thanks to Jeff Pinach - http://http://fromanegg.com :)"," * YUI BSD License - http://developer.yahoo.com/yui/license.html"," *","*/","","var DEFAULTTIMEOUT = 20000;","","/**"," * Promise that will be resolved once the widget is rendered."," * By using this Promise, you don't need to listen for the 'render'-event, neither look for the value of the attribute 'rendered'."," *"," * @method renderPromise"," * @param [timeout] {int} Timeout in ms, after which the promise will be rejected. Set to 0 to de-activate.<br />"," *                                      If omitted, a timeout of 20 seconds (20000ms) wil be used.<br />"," *                                      The timeout-value can only be set at the first time the Promise is called."," * @return {Y.Promise} promised response --> resolve(e) OR reject(reason)."," * @since 0.1","*/","Y.Widget.prototype.renderPromise = function(timeout) {","    var instance = this;","    if (!instance._renderPromise) {","        instance._renderPromise = new Y.Promise(function (resolve, reject) {","            instance.after(","                'render',","                function(e) {","                    resolve(e);","                }","            );","            if (instance.get('rendered')) {","                resolve();","            }","            if (timeout !== 0) {","                Y.later(","                    timeout || DEFAULTTIMEOUT,","                    null,","                    function() {","                        var errormessage = 'renderPromise is rejected by timeout of '+(timeout || DEFAULTTIMEOUT)+ ' ms';","                        reject(new Error(errormessage));","                    }","                );","            }","        });","    }","    return instance._renderPromise;","};","","}, 'gallery-2013.06.13-01-19', {\"requires\": [\"yui-base\", \"widget\", \"promise\"]});","","}());"]};
}
var __cov_$5EiNGQozWPmlHzyo2_Gmg = __coverage__['build/gallery-itsawidgetrenderpromise/gallery-itsawidgetrenderpromise.js'];
__cov_$5EiNGQozWPmlHzyo2_Gmg.s['1']++;YUI.add('gallery-itsawidgetrenderpromise',function(Y,NAME){__cov_$5EiNGQozWPmlHzyo2_Gmg.f['1']++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['2']++;'use strict';__cov_$5EiNGQozWPmlHzyo2_Gmg.s['3']++;var DEFAULTTIMEOUT=20000;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['4']++;Y.Widget.prototype.renderPromise=function(timeout){__cov_$5EiNGQozWPmlHzyo2_Gmg.f['2']++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['5']++;var instance=this;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['6']++;if(!instance._renderPromise){__cov_$5EiNGQozWPmlHzyo2_Gmg.b['1'][0]++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['7']++;instance._renderPromise=new Y.Promise(function(resolve,reject){__cov_$5EiNGQozWPmlHzyo2_Gmg.f['3']++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['8']++;instance.after('render',function(e){__cov_$5EiNGQozWPmlHzyo2_Gmg.f['4']++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['9']++;resolve(e);});__cov_$5EiNGQozWPmlHzyo2_Gmg.s['10']++;if(instance.get('rendered')){__cov_$5EiNGQozWPmlHzyo2_Gmg.b['2'][0]++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['11']++;resolve();}else{__cov_$5EiNGQozWPmlHzyo2_Gmg.b['2'][1]++;}__cov_$5EiNGQozWPmlHzyo2_Gmg.s['12']++;if(timeout!==0){__cov_$5EiNGQozWPmlHzyo2_Gmg.b['3'][0]++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['13']++;Y.later((__cov_$5EiNGQozWPmlHzyo2_Gmg.b['4'][0]++,timeout)||(__cov_$5EiNGQozWPmlHzyo2_Gmg.b['4'][1]++,DEFAULTTIMEOUT),null,function(){__cov_$5EiNGQozWPmlHzyo2_Gmg.f['5']++;__cov_$5EiNGQozWPmlHzyo2_Gmg.s['14']++;var errormessage='renderPromise is rejected by timeout of '+((__cov_$5EiNGQozWPmlHzyo2_Gmg.b['5'][0]++,timeout)||(__cov_$5EiNGQozWPmlHzyo2_Gmg.b['5'][1]++,DEFAULTTIMEOUT))+' ms';__cov_$5EiNGQozWPmlHzyo2_Gmg.s['15']++;reject(new Error(errormessage));});}else{__cov_$5EiNGQozWPmlHzyo2_Gmg.b['3'][1]++;}});}else{__cov_$5EiNGQozWPmlHzyo2_Gmg.b['1'][1]++;}__cov_$5EiNGQozWPmlHzyo2_Gmg.s['16']++;return instance._renderPromise;};},'gallery-2013.06.13-01-19',{'requires':['yui-base','widget','promise']});
