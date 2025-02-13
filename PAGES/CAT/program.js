async function __qbjs_run() {
/* static method variables: */ 
QB.start(); QB.setTypeMap({ GXPOSITION:[{ name: 'x', type: 'LONG' }, { name: 'y', type: 'LONG' }], GXDEVICEINPUT:[{ name: 'deviceId', type: 'INTEGER' }, { name: 'deviceType', type: 'INTEGER' }, { name: 'inputType', type: 'INTEGER' }, { name: 'inputId', type: 'INTEGER' }, { name: 'inputValue', type: 'INTEGER' }], FETCHRESPONSE:[{ name: 'ok', type: 'INTEGER' }, { name: 'status', type: 'INTEGER' }, { name: 'statusText', type: 'STRING' }, { name: 'text', type: 'STRING' }]});
    await GX.registerGameEvents(function(e){});
    QB.sub_Screen(0);

   QB.sub_Cls(undefined, undefined);
   QB.sub_Screen(  0);
   var cat = QB.initArray([{l:0,u:3},{l:0,u:3}], 0);  /* SINGLE */ 
   QB.arrayValue(cat, [ 0 ,   0]).value =  " /\\_/\\  ";
   QB.arrayValue(cat, [ 0 ,   1]).value =  "( o.o ) ";
   QB.arrayValue(cat, [ 0 ,   2]).value =  " > ^ <  ";
   QB.arrayValue(cat, [ 1 ,   0]).value =  " /\\_/\\  ";
   QB.arrayValue(cat, [ 1 ,   1]).value =  "( -.- ) ";
   QB.arrayValue(cat, [ 1 ,   2]).value =  " > ^ <  ";
   QB.arrayValue(cat, [ 2 ,   0]).value =  " /\\_/\\  ";
   QB.arrayValue(cat, [ 2 ,   1]).value =  "( o.O ) ";
   QB.arrayValue(cat, [ 2 ,   2]).value =  " > ^ <  ";
   LEFT_LIMIT =   1;
   RIGHT_LIMIT =   50;
   var ___v5334240 = 0; ___l7055475: for ( blink =  1 ;  blink  <=  4;  blink = blink  + 1) { if (QB.halted()) { return; } ___v5334240++;   if (___v5334240 % 100 == 0) { await QB.autoLimit(); }
      QB.sub_Cls(undefined, undefined);
      var ___v2895625 = 0; ___l5795186: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v2895625++;   if (___v2895625 % 100 == 0) { await QB.autoLimit(); }
         QB.sub_Locate(  10 +  i ,    LEFT_LIMIT);
         await QB.sub_Print([QB.arrayValue(cat, [( blink %  2)  ,   i]).value]);
      } 
      await QB.sub_Sleep(  1);
   } 
   QB.sub_Cls(undefined, undefined);
   var ___v7747401 = 0; ___l3019480: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v7747401++;   if (___v7747401 % 100 == 0) { await QB.autoLimit(); }
      QB.sub_Locate(  10 +  i ,    LEFT_LIMIT);
      await QB.sub_Print([QB.arrayValue(cat, [ 2 ,   i]).value]);
   } 
   await QB.sub_Sleep(  1);
   var ___v7607236 = 0; ___l140176: do { if (QB.halted()) { return; }___v7607236++;   if (___v7607236 % 100 == 0) { await QB.autoLimit(); }
      var ___v7090379 = 0; ___l8144900: for ( x =  LEFT_LIMIT ;  x  <=  RIGHT_LIMIT;  x = x  + 1) { if (QB.halted()) { return; } ___v7090379++;   if (___v7090379 % 100 == 0) { await QB.autoLimit(); }
         QB.sub_Cls(undefined, undefined);
         var ___v4140327 = 0; ___l453528: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v4140327++;   if (___v4140327 % 100 == 0) { await QB.autoLimit(); }
            QB.sub_Locate(  10 +  i ,    x);
            await QB.sub_Print([QB.arrayValue(cat, [ x %  2 ,   i]).value]);
         } 
         await QB.sub_Sleep(  0.8);
         if (QB.func_InKey() !=  ""  ) {
            QB.halt(); return;
         }
      } 
      var ___v7904800 = 0; ___l8626193: for ( x =  RIGHT_LIMIT ;  x  >=  LEFT_LIMIT ;  x = x  +  - 1) { if (QB.halted()) { return; } ___v7904800++;   if (___v7904800 % 100 == 0) { await QB.autoLimit(); }
         QB.sub_Cls(undefined, undefined);
         var ___v9619532 = 0; ___l3735362: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v9619532++;   if (___v9619532 % 100 == 0) { await QB.autoLimit(); }
            QB.sub_Locate(  10 +  i ,    x);
            await QB.sub_Print([QB.arrayValue(cat, [( x %  2)  +  1 ,   i]).value]);
         } 
         await QB.sub_Sleep(  0.8);
         if (QB.func_InKey() !=  ""  ) {
            QB.halt(); return;
         }
      } 
      QB.sub_Locate(  9 ,    5);
      await QB.sub_Print(["meow!"]);
      var ___v562369 = 0; ___l8714458: for ( freq =  700 ;  freq  <=  1000 ;  freq = freq  +  60) { if (QB.halted()) { return; } ___v562369++;   if (___v562369 % 100 == 0) { await QB.autoLimit(); }
         await QB.sub_Sound(  freq ,    2);
      } 
      var ___v3640187 = 0; ___l9495566: for ( freq =  1000 ;  freq  >=  700 ;  freq = freq  +  - 60) { if (QB.halted()) { return; } ___v3640187++;   if (___v3640187 % 100 == 0) { await QB.autoLimit(); }
         await QB.sub_Sound(  freq ,    2);
      } 
   } while ((1));
QB.end();


}