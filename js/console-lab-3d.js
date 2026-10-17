/* PIXEL Hardware Lab • visualização WebGL original, sem dependências de rede.
   Modelo conceitual didático: NÃO representa o interior de um console comercial específico. */
const DEG = Math.PI / 180;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const mix = (a,b,t)=>a+(b-a)*t;
function mul(a,b) { const o=new Float32Array(16); for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)o[c*4+r]+=a[k*4+r]*b[c*4+k]; return o; }
const identity=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
function translate(x,y,z){const m=identity();m[12]=x;m[13]=y;m[14]=z;return m;}
function scale(x,y,z){const m=identity();m[0]=x;m[5]=y;m[10]=z;return m;}
function perspective(fovy,aspect,near,far){const f=1/Math.tan(fovy/2),o=new Float32Array(16);o[0]=f/aspect;o[5]=f;o[10]=(far+near)/(near-far);o[11]=-1;o[14]=(2*far*near)/(near-far);return o;}
function lookAt(eye,target){let z=[eye[0]-target[0],eye[1]-target[1],eye[2]-target[2]];let len=Math.hypot(...z);z=z.map(v=>v/len);let x=[z[2],0,-z[0]];len=Math.hypot(...x);x=x.map(v=>v/len);const y=[z[1]*x[2]-z[2]*x[1],z[2]*x[0]-z[0]*x[2],z[0]*x[1]-z[1]*x[0]];return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-x[0]*eye[0]-x[1]*eye[1]-x[2]*eye[2],-y[0]*eye[0]-y[1]*eye[1]-y[2]*eye[2],-z[0]*eye[0]-z[1]*eye[1]-z[2]*eye[2],1]);}
function cubeData(){let pos=[],norm=[];const sides=[[[1,0,0],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]]],[[-1,0,0],[[-.5,-.5,.5],[-.5,.5,.5],[-.5,.5,-.5],[-.5,-.5,-.5]]],[[0,1,0],[[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5],[.5,.5,-.5]]],[[0,-1,0],[[-.5,-.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5]]],[[0,0,1],[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]],[[0,0,-1],[[.5,-.5,-.5],[-.5,-.5,-.5],[-.5,.5,-.5],[.5,.5,-.5]]]];
  for(const [n,v] of sides) for(const i of [0,1,2,0,2,3]){pos.push(...v[i]);norm.push(...n)} return {pos,norm}; }
function cylinderData(steps=24){let pos=[],norm=[];for(let i=0;i<steps;i++){let a=i*Math.PI*2/steps,b=(i+1)*Math.PI*2/steps;const x=Math.cos(a)*.5,z=Math.sin(a)*.5,x2=Math.cos(b)*.5,z2=Math.sin(b)*.5;const tris=[[x,-.5,z],[x,.5,z],[x2,.5,z2],[x,-.5,z],[x2,.5,z2],[x2,-.5,z2]];for(const [xx,yy,zz]of tris){pos.push(xx,yy,zz);const l=Math.hypot(xx,zz);norm.push(xx/l,0,zz/l)}for(const y of [-.5,.5]){const v=y<0?[[0,y,0],[x2,y,z2],[x,y,z]]:[[0,y,0],[x,y,z],[x2,y,z2]];for(const a of v){pos.push(...a);norm.push(0,Math.sign(y),0)}}}return{pos,norm};}
const HEX={board:'#0c3c46',edge:'#072231',track:'#238391',gold:'#eac879',silk:'#cbd5df',dark:'#111e2e',black:'#080f1b',metal:'#7f9fb1',steel:'#304c60',chip:'#132639',ram:'#164a52',gpu:'#182e48',audio:'#453148',storage:'#203f50',port:'#71869a',fan:'#112f3d',case:'#172a40',accent:'#53e4ff'};
function rgb(v){const h=v.startsWith('#')?v.slice(1):v;return [(parseInt(h.slice(0,2),16)||0)/255,(parseInt(h.slice(2,4),16)||0)/255,(parseInt(h.slice(4,6),16)||0)/255];}
function node(x,y,z,w,h,d,color,id=null,group='base',mesh='cube',opacity=1,emissive=0){return {x,y,z,w,h,d,color,id,group,mesh,opacity,emissive};}
function createPieces(){const p=[],add=(...args)=>p.push(node(...args));
  add(0,-.16,0,6.12,.32,4.45,HEX.case,null,'base');
  add(0,.025,0,5.76,.10,4.08,HEX.board,'board','base');
  add(0,.09,-2.08,6,.28,.16,HEX.steel,null,'base');add(0,.09,2.08,6,.24,.16,HEX.steel,null,'base');add(-2.95,.08,0,.18,.3,4.05,HEX.steel,null,'base');add(2.95,.08,0,.18,.3,4.05,HEX.steel,null,'base');
  // Trilhas de cobre: circuitos conectados à CPU, GPU, RAM, disco e áudio.
  const paths=[[-.8,-.4,1.2,-1.2],[0,.6,1.5,.25],[-.8,-.4,-1.95,1.05],[.4,.8,1.95,1.15],[-.8,-.45,.95,-.15],[-.8,-.4,1.85,-1.53]];
  for(const [x,z,ex,ez] of paths){for(let j=0;j<3;j++){const q=j*.057;add((x+ex)/2+q,.09,z+q,Math.abs(x-ex)+.08,.013,.018,'#2f9ea9',null,'base','cube',1,.09);add(ex+q,.09,(z+ez)/2+q,.018,.013,Math.abs(z-ez)+.02,'#2f9ea9',null,'base','cube',1,.09);}}
  for(let i=0;i<78;i++){const x=((i*37)%111)/111*5.4-2.7,z=((i*47)%103)/103*3.75-1.875;if(Math.abs(x+.8)<.9&&Math.abs(z+.2)<.7)continue;add(x,.087,z,.033,.01,.033,i%5===0?'#e3bc64':'#85a4a7',null,'base');}
  // Processador: encapsulamento, substrato, núcleos e pinos.
  add(-.8,.18,-.45,1.25,.20,1.15,'#123b4b','cpu','cpu');add(-.8,.31,-.45,1.0,.12,.90,'#b5c6ce','cpu','cpu');add(-.8,.385,-.45,.65,.03,.55,'#4e9ba5','cpu','cpu', 'cube',1,.12);
  for(let i=0;i<11;i++){let t=-.60+i*.12;add(-.8+t,.22,-1.07,.047,.12,.06,'#d4b777',null,'cpu');add(-.8+t,.22,.17,.047,.12,.06,'#d4b777',null,'cpu');add(-1.45,.22,-.45+t,.06,.12,.05,'#d4b777',null,'cpu');add(-.15,.22,-.45+t,.06,.12,.05,'#d4b777',null,'cpu');}
  // Dissipador em aletas + ventoinha separáveis.
  add(-.8,.46,-.45,1.47,.12,1.28,'#6e8796',null,'heatsink');for(let i=0;i<12;i++)add(-1.45+i*.116,.61,-.45,.062,.29,1.2,'#91aabb',null,'heatsink');
  add(-.8,.87,-.45,1.55,.16,1.4,'#182e3d',null,'fan');add(-.8,.99,-.45,.92,.11,.92,'#2c5165',null,'fan','cylinder');add(-.8,1.06,-.45,.23,.06,.23,'#54e6ff',null,'fan','cylinder',1,.35);
  for(let i=0;i<7;i++){const a=i*Math.PI*2/7,x=-.8+Math.cos(a)*.34,z=-.45+Math.sin(a)*.34;add(x,1.04,z,.22,.045,.12,'#7899a8',null,'fan');}
  // GPU e controlador de vídeo.
  add(.5,.16,1.02,1.5,.17,1.05,'#1b3b5d','gpu','gpu');add(.5,.28,1.02,1.02,.10,.68,'#253e58','gpu','gpu');add(.5,.35,1.02,.55,.04,.35,'#54b6cc','gpu','gpu','cube',1,.18);
  for(let i=0;i<10;i++){const v=-.64+i*.14;add(.5+v,.15,.43,.075,.08,.07,'#b9a375',null,'gpu');add(.5+v,.15,1.60,.075,.08,.07,'#b9a375',null,'gpu');}
  // RAM com dois módulos em conectores.
  for(let j=0;j<2;j++){const z=-1.42+j*.48;add(1.38,.16,z,2.15,.15,.3,'#1d6260','ram','ram');add(1.38,.25,z,1.94,.06,.19,'#1b414e','ram','ram');for(let i=0;i<8;i++)add(.54+i*.24,.29,z,.15,.04,.16,'#132736',null,'ram');for(let i=0;i<12;i++)add(.36+i*.18,.09,z+.16,.055,.03,.05,'#e5c781',null,'ram');}
  // Armazenamento SSD / interface de mídia.
  add(1.78,.16,.55,1.55,.14,.72,'#1e4b5a','storage','storage');add(1.78,.25,.55,1.34,.05,.53,'#20363d',null,'storage');for(let i=0;i<4;i++)add(1.25+i*.34,.29,.55,.24,.03,.34,'#142331',null,'storage');
  add(2.1,.14,1.42,1.05,.22,.66,'#304e69','media','media');add(2.1,.265,1.42,.88,.05,.46,'#627e90',null,'media');
  // Áudio, interface do controle, portas metálicas.
  add(-1.87,.19,.98,.78,.23,.78,'#372c49','audio','audio');add(-1.87,.325,.98,.54,.045,.52,'#6d5079',null,'audio');
  for(let i=0;i<3;i++)add(-2.68,.27,.65+i*.49,.43,.31,.28,'#617b8e','inputs','inputs');
  for(let i=0;i<2;i++)add(-2.45,.18,-1.43+i*.4,.31,.32,.25,'#b6bfbd',null,'base','cylinder');
  for(let i=0;i<14;i++){const x=-2.45+(i%7)*.32,z=-1.78+Math.floor(i/7)*.38;add(x,.21,z,.115,.25,.12,'#455f6c',null,'base','cylinder');}
  for(let i=0;i<7;i++){add(2.87,.23,-1.7+i*.53,.22,.31,.25,'#889eaf',null,'inputs');add(2.99,.23,-1.7+i*.53,.03,.13,.16,'#071a2b',null,'inputs');}
  // Carcaça com janela visual, moldura e tampa suspensa no modo desmontado.
  add(0,.12,-2.18,6.46,.56,.20,'#192c44',null,'shell');add(0,.12,2.18,6.46,.56,.20,'#192c44',null,'shell');add(-3.13,.12,0,.20,.56,4.54,'#192c44',null,'shell');add(3.13,.12,0,.20,.56,4.54,'#192c44',null,'shell');
  add(0,1.11,-2.12,6.52,.16,.24,'#294258',null,'lid');add(0,1.11,2.12,6.52,.16,.24,'#294258',null,'lid');add(-3.16,1.11,0,.24,.16,4.35,'#294258',null,'lid');add(3.16,1.11,0,.24,.16,4.35,'#294258',null,'lid');
  add(0,1.09,0,5.86,.045,3.80,'#5e8298',null,'glass','cube',.16);
  return p;
}

// Renderizador alternativo 3D via Canvas 2D: mantém rotação, zoom, seleção e desmontagem
// nos dispositivos que desabilitam WebGL (incluindo determinados navegadores corporativos).
function createSoftwareViewer(canvas,{onSelect=()=>{},onStatus=()=>{}}={}){
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return {available:false,setSelection(){},setExploded(){},reset(){},rotate(){},zoom(){},tourFocus(){},destroy(){},screenshot(){return null}};
 const parts=createPieces();const offsets={base:0,board:0,cpu:.12,gpu:.22,ram:.5,audio:.4,storage:.75,media:.67,inputs:.42,heatsink:1.62,fan:2.24,shell:.35,lid:3.15,glass:3.15};
 const centers={cpu:[-.8,.32,-.45],ram:[1.38,.23,-1.2],gpu:[.5,.27,1.02],audio:[-1.87,.25,.98],media:[2.1,.2,1.42],inputs:[-2.75,.25,1.17],storage:[1.78,.23,.55],cooling:[-.8,.86,-.45]};
 let az=.58,el=.84,dist=10.1,azTarget=.58,elTarget=.84,distTarget=10.1,exploded=.55,explodeTarget=.55,selected='cpu',active=true,dead=false,raf=0,last=0,cam=identity();let drag=null,moved=0,pinch=null;const pointers=new Map();
 const project=([x,y,z])=>{const w=cam[3]*x+cam[7]*y+cam[11]*z+cam[15];return [(cam[0]*x+cam[4]*y+cam[8]*z+cam[12])/w,(cam[1]*x+cam[5]*y+cam[9]*z+cam[13])/w,w]};
 function face(color,k,sel){const c=rgb(color);let r=Math.round(clamp(c[0]*255*k+(sel?12:0),0,255)),g=Math.round(clamp(c[1]*255*k+(sel?40:0),0,255)),b=Math.round(clamp(c[2]*255*k+(sel?48:0),0,255));return `rgb(${r},${g},${b})`}
 const faces=[[0,1,2,3,1.14],[4,5,6,7,.68],[0,1,5,4,.77],[1,2,6,5,.87],[2,3,7,6,.67],[3,0,4,7,.83]];
 function geometry(p){const a=p.x-p.w/2,b=p.x+p.w/2,l=p.z-p.d/2,r=p.z+p.d/2;const y=p.y+(offsets[p.group]||0)*exploded,t=y+p.h/2,d=y-p.h/2;return [[a,t,l],[b,t,l],[b,t,r],[a,t,r],[a,d,l],[b,d,l],[b,d,r],[a,d,r]]}
 function render(ms){if(dead)return;raf=requestAnimationFrame(render);if(!active||document.hidden)return;if(ms-last<32)return;const dt=Math.min((ms-last)/16.67||1,2.5);last=ms;let t=1-Math.pow(.84,dt);az=mix(az,azTarget,t);el=mix(el,elTarget,t);dist=mix(dist,distTarget,t);exploded=mix(exploded,explodeTarget,t);
  const dpr=Math.min(window.devicePixelRatio||1,1.35),width=Math.max(1,canvas.clientWidth),height=Math.max(1,canvas.clientHeight),tw=Math.round(width*dpr),th=Math.round(height*dpr);if(canvas.width!==tw||canvas.height!==th){canvas.width=tw;canvas.height=th}const eye=[Math.sin(az)*Math.cos(el)*dist,Math.sin(el)*dist,Math.cos(az)*Math.cos(el)*dist];cam=mul(perspective(39*DEG,tw/th,.05,100),lookAt(eye,[0,.55+exploded*.32,0]));ctx.clearRect(0,0,tw,th);
  const polys=[];
  for(const p of parts){if(p.opacity<.3)continue;const corners=geometry(p),proj=corners.map(project);if(proj.some(v=>v[2]<.05))continue;const hit=selected&&(p.id===selected||(selected==='cooling'&&['fan','heatsink'].includes(p.group)));
   for(let i=0;i<faces.length;i++){if(i===1)continue;const f=faces[i],points=f.slice(0,4).map(k=>proj[k]);const depth=points.reduce((a,v)=>a+v[2],0)/4;const fill=face(p.color,f[4],hit);polys.push({points,depth,fill,alpha:p.opacity,hit:!!hit,thin:p.h<.09});}
  }
  polys.sort((a,b)=>b.depth-a.depth);
  for(const f of polys){ctx.globalAlpha=f.alpha;ctx.fillStyle=f.fill;ctx.beginPath();f.points.forEach((point,i)=>{const x=(point[0]+1)*tw/2,y=(1-point[1])*th/2;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fill();if(f.hit){ctx.lineWidth=1.25*dpr;ctx.strokeStyle='#7eefff';ctx.stroke()}}
  ctx.globalAlpha=1;
  for(const btn of canvas.parentElement.querySelectorAll('[data-part-anchor]')){const id=btn.dataset.partAnchor,p=centers[id];if(!p)continue;const key=id==='cooling'?'heatsink':id,pp=project([p[0],p[1]+(offsets[key]||0)*exploded,p[2]]);btn.style.left=`${clamp((pp[0]+1)*50,7,93)}%`;btn.style.top=`${clamp((1-pp[1])*50,8,91)}%`;btn.classList.toggle('is-behind',pp[2]<0)}
 }
 raf=requestAnimationFrame(render);onStatus('Visualização 3D compatível ativa');
 function pick(x,y){const rect=canvas.getBoundingClientRect(),nx=(x-rect.left)/rect.width*2-1,ny=1-(y-rect.top)/rect.height*2;let result=null,min=.14;for(const [id,p] of Object.entries(centers)){const key=id==='cooling'?'heatsink':id,o=project([p[0],p[1]+(offsets[key]||0)*exploded,p[2]]),distance=Math.hypot((o[0]-nx)*rect.width/Math.max(rect.width,rect.height),o[1]-ny);if(o[2]>.05&&distance<min){min=distance;result=id}}return result}
 function down(e){canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY});moved=0;if(pointers.size===2){const p=[...pointers.values()];pinch={distance:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom:distTarget};drag=null}else drag={x:e.clientX,y:e.clientY,az:azTarget,el:elTarget}}
 function move(e){const p=pointers.get(e.pointerId);if(!p)return;p.x=e.clientX;p.y=e.clientY;moved=Math.max(moved,Math.hypot(p.x-p.sx,p.y-p.sy));if(pointers.size===2){const a=[...pointers.values()];distTarget=clamp(pinch.zoom*pinch.distance/Math.max(20,Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)),6.4,15);return}if(drag){azTarget=drag.az+(e.clientX-drag.x)*.008;elTarget=clamp(drag.el+(e.clientY-drag.y)*.006,.16,1.42)}}
 function up(e){if(pointers.has(e.pointerId)&&moved<12&&pointers.size===1){const id=pick(e.clientX,e.clientY);if(id)onSelect(id)}pointers.delete(e.pointerId);if(!pointers.size){drag=null;pinch=null}}
 function wheel(e){e.preventDefault();distTarget=clamp(distTarget+(e.deltaY>0?.65:-.65),6.4,15)}
 canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);canvas.addEventListener('wheel',wheel,{passive:false});let observer=null;if('IntersectionObserver'in window){observer=new IntersectionObserver(entries=>{active=entries[0]?.isIntersecting??true},{threshold:.01});observer.observe(canvas)}
 return {available:true,setSelection(id){selected=id},setExploded(value){explodeTarget=value?1:0},reset(){azTarget=.58;elTarget=.84;distTarget=10.1;explodeTarget=.55},rotate(dx,dy){azTarget+=dx;elTarget=clamp(elTarget+dy,.16,1.42)},zoom(d){distTarget=clamp(distTarget+d,6.4,15)},tourFocus(id){selected=id;explodeTarget=1;distTarget=id==='cooling'?7.7:8.3;azTarget=id==='audio'?-1.0:id==='ram'?.4:id==='storage'?1.15:.65;elTarget=.92},screenshot(){try{return canvas.toDataURL('image/png')}catch{return null}},destroy(){dead=true;cancelAnimationFrame(raf);observer?.disconnect();canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up);canvas.removeEventListener('wheel',wheel)}}
}

export function createHardwareViewer(canvas,{onSelect=()=>{},onFallback=()=>{},onStatus=()=>{}}={}){
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,depth:true,preserveDrawingBuffer:true}) || canvas.getContext('experimental-webgl');
  if(!gl)return createSoftwareViewer(canvas,{onSelect,onStatus});
  const vs=`attribute vec3 aPos;attribute vec3 aNormal;uniform mat4 uMvp;uniform mat4 uModel;varying vec3 vNormal;varying vec3 vPos;void main(){vec4 wp=uModel*vec4(aPos,1.);vPos=wp.xyz;vNormal=mat3(uModel)*aNormal;gl_Position=uMvp*vec4(aPos,1.);}`;
  const fs=`precision mediump float;varying vec3 vNormal;varying vec3 vPos;uniform vec3 uColor;uniform float uGlow;uniform float uAlpha;void main(){vec3 n=normalize(vNormal);vec3 light=normalize(vec3(-0.55,1.4,1.3));float d=max(dot(n,light),0.);float fill=max(dot(n,normalize(vec3(1.,.7,-1.))),0.);vec3 view=normalize(vec3(4.,5.,7.)-vPos);float spec=pow(max(dot(reflect(-light,n),view),0.),24.);float edge=pow(1.-max(abs(dot(n,view)),0.),2.);vec3 col=uColor*(.27+d*.74+fill*.26)+vec3(.52,.83,1.)*spec*.28+uColor*edge*.22+uColor*uGlow*.6;gl_FragColor=vec4(col,uAlpha);}`;
  const compile=(type,source)=>{let s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;};
  let prog;try{prog=gl.createProgram();gl.attachShader(prog,compile(gl.VERTEX_SHADER,vs));gl.attachShader(prog,compile(gl.FRAGMENT_SHADER,fs));gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(prog));}catch(e){console.warn('PIXEL WebGL',e);onFallback();return {setSelection(){},setExploded(){},reset(){},tourFocus(){},destroy(){},screenshot(){return null},available:false}}
  gl.useProgram(prog);
  const aPos=gl.getAttribLocation(prog,'aPos'),aNormal=gl.getAttribLocation(prog,'aNormal');const uMvp=gl.getUniformLocation(prog,'uMvp'),uModel=gl.getUniformLocation(prog,'uModel'),uColor=gl.getUniformLocation(prog,'uColor'),uGlow=gl.getUniformLocation(prog,'uGlow'),uAlpha=gl.getUniformLocation(prog,'uAlpha');
  function mesh(data){const p=gl.createBuffer(),n=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,p);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data.pos),gl.STATIC_DRAW);gl.bindBuffer(gl.ARRAY_BUFFER,n);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data.norm),gl.STATIC_DRAW);return {p,n,count:data.pos.length/3};}
  const meshes={cube:mesh(cubeData()),cylinder:mesh(cylinderData(22))};const pieces=createPieces();
  let az=.58,el=.84,dist=10.1,zoomTarget=10.1,azTarget=.58,elTarget=.84,exploded=.55,explodeTarget=.55,selected='cpu',active=true,deleted=false,raf=0,last=0,moved=0,drag=null,pinch=null,focused=null;
  const groupOffsets={base:0,board:0,cpu:.12,gpu:.22,ram:.5,audio:.4,storage:.75,media:.67,inputs:.42,heatsink:1.62,fan:2.24,shell:.35,lid:3.15,glass:3.15};
  const centers={cpu:[-.8,.32,-.45],ram:[1.38,.23,-1.2],gpu:[.5,.27,1.02],audio:[-1.87,.25,.98],media:[2.1,.2,1.42],inputs:[-2.75,.25,1.17],storage:[1.78,.23,.55],cooling:[-.8,.86,-.45]};
  const groupFor=id=>id==='cooling'?'heatsink':id;
  let viewport=identity();const getVP=()=>{const aspect=canvas.width/Math.max(canvas.height,1);const eye=[Math.sin(az)*Math.cos(el)*dist,Math.sin(el)*dist,Math.cos(az)*Math.cos(el)*dist];viewport=mul(perspective(39*DEG,aspect,.05,100),lookAt(eye,[0,.55+exploded*.32,0]));return viewport;};
  const projected=p=>{const a=viewport,x=p[0],y=p[1],z=p[2];const w=a[3]*x+a[7]*y+a[11]*z+a[15];return [(a[0]*x+a[4]*y+a[8]*z+a[12])/w,(a[1]*x+a[5]*y+a[9]*z+a[13])/w,w];};
  function drawPiece(n){const opacity=n.opacity??1;const isSelected=selected && (n.id===selected||(selected==='cooling'&&['heatsink','fan'].includes(n.group)));const y=n.y+(groupOffsets[n.group]||0)*exploded;const model=mul(translate(n.x,y,n.z),scale(n.w,n.h,n.d));const data=meshes[n.mesh]||meshes.cube;gl.bindBuffer(gl.ARRAY_BUFFER,data.p);gl.vertexAttribPointer(aPos,3,gl.FLOAT,false,0,0);gl.enableVertexAttribArray(aPos);gl.bindBuffer(gl.ARRAY_BUFFER,data.n);gl.vertexAttribPointer(aNormal,3,gl.FLOAT,false,0,0);gl.enableVertexAttribArray(aNormal);gl.uniformMatrix4fv(uModel,false,model);gl.uniformMatrix4fv(uMvp,false,mul(viewport,model));const color=rgb(n.color);if(isSelected){color[0]=mix(color[0],.24,.19);color[1]=mix(color[1],.92,.28);color[2]=mix(color[2],1,.28)}gl.uniform3fv(uColor,color);gl.uniform1f(uGlow,(n.emissive||0)+(isSelected?.25:0));gl.uniform1f(uAlpha,opacity);gl.drawArrays(gl.TRIANGLES,0,data.count);}
  function render(ms){if(deleted)return;raf=requestAnimationFrame(render);if(!active||document.hidden)return;const dt=Math.min((ms-last)/16.67||1,2);last=ms;const t=1-Math.pow(.84,dt);az=mix(az,azTarget,t);el=mix(el,elTarget,t);dist=mix(dist,zoomTarget,t);exploded=mix(exploded,explodeTarget,t);const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight),dpr=Math.min(window.devicePixelRatio||1,1.65);const tw=Math.round(w*dpr),th=Math.round(h*dpr);if(canvas.width!==tw||canvas.height!==th){canvas.width=tw;canvas.height=th;gl.viewport(0,0,tw,th)}gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);getVP();
    gl.disable(gl.BLEND);for(const part of pieces){if(part.opacity!==1)continue;drawPiece(part)}gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.depthMask(false);for(const part of pieces)if(part.opacity<1)drawPiece(part);gl.depthMask(true);gl.disable(gl.BLEND);
    // Posições em tela coerentes com a câmera para os atalhos táteis acessíveis.
    for(const button of canvas.parentElement.querySelectorAll('[data-part-anchor]')){const id=button.dataset.partAnchor,c=centers[id];if(!c)continue;const out=projected([c[0],c[1]+(groupOffsets[groupFor(id)]||0)*exploded,c[2]]);button.style.left=`${clamp((out[0]+1)*50,7,93)}%`;button.style.top=`${clamp((1-out[1])*50,8,91)}%`;button.classList.toggle('is-behind',out[2]<0)}
  }
  gl.enable(gl.DEPTH_TEST);raf=requestAnimationFrame(render);onStatus('Visualização tridimensional pronta');
  const host=canvas.parentElement;
  function pick(x,y){getVP();const rect=canvas.getBoundingClientRect(),nx=(x-rect.left)/rect.width*2-1,ny=1-(y-rect.top)/rect.height*2;let best=null,score=.13;for(const [id,p] of Object.entries(centers)){const project=projected([p[0],p[1]+(groupOffsets[groupFor(id)]||0)*exploded,p[2]]);if(project[2]<=0)continue;const sx=(project[0]-nx)*rect.width/Math.max(rect.width,rect.height),sy=project[1]-ny;const d=Math.hypot(sx,sy);if(d<score){score=d;best=id}}return best;}
  const pointers=new Map();function onDown(e){if(e.target!==canvas)return;canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY});moved=0;if(pointers.size===2){const p=[...pointers.values()];pinch={distance:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom:zoomTarget};drag=null}else drag={x:e.clientX,y:e.clientY,az:azTarget,el:elTarget}}
  function onMove(e){const p=pointers.get(e.pointerId);if(!p)return;p.x=e.clientX;p.y=e.clientY;moved=Math.max(moved,Math.hypot(p.x-p.sx,p.y-p.sy));if(pointers.size===2){const a=[...pointers.values()];zoomTarget=clamp(pinch.zoom*pinch.distance/Math.max(20,Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)),6.4,15);return}if(drag){azTarget=drag.az+(e.clientX-drag.x)*.008;elTarget=clamp(drag.el+(e.clientY-drag.y)*.006,.16,1.42)}}
  function onUp(e){if(pointers.has(e.pointerId)&&moved<12&&pointers.size===1){const hit=pick(e.clientX,e.clientY);if(hit)onSelect(hit)}pointers.delete(e.pointerId);if(!pointers.size){drag=null;pinch=null}}
  const onWheel=e=>{e.preventDefault();zoomTarget=clamp(zoomTarget+(e.deltaY>0?.65:-.65),6.4,15)};
  canvas.addEventListener('pointerdown',onDown);canvas.addEventListener('pointermove',onMove);canvas.addEventListener('pointerup',onUp);canvas.addEventListener('pointercancel',onUp);canvas.addEventListener('wheel',onWheel,{passive:false});
  let observer=null;if('IntersectionObserver'in window){observer=new IntersectionObserver(e=>{active=e[0]?.isIntersecting??true;},{threshold:.01});observer.observe(canvas)}
  const contextLost=e=>{e.preventDefault();active=false;onFallback();};canvas.addEventListener('webglcontextlost',contextLost);
  return {available:true,setSelection(id){selected=id;const c=centers[id];if(c){onStatus(`${id.toUpperCase()} selecionado`);}},setExploded(value){explodeTarget=value?1:0;onStatus(value?'Desmontagem iniciada':'Montagem iniciada')},reset(){azTarget=.58;elTarget=.84;zoomTarget=10.1;explodeTarget=.55;},rotate(dx,dy){azTarget+=dx;elTarget=clamp(elTarget+dy,.16,1.42)},zoom(delta){zoomTarget=clamp(zoomTarget+delta,6.4,15)},tourFocus(id){const c=centers[id];if(!c)return;selected=id;explodeTarget=1;zoomTarget=id==='cooling'?7.7:8.3;azTarget=id==='audio'?-1.0:id==='ram'?.4:id==='storage'?1.15:.65;elTarget=.92;},screenshot(){try{return canvas.toDataURL('image/png')}catch{return null}},destroy(){deleted=true;cancelAnimationFrame(raf);observer?.disconnect();canvas.removeEventListener('pointerdown',onDown);canvas.removeEventListener('pointermove',onMove);canvas.removeEventListener('pointerup',onUp);canvas.removeEventListener('pointercancel',onUp);canvas.removeEventListener('wheel',onWheel);canvas.removeEventListener('webglcontextlost',contextLost);Object.values(meshes).forEach(m=>{gl.deleteBuffer(m.p);gl.deleteBuffer(m.n)});gl.deleteProgram(prog);}};
}
