(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=(n(71),n(5)),l=n(6),u=n(9),s=n(7),d=n(10),p=n(2),f=n(18),h=n(4),m=n(16),b=n.n(m),g="https://gimme-the-notes-server.herokuapp.com",E={username:"",password:""},v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).inputHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(h.a)({},n.state.user,Object(f.a)({},a,r))})},n.submitHandler=function(e){e.preventDefault(),b.a.post("".concat(g,"/register"),n.state.user).then(function(e){if(200!==e.status)throw new Error("Something happened when registering");n.setState({message:"Registration successful",user:Object(h.a)({},E)})}).catch(function(e){console.log("the error is.... is...",e),n.setState({message:"Registration failed",user:Object(h.a)({},E)})})},n.state={user:Object(h.a)({},E),message:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",value:this.state.user.username,onChange:this.inputHandler}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",id:"password",name:"password",value:this.state.user.password,onChange:this.inputHandler}),r.a.createElement("button",{type:"submit"},"Submit")),this.state.message?r.a.createElement("h4",null,this.state.message):void 0)}}]),t}(a.Component),O=n(8),j=n(178),N="https://gimme-the-notes-server.herokuapp.com/notes/allTest/",y=function(e){return function(t){t({type:"SHOW_NOTE",payload:e})}},x="https://gimme-the-notes-server.herokuapp.com",w={username:"",password:""},k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).inputHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(h.a)({},n.state.user,Object(f.a)({},a,r))})},n.submitHandler=function(e){e.preventDefault(),b.a.post("".concat(x,"/login"),n.state.user).then(function(e){if(200!==e.status||!e.data)throw new Error;localStorage.setItem("secret_notes_token",e.data.token),localStorage.setItem("user_id",e.data.id),n.props.LoginCheck(e.data.id),n.props.history.push("/front-end-project-week")}).catch(function(e){console.log("the error was...",e),n.setState({message:"Authentication failed.",user:Object(h.a)({},w)})})},n.state={user:Object(h.a)({},w),message:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",value:this.state.user.username,onChange:this.inputHandler}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",id:"password",name:"password",value:this.state.user.password,onChange:this.inputHandler}),r.a.createElement("button",{type:"submit"},"Submit")),this.state.message?r.a.createElement("h4",null,this.state.message):void 0)}}]),t}(a.Component),_=Object(j.a)(Object(O.b)(function(e){return{user:e.user,error:e.error}},{LoginCheck:function(e){return function(t){console.log("Hey I'm the token...",e),t({type:"LOGIN",payload:e})}}})(k)),C=n(3),S=n(61);function T(){var e=Object(p.a)(["\n  background-color: teal;\n  color: white;\n  width: 90%;\n  font-size: 2rem;\n  padding: 30px 5%;\n  margin: 0 5%;\n  margin-bottom: 30px;\n"]);return T=function(){return e},e}function D(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n"]);return D=function(){return e},e}var I=C.a.div(D()),H=C.a.button(T()),A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).ViewNotesClickHandler=function(e){e.preventDefault(),n.props.goHome(n.props.activeNote),n.props.history.push("/front-end-project-week")},n.AddNoteClickHandler=function(e){e.preventDefault(),console.log("State before: ",n.state),n.setState({addingNote:!0}),console.log("State after: ",n.state),n.props.history.push("/front-end-project-week/new-note")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement(S.a,{to:"/front-end-project-week"}," ",r.a.createElement(H,{onClick:this.ViewNotesClickHandler},"View Your Notes")),r.a.createElement(S.a,{onClick:this.AddNoteClickHandler,to:"/front-end-project-week/new-note"}," ",r.a.createElement(H,{onClick:this.AddNoteClickHandler},"+ Create New Note")))}}]),t}(a.Component),L=Object(j.a)(Object(O.b)(function(e){return{addingNote:e.addingNote}},{showNote:y,goHome:function(){return function(e){e({type:"GO_HOME",payload:""})}}})(A)),z=n(175),F=n(177),G=n(62);function U(){var e=Object(p.a)(["\n  /* border: solid forestgreen; */\n"]);return U=function(){return e},e}function R(){var e=Object(p.a)(["\n  font-size: 2.4rem;\n  line-height: 1;\n  padding-left: 5%;\n"]);return R=function(){return e},e}function B(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: 25%;\n"]);return B=function(){return e},e}var M=C.a.div(B()),V=C.a.div(R()),X=C.a.h1(U()),P=function(e){return r.a.createElement(M,null,r.a.createElement(V,null,r.a.createElement(X,null,"Lambda Notes"),r.a.createElement("div",{className:"Testing Registration & Login"},r.a.createElement("nav",null,r.a.createElement(z.a,{to:"/front-end-project-week"},"Home"),r.a.createElement(z.a,{to:"/front-end-project-week/login"},"Login"),r.a.createElement(z.a,{to:"/front-end-project-week/register"},"Register")),r.a.createElement("section",null,r.a.createElement(F.a,null,r.a.createElement(G.a,{exact:!0,path:"/front-end-project-week/register",component:v}),r.a.createElement(G.a,{path:"/front-end-project-week/login",component:_}))))),r.a.createElement(L,null))},W=n(29),J=n.n(W);function Y(){var e=Object(p.a)(["\n  font-size: 1.75rem;\n  padding: 0 10%;\n  margin-top: -10px;\n"]);return Y=function(){return e},e}function $(){var e=Object(p.a)(["\n  font-size: 2.25rem;\n  font-weight: bold;\n  margin: 20px 10%;\n  border-bottom: 1px solid #aaa;\n  padding-bottom: 10px;\n"]);return $=function(){return e},e}function q(){var e=Object(p.a)(["\n  text-decoration: none;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    ytext-decoration: none;\n  }\n  color: black;\n"]);return q=function(){return e},e}function K(){var e=Object(p.a)(["\n  border: 1px solid gray;\n  background: white;\n  width: 31%;\n  height: 400px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  overflow: hidden;\n"]);return K=function(){return e},e}var Q=C.a.div(K()),Z=Object(C.a)(S.a)(q()),ee=C.a.header($()),te=C.a.p(Y()),ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).ViewNoteClickHandler=function(e){e.preventDefault(),console.log("the props on note are...",n.props),n.props.showNote(n.props.note),n.props.history.push("/front-end-project-week/".concat(n.props.note.id))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(Z,{onClick:this.ViewNoteClickHandler,to:"/front-end-project-week/".concat(this.props.note.id)},r.a.createElement(ee,null,this.props.note.title),r.a.createElement(te,null," ",r.a.createElement(J.a,{source:this.props.note.textBody}))))}}]),t}(a.Component),ae=Object(j.a)(Object(O.b)(function(e){return{activeNote:e.activeNote}},{showNote:y})(ne));function re(){var e=Object(p.a)(["\n  background: #f3f3f3;\n  width: 95%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0 2.5%;\n"]);return re=function(){return e},e}var oe=C.a.div(re()),ie=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user_id");this.props.getNotes(e)}},{key:"render",value:function(){return r.a.createElement(oe,null,this.props.fetchingNotes?r.a.createElement("h1",null,"Loading the notes..."):null,this.props.notes.map(function(e){return r.a.createElement(ae,{key:e.id,note:e})}))}}]),t}(a.Component),ce=Object(j.a)(Object(O.b)(function(e){return{notes:e.notes,fetchingNotes:e.fetchingNotes,error:e.error}},{getNotes:function(e){return function(t){t({type:"FETCHING_NOTES"}),b.a.get("".concat(N).concat(e)).then(function(e){t({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){t({type:"FETCHING_NOTES_FAILURE",payload:e})})}}})(ie));function le(){var e=Object(p.a)(["\n  height: 150px;\n  padding-top: 85px;\n  font-size: 2rem;\n  padding-left: 4%;\n"]);return le=function(){return e},e}function ue(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return ue=function(){return e},e}var se=C.a.div(ue()),de=C.a.div(le()),pe=function(e){return r.a.createElement(se,null,r.a.createElement(de,null,r.a.createElement("h2",null,"Your Notes:")),r.a.createElement(ce,null))};function fe(){var e=Object(p.a)(["\n  background-color: #2ac0c4;\n  color: white;\n  width: 30%;\n  font-size: 2rem;\n  padding: 30px 2.5%;\n  margin: 0 2.5%;\n  margin-bottom: 30px;\n"]);return fe=function(){return e},e}function he(){var e=Object(p.a)(["\n  /* height: 500px; */\n"]);return he=function(){return e},e}function me(){var e=Object(p.a)(["\n  /* font-size: 2rem;\n  border: 3px solid #555;\n  margin-bottom: 30px; */\n"]);return me=function(){return e},e}function be(){var e=Object(p.a)(["\n  flex-wrap: wrap;\n\n  input,\n  textarea {\n    margin-bottom: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 1.6rem;\n    padding: 15px 10px;\n  }\n\n  input {\n    width: 50%;\n    height: 35px;\n  }\n\n  textarea {\n    width: 98%;\n    height: 450px;\n  }\n"]);return be=function(){return e},e}function ge(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  padding: 25px 2.5%;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  height: 150px;\n  padding-top: 85px;\n  font-size: 2rem;\n  padding-left: 4%;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return ve=function(){return e},e}var Oe=C.a.div(ve()),je=C.a.div(Ee()),Ne=C.a.div(ge()),ye=C.a.form(be()),xe=C.a.input(me()),we=C.a.textarea(he()),ke=C.a.button(fe()),_e=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",textBody:"",user_id:null},n.handleInput=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value));var t=localStorage.getItem("user_id");console.log("FROM handleInput The user ID is...",t),n.setState({user_id:t})},n.clickHandler=function(e){e.preventDefault(),n.props.addNote(n.state),n.props.history.push("/front-end-project-week")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.textBody;e.id,localStorage.getItem("user_id");return r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement("h2",null,"Create New Note:")),r.a.createElement(Ne,null,r.a.createElement(ye,{onSubmit:this.clickHandler}," ",r.a.createElement(xe,{type:"text",placeholder:"Note Title",name:"title",value:t,onChange:this.handleInput}),r.a.createElement(we,{type:"text",placeholder:"Note Content",name:"textBody",value:n,onChange:this.handleInput}))),r.a.createElement(ke,{onClick:this.clickHandler,type:"submit"},"Save"))}}]),t}(a.Component),Ce=Object(j.a)(Object(O.b)(function(e){return{addingNote:e.addingNote,error:e.error}},{addNote:function(e){return function(t){t({type:"CREATE_NOTE"}),b.a.post("https://gimme-the-notes-server.herokuapp.com/notes/create",e).then(function(n){return t({type:"ADDING_NOTE_SUCCESS"}),b.a.get("".concat(N).concat(e.user_id)).then(function(e){t({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){t({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(n){console.log(e),t({type:"ADDING_NOTE_FAILURE",payload:n})})}}})(_e));function Se(){var e=Object(p.a)(["\n  margin-right: 50px;\n  color: black;\n"]);return Se=function(){return e},e}function Te(){var e=Object(p.a)(["\n  padding-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n"]);return Te=function(){return e},e}function De(){var e=Object(p.a)(["\n  text-align: left;\n"]);return De=function(){return e},e}function Ie(){var e=Object(p.a)(["\n  height: 150px;\n  padding-top: 85px;\n  font-size: 2rem;\n  padding-left: 4%;\n"]);return Ie=function(){return e},e}function He(){var e=Object(p.a)(["\n  text-align: left;\n  width: 75%;\n"]);return He=function(){return e},e}var Ae=C.a.div(He()),Le=C.a.div(Ie()),ze=C.a.div(De()),Fe=C.a.div(Te()),Ge=Object(C.a)(S.a)(Se()),Ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).DeleteClickHandler=function(e){e.preventDefault(),n.props.showDeleteModal()},n.EditClickHandler=function(e){e.preventDefault(),console.log("editing a note"),n.props.editingNote(),n.props.history.push("/front-end-project-week/edit-note")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("does this console log",this.props.editingNote),r.a.createElement(Ae,null,r.a.createElement(Le,null,r.a.createElement(Fe,null,r.a.createElement(Ge,{to:"/front-end-project-week/edit",onClick:this.EditClickHandler},"Edit"),r.a.createElement(Ge,{to:"/front-end-project-week",onClick:this.DeleteClickHandler},"Delete")),r.a.createElement("h2",null,this.props.activeNote.title),r.a.createElement(ze,null,r.a.createElement("p",null," ",r.a.createElement(J.a,{source:this.props.activeNote.textBody})))))}}]),t}(a.Component),Re=Object(j.a)(Object(O.b)(function(e){return{activeNote:e.activeNote,isActive:e.isActive,editingNote:e.editingNote,mightDelete:e.mightDelete}},{showDeleteModal:function(){return function(e){e({type:"MIGHT_DELETE_NOTE",payload:!0})}},editingNote:function(){return function(e){e({type:"EDIT_NOTE"})}}})(Ue));function Be(){var e=Object(p.a)(["\n  background-color: teal;\n  color: white;\n  width: 30%;\n  font-size: 2rem;\n  padding: 30px 2.5%;\n  margin: 0 2.5%;\n  margin-bottom: 30px;\n"]);return Be=function(){return e},e}function Me(){var e=Object(p.a)(["\n  /* height: 500px; */\n"]);return Me=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  /* font-size: 2rem;\n  border: 3px solid #555;\n  margin-bottom: 30px; */\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  flex-wrap: wrap;\n\n  input,\n  textarea {\n    margin-bottom: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 1.8rem;\n    padding: 15px 10px;\n  }\n\n  input {\n    width: 50%;\n    height: 35px;\n  }\n\n  textarea {\n    width: 98%;\n    height: 450px;\n  }\n"]);return Xe=function(){return e},e}function Pe(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  padding: 25px 2.5%;\n"]);return Pe=function(){return e},e}function We(){var e=Object(p.a)(["\n  height: 150px;\n  padding-top: 85px;\n  font-size: 2rem;\n  padding-left: 4%;\n"]);return We=function(){return e},e}function Je(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return Je=function(){return e},e}var Ye=C.a.div(Je()),$e=C.a.div(We()),qe=C.a.div(Pe()),Ke=C.a.form(Xe()),Qe=C.a.input(Ve()),Ze=C.a.textarea(Me()),et=C.a.button(Be()),tt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.activeNote.title,textBody:n.props.activeNote.textBody,id:n.props.activeNote.id,user_id:n.props.activeNote.user_id},n.handleInput=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.clickHandler=function(e){e.preventDefault(),console.log(n.props.activeNote),n.props.editNote(n.props.activeNote.id,n.state),n.props.history.push("/front-end-project-week")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.textBody;e.id,e.user_id;return console.log("fronm edit note render, this.props is... ",this.props),r.a.createElement(Ye,null,r.a.createElement($e,null,r.a.createElement("h2",null,"Edit Note:")),r.a.createElement(qe,null,r.a.createElement(Ke,{onSubmit:this.clickHandler},r.a.createElement(Qe,{type:"text",placeholder:"Note Title",name:"title",value:t,onChange:this.handleInput}),r.a.createElement(Ze,{type:"text",placeholder:"Note Content",name:"textBody",value:n,onChange:this.handleInput}))),r.a.createElement(et,{onClick:this.clickHandler},"Save"))}}]),t}(a.Component),nt=Object(j.a)(Object(O.b)(function(e){return{activeNote:e.activeNote,editingNote:e.editingNote,error:e.error}},{editNote:function(e,t){return function(n){b.a.put("".concat("https://gimme-the-notes-server.herokuapp.com/notes/edit","/").concat(e),t).then(function(e){return n({type:"EDIT_NOTE_SUCCESS",payload:e}),b.a.get("".concat(N).concat(t.user_id)).then(function(e){console.log("Crazy? the user_id is... ",t.id),n({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){n({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(e){n({type:"EDIT_NOTE_FAILURE",payload:e})})}}})(tt));function at(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n"]);return at=function(){return e},e}function rt(){var e=Object(p.a)(["\n  background-color: red;\n"]);return rt=function(){return e},e}function ot(){var e=Object(p.a)(["\n  font-size: 2rem;\n  width: 100%;\n  text-align: center;\n"]);return ot=function(){return e},e}function it(){var e=Object(p.a)(["\n  background-color: teal;\n  color: white;\n  width: 40%;\n  font-size: 2rem;\n  padding: 30px 20px;\n  margin-bottom: 30px;\n"]);return it=function(){return e},e}function ct(){var e=Object(p.a)(["\n  background: white;\n  height: 45vh;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  width: 80%;\n  border: 1px solid gray;\n  margin: 0 auto;\n  font-size: 62.5%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  border: solid black;\n  opacity: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20%;\n"]);return ct=function(){return e},e}function lt(){var e=Object(p.a)(["\n  background: #d7d7d7;\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  width: 100%;\n  max-width: 2000px;\n  border: 1px solid gray;\n  font-size: 62.5%;\n  box-sizing: border-box;\n  position: fixed;\n  opacity: 0.9;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n"]);return lt=function(){return e},e}var ut=C.a.div(lt()),st=C.a.div(ct()),dt=C.a.button(it()),pt=C.a.h1(ot()),ft=Object(C.a)(dt)(rt()),ht=C.a.div(at()),mt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.activeNote.title,textBody:n.props.activeNote.textBody,id:n.props.activeNote.id,user_id:n.props.activeNote.user_id},n.DeleteNoteClickHandler=function(e){e.preventDefault(),console.log("State before you trying to delete: ",n.state),console.log("ID before you trying to delete: ",n.props.activeNote.id),n.props.deleteNote(n.props.activeNote.id,n.state),console.log("State after you trying to delete: ",n.state),n.props.history.push("/front-end-project-week")},n.CancelDeleteNoteClickHandler=function(e){e.preventDefault(),n.props.hideDeleteModal()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ut,null,r.a.createElement(st,null,r.a.createElement(pt,null,"Are you sure you want to delete this?"),r.a.createElement(ht,null,r.a.createElement(ft,{onClick:this.DeleteNoteClickHandler},"Delete"),r.a.createElement(dt,{onClick:this.CancelDeleteNoteClickHandler},"No")))))}}]),t}(a.Component),bt=Object(j.a)(Object(O.b)(function(e){return{mightDelete:e.mightDelete,activeNote:e.activeNote}},{hideDeleteModal:function(){return function(e){e({type:"CANCEL_DELETE_NOTE",payload:!1})}},deleteNote:function(e,t){return function(n){n({type:"DELETE_NOTE"}),b.a.delete("".concat("https://gimme-the-notes-server.herokuapp.com/notes/delete","/").concat(e)).then(function(a){return n({type:"DELETING_NOTE_SUCCESS",payload:e}),b.a.get("".concat(N).concat(t.user_id)).then(function(e){n({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){n({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(e){n({type:"DELETING_NOTE_FAILURE",payload:e})})}}})(mt));n(172);function gt(){var e=Object(p.a)(["\n  background: #d7d7d7;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: top;\n  justify-content: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  width: 100%;\n  max-width: 2000px;\n  border: 1px solid gray;\n  margin: 0 auto;\n  font-size: 62.5%;\n  box-sizing: border-box;\n"]);return gt=function(){return e},e}var Et=C.a.div(gt()),vt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("trying to find the id",this.props),r.a.createElement("div",null,this.props.mightDelete?r.a.createElement(bt,null):null,r.a.createElement("div",{className:"App"},r.a.createElement(Et,null,r.a.createElement(G.a,{path:"/front-end-project-week",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(G.a,{exact:!0,path:"/front-end-project-week",render:function(e){return r.a.createElement(pe,e)}}),r.a.createElement(G.a,{exact:!0,path:"/front-end-project-week/new-note",render:function(e){return r.a.createElement(Ce,e)}}),r.a.createElement(G.a,{exact:!0,path:"/front-end-project-week/edit-note",render:function(e){return r.a.createElement(nt,e)}}),this.props.activeNote&&!this.props.editingNote?r.a.createElement(Re,null):null)))}}]),t}(a.Component),Ot=Object(j.a)(Object(O.b)(function(e){return{activeNote:e.activeNote,isActive:e.isActive,editingNote:e.editingNote,mightDelete:e.mightDelete}},{})(vt)),jt=n(63),Nt=n(64),yt=n.n(Nt),xt=n(22),wt={notes:[],fetchingNotes:!1,addingNote:!1,isActive:!1,activeNote:null,mightDelete:!1,deletingNote:!1,editingNote:!1,error:null,id:null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=n(176),_t=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):xt.c)(Object(xt.a)(jt.a,yt.a)),Ct=Object(xt.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_NOTES":return Object(h.a)({},e,{fetchingNotes:!0});case"FETCHING_NOTES_SUCCESS":return Object(h.a)({},e,{fetchingNotes:!1,notes:t.payload,error:null});case"LOGIN":return Object(h.a)({},e,{id:t.payload,error:null});case"FETCHING_NOTES_FAILURE":return Object(h.a)({},e,{fetchingNotes:!1,error:t.payload,activeNote:null});case"CREATE_NOTE":return Object(h.a)({},e,{addingNote:!0});case"ADDING_NOTE_SUCCESS":return Object(h.a)({},e,{addingNote:!1,error:null});case"ADDING_NOTE_FAILURE":return Object(h.a)({},e,{addingNote:!1,error:t.payload});case"SHOW_NOTE":return Object(h.a)({},e,{isActive:!0,activeNote:t.payload});case"GO_HOME":return Object(h.a)({},e,{activeNote:null,editingNote:!1});case"MIGHT_DELETE_NOTE":return Object(h.a)({},e,{mightDelete:!0});case"CANCEL_DELETE_NOTE":return Object(h.a)({},e,{mightDelete:!1});case"DELETE_NOTE":return Object(h.a)({},e,{deletingNote:!0,mightDelete:!1});case"DELETING_NOTE_SUCCESS":case"DELETING_NOTE_FAILURE":return Object(h.a)({},e,{deletingNote:!1,activeNote:null});case"EDIT_NOTE":return Object(h.a)({},e,{editingNote:!0});case"EDIT_NOTE_SUCCESS":case"EDIT_NOTE_FAILURE":return Object(h.a)({},e,{editingNote:!1,activeNote:null});default:return e}},_t);i.a.render(r.a.createElement(O.a,{store:Ct},r.a.createElement(kt.a,null,r.a.createElement(G.a,{path:"/",component:Ot}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(174)},71:function(e,t,n){}},[[66,2,1]]]);
//# sourceMappingURL=main.252aadd0.chunk.js.map