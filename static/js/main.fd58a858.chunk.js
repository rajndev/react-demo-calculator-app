(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},50:function(e,t){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),o=n(7),s=n(10),u=n(23),l=n(14),d=n(13),h=n(30),f=n.n(h),p=(n(37),n(1)),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).textareaRef=a.a.createRef(null),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getRef(this.textareaRef),f()("#user-inputs").on("keypress cut copy paste",(function(e){var t={NUMPAD_ZERO_KEY:48,NUMPAD_NINE_KEY:57,NUMPAD_DOT_KEY:46,NUMPAD_PLUS_KEY:43,NUMPAD_MINUS_KEY:45,NUMPAD_MULTIPLY_KEY:42,NUMPAD_DIVIDE_KEY:47};return Object.freeze(t),e.which>=t.NUMPAD_ZERO_KEY&&e.which<=t.NUMPAD_NINE_KEY||e.which===t.NUMPAD_DOT_KEY||e.which===t.NUMPAD_PLUS_KEY||e.which===t.NUMPAD_MINUS_KEY||e.which===t.NUMPAD_MULTIPLY_KEY||e.which===t.NUMPAD_DIVIDE_KEY||(e.preventDefault(),!1)})),this.textareaRef.current.setSelectionRange(0,0),this.textareaRef.current.blur(),this.textareaRef.current.focus(),this.textareaRef.current.setSelectionRange(0,0)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"display",children:[Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{type:"text",id:"user-inputs",className:"user-inputs",value:this.props.value,ref:this.textareaRef,onChange:this.props.onChange,onSelect:this.props.onSelect,maxLength:"50"})}),Object(p.jsxs)("div",{className:"counter",children:[this.props.counter,"/50"]})]})}}]),n}(r.Component),j=(n(39),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"keys",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"C",className:"helper rounded-circle",onClick:function(t){return e.props.onClearKeyClick(t.target.name)},children:"C"}),Object(p.jsx)("button",{name:"%",className:"helper rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"%"}),Object(p.jsx)("button",{name:"()",className:"helper rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"( )"}),Object(p.jsx)("button",{name:",",className:"operator rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"+"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"7",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"7"}),Object(p.jsx)("button",{name:"8",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"8"}),Object(p.jsx)("button",{name:"9",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"9"}),Object(p.jsx)("button",{name:"-",className:"operator rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"-"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"4",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"4"}),Object(p.jsx)("button",{name:"5",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"5"}),Object(p.jsx)("button",{name:"6",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"6"}),Object(p.jsx)("button",{name:"*",className:"operator rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"x"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"1",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"1"}),Object(p.jsx)("button",{name:"2",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"2"}),Object(p.jsx)("button",{name:"3",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"3"}),Object(p.jsx)("button",{name:"/",className:"operator rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"\xf7"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"0",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"0"}),Object(p.jsx)("button",{name:".",className:"rounded-circle",onClick:function(t){return e.props.onKeyClick(t.target.name)},children:"."}),Object(p.jsx)("button",{name:"\u2190",className:"rounded-circle",onClick:function(t){return e.props.onBackKeyClick(t.target.name)},children:"\u2190"}),Object(p.jsx)("button",{name:"=",className:"equals-key rounded-circle",onClick:function(t){return e.props.onEqualsKeyClick(t)},children:"="})]})]})}}]),n}(r.Component)),b=n(56),x=(n(40),function e(){Object(o.a)(this,e)});x.getNextParenthesis=function(e){return 0===e.state.cursorPosition.start?"(":e.state.runningValue.lastIndexOf("(",e.state.cursorPosition.start-1)>e.state.runningValue.lastIndexOf(")",e.state.cursorPosition.start-1)?")":"("};var m=x,O=n(12),C=(n(41),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleKeyClick=function(e){if(!(r.counter<=0)){"()"===e&&(e=m.getNextParenthesis(Object(u.a)(r)));var t=r.state.cursorPosition.start===r.state.runningValue.length+1;if(""===r.state.runningValue||t)return r.setState((function(t){return{runningValue:t.runningValue.concat(e),cursorPosition:{start:t.cursorPosition.start+1,end:t.cursorPosition.end+1}}}),(function(){r.setInputSelectionRange(r.state.cursorPosition.start,r.state.cursorPosition.start),r.counter=50-r.state.runningValue.length})),void(null!=r.textareaRef&&(r.textareaRef.current.scrollTop=r.textareaRef.current.scrollHeight));r.insertTextIntoDisplay(e)}},r.insertTextIntoDisplay=function(e){var t=r.textareaRef.current.selectionStart,n=r.textareaRef.current.selectionEnd,a=r.state.runningValue.substring(0,t),c=r.state.runningValue.substring(n,r.state.runningValue.length);"("!==e&&")"!==e||(e=m.getNextParenthesis(Object(u.a)(r)));var i=a+e+c;r.setState({runningValue:i,cursorPosition:{start:t+1,end:n+1}},(function(){r.setInputSelectionRange(r.state.cursorPosition.start,r.state.cursorPosition.start),r.counter=50-r.state.runningValue.length}))},r.handleInputChange=function(){r.setState({runningValue:r.textareaRef.current.value},(function(){r.counter=50-r.state.runningValue.length}))},r.handleSelect=function(e){if(""===r.state.runningValue)return r.setState({cursorPosition:{start:0,end:0}}),void r.setInputSelectionRange(0,0);r.setState({cursorPosition:{start:e.target.selectionStart,end:e.target.selectionEnd}},(function(){r.setInputSelectionRange(r.state.cursorPosition.start,r.state.cursorPosition.end)}))},r.handleEqualsClick=function(){var e=0;try{if(r.state.runningValue.includes("/0"))return void r.showModal("zero");e=b.a(r.state.runningValue),r.setState({runningValue:e.toString()},(function(){var e=50-r.state.runningValue.length;r.counter=e<0?0:e}));var t=e.toString().length;r.setState({cursorPosition:{start:t,end:t}},(function(){r.setInputSelectionRange(t,t)}))}catch(n){return void r.showModal("invalid")}},r.handleClearClick=function(){r.setState({runningValue:"",cursorPosition:{start:0,end:0}}),r.setInputSelectionRange(0,0),r.counter=50},r.handleBackClick=function(){var e=0===r.textareaRef.current.selectionStart&&0===r.textareaRef.current.selectionEnd;if(""===r.state.runningValue||e)return r.setInputSelectionRange(0,0),void(r.counter=50);var t=r.state.runningValue.substring(r.textareaRef.current.selectionStart,r.textareaRef.current.selectionEnd);r.deleteTextFromDisplay(t)},r.deleteTextFromDisplay=function(e){var t=r.textareaRef.current.selectionStart,n=r.textareaRef.current.selectionEnd,a=r.state.runningValue.substring(0,t),c=r.state.runningValue.substring(n,r.state.runningValue.length),i=e?a+c:a.slice(0,-1)+c;if(i)return r.setState({runningValue:i},(function(){r.counter=50-r.state.runningValue.length})),e?void r.setState({cursorPosition:{start:t,end:n}},(function(){r.setInputSelectionRange(r.state.cursorPosition.start,r.state.cursorPosition.start)})):void r.setState((function(e){return{cursorPosition:{start:e.cursorPosition.start-1,end:e.cursorPosition.end-1}}}),(function(){r.setInputSelectionRange(r.state.cursorPosition.start,r.state.cursorPosition.start)}));r.setState({runningValue:"",cursorPosition:{start:0,end:0}}),r.setInputSelectionRange(0,0),r.counter=50},r.setInputSelectionRange=function(e,t){r.textareaRef.current.setSelectionRange(e,t),r.textareaRef.current.blur(),r.textareaRef.current.focus(),r.textareaRef.current.setSelectionRange(e,t)},r.getTextareaRef=function(e){r.textareaRef=e},r.showModal=function(e){"invalid"!==e?r.setState({isDivideByZeroModalOpen:!0}):r.setState({isInvalidInputModalOpen:!0})},r.hideModal=function(e){"invalid"!==e?r.setState({isDivideByZeroModalOpen:!1}):r.setState({isInvalidInputModalOpen:!1})},r.state={runningValue:"",cursorPosition:{start:0,end:0},isDivideByZeroModalOpen:!1,isInvalidInputModalOpen:!1},r.textareaRef=a.a.createRef(null),r.counter=50,r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)(O.a,{show:this.state.isInvalidInputModalOpen,onHide:function(){return e.hideModal("invalid")},children:[Object(p.jsx)(O.a.Header,{closeButton:!0,children:Object(p.jsx)(O.a.Title,{children:"Input Error"})}),Object(p.jsx)(O.a.Body,{children:"Your mathematical expression is invalid!"})]}),Object(p.jsxs)(O.a,{show:this.state.isDivideByZeroModalOpen,onHide:function(){return e.hideModal("zero")},children:[Object(p.jsx)(O.a.Header,{closeButton:!0,children:Object(p.jsx)(O.a.Title,{children:"Invalid Operation"})}),Object(p.jsx)(O.a.Body,{children:"You can't divide by 0!"})]}),Object(p.jsx)(g,{value:this.state.runningValue,counter:this.counter,onChange:function(){return e.handleInputChange()},onSelect:function(t){return e.handleSelect(t)},getRef:function(t){return e.getTextareaRef(t)}}),Object(p.jsx)(j,{onKeyClick:function(t){return e.handleKeyClick(t)},onEqualsKeyClick:function(){return e.handleEqualsClick()},onClearKeyClick:function(){return e.handleClearClick()},onBackKeyClick:function(){return e.handleBackClick()}})]})}}]),n}(r.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.fd58a858.chunk.js.map