(function(){var e=exports;var a=e.lib;var b=a.WordArray;var d=e.enc;var c=d.Base64={stringify:function(l){var n=l.words;var p=l.sigBytes;var g=this._map;l.clamp();var m=[];for(var k=0;k<p;k+=3){var s=(n[k>>>2]>>>(24-(k%4)*8))&255;var q=(n[(k+1)>>>2]>>>(24-((k+1)%4)*8))&255;var o=(n[(k+2)>>>2]>>>(24-((k+2)%4)*8))&255;var r=(s<<16)|(q<<8)|o;for(var h=0;(h<4)&&(k+h*0.75<p);h++){m.push(g.charAt((r>>>(6*(3-h)))&63))}}var f=g.charAt(64);if(f){while(m.length%4){m.push(f)}}return m.join("")},parse:function(o){var m=o.length;var g=this._map;var f=g.charAt(64);if(f){var p=o.indexOf(f);if(p!=-1){m=p}}var n=[];var l=0;for(var k=0;k<m;k++){if(k%4){var j=g.indexOf(o.charAt(k-1))<<((k%4)*2);var h=g.indexOf(o.charAt(k))>>>(6-(k%4)*2);n[l>>>2]|=(j|h)<<(24-(l%4)*8);l++}}return b.create(n,l)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}());