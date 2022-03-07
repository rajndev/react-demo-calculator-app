(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t){},41:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),s=n(20),c=n.n(s),u=n(6),o=n(7),i=n(15),l=n(14),f=n(21),d=n.n(f),p=(n(28),n(1)),g=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).textareaRef=a.a.createRef(null),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getRef(this.textareaRef),d()("#user-inputs").on("keypress",(function(e){if("Backspace"!==e.key)return e.preventDefault(),!1})),this.textareaRef.current.focus()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"display",children:Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{type:"text",id:"user-inputs",className:"user-inputs",value:this.props.value,ref:this.textareaRef,onChange:function(){return e.props.onChange()},onSelect:this.props.onSelect})})})}}]),n}(r.Component),h=(n(30),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(e){var t=this;return Object(p.jsx)("div",{className:"keys",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{name:"C",className:"helper",onClick:function(e){return t.props.onClearKeyClick(e.target.name)},children:"C"}),Object(p.jsx)("button",{name:"(",className:"helper",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"("}),Object(p.jsx)("button",{name:")",className:"helper",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:")"}),Object(p.jsx)("button",{name:"+",className:"operator",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"+"}),Object(p.jsx)("button",{name:"7",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"7"}),Object(p.jsx)("button",{name:"8",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"8"}),Object(p.jsx)("button",{name:"9",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"9"}),Object(p.jsx)("button",{name:"-",className:"operator",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"-"}),Object(p.jsx)("button",{name:"4",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"4"}),Object(p.jsx)("button",{name:"5",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"5"}),Object(p.jsx)("button",{name:"6",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"6"}),Object(p.jsx)("button",{name:"*",className:"operator",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"x"}),Object(p.jsx)("button",{name:"1",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"1"}),Object(p.jsx)("button",{name:"2",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"2"}),Object(p.jsx)("button",{name:"3",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"3"}),Object(p.jsx)("button",{name:"/",className:"operator",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"\xf7"}),Object(p.jsx)("button",{name:"0",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"0"}),Object(p.jsx)("button",{name:".",onClick:function(e){return t.props.onKeyClick(e.target.name)},children:"."}),Object(p.jsx)("button",{name:"\u2190",onClick:function(e){return t.props.onBackKeyClick(e.target.name)},children:"\u2190"}),Object(p.jsx)("button",{name:"=",className:"equals-key",onClick:function(e){return t.props.onEqualsKeyClick(e)},children:"="})]})})}}]),n}(r.Component)),b=n(43),j=(n(31),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleKeyClick=function(e){var t=0===r.state.runningValue.length,n=!1===r.state.selected;if(t||!t&&n)r.setState((function(t){return{runningValue:t.runningValue.concat(e)}})),null!=r.textareaRef&&(r.textareaRef.current.scrollTop=r.textareaRef.current.scrollHeight);else{var a=r.state.cursorPos.start,s=r.state.runningValue.substring(0,a),c=r.state.runningValue.substring(a,r.state.runningValue.length),u=s+e+c;r.setState((function(e){return{runningValue:u}})),r.setState((function(e){return{cursorPos:{start:e.cursorPos.start+1,end:e.cursorPos.end+1}}}),(function(){r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end),r.textareaRef.current.blur(),r.textareaRef.current.focus(),r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end)}))}},r.handleInputChange=function(){if(r.state.selected){var e=r.state.cursorPos.start,t=r.state.cursorPos.end,n=r.state.runningValue.substring(0,e),a=r.state.runningValue.substring(t,r.state.runningValue.length),s=n.slice(0,-1)+a;r.setState((function(e){return{runningValue:s}})),r.setState((function(e){return{cursorPos:{start:e.cursorPos.start-1,end:e.cursorPos.end-1}}}),(function(){r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end),r.textareaRef.current.blur(),r.textareaRef.current.focus(),r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end)}))}else r.setState({runningValue:r.textareaRef.current.value})},r.handleSelect=function(e){""===r.state.runningValue?(r.setState({selected:!1}),r.setState({cursorPos:{start:0,end:0}})):(r.setState({cursorPos:{start:e.target.selectionStart,end:e.target.selectionEnd}}),r.setState({selected:!0}))},r.handleEqualsClick=function(){var e=0,t=r.state.runningValue;try{if(r.state.runningValue.includes("/0"))return void alert("Cannot divide by 0! Please check your input.");e=b.a(t),r.setState({runningValue:e.toString()}),r.setState({selected:!1});var n=e.toString().length;r.setState({cursorPos:{start:n,end:n},parenthesesDeleted:!1,parenthesesCount:0,parentheses:"("})}catch(a){return void alert("Invalid calculation!")}},r.handleClearClick=function(){r.setState({runningValue:"",selected:!1,cursorPos:{start:0,end:0}})},r.handleBackClick=function(){if(r.state.selected&&0===r.state.cursorPos.start)r.setState({runningValue:"",selected:!1,cursorPos:{start:0,end:0}});else if(r.state.selected){var e=r.state.cursorPos.start,t=r.state.cursorPos.end,n=r.state.runningValue.substring(0,e),a=r.state.runningValue.substring(t,r.state.runningValue.length),s=n.slice(0,-1)+a;r.setState((function(e){return{runningValue:s}})),r.setState((function(e){return{cursorPos:{start:e.cursorPos.start-1,end:e.cursorPos.end-1}}}),(function(){r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end),r.textareaRef.current.blur(),r.textareaRef.current.focus(),r.textareaRef.current.setSelectionRange(r.state.cursorPos.start,r.state.cursorPos.end)}))}else{var c=r.state.runningValue.slice(0,-1);r.setState({runningValue:c})}},r.getTextareaRef=function(e){r.textareaRef=e},r.state={runningValue:"",cursorPos:{start:0,end:0},selected:!1},r.textareaRef=a.a.createRef(null),r}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(g,{value:this.state.runningValue,onChange:function(){return e.handleInputChange()},onSelect:function(t){return e.handleSelect(t)},getRef:function(t){return e.getTextareaRef(t)}}),Object(p.jsx)(h,{onKeyClick:function(t){return e.handleKeyClick(t)},onEqualsKeyClick:function(){return e.handleEqualsClick()},onClearKeyClick:function(){return e.handleClearClick()},onBackKeyClick:function(){return e.handleBackClick()}})]})}}]),n}(r.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.93568d3e.chunk.js.map