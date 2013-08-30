// ThreeWebGL.js r40 - http://github.com/mrdoob/three.js
var THREE=THREE||{};if(!window.Int32Array){window.Int32Array=Array;window.Float32Array=Array}THREE.Color=function(b){this.setHex(b)};
THREE.Color.prototype={autoUpdate:!0,copy:function(b){this.r=b.r;this.g=b.g;this.b=b.b;this.hex=b.hex;this.__styleString=b.__styleString},setRGB:function(b,d,e){this.r=b;this.g=d;this.b=e;if(this.autoUpdate){this.updateHex();this.updateStyleString()}},setHSV:function(b,d,e){var g,h,o,n,q,r;if(e==0)g=h=o=0;else{n=Math.floor(b*6);q=b*6-n;b=e*(1-d);r=e*(1-d*q);d=e*(1-d*(1-q));switch(n){case 1:g=r;h=e;o=b;break;case 2:g=b;h=e;o=d;break;case 3:g=b;h=r;o=e;break;case 4:g=d;h=b;o=e;break;case 5:g=e;h=b;
o=r;break;case 6:case 0:g=e;h=d;o=b}}this.r=g;this.g=h;this.b=o;if(this.autoUpdate){this.updateHex();this.updateStyleString()}},setHex:function(b){this.hex=~~b&16777215;if(this.autoUpdate){this.updateRGB();this.updateStyleString()}},updateHex:function(){this.hex=~~(this.r*255)<<16^~~(this.g*255)<<8^~~(this.b*255)},updateRGB:function(){this.r=(this.hex>>16&255)/255;this.g=(this.hex>>8&255)/255;this.b=(this.hex&255)/255},updateStyleString:function(){this.__styleString="rgb("+~~(this.r*255)+","+~~(this.g*
255)+","+~~(this.b*255)+")"},clone:function(){return new THREE.Color(this.hex)}};THREE.Vector2=function(b,d){this.set(b||0,d||0)};
THREE.Vector2.prototype={set:function(b,d){this.x=b;this.y=d;return this},copy:function(b){this.set(b.x,b.y);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y);return this},multiplyScalar:function(b){this.set(this.x*b,this.y*b);return this},negate:function(){this.set(-this.x,-this.y);return this},unit:function(){this.multiplyScalar(1/
this.length());return this},length:function(){return Math.sqrt(this.lengthSq())},lengthSq:function(){return this.x*this.x+this.y*this.y},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(b,d,e){this.set(b||0,d||0,e||0)};
THREE.Vector3.prototype={set:function(b,d,e){this.x=b;this.y=d;this.z=e;return this},copy:function(b){this.set(b.x,b.y,b.z);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y,b.z+d.z);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y,this.z+b.z);return this},addScalar:function(b){this.set(this.x+b,this.y+b,this.z+b);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y,b.z-d.z);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y,this.z-b.z);return this},cross:function(b,
d){this.set(b.y*d.z-b.z*d.y,b.z*d.x-b.x*d.z,b.x*d.y-b.y*d.x);return this},crossSelf:function(b){var d=this.x,e=this.y,g=this.z;this.set(e*b.z-g*b.y,g*b.x-d*b.z,d*b.y-e*b.x);return this},multiply:function(b,d){this.set(b.x*d.x,b.y*d.y,b.z*d.z);return this},multiplySelf:function(b){this.set(this.x*b.x,this.y*b.y,this.z*b.z);return this},multiplyScalar:function(b){this.set(this.x*b,this.y*b,this.z*b);return this},divideSelf:function(b){this.set(this.x/b.x,this.y/b.y,this.z/b.z);return this},divideScalar:function(b){this.set(this.x/
b,this.y/b,this.z/b);return this},negate:function(){this.set(-this.x,-this.y,-this.z);return this},dot:function(b){return this.x*b.x+this.y*b.y+this.z*b.z},distanceTo:function(b){return Math.sqrt(this.distanceToSquared(b))},distanceToSquared:function(b){var d=this.x-b.x,e=this.y-b.y;b=this.z-b.z;return d*d+e*e+b*b},length:function(){return Math.sqrt(this.lengthSq())},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},lengthManhattan:function(){return this.x+this.y+this.z},normalize:function(){var b=
this.length();b>0?this.multiplyScalar(1/b):this.set(0,0,0);return this},setPositionFromMatrix:function(b){this.x=b.n14;this.y=b.n24;this.z=b.n34},setRotationFromMatrix:function(b){var d=Math.cos(this.y);this.y=Math.asin(b.n13);if(Math.abs(d)>1.0E-5){this.x=Math.atan2(-b.n23/d,b.n33/d);this.z=Math.atan2(-b.n12/d,b.n11/d)}else{this.x=0;this.z=Math.atan2(b.n21,b.n22)}},setLength:function(b){return this.normalize().multiplyScalar(b)},isZero:function(){return Math.abs(this.x)<1.0E-4&&Math.abs(this.y)<
1.0E-4&&Math.abs(this.z)<1.0E-4},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(b,d,e,g){this.set(b||0,d||0,e||0,g||1)};
THREE.Vector4.prototype={set:function(b,d,e,g){this.x=b;this.y=d;this.z=e;this.w=g;return this},copy:function(b){this.set(b.x,b.y,b.z,b.w||1);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y,b.z+d.z,b.w+d.w);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y,this.z+b.z,this.w+b.w);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y,b.z-d.z,b.w-d.w);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y,this.z-b.z,this.w-b.w);return this},multiplyScalar:function(b){this.set(this.x*
b,this.y*b,this.z*b,this.w*b);return this},divideScalar:function(b){this.set(this.x/b,this.y/b,this.z/b,this.w/b);return this},lerpSelf:function(b,d){this.set(this.x+(b.x-this.x)*d,this.y+(b.y-this.y)*d,this.z+(b.z-this.z)*d,this.w+(b.w-this.w)*d)},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Ray=function(b,d){this.origin=b||new THREE.Vector3;this.direction=d||new THREE.Vector3};
THREE.Ray.prototype={intersectScene:function(b){var d,e,g=b.objects,h=[];b=0;for(d=g.length;b<d;b++){e=g[b];e instanceof THREE.Mesh&&(h=h.concat(this.intersectObject(e)))}h.sort(function(o,n){return o.distance-n.distance});return h},intersectObject:function(b){function d(V,L,ra,da){da=da.clone().subSelf(L);ra=ra.clone().subSelf(L);var pa=V.clone().subSelf(L);V=da.dot(da);L=da.dot(ra);da=da.dot(pa);var $=ra.dot(ra);ra=ra.dot(pa);pa=1/(V*$-L*L);$=($*da-L*ra)*pa;V=(V*ra-L*da)*pa;return $>0&&V>0&&$+V<
1}var e,g,h,o,n,q,r,v,E,F,H,I=b.geometry,M=I.vertices,N=[];e=0;for(g=I.faces.length;e<g;e++){h=I.faces[e];F=this.origin.clone();H=this.direction.clone();r=b.matrixWorld;o=r.multiplyVector3(M[h.a].position.clone());n=r.multiplyVector3(M[h.b].position.clone());q=r.multiplyVector3(M[h.c].position.clone());r=h instanceof THREE.Face4?r.multiplyVector3(M[h.d].position.clone()):null;v=b.matrixRotationWorld.multiplyVector3(h.normal.clone());E=H.dot(v);if(b.doubleSided||(b.flipSided?E>0:E<0)){v=v.dot((new THREE.Vector3).sub(o,
F))/E;F=F.addSelf(H.multiplyScalar(v));if(h instanceof THREE.Face3){if(d(F,o,n,q)){h={distance:this.origin.distanceTo(F),point:F,face:h,object:b};N.push(h)}}else if(h instanceof THREE.Face4&&(d(F,o,n,r)||d(F,n,q,r))){h={distance:this.origin.distanceTo(F),point:F,face:h,object:b};N.push(h)}}}return N}};
THREE.Rectangle=function(){function b(){o=g-d;n=h-e}var d,e,g,h,o,n,q=!0;this.getX=function(){return d};this.getY=function(){return e};this.getWidth=function(){return o};this.getHeight=function(){return n};this.getLeft=function(){return d};this.getTop=function(){return e};this.getRight=function(){return g};this.getBottom=function(){return h};this.set=function(r,v,E,F){q=!1;d=r;e=v;g=E;h=F;b()};this.addPoint=function(r,v){if(q){q=!1;d=r;e=v;g=r;h=v}else{d=d<r?d:r;e=e<v?e:v;g=g>r?g:r;h=h>v?h:v}b()};
this.add3Points=function(r,v,E,F,H,I){if(q){q=!1;d=r<E?r<H?r:H:E<H?E:H;e=v<F?v<I?v:I:F<I?F:I;g=r>E?r>H?r:H:E>H?E:H;h=v>F?v>I?v:I:F>I?F:I}else{d=r<E?r<H?r<d?r:d:H<d?H:d:E<H?E<d?E:d:H<d?H:d;e=v<F?v<I?v<e?v:e:I<e?I:e:F<I?F<e?F:e:I<e?I:e;g=r>E?r>H?r>g?r:g:H>g?H:g:E>H?E>g?E:g:H>g?H:g;h=v>F?v>I?v>h?v:h:I>h?I:h:F>I?F>h?F:h:I>h?I:h}b()};this.addRectangle=function(r){if(q){q=!1;d=r.getLeft();e=r.getTop();g=r.getRight();h=r.getBottom()}else{d=d<r.getLeft()?d:r.getLeft();e=e<r.getTop()?e:r.getTop();g=g>r.getRight()?
g:r.getRight();h=h>r.getBottom()?h:r.getBottom()}b()};this.inflate=function(r){d-=r;e-=r;g+=r;h+=r;b()};this.minSelf=function(r){d=d>r.getLeft()?d:r.getLeft();e=e>r.getTop()?e:r.getTop();g=g<r.getRight()?g:r.getRight();h=h<r.getBottom()?h:r.getBottom();b()};this.instersects=function(r){return Math.min(g,r.getRight())-Math.max(d,r.getLeft())>=0&&Math.min(h,r.getBottom())-Math.max(e,r.getTop())>=0};this.empty=function(){q=!0;h=g=e=d=0;b()};this.isEmpty=function(){return q}};
THREE.Matrix3=function(){this.m=[]};THREE.Matrix3.prototype={transpose:function(){var b,d=this.m;b=d[1];d[1]=d[3];d[3]=b;b=d[2];d[2]=d[6];d[6]=b;b=d[5];d[5]=d[7];d[7]=b;return this},transposeIntoArray:function(b){var d=this.m;b[0]=d[0];b[1]=d[3];b[2]=d[6];b[3]=d[1];b[4]=d[4];b[5]=d[7];b[6]=d[2];b[7]=d[5];b[8]=d[8];return this}};
THREE.Matrix4=function(b,d,e,g,h,o,n,q,r,v,E,F,H,I,M,N){this.set(b||1,d||0,e||0,g||0,h||0,o||1,n||0,q||0,r||0,v||0,E||1,F||0,H||0,I||0,M||0,N||1);this.flat=Array(16);this.m33=new THREE.Matrix3};
THREE.Matrix4.prototype={set:function(b,d,e,g,h,o,n,q,r,v,E,F,H,I,M,N){this.n11=b;this.n12=d;this.n13=e;this.n14=g;this.n21=h;this.n22=o;this.n23=n;this.n24=q;this.n31=r;this.n32=v;this.n33=E;this.n34=F;this.n41=H;this.n42=I;this.n43=M;this.n44=N;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(b){this.set(b.n11,b.n12,b.n13,b.n14,b.n21,b.n22,b.n23,b.n24,b.n31,b.n32,b.n33,b.n34,b.n41,b.n42,b.n43,b.n44);return this},lookAt:function(b,d,e){var g=THREE.Matrix4.__v1,
h=THREE.Matrix4.__v2,o=THREE.Matrix4.__v3;o.sub(b,d).normalize();if(o.length()===0)o.z=1;g.cross(e,o).normalize();if(g.length()===0){o.x+=1.0E-4;g.cross(e,o).normalize()}h.cross(o,g).normalize();this.n11=g.x;this.n12=h.x;this.n13=o.x;this.n21=g.y;this.n22=h.y;this.n23=o.y;this.n31=g.z;this.n32=h.z;this.n33=o.z;return this},multiplyVector3:function(b){var d=b.x,e=b.y,g=b.z,h=1/(this.n41*d+this.n42*e+this.n43*g+this.n44);b.x=(this.n11*d+this.n12*e+this.n13*g+this.n14)*h;b.y=(this.n21*d+this.n22*e+this.n23*
g+this.n24)*h;b.z=(this.n31*d+this.n32*e+this.n33*g+this.n34)*h;return b},multiplyVector4:function(b){var d=b.x,e=b.y,g=b.z,h=b.w;b.x=this.n11*d+this.n12*e+this.n13*g+this.n14*h;b.y=this.n21*d+this.n22*e+this.n23*g+this.n24*h;b.z=this.n31*d+this.n32*e+this.n33*g+this.n34*h;b.w=this.n41*d+this.n42*e+this.n43*g+this.n44*h;return b},rotateAxis:function(b){var d=b.x,e=b.y,g=b.z;b.x=d*this.n11+e*this.n12+g*this.n13;b.y=d*this.n21+e*this.n22+g*this.n23;b.z=d*this.n31+e*this.n32+g*this.n33;b.normalize();
return b},crossVector:function(b){var d=new THREE.Vector4;d.x=this.n11*b.x+this.n12*b.y+this.n13*b.z+this.n14*b.w;d.y=this.n21*b.x+this.n22*b.y+this.n23*b.z+this.n24*b.w;d.z=this.n31*b.x+this.n32*b.y+this.n33*b.z+this.n34*b.w;d.w=b.w?this.n41*b.x+this.n42*b.y+this.n43*b.z+this.n44*b.w:1;return d},multiply:function(b,d){var e=b.n11,g=b.n12,h=b.n13,o=b.n14,n=b.n21,q=b.n22,r=b.n23,v=b.n24,E=b.n31,F=b.n32,H=b.n33,I=b.n34,M=b.n41,N=b.n42,V=b.n43,L=b.n44,ra=d.n11,da=d.n12,pa=d.n13,$=d.n14,K=d.n21,Ia=d.n22,
ca=d.n23,Fa=d.n24,fa=d.n31,R=d.n32,c=d.n33,ga=d.n34;this.n11=e*ra+g*K+h*fa;this.n12=e*da+g*Ia+h*R;this.n13=e*pa+g*ca+h*c;this.n14=e*$+g*Fa+h*ga+o;this.n21=n*ra+q*K+r*fa;this.n22=n*da+q*Ia+r*R;this.n23=n*pa+q*ca+r*c;this.n24=n*$+q*Fa+r*ga+v;this.n31=E*ra+F*K+H*fa;this.n32=E*da+F*Ia+H*R;this.n33=E*pa+F*ca+H*c;this.n34=E*$+F*Fa+H*ga+I;this.n41=M*ra+N*K+V*fa;this.n42=M*da+N*Ia+V*R;this.n43=M*pa+N*ca+V*c;this.n44=M*$+N*Fa+V*ga+L;return this},multiplyToArray:function(b,d,e){this.multiply(b,d);e[0]=this.n11;
e[1]=this.n21;e[2]=this.n31;e[3]=this.n41;e[4]=this.n12;e[5]=this.n22;e[6]=this.n32;e[7]=this.n42;e[8]=this.n13;e[9]=this.n23;e[10]=this.n33;e[11]=this.n43;e[12]=this.n14;e[13]=this.n24;e[14]=this.n34;e[15]=this.n44;return this},multiplySelf:function(b){this.multiply(this,b);return this},multiplyScalar:function(b){this.n11*=b;this.n12*=b;this.n13*=b;this.n14*=b;this.n21*=b;this.n22*=b;this.n23*=b;this.n24*=b;this.n31*=b;this.n32*=b;this.n33*=b;this.n34*=b;this.n41*=b;this.n42*=b;this.n43*=b;this.n44*=
b;return this},determinant:function(){var b=this.n11,d=this.n12,e=this.n13,g=this.n14,h=this.n21,o=this.n22,n=this.n23,q=this.n24,r=this.n31,v=this.n32,E=this.n33,F=this.n34,H=this.n41,I=this.n42,M=this.n43,N=this.n44;return g*n*v*H-e*q*v*H-g*o*E*H+d*q*E*H+e*o*F*H-d*n*F*H-g*n*r*I+e*q*r*I+g*h*E*I-b*q*E*I-e*h*F*I+b*n*F*I+g*o*r*M-d*q*r*M-g*h*v*M+b*q*v*M+d*h*F*M-b*o*F*M-e*o*r*N+d*n*r*N+e*h*v*N-b*n*v*N-d*h*E*N+b*o*E*N},transpose:function(){var b;b=this.n21;this.n21=this.n12;this.n12=b;b=this.n31;this.n31=
this.n13;this.n13=b;b=this.n32;this.n32=this.n23;this.n23=b;b=this.n41;this.n41=this.n14;this.n14=b;b=this.n42;this.n42=this.n24;this.n24=b;b=this.n43;this.n43=this.n34;this.n43=b;return this},clone:function(){var b=new THREE.Matrix4;b.n11=this.n11;b.n12=this.n12;b.n13=this.n13;b.n14=this.n14;b.n21=this.n21;b.n22=this.n22;b.n23=this.n23;b.n24=this.n24;b.n31=this.n31;b.n32=this.n32;b.n33=this.n33;b.n34=this.n34;b.n41=this.n41;b.n42=this.n42;b.n43=this.n43;b.n44=this.n44;return b},flatten:function(){this.flat[0]=
this.n11;this.flat[1]=this.n21;this.flat[2]=this.n31;this.flat[3]=this.n41;this.flat[4]=this.n12;this.flat[5]=this.n22;this.flat[6]=this.n32;this.flat[7]=this.n42;this.flat[8]=this.n13;this.flat[9]=this.n23;this.flat[10]=this.n33;this.flat[11]=this.n43;this.flat[12]=this.n14;this.flat[13]=this.n24;this.flat[14]=this.n34;this.flat[15]=this.n44;return this.flat},flattenToArray:function(b){b[0]=this.n11;b[1]=this.n21;b[2]=this.n31;b[3]=this.n41;b[4]=this.n12;b[5]=this.n22;b[6]=this.n32;b[7]=this.n42;
b[8]=this.n13;b[9]=this.n23;b[10]=this.n33;b[11]=this.n43;b[12]=this.n14;b[13]=this.n24;b[14]=this.n34;b[15]=this.n44;return b},flattenToArrayOffset:function(b,d){b[d]=this.n11;b[d+1]=this.n21;b[d+2]=this.n31;b[d+3]=this.n41;b[d+4]=this.n12;b[d+5]=this.n22;b[d+6]=this.n32;b[d+7]=this.n42;b[d+8]=this.n13;b[d+9]=this.n23;b[d+10]=this.n33;b[d+11]=this.n43;b[d+12]=this.n14;b[d+13]=this.n24;b[d+14]=this.n34;b[d+15]=this.n44;return b},setTranslation:function(b,d,e){this.set(1,0,0,b,0,1,0,d,0,0,1,e,0,0,
0,1);return this},setScale:function(b,d,e){this.set(b,0,0,0,0,d,0,0,0,0,e,0,0,0,0,1);return this},setRotationX:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(1,0,0,0,0,d,-b,0,0,b,d,0,0,0,0,1);return this},setRotationY:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(d,0,b,0,0,1,0,0,-b,0,d,0,0,0,0,1);return this},setRotationZ:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(d,-b,0,0,b,d,0,0,0,0,1,0,0,0,0,1);return this},setRotationAxis:function(b,d){var e=Math.cos(d),g=Math.sin(d),h=
1-e,o=b.x,n=b.y,q=b.z,r=h*o,v=h*n;this.set(r*o+e,r*n-g*q,r*q+g*n,0,r*n+g*q,v*n+e,v*q-g*o,0,r*q-g*n,v*q+g*o,h*q*q+e,0,0,0,0,1);return this},setPosition:function(b){this.n14=b.x;this.n24=b.y;this.n34=b.z;return this},getPosition:function(){if(!this.position)this.position=new THREE.Vector3;this.position.set(this.n14,this.n24,this.n34);return this.position},getColumnX:function(){if(!this.columnX)this.columnX=new THREE.Vector3;this.columnX.set(this.n11,this.n21,this.n31);return this.columnX},getColumnY:function(){if(!this.columnY)this.columnY=
new THREE.Vector3;this.columnY.set(this.n12,this.n22,this.n32);return this.columnY},getColumnZ:function(){if(!this.columnZ)this.columnZ=new THREE.Vector3;this.columnZ.set(this.n13,this.n23,this.n33);return this.columnZ},setRotationFromEuler:function(b){var d=b.x,e=b.y,g=b.z;b=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);var o=Math.cos(g);g=Math.sin(g);var n=b*e,q=d*e;this.n11=h*o;this.n12=-h*g;this.n13=e;this.n21=q*o+b*g;this.n22=-q*g+b*o;this.n23=-d*h;this.n31=-n*o+d*g;this.n32=n*g+
d*o;this.n33=b*h;return this},setRotationFromQuaternion:function(b){var d=b.x,e=b.y,g=b.z,h=b.w,o=d+d,n=e+e,q=g+g;b=d*o;var r=d*n;d*=q;var v=e*n;e*=q;g*=q;o*=h;n*=h;h*=q;this.n11=1-(v+g);this.n12=r-h;this.n13=d+n;this.n21=r+h;this.n22=1-(b+g);this.n23=e-o;this.n31=d-n;this.n32=e+o;this.n33=1-(b+v);return this},scale:function(b){var d=b.x,e=b.y;b=b.z;this.n11*=d;this.n12*=e;this.n13*=b;this.n21*=d;this.n22*=e;this.n23*=b;this.n31*=d;this.n32*=e;this.n33*=b;this.n41*=d;this.n42*=e;this.n43*=b;return this},
extractPosition:function(b){this.n14=b.n14;this.n24=b.n24;this.n34=b.n34},extractRotation:function(b,d){var e=1/d.x,g=1/d.y,h=1/d.z;this.n11=b.n11*e;this.n21=b.n21*e;this.n31=b.n31*e;this.n12=b.n12*g;this.n22=b.n22*g;this.n32=b.n32*g;this.n13=b.n13*h;this.n23=b.n23*h;this.n33=b.n33*h}};
THREE.Matrix4.makeInvert=function(b,d){var e=b.n11,g=b.n12,h=b.n13,o=b.n14,n=b.n21,q=b.n22,r=b.n23,v=b.n24,E=b.n31,F=b.n32,H=b.n33,I=b.n34,M=b.n41,N=b.n42,V=b.n43,L=b.n44;d===undefined&&(d=new THREE.Matrix4);d.n11=r*I*N-v*H*N+v*F*V-q*I*V-r*F*L+q*H*L;d.n12=o*H*N-h*I*N-o*F*V+g*I*V+h*F*L-g*H*L;d.n13=h*v*N-o*r*N+o*q*V-g*v*V-h*q*L+g*r*L;d.n14=o*r*F-h*v*F-o*q*H+g*v*H+h*q*I-g*r*I;d.n21=v*H*M-r*I*M-v*E*V+n*I*V+r*E*L-n*H*L;d.n22=h*I*M-o*H*M+o*E*V-e*I*V-h*E*L+e*H*L;d.n23=o*r*M-h*v*M-o*n*V+e*v*V+h*n*L-e*r*L;
d.n24=h*v*E-o*r*E+o*n*H-e*v*H-h*n*I+e*r*I;d.n31=q*I*M-v*F*M+v*E*N-n*I*N-q*E*L+n*F*L;d.n32=o*F*M-g*I*M-o*E*N+e*I*N+g*E*L-e*F*L;d.n33=h*v*M-o*q*M+o*n*N-e*v*N-g*n*L+e*q*L;d.n34=o*q*E-g*v*E-o*n*F+e*v*F+g*n*I-e*q*I;d.n41=r*F*M-q*H*M-r*E*N+n*H*N+q*E*V-n*F*V;d.n42=g*H*M-h*F*M+h*E*N-e*H*N-g*E*V+e*F*V;d.n43=h*q*M-g*r*M-h*n*N+e*r*N+g*n*V-e*q*V;d.n44=g*r*E-h*q*E+h*n*F-e*r*F-g*n*H+e*q*H;d.multiplyScalar(1/b.determinant());return d};
THREE.Matrix4.makeInvert3x3=function(b){var d=b.m33,e=d.m,g=b.n33*b.n22-b.n32*b.n23,h=-b.n33*b.n21+b.n31*b.n23,o=b.n32*b.n21-b.n31*b.n22,n=-b.n33*b.n12+b.n32*b.n13,q=b.n33*b.n11-b.n31*b.n13,r=-b.n32*b.n11+b.n31*b.n12,v=b.n23*b.n12-b.n22*b.n13,E=-b.n23*b.n11+b.n21*b.n13,F=b.n22*b.n11-b.n21*b.n12;b=b.n11*g+b.n21*n+b.n31*v;if(b==0)throw"matrix not invertible";b=1/b;e[0]=b*g;e[1]=b*h;e[2]=b*o;e[3]=b*n;e[4]=b*q;e[5]=b*r;e[6]=b*v;e[7]=b*E;e[8]=b*F;return d};
THREE.Matrix4.makeFrustum=function(b,d,e,g,h,o){var n;n=new THREE.Matrix4;n.n11=2*h/(d-b);n.n12=0;n.n13=(d+b)/(d-b);n.n14=0;n.n21=0;n.n22=2*h/(g-e);n.n23=(g+e)/(g-e);n.n24=0;n.n31=0;n.n32=0;n.n33=-(o+h)/(o-h);n.n34=-2*o*h/(o-h);n.n41=0;n.n42=0;n.n43=-1;n.n44=0;return n};THREE.Matrix4.makePerspective=function(b,d,e,g){var h;b=e*Math.tan(b*Math.PI/360);h=-b;return THREE.Matrix4.makeFrustum(h*d,b*d,h,b,e,g)};
THREE.Matrix4.makeOrtho=function(b,d,e,g,h,o){var n,q,r,v;n=new THREE.Matrix4;q=d-b;r=e-g;v=o-h;n.n11=2/q;n.n12=0;n.n13=0;n.n14=-((d+b)/q);n.n21=0;n.n22=2/r;n.n23=0;n.n24=-((e+g)/r);n.n31=0;n.n32=0;n.n33=-2/v;n.n34=-((o+h)/v);n.n41=0;n.n42=0;n.n43=0;n.n44=1;return n};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;
THREE.Object3D=function(){this.parent=undefined;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.scale=new THREE.Vector3(1,1,1);this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=
!0;this._vector=new THREE.Vector3;this.name=""};
THREE.Object3D.prototype={translate:function(b,d){this.matrix.rotateAxis(d);this.position.addSelf(d.multiplyScalar(b))},translateX:function(b){this.translate(b,this._vector.set(1,0,0))},translateY:function(b){this.translate(b,this._vector.set(0,1,0))},translateZ:function(b){this.translate(b,this._vector.set(0,0,1))},lookAt:function(b){this.matrix.lookAt(b,this.position,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)},addChild:function(b){if(this.children.indexOf(b)===
-1){b.parent!==undefined&&b.parent.removeChild(b);b.parent=this;this.children.push(b);for(var d=this;d.parent!==undefined;)d=d.parent;d!==undefined&&d instanceof THREE.Scene&&d.addChildRecurse(b)}},removeChild:function(b){var d=this.children.indexOf(b);if(d!==-1){b.parent=undefined;this.children.splice(d,1)}},getChildByName:function(b,d){var e,g,h;e=0;for(g=this.children.length;e<g;e++){h=this.children[e];if(h.name===b)return h;if(d){h=h.getChildByName(b,d);if(h!==undefined)return h}}},updateMatrix:function(){this.matrix.setPosition(this.position);
this.useQuaternion?this.matrix.setRotationFromQuaternion(this.quaternion):this.matrix.setRotationFromEuler(this.rotation);if(this.scale.x!==1||this.scale.y!==1||this.scale.z!==1){this.matrix.scale(this.scale);this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z))}this.matrixWorldNeedsUpdate=!0},update:function(b,d,e){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||d){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);
this.matrixRotationWorld.extractRotation(this.matrixWorld,this.scale);this.matrixWorldNeedsUpdate=!1;d=!0}b=0;for(var g=this.children.length;b<g;b++)this.children[b].update(this.matrixWorld,d,e)}};THREE.Quaternion=function(b,d,e,g){this.set(b||0,d||0,e||0,g!==undefined?g:1)};
THREE.Quaternion.prototype={set:function(b,d,e,g){this.x=b;this.y=d;this.z=e;this.w=g;return this},copy:function(b){this.x=b.x;this.y=b.y;this.z=b.z;this.w=b.w;return this},setFromEuler:function(b){var d=0.5*Math.PI/360,e=b.x*d,g=b.y*d,h=b.z*d;b=Math.cos(g);g=Math.sin(g);d=Math.cos(-h);h=Math.sin(-h);var o=Math.cos(e);e=Math.sin(e);var n=b*d,q=g*h;this.w=n*o-q*e;this.x=n*e+q*o;this.y=g*d*o+b*h*e;this.z=b*h*o-g*d*e;return this},setFromAxisAngle:function(b,d){var e=d/2,g=Math.sin(e);this.x=b.x*g;this.y=
b.y*g;this.z=b.z*g;this.w=Math.cos(e);return this},calculateW:function(){this.w=-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var b=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);if(b==0)this.w=this.z=this.y=this.x=0;else{b=1/b;this.x*=b;this.y*=b;this.z*=b;this.w*=b}return this},
multiplySelf:function(b){var d=this.x,e=this.y,g=this.z,h=this.w,o=b.x,n=b.y,q=b.z;b=b.w;this.x=d*b+h*o+e*q-g*n;this.y=e*b+h*n+g*o-d*q;this.z=g*b+h*q+d*n-e*o;this.w=h*b-d*o-e*n-g*q;return this},multiply:function(b,d){this.x=b.x*d.w+b.y*d.z-b.z*d.y+b.w*d.x;this.y=-b.x*d.z+b.y*d.w+b.z*d.x+b.w*d.y;this.z=b.x*d.y-b.y*d.x+b.z*d.w+b.w*d.z;this.w=-b.x*d.x-b.y*d.y-b.z*d.z+b.w*d.w;return this},multiplyVector3:function(b,d){d||(d=b);var e=b.x,g=b.y,h=b.z,o=this.x,n=this.y,q=this.z,r=this.w,v=r*e+n*h-q*g,E=
r*g+q*e-o*h,F=r*h+o*g-n*e;e=-o*e-n*g-q*h;d.x=v*r+e*-o+E*-q-F*-n;d.y=E*r+e*-n+F*-o-v*-q;d.z=F*r+e*-q+v*-n-E*-o;return d}};
THREE.Quaternion.slerp=function(b,d,e,g){var h=b.w*d.w+b.x*d.x+b.y*d.y+b.z*d.z;if(Math.abs(h)>=1){e.w=b.w;e.x=b.x;e.y=b.y;e.z=b.z;return e}var o=Math.acos(h),n=Math.sqrt(1-h*h);if(Math.abs(n)<0.0010){e.w=0.5*(b.w+d.w);e.x=0.5*(b.x+d.x);e.y=0.5*(b.y+d.y);e.z=0.5*(b.z+d.z);return e}h=Math.sin((1-g)*o)/n;g=Math.sin(g*o)/n;e.w=b.w*h+d.w*g;e.x=b.x*h+d.x*g;e.y=b.y*h+d.y*g;e.z=b.z*h+d.z*g;return e};THREE.Vertex=function(b){this.position=b||new THREE.Vector3};
THREE.Face3=function(b,d,e,g,h,o){this.a=b;this.b=d;this.c=e;this.normal=g instanceof THREE.Vector3?g:new THREE.Vector3;this.vertexNormals=g instanceof Array?g:[];this.color=h instanceof THREE.Color?h:new THREE.Color;this.vertexColors=h instanceof Array?h:[];this.vertexTangents=[];this.materials=o instanceof Array?o:[o];this.centroid=new THREE.Vector3};
THREE.Face4=function(b,d,e,g,h,o,n){this.a=b;this.b=d;this.c=e;this.d=g;this.normal=h instanceof THREE.Vector3?h:new THREE.Vector3;this.vertexNormals=h instanceof Array?h:[];this.color=o instanceof THREE.Color?o:new THREE.Color;this.vertexColors=o instanceof Array?o:[];this.vertexTangents=[];this.materials=n instanceof Array?n:[n];this.centroid=new THREE.Vector3};THREE.UV=function(b,d){this.set(b||0,d||0)};
THREE.UV.prototype={set:function(b,d){this.u=b;this.v=d;return this},copy:function(b){this.set(b.u,b.v);return this}};THREE.Geometry=function(){this.id="Geometry"+THREE.GeometryIdCounter++;this.vertices=[];this.colors=[];this.faces=[];this.edges=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1};
THREE.Geometry.prototype={computeCentroids:function(){var b,d,e;b=0;for(d=this.faces.length;b<d;b++){e=this.faces[b];e.centroid.set(0,0,0);if(e instanceof THREE.Face3){e.centroid.addSelf(this.vertices[e.a].position);e.centroid.addSelf(this.vertices[e.b].position);e.centroid.addSelf(this.vertices[e.c].position);e.centroid.divideScalar(3)}else if(e instanceof THREE.Face4){e.centroid.addSelf(this.vertices[e.a].position);e.centroid.addSelf(this.vertices[e.b].position);e.centroid.addSelf(this.vertices[e.c].position);
e.centroid.addSelf(this.vertices[e.d].position);e.centroid.divideScalar(4)}}},computeFaceNormals:function(b){var d,e,g,h,o,n,q=new THREE.Vector3,r=new THREE.Vector3;g=0;for(h=this.faces.length;g<h;g++){o=this.faces[g];if(b&&o.vertexNormals.length){q.set(0,0,0);d=0;for(e=o.vertexNormals.length;d<e;d++)q.addSelf(o.vertexNormals[d]);q.divideScalar(3)}else{d=this.vertices[o.a];e=this.vertices[o.b];n=this.vertices[o.c];q.sub(n.position,e.position);r.sub(d.position,e.position);q.crossSelf(r)}q.isZero()||
q.normalize();o.normal.copy(q)}},computeVertexNormals:function(){var b,d,e,g;if(this.__tmpVertices==undefined){g=this.__tmpVertices=Array(this.vertices.length);b=0;for(d=this.vertices.length;b<d;b++)g[b]=new THREE.Vector3;b=0;for(d=this.faces.length;b<d;b++){e=this.faces[b];if(e instanceof THREE.Face3)e.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];else if(e instanceof THREE.Face4)e.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]}}else{g=
this.__tmpVertices;b=0;for(d=this.vertices.length;b<d;b++)g[b].set(0,0,0)}b=0;for(d=this.faces.length;b<d;b++){e=this.faces[b];if(e instanceof THREE.Face3){g[e.a].addSelf(e.normal);g[e.b].addSelf(e.normal);g[e.c].addSelf(e.normal)}else if(e instanceof THREE.Face4){g[e.a].addSelf(e.normal);g[e.b].addSelf(e.normal);g[e.c].addSelf(e.normal);g[e.d].addSelf(e.normal)}}b=0;for(d=this.vertices.length;b<d;b++)g[b].normalize();b=0;for(d=this.faces.length;b<d;b++){e=this.faces[b];if(e instanceof THREE.Face3){e.vertexNormals[0].copy(g[e.a]);
e.vertexNormals[1].copy(g[e.b]);e.vertexNormals[2].copy(g[e.c])}else if(e instanceof THREE.Face4){e.vertexNormals[0].copy(g[e.a]);e.vertexNormals[1].copy(g[e.b]);e.vertexNormals[2].copy(g[e.c]);e.vertexNormals[3].copy(g[e.d])}}},computeTangents:function(){function b(Y,na,oa,ha,Z,va,qa){q=Y.vertices[na].position;r=Y.vertices[oa].position;v=Y.vertices[ha].position;E=n[Z];F=n[va];H=n[qa];I=r.x-q.x;M=v.x-q.x;N=r.y-q.y;V=v.y-q.y;L=r.z-q.z;ra=v.z-q.z;da=F.u-E.u;pa=H.u-E.u;$=F.v-E.v;K=H.v-E.v;Ia=1/(da*K-
pa*$);R.set((K*I-$*M)*Ia,(K*N-$*V)*Ia,(K*L-$*ra)*Ia);c.set((da*M-pa*I)*Ia,(da*V-pa*N)*Ia,(da*ra-pa*L)*Ia);Fa[na].addSelf(R);Fa[oa].addSelf(R);Fa[ha].addSelf(R);fa[na].addSelf(c);fa[oa].addSelf(c);fa[ha].addSelf(c)}var d,e,g,h,o,n,q,r,v,E,F,H,I,M,N,V,L,ra,da,pa,$,K,Ia,ca,Fa=[],fa=[],R=new THREE.Vector3,c=new THREE.Vector3,ga=new THREE.Vector3,xa=new THREE.Vector3,sa=new THREE.Vector3;d=0;for(e=this.vertices.length;d<e;d++){Fa[d]=new THREE.Vector3;fa[d]=new THREE.Vector3}d=0;for(e=this.faces.length;d<
e;d++){o=this.faces[d];n=this.faceVertexUvs[0][d];if(o instanceof THREE.Face3)b(this,o.a,o.b,o.c,0,1,2);else if(o instanceof THREE.Face4){b(this,o.a,o.b,o.c,0,1,2);b(this,o.a,o.b,o.d,0,1,3)}}var ya=["a","b","c","d"];d=0;for(e=this.faces.length;d<e;d++){o=this.faces[d];for(g=0;g<o.vertexNormals.length;g++){sa.copy(o.vertexNormals[g]);h=o[ya[g]];ca=Fa[h];ga.copy(ca);ga.subSelf(sa.multiplyScalar(sa.dot(ca))).normalize();xa.cross(o.vertexNormals[g],ca);h=xa.dot(fa[h]);h=h<0?-1:1;o.vertexTangents[g]=new THREE.Vector4(ga.x,
ga.y,ga.z,h)}}this.hasTangents=!0},computeBoundingBox:function(){var b;if(this.vertices.length>0){this.boundingBox={x:[this.vertices[0].position.x,this.vertices[0].position.x],y:[this.vertices[0].position.y,this.vertices[0].position.y],z:[this.vertices[0].position.z,this.vertices[0].position.z]};for(var d=1,e=this.vertices.length;d<e;d++){b=this.vertices[d];if(b.position.x<this.boundingBox.x[0])this.boundingBox.x[0]=b.position.x;else if(b.position.x>this.boundingBox.x[1])this.boundingBox.x[1]=b.position.x;
if(b.position.y<this.boundingBox.y[0])this.boundingBox.y[0]=b.position.y;else if(b.position.y>this.boundingBox.y[1])this.boundingBox.y[1]=b.position.y;if(b.position.z<this.boundingBox.z[0])this.boundingBox.z[0]=b.position.z;else if(b.position.z>this.boundingBox.z[1])this.boundingBox.z[1]=b.position.z}}},computeBoundingSphere:function(){for(var b=this.boundingSphere===null?0:this.boundingSphere.radius,d=0,e=this.vertices.length;d<e;d++)b=Math.max(b,this.vertices[d].position.length());this.boundingSphere=
{radius:b}},computeEdgeFaces:function(){function b(r,v){return Math.min(r,v)+"_"+Math.max(r,v)}function d(r,v,E){if(r[v]===undefined){r[v]={set:{},array:[]};r[v].set[E]=1;r[v].array.push(E)}else if(r[v].set[E]===undefined){r[v].set[E]=1;r[v].array.push(E)}}var e,g,h,o,n,q={};e=0;for(g=this.faces.length;e<g;e++){n=this.faces[e];if(n instanceof THREE.Face3){h=b(n.a,n.b);d(q,h,e);h=b(n.b,n.c);d(q,h,e);h=b(n.a,n.c);d(q,h,e)}else if(n instanceof THREE.Face4){h=b(n.b,n.d);d(q,h,e);h=b(n.a,n.b);d(q,h,e);
h=b(n.a,n.d);d(q,h,e);h=b(n.b,n.c);d(q,h,e);h=b(n.c,n.d);d(q,h,e)}}e=0;for(g=this.edges.length;e<g;e++){n=this.edges[e];h=n.vertexIndices[0];o=n.vertexIndices[1];n.faceIndices=q[b(h,o)].array;for(h=0;h<n.faceIndices.length;h++){o=n.faceIndices[h];n.faces.push(this.faces[o])}}}};THREE.GeometryIdCounter=0;
THREE.Camera=function(b,d,e,g,h){THREE.Object3D.call(this);this.fov=b||50;this.aspect=d||1;this.near=e||0.1;this.far=g||2E3;this.target=h||new THREE.Object3D;this.useTarget=!0;this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=null;this.updateProjectionMatrix()};THREE.Camera.prototype=new THREE.Object3D;THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.supr=THREE.Object3D.prototype;
THREE.Camera.prototype.translate=function(b,d){this.matrix.rotateAxis(d);this.position.addSelf(d.multiplyScalar(b));this.target.position.addSelf(d.multiplyScalar(b))};THREE.Camera.prototype.updateProjectionMatrix=function(){this.projectionMatrix=THREE.Matrix4.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.Camera.prototype.update=function(b,d,e){if(this.useTarget){this.matrix.lookAt(this.position,this.target.position,this.up);this.matrix.setPosition(this.position);b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse);d=!0}else{this.matrixAutoUpdate&&this.updateMatrix();if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=
!1;d=!0;THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse)}}for(b=0;b<this.children.length;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.Light=function(b){THREE.Object3D.call(this);this.color=new THREE.Color(b)};THREE.Light.prototype=new THREE.Object3D;THREE.Light.prototype.constructor=THREE.Light;THREE.Light.prototype.supr=THREE.Object3D.prototype;THREE.AmbientLight=function(b){THREE.Light.call(this,b)};THREE.AmbientLight.prototype=new THREE.Light;
THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.DirectionalLight=function(b,d,e,g){THREE.Light.call(this,b);this.position=new THREE.Vector3(0,1,0);this.intensity=d||1;this.distance=e||0;this.castShadow=g!==undefined?g:!1};THREE.DirectionalLight.prototype=new THREE.Light;THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;THREE.PointLight=function(b,d,e){THREE.Light.call(this,b);this.position=new THREE.Vector3;this.intensity=d||1;this.distance=e||0};
THREE.PointLight.prototype=new THREE.Light;THREE.PointLight.prototype.constructor=THREE.PointLight;THREE.LensFlare=function(b,d,e,g){THREE.Object3D.call(this);this.positionScreen=new THREE.Vector3;this.lensFlares=[];this.customUpdateCallback=undefined;b!==undefined&&this.add(b,d,e,g)};THREE.LensFlare.prototype=new THREE.Object3D;THREE.LensFlare.prototype.constructor=THREE.LensFlare;THREE.LensFlare.prototype.supr=THREE.Object3D.prototype;
THREE.LensFlare.prototype.add=function(b,d,e,g){d===undefined&&(d=-1);e===undefined&&(e=0);if(g===undefined)g=THREE.BillboardBlending;e=Math.min(e,Math.max(0,e));this.lensFlares.push({texture:b,size:d,distance:e,x:0,y:0,z:0,scale:1,rotation:1,opacity:1,blending:g})};
THREE.LensFlare.prototype.updateLensFlares=function(){var b,d=this.lensFlares.length,e,g=-this.positionScreen.x*2,h=-this.positionScreen.y*2;for(b=0;b<d;b++){e=this.lensFlares[b];e.x=this.positionScreen.x+g*e.distance;e.y=this.positionScreen.y+h*e.distance;e.wantedRotation=e.x*Math.PI*0.25;e.rotation+=(e.wantedRotation-e.rotation)*0.25}};
THREE.Material=function(b){this.id=THREE.MaterialCounter.value++;b=b||{};this.opacity=b.opacity!==undefined?b.opacity:1;this.transparent=b.transparent!==undefined?b.transparent:!1;this.blending=b.blending!==undefined?b.blending:THREE.NormalBlending;this.depthTest=b.depthTest!==undefined?b.depthTest:!0};THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NormalBlending=0;THREE.AdditiveBlending=1;THREE.SubtractiveBlending=2;
THREE.MultiplyBlending=3;THREE.AdditiveAlphaBlending=4;THREE.MaterialCounter={value:0};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.LatitudeReflectionMapping=function(){};THREE.LatitudeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.UVMapping=function(){};
THREE.LineBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.linewidth=b.linewidth!==undefined?b.linewidth:1;this.linecap=b.linecap!==undefined?b.linecap:"round";this.linejoin=b.linejoin!==undefined?b.linejoin:"round";this.vertexColors=b.vertexColors?b.vertexColors:!1};THREE.LineBasicMaterial.prototype=new THREE.Material;THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.MeshBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=
b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:"round";this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:"round";this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?
b.morphTargets:!1};THREE.MeshBasicMaterial.prototype=new THREE.Material;THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=
b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:"round";this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:"round";this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?
b.morphTargets:!1};THREE.MeshLambertMaterial.prototype=new THREE.Material;THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.ambient=b.ambient!==undefined?new THREE.Color(b.ambient):new THREE.Color(328965);this.specular=b.specular!==undefined?new THREE.Color(b.specular):new THREE.Color(1118481);this.shininess=b.shininess!==undefined?b.shininess:30;this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?
b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:"round";this.wireframeLinejoin=
b.wireframeLinejoin!==undefined?b.wireframeLinejoin:"round";this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?b.morphTargets:!1};THREE.MeshPhongMaterial.prototype=new THREE.Material;THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1};THREE.MeshDepthMaterial.prototype=new THREE.Material;THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.shading=b.shading?b.shading:THREE.FlatShading;this.wireframe=b.wireframe?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth?b.wireframeLinewidth:1};THREE.MeshNormalMaterial.prototype=new THREE.Material;THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshFaceMaterial=function(){};
THREE.MeshShaderMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.fragmentShader=b.fragmentShader!==undefined?b.fragmentShader:"void main() {}";this.vertexShader=b.vertexShader!==undefined?b.vertexShader:"void main() {}";this.uniforms=b.uniforms!==undefined?b.uniforms:{};this.attributes=b.attributes;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:
1;this.fog=b.fog!==undefined?b.fog:!1;this.lights=b.lights!==undefined?b.lights:!1;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?b.morphTargets:!1};THREE.MeshShaderMaterial.prototype=new THREE.Material;THREE.MeshShaderMaterial.prototype.constructor=THREE.MeshShaderMaterial;
THREE.ParticleBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.size=b.size!==undefined?b.size:1;this.sizeAttenuation=b.sizeAttenuation!==undefined?b.sizeAttenuation:!0;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1};THREE.ParticleBasicMaterial.prototype=new THREE.Material;THREE.ParticleBasicMaterial.prototype.constructor=THREE.ParticleBasicMaterial;
THREE.ShadowVolumeDynamicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:
0.98;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:"round";this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:"round";this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==
undefined?b.morphTargets:!1};THREE.ShadowVolumeDynamicMaterial.prototype=new THREE.Material;THREE.ShadowVolumeDynamicMaterial.prototype.constructor=THREE.ShadowVolumeDynamicMaterial;
THREE.Texture=function(b,d,e,g,h,o){this.image=b;this.mapping=d!==undefined?d:new THREE.UVMapping;this.wrapS=e!==undefined?e:THREE.ClampToEdgeWrapping;this.wrapT=g!==undefined?g:THREE.ClampToEdgeWrapping;this.magFilter=h!==undefined?h:THREE.LinearFilter;this.minFilter=o!==undefined?o:THREE.LinearMipMapLinearFilter;this.needsUpdate=!1};THREE.Texture.prototype={clone:function(){return new THREE.Texture(this.image,this.mapping,this.wrapS,this.wrapT,this.magFilter,this.minFilter)}};
THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.RepeatWrapping=0;THREE.ClampToEdgeWrapping=1;THREE.MirroredRepeatWrapping=2;THREE.NearestFilter=3;THREE.NearestMipMapNearestFilter=4;THREE.NearestMipMapLinearFilter=5;THREE.LinearFilter=6;THREE.LinearMipMapNearestFilter=7;THREE.LinearMipMapLinearFilter=8;THREE.ByteType=9;THREE.UnsignedByteType=10;THREE.ShortType=11;THREE.UnsignedShortType=12;THREE.IntType=13;THREE.UnsignedIntType=14;THREE.FloatType=15;THREE.AlphaFormat=16;THREE.RGBFormat=17;
THREE.RGBAFormat=18;THREE.LuminanceFormat=19;THREE.LuminanceAlphaFormat=20;THREE.Particle=function(b){THREE.Object3D.call(this);this.materials=b instanceof Array?b:[b]};THREE.Particle.prototype=new THREE.Object3D;THREE.Particle.prototype.constructor=THREE.Particle;THREE.ParticleSystem=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.sortParticles=!1};THREE.ParticleSystem.prototype=new THREE.Object3D;THREE.ParticleSystem.prototype.constructor=THREE.ParticleSystem;
THREE.Line=function(b,d,e){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.type=e!=undefined?e:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=new THREE.Object3D;THREE.Line.prototype.constructor=THREE.Line;
THREE.Mesh=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d&&d.length?d:[d];this.flipSided=!1;this.doubleSided=!1;this.overdraw=!1;if(this.geometry){this.geometry.boundingSphere||this.geometry.computeBoundingSphere();this.boundRadius=b.boundingSphere.radius;if(this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var e=0;e<this.geometry.morphTargets.length;e++){this.morphTargetInfluences.push(0);
this.morphTargetDictionary[this.geometry.morphTargets[e].name]=e}}}};THREE.Mesh.prototype=new THREE.Object3D;THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.supr=THREE.Object3D.prototype;THREE.Mesh.prototype.getMorphTargetIndexByName=function(b){if(this.morphTargetDictionary[b]!==undefined)return this.morphTargetDictionary[b];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+b+" does not exist. Returning 0.");return 0};
THREE.Bone=function(b){THREE.Object3D.call(this);this.skin=b;this.skinMatrix=new THREE.Matrix4;this.hasNoneBoneChildren=!1};THREE.Bone.prototype=new THREE.Object3D;THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.supr=THREE.Object3D.prototype;
THREE.Bone.prototype.update=function(b,d,e){this.matrixAutoUpdate&&(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.skinMatrix.multiply(b,this.matrix):this.skinMatrix.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g,h=this.children.length;if(this.hasNoneBoneChildren){this.matrixWorld.multiply(this.skin.matrixWorld,this.skinMatrix);for(g=0;g<h;g++){b=this.children[g];b instanceof THREE.Bone?b.update(this.skinMatrix,d,e):b.update(this.matrixWorld,!0,e)}}else for(g=0;g<h;g++)this.children[g].update(this.skinMatrix,
d,e)};THREE.Bone.prototype.addChild=function(b){if(this.children.indexOf(b)===-1){b.parent!==undefined&&b.parent.removeChild(b);b.parent=this;this.children.push(b);if(!(b instanceof THREE.Bone))this.hasNoneBoneChildren=!0}};
THREE.SkinnedMesh=function(b,d){THREE.Mesh.call(this,b,d);this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var e,g,h,o,n,q;if(this.geometry.bones!==undefined){for(e=0;e<this.geometry.bones.length;e++){h=this.geometry.bones[e];o=h.pos;n=h.rotq;q=h.scl;g=this.addBone();g.name=h.name;g.position.set(o[0],o[1],o[2]);g.quaternion.set(n[0],n[1],n[2],n[3]);g.useQuaternion=!0;q!==undefined?g.scale.set(q[0],q[1],q[2]):g.scale.set(1,1,1)}for(e=0;e<this.bones.length;e++){h=this.geometry.bones[e];
g=this.bones[e];h.parent===-1?this.addChild(g):this.bones[h.parent].addChild(g)}this.boneMatrices=new Float32Array(16*this.bones.length);this.pose()}};THREE.SkinnedMesh.prototype=new THREE.Mesh;THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update=function(b,d,e){if(this.visible){this.matrixAutoUpdate&&(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g,h=this.children.length;for(g=0;g<h;g++){b=this.children[g];b instanceof THREE.Bone?b.update(this.identityMatrix,!1,e):b.update(this.matrixWorld,d,e)}e=this.bones.length;ba=this.bones;bm=this.boneMatrices;for(d=0;d<e;d++)ba[d].skinMatrix.flattenToArrayOffset(bm,
d*16)}};THREE.SkinnedMesh.prototype.addBone=function(b){b===undefined&&(b=new THREE.Bone(this));this.bones.push(b);return b};
THREE.SkinnedMesh.prototype.pose=function(){this.update(undefined,!0);for(var b,d=[],e=0;e<this.bones.length;e++){b=this.bones[e];d.push(THREE.Matrix4.makeInvert(b.skinMatrix));b.skinMatrix.flattenToArrayOffset(this.boneMatrices,e*16)}if(this.geometry.skinVerticesA===undefined){this.geometry.skinVerticesA=[];this.geometry.skinVerticesB=[];var g;for(b=0;b<this.geometry.skinIndices.length;b++){e=this.geometry.vertices[b].position;var h=this.geometry.skinIndices[b].x,o=this.geometry.skinIndices[b].y;
g=new THREE.Vector3(e.x,e.y,e.z);this.geometry.skinVerticesA.push(d[h].multiplyVector3(g));g=new THREE.Vector3(e.x,e.y,e.z);this.geometry.skinVerticesB.push(d[o].multiplyVector3(g));if(this.geometry.skinWeights[b].x+this.geometry.skinWeights[b].y!==1){e=(1-(this.geometry.skinWeights[b].x+this.geometry.skinWeights[b].y))*0.5;this.geometry.skinWeights[b].x+=e;this.geometry.skinWeights[b].y+=e}}}};
THREE.Ribbon=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.flipSided=!1;this.doubleSided=!1};THREE.Ribbon.prototype=new THREE.Object3D;THREE.Ribbon.prototype.constructor=THREE.Ribbon;
THREE.Sound=function(b,d,e,g){THREE.Object3D.call(this);this.isLoaded=!1;this.isAddedToDOM=!1;this.isPlaying=!1;this.duration=-1;this.radius=d!==undefined?Math.abs(d):100;this.volume=Math.min(1,Math.max(0,e!==undefined?e:1));this.domElement=document.createElement("audio");this.domElement.volume=0;this.domElement.pan=0;this.domElement.loop=g!==undefined?g:!0;this.sources=b instanceof Array?b:[b];var h;e=this.sources.length;for(b=0;b<e;b++){d=this.sources[b];d.toLowerCase();if(d.indexOf(".mp3")!==-1)h=
"audio/mpeg";else if(d.indexOf(".ogg")!==-1)h="audio/ogg";else d.indexOf(".wav")!==-1&&(h="audio/wav");if(this.domElement.canPlayType(h)){h=document.createElement("source");h.src=this.sources[b];this.domElement.THREESound=this;this.domElement.appendChild(h);this.domElement.addEventListener("canplay",this.onLoad,!0);this.domElement.load();break}}};THREE.Sound.prototype=new THREE.Object3D;THREE.Sound.prototype.constructor=THREE.Sound;THREE.Sound.prototype.supr=THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad=function(){var b=this.THREESound;if(!b.isLoaded){this.removeEventListener("canplay",this.onLoad,!0);b.isLoaded=!0;b.duration=this.duration;b.isPlaying&&b.play()}};THREE.Sound.prototype.addToDOM=function(b){this.isAddedToDOM=!0;b.appendChild(this.domElement)};THREE.Sound.prototype.play=function(b){this.isPlaying=!0;if(this.isLoaded){this.domElement.play();if(b)this.domElement.currentTime=b%this.duration}};THREE.Sound.prototype.pause=function(){this.isPlaying=!1;this.domElement.pause()};
THREE.Sound.prototype.stop=function(){this.isPlaying=!1;this.domElement.pause();this.domElement.currentTime=0};THREE.Sound.prototype.calculateVolumeAndPan=function(b){b=b.length();this.domElement.volume=b<=this.radius?this.volume*(1-b/this.radius):0};
THREE.Sound.prototype.update=function(b,d,e){if(this.matrixAutoUpdate){this.matrix.setPosition(this.position);d=!0}if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g=this.children.length;for(b=0;b<g;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.LOD=function(){THREE.Object3D.call(this);this.LODs=[]};THREE.LOD.prototype=new THREE.Object3D;THREE.LOD.prototype.constructor=THREE.LOD;
THREE.LOD.prototype.supr=THREE.Object3D.prototype;THREE.LOD.prototype.add=function(b,d){d===undefined&&(d=0);d=Math.abs(d);for(var e=0;e<this.LODs.length;e++)if(d<this.LODs[e].visibleAtDistance)break;this.LODs.splice(e,0,{visibleAtDistance:d,object3D:b});this.addChild(b)};
THREE.LOD.prototype.update=function(b,d,e){this.matrixAutoUpdate&&(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}if(this.LODs.length>1){b=e.matrixWorldInverse;b=-(b.n31*this.position.x+b.n32*this.position.y+b.n33*this.position.z+b.n34);this.LODs[0].object3D.visible=!0;for(var g=1;g<this.LODs.length;g++)if(b>=this.LODs[g].visibleAtDistance){this.LODs[g-1].object3D.visible=
!1;this.LODs[g].object3D.visible=!0}else break;for(;g<this.LODs.length;g++)this.LODs[g].object3D.visible=!1}for(b=0;b<this.children.length;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.ShadowVolume=function(b,d){if(b instanceof THREE.Mesh){THREE.Mesh.call(this,b.geometry,d?[new THREE.ShadowVolumeDynamicMaterial]:[new THREE.ShadowVolumeDynamicMaterial]);b.addChild(this)}else THREE.Mesh.call(this,b,d?[new THREE.ShadowVolumeDynamicMaterial]:[new THREE.ShadowVolumeDynamicMaterial]);this.calculateShadowVolumeGeometry()};
THREE.ShadowVolume.prototype=new THREE.Mesh;THREE.ShadowVolume.prototype.constructor=THREE.ShadowVolume;THREE.ShadowVolume.prototype.supr=THREE.Mesh.prototype;
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometry=function(){if(this.geometry.edges&&this.geometry.edges.length){var b,d,e,g,h,o,n,q,r,v,E,F,H,I,M=new THREE.Geometry;M.vertices=this.geometry.vertices;g=M.faces=this.geometry.faces;var N=M.egdes=this.geometry.edges,V=M.edgeFaces=[];h=0;var L=[];b=0;for(d=g.length;b<d;b++){e=g[b];L.push(h);h+=e instanceof THREE.Face3?3:4;e.vertexNormals[0]=e.normal;e.vertexNormals[1]=e.normal;e.vertexNormals[2]=e.normal;if(e instanceof THREE.Face4)e.vertexNormals[3]=
e.normal}b=0;for(d=N.length;b<d;b++){q=N[b];e=q.faces[0];g=q.faces[1];h=q.faceIndices[0];o=q.faceIndices[1];n=q.vertexIndices[0];q=q.vertexIndices[1];if(e.a===n){r="a";E=L[h]+0}else if(e.b===n){r="b";E=L[h]+1}else if(e.c===n){r="c";E=L[h]+2}else if(e.d===n){r="d";E=L[h]+3}if(e.a===q){r+="a";F=L[h]+0}else if(e.b===q){r+="b";F=L[h]+1}else if(e.c===q){r+="c";F=L[h]+2}else if(e.d===q){r+="d";F=L[h]+3}if(g.a===n){v="a";H=L[o]+0}else if(g.b===n){v="b";H=L[o]+1}else if(g.c===n){v="c";H=L[o]+2}else if(g.d===
n){v="d";H=L[o]+3}if(g.a===q){v+="a";I=L[o]+0}else if(g.b===q){v+="b";I=L[o]+1}else if(g.c===q){v+="c";I=L[o]+2}else if(g.d===q){v+="d";I=L[o]+3}if(r==="ac"||r==="ad"||r==="ca"||r==="da"){if(E>F){e=E;E=F;F=e}}else if(E<F){e=E;E=F;F=e}if(v==="ac"||v==="ad"||v==="ca"||v==="da"){if(H>I){e=H;H=I;I=e}}else if(H<I){e=H;H=I;I=e}e=new THREE.Face4(E,F,H,I);e.normal.set(1,0,0);V.push(e)}this.geometry=M}else this.calculateShadowVolumeGeometryWithoutEdgeInfo(this.geometry)};
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometryWithoutEdgeInfo=function(b){this.geometry=new THREE.Geometry;this.geometry.boundingSphere=b.boundingSphere;this.geometry.edgeFaces=[];var d=this.geometry.vertices,e=this.geometry.faces,g=this.geometry.edgeFaces,h=b.faces;b=b.vertices;var o=h.length,n,q,r,v,E,F=["a","b","c","d"];for(r=0;r<o;r++){q=d.length;n=h[r];if(n instanceof THREE.Face4){v=4;q=new THREE.Face4(q,q+1,q+2,q+3)}else{v=3;q=new THREE.Face3(q,q+1,q+2)}q.normal.copy(n.normal);e.push(q);
for(q=0;q<v;q++){E=b[n[F[q]]];d.push(new THREE.Vertex(E.position.clone()))}}for(o=0;o<h.length-1;o++){b=e[o];for(n=o+1;n<h.length;n++){q=e[n];q=this.facesShareEdge(d,b,q);if(q!==undefined){q=new THREE.Face4(q.indices[0],q.indices[3],q.indices[2],q.indices[1]);q.normal.set(1,0,0);g.push(q)}}}};
THREE.ShadowVolume.prototype.facesShareEdge=function(b,d,e){var g,h,o,n,q,r,v,E,F,H,I,M,N,V=0,L=["a","b","c","d"];g=d instanceof THREE.Face4?4:3;h=e instanceof THREE.Face4?4:3;for(M=0;M<g;M++){o=d[L[M]];q=b[o];for(N=0;N<h;N++){n=e[L[N]];r=b[n];if(Math.abs(q.position.x-r.position.x)<1.0E-4&&Math.abs(q.position.y-r.position.y)<1.0E-4&&Math.abs(q.position.z-r.position.z)<1.0E-4){V++;if(V===1){v=q;E=r;F=o;H=n;I=L[M]}if(V===2){I+=L[M];return I==="ad"||I==="ac"?{faces:[d,e],vertices:[v,E,r,q],indices:[F,
H,n,o],vertexTypes:[1,2,2,1],extrudable:!0}:{faces:[d,e],vertices:[v,q,r,E],indices:[F,o,n,H],vertexTypes:[1,1,2,2],extrudable:!0}}}}}};THREE.Scene=function(){THREE.Object3D.call(this);this.matrixAutoUpdate=!1;this.collisions=this.fog=null;this.objects=[];this.lights=[];this.sounds=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=new THREE.Object3D;THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.supr=THREE.Object3D.prototype;
THREE.Scene.prototype.addChild=function(b){this.supr.addChild.call(this,b);this.addChildRecurse(b)};THREE.Scene.prototype.addChildRecurse=function(b){if(b instanceof THREE.Light)this.lights.indexOf(b)===-1&&this.lights.push(b);else if(b instanceof THREE.Sound)this.sounds.indexOf(b)===-1&&this.sounds.push(b);else if(!(b instanceof THREE.Camera||b instanceof THREE.Bone)&&this.objects.indexOf(b)===-1){this.objects.push(b);this.__objectsAdded.push(b)}for(var d=0;d<b.children.length;d++)this.addChildRecurse(b.children[d])};
THREE.Scene.prototype.removeChild=function(b){this.supr.removeChild.call(this,b);this.removeChildRecurse(b)};THREE.Scene.prototype.removeChildRecurse=function(b){if(b instanceof THREE.Light){var d=this.lights.indexOf(b);d!==-1&&this.lights.splice(d,1)}else if(b instanceof THREE.Sound){d=this.sounds.indexOf(b);d!==-1&&this.sounds.splice(d,1)}else if(!(b instanceof THREE.Camera)){d=this.objects.indexOf(b);if(d!==-1){this.objects.splice(d,1);this.__objectsRemoved.push(b)}}for(d=0;d<b.children.length;d++)this.removeChildRecurse(b.children[d])};
THREE.Scene.prototype.addObject=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeObject=THREE.Scene.prototype.removeChild;THREE.Scene.prototype.addLight=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeLight=THREE.Scene.prototype.removeChild;THREE.Fog=function(b,d,e){this.color=new THREE.Color(b);this.near=d||1;this.far=e||1E3};THREE.FogExp2=function(b,d){this.color=new THREE.Color(b);this.density=d!==undefined?d:2.5E-4};
THREE.Projector=function(){function b(){var R=r[q]=r[q]||new THREE.RenderableVertex;q++;return R}function d(R,c){return c.z-R.z}function e(R,c){var ga=0,xa=1,sa=R.z+R.w,ya=c.z+c.w,Y=-R.z+R.w,na=-c.z+c.w;if(sa>=0&&ya>=0&&Y>=0&&na>=0)return!0;else if(sa<0&&ya<0||Y<0&&na<0)return!1;else{if(sa<0)ga=Math.max(ga,sa/(sa-ya));else ya<0&&(xa=Math.min(xa,sa/(sa-ya)));if(Y<0)ga=Math.max(ga,Y/(Y-na));else na<0&&(xa=Math.min(xa,Y/(Y-na)));if(xa<ga)return!1;else{R.lerpSelf(c,ga);c.lerpSelf(R,1-xa);return!0}}}var g,
h,o=[],n,q,r=[],v,E,F=[],H,I=[],M,N,V=[],L,ra,da=[],pa=new THREE.Vector4,$=new THREE.Vector4,K=new THREE.Matrix4,Ia=new THREE.Matrix4,ca=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],Fa=new THREE.Vector4,fa=new THREE.Vector4;this.projectVector=function(R,c){K.multiply(c.projectionMatrix,c.matrixWorldInverse);K.multiplyVector3(R);return R};this.unprojectVector=function(R,c){K.multiply(c.matrixWorld,THREE.Matrix4.makeInvert(c.projectionMatrix));
K.multiplyVector3(R);return R};this.projectObjects=function(R,c,ga){c=[];var xa,sa,ya;h=0;sa=R.objects;R=0;for(xa=sa.length;R<xa;R++){ya=sa[R];var Y;if(!(Y=!ya.visible))if(Y=ya instanceof THREE.Mesh){a:{Y=void 0;for(var na=ya.matrixWorld,oa=-ya.geometry.boundingSphere.radius*Math.max(ya.scale.x,Math.max(ya.scale.y,ya.scale.z)),ha=0;ha<6;ha++){Y=ca[ha].x*na.n14+ca[ha].y*na.n24+ca[ha].z*na.n34+ca[ha].w;if(Y<=oa){Y=!1;break a}}Y=!0}Y=!Y}if(!Y){Y=o[h]=o[h]||new THREE.RenderableObject;h++;g=Y;pa.copy(ya.position);
K.multiplyVector3(pa);g.object=ya;g.z=pa.z;c.push(g)}}ga&&c.sort(d);return c};this.projectScene=function(R,c,ga){var xa=[],sa=c.near,ya=c.far,Y,na,oa,ha,Z,va,qa,za,Aa,aa,Pa,Ta,Xa,Ua,Sa,S,J;ra=N=H=E=0;c.matrixAutoUpdate&&c.update(undefined,!0);R.update(undefined,!1,c);K.multiply(c.projectionMatrix,c.matrixWorldInverse);ca[0].set(K.n41-K.n11,K.n42-K.n12,K.n43-K.n13,K.n44-K.n14);ca[1].set(K.n41+K.n11,K.n42+K.n12,K.n43+K.n13,K.n44+K.n14);ca[2].set(K.n41+K.n21,K.n42+K.n22,K.n43+K.n23,K.n44+K.n24);ca[3].set(K.n41-
K.n21,K.n42-K.n22,K.n43-K.n23,K.n44-K.n24);ca[4].set(K.n41-K.n31,K.n42-K.n32,K.n43-K.n33,K.n44-K.n34);ca[5].set(K.n41+K.n31,K.n42+K.n32,K.n43+K.n33,K.n44+K.n34);for(Y=0;Y<6;Y++){Aa=ca[Y];Aa.divideScalar(Math.sqrt(Aa.x*Aa.x+Aa.y*Aa.y+Aa.z*Aa.z))}Aa=this.projectObjects(R,c,!0);R=0;for(Y=Aa.length;R<Y;R++){aa=Aa[R].object;if(aa.visible){Pa=aa.matrixWorld;Ta=aa.matrixRotationWorld;Xa=aa.materials;Ua=aa.overdraw;q=0;if(aa instanceof THREE.Mesh){Sa=aa.geometry;ha=Sa.vertices;S=Sa.faces;Sa=Sa.faceVertexUvs;
na=0;for(oa=ha.length;na<oa;na++){n=b();n.positionWorld.copy(ha[na].position);Pa.multiplyVector3(n.positionWorld);n.positionScreen.copy(n.positionWorld);K.multiplyVector4(n.positionScreen);n.positionScreen.x/=n.positionScreen.w;n.positionScreen.y/=n.positionScreen.w;n.visible=n.positionScreen.z>sa&&n.positionScreen.z<ya}ha=0;for(na=S.length;ha<na;ha++){oa=S[ha];if(oa instanceof THREE.Face3){Z=r[oa.a];va=r[oa.b];qa=r[oa.c];if(Z.visible&&va.visible&&qa.visible&&(aa.doubleSided||aa.flipSided!=(qa.positionScreen.x-
Z.positionScreen.x)*(va.positionScreen.y-Z.positionScreen.y)-(qa.positionScreen.y-Z.positionScreen.y)*(va.positionScreen.x-Z.positionScreen.x)<0)){za=F[E]=F[E]||new THREE.RenderableFace3;E++;v=za;v.v1.copy(Z);v.v2.copy(va);v.v3.copy(qa)}else continue}else if(oa instanceof THREE.Face4){Z=r[oa.a];va=r[oa.b];qa=r[oa.c];za=r[oa.d];if(Z.visible&&va.visible&&qa.visible&&za.visible&&(aa.doubleSided||aa.flipSided!=((za.positionScreen.x-Z.positionScreen.x)*(va.positionScreen.y-Z.positionScreen.y)-(za.positionScreen.y-
Z.positionScreen.y)*(va.positionScreen.x-Z.positionScreen.x)<0||(va.positionScreen.x-qa.positionScreen.x)*(za.positionScreen.y-qa.positionScreen.y)-(va.positionScreen.y-qa.positionScreen.y)*(za.positionScreen.x-qa.positionScreen.x)<0))){J=I[H]=I[H]||new THREE.RenderableFace4;H++;v=J;v.v1.copy(Z);v.v2.copy(va);v.v3.copy(qa);v.v4.copy(za)}else continue}v.normalWorld.copy(oa.normal);Ta.multiplyVector3(v.normalWorld);v.centroidWorld.copy(oa.centroid);Pa.multiplyVector3(v.centroidWorld);v.centroidScreen.copy(v.centroidWorld);
K.multiplyVector3(v.centroidScreen);qa=oa.vertexNormals;Z=0;for(va=qa.length;Z<va;Z++){za=v.vertexNormalsWorld[Z];za.copy(qa[Z]);Ta.multiplyVector3(za)}Z=0;for(va=Sa.length;Z<va;Z++)if(J=Sa[Z][ha]){qa=0;for(za=J.length;qa<za;qa++)v.uvs[Z][qa]=J[qa]}v.meshMaterials=Xa;v.faceMaterials=oa.materials;v.overdraw=Ua;v.z=v.centroidScreen.z;xa.push(v)}}else if(aa instanceof THREE.Line){Ia.multiply(K,Pa);ha=aa.geometry.vertices;Z=b();Z.positionScreen.copy(ha[0].position);Ia.multiplyVector4(Z.positionScreen);
na=1;for(oa=ha.length;na<oa;na++){Z=b();Z.positionScreen.copy(ha[na].position);Ia.multiplyVector4(Z.positionScreen);va=r[q-2];Fa.copy(Z.positionScreen);fa.copy(va.positionScreen);if(e(Fa,fa)){Fa.multiplyScalar(1/Fa.w);fa.multiplyScalar(1/fa.w);Pa=V[N]=V[N]||new THREE.RenderableLine;N++;M=Pa;M.v1.positionScreen.copy(Fa);M.v2.positionScreen.copy(fa);M.z=Math.max(Fa.z,fa.z);M.materials=aa.materials;xa.push(M)}}}else if(aa instanceof THREE.Particle){$.set(aa.matrixWorld.n14,aa.matrixWorld.n24,aa.matrixWorld.n34,
1);K.multiplyVector4($);$.z/=$.w;if($.z>0&&$.z<1){Pa=da[ra]=da[ra]||new THREE.RenderableParticle;ra++;L=Pa;L.x=$.x/$.w;L.y=$.y/$.w;L.z=$.z;L.rotation=aa.rotation.z;L.scale.x=aa.scale.x*Math.abs(L.x-($.x+c.projectionMatrix.n11)/($.w+c.projectionMatrix.n14));L.scale.y=aa.scale.y*Math.abs(L.y-($.y+c.projectionMatrix.n22)/($.w+c.projectionMatrix.n24));L.materials=aa.materials;xa.push(L)}}}}ga&&xa.sort(d);return xa}};
THREE.SoundRenderer=function(){this.volume=1;this.domElement=document.createElement("div");this.domElement.id="THREESound";this.cameraPosition=new THREE.Vector3;this.soundPosition=new THREE.Vector3;this.render=function(b,d,e){e&&b.update(undefined,!1,d);e=b.sounds;var g,h=e.length;for(g=0;g<h;g++){b=e[g];this.soundPosition.set(b.matrixWorld.n14,b.matrixWorld.n24,b.matrixWorld.n34);this.soundPosition.subSelf(d.position);if(b.isPlaying&&b.isLoaded){b.isAddedToDOM||b.addToDOM(this.domElement);b.calculateVolumeAndPan(this.soundPosition)}}}};
THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
envmap_vertex:"#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",map_pars_fragment:"#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",map_pars_vertex:"#ifdef USE_MAP\nvarying vec2 vUv;\n#endif",map_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",map_vertex:"#ifdef USE_MAP\nvUv = uv;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",lights_pars_vertex:"uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
lights_vertex:"if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}",
lights_pars_fragment:"#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",lights_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + vViewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\nvColor = color;\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",skinning_vertex:"#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
default_vertex:"#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif"};THREE.UniformsUtils={merge:function(b){var d,e,g,h={};for(d=0;d<b.length;d++){g=this.clone(b[d]);for(e in g)h[e]=g[e]}return h},clone:function(b){var d,e,g,h={};for(d in b){h[d]={};for(e in b[d]){g=b[d][e];h[d][e]=g instanceof THREE.Color||g instanceof THREE.Vector3||g instanceof THREE.Texture?g.clone():g}}return h}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:0,texture:null},lightMap:{type:"t",value:2,texture:null},envMap:{type:"t",value:1,texture:null},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)},morphTargetInfluences:{type:"f",
value:0}},lights:{enableLighting:{type:"i",value:1},ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:0,texture:null},fogDensity:{type:"f",value:2.5E-4},
fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}}};
THREE.ShaderLib={lensFlareVertexTexture:{vertexShader:"uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nuniform\tsampler2D\tocclusionMap;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvarying\tfloat\tvVisibility;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ));\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvarying\tfloat\t\tvVisibility;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"},
lensFlare:{vertexShader:"uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tsampler2D\tocclusionMap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 )).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"},
sprite:{vertexShader:"uniform\tint\t\tuseScreenCoordinates;\nuniform    int     affectedByDistance;\nuniform\tvec3\tscreenPosition;\nuniform \tmat4 \tmodelViewMatrix;\nuniform \tmat4 \tprojectionMatrix;\nuniform    float   rotation;\nuniform    vec2    scale;\nuniform    vec2    alignment;\nuniform    vec2    uvOffset;\nuniform\tvec2    uvScale;\nattribute \tvec2 \tposition;\nattribute  vec2\tuv;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"},shadowPost:{vertexShader:"uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main(void)\n{\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}",fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main( void )\n{\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"},
shadowVolumeDynamic:{uniforms:{directionalLightDirection:{type:"fv",value:[]}},vertexShader:"uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm )), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}",fragmentShader:"void main() {\ngl_FragColor = vec4( 1.0 );\n}"},
depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},
fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",vertexShader:"varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"},basic:{uniforms:THREE.UniformsLib.common,fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.lights]),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,
THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["varying vec3 vLightWeighting;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,"vec3 transformedNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.lights,{ambient:{type:"c",value:new THREE.Color(328965)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30}}]),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_pars_fragment,"void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );",THREE.ShaderChunk.lights_fragment,THREE.ShaderChunk.map_fragment,
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,
"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,"#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;",THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,
THREE.ShaderChunk.default_vertex,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsLib.particle,fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["uniform float size;\nuniform float scale;",
THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n")}};
THREE.WebGLRenderer=function(b){function d(f,p,j){var k,m,x,y=f.vertices,u=y.length,A=f.colors,t=A.length,w=f.__vertexArray,z=f.__colorArray,D=f.__sortArray,B=f.__dirtyVertices,O=f.__dirtyColors;if(j.sortParticles){Pa.multiplySelf(j.matrixWorld);for(k=0;k<u;k++){m=y[k].position;Ua.copy(m);Pa.multiplyVector3(Ua);D[k]=[Ua.z,k]}D.sort(function(W,P){return P[0]-W[0]});for(k=0;k<u;k++){m=y[D[k][1]].position;x=k*3;w[x]=m.x;w[x+1]=m.y;w[x+2]=m.z}for(k=0;k<t;k++){x=k*3;color=A[D[k][1]];z[x]=color.r;z[x+1]=
color.g;z[x+2]=color.b}}else{if(B)for(k=0;k<u;k++){m=y[k].position;x=k*3;w[x]=m.x;w[x+1]=m.y;w[x+2]=m.z}if(O)for(k=0;k<t;k++){color=A[k];x=k*3;z[x]=color.r;z[x+1]=color.g;z[x+2]=color.b}}if(B||j.sortParticles){c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,w,p)}if(O||j.sortParticles){c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,z,p)}}function e(f,p,j,k,m){k.program||R.initMaterial(k,p,j,m);var x=k.program,y=x.uniforms,u=k.uniforms;if(x!=
sa){c.useProgram(x);sa=x}c.uniformMatrix4fv(y.projectionMatrix,!1,Ta);if(j&&(k instanceof THREE.MeshBasicMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshPhongMaterial||k instanceof THREE.LineBasicMaterial||k instanceof THREE.ParticleBasicMaterial||k.fog)){u.fogColor.value=j.color;if(j instanceof THREE.Fog){u.fogNear.value=j.near;u.fogFar.value=j.far}else if(j instanceof THREE.FogExp2)u.fogDensity.value=j.density}if(k instanceof THREE.MeshPhongMaterial||k instanceof THREE.MeshLambertMaterial||
k.lights){var A,t,w=0,z=0,D=0,B,O,W,P,X=Sa,Ga=X.directional.colors,T=X.directional.positions,Q=X.point.colors,U=X.point.positions,ta=X.point.distances,s=0,G=0;j=t=P=0;for(A=p.length;j<A;j++){t=p[j];B=t.color;O=t.position;W=t.intensity;P=t.distance;if(t instanceof THREE.AmbientLight){w+=B.r;z+=B.g;D+=B.b}else if(t instanceof THREE.DirectionalLight){P=s*3;Ga[P]=B.r*W;Ga[P+1]=B.g*W;Ga[P+2]=B.b*W;T[P]=O.x;T[P+1]=O.y;T[P+2]=O.z;s+=1}else if(t instanceof THREE.PointLight){t=G*3;Q[t]=B.r*W;Q[t+1]=B.g*W;
Q[t+2]=B.b*W;U[t]=O.x;U[t+1]=O.y;U[t+2]=O.z;ta[G]=P;G+=1}}for(j=s*3;j<Ga.length;j++)Ga[j]=0;for(j=G*3;j<Q.length;j++)Q[j]=0;X.point.length=G;X.directional.length=s;X.ambient[0]=w;X.ambient[1]=z;X.ambient[2]=D;j=Sa;u.enableLighting.value=j.directional.length+j.point.length;u.ambientLightColor.value=j.ambient;u.directionalLightColor.value=j.directional.colors;u.directionalLightDirection.value=j.directional.positions;u.pointLightColor.value=j.point.colors;u.pointLightPosition.value=j.point.positions;
u.pointLightDistance.value=j.point.distances}if(k instanceof THREE.MeshBasicMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshPhongMaterial){u.diffuse.value=k.color;u.opacity.value=k.opacity;u.map.texture=k.map;u.lightMap.texture=k.lightMap;u.envMap.texture=k.envMap;u.reflectivity.value=k.reflectivity;u.refractionRatio.value=k.refractionRatio;u.combine.value=k.combine;u.useRefract.value=k.envMap&&k.envMap.mapping instanceof THREE.CubeRefractionMapping}if(k instanceof THREE.LineBasicMaterial){u.diffuse.value=
k.color;u.opacity.value=k.opacity}else if(k instanceof THREE.ParticleBasicMaterial){u.psColor.value=k.color;u.opacity.value=k.opacity;u.size.value=k.size;u.scale.value=ga.height/2;u.map.texture=k.map}else if(k instanceof THREE.MeshPhongMaterial){u.ambient.value=k.ambient;u.specular.value=k.specular;u.shininess.value=k.shininess}else if(k instanceof THREE.MeshDepthMaterial){u.mNear.value=f.near;u.mFar.value=f.far;u.opacity.value=k.opacity}else if(k instanceof THREE.MeshNormalMaterial)u.opacity.value=
k.opacity;for(var i in u)if(z=x.uniforms[i]){A=u[i];w=A.type;j=A.value;if(w=="i")c.uniform1i(z,j);else if(w=="f")c.uniform1f(z,j);else if(w=="fv1")c.uniform1fv(z,j);else if(w=="fv")c.uniform3fv(z,j);else if(w=="v2")c.uniform2f(z,j.x,j.y);else if(w=="v3")c.uniform3f(z,j.x,j.y,j.z);else if(w=="v4")c.uniform4f(z,j.x,j.y,j.z,j.w);else if(w=="c")c.uniform3f(z,j.r,j.g,j.b);else if(w=="t"){c.uniform1i(z,j);if(A=A.texture)if(A.image instanceof Array&&A.image.length==6){if(A.image.length==6){if(A.needsUpdate){if(A.__webglInit){c.bindTexture(c.TEXTURE_CUBE_MAP,
A.image.__webglTextureCube);for(w=0;w<6;++w)c.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,c.RGBA,c.UNSIGNED_BYTE,A.image[w])}else{A.image.__webglTextureCube=c.createTexture();c.bindTexture(c.TEXTURE_CUBE_MAP,A.image.__webglTextureCube);for(w=0;w<6;++w)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,A.image[w]);A.__webglInit=!0}$(c.TEXTURE_CUBE_MAP,A,A.image[0]);c.bindTexture(c.TEXTURE_CUBE_MAP,null);A.needsUpdate=!1}c.activeTexture(c.TEXTURE0+j);c.bindTexture(c.TEXTURE_CUBE_MAP,
A.image.__webglTextureCube)}}else K(A,j)}}c.uniformMatrix4fv(y.modelViewMatrix,!1,m._modelViewMatrixArray);c.uniformMatrix3fv(y.normalMatrix,!1,m._normalMatrixArray);(k instanceof THREE.MeshShaderMaterial||k instanceof THREE.MeshPhongMaterial||k.envMap)&&y.cameraPosition!==null&&c.uniform3f(y.cameraPosition,f.position.x,f.position.y,f.position.z);(k instanceof THREE.MeshShaderMaterial||k.envMap||k.skinning)&&y.objectMatrix!==null&&c.uniformMatrix4fv(y.objectMatrix,!1,m._objectMatrixArray);(k instanceof
THREE.MeshPhongMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshShaderMaterial||k.skinning)&&y.viewMatrix!==null&&c.uniformMatrix4fv(y.viewMatrix,!1,Xa);if(k instanceof THREE.ShadowVolumeDynamicMaterial){f=u.directionalLightDirection.value;f[0]=-p[1].position.x;f[1]=-p[1].position.y;f[2]=-p[1].position.z;c.uniform3fv(y.directionalLightDirection,f);c.uniformMatrix4fv(y.objectMatrix,!1,m._objectMatrixArray);c.uniformMatrix4fv(y.viewMatrix,!1,Xa)}if(k.skinning){c.uniformMatrix4fv(y.cameraInverseMatrix,
!1,Xa);c.uniformMatrix4fv(y.boneGlobalMatrices,!1,m.boneMatrices)}return x}function g(f,p,j,k,m,x){if(k.opacity!=0){var y;f=e(f,p,j,k,x).attributes;if(!k.morphTargets&&f.position>=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglVertexBuffer);c.vertexAttribPointer(f.position,3,c.FLOAT,!1,0,0)}else{p=k.program.attributes;if(x.morphTargetBase!==-1){c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[x.morphTargetBase]);c.vertexAttribPointer(p.position,3,c.FLOAT,!1,0,0)}else if(p.position>=0){c.bindBuffer(c.ARRAY_BUFFER,
m.__webglVertexBuffer);c.vertexAttribPointer(p.position,3,c.FLOAT,!1,0,0)}if(x.morphTargetForcedOrder.length){j=0;for(var u=x.morphTargetForcedOrder,A=x.morphTargetInfluences;j<k.numSupportedMorphTargets&&j<u.length;){c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[u[j]]);c.vertexAttribPointer(p["morphTarget"+j],3,c.FLOAT,!1,0,0);x.__webglMorphTargetInfluences[j]=A[u[j]];j++}}else{u=[];var t=-1,w=0;A=x.morphTargetInfluences;var z,D=A.length;j=0;for(x.morphTargetBase!==-1&&(u[x.morphTargetBase]=
!0);j<k.numSupportedMorphTargets;){for(z=0;z<D;z++)if(!u[z]&&A[z]>t){w=z;t=A[w]}c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[w]);c.vertexAttribPointer(p["morphTarget"+j],3,c.FLOAT,!1,0,0);x.__webglMorphTargetInfluences[j]=t;u[w]=1;t=-1;j++}}k.program.uniforms.morphTargetInfluences!==null&&c.uniform1fv(k.program.uniforms.morphTargetInfluences,x.__webglMorphTargetInfluences)}if(k.attributes)for(y in k.attributes)if(f[y]>=0){p=k.attributes[y];c.bindBuffer(c.ARRAY_BUFFER,p.buffer);c.vertexAttribPointer(f[y],
p.size,c.FLOAT,!1,0,0)}if(f.color>=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglColorBuffer);c.vertexAttribPointer(f.color,3,c.FLOAT,!1,0,0)}if(f.normal>=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglNormalBuffer);c.vertexAttribPointer(f.normal,3,c.FLOAT,!1,0,0)}if(f.tangent>=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglTangentBuffer);c.vertexAttribPointer(f.tangent,4,c.FLOAT,!1,0,0)}if(f.uv>=0)if(m.__webglUVBuffer){c.bindBuffer(c.ARRAY_BUFFER,m.__webglUVBuffer);c.vertexAttribPointer(f.uv,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(f.uv)}else c.disableVertexAttribArray(f.uv);
if(f.uv2>=0)if(m.__webglUV2Buffer){c.bindBuffer(c.ARRAY_BUFFER,m.__webglUV2Buffer);c.vertexAttribPointer(f.uv2,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(f.uv2)}else c.disableVertexAttribArray(f.uv2);if(k.skinning&&f.skinVertexA>=0&&f.skinVertexB>=0&&f.skinIndex>=0&&f.skinWeight>=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinVertexABuffer);c.vertexAttribPointer(f.skinVertexA,4,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinVertexBBuffer);c.vertexAttribPointer(f.skinVertexB,4,c.FLOAT,!1,0,
0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinIndicesBuffer);c.vertexAttribPointer(f.skinIndex,4,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinWeightsBuffer);c.vertexAttribPointer(f.skinWeight,4,c.FLOAT,!1,0,0)}if(x instanceof THREE.Mesh){if(k.wireframe){c.lineWidth(k.wireframeLinewidth);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,m.__webglLineBuffer);c.drawElements(c.LINES,m.__webglLineCount,c.UNSIGNED_SHORT,0)}else{c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,m.__webglFaceBuffer);c.drawElements(c.TRIANGLES,
m.__webglFaceCount,c.UNSIGNED_SHORT,0)}R.data.vertices+=m.__webglFaceCount;R.data.faces+=m.__webglFaceCount/3;R.data.drawCalls++}else if(x instanceof THREE.Line){x=x.type==THREE.LineStrip?c.LINE_STRIP:c.LINES;c.lineWidth(k.linewidth);c.drawArrays(x,0,m.__webglLineCount);R.data.drawCalls++}else if(x instanceof THREE.ParticleSystem){c.drawArrays(c.POINTS,0,m.__webglParticleCount);R.data.drawCalls++}else if(x instanceof THREE.Ribbon){c.drawArrays(c.TRIANGLE_STRIP,0,m.__webglVertexCount);R.data.drawCalls++}}}
function h(f,p,j){if(!f.__webglVertexBuffer)f.__webglVertexBuffer=c.createBuffer();if(!f.__webglNormalBuffer)f.__webglNormalBuffer=c.createBuffer();if(f.hasPos){c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,f.positionArray,c.DYNAMIC_DRAW);c.enableVertexAttribArray(p.attributes.position);c.vertexAttribPointer(p.attributes.position,3,c.FLOAT,!1,0,0)}if(f.hasNormal){c.bindBuffer(c.ARRAY_BUFFER,f.__webglNormalBuffer);if(j==THREE.FlatShading){var k,m,x,y,u,A,t,w,z,D,B=
f.count*3;for(D=0;D<B;D+=9){j=f.normalArray;k=j[D];m=j[D+1];x=j[D+2];y=j[D+3];A=j[D+4];w=j[D+5];u=j[D+6];t=j[D+7];z=j[D+8];k=(k+y+u)/3;m=(m+A+t)/3;x=(x+w+z)/3;j[D]=k;j[D+1]=m;j[D+2]=x;j[D+3]=k;j[D+4]=m;j[D+5]=x;j[D+6]=k;j[D+7]=m;j[D+8]=x}}c.bufferData(c.ARRAY_BUFFER,f.normalArray,c.DYNAMIC_DRAW);c.enableVertexAttribArray(p.attributes.normal);c.vertexAttribPointer(p.attributes.normal,3,c.FLOAT,!1,0,0)}c.drawArrays(c.TRIANGLES,0,f.count);f.count=0}function o(f){if(na!=f.doubleSided){f.doubleSided?c.disable(c.CULL_FACE):
c.enable(c.CULL_FACE);na=f.doubleSided}if(oa!=f.flipSided){f.flipSided?c.frontFace(c.CW):c.frontFace(c.CCW);oa=f.flipSided}}function n(f){if(Z!=f){f?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST);Z=f}}function q(f){aa[0].set(f.n41-f.n11,f.n42-f.n12,f.n43-f.n13,f.n44-f.n14);aa[1].set(f.n41+f.n11,f.n42+f.n12,f.n43+f.n13,f.n44+f.n14);aa[2].set(f.n41+f.n21,f.n42+f.n22,f.n43+f.n23,f.n44+f.n24);aa[3].set(f.n41-f.n21,f.n42-f.n22,f.n43-f.n23,f.n44-f.n24);aa[4].set(f.n41-f.n31,f.n42-f.n32,f.n43-f.n33,f.n44-
f.n34);aa[5].set(f.n41+f.n31,f.n42+f.n32,f.n43+f.n33,f.n44+f.n34);var p;for(f=0;f<6;f++){p=aa[f];p.divideScalar(Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z))}}function r(f){for(var p=f.matrixWorld,j=-f.geometry.boundingSphere.radius*Math.max(f.scale.x,Math.max(f.scale.y,f.scale.z)),k=0;k<6;k++){f=aa[k].x*p.n14+aa[k].y*p.n24+aa[k].z*p.n34+aa[k].w;if(f<=j)return!1}return!0}function v(f,p){f.list[f.count]=p;f.count+=1}function E(f){var p,j,k=f.object,m=f.opaque,x=f.transparent;x.count=0;f=m.count=0;for(p=k.materials.length;f<
p;f++){j=k.materials[f];j.transparent?v(x,j):v(m,j)}}function F(f){var p,j,k,m,x=f.object,y=f.buffer,u=f.opaque,A=f.transparent;A.count=0;f=u.count=0;for(k=x.materials.length;f<k;f++){p=x.materials[f];if(p instanceof THREE.MeshFaceMaterial){p=0;for(j=y.materials.length;p<j;p++)(m=y.materials[p])&&(m.transparent?v(A,m):v(u,m))}else(m=p)&&(m.transparent?v(A,m):v(u,m))}}function H(f,p){return p.z-f.z}function I(f){c.enable(c.POLYGON_OFFSET_FILL);c.polygonOffset(0.1,1);c.enable(c.STENCIL_TEST);c.enable(c.DEPTH_TEST);
c.depthMask(!1);c.colorMask(!1,!1,!1,!1);c.stencilFunc(c.ALWAYS,1,255);c.stencilOpSeparate(c.BACK,c.KEEP,c.INCR,c.KEEP);c.stencilOpSeparate(c.FRONT,c.KEEP,c.DECR,c.KEEP);var p,j=f.lights.length,k,m=f.lights,x=[],y,u,A,t,w,z=f.__webglShadowVolumes.length;for(p=0;p<j;p++){k=f.lights[p];if(k instanceof THREE.DirectionalLight&&k.castShadow){x[0]=-k.position.x;x[1]=-k.position.y;x[2]=-k.position.z;for(w=0;w<z;w++){k=f.__webglShadowVolumes[w].object;y=f.__webglShadowVolumes[w].buffer;u=k.materials[0];u.program||
R.initMaterial(u,m,undefined,k);u=u.program;A=u.uniforms;t=u.attributes;if(sa!==u){c.useProgram(u);sa=u;c.uniformMatrix4fv(A.projectionMatrix,!1,Ta);c.uniformMatrix4fv(A.viewMatrix,!1,Xa);c.uniform3fv(A.directionalLightDirection,x)}k.matrixWorld.flattenToArray(k._objectMatrixArray);c.uniformMatrix4fv(A.objectMatrix,!1,k._objectMatrixArray);c.bindBuffer(c.ARRAY_BUFFER,y.__webglVertexBuffer);c.vertexAttribPointer(t.position,3,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,y.__webglNormalBuffer);c.vertexAttribPointer(t.normal,
3,c.FLOAT,!1,0,0);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,y.__webglFaceBuffer);c.cullFace(c.FRONT);c.drawElements(c.TRIANGLES,y.__webglFaceCount,c.UNSIGNED_SHORT,0);c.cullFace(c.BACK);c.drawElements(c.TRIANGLES,y.__webglFaceCount,c.UNSIGNED_SHORT,0)}}}c.disable(c.POLYGON_OFFSET_FILL);c.colorMask(!0,!0,!0,!0);c.stencilFunc(c.NOTEQUAL,0,255);c.stencilOp(c.KEEP,c.KEEP,c.KEEP);c.disable(c.DEPTH_TEST);ha="";sa=S.program;c.useProgram(S.program);c.uniformMatrix4fv(S.projectionLocation,!1,Ta);c.uniform1f(S.darknessLocation,
S.darkness);c.bindBuffer(c.ARRAY_BUFFER,S.vertexBuffer);c.vertexAttribPointer(S.vertexLocation,3,c.FLOAT,!1,0,0);c.enableVertexAttribArray(S.vertexLocation);c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA);c.blendEquation(c.FUNC_ADD);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,S.elementBuffer);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);c.disable(c.STENCIL_TEST);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function M(f,p){var j,k,m;j=_sprite.attributes;var x=_sprite.uniforms,y=Aa/za,u,A=[],t=za*0.5,w=Aa*0.5,z=!0;c.useProgram(_sprite.program);
sa=_sprite.program;ha="";if(!ob){c.enableVertexAttribArray(_sprite.attributes.position);c.enableVertexAttribArray(_sprite.attributes.uv);ob=!0}c.disable(c.CULL_FACE);c.enable(c.BLEND);c.depthMask(!0);c.bindBuffer(c.ARRAY_BUFFER,_sprite.vertexBuffer);c.vertexAttribPointer(j.position,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(j.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,_sprite.elementBuffer);c.uniformMatrix4fv(x.projectionMatrix,!1,Ta);c.activeTexture(c.TEXTURE0);c.uniform1i(x.map,0);
j=0;for(k=f.__webglSprites.length;j<k;j++){m=f.__webglSprites[j];if(m.useScreenCoordinates)m.z=-m.position.z;else{m._modelViewMatrix.multiplyToArray(p.matrixWorldInverse,m.matrixWorld,m._modelViewMatrixArray);m.z=-m._modelViewMatrix.n34}}f.__webglSprites.sort(H);j=0;for(k=f.__webglSprites.length;j<k;j++){m=f.__webglSprites[j];if(m.material===undefined&&m.map&&m.map.image&&m.map.image.width){if(m.useScreenCoordinates){c.uniform1i(x.useScreenCoordinates,1);c.uniform3f(x.screenPosition,(m.position.x-
t)/t,(w-m.position.y)/w,Math.max(0,Math.min(1,m.position.z)))}else{c.uniform1i(x.useScreenCoordinates,0);c.uniform1i(x.affectedByDistance,m.affectedByDistance?1:0);c.uniformMatrix4fv(x.modelViewMatrix,!1,m._modelViewMatrixArray)}u=m.map.image.width/(m.affectedByDistance?1:Aa);A[0]=u*y*m.scale.x;A[1]=u*m.scale.y;c.uniform2f(x.uvScale,m.uvScale.x,m.uvScale.y);c.uniform2f(x.uvOffset,m.uvOffset.x,m.uvOffset.y);c.uniform2f(x.alignment,m.alignment.x,m.alignment.y);c.uniform1f(x.opacity,m.opacity);c.uniform1f(x.rotation,
m.rotation);c.uniform2fv(x.scale,A);if(m.mergeWith3D&&!z){c.enable(c.DEPTH_TEST);z=!0}else if(!m.mergeWith3D&&z){c.disable(c.DEPTH_TEST);z=!1}pa(m.blending);K(m.map,0);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function N(f,p){var j,k,m=f.__webglLensFlares.length,x,y,u,A=new THREE.Vector3,t=Aa/za,w=za*0.5,z=Aa*0.5,D=16/Aa,B=[D*t,D],O=[1,1,0],W=[1,1],P=J.uniforms;j=J.attributes;c.useProgram(J.program);sa=J.program;ha="";if(!pb){c.enableVertexAttribArray(J.attributes.vertex);
c.enableVertexAttribArray(J.attributes.uv);pb=!0}c.uniform1i(P.occlusionMap,0);c.uniform1i(P.map,1);c.bindBuffer(c.ARRAY_BUFFER,J.vertexBuffer);c.vertexAttribPointer(j.vertex,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(j.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,J.elementBuffer);c.disable(c.CULL_FACE);c.depthMask(!1);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.activeTexture(c.TEXTURE1);for(k=0;k<m;k++){j=f.__webglLensFlares[k].object;A.set(j.matrixWorld.n14,
j.matrixWorld.n24,j.matrixWorld.n34);p.matrixWorldInverse.multiplyVector3(A);p.projectionMatrix.multiplyVector3(A);O[0]=A.x;O[1]=A.y;O[2]=A.z;W[0]=O[0]*w+w;W[1]=O[1]*z+z;if(J.hasVertexTexture||W[0]>0&&W[0]<za&&W[1]>0&&W[1]<Aa){c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGB,W[0]-8,W[1]-8,16,16,0);c.uniform1i(P.renderType,0);c.uniform2fv(P.scale,B);c.uniform3fv(P.screenPosition,O);c.disable(c.BLEND);c.enable(c.DEPTH_TEST);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,
0);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGBA,W[0]-8,W[1]-8,16,16,0);c.uniform1i(P.renderType,1);c.disable(c.DEPTH_TEST);c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);j.positionScreen.x=O[0];j.positionScreen.y=O[1];j.positionScreen.z=O[2];j.customUpdateCallback?j.customUpdateCallback(j):j.updateLensFlares();c.uniform1i(P.renderType,2);c.enable(c.BLEND);x=0;for(y=j.lensFlares.length;x<y;x++){u=j.lensFlares[x];if(u.opacity>
0.0010&&u.scale>0.0010){O[0]=u.x;O[1]=u.y;O[2]=u.z;D=u.size*u.scale/Aa;B[0]=D*t;B[1]=D;c.uniform3fv(P.screenPosition,O);c.uniform2fv(P.scale,B);c.uniform1f(P.rotation,u.rotation);c.uniform1f(P.opacity,u.opacity);pa(u.blending);K(u.texture,1);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}}}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function V(f,p){f._modelViewMatrix.multiplyToArray(p.matrixWorldInverse,f.matrixWorld,f._modelViewMatrixArray);THREE.Matrix4.makeInvert3x3(f._modelViewMatrix).transposeIntoArray(f._normalMatrixArray)}
function L(f){var p,j,k,m,x;if(f instanceof THREE.Mesh){j=f.geometry;for(p in j.geometryGroups){k=j.geometryGroups[p];x=!1;for(m in k.__webglCustomAttributes)if(k.__webglCustomAttributes[m].needsUpdate){x=!0;break}if(j.__dirtyVertices||j.__dirtyMorphTargets||j.__dirtyElements||j.__dirtyUvs||j.__dirtyNormals||j.__dirtyColors||j.__dirtyTangents||x){x=c.DYNAMIC_DRAW;var y=void 0,u=void 0,A=void 0,t=void 0;A=void 0;var w=void 0,z=void 0,D=void 0,B=void 0,O=void 0,W=void 0,P=void 0,X=void 0,Ga=void 0,
T=void 0,Q=void 0,U=void 0,ta=void 0;z=void 0;D=void 0;t=void 0;B=void 0;t=void 0;var s=void 0,G=void 0;z=void 0;s=void 0;G=void 0;var i=void 0,Ka=void 0;s=void 0;G=void 0;i=void 0;Ka=void 0;s=void 0;G=void 0;i=void 0;Ka=void 0;s=void 0;G=void 0;i=void 0;t=void 0;B=void 0;w=void 0;A=void 0;A=void 0;s=void 0;G=void 0;i=void 0;var Va=void 0,ua=0,Ba=0,Za=0,$a=0,Ja=0,La=0,ea=0,Ma=0,wa=0,C=0,Ca=0;G=s=0;var Da=k.__vertexArray,fb=k.__uvArray,gb=k.__uv2Array,Qa=k.__normalArray,ia=k.__tangentArray,Ea=k.__colorArray,
ja=k.__skinVertexAArray,ka=k.__skinVertexBArray,la=k.__skinIndexArray,ma=k.__skinWeightArray,hb=k.__morphTargetsArrays,Ra=k.__webglCustomAttributes;i=void 0;var Na=k.__faceArray,Oa=k.__lineArray,qb=k.__needsSmoothNormals;W=k.__vertexColorType;O=k.__uvType;P=k.__normalType;var Ha=f.geometry,ib=Ha.__dirtyVertices,jb=Ha.__dirtyElements,eb=Ha.__dirtyUvs,kb=Ha.__dirtyNormals,lb=Ha.__dirtyTangents,mb=Ha.__dirtyColors,nb=Ha.__dirtyMorphTargets,ab=Ha.vertices,rb=k.faces,ub=Ha.faces,sb=Ha.faceVertexUvs[0],
tb=Ha.faceVertexUvs[1],bb=Ha.skinVerticesA,cb=Ha.skinVerticesB,db=Ha.skinIndices,Wa=Ha.skinWeights,Ya=f instanceof THREE.ShadowVolume?Ha.edgeFaces:undefined;morphTargets=Ha.morphTargets;if(Ra)for(Va in Ra){Ra[Va].offset=0;Ra[Va].offsetSrc=0}y=0;for(u=rb.length;y<u;y++){A=rb[y];t=ub[A];sb&&(X=sb[A]);tb&&(Ga=tb[A]);A=t.vertexNormals;w=t.normal;z=t.vertexColors;D=t.color;B=t.vertexTangents;if(t instanceof THREE.Face3){if(ib){T=ab[t.a].position;Q=ab[t.b].position;U=ab[t.c].position;Da[Ba]=T.x;Da[Ba+1]=
T.y;Da[Ba+2]=T.z;Da[Ba+3]=Q.x;Da[Ba+4]=Q.y;Da[Ba+5]=Q.z;Da[Ba+6]=U.x;Da[Ba+7]=U.y;Da[Ba+8]=U.z;Ba+=9}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){s=i.offset;G=i.offsetSrc;if(i.size===1){if(i.boundTo===undefined||i.boundTo==="vertices"){i.array[s+0]=i.value[t.a];i.array[s+1]=i.value[t.b];i.array[s+2]=i.value[t.c]}else if(i.boundTo==="faces"){i.array[s+0]=i.value[G];i.array[s+1]=i.value[G];i.array[s+2]=i.value[G];i.offsetSrc++}else if(i.boundTo==="faceVertices"){i.array[s+0]=i.value[G+0];i.array[s+
1]=i.value[G+1];i.array[s+2]=i.value[G+2];i.offsetSrc+=3}i.offset+=3}else{if(i.boundTo===undefined||i.boundTo==="vertices"){T=i.value[t.a];Q=i.value[t.b];U=i.value[t.c]}else if(i.boundTo==="faces"){T=i.value[G];Q=i.value[G];U=i.value[G];i.offsetSrc++}else if(i.boundTo==="faceVertices"){T=i.value[G+0];Q=i.value[G+1];U=i.value[G+2];i.offsetSrc+=3}if(i.size===2){i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=Q.x;i.array[s+3]=Q.y;i.array[s+4]=U.x;i.array[s+5]=U.y;i.offset+=6}else if(i.size===3){if(i.type===
"c"){i.array[s+0]=T.r;i.array[s+1]=T.g;i.array[s+2]=T.b;i.array[s+3]=Q.r;i.array[s+4]=Q.g;i.array[s+5]=Q.b;i.array[s+6]=U.r;i.array[s+7]=U.g;i.array[s+8]=U.b}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=Q.x;i.array[s+4]=Q.y;i.array[s+5]=Q.z;i.array[s+6]=U.x;i.array[s+7]=U.y;i.array[s+8]=U.z}i.offset+=9}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=T.w;i.array[s+4]=Q.x;i.array[s+5]=Q.y;i.array[s+6]=Q.z;i.array[s+7]=Q.w;i.array[s+8]=U.x;i.array[s+9]=U.y;
i.array[s+10]=U.z;i.array[s+11]=U.w;i.offset+=12}}}}if(nb){s=0;for(G=morphTargets.length;s<G;s++){T=morphTargets[s].vertices[t.a].position;Q=morphTargets[s].vertices[t.b].position;U=morphTargets[s].vertices[t.c].position;i=hb[s];i[Ca+0]=T.x;i[Ca+1]=T.y;i[Ca+2]=T.z;i[Ca+3]=Q.x;i[Ca+4]=Q.y;i[Ca+5]=Q.z;i[Ca+6]=U.x;i[Ca+7]=U.y;i[Ca+8]=U.z}Ca+=9}if(Wa.length){s=Wa[t.a];G=Wa[t.b];i=Wa[t.c];ma[C]=s.x;ma[C+1]=s.y;ma[C+2]=s.z;ma[C+3]=s.w;ma[C+4]=G.x;ma[C+5]=G.y;ma[C+6]=G.z;ma[C+7]=G.w;ma[C+8]=i.x;ma[C+9]=
i.y;ma[C+10]=i.z;ma[C+11]=i.w;s=db[t.a];G=db[t.b];i=db[t.c];la[C]=s.x;la[C+1]=s.y;la[C+2]=s.z;la[C+3]=s.w;la[C+4]=G.x;la[C+5]=G.y;la[C+6]=G.z;la[C+7]=G.w;la[C+8]=i.x;la[C+9]=i.y;la[C+10]=i.z;la[C+11]=i.w;s=bb[t.a];G=bb[t.b];i=bb[t.c];ja[C]=s.x;ja[C+1]=s.y;ja[C+2]=s.z;ja[C+3]=1;ja[C+4]=G.x;ja[C+5]=G.y;ja[C+6]=G.z;ja[C+7]=1;ja[C+8]=i.x;ja[C+9]=i.y;ja[C+10]=i.z;ja[C+11]=1;s=cb[t.a];G=cb[t.b];i=cb[t.c];ka[C]=s.x;ka[C+1]=s.y;ka[C+2]=s.z;ka[C+3]=1;ka[C+4]=G.x;ka[C+5]=G.y;ka[C+6]=G.z;ka[C+7]=1;ka[C+8]=i.x;
ka[C+9]=i.y;ka[C+10]=i.z;ka[C+11]=1;C+=12}if(mb&&W){if(z.length==3&&W==THREE.VertexColors){t=z[0];s=z[1];G=z[2]}else G=s=t=D;Ea[wa]=t.r;Ea[wa+1]=t.g;Ea[wa+2]=t.b;Ea[wa+3]=s.r;Ea[wa+4]=s.g;Ea[wa+5]=s.b;Ea[wa+6]=G.r;Ea[wa+7]=G.g;Ea[wa+8]=G.b;wa+=9}if(lb&&Ha.hasTangents){z=B[0];D=B[1];t=B[2];ia[ea]=z.x;ia[ea+1]=z.y;ia[ea+2]=z.z;ia[ea+3]=z.w;ia[ea+4]=D.x;ia[ea+5]=D.y;ia[ea+6]=D.z;ia[ea+7]=D.w;ia[ea+8]=t.x;ia[ea+9]=t.y;ia[ea+10]=t.z;ia[ea+11]=t.w;ea+=12}if(kb&&P)if(A.length==3&&qb)for(B=0;B<3;B++){w=A[B];
Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}else for(B=0;B<3;B++){Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}if(eb&&X!==undefined&&O)for(B=0;B<3;B++){A=X[B];fb[Za]=A.u;fb[Za+1]=A.v;Za+=2}if(eb&&Ga!==undefined&&O)for(B=0;B<3;B++){A=Ga[B];gb[$a]=A.u;gb[$a+1]=A.v;$a+=2}if(jb){Na[Ja]=ua;Na[Ja+1]=ua+1;Na[Ja+2]=ua+2;Ja+=3;Oa[Ma]=ua;Oa[Ma+1]=ua+1;Oa[Ma+2]=ua;Oa[Ma+3]=ua+2;Oa[Ma+4]=ua+1;Oa[Ma+5]=ua+2;Ma+=6;ua+=3}}else if(t instanceof THREE.Face4){if(ib){T=ab[t.a].position;Q=ab[t.b].position;U=ab[t.c].position;
ta=ab[t.d].position;Da[Ba]=T.x;Da[Ba+1]=T.y;Da[Ba+2]=T.z;Da[Ba+3]=Q.x;Da[Ba+4]=Q.y;Da[Ba+5]=Q.z;Da[Ba+6]=U.x;Da[Ba+7]=U.y;Da[Ba+8]=U.z;Da[Ba+9]=ta.x;Da[Ba+10]=ta.y;Da[Ba+11]=ta.z;Ba+=12}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){s=i.offset;G=i.offsetSrc;if(i.size===1){if(i.boundTo===undefined||i.boundTo==="vertices"){i.array[s+0]=i.value[t.a];i.array[s+1]=i.value[t.b];i.array[s+2]=i.value[t.c];i.array[s+3]=i.value[t.d]}else if(i.boundTo==="faces"){i.array[s+0]=i.value[G];i.array[s+1]=i.value[G];
i.array[s+2]=i.value[G];i.array[s+3]=i.value[G];i.offsetSrc++}else if(i.boundTo==="faceVertices"){i.array[s+0]=i.value[G+0];i.array[s+1]=i.value[G+1];i.array[s+2]=i.value[G+2];i.array[s+3]=i.value[G+3];i.offsetSrc+=4}i.offset+=4}else{if(i.boundTo===undefined||i.boundTo==="vertices"){T=i.value[t.a];Q=i.value[t.b];U=i.value[t.c];ta=i.value[t.d]}else if(i.boundTo==="faces"){T=i.value[G];Q=i.value[G];U=i.value[G];ta=i.value[G];i.offsetSrc++}else if(i.boundTo==="faceVertices"){T=i.value[G+0];Q=i.value[G+
1];U=i.value[G+2];ta=i.value[G+3];i.offsetSrc+=4}if(i.size===2){i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=Q.x;i.array[s+3]=Q.y;i.array[s+4]=U.x;i.array[s+5]=U.y;i.array[s+6]=ta.x;i.array[s+7]=ta.y;i.offset+=8}else if(i.size===3){if(i.type==="c"){i.array[s+0]=T.r;i.array[s+1]=T.g;i.array[s+2]=T.b;i.array[s+3]=Q.r;i.array[s+4]=Q.g;i.array[s+5]=Q.b;i.array[s+6]=U.r;i.array[s+7]=U.g;i.array[s+8]=U.b;i.array[s+9]=ta.r;i.array[s+10]=ta.g;i.array[s+11]=ta.b}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+
2]=T.z;i.array[s+3]=Q.x;i.array[s+4]=Q.y;i.array[s+5]=Q.z;i.array[s+6]=U.x;i.array[s+7]=U.y;i.array[s+8]=U.z;i.array[s+9]=ta.x;i.array[s+10]=ta.y;i.array[s+11]=ta.z}i.offset+=12}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=T.w;i.array[s+4]=Q.x;i.array[s+5]=Q.y;i.array[s+6]=Q.z;i.array[s+7]=Q.w;i.array[s+8]=U.x;i.array[s+9]=U.y;i.array[s+10]=U.z;i.array[s+11]=U.w;i.array[s+12]=ta.x;i.array[s+13]=ta.y;i.array[s+14]=ta.z;i.array[s+15]=ta.w;i.offset+=16}}}}if(nb){s=0;for(G=morphTargets.length;s<
G;s++){T=morphTargets[s].vertices[t.a].position;Q=morphTargets[s].vertices[t.b].position;U=morphTargets[s].vertices[t.c].position;ta=morphTargets[s].vertices[t.d].position;i=hb[s];i[Ca+0]=T.x;i[Ca+1]=T.y;i[Ca+2]=T.z;i[Ca+3]=Q.x;i[Ca+4]=Q.y;i[Ca+5]=Q.z;i[Ca+6]=U.x;i[Ca+7]=U.y;i[Ca+8]=U.z;i[Ca+9]=ta.x;i[Ca+10]=ta.y;i[Ca+11]=ta.z}Ca+=12}if(Wa.length){s=Wa[t.a];G=Wa[t.b];i=Wa[t.c];Ka=Wa[t.d];ma[C]=s.x;ma[C+1]=s.y;ma[C+2]=s.z;ma[C+3]=s.w;ma[C+4]=G.x;ma[C+5]=G.y;ma[C+6]=G.z;ma[C+7]=G.w;ma[C+8]=i.x;ma[C+
9]=i.y;ma[C+10]=i.z;ma[C+11]=i.w;ma[C+12]=Ka.x;ma[C+13]=Ka.y;ma[C+14]=Ka.z;ma[C+15]=Ka.w;s=db[t.a];G=db[t.b];i=db[t.c];Ka=db[t.d];la[C]=s.x;la[C+1]=s.y;la[C+2]=s.z;la[C+3]=s.w;la[C+4]=G.x;la[C+5]=G.y;la[C+6]=G.z;la[C+7]=G.w;la[C+8]=i.x;la[C+9]=i.y;la[C+10]=i.z;la[C+11]=i.w;la[C+12]=Ka.x;la[C+13]=Ka.y;la[C+14]=Ka.z;la[C+15]=Ka.w;s=bb[t.a];G=bb[t.b];i=bb[t.c];Ka=bb[t.d];ja[C]=s.x;ja[C+1]=s.y;ja[C+2]=s.z;ja[C+3]=1;ja[C+4]=G.x;ja[C+5]=G.y;ja[C+6]=G.z;ja[C+7]=1;ja[C+8]=i.x;ja[C+9]=i.y;ja[C+10]=i.z;ja[C+
11]=1;ja[C+12]=Ka.x;ja[C+13]=Ka.y;ja[C+14]=Ka.z;ja[C+15]=1;s=cb[t.a];G=cb[t.b];i=cb[t.c];t=cb[t.d];ka[C]=s.x;ka[C+1]=s.y;ka[C+2]=s.z;ka[C+3]=1;ka[C+4]=G.x;ka[C+5]=G.y;ka[C+6]=G.z;ka[C+7]=1;ka[C+8]=i.x;ka[C+9]=i.y;ka[C+10]=i.z;ka[C+11]=1;ka[C+12]=t.x;ka[C+13]=t.y;ka[C+14]=t.z;ka[C+15]=1;C+=16}if(mb&&W){if(z.length==4&&W==THREE.VertexColors){t=z[0];s=z[1];G=z[2];z=z[3]}else z=G=s=t=D;Ea[wa]=t.r;Ea[wa+1]=t.g;Ea[wa+2]=t.b;Ea[wa+3]=s.r;Ea[wa+4]=s.g;Ea[wa+5]=s.b;Ea[wa+6]=G.r;Ea[wa+7]=G.g;Ea[wa+8]=G.b;Ea[wa+
9]=z.r;Ea[wa+10]=z.g;Ea[wa+11]=z.b;wa+=12}if(lb&&Ha.hasTangents){z=B[0];D=B[1];t=B[2];B=B[3];ia[ea]=z.x;ia[ea+1]=z.y;ia[ea+2]=z.z;ia[ea+3]=z.w;ia[ea+4]=D.x;ia[ea+5]=D.y;ia[ea+6]=D.z;ia[ea+7]=D.w;ia[ea+8]=t.x;ia[ea+9]=t.y;ia[ea+10]=t.z;ia[ea+11]=t.w;ia[ea+12]=B.x;ia[ea+13]=B.y;ia[ea+14]=B.z;ia[ea+15]=B.w;ea+=16}if(kb&&P)if(A.length==4&&qb)for(B=0;B<4;B++){w=A[B];Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}else for(B=0;B<4;B++){Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}if(eb&&X!==undefined&&O)for(B=
0;B<4;B++){A=X[B];fb[Za]=A.u;fb[Za+1]=A.v;Za+=2}if(eb&&Ga!==undefined&&O)for(B=0;B<4;B++){A=Ga[B];gb[$a]=A.u;gb[$a+1]=A.v;$a+=2}if(jb){Na[Ja]=ua;Na[Ja+1]=ua+1;Na[Ja+2]=ua+3;Na[Ja+3]=ua+1;Na[Ja+4]=ua+2;Na[Ja+5]=ua+3;Ja+=6;Oa[Ma]=ua;Oa[Ma+1]=ua+1;Oa[Ma+2]=ua;Oa[Ma+3]=ua+3;Oa[Ma+4]=ua+1;Oa[Ma+5]=ua+2;Oa[Ma+6]=ua+2;Oa[Ma+7]=ua+3;Ma+=8;ua+=4}}}if(Ya){y=0;for(u=Ya.length;y<u;y++){Na[Ja]=Ya[y].a;Na[Ja+1]=Ya[y].b;Na[Ja+2]=Ya[y].c;Na[Ja+3]=Ya[y].a;Na[Ja+4]=Ya[y].c;Na[Ja+5]=Ya[y].d;Ja+=6}}if(ib){c.bindBuffer(c.ARRAY_BUFFER,
k.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,Da,x)}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){c.bindBuffer(c.ARRAY_BUFFER,i.buffer);c.bufferData(c.ARRAY_BUFFER,i.array,x);i.needsUpdate=!1}}if(nb){s=0;for(G=morphTargets.length;s<G;s++){c.bindBuffer(c.ARRAY_BUFFER,k.__webglMorphTargetsBuffers[s]);c.bufferData(c.ARRAY_BUFFER,hb[s],x)}}if(mb&&wa>0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,Ea,x)}if(kb){c.bindBuffer(c.ARRAY_BUFFER,k.__webglNormalBuffer);c.bufferData(c.ARRAY_BUFFER,
Qa,x)}if(lb&&Ha.hasTangents){c.bindBuffer(c.ARRAY_BUFFER,k.__webglTangentBuffer);c.bufferData(c.ARRAY_BUFFER,ia,x)}if(eb&&Za>0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglUVBuffer);c.bufferData(c.ARRAY_BUFFER,fb,x)}if(eb&&$a>0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglUV2Buffer);c.bufferData(c.ARRAY_BUFFER,gb,x)}if(jb){c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k.__webglFaceBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,Na,x);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k.__webglLineBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,
Oa,x)}if(C>0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinVertexABuffer);c.bufferData(c.ARRAY_BUFFER,ja,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinVertexBBuffer);c.bufferData(c.ARRAY_BUFFER,ka,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinIndicesBuffer);c.bufferData(c.ARRAY_BUFFER,la,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinWeightsBuffer);c.bufferData(c.ARRAY_BUFFER,ma,x)}}}j.__dirtyVertices=!1;j.__dirtyMorphTargets=!1;j.__dirtyElements=!1;j.__dirtyUvs=!1;j.__dirtyNormals=!1;j.__dirtyTangents=!1;j.__dirtyColors=
!1}else if(f instanceof THREE.Ribbon){j=f.geometry;if(j.__dirtyVertices||j.__dirtyColors){f=j;p=c.DYNAMIC_DRAW;W=f.vertices;k=f.colors;P=W.length;x=k.length;X=f.__vertexArray;y=f.__colorArray;Ga=f.__dirtyColors;if(f.__dirtyVertices){for(u=0;u<P;u++){O=W[u].position;m=u*3;X[m]=O.x;X[m+1]=O.y;X[m+2]=O.z}c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,X,p)}if(Ga){for(u=0;u<x;u++){color=k[u];m=u*3;y[m]=color.r;y[m+1]=color.g;y[m+2]=color.b}c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);
c.bufferData(c.ARRAY_BUFFER,y,p)}}j.__dirtyVertices=!1;j.__dirtyColors=!1}else if(f instanceof THREE.Line){j=f.geometry;if(j.__dirtyVertices||j.__dirtyColors){f=j;p=c.DYNAMIC_DRAW;W=f.vertices;k=f.colors;P=W.length;x=k.length;X=f.__vertexArray;y=f.__colorArray;Ga=f.__dirtyColors;if(f.__dirtyVertices){for(u=0;u<P;u++){O=W[u].position;m=u*3;X[m]=O.x;X[m+1]=O.y;X[m+2]=O.z}c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,X,p)}if(Ga){for(u=0;u<x;u++){color=k[u];m=u*3;y[m]=
color.r;y[m+1]=color.g;y[m+2]=color.b}c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,y,p)}}j.__dirtyVertices=!1;j.__dirtyColors=!1}else if(f instanceof THREE.ParticleSystem){j=f.geometry;(j.__dirtyVertices||j.__dirtyColors||f.sortParticles)&&d(j,c.DYNAMIC_DRAW,f);j.__dirtyVertices=!1;j.__dirtyColors=!1}}function ra(f){function p(D){var B=[];j=0;for(k=D.length;j<k;j++)D[j]==undefined?B.push("undefined"):B.push(D[j].id);return B.join("_")}var j,k,m,x,y,u,A,t,w={},z=f.morphTargets!==
undefined?f.morphTargets.length:0;f.geometryGroups={};m=0;for(x=f.faces.length;m<x;m++){y=f.faces[m];u=y.materials;A=p(u);w[A]==undefined&&(w[A]={hash:A,counter:0});t=w[A].hash+"_"+w[A].counter;f.geometryGroups[t]==undefined&&(f.geometryGroups[t]={faces:[],materials:u,vertices:0,numMorphTargets:z});y=y instanceof THREE.Face3?3:4;if(f.geometryGroups[t].vertices+y>65535){w[A].counter+=1;t=w[A].hash+"_"+w[A].counter;f.geometryGroups[t]==undefined&&(f.geometryGroups[t]={faces:[],materials:u,vertices:0,
numMorphTargets:z})}f.geometryGroups[t].faces.push(m);f.geometryGroups[t].vertices+=y}}function da(f,p,j){f.push({buffer:p,object:j,opaque:{list:[],count:0},transparent:{list:[],count:0}})}function pa(f){if(f!=ha){switch(f){case THREE.AdditiveBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.SRC_ALPHA,c.ONE);break;case THREE.SubtractiveBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.ZERO,c.ONE_MINUS_SRC_COLOR);break;case THREE.MultiplyBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.ZERO,c.SRC_COLOR);
break;default:c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD);c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA)}ha=f}}function $(f,p,j){if((j.width&j.width-1)==0&&(j.height&j.height-1)==0){c.texParameteri(f,c.TEXTURE_WRAP_S,fa(p.wrapS));c.texParameteri(f,c.TEXTURE_WRAP_T,fa(p.wrapT));c.texParameteri(f,c.TEXTURE_MAG_FILTER,fa(p.magFilter));c.texParameteri(f,c.TEXTURE_MIN_FILTER,fa(p.minFilter));c.generateMipmap(f)}else{c.texParameteri(f,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);
c.texParameteri(f,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(f,c.TEXTURE_MAG_FILTER,Fa(p.magFilter));c.texParameteri(f,c.TEXTURE_MIN_FILTER,Fa(p.minFilter))}}function K(f,p){if(f.needsUpdate){if(f.__webglInit){c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texSubImage2D(c.TEXTURE_2D,0,0,0,c.RGBA,c.UNSIGNED_BYTE,f.image)}else{f.__webglTexture=c.createTexture();c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,f.image);f.__webglInit=!0}$(c.TEXTURE_2D,
f,f.image);c.bindTexture(c.TEXTURE_2D,null);f.needsUpdate=!1}c.activeTexture(c.TEXTURE0+p);c.bindTexture(c.TEXTURE_2D,f.__webglTexture)}function Ia(f){if(f&&!f.__webglFramebuffer){if(f.depthBuffer===undefined)f.depthBuffer=!0;if(f.stencilBuffer===undefined)f.stencilBuffer=!0;f.__webglFramebuffer=c.createFramebuffer();f.__webglRenderbuffer=c.createRenderbuffer();f.__webglTexture=c.createTexture();c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,fa(f.wrapS));
c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,fa(f.wrapT));c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,fa(f.magFilter));c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,fa(f.minFilter));c.texImage2D(c.TEXTURE_2D,0,fa(f.format),f.width,f.height,0,fa(f.format),fa(f.type),null);c.bindRenderbuffer(c.RENDERBUFFER,f.__webglRenderbuffer);c.bindFramebuffer(c.FRAMEBUFFER,f.__webglFramebuffer);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,f.__webglTexture,0);if(f.depthBuffer&&
!f.stencilBuffer){c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,f.width,f.height);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,f.__webglRenderbuffer)}else if(f.depthBuffer&&f.stencilBuffer){c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_STENCIL,f.width,f.height);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.RENDERBUFFER,f.__webglRenderbuffer)}else c.renderbufferStorage(c.RENDERBUFFER,c.RGBA4,f.width,f.height);c.bindTexture(c.TEXTURE_2D,
null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null)}var p,j;if(f){p=f.__webglFramebuffer;j=f.width;f=f.height}else{p=null;j=za;f=Aa}if(p!=ya){c.bindFramebuffer(c.FRAMEBUFFER,p);c.viewport(va,qa,j,f);ya=p}}function ca(f,p){var j;if(f=="fragment")j=c.createShader(c.FRAGMENT_SHADER);else f=="vertex"&&(j=c.createShader(c.VERTEX_SHADER));c.shaderSource(j,p);c.compileShader(j);if(!c.getShaderParameter(j,c.COMPILE_STATUS)){console.error(c.getShaderInfoLog(j));console.error(p);
return null}return j}function Fa(f){switch(f){case THREE.NearestFilter:case THREE.NearestMipMapNearestFilter:case THREE.NearestMipMapLinearFilter:return c.NEAREST;default:return c.LINEAR}}function fa(f){switch(f){case THREE.RepeatWrapping:return c.REPEAT;case THREE.ClampToEdgeWrapping:return c.CLAMP_TO_EDGE;case THREE.MirroredRepeatWrapping:return c.MIRRORED_REPEAT;case THREE.NearestFilter:return c.NEAREST;case THREE.NearestMipMapNearestFilter:return c.NEAREST_MIPMAP_NEAREST;case THREE.NearestMipMapLinearFilter:return c.NEAREST_MIPMAP_LINEAR;
case THREE.LinearFilter:return c.LINEAR;case THREE.LinearMipMapNearestFilter:return c.LINEAR_MIPMAP_NEAREST;case THREE.LinearMipMapLinearFilter:return c.LINEAR_MIPMAP_LINEAR;case THREE.ByteType:return c.BYTE;case THREE.UnsignedByteType:return c.UNSIGNED_BYTE;case THREE.ShortType:return c.SHORT;case THREE.UnsignedShortType:return c.UNSIGNED_SHORT;case THREE.IntType:return c.INT;case THREE.UnsignedShortType:return c.UNSIGNED_INT;case THREE.FloatType:return c.FLOAT;case THREE.AlphaFormat:return c.ALPHA;
case THREE.RGBFormat:return c.RGB;case THREE.RGBAFormat:return c.RGBA;case THREE.LuminanceFormat:return c.LUMINANCE;case THREE.LuminanceAlphaFormat:return c.LUMINANCE_ALPHA}return 0}var R=this,c,ga=document.createElement("canvas"),xa=[],sa=null,ya=null,Y=!0,na=null,oa=null,ha=null,Z=null,va=0,qa=0,za=0,Aa=0,aa=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],Pa=new THREE.Matrix4,Ta=new Float32Array(16),Xa=new Float32Array(16),Ua=new THREE.Vector4,
Sa={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]}};b=b||{};stencil=b.stencil!==undefined?b.stencil:!0;antialias=b.antialias!==undefined?b.antialias:!1;clearColor=b.clearColor!==undefined?new THREE.Color(b.clearColor):new THREE.Color(0);clearAlpha=b.clearAlpha!==undefined?b.clearAlpha:0;this.data={vertices:0,faces:0,drawCalls:0};this.maxMorphTargets=8;this.domElement=ga;this.autoClear=!0;this.sortObjects=!0;(function(f,p,j,k){try{if(!(c=
ga.getContext("experimental-webgl",{antialias:f,stencil:k})))throw"Error creating WebGL context.";}catch(m){console.error(m)}console.log(navigator.userAgent+" | "+c.getParameter(c.VERSION)+" | "+c.getParameter(c.VENDOR)+" | "+c.getParameter(c.RENDERER)+" | "+c.getParameter(c.SHADING_LANGUAGE_VERSION));c.clearColor(0,0,0,1);c.clearDepth(1);c.enable(c.DEPTH_TEST);c.depthFunc(c.LEQUAL);c.frontFace(c.CCW);c.cullFace(c.BACK);c.enable(c.CULL_FACE);c.enable(c.BLEND);c.blendEquation(c.FUNC_ADD);c.blendFunc(c.SRC_ALPHA,
c.ONE_MINUS_SRC_ALPHA);c.clearColor(p.r,p.g,p.b,j)})(antialias,clearColor,clearAlpha,stencil);this.context=c;if(stencil){var S={};S.vertices=new Float32Array(12);S.faces=new Uint16Array(6);S.darkness=0.5;S.vertices[0]=-20;S.vertices[1]=-20;S.vertices[2]=-1;S.vertices[3]=20;S.vertices[4]=-20;S.vertices[5]=-1;S.vertices[6]=20;S.vertices[7]=20;S.vertices[8]=-1;S.vertices[9]=-20;S.vertices[10]=20;S.vertices[11]=-1;S.faces[0]=0;S.faces[1]=1;S.faces[2]=2;S.faces[3]=0;S.faces[4]=2;S.faces[5]=3;S.vertexBuffer=
c.createBuffer();S.elementBuffer=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,S.vertexBuffer);c.bufferData(c.ARRAY_BUFFER,S.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,S.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,S.faces,c.STATIC_DRAW);S.program=c.createProgram();c.attachShader(S.program,ca("fragment",THREE.ShaderLib.shadowPost.fragmentShader));c.attachShader(S.program,ca("vertex",THREE.ShaderLib.shadowPost.vertexShader));c.linkProgram(S.program);S.vertexLocation=c.getAttribLocation(S.program,
"position");S.projectionLocation=c.getUniformLocation(S.program,"projectionMatrix");S.darknessLocation=c.getUniformLocation(S.program,"darkness")}var J={};J.vertices=new Float32Array(16);J.faces=new Uint16Array(6);b=0;J.vertices[b++]=-1;J.vertices[b++]=-1;J.vertices[b++]=0;J.vertices[b++]=0;J.vertices[b++]=1;J.vertices[b++]=-1;J.vertices[b++]=1;J.vertices[b++]=0;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=-1;J.vertices[b++]=1;J.vertices[b++]=0;J.vertices[b++]=
1;b=0;J.faces[b++]=0;J.faces[b++]=1;J.faces[b++]=2;J.faces[b++]=0;J.faces[b++]=2;J.faces[b++]=3;J.vertexBuffer=c.createBuffer();J.elementBuffer=c.createBuffer();J.tempTexture=c.createTexture();J.occlusionTexture=c.createTexture();c.bindBuffer(c.ARRAY_BUFFER,J.vertexBuffer);c.bufferData(c.ARRAY_BUFFER,J.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,J.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,J.faces,c.STATIC_DRAW);c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.texImage2D(c.TEXTURE_2D,
0,c.RGB,16,16,0,c.RGB,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,16,16,0,c.RGBA,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,
c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);if(c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<=0){J.hasVertexTexture=!1;J.program=c.createProgram();c.attachShader(J.program,ca("fragment",THREE.ShaderLib.lensFlare.fragmentShader));c.attachShader(J.program,ca("vertex",THREE.ShaderLib.lensFlare.vertexShader))}else{J.hasVertexTexture=!0;J.program=c.createProgram();c.attachShader(J.program,
ca("fragment",THREE.ShaderLib.lensFlareVertexTexture.fragmentShader));c.attachShader(J.program,ca("vertex",THREE.ShaderLib.lensFlareVertexTexture.vertexShader))}c.linkProgram(J.program);J.attributes={};J.uniforms={};J.attributes.vertex=c.getAttribLocation(J.program,"position");J.attributes.uv=c.getAttribLocation(J.program,"UV");J.uniforms.renderType=c.getUniformLocation(J.program,"renderType");J.uniforms.map=c.getUniformLocation(J.program,"map");J.uniforms.occlusionMap=c.getUniformLocation(J.program,
"occlusionMap");J.uniforms.opacity=c.getUniformLocation(J.program,"opacity");J.uniforms.scale=c.getUniformLocation(J.program,"scale");J.uniforms.rotation=c.getUniformLocation(J.program,"rotation");J.uniforms.screenPosition=c.getUniformLocation(J.program,"screenPosition");var pb=!1;_sprite={};_sprite.vertices=new Float32Array(16);_sprite.faces=new Uint16Array(6);b=0;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;_sprite.vertices[b++]=
-1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;b=0;_sprite.faces[b++]=0;_sprite.faces[b++]=1;_sprite.faces[b++]=2;_sprite.faces[b++]=0;_sprite.faces[b++]=2;_sprite.faces[b++]=3;_sprite.vertexBuffer=c.createBuffer();_sprite.elementBuffer=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,_sprite.vertexBuffer);
c.bufferData(c.ARRAY_BUFFER,_sprite.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,_sprite.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,_sprite.faces,c.STATIC_DRAW);_sprite.program=c.createProgram();c.attachShader(_sprite.program,ca("fragment",THREE.ShaderLib.sprite.fragmentShader));c.attachShader(_sprite.program,ca("vertex",THREE.ShaderLib.sprite.vertexShader));c.linkProgram(_sprite.program);_sprite.attributes={};_sprite.uniforms={};_sprite.attributes.position=c.getAttribLocation(_sprite.program,
"position");_sprite.attributes.uv=c.getAttribLocation(_sprite.program,"uv");_sprite.uniforms.uvOffset=c.getUniformLocation(_sprite.program,"uvOffset");_sprite.uniforms.uvScale=c.getUniformLocation(_sprite.program,"uvScale");_sprite.uniforms.rotation=c.getUniformLocation(_sprite.program,"rotation");_sprite.uniforms.scale=c.getUniformLocation(_sprite.program,"scale");_sprite.uniforms.alignment=c.getUniformLocation(_sprite.program,"alignment");_sprite.uniforms.map=c.getUniformLocation(_sprite.program,
"map");_sprite.uniforms.opacity=c.getUniformLocation(_sprite.program,"opacity");_sprite.uniforms.useScreenCoordinates=c.getUniformLocation(_sprite.program,"useScreenCoordinates");_sprite.uniforms.affectedByDistance=c.getUniformLocation(_sprite.program,"affectedByDistance");_sprite.uniforms.screenPosition=c.getUniformLocation(_sprite.program,"screenPosition");_sprite.uniforms.modelViewMatrix=c.getUniformLocation(_sprite.program,"modelViewMatrix");_sprite.uniforms.projectionMatrix=c.getUniformLocation(_sprite.program,
"projectionMatrix");var ob=!1;this.setSize=function(f,p){ga.width=f;ga.height=p;this.setViewport(0,0,ga.width,ga.height)};this.setViewport=function(f,p,j,k){va=f;qa=p;za=j;Aa=k;c.viewport(va,qa,za,Aa)};this.setScissor=function(f,p,j,k){c.scissor(f,p,j,k)};this.enableScissorTest=function(f){f?c.enable(c.SCISSOR_TEST):c.disable(c.SCISSOR_TEST)};this.enableDepthBufferWrite=function(f){Y=f;c.depthMask(f)};this.setClearColorHex=function(f,p){var j=new THREE.Color(f);c.clearColor(j.r,j.g,j.b,p)};this.setClearColor=
function(f,p){c.clearColor(f.r,f.g,f.b,p)};this.clear=function(){c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT|c.STENCIL_BUFFER_BIT)};this.setStencilShadowDarkness=function(f){S.darkness=f};this.getContext=function(){return c};this.initMaterial=function(f,p,j,k){var m,x,y;if(f instanceof THREE.MeshDepthMaterial)y="depth";else if(f instanceof THREE.ShadowVolumeDynamicMaterial)y="shadowVolumeDynamic";else if(f instanceof THREE.MeshNormalMaterial)y="normal";else if(f instanceof THREE.MeshBasicMaterial)y=
"basic";else if(f instanceof THREE.MeshLambertMaterial)y="lambert";else if(f instanceof THREE.MeshPhongMaterial)y="phong";else if(f instanceof THREE.LineBasicMaterial)y="basic";else f instanceof THREE.ParticleBasicMaterial&&(y="particle_basic");if(y){var u=THREE.ShaderLib[y];f.uniforms=THREE.UniformsUtils.clone(u.uniforms);f.vertexShader=u.vertexShader;f.fragmentShader=u.fragmentShader}var A,t,w;A=w=u=0;for(t=p.length;A<t;A++){x=p[A];x instanceof THREE.DirectionalLight&&w++;x instanceof THREE.PointLight&&
u++}if(u+w<=4)p=w;else{p=Math.ceil(4*w/(u+w));u=4-p}x={directional:p,point:u};w=50;if(k!==undefined&&k instanceof THREE.SkinnedMesh)w=k.bones.length;var z;a:{A=f.fragmentShader;t=f.vertexShader;u=f.uniforms;p=f.attributes;j={map:!!f.map,envMap:!!f.envMap,lightMap:!!f.lightMap,vertexColors:f.vertexColors,fog:j,sizeAttenuation:f.sizeAttenuation,skinning:f.skinning,morphTargets:f.morphTargets,maxMorphTargets:this.maxMorphTargets,maxDirLights:x.directional,maxPointLights:x.point,maxBones:w};var D;x=[];
if(y)x.push(y);else{x.push(A);x.push(t)}for(D in j){x.push(D);x.push(j[D])}y=x.join();D=0;for(x=xa.length;D<x;D++)if(xa[D].code==y){z=xa[D].program;break a}D=c.createProgram();prefix_fragment=["#ifdef GL_ES\nprecision highp float;\n#endif","#define MAX_DIR_LIGHTS "+j.maxDirLights,"#define MAX_POINT_LIGHTS "+j.maxPointLights,j.fog?"#define USE_FOG":"",j.fog instanceof THREE.FogExp2?"#define FOG_EXP2":"",j.map?"#define USE_MAP":"",j.envMap?"#define USE_ENVMAP":"",j.lightMap?"#define USE_LIGHTMAP":"",
j.vertexColors?"#define USE_COLOR":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");prefix_vertex=[c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0?"#define VERTEX_TEXTURES":"","#define MAX_DIR_LIGHTS "+j.maxDirLights,"#define MAX_POINT_LIGHTS "+j.maxPointLights,"#define MAX_BONES "+j.maxBones,j.map?"#define USE_MAP":"",j.envMap?"#define USE_ENVMAP":"",j.lightMap?"#define USE_LIGHTMAP":"",j.vertexColors?"#define USE_COLOR":"",j.skinning?"#define USE_SKINNING":"",j.morphTargets?
"#define USE_MORPHTARGETS":"",j.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
c.attachShader(D,ca("fragment",prefix_fragment+A));c.attachShader(D,ca("vertex",prefix_vertex+t));c.linkProgram(D);c.getProgramParameter(D,c.LINK_STATUS)||console.error("Could not initialise shader\nVALIDATE_STATUS: "+c.getProgramParameter(D,c.VALIDATE_STATUS)+", gl error ["+c.getError()+"]");D.uniforms={};D.attributes={};var B;A=["viewMatrix","modelViewMatrix","projectionMatrix","normalMatrix","objectMatrix","cameraPosition","cameraInverseMatrix","boneGlobalMatrices","morphTargetInfluences"];for(B in u)A.push(B);
B=A;u=0;for(A=B.length;u<A;u++){t=B[u];D.uniforms[t]=c.getUniformLocation(D,t)}A=["position","normal","uv","uv2","tangent","color","skinVertexA","skinVertexB","skinIndex","skinWeight"];for(B=0;B<j.maxMorphTargets;B++)A.push("morphTarget"+B);for(z in p)A.push(z);z=A;B=0;for(p=z.length;B<p;B++){j=z[B];D.attributes[j]=c.getAttribLocation(D,j)}xa.push({program:D,code:y});z=D}f.program=z;z=f.program.attributes;c.enableVertexAttribArray(z.position);z.color>=0&&c.enableVertexAttribArray(z.color);z.normal>=
0&&c.enableVertexAttribArray(z.normal);z.tangent>=0&&c.enableVertexAttribArray(z.tangent);if(f.skinning&&z.skinVertexA>=0&&z.skinVertexB>=0&&z.skinIndex>=0&&z.skinWeight>=0){c.enableVertexAttribArray(z.skinVertexA);c.enableVertexAttribArray(z.skinVertexB);c.enableVertexAttribArray(z.skinIndex);c.enableVertexAttribArray(z.skinWeight)}for(m in f.attributes)z[m]>=0&&c.enableVertexAttribArray(z[m]);if(f.morphTargets){f.numSupportedMorphTargets=0;if(z.morphTarget0>=0){c.enableVertexAttribArray(z.morphTarget0);
f.numSupportedMorphTargets++}if(z.morphTarget1>=0){c.enableVertexAttribArray(z.morphTarget1);f.numSupportedMorphTargets++}if(z.morphTarget2>=0){c.enableVertexAttribArray(z.morphTarget2);f.numSupportedMorphTargets++}if(z.morphTarget3>=0){c.enableVertexAttribArray(z.morphTarget3);f.numSupportedMorphTargets++}if(z.morphTarget4>=0){c.enableVertexAttribArray(z.morphTarget4);f.numSupportedMorphTargets++}if(z.morphTarget5>=0){c.enableVertexAttribArray(z.morphTarget5);f.numSupportedMorphTargets++}if(z.morphTarget6>=
0){c.enableVertexAttribArray(z.morphTarget6);f.numSupportedMorphTargets++}if(z.morphTarget7>=0){c.enableVertexAttribArray(z.morphTarget7);f.numSupportedMorphTargets++}k.__webglMorphTargetInfluences=new Float32Array(this.maxMorphTargets);f=0;for(m=this.maxMorphTargets;f<m;f++)k.__webglMorphTargetInfluences[f]=0}};this.render=function(f,p,j,k){var m,x,y,u,A,t,w,z,D=f.lights,B=f.fog;R.data.vertices=0;R.data.faces=0;R.data.drawCalls=0;p.matrixAutoUpdate&&p.update(undefined,!0);f.update(undefined,!1,p);
p.matrixWorldInverse.flattenToArray(Xa);p.projectionMatrix.flattenToArray(Ta);Pa.multiply(p.projectionMatrix,p.matrixWorldInverse);q(Pa);this.initWebGLObjects(f);Ia(j);(this.autoClear||k)&&this.clear();A=f.__webglObjects.length;for(k=0;k<A;k++){m=f.__webglObjects[k];w=m.object;if(w.visible)if(!(w instanceof THREE.Mesh)||r(w)){w.matrixWorld.flattenToArray(w._objectMatrixArray);V(w,p);F(m);m.render=!0;if(this.sortObjects){Ua.copy(w.position);Pa.multiplyVector3(Ua);m.z=Ua.z}}else m.render=!1;else m.render=
!1}this.sortObjects&&f.__webglObjects.sort(H);t=f.__webglObjectsImmediate.length;for(k=0;k<t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){w.matrixAutoUpdate&&w.matrixWorld.flattenToArray(w._objectMatrixArray);V(w,p);E(m)}}pa(THREE.NormalBlending);for(k=0;k<A;k++){m=f.__webglObjects[k];if(m.render){w=m.object;z=m.buffer;y=m.opaque;o(w);for(m=0;m<y.count;m++){u=y.list[m];n(u.depthTest);g(p,D,B,u,z,w)}}}for(k=0;k<t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){y=m.opaque;
o(w);for(m=0;m<y.count;m++){u=y.list[m];n(u.depthTest);x=e(p,D,B,u,w);w.render(function(O){h(O,x,u.shading)})}}}for(k=0;k<A;k++){m=f.__webglObjects[k];if(m.render){w=m.object;z=m.buffer;y=m.transparent;o(w);for(m=0;m<y.count;m++){u=y.list[m];pa(u.blending);n(u.depthTest);g(p,D,B,u,z,w)}}}for(k=0;k<t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){y=m.transparent;o(w);for(m=0;m<y.count;m++){u=y.list[m];pa(u.blending);n(u.depthTest);x=e(p,D,B,u,w);w.render(function(O){h(O,x,u.shading)})}}}f.__webglSprites.length&&
M(f,p);stencil&&f.__webglShadowVolumes.length&&f.lights.length&&I(f);f.__webglLensFlares.length&&N(f,p);if(j&&j.minFilter!==THREE.NearestFilter&&j.minFilter!==THREE.LinearFilter){c.bindTexture(c.TEXTURE_2D,j.__webglTexture);c.generateMipmap(c.TEXTURE_2D);c.bindTexture(c.TEXTURE_2D,null)}};this.initWebGLObjects=function(f){if(!f.__webglObjects){f.__webglObjects=[];f.__webglObjectsImmediate=[];f.__webglShadowVolumes=[];f.__webglLensFlares=[];f.__webglSprites=[]}for(;f.__objectsAdded.length;){var p=
f.__objectsAdded[0],j=f,k=void 0,m=void 0,x=void 0;if(p._modelViewMatrix==undefined){p._modelViewMatrix=new THREE.Matrix4;p._normalMatrixArray=new Float32Array(9);p._modelViewMatrixArray=new Float32Array(16);p._objectMatrixArray=new Float32Array(16);p.matrixWorld.flattenToArray(p._objectMatrixArray)}if(p instanceof THREE.Mesh){m=p.geometry;m.geometryGroups==undefined&&ra(m);for(k in m.geometryGroups){x=m.geometryGroups[k];if(!x.__webglVertexBuffer){var y=x;y.__webglVertexBuffer=c.createBuffer();y.__webglNormalBuffer=
c.createBuffer();y.__webglTangentBuffer=c.createBuffer();y.__webglColorBuffer=c.createBuffer();y.__webglUVBuffer=c.createBuffer();y.__webglUV2Buffer=c.createBuffer();y.__webglSkinVertexABuffer=c.createBuffer();y.__webglSkinVertexBBuffer=c.createBuffer();y.__webglSkinIndicesBuffer=c.createBuffer();y.__webglSkinWeightsBuffer=c.createBuffer();y.__webglFaceBuffer=c.createBuffer();y.__webglLineBuffer=c.createBuffer();if(y.numMorphTargets){var u=void 0,A=void 0;y.__webglMorphTargetsBuffers=[];u=0;for(A=
y.numMorphTargets;u<A;u++)y.__webglMorphTargetsBuffers.push(c.createBuffer())}y=x;u=p;var t=void 0,w=void 0,z=void 0;z=void 0;var D=void 0,B=void 0,O=void 0,W=O=A=0;w=void 0;z=void 0;var P=void 0;t=void 0;w=void 0;D=u.geometry;P=D.faces;B=y.faces;t=0;for(w=B.length;t<w;t++){z=B[t];z=P[z];if(z instanceof THREE.Face3){A+=3;O+=1;W+=3}else if(z instanceof THREE.Face4){A+=4;O+=2;W+=4}}t=y;w=u;P=void 0;B=void 0;var X=void 0,Ga=void 0;X=void 0;z=[];P=0;for(B=w.materials.length;P<B;P++){X=w.materials[P];
if(X instanceof THREE.MeshFaceMaterial){X=0;for(l=t.materials.length;X<l;X++)(Ga=t.materials[X])&&z.push(Ga)}else(Ga=X)&&z.push(Ga)}t=z;a:{w=void 0;P=void 0;B=t.length;for(w=0;w<B;w++){P=t[w];if(P.map||P.lightMap||P instanceof THREE.MeshShaderMaterial){w=!0;break a}}w=!1}a:{P=void 0;B=void 0;z=t.length;for(P=0;P<z;P++){B=t[P];if(!(B instanceof THREE.MeshBasicMaterial&&!B.envMap||B instanceof THREE.MeshDepthMaterial)){P=B&&B.shading!=undefined&&B.shading==THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading;
break a}}P=!1}a:{B=void 0;z=void 0;X=t.length;for(B=0;B<X;B++){z=t[B];if(z.vertexColors){z=z.vertexColors;break a}}z=!1}y.__vertexArray=new Float32Array(A*3);if(P)y.__normalArray=new Float32Array(A*3);if(D.hasTangents)y.__tangentArray=new Float32Array(A*4);if(z)y.__colorArray=new Float32Array(A*3);if(w){if(D.faceUvs.length>0||D.faceVertexUvs.length>0)y.__uvArray=new Float32Array(A*2);if(D.faceUvs.length>1||D.faceVertexUvs.length>1)y.__uv2Array=new Float32Array(A*2)}if(u.geometry.skinWeights.length&&
u.geometry.skinIndices.length){y.__skinVertexAArray=new Float32Array(A*4);y.__skinVertexBArray=new Float32Array(A*4);y.__skinIndexArray=new Float32Array(A*4);y.__skinWeightArray=new Float32Array(A*4)}y.__faceArray=new Uint16Array(O*3+(u.geometry.edgeFaces?u.geometry.edgeFaces.length*6:0));y.__lineArray=new Uint16Array(W*2);if(y.numMorphTargets){y.__morphTargetsArrays=[];D=0;for(B=y.numMorphTargets;D<B;D++)y.__morphTargetsArrays.push(new Float32Array(A*3))}y.__needsSmoothNormals=P==THREE.SmoothShading;
y.__uvType=w;y.__vertexColorType=z;y.__normalType=P;y.__webglFaceCount=O*3+(u.geometry.edgeFaces?u.geometry.edgeFaces.length*6:0);y.__webglLineCount=W*2;D=0;for(B=t.length;D<B;D++)if(t[D].attributes){y.__webglCustomAttributes={};for(a in t[D].attributes){w=t[D].attributes[a];if(!w.__webglInitialized||w.createUniqueBuffers){w.__webglInitialized=!0;O=1;if(w.type==="v2")O=2;else if(w.type==="v3")O=3;else if(w.type==="v4")O=4;else w.type==="c"&&(O=3);w.size=O;w.needsUpdate=!0;w.array=new Float32Array(A*
O);w.buffer=c.createBuffer();w.buffer.belongsToAttribute=a}y.__webglCustomAttributes[a]=w}}m.__dirtyVertices=!0;m.__dirtyMorphTargets=!0;m.__dirtyElements=!0;m.__dirtyUvs=!0;m.__dirtyNormals=!0;m.__dirtyTangents=!0;m.__dirtyColors=!0}p instanceof THREE.ShadowVolume?da(j.__webglShadowVolumes,x,p):da(j.__webglObjects,x,p)}}else if(p instanceof THREE.LensFlare)da(j.__webglLensFlares,undefined,p);else if(p instanceof THREE.Ribbon){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();
k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__webglVertexCount=x;m.__dirtyVertices=!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(p instanceof THREE.Line){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__webglLineCount=x;m.__dirtyVertices=
!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(p instanceof THREE.ParticleSystem){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__sortArray=[];k.__webglParticleCount=x;m.__dirtyVertices=!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(THREE.MarchingCubes!==undefined&&p instanceof THREE.MarchingCubes)j.__webglObjectsImmediate.push({object:p,
opaque:{list:[],count:0},transparent:{list:[],count:0}});else p instanceof THREE.Sprite&&j.__webglSprites.push(p);f.__objectsAdded.splice(0,1)}for(;f.__objectsRemoved.length;){p=f.__objectsRemoved[0];j=f;m=void 0;k=void 0;if(p instanceof THREE.Mesh)for(m=j.__webglObjects.length-1;m>=0;m--){k=j.__webglObjects[m].object;if(p==k){j.__webglObjects.splice(m,1);break}}else if(p instanceof THREE.Sprite)for(m=j.__webglSprites.length-1;m>=0;m--){k=j.__webglSprites[m];if(p==k){j.__webglSprites.splice(m,1);
break}}f.__objectsRemoved.splice(0,1)}p=0;for(j=f.__webglObjects.length;p<j;p++)L(f.__webglObjects[p].object,f);p=0;for(j=f.__webglShadowVolumes.length;p<j;p++)L(f.__webglShadowVolumes[p].object,f);p=0;for(j=f.__webglLensFlares.length;p<j;p++)L(f.__webglLensFlares[p].object,f)};this.setFaceCulling=function(f,p){if(f){!p||p=="ccw"?c.frontFace(c.CCW):c.frontFace(c.CW);if(f=="back")c.cullFace(c.BACK);else f=="front"?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK);c.enable(c.CULL_FACE)}else c.disable(c.CULL_FACE)};
this.supportsVertexTextures=function(){return c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0}};
THREE.WebGLRenderTarget=function(b,d,e){this.width=b;this.height=d;e=e||{};this.wrapS=e.wrapS!==undefined?e.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=e.wrapT!==undefined?e.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=e.magFilter!==undefined?e.magFilter:THREE.LinearFilter;this.minFilter=e.minFilter!==undefined?e.minFilter:THREE.LinearMipMapLinearFilter;this.format=e.format!==undefined?e.format:THREE.RGBAFormat;this.type=e.type!==undefined?e.type:THREE.UnsignedByteType;this.depthBuffer=e.depthBuffer!==
undefined?e.depthBuffer:!0;this.stencilBuffer=e.stencilBuffer!==undefined?e.stencilBuffer:!0};
// ThreeExtras.js r40 - http://github.com/mrdoob/three.js
THREE.AnimationHandler=function(){var a=[],c={},b={};b.update=function(f){for(var d=0;d<a.length;d++)a[d].update(f)};b.addToUpdate=function(f){a.indexOf(f)===-1&&a.push(f)};b.removeFromUpdate=function(f){f=a.indexOf(f);f!==-1&&a.splice(f,1)};b.add=function(f){c[f.name]!==undefined&&console.log("THREE.AnimationHandler.add: Warning! "+f.name+" already exists in library. Overwriting.");c[f.name]=f;if(f.initialized!==!0){for(var d=0;d<f.hierarchy.length;d++){for(var g=0;g<f.hierarchy[d].keys.length;g++){if(f.hierarchy[d].keys[g].time<
0)f.hierarchy[d].keys[g].time=0;if(f.hierarchy[d].keys[g].rot!==undefined&&!(f.hierarchy[d].keys[g].rot instanceof THREE.Quaternion)){var h=f.hierarchy[d].keys[g].rot;f.hierarchy[d].keys[g].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}}if(f.hierarchy[d].keys[0].morphTargets!==undefined){h={};for(g=0;g<f.hierarchy[d].keys.length;g++)for(var j=0;j<f.hierarchy[d].keys[g].morphTargets.length;j++){var l=f.hierarchy[d].keys[g].morphTargets[j];h[l]=-1}f.hierarchy[d].usedMorphTargets=h;for(g=0;g<f.hierarchy[d].keys.length;g++){var k=
{};for(l in h){for(j=0;j<f.hierarchy[d].keys[g].morphTargets.length;j++)if(f.hierarchy[d].keys[g].morphTargets[j]===l){k[l]=f.hierarchy[d].keys[g].morphTargetsInfluences[j];break}j===f.hierarchy[d].keys[g].morphTargets.length&&(k[l]=0)}f.hierarchy[d].keys[g].morphTargetsInfluences=k}}for(g=1;g<f.hierarchy[d].keys.length;g++)if(f.hierarchy[d].keys[g].time===f.hierarchy[d].keys[g-1].time){f.hierarchy[d].keys.splice(g,1);g--}for(g=1;g<f.hierarchy[d].keys.length;g++)f.hierarchy[d].keys[g].index=g}g=parseInt(f.length*
f.fps,10);f.JIT={};f.JIT.hierarchy=[];for(d=0;d<f.hierarchy.length;d++)f.JIT.hierarchy.push(Array(g));f.initialized=!0}};b.get=function(f){if(typeof f==="string")if(c[f])return c[f];else{console.log("THREE.AnimationHandler.get: Couldn't find animation "+f);return null}};b.parse=function(f){var d=[];if(f instanceof THREE.SkinnedMesh)for(var g=0;g<f.bones.length;g++)d.push(f.bones[g]);else e(f,d);return d};var e=function(f,d){d.push(f);for(var g=0;g<f.children.length;g++)e(f.children[g],d)};b.LINEAR=
0;b.CATMULLROM=1;b.CATMULLROM_FORWARD=2;return b}();THREE.Animation=function(a,c,b,e){this.root=a;this.data=THREE.AnimationHandler.get(c);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.isPaused=!0;this.loop=!0;this.interpolationType=b!==undefined?b:THREE.AnimationHandler.LINEAR;this.JITCompile=e!==undefined?e:!0;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,c){if(!this.isPlaying){this.isPlaying=!0;this.loop=a!==undefined?a:!0;this.currentTime=c!==undefined?c:0;var b,e=this.hierarchy.length,f;for(b=0;b<e;b++){f=this.hierarchy[b];if(this.interpolationType!==THREE.AnimationHandler.CATMULLROM_FORWARD)f.useQuaternion=!0;f.matrixAutoUpdate=!0;if(f.animationCache===undefined){f.animationCache={};f.animationCache.prevKey={pos:0,rot:0,scl:0};f.animationCache.nextKey={pos:0,rot:0,scl:0};f.animationCache.originalMatrix=
f instanceof THREE.Bone?f.skinMatrix:f.matrix}var d=f.animationCache.prevKey;f=f.animationCache.nextKey;d.pos=this.data.hierarchy[b].keys[0];d.rot=this.data.hierarchy[b].keys[0];d.scl=this.data.hierarchy[b].keys[0];f.pos=this.getNextKeyWith("pos",b,1);f.rot=this.getNextKeyWith("rot",b,1);f.scl=this.getNextKeyWith("scl",b,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};
THREE.Animation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.Animation.prototype.stop=function(){this.isPlaying=!1;this.isPaused=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.hierarchy.length;a++)if(this.hierarchy[a].animationCache!==undefined){if(this.hierarchy[a]instanceof THREE.Bone)this.hierarchy[a].skinMatrix=this.hierarchy[a].animationCache.originalMatrix;else this.hierarchy[a].matrix=this.hierarchy[a].animationCache.originalMatrix;delete this.hierarchy[a].animationCache}};
THREE.Animation.prototype.update=function(a){if(this.isPlaying){var c=["pos","rot","scl"],b,e,f,d,g,h,j,l,k=this.data.JIT.hierarchy,m,p;this.currentTime+=a*this.timeScale;p=this.currentTime;m=this.currentTime%=this.data.length;l=parseInt(Math.min(m*this.data.fps,this.data.length*this.data.fps),10);for(var n=0,v=this.hierarchy.length;n<v;n++){a=this.hierarchy[n];j=a.animationCache;if(this.JITCompile&&k[n][l]!==undefined)if(a instanceof THREE.Bone){a.skinMatrix=k[n][l];a.matrixAutoUpdate=!1;a.matrixWorldNeedsUpdate=
!1}else{a.matrix=k[n][l];a.matrixAutoUpdate=!1;a.matrixWorldNeedsUpdate=!0}else{if(this.JITCompile)if(a instanceof THREE.Bone)a.skinMatrix=a.animationCache.originalMatrix;else a.matrix=a.animationCache.originalMatrix;for(var A=0;A<3;A++){b=c[A];g=j.prevKey[b];h=j.nextKey[b];if(h.time<=p){if(m<p)if(this.loop){g=this.data.hierarchy[n].keys[0];for(h=this.getNextKeyWith(b,n,1);h.time<m;){g=h;h=this.getNextKeyWith(b,n,h.index+1)}}else{this.stop();return}else{do{g=h;h=this.getNextKeyWith(b,n,h.index+1)}while(h.time<
m)}j.prevKey[b]=g;j.nextKey[b]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;e=(m-g.time)/(h.time-g.time);f=g[b];d=h[b];if(e<0||e>1){console.log("THREE.Animation.update: Warning! Scale out of bounds:"+e+" on bone "+n);e=e<0?0:1}if(b==="pos"){b=a.position;if(this.interpolationType===THREE.AnimationHandler.LINEAR){b.x=f[0]+(d[0]-f[0])*e;b.y=f[1]+(d[1]-f[1])*e;b.z=f[2]+(d[2]-f[2])*e}else if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){this.points[0]=
this.getPrevKeyWith("pos",n,g.index-1).pos;this.points[1]=f;this.points[2]=d;this.points[3]=this.getNextKeyWith("pos",n,h.index+1).pos;e=e*0.33+0.33;f=this.interpolateCatmullRom(this.points,e);b.x=f[0];b.y=f[1];b.z=f[2];if(this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){e=this.interpolateCatmullRom(this.points,e*1.01);this.target.set(e[0],e[1],e[2]);this.target.subSelf(b);this.target.y=0;this.target.normalize();e=Math.atan2(this.target.x,this.target.z);a.rotation.set(0,e,0)}}}else if(b===
"rot")THREE.Quaternion.slerp(f,d,a.quaternion,e);else if(b==="scl"){b=a.scale;b.x=f[0]+(d[0]-f[0])*e;b.y=f[1]+(d[1]-f[1])*e;b.z=f[2]+(d[2]-f[2])*e}}}}if(this.JITCompile&&k[0][l]===undefined){this.hierarchy[0].update(undefined,!0);for(n=0;n<this.hierarchy.length;n++)k[n][l]=this.hierarchy[n]instanceof THREE.Bone?this.hierarchy[n].skinMatrix.clone():this.hierarchy[n].matrix.clone()}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,c){var b=[],e=[],f,d,g,h,j,l;f=(a.length-1)*c;d=Math.floor(f);f-=d;b[0]=d==0?d:d-1;b[1]=d;b[2]=d>a.length-2?d:d+1;b[3]=d>a.length-3?d:d+2;d=a[b[0]];h=a[b[1]];j=a[b[2]];l=a[b[3]];b=f*f;g=f*b;e[0]=this.interpolate(d[0],h[0],j[0],l[0],f,b,g);e[1]=this.interpolate(d[1],h[1],j[1],l[1],f,b,g);e[2]=this.interpolate(d[2],h[2],j[2],l[2],f,b,g);return e};
THREE.Animation.prototype.interpolate=function(a,c,b,e,f,d,g){a=(b-a)*0.5;e=(e-c)*0.5;return(2*(c-b)+a+e)*g+(-3*(c-b)-2*a-e)*d+a*f+c};THREE.Animation.prototype.getNextKeyWith=function(a,c,b){var e=this.data.hierarchy[c].keys;if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)b=b<e.length-1?b:e.length-1;else b%=e.length;for(;b<e.length;b++)if(e[b][a]!==undefined)return e[b];return this.data.hierarchy[c].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,c,b){var e=this.data.hierarchy[c].keys;for(b=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?b>0?b:0:b>=0?b:b+e.length;b>=0;b--)if(e[b][a]!==undefined)return e[b];return this.data.hierarchy[c].keys[e.length-1]};
THREE.ColorUtils={adjustHSV:function(a,c,b,e){var f=THREE.ColorUtils.__hsv;THREE.ColorUtils.rgbToHsv(a,f);f.h=THREE.ColorUtils.clamp(f.h+c,0,1);f.s=THREE.ColorUtils.clamp(f.s+b,0,1);f.v=THREE.ColorUtils.clamp(f.v+e,0,1);a.setHSV(f.h,f.s,f.v)},rgbToHsv:function(a,c){var b=a.r,e=a.g,f=a.b,d=Math.max(Math.max(b,e),f),g=Math.min(Math.min(b,e),f);if(g==d)g=b=0;else{var h=d-g;g=h/d;b=b==d?(e-f)/h:e==d?2+(f-b)/h:4+(b-e)/h;b/=6;b<0&&(b+=1);b>1&&(b-=1)}c===undefined&&(c={h:0,s:0,v:0});c.h=b;c.s=g;c.v=d;return c},
clamp:function(a,c,b){return a<c?c:a>b?b:a}};THREE.ColorUtils.__hsv={h:0,s:0,v:0};
var GeometryUtils={merge:function(a,c){var b=c instanceof THREE.Mesh,e=a.vertices.length,f=b?c.geometry:c,d=a.vertices,g=f.vertices,h=a.faces,j=f.faces,l=a.faceVertexUvs[0];f=f.faceVertexUvs[0];b&&c.matrixAutoUpdate&&c.updateMatrix();for(var k=0,m=g.length;k<m;k++){var p=new THREE.Vertex(g[k].position.clone());b&&c.matrix.multiplyVector3(p.position);d.push(p)}k=0;for(m=j.length;k<m;k++){g=j[k];var n,v,A=g.vertexNormals;p=g.vertexColors;if(g instanceof THREE.Face3)n=new THREE.Face3(g.a+e,g.b+e,g.c+
e);else g instanceof THREE.Face4&&(n=new THREE.Face4(g.a+e,g.b+e,g.c+e,g.d+e));n.normal.copy(g.normal);b=0;for(d=A.length;b<d;b++){v=A[b];n.vertexNormals.push(v.clone())}n.color.copy(g.color);b=0;for(d=p.length;b<d;b++){v=p[b];n.vertexColors.push(v.clone())}n.materials=g.materials.slice();n.centroid.copy(g.centroid);h.push(n)}k=0;for(m=f.length;k<m;k++){e=f[k];h=[];b=0;for(d=e.length;b<d;b++)h.push(new THREE.UV(e[b].u,e[b].v));l.push(h)}}};
THREE.ImageUtils={loadTexture:function(a,c,b){var e=new Image,f=new THREE.Texture(e,c);e.onload=function(){f.needsUpdate=!0;b&&b(this)};e.src=a;return f},loadTextureCube:function(a,c,b){var e,f=[],d=new THREE.Texture(f,c);c=f.loadCount=0;for(e=a.length;c<e;++c){f[c]=new Image;f[c].onload=function(){f.loadCount+=1;if(f.loadCount==6)d.needsUpdate=!0;b&&b(this)};f[c].src=a[c]}return d}};
THREE.SceneUtils={addMesh:function(a,c,b,e,f,d,g,h,j,l){c=new THREE.Mesh(c,l);c.scale.x=c.scale.y=c.scale.z=b;c.position.x=e;c.position.y=f;c.position.z=d;c.rotation.x=g;c.rotation.y=h;c.rotation.z=j;a.addObject(c);return c},addPanoramaCubeWebGL:function(a,c,b){var e=THREE.ShaderUtils.lib.cube;e.uniforms.tCube.texture=b;b=new THREE.MeshShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:e.uniforms});c=new THREE.Mesh(new THREE.Cube(c,c,c,1,1,1,null,!0),b);a.addObject(c);
return c},addPanoramaCube:function(a,c,b){var e=[];e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[0])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[1])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[2])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[3])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[4])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[5])}));c=new THREE.Mesh(new THREE.Cube(c,c,c,1,1,e,!0),
new THREE.MeshFaceMaterial);a.addObject(c);return c},addPanoramaCubePlanes:function(a,c,b){var e=c/2;c=new THREE.Plane(c,c);var f=Math.PI,d=Math.PI/2;THREE.SceneUtils.addMesh(a,c,1,0,0,-e,0,0,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[5])}));THREE.SceneUtils.addMesh(a,c,1,-e,0,0,0,d,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[0])}));THREE.SceneUtils.addMesh(a,c,1,e,0,0,0,-d,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[1])}));THREE.SceneUtils.addMesh(a,c,1,0,e,0,d,
0,f,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[2])}));THREE.SceneUtils.addMesh(a,c,1,0,-e,0,-d,0,f,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[3])}))},showHierarchy:function(a,c){THREE.SceneUtils.traverseHierarchy(a,function(b){b.visible=c})},traverseHierarchy:function(a,c){var b,e,f=a.children.length;for(e=0;e<f;e++){b=a.children[e];c(b);THREE.SceneUtils.traverseHierarchy(b,c)}}};
THREE.ShaderUtils={lib:{fresnel:{uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:0.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:1,texture:null}},fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
vertexShader:"uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
normal:{uniforms:{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},tDiffuse:{type:"t",value:0,texture:null},tNormal:{type:"t",value:2,texture:null},tSpecular:{type:"t",value:3,texture:null},tAO:{type:"t",value:4,texture:null},uNormalScale:{type:"f",value:1},tDisplacement:{type:"t",value:5,texture:null},uDisplacementBias:{type:"f",value:-0.5},uDisplacementScale:{type:"f",value:2.5},uPointLightPos:{type:"v3",value:new THREE.Vector3},uPointLightColor:{type:"c",
value:new THREE.Color(15658734)},uDirLightPos:{type:"v3",value:new THREE.Vector3},uDirLightColor:{type:"c",value:new THREE.Color(15658734)},uAmbientLightColor:{type:"c",value:new THREE.Color(328965)},uDiffuseColor:{type:"c",value:new THREE.Color(15658734)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(328965)},uShininess:{type:"f",value:30}},fragmentShader:"uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 specularTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight * pointDiffuseWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight * dirDiffuseWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}",
vertexShader:"attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"},
cube:{uniforms:{tCube:{type:"t",value:1,texture:null}},vertexShader:"varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"},convolution:{uniforms:{tDiffuse:{type:"t",
value:0,texture:null},uImageIncrement:{type:"v2",value:new THREE.Vector2(0.001953125,0)},cKernel:{type:"fv1",value:[]}},vertexShader:"varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"},
film:{uniforms:{tDiffuse:{type:"t",value:0,texture:null},time:{type:"f",value:0},nIntensity:{type:"f",value:0.5},sIntensity:{type:"f",value:0.05},sCount:{type:"f",value:4096},grayscale:{type:"i",value:1}},vertexShader:"varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"},
screen:{uniforms:{tDiffuse:{type:"t",value:0,texture:null},opacity:{type:"f",value:1}},vertexShader:"varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"},basic:{uniforms:{},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
fragmentShader:"void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"}},buildKernel:function(a){var c,b,e,f,d=2*Math.ceil(a*3)+1;d>25&&(d=25);f=(d-1)*0.5;b=Array(d);for(c=e=0;c<d;++c){b[c]=Math.exp(-((c-f)*(c-f))/(2*a*a));e+=b[c]}for(c=0;c<d;++c)b[c]/=e;return b}};
THREE.QuakeCamera=function(a){function c(b,e){return function(){e.apply(b,arguments)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.movementSpeed=1;this.lookSpeed=0.0050;this.noFly=!1;this.lookVertical=!0;this.autoForward=!1;this.activeLook=!0;this.heightSpeed=!1;this.heightCoef=1;this.heightMin=0;this.constrainVertical=!1;this.verticalMin=0;this.verticalMax=3.14;this.domElement=document;this.lastUpdate=(new Date).getTime();this.tdiff=0;if(a){if(a.movementSpeed!==undefined)this.movementSpeed=
a.movementSpeed;if(a.lookSpeed!==undefined)this.lookSpeed=a.lookSpeed;if(a.noFly!==undefined)this.noFly=a.noFly;if(a.lookVertical!==undefined)this.lookVertical=a.lookVertical;if(a.autoForward!==undefined)this.autoForward=a.autoForward;if(a.activeLook!==undefined)this.activeLook=a.activeLook;if(a.heightSpeed!==undefined)this.heightSpeed=a.heightSpeed;if(a.heightCoef!==undefined)this.heightCoef=a.heightCoef;if(a.heightMin!==undefined)this.heightMin=a.heightMin;if(a.heightMax!==undefined)this.heightMax=
a.heightMax;if(a.constrainVertical!==undefined)this.constrainVertical=a.constrainVertical;if(a.verticalMin!==undefined)this.verticalMin=a.verticalMin;if(a.verticalMax!==undefined)this.verticalMax=a.verticalMax;if(a.domElement!==undefined)this.domElement=a.domElement}this.theta=this.phi=this.lon=this.lat=this.mouseY=this.mouseX=this.autoSpeedFactor=0;this.moveForward=!1;this.moveBackward=!1;this.moveLeft=!1;this.moveRight=!1;this.freeze=!1;this.mouseDragOn=!1;this.windowHalfX=window.innerWidth/2;this.windowHalfY=
window.innerHeight/2;this.onMouseDown=function(b){b.preventDefault();b.stopPropagation();if(this.activeLook)switch(b.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}this.mouseDragOn=!0};this.onMouseUp=function(b){b.preventDefault();b.stopPropagation();if(this.activeLook)switch(b.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.mouseDragOn=!1};this.onMouseMove=function(b){this.mouseX=b.clientX-this.windowHalfX;this.mouseY=b.clientY-this.windowHalfY};this.onKeyDown=
function(b){switch(b.keyCode){case 38:case 87:this.moveForward=!0;break;case 37:case 65:this.moveLeft=!0;break;case 40:case 83:this.moveBackward=!0;break;case 39:case 68:this.moveRight=!0;break;case 81:this.freeze=!this.freeze}};this.onKeyUp=function(b){switch(b.keyCode){case 38:case 87:this.moveForward=!1;break;case 37:case 65:this.moveLeft=!1;break;case 40:case 83:this.moveBackward=!1;break;case 39:case 68:this.moveRight=!1}};this.update=function(){var b=(new Date).getTime();this.tdiff=(b-this.lastUpdate)/
1E3;this.lastUpdate=b;if(!this.freeze){this.autoSpeedFactor=this.heightSpeed?this.tdiff*((this.position.y<this.heightMin?this.heightMin:this.position.y>this.heightMax?this.heightMax:this.position.y)-this.heightMin)*this.heightCoef:0;var e=this.tdiff*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.translateZ(-(e+this.autoSpeedFactor));this.moveBackward&&this.translateZ(e);this.moveLeft&&this.translateX(-e);this.moveRight&&this.translateX(e);e=this.tdiff*this.lookSpeed;
this.activeLook||(e=0);this.lon+=this.mouseX*e;this.lookVertical&&(this.lat-=this.mouseY*e);this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=(90-this.lat)*Math.PI/180;this.theta=this.lon*Math.PI/180;b=this.target.position;var f=this.position;b.x=f.x+100*Math.sin(this.phi)*Math.cos(this.theta);b.y=f.y+100*Math.cos(this.phi);b.z=f.z+100*Math.sin(this.phi)*Math.sin(this.theta)}this.lon+=this.mouseX*e;this.lookVertical&&(this.lat-=this.mouseY*e);this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=
(90-this.lat)*Math.PI/180;this.theta=this.lon*Math.PI/180;if(this.constrainVertical)this.phi=(this.phi-0)*(this.verticalMax-this.verticalMin)/3.14+this.verticalMin;b=this.target.position;f=this.position;b.x=f.x+100*Math.sin(this.phi)*Math.cos(this.theta);b.y=f.y+100*Math.cos(this.phi);b.z=f.z+100*Math.sin(this.phi)*Math.sin(this.theta);this.supr.update.call(this)};this.domElement.addEventListener("contextmenu",function(b){b.preventDefault()},!1);this.domElement.addEventListener("mousemove",c(this,
this.onMouseMove),!1);this.domElement.addEventListener("mousedown",c(this,this.onMouseDown),!1);this.domElement.addEventListener("mouseup",c(this,this.onMouseUp),!1);this.domElement.addEventListener("keydown",c(this,this.onKeyDown),!1);this.domElement.addEventListener("keyup",c(this,this.onKeyUp),!1)};THREE.QuakeCamera.prototype=new THREE.Camera;THREE.QuakeCamera.prototype.constructor=THREE.QuakeCamera;THREE.QuakeCamera.prototype.supr=THREE.Camera.prototype;
THREE.QuakeCamera.prototype.translate=function(a,c){this.matrix.rotateAxis(c);if(this.noFly)c.y=0;this.position.addSelf(c.multiplyScalar(a));this.target.position.addSelf(c.multiplyScalar(a))};
THREE.PathCamera=function(a){function c(l,k,m,p){var n={name:m,fps:0.6,length:p,hierarchy:[]},v,A=k.getControlPointsArray(),w=k.getLength(),u=A.length,y=0;v=u-1;k={parent:-1,keys:[]};k.keys[0]={time:0,pos:A[0],rot:[0,0,0,1],scl:[1,1,1]};k.keys[v]={time:p,pos:A[v],rot:[0,0,0,1],scl:[1,1,1]};for(v=1;v<u-1;v++){y=p*w.chunks[v]/w.total;k.keys[v]={time:y,pos:A[v]}}n.hierarchy[0]=k;THREE.AnimationHandler.add(n);return new THREE.Animation(l,m,THREE.AnimationHandler.CATMULLROM_FORWARD,!1)}function b(l,k){var m,
p,n=new THREE.Geometry;for(m=0;m<l.points.length*k;m++){p=m/(l.points.length*k);p=l.getPoint(p);n.vertices[m]=new THREE.Vertex(new THREE.Vector3(p.x,p.y,p.z))}return n}function e(l,k){var m=b(k,10),p=b(k,10),n=new THREE.LineBasicMaterial({color:16711680,linewidth:3});lineObj=new THREE.Line(m,n);particleObj=new THREE.ParticleSystem(p,new THREE.ParticleBasicMaterial({color:16755200,size:3}));lineObj.scale.set(1,1,1);l.addChild(lineObj);particleObj.scale.set(1,1,1);l.addChild(particleObj);p=new THREE.Sphere(1,
16,8);n=new THREE.MeshBasicMaterial({color:65280});for(i=0;i<k.points.length;i++){m=new THREE.Mesh(p,n);m.position.copy(k.points[i]);m.updateMatrix();l.addChild(m)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.id="PathCamera"+THREE.PathCameraIdCounter++;this.duration=1E4;this.waypoints=[];this.useConstantSpeed=!0;this.resamplingCoef=50;this.debugPath=new THREE.Object3D;this.debugDummy=new THREE.Object3D;this.animationParent=new THREE.Object3D;this.lookSpeed=0.0050;this.lookVertical=
!0;this.lookHorizontal=!0;this.verticalAngleMap={srcRange:[0,6.28],dstRange:[0,6.28]};this.horizontalAngleMap={srcRange:[0,6.28],dstRange:[0,6.28]};this.domElement=document;if(a){if(a.duration!==undefined)this.duration=a.duration*1E3;if(a.waypoints!==undefined)this.waypoints=a.waypoints;if(a.useConstantSpeed!==undefined)this.useConstantSpeed=a.useConstantSpeed;if(a.resamplingCoef!==undefined)this.resamplingCoef=a.resamplingCoef;if(a.createDebugPath!==undefined)this.createDebugPath=a.createDebugPath;
if(a.createDebugDummy!==undefined)this.createDebugDummy=a.createDebugDummy;if(a.lookSpeed!==undefined)this.lookSpeed=a.lookSpeed;if(a.lookVertical!==undefined)this.lookVertical=a.lookVertical;if(a.lookHorizontal!==undefined)this.lookHorizontal=a.lookHorizontal;if(a.verticalAngleMap!==undefined)this.verticalAngleMap=a.verticalAngleMap;if(a.horizontalAngleMap!==undefined)this.horizontalAngleMap=a.horizontalAngleMap;if(a.domElement!==undefined)this.domElement=a.domElement}this.theta=this.phi=this.lon=
this.lat=this.mouseY=this.mouseX=0;this.windowHalfX=window.innerWidth/2;this.windowHalfY=window.innerHeight/2;var f=Math.PI*2,d=Math.PI/180;this.update=function(l,k,m){var p,n;this.lookHorizontal&&(this.lon+=this.mouseX*this.lookSpeed);this.lookVertical&&(this.lat-=this.mouseY*this.lookSpeed);this.lon=Math.max(0,Math.min(360,this.lon));this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=(90-this.lat)*d;this.theta=this.lon*d;p=this.phi%f;this.phi=p>=0?p:p+f;p=this.verticalAngleMap.srcRange;n=this.verticalAngleMap.dstRange;
this.phi=(this.phi-p[0])*(n[1]-n[0])/(p[1]-p[0])+n[0];p=this.horizontalAngleMap.srcRange;n=this.horizontalAngleMap.dstRange;this.theta=(this.theta-p[0])*(n[1]-n[0])/(p[1]-p[0])+n[0];p=this.target.position;p.x=100*Math.sin(this.phi)*Math.cos(this.theta);p.y=100*Math.cos(this.phi);p.z=100*Math.sin(this.phi)*Math.sin(this.theta);this.supr.update.call(this,l,k,m)};this.onMouseMove=function(l){this.mouseX=l.clientX-this.windowHalfX;this.mouseY=l.clientY-this.windowHalfY};this.spline=new THREE.Spline;this.spline.initFromArray(this.waypoints);
this.useConstantSpeed&&this.spline.reparametrizeByArcLength(this.resamplingCoef);if(this.createDebugDummy){a=new THREE.MeshLambertMaterial({color:30719});var g=new THREE.MeshLambertMaterial({color:65280}),h=new THREE.Cube(10,10,20),j=new THREE.Cube(2,2,10);this.animationParent=new THREE.Mesh(h,a);a=new THREE.Mesh(j,g);a.position.set(0,10,0);this.animation=c(this.animationParent,this.spline,this.id,this.duration);this.animationParent.addChild(this);this.animationParent.addChild(this.target);this.animationParent.addChild(a)}else{this.animation=
c(this.animationParent,this.spline,this.id,this.duration);this.animationParent.addChild(this.target);this.animationParent.addChild(this)}this.createDebugPath&&e(this.debugPath,this.spline);this.domElement.addEventListener("mousemove",function(l,k){return function(){k.apply(l,arguments)}}(this,this.onMouseMove),!1)};THREE.PathCamera.prototype=new THREE.Camera;THREE.PathCamera.prototype.constructor=THREE.PathCamera;THREE.PathCamera.prototype.supr=THREE.Camera.prototype;THREE.PathCameraIdCounter=0;
THREE.FlyCamera=function(a){function c(b,e){return function(){e.apply(b,arguments)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.tmpQuaternion=new THREE.Quaternion;this.movementSpeed=1;this.rollSpeed=0.0050;this.dragToLook=!1;this.autoForward=!1;this.domElement=document;if(a){if(a.movementSpeed!==undefined)this.movementSpeed=a.movementSpeed;if(a.rollSpeed!==undefined)this.rollSpeed=a.rollSpeed;if(a.dragToLook!==undefined)this.dragToLook=a.dragToLook;if(a.autoForward!==undefined)this.autoForward=
a.autoForward;if(a.domElement!==undefined)this.domElement=a.domElement}this.useTarget=!1;this.useQuaternion=!0;this.mouseStatus=0;this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0};this.moveVector=new THREE.Vector3(0,0,0);this.rotationVector=new THREE.Vector3(0,0,0);this.lastUpdate=-1;this.tdiff=0;this.handleEvent=function(b){if(typeof this[b.type]=="function")this[b.type](b)};this.keydown=function(b){if(!b.altKey){switch(b.keyCode){case 16:this.movementSpeedMultiplier=
0.1;break;case 87:this.moveState.forward=1;break;case 83:this.moveState.back=1;break;case 65:this.moveState.left=1;break;case 68:this.moveState.right=1;break;case 82:this.moveState.up=1;break;case 70:this.moveState.down=1;break;case 38:this.moveState.pitchUp=1;break;case 40:this.moveState.pitchDown=1;break;case 37:this.moveState.yawLeft=1;break;case 39:this.moveState.yawRight=1;break;case 81:this.moveState.rollLeft=1;break;case 69:this.moveState.rollRight=1}this.updateMovementVector();this.updateRotationVector()}};
this.keyup=function(b){switch(b.keyCode){case 16:this.movementSpeedMultiplier=1;break;case 87:this.moveState.forward=0;break;case 83:this.moveState.back=0;break;case 65:this.moveState.left=0;break;case 68:this.moveState.right=0;break;case 82:this.moveState.up=0;break;case 70:this.moveState.down=0;break;case 38:this.moveState.pitchUp=0;break;case 40:this.moveState.pitchDown=0;break;case 37:this.moveState.yawLeft=0;break;case 39:this.moveState.yawRight=0;break;case 81:this.moveState.rollLeft=0;break;
case 69:this.moveState.rollRight=0}this.updateMovementVector();this.updateRotationVector()};this.mousedown=function(b){b.preventDefault();b.stopPropagation();if(this.dragToLook)this.mouseStatus++;else switch(b.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}};this.mousemove=function(b){if(!this.dragToLook||this.mouseStatus>0){var e=this.getContainerDimensions(),f=e.size[0]/2,d=e.size[1]/2;this.moveState.yawLeft=-(b.clientX-e.offset[0]-f)/f;this.moveState.pitchDown=(b.clientY-
e.offset[1]-d)/d;this.updateRotationVector()}};this.mouseup=function(b){b.preventDefault();b.stopPropagation();if(this.dragToLook){this.mouseStatus--;this.moveState.yawLeft=this.moveState.pitchDown=0}else switch(b.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.updateRotationVector()};this.update=function(){var b=(new Date).getTime();if(this.lastUpdate==-1)this.lastUpdate=b;this.tdiff=(b-this.lastUpdate)/1E3;this.lastUpdate=b;b=this.tdiff*this.movementSpeed;var e=this.tdiff*
this.rollSpeed;this.translateX(this.moveVector.x*b);this.translateY(this.moveVector.y*b);this.translateZ(this.moveVector.z*b);this.tmpQuaternion.set(this.rotationVector.x*e,this.rotationVector.y*e,this.rotationVector.z*e,1).normalize();this.quaternion.multiplySelf(this.tmpQuaternion);this.matrix.setPosition(this.position);this.matrix.setRotationFromQuaternion(this.quaternion);this.matrixWorldNeedsUpdate=!0;this.supr.update.call(this)};this.updateMovementVector=function(){var b=this.moveState.forward||
this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right;this.moveVector.y=-this.moveState.down+this.moveState.up;this.moveVector.z=-b+this.moveState.back};this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp;this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft;this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft};this.getContainerDimensions=function(){return this.domElement!=
document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}};this.domElement.addEventListener("mousemove",c(this,this.mousemove),!1);this.domElement.addEventListener("mousedown",c(this,this.mousedown),!1);this.domElement.addEventListener("mouseup",c(this,this.mouseup),!1);window.addEventListener("keydown",c(this,this.keydown),!1);window.addEventListener("keyup",c(this,
this.keyup),!1);this.updateMovementVector();this.updateRotationVector()};THREE.FlyCamera.prototype=new THREE.Camera;THREE.FlyCamera.prototype.constructor=THREE.FlyCamera;THREE.FlyCamera.prototype.supr=THREE.Camera.prototype;
THREE.RollCamera=function(a,c,b,e){THREE.Camera.call(this,a,c,b,e);this.mouseLook=!0;this.autoForward=!1;this.rollSpeed=this.movementSpeed=this.lookSpeed=1;this.constrainVertical=[-0.9,0.9];this.domElement=document;this.useTarget=!1;this.matrixAutoUpdate=!1;this.forward=new THREE.Vector3(0,0,1);this.roll=0;this.lastUpdate=-1;this.delta=0;var f=new THREE.Vector3,d=new THREE.Vector3,g=new THREE.Vector3,h=new THREE.Matrix4,j=!1,l=1,k=0,m=0,p=0,n=0,v=0,A=window.innerWidth/2,w=window.innerHeight/2;this.update=
function(){var u=(new Date).getTime();if(this.lastUpdate==-1)this.lastUpdate=u;this.delta=(u-this.lastUpdate)/1E3;this.lastUpdate=u;if(this.mouseLook){u=this.delta*this.lookSpeed;this.rotateHorizontally(u*n);this.rotateVertically(u*v)}u=this.delta*this.movementSpeed;this.translateZ(u*(k>0||this.autoForward&&!(k<0)?1:k));this.translateX(u*m);this.translateY(u*p);j&&(this.roll+=this.rollSpeed*this.delta*l);if(this.forward.y>this.constrainVertical[1]){this.forward.y=this.constrainVertical[1];this.forward.normalize()}else if(this.forward.y<
this.constrainVertical[0]){this.forward.y=this.constrainVertical[0];this.forward.normalize()}g.copy(this.forward);d.set(0,1,0);f.cross(d,g).normalize();d.cross(g,f).normalize();this.matrix.n11=f.x;this.matrix.n12=d.x;this.matrix.n13=g.x;this.matrix.n21=f.y;this.matrix.n22=d.y;this.matrix.n23=g.y;this.matrix.n31=f.z;this.matrix.n32=d.z;this.matrix.n33=g.z;h.identity();h.n11=Math.cos(this.roll);h.n12=-Math.sin(this.roll);h.n21=Math.sin(this.roll);h.n22=Math.cos(this.roll);this.matrix.multiplySelf(h);
this.matrixWorldNeedsUpdate=!0;this.matrix.n14=this.position.x;this.matrix.n24=this.position.y;this.matrix.n34=this.position.z;this.supr.update.call(this)};this.translateX=function(u){this.position.x+=this.matrix.n11*u;this.position.y+=this.matrix.n21*u;this.position.z+=this.matrix.n31*u};this.translateY=function(u){this.position.x+=this.matrix.n12*u;this.position.y+=this.matrix.n22*u;this.position.z+=this.matrix.n32*u};this.translateZ=function(u){this.position.x-=this.matrix.n13*u;this.position.y-=
this.matrix.n23*u;this.position.z-=this.matrix.n33*u};this.rotateHorizontally=function(u){f.set(this.matrix.n11,this.matrix.n21,this.matrix.n31);f.multiplyScalar(u);this.forward.subSelf(f);this.forward.normalize()};this.rotateVertically=function(u){d.set(this.matrix.n12,this.matrix.n22,this.matrix.n32);d.multiplyScalar(u);this.forward.addSelf(d);this.forward.normalize()};this.domElement.addEventListener("contextmenu",function(u){u.preventDefault()},!1);this.domElement.addEventListener("mousemove",
function(u){n=(u.clientX-A)/window.innerWidth;v=(u.clientY-w)/window.innerHeight},!1);this.domElement.addEventListener("mousedown",function(u){u.preventDefault();u.stopPropagation();switch(u.button){case 0:k=1;break;case 2:k=-1}},!1);this.domElement.addEventListener("mouseup",function(u){u.preventDefault();u.stopPropagation();switch(u.button){case 0:k=0;break;case 2:k=0}},!1);this.domElement.addEventListener("keydown",function(u){switch(u.keyCode){case 38:case 87:k=1;break;case 37:case 65:m=-1;break;
case 40:case 83:k=-1;break;case 39:case 68:m=1;break;case 81:j=!0;l=1;break;case 69:j=!0;l=-1;break;case 82:p=1;break;case 70:p=-1}},!1);this.domElement.addEventListener("keyup",function(u){switch(u.keyCode){case 38:case 87:k=0;break;case 37:case 65:m=0;break;case 40:case 83:k=0;break;case 39:case 68:m=0;break;case 81:j=!1;break;case 69:j=!1;break;case 82:p=0;break;case 70:p=0}},!1)};THREE.RollCamera.prototype=new THREE.Camera;THREE.RollCamera.prototype.constructor=THREE.RollCamera;
THREE.RollCamera.prototype.supr=THREE.Camera.prototype;
THREE.Cube=function(a,c,b,e,f,d,g,h,j){function l(w,u,y,o,z,B,I,K){var J,G,D=e||1,L=f||1,R=z/2,O=B/2,S=k.vertices.length;if(w=="x"&&u=="y"||w=="y"&&u=="x")J="z";else if(w=="x"&&u=="z"||w=="z"&&u=="x"){J="y";L=d||1}else if(w=="z"&&u=="y"||w=="y"&&u=="z"){J="x";D=d||1}var P=D+1,F=L+1;z/=D;var M=B/L;for(G=0;G<F;G++)for(B=0;B<P;B++){var Q=new THREE.Vector3;Q[w]=(B*z-R)*y;Q[u]=(G*M-O)*o;Q[J]=I;k.vertices.push(new THREE.Vertex(Q))}for(G=0;G<L;G++)for(B=0;B<D;B++){k.faces.push(new THREE.Face4(B+P*G+S,B+
P*(G+1)+S,B+1+P*(G+1)+S,B+1+P*G+S,null,null,K));k.faceVertexUvs[0].push([new THREE.UV(B/D,G/L),new THREE.UV(B/D,(G+1)/L),new THREE.UV((B+1)/D,(G+1)/L),new THREE.UV((B+1)/D,G/L)])}}THREE.Geometry.call(this);var k=this,m=a/2,p=c/2,n=b/2;h=h?-1:1;if(g!==undefined)if(g instanceof Array)this.materials=g;else{this.materials=[];for(var v=0;v<6;v++)this.materials.push([g])}else this.materials=[];this.sides={px:!0,nx:!0,py:!0,ny:!0,pz:!0,nz:!0};if(j!=undefined)for(var A in j)this.sides[A]!=undefined&&(this.sides[A]=
j[A]);this.sides.px&&l("z","y",1*h,-1,b,c,-m,this.materials[0]);this.sides.nx&&l("z","y",-1*h,-1,b,c,m,this.materials[1]);this.sides.py&&l("x","z",1*h,1,a,b,p,this.materials[2]);this.sides.ny&&l("x","z",1*h,-1,a,b,-p,this.materials[3]);this.sides.pz&&l("x","y",1*h,-1,a,c,n,this.materials[4]);this.sides.nz&&l("x","y",-1*h,-1,a,c,-n,this.materials[5]);(function(){for(var w=[],u=[],y=0,o=k.vertices.length;y<o;y++){for(var z=k.vertices[y],B=!1,I=0,K=w.length;I<K;I++){var J=w[I];if(z.position.x==J.position.x&&
z.position.y==J.position.y&&z.position.z==J.position.z){u[y]=I;B=!0;break}}if(!B){u[y]=w.length;w.push(new THREE.Vertex(z.position.clone()))}}y=0;for(o=k.faces.length;y<o;y++){z=k.faces[y];z.a=u[z.a];z.b=u[z.b];z.c=u[z.c];z.d=u[z.d]}k.vertices=w})();this.computeCentroids();this.computeFaceNormals()};THREE.Cube.prototype=new THREE.Geometry;THREE.Cube.prototype.constructor=THREE.Cube;
THREE.Cylinder=function(a,c,b,e,f,d){function g(p,n,v){h.vertices.push(new THREE.Vertex(new THREE.Vector3(p,n,v)))}THREE.Geometry.call(this);var h=this,j,l=Math.PI*2,k=e/2;for(j=0;j<a;j++)g(Math.sin(l*j/a)*c,Math.cos(l*j/a)*c,-k);for(j=0;j<a;j++)g(Math.sin(l*j/a)*b,Math.cos(l*j/a)*b,k);for(j=0;j<a;j++)h.faces.push(new THREE.Face4(j,j+a,a+(j+1)%a,(j+1)%a));if(b>0){g(0,0,-k-(d||0));for(j=a;j<a+a/2;j++)h.faces.push(new THREE.Face4(2*a,(2*j-2*a)%a,(2*j-2*a+1)%a,(2*j-2*a+2)%a))}if(c>0){g(0,0,k+(f||0));
for(j=a+a/2;j<2*a;j++)h.faces.push(new THREE.Face4(2*a+1,(2*j-2*a+2)%a+a,(2*j-2*a+1)%a+a,(2*j-2*a)%a+a))}j=0;for(a=this.faces.length;j<a;j++){c=[];b=this.faces[j];f=this.vertices[b.a];d=this.vertices[b.b];k=this.vertices[b.c];var m=this.vertices[b.d];c.push(new THREE.UV(0.5+Math.atan2(f.position.x,f.position.y)/l,0.5+f.position.z/e));c.push(new THREE.UV(0.5+Math.atan2(d.position.x,d.position.y)/l,0.5+d.position.z/e));c.push(new THREE.UV(0.5+Math.atan2(k.position.x,k.position.y)/l,0.5+k.position.z/
e));b instanceof THREE.Face4&&c.push(new THREE.UV(0.5+Math.atan2(m.position.x,m.position.y)/l,0.5+m.position.z/e));this.faceVertexUvs[0].push(c)}this.computeCentroids();this.computeFaceNormals()};THREE.Cylinder.prototype=new THREE.Geometry;THREE.Cylinder.prototype.constructor=THREE.Cylinder;
THREE.Icosahedron=function(a){function c(m,p,n){var v=Math.sqrt(m*m+p*p+n*n);return f.vertices.push(new THREE.Vertex(new THREE.Vector3(m/v,p/v,n/v)))-1}function b(m,p,n,v){v.faces.push(new THREE.Face3(m,p,n))}function e(m,p){var n=f.vertices[m].position,v=f.vertices[p].position;return c((n.x+v.x)/2,(n.y+v.y)/2,(n.z+v.z)/2)}var f=this,d=new THREE.Geometry,g;this.subdivisions=a||0;THREE.Geometry.call(this);a=(1+Math.sqrt(5))/2;c(-1,a,0);c(1,a,0);c(-1,-a,0);c(1,-a,0);c(0,-1,a);c(0,1,a);c(0,-1,-a);c(0,
1,-a);c(a,0,-1);c(a,0,1);c(-a,0,-1);c(-a,0,1);b(0,11,5,d);b(0,5,1,d);b(0,1,7,d);b(0,7,10,d);b(0,10,11,d);b(1,5,9,d);b(5,11,4,d);b(11,10,2,d);b(10,7,6,d);b(7,1,8,d);b(3,9,4,d);b(3,4,2,d);b(3,2,6,d);b(3,6,8,d);b(3,8,9,d);b(4,9,5,d);b(2,4,11,d);b(6,2,10,d);b(8,6,7,d);b(9,8,1,d);for(a=0;a<this.subdivisions;a++){g=new THREE.Geometry;for(var h in d.faces){var j=e(d.faces[h].a,d.faces[h].b),l=e(d.faces[h].b,d.faces[h].c),k=e(d.faces[h].c,d.faces[h].a);b(d.faces[h].a,j,k,g);b(d.faces[h].b,l,j,g);b(d.faces[h].c,
k,l,g);b(j,l,k,g)}d.faces=g.faces}f.faces=d.faces;delete d;delete g;this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Icosahedron.prototype=new THREE.Geometry;THREE.Icosahedron.prototype.constructor=THREE.Icosahedron;
THREE.Lathe=function(a,c,b){THREE.Geometry.call(this);this.steps=c||12;this.angle=b||2*Math.PI;c=this.angle/this.steps;b=[];for(var e=[],f=[],d=[],g=(new THREE.Matrix4).setRotationZ(c),h=0;h<a.length;h++){this.vertices.push(new THREE.Vertex(a[h]));b[h]=a[h].clone();e[h]=this.vertices.length-1}for(var j=0;j<=this.angle+0.0010;j+=c){for(h=0;h<b.length;h++)if(j<this.angle){b[h]=g.multiplyVector3(b[h].clone());this.vertices.push(new THREE.Vertex(b[h]));f[h]=this.vertices.length-1}else f=d;j==0&&(d=e);
for(h=0;h<e.length-1;h++){this.faces.push(new THREE.Face4(f[h],f[h+1],e[h+1],e[h]));this.faceVertexUvs[0].push([new THREE.UV(1-j/this.angle,h/a.length),new THREE.UV(1-j/this.angle,(h+1)/a.length),new THREE.UV(1-(j-c)/this.angle,(h+1)/a.length),new THREE.UV(1-(j-c)/this.angle,h/a.length)])}e=f;f=[]}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Lathe.prototype=new THREE.Geometry;THREE.Lathe.prototype.constructor=THREE.Lathe;
THREE.Plane=function(a,c,b,e){THREE.Geometry.call(this);var f,d=a/2,g=c/2;b=b||1;e=e||1;var h=b+1,j=e+1;a/=b;var l=c/e;for(f=0;f<j;f++)for(c=0;c<h;c++)this.vertices.push(new THREE.Vertex(new THREE.Vector3(c*a-d,-(f*l-g),0)));for(f=0;f<e;f++)for(c=0;c<b;c++){this.faces.push(new THREE.Face4(c+h*f,c+h*(f+1),c+1+h*(f+1),c+1+h*f));this.faceVertexUvs[0].push([new THREE.UV(c/b,f/e),new THREE.UV(c/b,(f+1)/e),new THREE.UV((c+1)/b,(f+1)/e),new THREE.UV((c+1)/b,f/e)])}this.computeCentroids();this.computeFaceNormals()};
THREE.Plane.prototype=new THREE.Geometry;THREE.Plane.prototype.constructor=THREE.Plane;
THREE.Sphere=function(a,c,b){THREE.Geometry.call(this);var e,f=Math.PI,d=Math.max(3,c||8),g=Math.max(2,b||6);c=[];for(b=0;b<g+1;b++){e=b/g;var h=a*Math.cos(e*f),j=a*Math.sin(e*f),l=[],k=0;for(e=0;e<d;e++){var m=2*e/d,p=j*Math.sin(m*f);m=j*Math.cos(m*f);(b==0||b==g)&&e>0||(k=this.vertices.push(new THREE.Vertex(new THREE.Vector3(m,h,p)))-1);l.push(k)}c.push(l)}var n,v,A;f=c.length;for(b=0;b<f;b++){d=c[b].length;if(b>0)for(e=0;e<d;e++){l=e==d-1;g=c[b][l?0:e+1];h=c[b][l?d-1:e];j=c[b-1][l?d-1:e];l=c[b-
1][l?0:e+1];p=b/(f-1);n=(b-1)/(f-1);v=(e+1)/d;m=e/d;k=new THREE.UV(1-v,p);p=new THREE.UV(1-m,p);m=new THREE.UV(1-m,n);var w=new THREE.UV(1-v,n);if(b<c.length-1){n=this.vertices[g].position.clone();v=this.vertices[h].position.clone();A=this.vertices[j].position.clone();n.normalize();v.normalize();A.normalize();this.faces.push(new THREE.Face3(g,h,j,[new THREE.Vector3(n.x,n.y,n.z),new THREE.Vector3(v.x,v.y,v.z),new THREE.Vector3(A.x,A.y,A.z)]));this.faceVertexUvs[0].push([k,p,m])}if(b>1){n=this.vertices[g].position.clone();
v=this.vertices[j].position.clone();A=this.vertices[l].position.clone();n.normalize();v.normalize();A.normalize();this.faces.push(new THREE.Face3(g,j,l,[new THREE.Vector3(n.x,n.y,n.z),new THREE.Vector3(v.x,v.y,v.z),new THREE.Vector3(A.x,A.y,A.z)]));this.faceVertexUvs[0].push([k,m,w])}}}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals();this.boundingSphere={radius:a}};THREE.Sphere.prototype=new THREE.Geometry;THREE.Sphere.prototype.constructor=THREE.Sphere;
THREE.Torus=function(a,c,b,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=c||40;this.segmentsR=b||8;this.segmentsT=e||6;a=[];for(c=0;c<=this.segmentsR;++c)for(b=0;b<=this.segmentsT;++b){e=b/this.segmentsT*2*Math.PI;var f=c/this.segmentsR*2*Math.PI;this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius+this.tube*Math.cos(f))*Math.cos(e),(this.radius+this.tube*Math.cos(f))*Math.sin(e),this.tube*Math.sin(f))));a.push([b/this.segmentsT,1-c/this.segmentsR])}for(c=1;c<=this.segmentsR;++c)for(b=
1;b<=this.segmentsT;++b){e=(this.segmentsT+1)*c+b;f=(this.segmentsT+1)*c+b-1;var d=(this.segmentsT+1)*(c-1)+b-1,g=(this.segmentsT+1)*(c-1)+b;this.faces.push(new THREE.Face4(e,f,d,g));this.faceVertexUvs[0].push([new THREE.UV(a[e][0],a[e][1]),new THREE.UV(a[f][0],a[f][1]),new THREE.UV(a[d][0],a[d][1]),new THREE.UV(a[g][0],a[g][1])])}delete a;this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Torus.prototype=new THREE.Geometry;THREE.Torus.prototype.constructor=THREE.Torus;
THREE.TorusKnot=function(a,c,b,e,f,d,g){function h(m,p,n,v,A,w){p=n/v*m;n=Math.cos(p);return new THREE.Vector3(A*(2+n)*0.5*Math.cos(m),A*(2+n)*Math.sin(m)*0.5,w*A*Math.sin(p)*0.5)}THREE.Geometry.call(this);this.radius=a||200;this.tube=c||40;this.segmentsR=b||64;this.segmentsT=e||8;this.p=f||2;this.q=d||3;this.heightScale=g||1;this.grid=Array(this.segmentsR);b=new THREE.Vector3;e=new THREE.Vector3;d=new THREE.Vector3;for(a=0;a<this.segmentsR;++a){this.grid[a]=Array(this.segmentsT);for(c=0;c<this.segmentsT;++c){var j=
a/this.segmentsR*2*this.p*Math.PI;g=c/this.segmentsT*2*Math.PI;f=h(j,g,this.q,this.p,this.radius,this.heightScale);j=h(j+0.01,g,this.q,this.p,this.radius,this.heightScale);b.x=j.x-f.x;b.y=j.y-f.y;b.z=j.z-f.z;e.x=j.x+f.x;e.y=j.y+f.y;e.z=j.z+f.z;d.cross(b,e);e.cross(d,b);d.normalize();e.normalize();j=-this.tube*Math.cos(g);g=this.tube*Math.sin(g);f.x+=j*e.x+g*d.x;f.y+=j*e.y+g*d.y;f.z+=j*e.z+g*d.z;this.grid[a][c]=this.vertices.push(new THREE.Vertex(new THREE.Vector3(f.x,f.y,f.z)))-1}}for(a=0;a<this.segmentsR;++a)for(c=
0;c<this.segmentsT;++c){e=(a+1)%this.segmentsR;d=(c+1)%this.segmentsT;f=this.grid[a][c];b=this.grid[e][c];e=this.grid[e][d];d=this.grid[a][d];g=new THREE.UV(a/this.segmentsR,c/this.segmentsT);j=new THREE.UV((a+1)/this.segmentsR,c/this.segmentsT);var l=new THREE.UV((a+1)/this.segmentsR,(c+1)/this.segmentsT),k=new THREE.UV(a/this.segmentsR,(c+1)/this.segmentsT);this.faces.push(new THREE.Face4(f,b,e,d));this.faceVertexUvs[0].push([g,j,l,k])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};
THREE.TorusKnot.prototype=new THREE.Geometry;THREE.TorusKnot.prototype.constructor=THREE.TorusKnot;THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var c="Loaded ";c+=a.total?(100*a.loaded/a.total).toFixed(0)+"%":(a.loaded/1E3).toFixed(2)+" KB";
this.statusDomElement.innerHTML=c},extractUrlbase:function(a){a=a.split("/");a.pop();return a.join("/")},init_materials:function(a,c,b){a.materials=[];for(var e=0;e<c.length;++e)a.materials[e]=[THREE.Loader.prototype.createMaterial(c[e],b)]},createMaterial:function(a,c){function b(h){h=Math.log(h)/Math.LN2;return Math.floor(h)==h}function e(h,j){var l=new Image;l.onload=function(){if(!b(this.width)||!b(this.height)){var k=Math.pow(2,Math.round(Math.log(this.width)/Math.LN2)),m=Math.pow(2,Math.round(Math.log(this.height)/
Math.LN2));h.image.width=k;h.image.height=m;h.image.getContext("2d").drawImage(this,0,0,k,m)}else h.image=this;h.needsUpdate=!0};l.src=j}var f,d,g;f="MeshLambertMaterial";d={color:15658734,opacity:1,map:null,lightMap:null,wireframe:a.wireframe};if(a.shading)if(a.shading=="Phong")f="MeshPhongMaterial";else a.shading=="Basic"&&(f="MeshBasicMaterial");if(a.blending)if(a.blending=="Additive")d.blending=THREE.AdditiveBlending;else if(a.blending=="Subtractive")d.blending=THREE.SubtractiveBlending;else if(a.blending==
"Multiply")d.blending=THREE.MultiplyBlending;if(a.transparent!==undefined||a.opacity<1)d.transparent=a.transparent;if(a.depthTest!==undefined)d.depthTest=a.depthTest;if(a.vertexColors!==undefined)if(a.vertexColors=="face")d.vertexColors=THREE.FaceColors;else if(a.vertexColors)d.vertexColors=THREE.VertexColors;if(a.mapDiffuse&&c){g=document.createElement("canvas");d.map=new THREE.Texture(g);d.map.sourceFile=a.mapDiffuse;e(d.map,c+"/"+a.mapDiffuse)}else if(a.colorDiffuse){g=(a.colorDiffuse[0]*255<<
16)+(a.colorDiffuse[1]*255<<8)+a.colorDiffuse[2]*255;d.color=g;d.opacity=a.transparency}else if(a.DbgColor)d.color=a.DbgColor;if(a.mapLightmap&&c){g=document.createElement("canvas");d.lightMap=new THREE.Texture(g);d.lightMap.sourceFile=a.mapLightmap;e(d.lightMap,c+"/"+a.mapLightmap)}return new THREE[f](d)}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a)};THREE.JSONLoader.prototype=new THREE.Loader;THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.supr=THREE.Loader.prototype;
THREE.JSONLoader.prototype.load=function(a){var c=this,b=a.model,e=a.callback,f=a.texture_path?a.texture_path:this.extractUrlbase(b);a=new Worker(b);a.onmessage=function(d){c.createModel(d.data,e,f);c.onLoadComplete()};this.onLoadStart();a.postMessage((new Date).getTime())};
THREE.JSONLoader.prototype.createModel=function(a,c,b){var e=new THREE.Geometry,f=a.scale!==undefined?a.scale:1;this.init_materials(e,a.materials,b);(function(d){if(a.version===undefined||a.version!=2)console.error("Deprecated file format.");else{var g,h,j,l,k,m,p,n,v,A,w,u,y,o,z=a.faces;m=a.vertices;var B=a.normals,I=a.colors,K=0;for(g=0;g<a.uvs.length;g++)a.uvs[g].length&&K++;for(g=0;g<K;g++){e.faceUvs[g]=[];e.faceVertexUvs[g]=[]}l=0;for(k=m.length;l<k;){p=new THREE.Vertex;p.position.x=m[l++]/d;
p.position.y=m[l++]/d;p.position.z=m[l++]/d;e.vertices.push(p)}l=0;for(k=z.length;l<k;){d=z[l++];m=d&1;j=d&2;g=d&4;h=d&8;n=d&16;p=d&32;A=d&64;d&=128;if(m){w=new THREE.Face4;w.a=z[l++];w.b=z[l++];w.c=z[l++];w.d=z[l++];m=4}else{w=new THREE.Face3;w.a=z[l++];w.b=z[l++];w.c=z[l++];m=3}if(j){j=z[l++];w.materials=e.materials[j]}j=e.faces.length;if(g)for(g=0;g<K;g++){u=a.uvs[g];v=z[l++];o=u[v*2];v=u[v*2+1];e.faceUvs[g][j]=new THREE.UV(o,v)}if(h)for(g=0;g<K;g++){u=a.uvs[g];y=[];for(h=0;h<m;h++){v=z[l++];o=
u[v*2];v=u[v*2+1];y[h]=new THREE.UV(o,v)}e.faceVertexUvs[g][j]=y}if(n){n=z[l++]*3;h=new THREE.Vector3;h.x=B[n++];h.y=B[n++];h.z=B[n];w.normal=h}if(p)for(g=0;g<m;g++){n=z[l++]*3;h=new THREE.Vector3;h.x=B[n++];h.y=B[n++];h.z=B[n];w.vertexNormals.push(h)}if(A){p=z[l++];p=new THREE.Color(I[p]);w.color=p}if(d)for(g=0;g<m;g++){p=z[l++];p=new THREE.Color(I[p]);w.vertexColors.push(p)}e.faces.push(w)}}})(f);(function(){var d,g,h,j;if(a.skinWeights){d=0;for(g=a.skinWeights.length;d<g;d+=2){h=a.skinWeights[d];
j=a.skinWeights[d+1];e.skinWeights.push(new THREE.Vector4(h,j,0,0))}}if(a.skinIndices){d=0;for(g=a.skinIndices.length;d<g;d+=2){h=a.skinIndices[d];j=a.skinIndices[d+1];e.skinIndices.push(new THREE.Vector4(h,j,0,0))}}e.bones=a.bones;e.animation=a.animation})();(function(d){if(a.morphTargets!==undefined){var g,h,j,l,k,m,p,n,v;g=0;for(h=a.morphTargets.length;g<h;g++){e.morphTargets[g]={};e.morphTargets[g].name=a.morphTargets[g].name;e.morphTargets[g].vertices=[];n=e.morphTargets[g].vertices;v=a.morphTargets[g].vertices;
j=0;for(l=v.length;j<l;j+=3){k=v[j]/d;m=v[j+1]/d;p=v[j+2]/d;n.push(new THREE.Vertex(new THREE.Vector3(k,m,p)))}}}if(a.morphColors!==undefined){g=0;for(h=a.morphColors.length;g<h;g++){e.morphColors[g]={};e.morphColors[g].name=a.morphColors[g].name;e.morphColors[g].colors=[];l=e.morphColors[g].colors;k=a.morphColors[g].colors;d=0;for(j=k.length;d<j;d+=3){m=new THREE.Color(16755200);m.setRGB(k[d],k[d+1],k[d+2]);l.push(m)}}}})(f);(function(){if(a.edges!==undefined){var d,g,h;for(d=0;d<a.edges.length;d+=
2){g=a.edges[d];h=a.edges[d+1];e.edges.push(new THREE.Edge(e.vertices[g],e.vertices[h],g,h))}}})();e.computeCentroids();e.computeFaceNormals();e.computeEdgeFaces();c(e)};THREE.BinaryLoader=function(a){THREE.Loader.call(this,a)};THREE.BinaryLoader.prototype=new THREE.Loader;THREE.BinaryLoader.prototype.constructor=THREE.BinaryLoader;THREE.BinaryLoader.prototype.supr=THREE.Loader.prototype;
THREE.BinaryLoader.prototype={load:function(a){var c=a.model,b=a.callback,e=a.texture_path?a.texture_path:THREE.Loader.prototype.extractUrlbase(c),f=a.bin_path?a.bin_path:THREE.Loader.prototype.extractUrlbase(c);a=(new Date).getTime();c=new Worker(c);var d=this.showProgress?THREE.Loader.prototype.updateProgress:null;c.onmessage=function(g){THREE.BinaryLoader.prototype.loadAjaxBuffers(g.data.buffers,g.data.materials,b,f,e,d)};c.onerror=function(g){alert("worker.onerror: "+g.message+"\n"+g.data);g.preventDefault()};
c.postMessage(a)},loadAjaxBuffers:function(a,c,b,e,f,d){var g=new XMLHttpRequest,h=e+"/"+a,j=0;g.onreadystatechange=function(){if(g.readyState==4)g.status==200||g.status==0?THREE.BinaryLoader.prototype.createBinModel(g.responseText,b,f,c):alert("Couldn't load ["+h+"] ["+g.status+"]");else if(g.readyState==3){if(d){j==0&&(j=g.getResponseHeader("Content-Length"));d({total:j,loaded:g.responseText.length})}}else g.readyState==2&&(j=g.getResponseHeader("Content-Length"))};g.open("GET",h,!0);g.overrideMimeType("text/plain; charset=x-user-defined");
g.setRequestHeader("Content-Type","text/plain");g.send(null)},createBinModel:function(a,c,b,e){var f=function(d){function g(t,x){var C=k(t,x),E=k(t,x+1),H=k(t,x+2),T=k(t,x+3),V=(T<<1&255|H>>7)-127;C|=(H&127)<<16|E<<8;if(C==0&&V==-127)return 0;return(1-2*(T>>7))*(1+C*Math.pow(2,-23))*Math.pow(2,V)}function h(t,x){var C=k(t,x),E=k(t,x+1),H=k(t,x+2);return(k(t,x+3)<<24)+(H<<16)+(E<<8)+C}function j(t,x){var C=k(t,x);return(k(t,x+1)<<8)+C}function l(t,x){var C=k(t,x);return C>127?C-256:C}function k(t,
x){return t.charCodeAt(x)&255}function m(t){var x,C,E;x=h(a,t);C=h(a,t+I);E=h(a,t+K);t=j(a,t+J);THREE.BinaryLoader.prototype.f3(u,x,C,E,t)}function p(t){var x,C,E,H,T,V;x=h(a,t);C=h(a,t+I);E=h(a,t+K);H=j(a,t+J);T=h(a,t+G);V=h(a,t+D);t=h(a,t+L);THREE.BinaryLoader.prototype.f3n(u,z,x,C,E,H,T,V,t)}function n(t){var x,C,E,H;x=h(a,t);C=h(a,t+R);E=h(a,t+O);H=h(a,t+S);t=j(a,t+P);THREE.BinaryLoader.prototype.f4(u,x,C,E,H,t)}function v(t){var x,C,E,H,T,V,ca,da;x=h(a,t);C=h(a,t+R);E=h(a,t+O);H=h(a,t+S);T=j(a,
t+P);V=h(a,t+F);ca=h(a,t+M);da=h(a,t+Q);t=h(a,t+U);THREE.BinaryLoader.prototype.f4n(u,z,x,C,E,H,T,V,ca,da,t)}function A(t){var x,C;x=h(a,t);C=h(a,t+N);t=h(a,t+W);THREE.BinaryLoader.prototype.uv3(u.faceVertexUvs[0],B[x*2],B[x*2+1],B[C*2],B[C*2+1],B[t*2],B[t*2+1])}function w(t){var x,C,E;x=h(a,t);C=h(a,t+ea);E=h(a,t+fa);t=h(a,t+ga);THREE.BinaryLoader.prototype.uv4(u.faceVertexUvs[0],B[x*2],B[x*2+1],B[C*2],B[C*2+1],B[E*2],B[E*2+1],B[t*2],B[t*2+1])}var u=this,y=0,o,z=[],B=[],I,K,J,G,D,L,R,O,S,P,F,M,Q,
U,N,W,ea,fa,ga,Y,Z,$,aa,ba,X;THREE.Geometry.call(this);THREE.Loader.prototype.init_materials(u,e,d);o={signature:a.substr(y,8),header_bytes:k(a,y+8),vertex_coordinate_bytes:k(a,y+9),normal_coordinate_bytes:k(a,y+10),uv_coordinate_bytes:k(a,y+11),vertex_index_bytes:k(a,y+12),normal_index_bytes:k(a,y+13),uv_index_bytes:k(a,y+14),material_index_bytes:k(a,y+15),nvertices:h(a,y+16),nnormals:h(a,y+16+4),nuvs:h(a,y+16+8),ntri_flat:h(a,y+16+12),ntri_smooth:h(a,y+16+16),ntri_flat_uv:h(a,y+16+20),ntri_smooth_uv:h(a,
y+16+24),nquad_flat:h(a,y+16+28),nquad_smooth:h(a,y+16+32),nquad_flat_uv:h(a,y+16+36),nquad_smooth_uv:h(a,y+16+40)};y+=o.header_bytes;I=o.vertex_index_bytes;K=o.vertex_index_bytes*2;J=o.vertex_index_bytes*3;G=o.vertex_index_bytes*3+o.material_index_bytes;D=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes;L=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*2;R=o.vertex_index_bytes;O=o.vertex_index_bytes*2;S=o.vertex_index_bytes*3;P=o.vertex_index_bytes*4;F=o.vertex_index_bytes*
4+o.material_index_bytes;M=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes;Q=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*2;U=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*3;N=o.uv_index_bytes;W=o.uv_index_bytes*2;ea=o.uv_index_bytes;fa=o.uv_index_bytes*2;ga=o.uv_index_bytes*3;d=o.vertex_index_bytes*3+o.material_index_bytes;X=o.vertex_index_bytes*4+o.material_index_bytes;Y=o.ntri_flat*d;Z=o.ntri_smooth*(d+o.normal_index_bytes*3);$=o.ntri_flat_uv*
(d+o.uv_index_bytes*3);aa=o.ntri_smooth_uv*(d+o.normal_index_bytes*3+o.uv_index_bytes*3);ba=o.nquad_flat*X;d=o.nquad_smooth*(X+o.normal_index_bytes*4);X=o.nquad_flat_uv*(X+o.uv_index_bytes*4);y+=function(t){for(var x,C,E,H=o.vertex_coordinate_bytes*3,T=t+o.nvertices*H;t<T;t+=H){x=g(a,t);C=g(a,t+o.vertex_coordinate_bytes);E=g(a,t+o.vertex_coordinate_bytes*2);THREE.BinaryLoader.prototype.v(u,x,C,E)}return o.nvertices*H}(y);y+=function(t){for(var x,C,E,H=o.normal_coordinate_bytes*3,T=t+o.nnormals*H;t<
T;t+=H){x=l(a,t);C=l(a,t+o.normal_coordinate_bytes);E=l(a,t+o.normal_coordinate_bytes*2);z.push(x/127,C/127,E/127)}return o.nnormals*H}(y);y+=function(t){for(var x,C,E=o.uv_coordinate_bytes*2,H=t+o.nuvs*E;t<H;t+=E){x=g(a,t);C=g(a,t+o.uv_coordinate_bytes);B.push(x,C)}return o.nuvs*E}(y);Y=y+Y;Z=Y+Z;$=Z+$;aa=$+aa;ba=aa+ba;d=ba+d;X=d+X;(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes,E=C+o.uv_index_bytes*3,H=t+o.ntri_flat_uv*E;for(x=t;x<H;x+=E){m(x);A(x+C)}return H-t})(Z);(function(t){var x,
C=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*3,E=C+o.uv_index_bytes*3,H=t+o.ntri_smooth_uv*E;for(x=t;x<H;x+=E){p(x);A(x+C)}return H-t})($);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes,E=C+o.uv_index_bytes*4,H=t+o.nquad_flat_uv*E;for(x=t;x<H;x+=E){n(x);w(x+C)}return H-t})(d);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*4,E=C+o.uv_index_bytes*4,H=t+o.nquad_smooth_uv*E;for(x=t;x<H;x+=E){v(x);w(x+C)}return H-t})(X);
(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes,E=t+o.ntri_flat*C;for(x=t;x<E;x+=C)m(x);return E-t})(y);(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*3,E=t+o.ntri_smooth*C;for(x=t;x<E;x+=C)p(x);return E-t})(Y);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes,E=t+o.nquad_flat*C;for(x=t;x<E;x+=C)n(x);return E-t})(aa);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*4,E=t+o.nquad_smooth*
C;for(x=t;x<E;x+=C)v(x);return E-t})(ba);this.computeCentroids();this.computeFaceNormals()};f.prototype=new THREE.Geometry;f.prototype.constructor=f;c(new f(b))},v:function(a,c,b,e){a.vertices.push(new THREE.Vertex(new THREE.Vector3(c,b,e)))},f3:function(a,c,b,e,f){a.faces.push(new THREE.Face3(c,b,e,null,null,a.materials[f]))},f4:function(a,c,b,e,f,d){a.faces.push(new THREE.Face4(c,b,e,f,null,null,a.materials[d]))},f3n:function(a,c,b,e,f,d,g,h,j){d=a.materials[d];var l=c[h*3],k=c[h*3+1];h=c[h*3+2];
var m=c[j*3],p=c[j*3+1];j=c[j*3+2];a.faces.push(new THREE.Face3(b,e,f,[new THREE.Vector3(c[g*3],c[g*3+1],c[g*3+2]),new THREE.Vector3(l,k,h),new THREE.Vector3(m,p,j)],null,d))},f4n:function(a,c,b,e,f,d,g,h,j,l,k){g=a.materials[g];var m=c[j*3],p=c[j*3+1];j=c[j*3+2];var n=c[l*3],v=c[l*3+1];l=c[l*3+2];var A=c[k*3],w=c[k*3+1];k=c[k*3+2];a.faces.push(new THREE.Face4(b,e,f,d,[new THREE.Vector3(c[h*3],c[h*3+1],c[h*3+2]),new THREE.Vector3(m,p,j),new THREE.Vector3(n,v,l),new THREE.Vector3(A,w,k)],null,g))},
uv3:function(a,c,b,e,f,d,g){var h=[];h.push(new THREE.UV(c,b));h.push(new THREE.UV(e,f));h.push(new THREE.UV(d,g));a.push(h)},uv4:function(a,c,b,e,f,d,g,h,j){var l=[];l.push(new THREE.UV(c,b));l.push(new THREE.UV(e,f));l.push(new THREE.UV(d,g));l.push(new THREE.UV(h,j));a.push(l)}};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){}};
THREE.SceneLoader.prototype={load:function(a,c){var b=this,e=new Worker(a);e.postMessage(0);var f=THREE.Loader.prototype.extractUrlbase(a);e.onmessage=function(d){function g(N,W){return W=="relativeToHTML"?N:f+"/"+N}function h(){for(n in D.objects)if(!F.objects[n]){y=D.objects[n];if(y.geometry!==undefined){if(I=F.geometries[y.geometry]){G=[];for(U=0;U<y.materials.length;U++)G[U]=F.materials[y.materials[U]];o=y.position;r=y.rotation;q=y.quaternion;s=y.scale;q=0;G.length==0&&(G[0]=new THREE.MeshFaceMaterial);
G.length>1&&(G=[new THREE.MeshFaceMaterial]);object=new THREE.Mesh(I,G);object.name=n;object.position.set(o[0],o[1],o[2]);if(q){object.quaternion.set(q[0],q[1],q[2],q[3]);object.useQuaternion=!0}else object.rotation.set(r[0],r[1],r[2]);object.scale.set(s[0],s[1],s[2]);object.visible=y.visible;F.scene.addObject(object);F.objects[n]=object;if(y.meshCollider){var N=THREE.CollisionUtils.MeshColliderWBox(object);F.scene.collisions.colliders.push(N)}if(y.castsShadow){N=new THREE.ShadowVolume(I);F.scene.addChild(N);
N.position=object.position;N.rotation=object.rotation;N.scale=object.scale}y.trigger&&y.trigger.toLowerCase()!="none"&&(F.triggers[object.name]={type:y.trigger,object:y})}}else{o=y.position;r=y.rotation;q=y.quaternion;s=y.scale;q=0;object=new THREE.Object3D;object.name=n;object.position.set(o[0],o[1],o[2]);if(q){object.quaternion.set(q[0],q[1],q[2],q[3]);object.useQuaternion=!0}else object.rotation.set(r[0],r[1],r[2]);object.scale.set(s[0],s[1],s[2]);object.visible=y.visible!==undefined?y.visible:
!1;F.scene.addObject(object);F.objects[n]=object;F.empties[n]=object}}}function j(N){return function(W){F.geometries[N]=W;h();R-=1;b.onLoadComplete();k()}}function l(N){return function(W){F.geometries[N]=W}}function k(){b.callbackProgress({totalModels:S,totalTextures:P,loadedModels:S-R,loadedTextures:P-O},F);b.onLoadProgress();R==0&&O==0&&c(F)}var m,p,n,v,A,w,u,y,o,z,B,I,K,J,G,D,L,R,O,S,P,F;D=d.data;d=new THREE.BinaryLoader;L=new THREE.JSONLoader;O=R=0;F={scene:new THREE.Scene,geometries:{},materials:{},
textures:{},objects:{},cameras:{},lights:{},fogs:{},triggers:{},empties:{}};var M=!1;for(n in D.objects){y=D.objects[n];if(y.meshCollider){M=!0;break}}if(M)F.scene.collisions=new THREE.CollisionSystem;if(D.transform){M=D.transform.position;z=D.transform.rotation;var Q=D.transform.scale;M&&F.scene.position.set(M[0],M[1],M[2]);z&&F.scene.rotation.set(z[0],z[1],z[2]);Q&&F.scene.scale.set(Q[0],Q[1],Q[2]);(M||z||Q)&&F.scene.updateMatrix()}M=function(){O-=1;k();b.onLoadComplete()};for(A in D.cameras){z=
D.cameras[A];if(z.type=="perspective")K=new THREE.Camera(z.fov,z.aspect,z.near,z.far);else if(z.type=="ortho"){K=new THREE.Camera;K.projectionMatrix=THREE.Matrix4.makeOrtho(z.left,z.right,z.top,z.bottom,z.near,z.far)}o=z.position;z=z.target;K.position.set(o[0],o[1],o[2]);K.target.position.set(z[0],z[1],z[2]);F.cameras[A]=K}for(v in D.lights){A=D.lights[v];K=A.color!==undefined?A.color:16777215;z=A.intensity!==undefined?A.intensity:1;if(A.type=="directional"){o=A.direction;light=new THREE.DirectionalLight(K,
z);light.position.set(o[0],o[1],o[2]);light.position.normalize()}else if(A.type=="point"){o=A.position;light=new THREE.PointLight(K,z);light.position.set(o[0],o[1],o[2])}F.scene.addLight(light);F.lights[v]=light}for(w in D.fogs){v=D.fogs[w];if(v.type=="linear")J=new THREE.Fog(0,v.near,v.far);else v.type=="exp2"&&(J=new THREE.FogExp2(0,v.density));z=v.color;J.color.setRGB(z[0],z[1],z[2]);F.fogs[w]=J}if(F.cameras&&D.defaults.camera)F.currentCamera=F.cameras[D.defaults.camera];if(F.fogs&&D.defaults.fog)F.scene.fog=
F.fogs[D.defaults.fog];z=D.defaults.bgcolor;F.bgColor=new THREE.Color;F.bgColor.setRGB(z[0],z[1],z[2]);F.bgColorAlpha=D.defaults.bgalpha;for(m in D.geometries){w=D.geometries[m];if(w.type=="bin_mesh"||w.type=="ascii_mesh"){R+=1;b.onLoadStart()}}S=R;for(m in D.geometries){w=D.geometries[m];if(w.type=="cube"){I=new THREE.Cube(w.width,w.height,w.depth,w.segmentsWidth,w.segmentsHeight,w.segmentsDepth,null,w.flipped,w.sides);F.geometries[m]=I}else if(w.type=="plane"){I=new THREE.Plane(w.width,w.height,
w.segmentsWidth,w.segmentsHeight);F.geometries[m]=I}else if(w.type=="sphere"){I=new THREE.Sphere(w.radius,w.segmentsWidth,w.segmentsHeight);F.geometries[m]=I}else if(w.type=="cylinder"){I=new THREE.Cylinder(w.numSegs,w.topRad,w.botRad,w.height,w.topOffset,w.botOffset);F.geometries[m]=I}else if(w.type=="torus"){I=new THREE.Torus(w.radius,w.tube,w.segmentsR,w.segmentsT);F.geometries[m]=I}else if(w.type=="icosahedron"){I=new THREE.Icosahedron(w.subdivisions);F.geometries[m]=I}else if(w.type=="bin_mesh")d.load({model:g(w.url,
D.urlBaseType),callback:j(m)});else if(w.type=="ascii_mesh")L.load({model:g(w.url,D.urlBaseType),callback:j(m)});else if(w.type=="embedded_mesh")(w=D.embeds[w.id])&&L.createModel(w,l(m),"")}for(u in D.textures){m=D.textures[u];if(m.url instanceof Array){O+=m.url.length;for(d=0;d<m.url.length;d++)b.onLoadStart()}else{O+=1;b.onLoadStart()}}P=O;for(u in D.textures){m=D.textures[u];if(m.mapping!=undefined&&THREE[m.mapping]!=undefined)m.mapping=new THREE[m.mapping];if(m.url instanceof Array){d=[];for(var U=
0;U<m.url.length;U++)d[U]=g(m.url[U],D.urlBaseType);d=THREE.ImageUtils.loadTextureCube(d,m.mapping,M)}else{d=THREE.ImageUtils.loadTexture(g(m.url,D.urlBaseType),m.mapping,M);if(THREE[m.minFilter]!=undefined)d.minFilter=THREE[m.minFilter];if(THREE[m.magFilter]!=undefined)d.magFilter=THREE[m.magFilter]}F.textures[u]=d}for(p in D.materials){u=D.materials[p];for(B in u.parameters)if(B=="envMap"||B=="map"||B=="lightMap")u.parameters[B]=F.textures[u.parameters[B]];else if(B=="shading")u.parameters[B]=u.parameters[B]==
"flat"?THREE.FlatShading:THREE.SmoothShading;else if(B=="blending")u.parameters[B]=THREE[u.parameters[B]]?THREE[u.parameters[B]]:THREE.NormalBlending;else if(B=="combine")u.parameters[B]=u.parameters[B]=="MixOperation"?THREE.MixOperation:THREE.MultiplyOperation;else if(B=="vertexColors")if(u.parameters[B]=="face")u.parameters[B]=THREE.FaceColors;else if(u.parameters[B])u.parameters[B]=THREE.VertexColors;if(u.parameters.opacity!==undefined&&u.parameters.opacity<1)u.parameters.transparent=!0;u=new THREE[u.type](u.parameters);
F.materials[p]=u}h();b.callbackSync(F)}}};
THREE.MarchingCubes=function(a,c){THREE.Object3D.call(this);this.materials=c instanceof Array?c:[c];this.init=function(b){this.isolation=80;this.size=b;this.size2=this.size*this.size;this.size3=this.size2*this.size;this.halfsize=this.size/2;this.delta=2/this.size;this.yd=this.size;this.zd=this.size2;this.field=new Float32Array(this.size3);this.normal_cache=new Float32Array(this.size3*3);this.vlist=new Float32Array(36);this.nlist=new Float32Array(36);this.firstDraw=!0;this.maxCount=4096;this.count=
0;this.hasPos=!1;this.hasNormal=!1;this.positionArray=new Float32Array(this.maxCount*3);this.normalArray=new Float32Array(this.maxCount*3)};this.lerp=function(b,e,f){return b+(e-b)*f};this.VIntX=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h+g*this.delta;e[d+1]=j;e[d+2]=l;f[d]=this.lerp(k[b],k[b+3],g);f[d+1]=this.lerp(k[b+1],k[b+4],g);f[d+2]=this.lerp(k[b+2],k[b+5],g)};this.VIntY=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h;e[d+1]=j+g*this.delta;e[d+
2]=l;e=b+this.yd*3;f[d]=this.lerp(k[b],k[e],g);f[d+1]=this.lerp(k[b+1],k[e+1],g);f[d+2]=this.lerp(k[b+2],k[e+2],g)};this.VIntZ=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h;e[d+1]=j;e[d+2]=l+g*this.delta;e=b+this.zd*3;f[d]=this.lerp(k[b],k[e],g);f[d+1]=this.lerp(k[b+1],k[e+1],g);f[d+2]=this.lerp(k[b+2],k[e+2],g)};this.compNorm=function(b){var e=b*3;if(this.normal_cache[e]==0){this.normal_cache[e]=this.field[b-1]-this.field[b+1];this.normal_cache[e+1]=this.field[b-this.yd]-
this.field[b+this.yd];this.normal_cache[e+2]=this.field[b-this.zd]-this.field[b+this.zd]}};this.polygonize=function(b,e,f,d,g,h){var j=d+1,l=d+this.yd,k=d+this.zd,m=j+this.yd,p=j+this.zd,n=d+this.yd+this.zd,v=j+this.yd+this.zd,A=0,w=this.field[d],u=this.field[j],y=this.field[l],o=this.field[m],z=this.field[k],B=this.field[p],I=this.field[n],K=this.field[v];w<g&&(A|=1);u<g&&(A|=2);y<g&&(A|=8);o<g&&(A|=4);z<g&&(A|=16);B<g&&(A|=32);I<g&&(A|=128);K<g&&(A|=64);var J=THREE.edgeTable[A];if(J==0)return 0;
var G=this.delta,D=b+G,L=e+G;G=f+G;if(J&1){this.compNorm(d);this.compNorm(j);this.VIntX(d*3,this.vlist,this.nlist,0,g,b,e,f,w,u)}if(J&2){this.compNorm(j);this.compNorm(m);this.VIntY(j*3,this.vlist,this.nlist,3,g,D,e,f,u,o)}if(J&4){this.compNorm(l);this.compNorm(m);this.VIntX(l*3,this.vlist,this.nlist,6,g,b,L,f,y,o)}if(J&8){this.compNorm(d);this.compNorm(l);this.VIntY(d*3,this.vlist,this.nlist,9,g,b,e,f,w,y)}if(J&16){this.compNorm(k);this.compNorm(p);this.VIntX(k*3,this.vlist,this.nlist,12,g,b,e,G,
z,B)}if(J&32){this.compNorm(p);this.compNorm(v);this.VIntY(p*3,this.vlist,this.nlist,15,g,D,e,G,B,K)}if(J&64){this.compNorm(n);this.compNorm(v);this.VIntX(n*3,this.vlist,this.nlist,18,g,b,L,G,I,K)}if(J&128){this.compNorm(k);this.compNorm(n);this.VIntY(k*3,this.vlist,this.nlist,21,g,b,e,G,z,I)}if(J&256){this.compNorm(d);this.compNorm(k);this.VIntZ(d*3,this.vlist,this.nlist,24,g,b,e,f,w,z)}if(J&512){this.compNorm(j);this.compNorm(p);this.VIntZ(j*3,this.vlist,this.nlist,27,g,D,e,f,u,B)}if(J&1024){this.compNorm(m);
this.compNorm(v);this.VIntZ(m*3,this.vlist,this.nlist,30,g,D,L,f,o,K)}if(J&2048){this.compNorm(l);this.compNorm(n);this.VIntZ(l*3,this.vlist,this.nlist,33,g,b,L,f,y,I)}A<<=4;for(g=d=0;THREE.triTable[A+g]!=-1;){b=A+g;e=b+1;f=b+2;this.posnormtriv(this.vlist,this.nlist,3*THREE.triTable[b],3*THREE.triTable[e],3*THREE.triTable[f],h);g+=3;d++}return d};this.posnormtriv=function(b,e,f,d,g,h){var j=this.count*3;this.positionArray[j]=b[f];this.positionArray[j+1]=b[f+1];this.positionArray[j+2]=b[f+2];this.positionArray[j+
3]=b[d];this.positionArray[j+4]=b[d+1];this.positionArray[j+5]=b[d+2];this.positionArray[j+6]=b[g];this.positionArray[j+7]=b[g+1];this.positionArray[j+8]=b[g+2];this.normalArray[j]=e[f];this.normalArray[j+1]=e[f+1];this.normalArray[j+2]=e[f+2];this.normalArray[j+3]=e[d];this.normalArray[j+4]=e[d+1];this.normalArray[j+5]=e[d+2];this.normalArray[j+6]=e[g];this.normalArray[j+7]=e[g+1];this.normalArray[j+8]=e[g+2];this.hasPos=!0;this.hasNormal=!0;this.count+=3;this.count>=this.maxCount-3&&h(this)};this.begin=
function(){this.count=0;this.hasPos=!1;this.hasNormal=!1};this.end=function(b){if(this.count!=0){for(var e=this.count*3;e<this.positionArray.length;e++)this.positionArray[e]=0;b(this)}};this.addBall=function(b,e,f,d,g){var h=this.size*Math.sqrt(d/g),j=f*this.size,l=e*this.size,k=b*this.size,m=Math.floor(j-h);m<1&&(m=1);j=Math.floor(j+h);j>this.size-1&&(j=this.size-1);var p=Math.floor(l-h);p<1&&(p=1);l=Math.floor(l+h);l>this.size-1&&(l=this.size-1);var n=Math.floor(k-h);n<1&&(n=1);h=Math.floor(k+h);
h>this.size-1&&(h=this.size-1);for(var v,A,w,u,y,o;m<j;m++){k=this.size2*m;A=m/this.size-f;y=A*A;for(A=p;A<l;A++){w=k+this.size*A;v=A/this.size-e;o=v*v;for(v=n;v<h;v++){u=v/this.size-b;u=d/(1.0E-6+u*u+o+y)-g;u>0&&(this.field[w+v]+=u)}}}};this.addPlaneX=function(b,e){var f,d,g,h,j,l=this.size,k=this.yd,m=this.zd,p=this.field,n=l*Math.sqrt(b/e);n>l&&(n=l);for(f=0;f<n;f++){d=f/l;d*=d;h=b/(1.0E-4+d)-e;if(h>0)for(d=0;d<l;d++){j=f+d*k;for(g=0;g<l;g++)p[m*g+j]+=h}}};this.addPlaneY=function(b,e){var f,d,
g,h,j,l,k=this.size,m=this.yd,p=this.zd,n=this.field,v=k*Math.sqrt(b/e);v>k&&(v=k);for(d=0;d<v;d++){f=d/k;f*=f;h=b/(1.0E-4+f)-e;if(h>0){j=d*m;for(f=0;f<k;f++){l=j+f;for(g=0;g<k;g++)n[p*g+l]+=h}}}};this.addPlaneZ=function(b,e){var f,d,g,h,j,l;size=this.size;yd=this.yd;zd=this.zd;field=this.field;dist=size*Math.sqrt(b/e);dist>size&&(dist=size);for(g=0;g<dist;g++){f=g/size;f*=f;h=b/(1.0E-4+f)-e;if(h>0){j=zd*g;for(d=0;d<size;d++){l=j+d*yd;for(f=0;f<size;f++)field[l+f]+=h}}}};this.reset=function(){var b;
for(b=0;b<this.size3;b++){this.normal_cache[b*3]=0;this.field[b]=0}};this.render=function(b){this.begin();var e,f,d,g,h,j,l,k,m,p=this.size-2;for(g=1;g<p;g++){m=this.size2*g;l=(g-this.halfsize)/this.halfsize;for(d=1;d<p;d++){k=m+this.size*d;j=(d-this.halfsize)/this.halfsize;for(f=1;f<p;f++){h=(f-this.halfsize)/this.halfsize;e=k+f;this.polygonize(h,j,l,e,this.isolation,b)}}}this.end(b)};this.generateGeometry=function(){var b=0,e=new THREE.Geometry,f=[];this.render(function(d){var g,h,j,l,k,m,p,n;for(g=
0;g<d.count;g++){p=g*3;k=p+1;n=p+2;h=d.positionArray[p];j=d.positionArray[k];l=d.positionArray[n];m=new THREE.Vector3(h,j,l);h=d.normalArray[p];j=d.normalArray[k];l=d.normalArray[n];p=new THREE.Vector3(h,j,l);p.normalize();k=new THREE.Vertex(m);e.vertices.push(k);f.push(p)}nfaces=d.count/3;for(g=0;g<nfaces;g++){p=(b+g)*3;k=p+1;n=p+2;m=f[p];h=f[k];j=f[n];p=new THREE.Face3(p,k,n,[m,h,j]);e.faces.push(p)}b+=nfaces;d.count=0});return e};this.init(a)};THREE.MarchingCubes.prototype=new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor=THREE.MarchingCubes;
THREE.edgeTable=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,
1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,
419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]);
THREE.triTable=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,
-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,
8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,
-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,
5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,
-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,
10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,
6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,
8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,
2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,
-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,
-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,
-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,
-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,
2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,
4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,
2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
THREE.Trident=function(a){function c(d){return new THREE.Mesh(new THREE.Cylinder(30,0.1,a.length/20,a.length/5),new THREE.MeshBasicMaterial({color:d}))}function b(d,g){var h=new THREE.Geometry;h.vertices=[new THREE.Vertex,new THREE.Vertex(d)];return new THREE.Line(h,new THREE.LineBasicMaterial({color:g}))}THREE.Object3D.call(this);var e=Math.PI/2,f;a=a||THREE.Trident.defaultParams;if(a!==THREE.Trident.defaultParams)for(f in THREE.Trident.defaultParams)a.hasOwnProperty(f)||(a[f]=THREE.Trident.defaultParams[f]);
this.scale=new THREE.Vector3(a.scale,a.scale,a.scale);this.addChild(b(new THREE.Vector3(a.length,0,0),a.xAxisColor));this.addChild(b(new THREE.Vector3(0,a.length,0),a.yAxisColor));this.addChild(b(new THREE.Vector3(0,0,a.length),a.zAxisColor));if(a.showArrows){f=c(a.xAxisColor);f.rotation.y=-e;f.position.x=a.length;this.addChild(f);f=c(a.yAxisColor);f.rotation.x=e;f.position.y=a.length;this.addChild(f);f=c(a.zAxisColor);f.rotation.y=Math.PI;f.position.z=a.length;this.addChild(f)}};
THREE.Trident.prototype=new THREE.Object3D;THREE.Trident.prototype.constructor=THREE.Trident;THREE.Trident.defaultParams={xAxisColor:16711680,yAxisColor:65280,zAxisColor:255,showArrows:!0,length:100,scale:1};THREE.PlaneCollider=function(a,c){this.point=a;this.normal=c};THREE.SphereCollider=function(a,c){this.center=a;this.radius=c;this.radiusSq=c*c};THREE.BoxCollider=function(a,c){this.min=a;this.max=c;this.dynamic=!0;this.normal=new THREE.Vector3};
THREE.MeshCollider=function(a,c,b,e){this.vertices=a;this.faces=c;this.normals=b;this.box=e;this.numFaces=this.faces.length;this.normal=new THREE.Vector3};THREE.CollisionSystem=function(){this.collisionNormal=new THREE.Vector3;this.colliders=[];this.hits=[]};THREE.Collisions=new THREE.CollisionSystem;THREE.CollisionSystem.prototype.merge=function(a){this.colliders=this.colliders.concat(a.colliders);this.hits=this.hits.concat(a.hits)};
THREE.CollisionSystem.prototype.rayCastAll=function(a){a.direction.normalize();this.hits.length=0;var c,b,e,f,d=0;c=0;for(b=this.colliders.length;c<b;c++){f=this.colliders[c];e=this.rayCast(a,f);if(e<Number.MAX_VALUE){f.distance=e;e>d?this.hits.push(f):this.hits.unshift(f);d=e}}return this.hits};
THREE.CollisionSystem.prototype.rayCastNearest=function(a){var c=this.rayCastAll(a);if(c.length==0)return null;for(var b=0;c[b]instanceof THREE.MeshCollider;){var e=this.rayMesh(a,c[b]);if(e<Number.MAX_VALUE){c[b].distance=e;break}b++}if(b>c.length)return null;return c[b]};
THREE.CollisionSystem.prototype.rayCast=function(a,c){if(c instanceof THREE.PlaneCollider)return this.rayPlane(a,c);else if(c instanceof THREE.SphereCollider)return this.raySphere(a,c);else if(c instanceof THREE.BoxCollider)return this.rayBox(a,c);else if(c instanceof THREE.MeshCollider&&c.box)return this.rayBox(a,c.box)};
THREE.CollisionSystem.prototype.rayMesh=function(a,c){for(var b=this.makeRayLocal(a,c.mesh),e=Number.MAX_VALUE,f=0;f<c.numFaces/3;f++){var d=f*3;d=this.rayTriangle(b,c.vertices[c.faces[d+0]],c.vertices[c.faces[d+1]],c.vertices[c.faces[d+2]],e,this.collisionNormal);if(d<e){e=d;c.normal.copy(this.collisionNormal);c.normal.normalize()}}return e};
THREE.CollisionSystem.prototype.rayTriangle=function(a,c,b,e,f,d){var g=THREE.CollisionSystem.__v1,h=THREE.CollisionSystem.__v2;d.set(0,0,0);g.sub(b,c);h.sub(e,b);d.cross(g,h);h=d.dot(a.direction);if(!(h<0))return Number.MAX_VALUE;g=d.dot(c)-d.dot(a.origin);if(!(g<=0))return Number.MAX_VALUE;if(!(g>=h*f))return Number.MAX_VALUE;g/=h;h=THREE.CollisionSystem.__v3;h.copy(a.direction);h.multiplyScalar(g);h.addSelf(a.origin);if(Math.abs(d.x)>Math.abs(d.y))if(Math.abs(d.x)>Math.abs(d.z)){a=h.y-c.y;d=b.y-
c.y;f=e.y-c.y;h=h.z-c.z;b=b.z-c.z;e=e.z-c.z}else{a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.y-c.y;b=b.y-c.y;e=e.y-c.y}else if(Math.abs(d.y)>Math.abs(d.z)){a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.z-c.z;b=b.z-c.z;e=e.z-c.z}else{a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.y-c.y;b=b.y-c.y;e=e.y-c.y}c=d*e-b*f;if(c==0)return Number.MAX_VALUE;c=1/c;e=(a*e-h*f)*c;if(!(e>=0))return Number.MAX_VALUE;c*=d*h-b*a;if(!(c>=0))return Number.MAX_VALUE;if(!(1-e-c>=0))return Number.MAX_VALUE;return g};
THREE.CollisionSystem.prototype.makeRayLocal=function(a,c){var b=THREE.CollisionSystem.__m;THREE.Matrix4.makeInvert(c.matrixWorld,b);var e=THREE.CollisionSystem.__r;e.origin.copy(a.origin);e.direction.copy(a.direction);b.multiplyVector3(e.origin);b.rotateAxis(e.direction);e.direction.normalize();return e};
THREE.CollisionSystem.prototype.rayBox=function(a,c){var b;if(c.dynamic&&c.mesh&&c.mesh.matrixWorld)b=this.makeRayLocal(a,c.mesh);else{b=THREE.CollisionSystem.__r;b.origin.copy(a.origin);b.direction.copy(a.direction)}var e=0,f=0,d=0,g=0,h=0,j=0,l=!0;if(b.origin.x<c.min.x){e=c.min.x-b.origin.x;e/=b.direction.x;l=!1;g=-1}else if(b.origin.x>c.max.x){e=c.max.x-b.origin.x;e/=b.direction.x;l=!1;g=1}if(b.origin.y<c.min.y){f=c.min.y-b.origin.y;f/=b.direction.y;l=!1;h=-1}else if(b.origin.y>c.max.y){f=c.max.y-
b.origin.y;f/=b.direction.y;l=!1;h=1}if(b.origin.z<c.min.z){d=c.min.z-b.origin.z;d/=b.direction.z;l=!1;j=-1}else if(b.origin.z>c.max.z){d=c.max.z-b.origin.z;d/=b.direction.z;l=!1;j=1}if(l)return-1;l=0;if(f>e){l=1;e=f}if(d>e){l=2;e=d}switch(l){case 0:h=b.origin.y+b.direction.y*e;if(h<c.min.y||h>c.max.y)return Number.MAX_VALUE;b=b.origin.z+b.direction.z*e;if(b<c.min.z||b>c.max.z)return Number.MAX_VALUE;c.normal.set(g,0,0);break;case 1:g=b.origin.x+b.direction.x*e;if(g<c.min.x||g>c.max.x)return Number.MAX_VALUE;
b=b.origin.z+b.direction.z*e;if(b<c.min.z||b>c.max.z)return Number.MAX_VALUE;c.normal.set(0,h,0);break;case 2:g=b.origin.x+b.direction.x*e;if(g<c.min.x||g>c.max.x)return Number.MAX_VALUE;h=b.origin.y+b.direction.y*e;if(h<c.min.y||h>c.max.y)return Number.MAX_VALUE;c.normal.set(0,0,j)}return e};THREE.CollisionSystem.prototype.rayPlane=function(a,c){var b=a.direction.dot(c.normal),e=c.point.dot(c.normal);if(b<0)b=(e-a.origin.dot(c.normal))/b;else return Number.MAX_VALUE;return b>0?b:Number.MAX_VALUE};
THREE.CollisionSystem.prototype.raySphere=function(a,c){var b=c.center.clone().subSelf(a.origin);if(b.lengthSq<c.radiusSq)return-1;var e=b.dot(a.direction.clone());if(e<=0)return Number.MAX_VALUE;b=c.radiusSq-(b.lengthSq()-e*e);if(b>=0)return Math.abs(e)-Math.sqrt(b);return Number.MAX_VALUE};THREE.CollisionSystem.__v1=new THREE.Vector3;THREE.CollisionSystem.__v2=new THREE.Vector3;THREE.CollisionSystem.__v3=new THREE.Vector3;THREE.CollisionSystem.__nr=new THREE.Vector3;THREE.CollisionSystem.__m=new THREE.Matrix4;
THREE.CollisionSystem.__r=new THREE.Ray;THREE.CollisionUtils={};THREE.CollisionUtils.MeshOBB=function(a){a.geometry.computeBoundingBox();var c=a.geometry.boundingBox,b=new THREE.Vector3(c.x[0],c.y[0],c.z[0]);c=new THREE.Vector3(c.x[1],c.y[1],c.z[1]);b=new THREE.BoxCollider(b,c);b.mesh=a;return b};THREE.CollisionUtils.MeshAABB=function(a){var c=THREE.CollisionUtils.MeshOBB(a);c.min.addSelf(a.position);c.max.addSelf(a.position);c.dynamic=!1;return c};
THREE.CollisionUtils.MeshColliderWBox=function(a){for(var c=a.geometry.vertices,b=c.length,e=a.geometry.faces,f=e.length,d=[],g=[],h=[],j=0;j<b;j++)d.push(new THREE.Vector3(c[j].position.x,c[j].position.y,c[j].position.z));for(j=0;j<f;j++){g.push(e[j].a,e[j].b,e[j].c);h.push(new THREE.Vector3(e[j].normal.x,e[j].normal.y,e[j].normal.z))}c=new THREE.MeshCollider(d,g,h,THREE.CollisionUtils.MeshOBB(a));c.mesh=a;return c};
/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */


if ( !window.requestAnimationFrame ) {

  window.requestAnimationFrame = ( function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

      window.setTimeout( callback, 1000 / 60 );

    };

  } )();

}
;
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */


Detector = {

  canvas : !! window.CanvasRenderingContext2D,
  webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
  workers : !! window.Worker,
  fileapi : window.File && window.FileReader && window.FileList && window.Blob,

  getWebGLErrorMessage : function () {

    var domElement = document.createElement( 'div' );

    domElement.style.fontFamily = 'monospace';
    domElement.style.fontSize = '13px';
    domElement.style.textAlign = 'center';
    domElement.style.background = '#eee';
    domElement.style.color = '#000';
    domElement.style.padding = '1em';
    domElement.style.width = '475px';
    domElement.style.margin = '5em auto 0';

    if ( ! this.webgl ) {

      domElement.innerHTML = window.WebGLRenderingContext ? [
        'Sorry, your graphics card doesn\'t support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>'
      ].join( '\n' ) : [
        'Sorry, your browser doesn\'t support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a><br/>',
        'Please try with',
        '<a href="http://www.google.com/chrome">Chrome</a>, ',
        '<a href="http://www.mozilla.com/en-US/firefox/new/">Firefox 4</a> or',
        '<a href="http://nightly.webkit.org/">Webkit Nightly (Mac)</a>'
      ].join( '\n' );

    }

    return domElement;

  },

  addGetWebGLMessage : function ( parameters ) {

    var parent, id, domElement;

    parameters = parameters || {};

    parent = parameters.parent !== undefined ? parameters.parent : document.body;
    id = parameters.id !== undefined ? parameters.id : 'oldie';

    domElement = Detector.getWebGLErrorMessage();
    domElement.id = id;

    parent.appendChild( domElement );

  }

};
// Tween.js - http://github.com/sole/tween.js
var TWEEN=TWEEN||function(){var a,e,c,d,f=[];return{start:function(g){c=setInterval(this.update,1E3/(g||60))},stop:function(){clearInterval(c)},add:function(g){f.push(g)},remove:function(g){a=f.indexOf(g);a!==-1&&f.splice(a,1)},update:function(){a=0;e=f.length;for(d=(new Date).getTime();a<e;)if(f[a].update(d))a++;else{f.splice(a,1);e--}}}}();
TWEEN.Tween=function(a){var e={},c={},d={},f=1E3,g=0,j=null,n=TWEEN.Easing.Linear.EaseNone,k=null,l=null,m=null;this.to=function(b,h){if(h!==null)f=h;for(var i in b)if(a[i]!==null)d[i]=b[i];return this};this.start=function(){TWEEN.add(this);j=(new Date).getTime()+g;for(var b in d)if(a[b]!==null){e[b]=a[b];c[b]=d[b]-a[b]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(b){g=b;return this};this.easing=function(b){n=b;return this};this.chain=function(b){k=b};this.onUpdate=
function(b){l=b;return this};this.onComplete=function(b){m=b;return this};this.update=function(b){var h,i;if(b<j)return true;b=(b-j)/f;b=b>1?1:b;i=n(b);for(h in c)a[h]=e[h]+c[h]*i;l!==null&&l.call(a,i);if(b==1){m!==null&&m.call(a);k!==null&&k.start();return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);return-(c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/d))};
TWEEN.Easing.Elastic.EaseOut=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);return c*Math.pow(2,-10*a)*Math.sin((a-e)*2*Math.PI/d)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);if((a*=2)<1)return-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/d);return c*Math.pow(2,-10*(a-=1))*Math.sin((a-e)*2*Math.PI/d)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};
/**
 * dat.globe Javascript WebGL Globe Toolkit
 * http://dataarts.github.com/dat.globe
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */


var DAT = DAT || {};

DAT.Globe = function(container, colorFn) {

  colorFn = colorFn || function(x) {
    var c = new THREE.Color();
    c.setHSV( ( 0.6 - ( x * 0.5 ) ), 1.0, 1.0 );
    return c;
  };

  var Shaders = {
    'earth' : {
      uniforms: {
        'texture': { type: 't', value: 0, texture: null }
      },
      vertexShader: [
        'varying vec3 vNormal;',
        'varying vec2 vUv;',
        'void main() {',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          'vNormal = normalize( normalMatrix * normal );',
          'vUv = uv;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform sampler2D texture;',
        'varying vec3 vNormal;',
        'varying vec2 vUv;',
        'void main() {',
          'vec3 diffuse = texture2D( texture, vUv ).xyz;',
          'float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );',
          'vec3 atmosphere = vec3( 1.0, 1.0, 1.0 ) * pow( intensity, 3.0 );',
          'gl_FragColor = vec4( diffuse + atmosphere, 1.0 );',
        '}'
      ].join('\n')
    },
    'atmosphere' : {
      uniforms: {},
      vertexShader: [
        'varying vec3 vNormal;',
        'void main() {',
          'vNormal = normalize( normalMatrix * normal );',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying vec3 vNormal;',
        'void main() {',
          'float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );',
          'gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;',
        '}'
      ].join('\n')
    }
  };

  var camera, scene, sceneAtmosphere, renderer, w, h;
  var vector, mesh, atmosphere, point;

  var overRenderer;

  var imgDir = '/assets/';

  var curZoomSpeed = 0;
  var zoomSpeed = 50;

  var mouse = { x: 0, y: 0 }, mouseOnDown = { x: 0, y: 0 };
  var rotation = { x: 0, y: 0 },
      target = { x: Math.PI*3/2, y: Math.PI / 6.0 },
      targetOnDown = { x: 0, y: 0 };

  var distance = 100000, distanceTarget = 100000;
  var padding = 40;
  var PI_HALF = Math.PI / 2;

  function init() {

    container.style.color = '#fff';
    container.style.font = '13px/20px Arial, sans-serif';

    var shader, uniforms, material;
    w = container.offsetWidth || window.innerWidth;
    h = container.offsetHeight || window.innerHeight;

    camera = new THREE.Camera(
        30, w / h, 1, 10000);
    camera.position.z = distance;

    vector = new THREE.Vector3();

    scene = new THREE.Scene();
    sceneAtmosphere = new THREE.Scene();

    var geometry = new THREE.Sphere(200, 40, 30);

    shader = Shaders['earth'];
    uniforms = THREE.UniformsUtils.clone(shader.uniforms);

    uniforms['texture'].texture = THREE.ImageUtils.loadTexture(imgDir+'world' +
        '.jpg');

    material = new THREE.MeshShaderMaterial({

          uniforms: uniforms,
          vertexShader: shader.vertexShader,
          fragmentShader: shader.fragmentShader

        });

    mesh = new THREE.Mesh(geometry, material);
    mesh.matrixAutoUpdate = false;
    scene.addObject(mesh);

    shader = Shaders['atmosphere'];
    uniforms = THREE.UniformsUtils.clone(shader.uniforms);

    material = new THREE.MeshShaderMaterial({

          uniforms: uniforms,
          vertexShader: shader.vertexShader,
          fragmentShader: shader.fragmentShader

        });

    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.1;
    mesh.flipSided = true;
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    sceneAtmosphere.addObject(mesh);

    geometry = new THREE.Cube(0.75, 0.75, 1, 1, 1, 1, null, false, { px: true,
          nx: true, py: true, ny: true, pz: false, nz: true});

    for (var i = 0; i < geometry.vertices.length; i++) {

      var vertex = geometry.vertices[i];
      vertex.position.z += 0.5;

    }

    point = new THREE.Mesh(geometry);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.autoClear = false;
    renderer.setClearColorHex(0x000000, 0.0);
    renderer.setSize(w, h);

    renderer.domElement.style.position = 'absolute';

    container.appendChild(renderer.domElement);

    container.addEventListener('mousedown', onMouseDown, false);

    container.addEventListener('mousewheel', onMouseWheel, false);

    document.addEventListener('keydown', onDocumentKeyDown, false);

    window.addEventListener('resize', onWindowResize, false);

    container.addEventListener('mouseover', function() {
      overRenderer = true;
    }, false);

    container.addEventListener('mouseout', function() {
      overRenderer = false;
    }, false);
  }

  addData = function(data, opts) {
    var lat, lng, size, color, i, step, colorFnWrapper;

    opts.animated = opts.animated || false;
    this.is_animated = opts.animated;
    opts.format = opts.format || 'magnitude'; // other option is 'legend'
    console.log(opts.format);
    if (opts.format === 'magnitude') {
      step = 3;
      colorFnWrapper = function(data, i) { return colorFn(data[i+2]); }
    } else if (opts.format === 'legend') {
      step = 4;
      colorFnWrapper = function(data, i) { return colorFn(data[i+3]); }
    } else {
      throw('error: format not supported: '+opts.format);
    }

    if (opts.animated) {
      if (this._baseGeometry === undefined) {
        this._baseGeometry = new THREE.Geometry();
        for (i = 0; i < data.length; i += step) {
          lat = data[i];
          lng = data[i + 1];
//        size = data[i + 2];
          color = colorFnWrapper(data,i);
          size = 0;
          addPoint(lat, lng, size, color, this._baseGeometry);
        }
      }
      if(this._morphTargetId === undefined) {
        this._morphTargetId = 0;
      } else {
        this._morphTargetId += 1;
      }
      opts.name = opts.name || 'morphTarget'+this._morphTargetId;
    }
    var subgeo = new THREE.Geometry();
    for (i = 0; i < data.length; i += step) {
      lat = data[i];
      lng = data[i + 1];
      color = colorFnWrapper(data,i);
      size = data[i + 2];
      size = size*200;
      addPoint(lat, lng, size, color, subgeo);
    }
    if (opts.animated) {
      this._baseGeometry.morphTargets.push({'name': opts.name, vertices: subgeo.vertices});
    } else {
      this._baseGeometry = subgeo;
    }

  };

  function createPoints() {
    if (this._baseGeometry !== undefined) {
      if (this.is_animated === false) {
        this.points = new THREE.Mesh(this._baseGeometry, new THREE.MeshBasicMaterial({
              color: 0xffffff,
              vertexColors: THREE.FaceColors,
              morphTargets: false
            }));
      } else {
        if (this._baseGeometry.morphTargets.length < 8) {
          console.log('t l',this._baseGeometry.morphTargets.length);
          var padding = 8-this._baseGeometry.morphTargets.length;
          console.log('padding', padding);
          for(var i=0; i<=padding; i++) {
            console.log('padding',i);
            this._baseGeometry.morphTargets.push({'name': 'morphPadding'+i, vertices: this._baseGeometry.vertices});
          }
        }
        this.points = new THREE.Mesh(this._baseGeometry, new THREE.MeshBasicMaterial({
              color: 0xffffff,
              vertexColors: THREE.FaceColors,
              morphTargets: true
            }));
      }
      scene.addObject(this.points);
    }
  }

  function addPoint(lat, lng, size, color, subgeo) {
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (180 - lng) * Math.PI / 180;

    point.position.x = 200 * Math.sin(phi) * Math.cos(theta);
    point.position.y = 200 * Math.cos(phi);
    point.position.z = 200 * Math.sin(phi) * Math.sin(theta);

    point.lookAt(mesh.position);

    point.scale.z = -size;
    point.updateMatrix();

    var i;
    for (i = 0; i < point.geometry.faces.length; i++) {

      point.geometry.faces[i].color = color;

    }

    GeometryUtils.merge(subgeo, point);
  }

  function onMouseDown(event) {
    event.preventDefault();

    container.addEventListener('mousemove', onMouseMove, false);
    container.addEventListener('mouseup', onMouseUp, false);
    container.addEventListener('mouseout', onMouseOut, false);

    mouseOnDown.x = - event.clientX;
    mouseOnDown.y = event.clientY;

    targetOnDown.x = target.x;
    targetOnDown.y = target.y;

    container.style.cursor = 'move';
  }

  function onMouseMove(event) {
    mouse.x = - event.clientX;
    mouse.y = event.clientY;

    var zoomDamp = distance/1000;

    target.x = targetOnDown.x + (mouse.x - mouseOnDown.x) * 0.005 * zoomDamp;
    target.y = targetOnDown.y + (mouse.y - mouseOnDown.y) * 0.005 * zoomDamp;

    target.y = target.y > PI_HALF ? PI_HALF : target.y;
    target.y = target.y < - PI_HALF ? - PI_HALF : target.y;
  }

  function onMouseUp(event) {
    container.removeEventListener('mousemove', onMouseMove, false);
    container.removeEventListener('mouseup', onMouseUp, false);
    container.removeEventListener('mouseout', onMouseOut, false);
    container.style.cursor = 'auto';
  }

  function onMouseOut(event) {
    container.removeEventListener('mousemove', onMouseMove, false);
    container.removeEventListener('mouseup', onMouseUp, false);
    container.removeEventListener('mouseout', onMouseOut, false);
  }

  function onMouseWheel(event) {
    event.preventDefault();
    if (overRenderer) {
      zoom(event.wheelDeltaY * 0.3);
    }
    return false;
  }

  function onDocumentKeyDown(event) {
    switch (event.keyCode) {
      case 38:
        zoom(100);
        event.preventDefault();
        break;
      case 40:
        zoom(-100);
        event.preventDefault();
        break;
    }
  }

  function onWindowResize( event ) {
    console.log('resize');
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function zoom(delta) {
    distanceTarget -= delta;
    distanceTarget = distanceTarget > 1000 ? 1000 : distanceTarget;
    distanceTarget = distanceTarget < 350 ? 350 : distanceTarget;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    zoom(curZoomSpeed);

    rotation.x += (target.x - rotation.x) * 0.1;
    rotation.y += (target.y - rotation.y) * 0.1;
    distance += (distanceTarget - distance) * 0.3;

    camera.position.x = distance * Math.sin(rotation.x) * Math.cos(rotation.y);
    camera.position.y = distance * Math.sin(rotation.y);
    camera.position.z = distance * Math.cos(rotation.x) * Math.cos(rotation.y);

    vector.copy(camera.position);

    renderer.clear();
    renderer.render(scene, camera);
    renderer.render(sceneAtmosphere, camera);
  }

  init();
  this.animate = animate;


  this.__defineGetter__('time', function() {
    return this._time || 0;
  });

  this.__defineSetter__('time', function(t) {
    var validMorphs = [];
    var morphDict = this.points.morphTargetDictionary;
    for(var k in morphDict) {
      if(k.indexOf('morphPadding') < 0) {
        validMorphs.push(morphDict[k]);
      }
    }
    validMorphs.sort();
    var l = validMorphs.length-1;
    var scaledt = t*l+1;
    var index = Math.floor(scaledt);
    for (i=0;i<validMorphs.length;i++) {
      this.points.morphTargetInfluences[validMorphs[i]] = 0;
    }
    var lastIndex = index - 1;
    var leftover = scaledt - index;
    if (lastIndex >= 0) {
      this.points.morphTargetInfluences[lastIndex] = 1 - leftover;
    }
    this.points.morphTargetInfluences[index] = leftover;
    this._time = t;
  });

  this.addData = addData;
  this.createPoints = createPoints;
  this.renderer = renderer;
  this.scene = scene;

  return this;

};

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */

(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<10
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.10.2",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( jQuery.support.ownLast ) {
			for ( key in obj ) {
				return core_hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {

	var all, a, input, select, fragment, opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Finish early in limited (non-browser) environments
	all = div.getElementsByTagName("*") || [];
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !a || !a.style || !all.length ) {
		return support;
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName("tbody").length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName("link").length;

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Make sure that element opacity exists
	// (IE uses filter instead)
	// Use a regex to work around a WebKit issue. See #5145
	support.opacity = /^0.5/.test( a.style.opacity );

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!a.style.cssFloat;

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone = document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Will be defined later
	support.inlineBlockNeedsLayout = false;
	support.shrinkWrapBlocks = false;
	support.pixelPosition = false;
	support.deleteExpando = true;
	support.noCloneEvent = true;
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: IE<9
	// Iteration over object's inherited properties before its own.
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior.
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})({});

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"applet": true,
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			data = null,
			i = 0,
			elem = this[0];

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( name.indexOf("data-") === 0 ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// Use proper attribute retrieval(#6932, #12072)
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var fn = jQuery.expr.attrHandle[ name ],
				ret = isXML ?
					undefined :
					/* jshint eqeqeq: false */
					(jQuery.expr.attrHandle[ name ] = undefined) !=
						getter( elem, name, isXML ) ?

						name.toLowerCase() :
						null;
			jQuery.expr.attrHandle[ name ] = fn;
			return ret;
		} :
		function( elem, name, isXML ) {
			return isXML ?
				undefined :
				elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};
	jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
		// Some attributes are constructed with empty-string values when not defined
		function( elem, name, isXML ) {
			var ret;
			return isXML ?
				undefined :
				(ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
		};
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ret.specified ?
				ret.value :
				undefined;
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = ret.push( cur );
					break;
				}
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});
jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Otherwise expose jQuery to the global object as usual
	window.jQuery = window.$ = jQuery;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

})( window );
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements boud jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params');
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      // making sure that all forms have actual up-to-date token(cached forms contain old one)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrf_param + '"]').val(csrf_token);
    });
  }

})( jQuery );
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/

if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el    = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')
    }

    $this.focus()

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element).on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('shown.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.hoverState = 'in'
    self.timeout    = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.hoverState = 'out'
    self.timeout    = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() { $tip.detach() }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//









;
