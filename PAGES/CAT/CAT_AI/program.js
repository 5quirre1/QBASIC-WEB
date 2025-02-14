async function __qbjs_run() {
/* static method variables: */ 
QB.start(); QB.setTypeMap({ GXPOSITION:[{ name: 'x', type: 'LONG' }, { name: 'y', type: 'LONG' }], GXDEVICEINPUT:[{ name: 'deviceId', type: 'INTEGER' }, { name: 'deviceType', type: 'INTEGER' }, { name: 'inputType', type: 'INTEGER' }, { name: 'inputId', type: 'INTEGER' }, { name: 'inputValue', type: 'INTEGER' }], FETCHRESPONSE:[{ name: 'ok', type: 'INTEGER' }, { name: 'status', type: 'INTEGER' }, { name: 'statusText', type: 'STRING' }, { name: 'text', type: 'STRING' }]});
    await GX.registerGameEvents(function(e){});
    QB.sub_Screen(0);

   QB.sub_Cls(undefined, undefined);
   var cat = QB.initArray([{l:0,u:2},{l:0,u:3}], 0);  /* SINGLE */ 
   QB.arrayValue(cat, [ 0 ,   0]).value =  " /\\_/\\ ";
   QB.arrayValue(cat, [ 0 ,   1]).value =  "( o.o ) ";
   QB.arrayValue(cat, [ 0 ,   2]).value =  " > ^ < ";
   QB.arrayValue(cat, [ 1 ,   0]).value =  " /\\_/\\ ";
   QB.arrayValue(cat, [ 1 ,   1]).value =  "( -.- ) ";
   QB.arrayValue(cat, [ 1 ,   2]).value =  " > ^ < ";
   QB.arrayValue(cat, [ 2 ,   0]).value =  " /\\_/\\ ";
   QB.arrayValue(cat, [ 2 ,   1]).value =  "( o.O ) ";
   QB.arrayValue(cat, [ 2 ,   2]).value =  " > ^ < ";
   var catHappy = QB.initArray([{l:0,u:0},{l:0,u:2}], 0);  /* SINGLE */ 
   QB.arrayValue(catHappy, [ 0 ,   0]).value =  " /\\_/\\ ";
   QB.arrayValue(catHappy, [ 0 ,   1]).value =  "( ^.^ ) ";
   QB.arrayValue(catHappy, [ 0 ,   2]).value =  " > ^ < ";
   LEFT_LIMIT =   1;
   RIGHT_LIMIT =   50;
   score =   0;
   catX =   25;
   catY =   10;
   snackX =  (QB.func_Int( QB.func_Rnd() * ( RIGHT_LIMIT -  LEFT_LIMIT +  1)))  +  LEFT_LIMIT;
   snackY =  (QB.func_Int( QB.func_Rnd() *  20))  +  1;
   var ___v9800032 = 0; ___l6951155: do { if (QB.halted()) { return; }___v9800032++;   if (___v9800032 % 100 == 0) { await QB.autoLimit(); }
      QB.sub_Cls(undefined, undefined);
      if ( catX ==   snackX &  catY ==   snackY ) {
         score =   score +  1;
         await QB.sub_Sound(  440 ,    0.2);
         var ___v5338731 = 0; ___l2439314: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v5338731++;   if (___v5338731 % 100 == 0) { await QB.autoLimit(); }
            QB.sub_Locate(  catY +  i ,    catX);
            await QB.sub_Print([QB.arrayValue(catHappy, [ 0 ,   i]).value]);
         } 
         await QB.sub_Sleep(  0.5);
         snackX =  (QB.func_Int( QB.func_Rnd() * ( RIGHT_LIMIT -  LEFT_LIMIT +  1)))  +  LEFT_LIMIT;
         snackY =  (QB.func_Int( QB.func_Rnd() *  20))  +  1;
      } else {
         var ___v9994146 = 0; ___l1063697: for ( i =  0 ;  i  <=  2;  i = i  + 1) { if (QB.halted()) { return; } ___v9994146++;   if (___v9994146 % 100 == 0) { await QB.autoLimit(); }
            QB.sub_Locate(  catY +  i ,    catX);
            await QB.sub_Print([QB.arrayValue(cat, [ score %  3 ,   i]).value]);
         } 
      }
      QB.sub_Locate(  1 ,    1);
      await QB.sub_Print(["Score: ",QB.PREVENT_NEWLINE,  score]);
      QB.sub_Locate(  snackY ,    snackX);
      await QB.sub_Print(["$"]);
      if ( snackX > catX &  catX < RIGHT_LIMIT ) {
         catX =   catX +  1;
      }
      if ( snackX < catX &  catX > LEFT_LIMIT ) {
         catX =   catX -  1;
      }
      if ( snackY > catY ) {
         catY =   catY +  1;
      }
      if ( snackY < catY ) {
         catY =   catY -  1;
      }
      await QB.sub_Sleep(  0.1);
   } while ((1));
QB.end();


}