import componentTpl from './instagram-feed.component.html';

let instagramFeedComponent = {
  templateUrl: componentTpl,
  controller: InstagramFeedController,
  bindings: {}
};

function InstagramFeedController($scope, $log, $http, store) {
  'ngInject';

  //$log.debug('Hello from' + 'InstagramFeed' + 'Controller (component)!');
  $scope.instagurl = store.instagurl;

  var ig = {};
  ig.token = '4808193211.666e9d7.d0668e1290a0400eb6154ff5f6f46885';


  ig.init = function() {
    var args = {};
    args.userid = 4808193211;
    args.limit = 10;
    args.feedurl = 'https://api.instagram.com/v1/users/'+args.userid+'/media/recent/?access_token='+ig.token+'&count='+args.limit+'&callback=?';
    args.html = '';
    // PASS ARGS TO QUERY
    ig.query(args);
    //$log.debug('inside init');
    //$log.debug(args);
  };


  ig.query = function(args) {
    $http.get(args.feedurl)
    .then(function(response) {
      // PASS QUERY DATA TO BUILDER
      ig.build(response.data, args);
    }, function(response) {
      //$scope.data = response.data || 'Request failed';
    });
  };


  ig.build = function(response, args) {

    $scope.dump = response.data;
    //$log.debug($scope.dump);
    // angular.forEach(response.data, function (item) {
    //   if (item.caption) var caption = item.caption.text;
    //   var thumb = item.images.low_resolution.url;
    //   var img = item.images.standard_resolution.url;
    //   //get 1280 size photo [hack until avail in api]
    //   var hires = img.replace('s640x640', '1080x1080');
    //   args.html += '<a class="image" style="background-image: url('+thumb+');" data-img="'+hires+'">';
    //   if (caption) args.html += '<span class="caption">'+caption+'</span>';
    //   args.html += '</a>';
    // });

    // PASS TO OUTPUT
    //ig.output(args);
  }

  ig.output = function(args) {
    //$log.debug('inside output');
    //$log.debug(args);
    //args.container.html(args.html);
    //$scope.dump = args.html;
  }

  // ig.view = {
  //   viewer: $('.igviewer'),
  //   image: $('.igviewer img'),
  //   open: function(img) {
  //     ig.view.viewer.removeClass('hidden');
  //     ig.view.image.attr('src', img); 
  //   },
  //   close: function() {
  //     ig.view.viewer.addClass('hidden');
  //     ig.view.image.attr('src', ''); 
  //   }
  // }


ig.init();

}

export default instagramFeedComponent;
