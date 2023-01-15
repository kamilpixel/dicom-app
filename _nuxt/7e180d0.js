(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{372:function(e,t,n){"use strict";n.r(t);var r=n(51),o=(n(113),{name:"PatientsList",head:{title:"Patients List"},components:{MainNavBar:n(269).a},data:function(){return{fields:[{key:"patientID",label:"ID"},{key:"patientName",label:"Name"},{key:"patientBirthDate",label:"Date of Birth"},{key:"patientSex",label:"Gender"},{key:"actions",label:"Actions"}],items:[],perPage:10,currentPage:1,rows:0,isLoading:!0}},methods:{getPatientsList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("patients/getList");case 4:n=t.sent,e.items=n.data,e.rows=n.data.length,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,e.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},onClickDetail:function(e){this.$router.push({name:"patients-detail",query:{index:e.index}})}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getPatientsList();case 2:case"end":return t.stop()}}),t)})))()}}),c=n(80),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"pb-5"},[t("b-row",[t("b-col",[t("b-card",{staticClass:"w-100",attrs:{header:"Patient Data List"}},[e.isLoading?t("div",[t("b-skeleton-table",{attrs:{rows:5,columns:6,"table-props":{bordered:!0,striped:!0}}})],1):t("div",[t("b-table",{attrs:{hover:"",items:e.items,fields:e.fields,responsive:"","per-page":e.perPage,"current-page":e.currentPage,stacked:"sm","head-variant":"light",outlined:""},scopedSlots:e._u([{key:"cell(patientBirthDate)",fn:function(data){return[e._v("\n              "+e._s(e.$formatDate(data.item.patientBirthDate))+"\n            ")]}},{key:"cell(actions)",fn:function(data){return[t("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(t){return e.onClickDetail(data)}}},[e._v("View Details")])]}}])}),e._v(" "),t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);