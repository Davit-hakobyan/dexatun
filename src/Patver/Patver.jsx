import React, { Component } from 'react'

export default class Script extends Component{
  
    function () {
      function init() {
        const scr = document.createElement("script");
        scr.type = "text/javascript";
        scr.async = "async";
        scr.src =
          "//cdn.qform.io/forms.js?v=" + new Date().getTime() / 1000;
        const scrInsert = document.getElementsByTagName("script")[0];
        scrInsert.parentNode.insertBefore(scr, scrInsert);
      }
      const d = document;
      const w = window;
      if (d.readyState === "interactive") {
        init();
      } else {
        if (w.attachEvent) {
          w.attachEvent("onload", init);
        } else {
          w.addEventListener("DOMContentLoaded", init, false);
        }
      }
      return ()=>{
       return <div data-formid="form_yD5sUBfc4SffY_q-SbhyBZmb-jlEh9pm"></div>

      }
    };
 
}