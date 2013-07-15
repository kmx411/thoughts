Morris.Donut({
  element: 'people-donut',
  data: [
  { label: 'Ashish', value: 3554.0 },
  { label: 'Nick', value: 5085.0 },
  { label: 'Asim', value: 3524.0 },
  { label: 'Anton', value: 330.0 },
  { label: 'Robin', value: 724.0 },
  { label: 'Michelle', value: 669.0 },
  { label: 'Shak', value: 3818.0 },
  { label: 'Zain', value: 2396.0 },
  { label: 'Ashley', value: 345.0 },
  { label: 'Natasha', value: 175.0 },
  { label: 'Cindy', value: 175.0 },
  { label: 'Anum', value: 885.0 },
  { label: 'Max', value: 210.0 },
  { label: 'Fahad', value: 75.0 },
  { label: 'Zahra', value: 2799.0 },
  { label: 'Naheed', value: 285.0 },
  { label: 'Filza', value: 285.0 },
  { label: 'Sarah', value: 60.0 },
  { label: 'Nurin', value: 60.0 },
  { label: 'Raheem', value: 60.0 },
  { label: 'Alykhan', value: 60.0 },
  { label: 'Linda', value: 180.0 },
  { label: 'Val', value: 75.0 },
  { label: 'Kathy', value: 75.0 },
  { label: 'Roxy', value: 75.0 },
  { label: 'Mom', value: 1170.0 },
  { label: 'Harris', value: 329.0 },
  { label: 'Josh', value: 95.0 },
  { label: 'Lenka', value: 105.0 },
  { label: 'Carmen', value: 105.0 },
  { label: 'Omar', value: 1870.0 },
  { label: 'Dad', value: 1110.0 },
  { label: 'Azzra', value: 1290.0 },
  { label: 'Ezaan', value: 1541.0 },
  { label: 'Alia', value: 1290.0 },
  { label: 'Mebs', value: 1290.0 },
  { label: 'Kais', value: 645.0 },
  { label: 'Kassam', value: 1080.0 },
  { label: 'Aly', value: 360.0 },
  { label: 'Brandon', value: 187.0 },
  { label: 'Abid', value: 105.0 }
  ],
  formatter: function(y, data){ return y + ' minutes' }
});

Morris.Line({
  element: 'people-area',
  hideHover:true,
  data: [
  { y: '2013-06-3', z: 0, n: 480.0, s: 0, o: 0, a: 480.0 },
  { y: '2013-06-4', z: 0, n: 540.0, s: 265.0, o: 0, a: 450.0 },
  { y: '2013-06-5', z: 0, n: 940.0, s: 575.0, o: 0, a: 880.0 },
  { y: '2013-06-6', z: 0, n: 205.0, s: 345.0, o: 0, a: 0 },
  { y: '2013-06-7', z: 0, n: 30.0, s: 30.0, o: 0, a: 0 },
  { y: '2013-06-8', z: 120.0, n: 105.0, s: 0, o: 0, a: 0 },
  { y: '2013-06-9', z: 150.0, n: 90.0, s: 90.0, o: 0, a: 0 },
  { y: '2013-06-10', z: 0, n: 480.0, s: 389.0, o: 0, a: 480.0 },
  { y: '2013-06-11', z: 0, n: 141.0, s: 122.0, o: 0, a: 0 },
  { y: '2013-06-12', z: 0, n: 414.0, s: 0, o: 0, a: 414.0 },
  { y: '2013-06-13', z: 16.0, n: 0, s: 0, o: 0, a: 0 },
  { y: '2013-06-14', z: 182.0, n: 0, s: 0, o: 0, a: 0 },
  { y: '2013-06-15', z: 80.0, n: 0, s: 0, o: 0, a: 0 },
  { y: '2013-06-16', z: 80.0, n: 275.0, s: 293.0, o: 0, a: 0 },
  { y: '2013-06-17', z: 35.0, n: 0, s: 60.0, o: 0, a: 80.0 },
  { y: '2013-06-18', z: 10.0, n: 120.0, s: 120.0, o: 0, a: 0 },
  { y: '2013-06-19', z: 0, n: 120.0, s: 120.0, o: 0, a: 0 },
  { y: '2013-06-20', z: 0, n: 120.0, s: 0, o: 0, a: 120.0 },
  { y: '2013-06-21', z: 0, n: 0, s: 0, o: 0, a: 105.0 },
  { y: '2013-06-22', z: 26.0, n: 250.0, s: 250.0, o: 0, a: 0 },
  { y: '2013-06-23', z: 0, n: 505.0, s: 120.0, o: 0, a: 385.0 },
  { y: '2013-06-24', z: 0, n: 120.0, s: 65.0, o: 0, a: 80.0 },
  { y: '2013-06-25', z: 30.0, n: 90.0, s: 764.0, o: 0, a: 0 },
  { y: '2013-06-26', z: 0, n: 60.0, s: 60.0, o: 0, a: 0 },
  { y: '2013-06-27', z: 0, n: 0, s: 0, o: 685.0, a: 0 },
  { y: '2013-06-28', z: 930.0, n: 0, s: 0, o: 180.0, a: 0 },
  { y: '2013-06-29', z: 360.0, n: 0, s: 0, o: 360.0, a: 0 },
  { y: '2013-06-30', z: 420.0, n: 0, s: 0, o: 465.0, a: 0 },
  { y: '2013-07-1', z: 360.0, n: 0, s: 0, o: 180.0, a: 0 },
  { y: '2013-07-2', z: 0, n: 0, s: 0, o: 0, a: 0 },
  { y: '2013-07-3', z: 0, n: 0, s: 90.0, o: 0, a: 80.0 },
  { y: '2013-07-4', z: 0, n: 0, s: 0, o: 0, a: 0 },
  { y: '2013-07-5', z: 0, n: 0, s: 60.0, o: 0, a: 0 }
],
  xkey: 'y',
  ykeys: ['z', 'n', 's', 'o', 'a'],
  labels: ['Zahra', 'Nick', 'Shak', 'Omar', 'Ashish']
});

Morris.Donut({
  element: 'activity-donut',
  data: [
    { label: 'Education', value: 12372.0 },
    { label: 'Partying', value: 2683.0 },
    { label: 'Casual', value: 3962.0 },
    { label: 'Entertainment', value: 1861.0 },
    { label: 'Routine Tasks', value: 1704.0 },
    { label: 'Fitness', value: 650.0 },
    { label: 'Other', value: 879.0 }
  ],
  formatter: function(y, data){ return y + ' minutes' }
});

Morris.Donut({
  element: 'education-donut',
  data: [
  { label: 'Algorithms', value: 6244.0 },
  { label: 'Statistics', value: 2052.0 },
  { label: 'Combinatorics', value: 3093.0 },
  { label: 'Accounting', value: 1323.0 },
  { label: 'Law', value: 2542.0 }
  ],
  formatter: function(y, data){ return y + ' minutes' }
});

Morris.Bar({
  element: 'time_per_site',
  data: [
    { y: 'Facebook', t: 2161 },
    { y: 'Flash Cards Website', t: 732 },
    { y: 'YouTube', t: 157 },
    { y: 'CS Class Website', t: 83 },
    { y: 'Hacker News', t: 93 },
    { y: 'Google', t: 76 },
    { y: 'Wikipedia', t: 58 },
    { y: 'RapGenius', t: 51 },
    { y: 'Wolfram Alpha', t: 43 },
    { y: '9to5Mac', t: 38 },
    { y: 'Reddit', t: 21 }
  ],
  xkey: 'y',
  ykeys: ['t'],
  labels: ['Minutes Spent'],
  hideHover: true
});

Morris.Line({
  element: 'fb_studying',
  hideHover:true,
  data: [
  { y: '2013-06-5', s: 0, f:15 },
  { y: '2013-06-6', s: 0, f:103 },
  { y: '2013-06-7', s: 0, f:95 },
  { y: '2013-06-8', s: 0, f:11 },
  { y: '2013-06-9', s: 0, f: 115 },
  { y: '2013-06-10', s: 0, f: 146},
  { y: '2013-06-11', s: 0, f: 7},
  { y: '2013-06-12', s: 0, f: 45},
  { y: '2013-06-13', s: 0, f: 87},
  { y: '2013-06-14', s: 502.0, f: 104 },
  { y: '2013-06-15', s: 520.0, f: 106},
  { y: '2013-06-16', s: 530.0, f: 84},
  { y: '2013-06-17', s: 437.0, f: 99},
  { y: '2013-06-18', s: 280.0, f: 88},
  { y: '2013-06-19', s: 510.0, f: 134},
  { y: '2013-06-20', s: 570.0, f: 101},
  { y: '2013-06-21', s: 720.0, f: 75},
  { y: '2013-06-22', s: 378.0, f: 72},
  { y: '2013-06-23', s: 445.0, f: 70},
  { y: '2013-06-24', s: 455.0, f: 61},
  { y: '2013-06-25', s: 390.0, f: 88},
  { y: '2013-06-26', s: 0, f: 45},
  { y: '2013-06-27', s: 0, f: 126},
  { y: '2013-06-28', s: 0, f: 0},
  { y: '2013-06-29', s: 0, f: 5},
  { y: '2013-06-30', s: 0, f: 0},
  { y: '2013-07-1', s: 0, f: 0},
  { y: '2013-07-2', s: 0, f: 0},
  { y: '2013-07-3', s: 0, f: 0},
  { y: '2013-07-4', s: 40.0, f: 0},
  { y: '2013-07-5', s: 325.0, f: 15},
  { y: '2013-07-6', s: 492.0, f: 103}
],
  xkey: 'y',
  ykeys: ['f', 's'],
  labels: ['Facebook', 'Studying']
});
