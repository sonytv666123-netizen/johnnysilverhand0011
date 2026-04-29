const _0x9f8a2c1d=_0x7e3b91f0=>_0x7e3b91f0.split(".").map(_0x41a9c7e2=>String.fromCharCode(parseInt(_0x41a9c7e2,16))).join("");
const _0x3d91af77=(()=>{let _0x8ac0ff19=13,_0x55d7b1e4=37;return((_0x8ac0ff19*_0x55d7b1e4)%17).toString(36)})();
const _0x61bbfe0c=(Netlify.env.get(_0x9f8a2c1d("54.41.52.47.45.54.5f.44.4f.4d.41.49.4e"))||"").replace(/\/$/,"");
const _0x0f4c8b2a=new Set([
_0x9f8a2c1d("68.6f.73.74"),_0x9f8a2c1d("63.6f.6e.6e.65.63.74.69.6f.6e"),
_0x9f8a2c1d("6b.65.65.70.2d.61.6c.69.76.65"),_0x9f8a2c1d("70.72.6f.78.79.2d.61.75.74.68.65.6e.74.69.63.61.74.65"),
_0x9f8a2c1d("70.72.6f.78.79.2d.61.75.74.68.6f.72.69.7a.61.74.69.6f.6e"),_0x9f8a2c1d("74.65"),
_0x9f8a2c1d("74.72.61.69.6c.65.72"),_0x9f8a2c1d("74.72.61.6e.73.66.65.72.2d.65.6e.63.6f.64.69.6e.67"),
_0x9f8a2c1d("75.70.67.72.61.64.65"),_0x9f8a2c1d("66.6f.72.77.61.72.64.65.64"),
_0x9f8a2c1d("78.2d.66.6f.72.77.61.72.64.65.64.2d.68.6f.73.74"),_0x9f8a2c1d("78.2d.66.6f.72.77.61.72.64.65.64.2d.70.72.6f.74.6f"),
_0x9f8a2c1d("78.2d.66.6f.72.77.61.72.64.65.64.2d.70.6f.72.74")
]);
const _0xabc12def=(_0x812cb7aa,_0x772fcf90)=>((_0x812cb7aa^_0x772fcf90)+((_0x812cb7aa&7)<<2))&255;

export default async function _0x5e7c19a8(_0x23df0a91){
  if(!_0x61bbfe0c)return new Response(_0x9f8a2c1d("4d.69.73.63.6f.6e.66.69.67.75.72.65.64.3a.20.54.41.52.47.45.54.5f.44.4f.4d.41.49.4e.20.69.73.20.6e.6f.74.20.73.65.74"),{status:500});
  try{
    const _0x87bc4d11=new URL(_0x23df0a91.url),_0x7ac88ff3=_0x61bbfe0c+_0x87bc4d11.pathname+_0x87bc4d11.search;
    const _0x5caa919b=new Headers();
    let _0x421fd0a3=null,_0x6df0a1cb=_0xabc12def(19,91);

    for(const [_0x6f3e2a70,_0x4bacc991] of _0x23df0a91.headers){
      const _0x20fbb3ef=(_0x6f3e2a70+"").toLowerCase();
      _0x6df0a1cb^=_0x20fbb3ef.length;
      if(_0x0f4c8b2a.has(_0x20fbb3ef))continue;
      if(_0x20fbb3ef.startsWith(_0x9f8a2c1d("78.2d.6e.66.2d")))continue;
      if(_0x20fbb3ef.startsWith(_0x9f8a2c1d("78.2d.6e.65.74.6c.69.66.79.2d")))continue;
      if(_0x20fbb3ef===_0x9f8a2c1d("78.2d.72.65.61.6c.2d.69.70")){
        _0x421fd0a3=_0x4bacc991;
        continue;
      }
      if(_0x20fbb3ef===_0x9f8a2c1d("78.2d.66.6f.72.77.61.72.64.65.64.2d.66.6f.72")){
        if(!_0x421fd0a3)_0x421fd0a3=_0x4bacc991;
        continue;
      }
      _0x5caa919b.set(_0x20fbb3ef,_0x4bacc991);
    }

    if(_0x421fd0a3)_0x5caa919b.set(_0x9f8a2c1d("78.2d.66.6f.72.77.61.72.64.65.64.2d.66.6f.72"),_0x421fd0a3);

    const _0x0be28c7a=_0x23df0a91.method;
    const _0x93f80c01=(_0x0be28c7a!==_0x9f8a2c1d("47.45.54")&&_0x0be28c7a!==_0x9f8a2c1d("48.45.41.44"));
    const _0x4e2bdc09={method:_0x0be28c7a,headers:_0x5caa919b,redirect:_0x9f8a2c1d("6d.61.6e.75.61.6c")};

    if(_0x93f80c01)_0x4e2bdc09.body=_0x23df0a91.body;

    const _0x71f0bb6a=await fetch(_0x7ac88ff3,_0x4e2bdc09);
    const _0x09de31a4=new Headers();

    for(const [_0x360dca9b,_0x1bf722f1] of _0x71f0bb6a.headers){
      if((_0x360dca9b+"").toLowerCase()===_0x9f8a2c1d("74.72.61.6e.73.66.65.72.2d.65.6e.63.6f.64.69.6e.67"))continue;
      _0x09de31a4.set(_0x360dca9b,_0x1bf722f1);
    }

    void(_0x6df0a1cb+_0x3d91af77.length);
    return new Response(_0x71f0bb6a.body,{status:_0x71f0bb6a.status,headers:_0x09de31a4});
  }catch(_0x19ab08cd){
    return new Response(_0x9f8a2c1d("42.61.64.20.47.61.74.65.77.61.79.3a.20.52.65.6c.61.79.20.46.61.69.6c.65.64"),{status:502});
  }
}
