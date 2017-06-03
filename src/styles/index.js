'use strict';

const styles = require(`cssobjects-loader!sass-loader!./global.scss`);

export default function(selectorList) {
  let ret = {};

  selectorList.split(`,`).map((selector) => {
    let s = selector.replace(/^\s+/, ``)
              .split(/\s(\.|\#)/g)
              .filter((sub) => sub !== `.` && sub !== `#`)
              .map((sub) => {
                sub = sub.replace(/\s\s+/g, ` `);
                sub = sub.replace(/[^a-zA-Z0-9]/g, `_`);
                sub = sub.replace(/^_+/g, ``);
                sub = sub.replace(/_+$/g, ``);
                return sub;
              });

    let obj = { ...styles };

    for (let i = 0; i < s.length; i++) { 
      if (!obj) {
        obj = {};
        break;
      }
      obj = obj[s[i]]; 
    }

    ret = {
      ...ret,
      ...obj
    };
  });

  return ret;
}
