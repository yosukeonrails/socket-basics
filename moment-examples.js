   

   var moment= require('moment');
   var now= moment();


//       console.log(now.format());
//       console.log(now.format('X'));
// console.log(now.valueOf());


 var timestamp = now.valueOf();

 var timesstampMoment= moment.utc(timestamp)


console.log(timesstampMoment.local().format('h:mm A MMM Do ddd YYYY'))

     //  console.log(now.format('h:mm A MMM Do ddd YYYY')); 
    
     // now.subtract(1, 'year');
     // console.log(now.format())

    