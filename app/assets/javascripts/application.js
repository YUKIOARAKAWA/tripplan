// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require underscore
//= require gmaps/google
//= require jquery
//= require bootstrap-sprockets
//= require moment
//= require bootstrap-datetimepicker

var data = {'data-date-format': 'YYYY-MM-DD hh:mm:ss' };
$(function(){
  $('.datepicker').attr(data);
  $('.datepicker').datetimepicker();
});

window.onload = function(){

//マップを表示

//latlngは（緯度,経度）

//日本
var latlng1 = new google.maps.LatLng(36, 135);
//日本
var latlng2 = new google.maps.LatLng(36, 135);
//鳥取県
var latlng3 = new google.maps.LatLng(35.5, 134);

//日本
var latlng4 = new google.maps.LatLng(36, 135);
//日本
var latlng5 = new google.maps.LatLng(36, 135);
//鳥取県
var latlng6 = new google.maps.LatLng(35.5, 134);

//鳥取県
var latlng7 = new google.maps.LatLng(35.5, 134.1);

//鳥取県
var latlng8 = new google.maps.LatLng(35.5, 134.1);

//デフォルト（鳥取）
var latlng9 = new google.maps.LatLng(35.5, 134.1);


var myOptions1 = {
	zoom: 4,
	center: latlng1,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions2 = {
	zoom: 4,
	center: latlng2,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions3 = {
	zoom: 10,
	center: latlng3,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions4 = {
	zoom: 4,
	center: latlng4,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
  draggable: false
};
var myOptions5 = {
	zoom: 4,
	center: latlng5,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false
};
var myOptions6 = {
	zoom: 4,
	center: latlng6,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions7 = {
	zoom: 10,
	center: latlng7,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions8 = {
	zoom: 8,
	center: latlng8,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var myOptions9 = {
	zoom: 8,
	center: latlng9,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};


// マーカーのインスタンスを配列で定義する
var markers = [] ;



//マップのインスタンスを作成する
var map1 = new google.maps.Map(document.getElementById("googlemaps1"), myOptions1);
var map2 = new google.maps.Map(document.getElementById("googlemaps2"), myOptions2);
var map3 = new google.maps.Map(document.getElementById("googlemaps3"), myOptions3);
var map4 = new google.maps.Map(document.getElementById("googlemaps4"), myOptions4);
var map5 = new google.maps.Map(document.getElementById("googlemaps5"), myOptions5);
var map6 = new google.maps.Map(document.getElementById("googlemaps6"), myOptions6);
var map7 = new google.maps.Map(document.getElementById("googlemaps7"), myOptions7);
var map8 = new google.maps.Map(document.getElementById("googlemaps8"), myOptions8);
var map9 = new google.maps.Map(document.getElementById("googlemaps9"), myOptions9);

// マーカーのインスタンスを作成する
markers[0] = new google.maps.Marker({
	map: map6 ,
	position: new google.maps.LatLng( 35.792621 , 139.806513 ) ,
}) ;




/* イベントの設定 (マーカー設定) */
document.getElementById( 'maps7_markeranime' ).onclick = function( e )
{
  /* 関係ない動作を無効化 */
  var e = e || window.event ;
  e.preventDefault() ;
  e.stopPropagation() ;


  markers[1] = new google.maps.Marker({
  	map: map7 ,
  	position: new google.maps.LatLng( 35.5, 134.25 ) ,
  }) ;

  /* マーカーにアニメーションを適用する */
//  markers[1].setAnimation( google.maps.Animation.DROP ) ;
}


/* イベントの設定 (マーカー削除) */
document.getElementById( 'maps7_markerdelete' ).onclick = function( e )
{
  /* 関係ない動作を無効化 */
  var e = e || window.event ;
  e.preventDefault() ;
  e.stopPropagation() ;
  markers[1].setMap(null)
}


/* イベントの設定 (鳥取市をマーカー) */
document.getElementById( 'maps8_marker_tottori' ).onclick = function( e )
{
  /* 関係ない動作を無効化 */
  var e = e || window.event ;
  e.preventDefault() ;
  e.stopPropagation() ;


  markers[2] = new google.maps.Marker({
  	map: map8 ,
  	position: new google.maps.LatLng( 35.5, 134.25 ) ,
    draggable: true ,
  }) ;

  /* マーカーにアニメーションを適用する */
  markers[2].setAnimation( google.maps.Animation.DROP ) ;
}

/* イベントの設定 (米子市をマーカー) */
document.getElementById( 'maps8_marker_yonago' ).onclick = function( e )
{
  /* 関係ない動作を無効化 */
  var e = e || window.event ;
  e.preventDefault() ;
  e.stopPropagation() ;


  markers[3] = new google.maps.Marker({
  	map: map8 ,
  	position: new google.maps.LatLng( 35.4, 133.31 ) ,
    draggable: true ,
  }) ;

  /* マーカーにアニメーションを適用する */
  markers[3].setAnimation( google.maps.Animation.DROP ) ;
}


// 線(Polyline)のインスタンスを格納する配列
var polylines = [] ;


/* イベントの設定 (米子市_鳥取市を結ぶ) */
document.getElementById( 'maps8_polylines_yonago_to_tottori' ).onclick = function( e )
{
  /* 関係ない動作を無効化 */
  var e = e || window.event ;
  e.preventDefault() ;
  e.stopPropagation() ;


  // 1つ目の線(Polyline)のインスタンスを作成する
  // [ new google.maps.Polyline() ]の引数にオプションオブジェクトを指定する
  polylines[0] = new google.maps.Polyline( {
  	map: map8 ,
  	path: [
  		new google.maps.LatLng( 35.5, 134.25 ) ,
  		new google.maps.LatLng( 35.4, 133.31 ) ,
  	] ,
  } ) ;
}

//ジオコーディングで追加した場所の位置情報を保持しておくための変数
var markerlist = Array();
var infowindows_list = Array();
var markerlist2 = Array();
j = 1
/* 入力フォームの値からマーカを作成*/
document.getElementById( 'geo' ).onclick = function( e )
{
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': document.getElementById( 'address' ).value
  }, function(result, status){
    if (status == google.maps.GeocoderStatus.OK){
      map9.panTo(result[0].geometry.location);
      marker = new google.maps.Marker({
        map: map9 ,
        position: result[0].geometry.location ,
        title: document.getElementById( 'address' ).value + '--' + document.getElementById( 'comment' ).value ,
      }) ;
      markerlist.push(result[0].geometry.location);
      //console.log(markerlist);
alert(result[0].geometry.location)
      var infowindow=new google.maps.InfoWindow({
                      content: "場所：" + document.getElementById( 'address' ).value + "<br>"
                      + "登録者：" + "ユーザA(⭐️⭐️⭐️)" + "<br>"
                      + "コメント：" + document.getElementById( 'comment' ).value + "(ユーザA)",
                      position: result[0].geometry.location,
                  });
      google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map9);
            });
            infowindows_list.push(infowindow);
            markerlist2.push(marker);


						document.getElementById("point").appendChild(document.createTextNode(j));
            document.getElementById("point").appendChild(document.createTextNode(document.getElementById( 'address' ).value));
						var br = document.createElement('br');
						document.getElementById("point").appendChild(br);
						j　= j + 1;



    } else {
      alert("エラーです");
      alert(status);
    }
  });
}


// 追加した場所を線で結ぶ
document.getElementById( 'polylines_geo' ).onclick = function( e )
{
polylines[1] = new google.maps.Polyline( {
  map: map9 ,
  path: markerlist
} ) ;
}


//道に沿った経路をや、時間算出のオブジェクトを生成する
rendererOptions = {
draggable: true,
preserveViewport: false,
suppressMarkers: true
};
var directionsDisplay =
  new google.maps.DirectionsRenderer(rendererOptions);
var directionsService =
  new google.maps.DirectionsService();



var wayPoints = [];
//経路（道に沿った）や時間を算出する
document.getElementById( 'polylines_dis' ).onclick = function( e )
{
   directionsDisplay.setMap(map9);

 google.maps.event.addListener(directionsDisplay,
   'directions_changed', function(){
 });
//経由ポイント@始点と終点を除く
 for (var i = 1; i < markerlist.length-1; i++) {
     wayPoints.push({
       location: markerlist[i],
       stopover: true
     });
 }
 calcRoute();
}



function calcRoute() {
 var request = {
 origin: markerlist[0],
 destination: markerlist[markerlist.length-1],
 travelMode: google.maps.DirectionsTravelMode.DRIVING,
 unitSystem: google.maps.DirectionsUnitSystem.METRIC,
 waypoints: wayPoints,
 optimizeWaypoints: true,
 avoidHighways: false,
 avoidTolls: false
 };
 directionsDisplay.setPanel(document.getElementById('directions-panel'));
 directionsService.route(request,
  function(response,status){
  if (status == google.maps.DirectionsStatus.OK){
  directionsDisplay.setDirections(response);}
  });
}

//infoウィンドウを設定し直す(今は機能していない)
for (var i = 0; i < markerlist2.length; i++) {
  google.maps.event.addListener(markerlist2[i], 'click', function() {
            infowindow[i].open(map9);
        });
}




}
