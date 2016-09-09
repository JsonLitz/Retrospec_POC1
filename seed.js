var db = require('./models');

var entries =[
    {
        title: 'Big day Thurs',
        entry: 'Had an interview today',
    },
    {
        title: 'Best day ever!',
        entry: 'Free pizza at school',
    },
    {
        title: 'Park day',
        entry: 'Went to the park with school mates ',
    },
    {
        title: 'flat',
        entry: 'Flat tire',
    }
];

// db.Location.remove({}, function(err, location) {
//   if (err) {
//     console.log('Error occurred in remove', err);
//     return;
//   } else {
//     console.log('removed all locations');
//
//     db.Location.create(locations, function(err, newLocations){
//       if (err) {
//          console.log('err', err);
//       }
//       console.log("created " +  newLocations + " locations");
//
//       process.exit();
//     });
//   }
//
//
//
// });
