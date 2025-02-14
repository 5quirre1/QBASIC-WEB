async function __qbjs_run() {
/* static method variables: */ 
QB.start(); QB.setTypeMap({ GXPOSITION:[{ name: 'x', type: 'LONG' }, { name: 'y', type: 'LONG' }], GXDEVICEINPUT:[{ name: 'deviceId', type: 'INTEGER' }, { name: 'deviceType', type: 'INTEGER' }, { name: 'inputType', type: 'INTEGER' }, { name: 'inputId', type: 'INTEGER' }, { name: 'inputValue', type: 'INTEGER' }], FETCHRESPONSE:[{ name: 'ok', type: 'INTEGER' }, { name: 'status', type: 'INTEGER' }, { name: 'statusText', type: 'STRING' }, { name: 'text', type: 'STRING' }]});
    await GX.registerGameEvents(function(e){});
    QB.sub_Screen(0);

   QB.sub_Screen(  12);
   QB.sub_Randomize(false, QB.func_Timer())
   var X = QB.initArray([{l:0,u:100}], 0);  /* SINGLE */ var Y = QB.initArray([{l:0,u:100}], 0);  /* SINGLE */ var Brightness = QB.initArray([{l:0,u:100}], 0);  /* SINGLE */ var Size = QB.initArray([{l:0,u:100}], 0);  /* SINGLE */ var TwinkleDelay = QB.initArray([{l:0,u:100}], 0);  /* SINGLE */ 
   var i = 0;  /* SINGLE */ var n = 0;  /* SINGLE */ var moonX = 0;  /* SINGLE */ var moonY = 0;  /* SINGLE */ var moonRadius = 0;  /* SINGLE */ 
   var ___v5334240 = 0; ___l7055475: for ( i=  1 ;  i <=  100;  i= i + 1) { if (QB.halted()) { return; } ___v5334240++;   if (___v5334240 % 100 == 0) { await QB.autoLimit(); }
      QB.arrayValue(X, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  640));
      QB.arrayValue(Y, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  480));
      QB.arrayValue(Brightness, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  15))  +  1;
      QB.arrayValue(Size, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  2))  +  1;
      QB.arrayValue(TwinkleDelay, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  50))  +  50;
   } 
   moonX =   500;
   moonY =   100;
   moonRadius =   40;
   var Lullaby = QB.initArray([{l:0,u:10}], 0);  /* SINGLE */ 
   QB.arrayValue(Lullaby, [ 1]).value =   131;
   QB.arrayValue(Lullaby, [ 2]).value =   147;
   QB.arrayValue(Lullaby, [ 3]).value =   165;
   QB.arrayValue(Lullaby, [ 4]).value =   147;
   QB.arrayValue(Lullaby, [ 5]).value =   131;
   QB.arrayValue(Lullaby, [ 6]).value =   98;
   QB.arrayValue(Lullaby, [ 7]).value =   131;
   QB.arrayValue(Lullaby, [ 8]).value =   147;
   QB.arrayValue(Lullaby, [ 9]).value =   165;
   QB.arrayValue(Lullaby, [ 10]).value =   131;
   lullabyIndex =   1;
   lullabyTimer =   0;
   var ___v2895625 = 0; ___l5795186: do { if (QB.halted()) { return; }___v2895625++;   if (___v2895625 % 100 == 0) { await QB.autoLimit(); }
      QB.sub_Color(  0);
      QB.sub_Paint(false,  0 ,   0,    0 ,   0);
      QB.sub_Circle(false,  moonX ,   moonY,    moonRadius ,   15);
      QB.sub_Paint(false,  moonX ,   moonY,    15 ,   15);
      QB.sub_Circle(false,  moonX -  15 ,   moonY -  10,    8 ,   7);
      QB.sub_Paint(false,  moonX -  15 ,   moonY -  10,    7 ,   7);
      QB.sub_Circle(false,  moonX +  20 ,   moonY +  15,    5 ,   7);
      QB.sub_Paint(false,  moonX +  20 ,   moonY +  15,    7 ,   7);
      var ___v7747401 = 0; ___l3019480: for ( i=  1 ;  i <=  100;  i= i + 1) { if (QB.halted()) { return; } ___v7747401++;   if (___v7747401 % 100 == 0) { await QB.autoLimit(); }
         QB.arrayValue(TwinkleDelay, [ i]).value =  QB.arrayValue(TwinkleDelay, [ i]).value  -  1;
         if (QB.arrayValue(TwinkleDelay, [ i]).value  <=  0 ) {
            QB.arrayValue(TwinkleDelay, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  50))  +  50;
            if ((QB.func_Int( QB.func_Rnd() *  3))  ==   0 ) {
               QB.arrayValue(Brightness, [ i]).value =  (QB.func_Int( QB.func_Rnd() *  15))  +  1;
            }
         }
         dx =  QB.arrayValue(X, [ i]).value  -  moonX;
         dy =  QB.arrayValue(Y, [ i]).value  -  moonY;
         distance =  (QB.func_Sqr(  dx *  dx +  dy *  dy));
         if ( distance > moonRadius) {
            QB.sub_Color( QB.arrayValue(Brightness, [ i]).value);
            if (QB.arrayValue(Size, [ i]).value  ==   1 ) {
               QB.sub_PSet(false, QB.arrayValue(X, [ i]).value  ,  QB.arrayValue(Y, [ i]).value, );
            } else {
               QB.sub_Circle(false, QB.arrayValue(X, [ i]).value  ,  QB.arrayValue(Y, [ i]).value,    1 ,  QB.arrayValue(Brightness, [ i]).value);
            }
         }
      } 
      lullabyTimer =   lullabyTimer +  1;
      if ( lullabyTimer > 50 ) {
         await QB.sub_Sound( QB.arrayValue(Lullaby, [ lullabyIndex]).value  ,    40);
         lullabyIndex =   lullabyIndex +  1;
         if ( lullabyIndex > 10 ) {
            lullabyIndex =   1;
         }
         lullabyTimer =   0;
      }
      var ___v7607236 = 0; ___l140176: for ( n=  1 ;  n <=  250;  n= n + 1) { if (QB.halted()) { return; } ___v7607236++;   if (___v7607236 % 100 == 0) { await QB.autoLimit(); }
      } 
      var ___v7090379 = 0; ___l8144900: for ( n=  1 ;  n <=  250;  n= n + 1) { if (QB.halted()) { return; } ___v7090379++;   if (___v7090379 % 100 == 0) { await QB.autoLimit(); }
      } 
   } while (!(QB.func_InKey() !=  ""))
QB.end();


}