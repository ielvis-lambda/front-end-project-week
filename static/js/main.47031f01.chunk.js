(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n.n(o),c=(n(72),n(5)),l=n(6),u=n(9),s=n(7),d=n(10),p=n(3),f=n(18),h=n(4),m=n(14),g=n.n(m),b="https://gimme-the-notes-server.herokuapp.com",E={username:"",password:""},O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).inputHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(h.a)({},n.state.user,Object(f.a)({},a,r))})},n.submitHandler=function(e){e.preventDefault(),g.a.post("".concat(b,"/register"),n.state.user).then(function(e){if(200!==e.status)throw new Error("Something happened when registering");n.setState({message:"Registration successful",user:Object(h.a)({},E)})}).catch(function(e){console.log("the error is.... is...",e),n.setState({message:"Registration failed",user:Object(h.a)({},E)})})},n.state={user:Object(h.a)({},E),message:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",value:this.state.user.username,onChange:this.inputHandler}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",id:"password",name:"password",value:this.state.user.password,onChange:this.inputHandler}),r.a.createElement("button",{type:"submit"},"Submit")),this.state.message?r.a.createElement("h4",null,this.state.message):void 0)}}]),t}(a.Component),v=n(8),j=n(178),N="https://gimme-the-notes-server.herokuapp.com/notes/allTest/",y=function(e){return function(t){t({type:"SHOW_NOTE",payload:e})}},x=function(){return function(e){e({type:"MIGHT_DELETE_NOTE",payload:!0})}},w=function(){return function(e){e({type:"EDIT_NOTE"})}},k=function(e){return function(t){console.log("Hey I'm the token...",e),t({type:"LOGIN",payload:e})}},_="https://gimme-the-notes-server.herokuapp.com",C={username:"",password:""},S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).inputHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(h.a)({},n.state.user,Object(f.a)({},a,r))})},n.submitHandler=function(e){e.preventDefault(),g.a.post("".concat(_,"/login"),n.state.user).then(function(e){if(200!==e.status||!e.data)throw new Error;localStorage.setItem("secret_notes_token",e.data.token),localStorage.setItem("user_id",e.data.id),n.props.LoginCheck(e.data.id),n.props.history.push("/front-end-project-week")}).catch(function(e){console.log("the error was...",e),n.setState({message:"Authentication failed.",user:Object(h.a)({},C)})})},n.state={user:Object(h.a)({},C),message:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",value:this.state.user.username,onChange:this.inputHandler}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",id:"password",name:"password",value:this.state.user.password,onChange:this.inputHandler}),r.a.createElement("button",{type:"submit"},"Submit")),this.state.message?r.a.createElement("h4",null,this.state.message):void 0)}}]),t}(a.Component),T=Object(j.a)(Object(v.b)(function(e){return{user:e.user,error:e.error}},{LoginCheck:k})(S)),D=n(2),I=n(61);function H(){var e=Object(p.a)(["\n  background-color: #ef62a4;\n  color: white;\n  width: 90%;\n  font-size: 1.2rem;\n  padding: 30px 5%;\n  margin: 0 5%;\n  margin-top: 20px;\n"]);return H=function(){return e},e}function A(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n"]);return A=function(){return e},e}var L=D.default.div(A()),G=D.default.button(H()),U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).ViewNotesClickHandler=function(e){e.preventDefault(),n.props.goHome(n.props.activeNote),n.props.history.push("/front-end-project-week")},n.AddNoteClickHandler=function(e){e.preventDefault(),console.log("State before: ",n.state),n.setState({addingNote:!0}),console.log("State after: ",n.state),n.props.history.push("/front-end-project-week/new-note")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L,null,r.a.createElement(I.a,{to:"/front-end-project-week"}," ",r.a.createElement(G,{onClick:this.ViewNotesClickHandler},"View Your Notes")),r.a.createElement(I.a,{onClick:this.AddNoteClickHandler,to:"/front-end-project-week/new-note"}," ",r.a.createElement(G,{onClick:this.AddNoteClickHandler},"+ Create New Note")))}}]),t}(a.Component),z=Object(j.a)(Object(v.b)(function(e){return{addingNote:e.addingNote}},{showNote:y,goHome:function(){return function(e){e({type:"GO_HOME",payload:""})}}})(U)),F=n(176);function R(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: #ef62a4;\n  width: 95%;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]);return R=function(){return e},e}function B(){var e=Object(p.a)(["\n  width: 100%;\n"]);return B=function(){return e},e}var M=D.default.div(B()),V=D.default.nav(R()),X={loggingIn:null,registering:null},P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).clickHandler=function(e){e.preventDefault(),console.log("the state is ... ",n.state),console.log("the props are ... ",n.props),localStorage.removeItem("secret_notes_token"),localStorage.removeItem("user_id"),console.log("the props are ... ",n.props),n.props.logOut(),n.props.history.push("/fronte-end-project-week/loggedOut")},n.state={status:Object(h.a)({},X),message:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement(V,null,r.a.createElement(F.a,{to:"/front-end-project-week"},"Home"),r.a.createElement(F.a,{to:"/front-end-project-week/login"},"Login"),r.a.createElement(F.a,{to:"/front-end-project-week/register"},"Register"),r.a.createElement(F.a,{to:"/front-end-project-week/logOut"}," ",r.a.createElement("div",{onClick:this.clickHandler},"Logout")))))}}]),t}(a.Component),W=Object(j.a)(Object(v.b)(function(e){return{user:e.user,error:e.error,notes:e.notes}},{LoginCheck:k,logOut:function(){return function(e){e({type:"LOGOUT"})}}})(P)),J=n(179),Y=n(62);function $(){var e=Object(p.a)(["\n  /* border: solid forestgreen; */\n"]);return $=function(){return e},e}function q(){var e=Object(p.a)(["\n  font-size: 2.4rem;\n  line-height: 1;\n  padding-left: 5%;\n  margin-top: 30px;\n"]);return q=function(){return e},e}function K(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: 25%;\n"]);return K=function(){return e},e}var Q=D.default.div(K()),Z=D.default.div(q()),ee=D.default.h1($()),te=function(e){return r.a.createElement(Q,null,r.a.createElement(Z,null,r.a.createElement(ee,null,"Lambda Notes"),r.a.createElement(W,null),r.a.createElement("div",{className:"Testing Registration & Login"},r.a.createElement("section",null,r.a.createElement(J.a,null,r.a.createElement(Y.a,{exact:!0,path:"/front-end-project-week/register",component:O}),r.a.createElement(Y.a,{path:"/front-end-project-week/login",component:T}))))),r.a.createElement(z,null))},ne=n(23),ae=n.n(ne);function re(){var e=Object(p.a)(["\n  font-size: 1.2rem;\n  padding: 0 10%;\n  margin-top: -10px;\n  margin-bottom: 20px;\n"]);return re=function(){return e},e}function oe(){var e=Object(p.a)(["\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin: 20px 10%;\n  border-bottom: 1px solid #aaa;\n  padding-bottom: 10px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n  text-decoration: none;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    ytext-decoration: none;\n  }\n  color: black;\n"]);return ie=function(){return e},e}function ce(){var e=Object(p.a)(["\n  border: 1px solid gray;\n  background: white;\n  width: 31%;\n  height: auto;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  overflow: hidden;\n  border: solid #ef62a4;\n"]);return ce=function(){return e},e}var le=D.default.div(ce()),ue=Object(D.default)(I.a)(ie()),se=D.default.header(oe()),de=D.default.p(re()),pe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).ViewNoteClickHandler=function(e){e.preventDefault(),console.log("the props on note are...",n.props),n.props.showNote(n.props.note),n.props.history.push("/front-end-project-week/".concat(n.props.note.id))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(le,null,r.a.createElement(ue,{onClick:this.ViewNoteClickHandler,to:"/front-end-project-week/".concat(this.props.note.id)},r.a.createElement(se,null,this.props.note.title),r.a.createElement(de,null," ",r.a.createElement(ae.a,{source:this.props.note.textBody}))))}}]),t}(a.Component),fe=Object(j.a)(Object(v.b)(function(e){return{activeNote:e.activeNote}},{showNote:y})(pe));function he(){var e=Object(p.a)(["\n  background: #f3f3f3;\n  width: 95%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0 2.5%;\n"]);return he=function(){return e},e}var me=D.default.div(he()),ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user_id");this.props.getNotes(e)}},{key:"render",value:function(){var e=localStorage.getItem("user_id");return r.a.createElement(me,null,this.props.fetchingNotes&&e?r.a.createElement("h1",null,"Loading the notes..."):null,this.props.notes.map(function(e){return r.a.createElement(fe,{key:e.id,note:e})}))}}]),t}(a.Component),be=Object(j.a)(Object(v.b)(function(e){return{notes:e.notes,fetchingNotes:e.fetchingNotes,error:e.error}},{getNotes:function(e){return function(t){t({type:"FETCHING_NOTES"}),g.a.get("".concat(N).concat(e)).then(function(e){t({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){t({type:"FETCHING_NOTES_FAILURE",payload:e})})}}})(ge));function Ee(){var e=Object(p.a)(["\n  padding-top: 85px;\n  font-size: 1.4rem;\n  padding-left: 4%;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return Oe=function(){return e},e}var ve=D.default.div(Oe()),je=D.default.div(Ee()),Ne=function(e){return r.a.createElement(ve,null,r.a.createElement(je,null,r.a.createElement("h2",null,"Your Notes:")),r.a.createElement(be,null))};function ye(){var e=Object(p.a)(["\n  background-color: #ef62a4;\n  color: white;\n  width: 30%;\n  font-size: 1.4rem;\n  padding: 30px 2.5%;\n  margin: 0 2.5%;\n  margin-bottom: 30px;\n"]);return ye=function(){return e},e}function xe(){var e=Object(p.a)(["\n  /* height: 500px; */\n"]);return xe=function(){return e},e}function we(){var e=Object(p.a)(["\n  /* font-size: 2rem;\n  border: 3px solid #555;\n  margin-bottom: 30px; */\n"]);return we=function(){return e},e}function ke(){var e=Object(p.a)(["\n  flex-wrap: wrap;\n\n  input,\n  textarea {\n    margin-bottom: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 1.2rem;\n    padding: 15px 10px;\n  }\n\n  input {\n    width: 50%;\n    height: 35px;\n  }\n\n  textarea {\n    width: 98%;\n    height: 450px;\n  }\n"]);return ke=function(){return e},e}function _e(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  padding: 25px 2.5%;\n"]);return _e=function(){return e},e}function Ce(){var e=Object(p.a)(["\n  height: 150px;\n  padding-top: 85px;\n  font-size: 1.4rem;\n  padding-left: 4%;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return Se=function(){return e},e}var Te=D.default.div(Se()),De=D.default.div(Ce()),Ie=D.default.div(_e()),He=D.default.form(ke()),Ae=D.default.input(we()),Le=D.default.textarea(xe()),Ge=D.default.button(ye()),Ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",textBody:"",user_id:null},n.handleInput=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value));var t=localStorage.getItem("user_id");console.log("FROM handleInput The user ID is...",t),n.setState({user_id:t})},n.clickHandler=function(e){e.preventDefault(),n.props.addNote(n.state),n.props.history.push("/front-end-project-week")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.textBody;e.id,localStorage.getItem("user_id");return r.a.createElement(Te,null,r.a.createElement(De,null,r.a.createElement("h2",null,"Create New Note:")),r.a.createElement(Ie,null,r.a.createElement(He,{onSubmit:this.clickHandler}," ",r.a.createElement(Ae,{type:"text",placeholder:"Note Title",name:"title",value:t,onChange:this.handleInput}),r.a.createElement(Le,{type:"text",placeholder:"Note Content",name:"textBody",value:n,onChange:this.handleInput}))),r.a.createElement(Ge,{onClick:this.clickHandler,type:"submit"},"Save"))}}]),t}(a.Component),ze=Object(j.a)(Object(v.b)(function(e){return{addingNote:e.addingNote,error:e.error}},{addNote:function(e){return function(t){t({type:"CREATE_NOTE"}),g.a.post("https://gimme-the-notes-server.herokuapp.com/notes/create",e).then(function(n){return t({type:"ADDING_NOTE_SUCCESS"}),g.a.get("".concat(N).concat(e.user_id)).then(function(e){t({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){t({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(n){console.log(e),t({type:"ADDING_NOTE_FAILURE",payload:n})})}}})(Ue));function Fe(){var e=Object(p.a)(["\n  margin-right: 50px;\n  color: black;\n"]);return Fe=function(){return e},e}function Re(){var e=Object(p.a)(["\n  padding-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n"]);return Re=function(){return e},e}function Be(){var e=Object(p.a)(["\n  text-align: left;\n"]);return Be=function(){return e},e}function Me(){var e=Object(p.a)(["\n  padding-top: 85px;\n  font-size: 2rem;\n  padding-left: 4%;\n"]);return Me=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  text-align: left;\n  width: 75%;\n"]);return Ve=function(){return e},e}var Xe=D.default.div(Ve()),Pe=D.default.div(Me()),We=D.default.div(Be()),Je=D.default.div(Re()),Ye=Object(D.default)(I.a)(Fe()),$e=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).DeleteClickHandler=function(e){e.preventDefault(),n.props.showDeleteModal()},n.EditClickHandler=function(e){e.preventDefault(),console.log("editing a note"),n.props.editingNote(),n.props.history.push("/front-end-project-week/edit-note")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("does this console log",this.props.editingNote),r.a.createElement(Xe,null,r.a.createElement(Pe,null,r.a.createElement(Je,null,r.a.createElement(Ye,{to:"/front-end-project-week/edit",onClick:this.EditClickHandler},"Edit"),r.a.createElement(Ye,{to:"/front-end-project-week",onClick:this.DeleteClickHandler},"Delete")),r.a.createElement("h2",null,this.props.activeNote.title),r.a.createElement(We,null,r.a.createElement("p",null," ",r.a.createElement(ae.a,{source:this.props.activeNote.textBody})))))}}]),t}(a.Component),qe=Object(j.a)(Object(v.b)(function(e){return{activeNote:e.activeNote,isActive:e.isActive,editingNote:e.editingNote,mightDelete:e.mightDelete}},{showDeleteModal:x,editingNote:w})($e));function Ke(){var e=Object(p.a)(["\n  text-align: left;\n  width: 75%;\n"]);return Ke=function(){return e},e}var Qe=D.default.div(Ke()),Ze=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("does this console log",this.props.editingNote),r.a.createElement(Qe,null,r.a.createElement("h1",null,"Ty for Using this App!"),","," ")}}]),t}(a.Component),et=Object(j.a)(Object(v.b)(function(e){return{activeNote:e.activeNote,isActive:e.isActive,editingNote:e.editingNote,mightDelete:e.mightDelete}},{showDeleteModal:x,editingNote:w})(Ze));function tt(){var e=Object(p.a)(["\n  background-color: #ef62a4;\n  color: white;\n  width: 30%;\n  font-size: 1.2rem;\n  padding: 30px 2.5%;\n  margin: 0 2.5%;\n  margin-bottom: 30px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(p.a)(["\n  /* height: 500px; */\n"]);return nt=function(){return e},e}function at(){var e=Object(p.a)(["\n  /* font-size: 2rem;\n  border: 3px solid #555;\n  margin-bottom: 30px; */\n"]);return at=function(){return e},e}function rt(){var e=Object(p.a)(["\n  flex-wrap: wrap;\n\n  input,\n  textarea {\n    margin-bottom: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 1.2rem;\n    padding: 15px 10px;\n  }\n\n  input {\n    width: 50%;\n    height: 35px;\n  }\n\n  textarea {\n    width: 98%;\n    height: 450px;\n  }\n"]);return rt=function(){return e},e}function ot(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  padding: 25px 2.5%;\n"]);return ot=function(){return e},e}function it(){var e=Object(p.a)(["\n  padding-top: 85px;\n  font-size: 1.4rem;\n  padding-left: 4%;\n"]);return it=function(){return e},e}function ct(){var e=Object(p.a)(["\n  text-align: left;\n  background: #f3f3f3;\n  width: 75%;\n"]);return ct=function(){return e},e}var lt=D.default.div(ct()),ut=D.default.div(it()),st=D.default.div(ot()),dt=D.default.form(rt()),pt=D.default.input(at()),ft=D.default.textarea(nt()),ht=D.default.button(tt()),mt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.activeNote.title,textBody:n.props.activeNote.textBody,id:n.props.activeNote.id,user_id:n.props.activeNote.user_id},n.handleInput=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.clickHandler=function(e){e.preventDefault(),console.log(n.props.activeNote),n.props.editNote(n.props.activeNote.id,n.state),n.props.history.push("/front-end-project-week")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.textBody;e.id,e.user_id;return console.log("fronm edit note render, this.props is... ",this.props),r.a.createElement(lt,null,r.a.createElement(ut,null,r.a.createElement("h2",null,"Edit Note:")),r.a.createElement(st,null,r.a.createElement(dt,{onSubmit:this.clickHandler},r.a.createElement(pt,{type:"text",placeholder:"Note Title",name:"title",value:t,onChange:this.handleInput}),r.a.createElement(ft,{type:"text",placeholder:"Note Content",name:"textBody",value:n,onChange:this.handleInput}))),r.a.createElement(ht,{onClick:this.clickHandler},"Save"))}}]),t}(a.Component),gt=Object(j.a)(Object(v.b)(function(e){return{activeNote:e.activeNote,editingNote:e.editingNote,error:e.error}},{editNote:function(e,t){return function(n){g.a.put("".concat("https://gimme-the-notes-server.herokuapp.com/notes/edit","/").concat(e),t).then(function(e){return n({type:"EDIT_NOTE_SUCCESS",payload:e}),g.a.get("".concat(N).concat(t.user_id)).then(function(e){console.log("Crazy? the user_id is... ",t.id),n({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){n({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(e){n({type:"EDIT_NOTE_FAILURE",payload:e})})}}})(mt));function bt(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n"]);return bt=function(){return e},e}function Et(){var e=Object(p.a)(["\n  background-color: red;\n"]);return Et=function(){return e},e}function Ot(){var e=Object(p.a)(["\n  font-size: 2rem;\n  width: 100%;\n  text-align: center;\n"]);return Ot=function(){return e},e}function vt(){var e=Object(p.a)(["\n  background-color: teal;\n  color: white;\n  width: 40%;\n  font-size: 2rem;\n  padding: 30px 20px;\n  margin-bottom: 30px;\n"]);return vt=function(){return e},e}function jt(){var e=Object(p.a)(["\n  background: white;\n  height: 45vh;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  width: 80%;\n  border: 1px solid gray;\n  margin: 0 auto;\n  font-size: 62.5%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  border: solid black;\n  opacity: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20%;\n"]);return jt=function(){return e},e}function Nt(){var e=Object(p.a)(["\n  background: #d7d7d7;\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  width: 100%;\n  max-width: 2000px;\n  border: 1px solid gray;\n  font-size: 62.5%;\n  box-sizing: border-box;\n  position: fixed;\n  opacity: 0.9;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n"]);return Nt=function(){return e},e}var yt=D.default.div(Nt()),xt=D.default.div(jt()),wt=D.default.button(vt()),kt=D.default.h1(Ot()),_t=Object(D.default)(wt)(Et()),Ct=D.default.div(bt()),St=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.activeNote.title,textBody:n.props.activeNote.textBody,id:n.props.activeNote.id,user_id:n.props.activeNote.user_id},n.DeleteNoteClickHandler=function(e){e.preventDefault(),console.log("State before you trying to delete: ",n.state),console.log("ID before you trying to delete: ",n.props.activeNote.id),n.props.deleteNote(n.props.activeNote.id,n.state),console.log("State after you trying to delete: ",n.state),n.props.history.push("/front-end-project-week")},n.CancelDeleteNoteClickHandler=function(e){e.preventDefault(),n.props.hideDeleteModal()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(yt,null,r.a.createElement(xt,null,r.a.createElement(kt,null,"Are you sure you want to delete this?"),r.a.createElement(Ct,null,r.a.createElement(_t,{onClick:this.DeleteNoteClickHandler},"Delete"),r.a.createElement(wt,{onClick:this.CancelDeleteNoteClickHandler},"No")))))}}]),t}(a.Component),Tt=Object(j.a)(Object(v.b)(function(e){return{mightDelete:e.mightDelete,activeNote:e.activeNote}},{hideDeleteModal:function(){return function(e){e({type:"CANCEL_DELETE_NOTE",payload:!1})}},deleteNote:function(e,t){return function(n){n({type:"DELETE_NOTE"}),g.a.delete("".concat("https://gimme-the-notes-server.herokuapp.com/notes/delete","/").concat(e)).then(function(a){return n({type:"DELETING_NOTE_SUCCESS",payload:e}),g.a.get("".concat(N).concat(t.user_id)).then(function(e){n({type:"FETCHING_NOTES_SUCCESS",payload:e.data})}).catch(function(e){n({type:"FETCHING_NOTES_FAILURE",payload:e})})}).catch(function(e){n({type:"DELETING_NOTE_FAILURE",payload:e})})}}})(St)),Dt=(n(173),n(63)),It=n.n(Dt);function Ht(){var e=Object(p.a)(["\n  background: #d7d7d7;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: top;\n  justify-content: flex-start;\n  color: black;\n  width: 100%;\n  max-width: 1200px;\n  border: 1px solid gray;\n  margin: 0 auto;\n  font-size: 1.4rem;\n  box-sizing: border-box;\n"]);return Ht=function(){return e},e}function At(){var e=Object(p.a)(["\n  ","\n  /* other styles */\n"]);return At=function(){return e},e}var Lt=Object(D.createGlobalStyle)(At(),It.a),Gt=D.default.div(Ht()),Ut=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Lt,null),this.props.mightDelete?r.a.createElement(Tt,null):null,r.a.createElement("div",{className:"App"},r.a.createElement(Gt,null,r.a.createElement(Y.a,{path:"/",render:function(e){return r.a.createElement(te,e)}}),r.a.createElement(Y.a,{exact:!0,path:"/front-end-project-week",render:function(e){return r.a.createElement(Ne,e)}}),r.a.createElement(Y.a,{exact:!0,path:"/front-end-project-week/new-note",render:function(e){return r.a.createElement(ze,e)}}),r.a.createElement(Y.a,{exact:!0,path:"/front-end-project-week/edit-note",render:function(e){return r.a.createElement(gt,e)}}),this.props.activeNote&&!this.props.editingNote?r.a.createElement(qe,null):null,r.a.createElement(Y.a,{exact:!0,path:"/front-end-project-week/loggedOut",render:function(e){return r.a.createElement(et,e)}}))))}}]),t}(a.Component),zt=Object(j.a)(Object(v.b)(function(e){return{activeNote:e.activeNote,isActive:e.isActive,editingNote:e.editingNote,mightDelete:e.mightDelete}},{})(Ut)),Ft=n(64),Rt=n(65),Bt=n.n(Rt),Mt=n(22),Vt={notes:[],fetchingNotes:!1,addingNote:!1,isActive:!1,activeNote:null,mightDelete:!1,deletingNote:!1,editingNote:!1,error:null,id:null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xt=n(177),Pt=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Mt.c)(Object(Mt.a)(Ft.a,Bt.a)),Wt=Object(Mt.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_NOTES":return Object(h.a)({},e,{fetchingNotes:!0});case"FETCHING_NOTES_SUCCESS":return Object(h.a)({},e,{fetchingNotes:!1,notes:t.payload,error:null});case"LOGIN":return Object(h.a)({},e,{id:t.payload,error:null});case"FETCHING_NOTES_FAILURE":return Object(h.a)({},e,{fetchingNotes:!1,error:t.payload,activeNote:null});case"CREATE_NOTE":return Object(h.a)({},e,{addingNote:!0});case"ADDING_NOTE_SUCCESS":return Object(h.a)({},e,{addingNote:!1,error:null});case"ADDING_NOTE_FAILURE":return Object(h.a)({},e,{addingNote:!1,error:t.payload});case"SHOW_NOTE":return Object(h.a)({},e,{isActive:!0,activeNote:t.payload});case"GO_HOME":return Object(h.a)({},e,{activeNote:null,editingNote:!1});case"MIGHT_DELETE_NOTE":return Object(h.a)({},e,{mightDelete:!0});case"CANCEL_DELETE_NOTE":return Object(h.a)({},e,{mightDelete:!1});case"DELETE_NOTE":return Object(h.a)({},e,{deletingNote:!0,mightDelete:!1});case"DELETING_NOTE_SUCCESS":case"DELETING_NOTE_FAILURE":return Object(h.a)({},e,{deletingNote:!1,activeNote:null});case"EDIT_NOTE":return Object(h.a)({},e,{editingNote:!0});case"EDIT_NOTE_SUCCESS":case"EDIT_NOTE_FAILURE":return Object(h.a)({},e,{editingNote:!1,activeNote:null});case"LOGOUT":return Object(h.a)({},e,{editingNote:!1,activeNote:null,notes:[]});default:return e}},Pt);i.a.render(r.a.createElement(v.a,{store:Wt},r.a.createElement(Xt.a,null,r.a.createElement(Y.a,{path:"/",component:zt}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n(175)},72:function(e,t,n){}},[[67,2,1]]]);
//# sourceMappingURL=main.47031f01.chunk.js.map