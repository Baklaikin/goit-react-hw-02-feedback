(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={container:"Statistics_container__28xGv",title:"Statistics_title__3i6uN",values:"Statistics_values__cGSzV",negativeTitle:"Statistics_negativeTitle__1NWBd",paragraph:"Statistics_paragraph__1qmjP"}},,,function(e,t,a){e.exports={button:"FeedbackOptions_button__2r5lb",wrapper:"FeedbackOptions_wrapper__DgVpe"}},,,,,function(e,t,a){e.exports={negativeTitle:"Notification_negativeTitle__3aeSi"}},function(e,t,a){e.exports={title:"Section_title__3YGkR"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(5),r=a.n(i),s=(a(17),a(18),a(6)),o=a(7),l=a(8),u=a(12),d=a(11),b=a(1),j=a.n(b),p=a(9),h=a.n(p),v=a(0);var g=function(e){var t=e.message;return Object(v.jsx)("h2",{className:h.a.negativeTitle,children:t})};var f=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,i=e.positiveFeedback;return Object(v.jsx)("div",{className:j.a.container,children:Object(v.jsx)("div",{className:j.a.values,children:0===c?Object(v.jsx)(g,{message:"No feedback given"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:j.a.paragraph,children:["Good: ",t]}),Object(v.jsxs)("p",{className:j.a.paragraph,children:["Neutral: ",a]}),Object(v.jsxs)("p",{className:j.a.paragraph,children:["Bad: ",n]}),Object(v.jsxs)("p",{className:j.a.paragraph,children:["Total: ",c]}),Object(v.jsxs)("p",{className:j.a.paragraph,children:["Positive feedback: ",i,"%"]})]})})})},O=a(4),x=a.n(O);var _=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(v.jsx)("div",{className:x.a.wrapper,children:t.map((function(e){return Object(v.jsx)("button",{type:"button",name:e,className:x.a.button,onClick:a,children:e},e)}))})},k=a(10),m=a.n(k);var F=function(e){var t=e.title,a=e.children;return Object(v.jsxs)("section",{children:[Object(v.jsx)("h2",{className:m.a.title,children:t}),a]})},N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n,c=e.options;return Object(o.a)(this,a),(n=t.call(this)).onButtonClick=function(e){n.setState((function(t){var a=e.target.name.toLowerCase();return Object(s.a)({},a,t[a]+1)})),n.countTotalFeedback(),n.countPositiveFeedbackPercentage()},n.countTotalFeedback=function(){var e=n.state;return e.good+e.neutral+e.bad},n.countPositiveFeedbackPercentage=function(){var e=n.state,t=e.good,a=e.neutral,c=e.bad;return Math.floor((t+a)/(t+a+c)*100)},n.state={good:0,neutral:0,bad:0,total:0,positiveFeedback:0},n.options=c,n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{title:"Please leave feedback",children:Object(v.jsx)(_,{options:this.options,onLeaveFeedback:this.onButtonClick})}),Object(v.jsx)(F,{title:"Statistics",children:Object(v.jsx)(f,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.a.Component),S=["Good","Neutral","Bad"];var P=function(){return Object(v.jsx)(N,{options:S})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),T()}],[[20,1,2]]]);
//# sourceMappingURL=main.a8f2b74a.chunk.js.map