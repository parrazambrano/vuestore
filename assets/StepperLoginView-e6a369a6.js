import{o as s,c as a,a as e,b as l,d as c,f as r,e as p}from"./index-fbf0a654.js";const d={action:"",class:"licenseform"},_=l('<div class="single-input"><span><i class="fa fa-user"></i></span><input type="text" placeholder="Screnario ID"></div><fieldset class="top-border"><legend>Enviornmental Conditions</legend></fieldset><div class="my-form"><p class="formtitle">Parking Structure</p><select class="form-control"><option value="0">Open Surface</option><option value="1">Garage</option></select></div><div class="my-form"><p class="formtitle">Weather</p><select class="form-control"><option value="0">Clear Sky</option><option value="1">Garage</option></select></div><div class="my-form"><p class="formtitle">Road Condition</p><select class="form-control"><option value="0">Normal</option><option value="1">Garage</option></select></div><div class="my-form"><p class="formtitle">Illumination</p><select class="form-control"><option value="0">Day</option><option value="1">Garage</option></select></div><div class="my-form"><p class="formtitle">Traffic</p><select class="form-control"><option value="0">Minimal Traffic</option><option value="1">Garage</option></select></div>',7),m={class:"single-input submit-btn"},u={data(){},methods:{newscnarioadded(){this.$router.push("/view-scenario")}}},f=Object.assign(u,{__name:"LicenseInputForm",setup(i){return(o,t)=>(s(),a("form",d,[_,e("div",m,[e("input",{type:"button",onClick:t[0]||(t[0]=(...n)=>o.newscnarioadded&&o.newscnarioadded(...n)),value:"Create Scenario"})])]))}});const v={class:"mainapp"},g=e("p",{class:"welcometitle"}," Welcome to",-1),y=e("img",{class:"markimg",src:r},null,-1),h=e("p",{class:"datetitle"},"19 May 2023 09:00",-1),S=e("img",{class:"pattern",src:p},null,-1),w={class:"radius-layout"},k={__name:"StepperLoginView",setup(i){return(o,t)=>(s(),a("main",v,[g,y,h,S,e("div",w,[c(f)])]))}};export{k as default};
